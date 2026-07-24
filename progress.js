/* ============================================================
   progress.js
   نظام النقاط + الستريك + تتبع تقدم الدروس
   مشترك بين HSK1 / HSK2 / أي مستوى تاني في التطبيق
   يُحفظ بالكامل في localStorage - مفيش حاجة سيرفر
   ============================================================ */

const STORAGE_KEY = "taallim_chinese_progress_v1";

/* ------------------------------------------------------------
   جدول النقاط الموحّد
   ------------------------------------------------------------ */
const POINTS_TABLE = {
  completeLesson: 20,
  quizCorrectAnswer: 5,
  quizPerfectScore: 15,
  dailyReviewCompleted: 10,
  readCultureCard: 5,
  cultureStreakWeek: 30,
  streakMilestone: { 3: 10, 7: 25, 14: 50, 30: 100 }
};

/* ------------------------------------------------------------
   الحالة الافتراضية لو أول مرة يفتح التطبيق
   ------------------------------------------------------------ */
function defaultState() {
  return {
    points: 0,
    completedLessons: [],          // ["HSK1-1", "HSK2-3", ...]
    lastCompletedByLevel: {},      // { "HSK2": 3 } آخر درس اتخلص في كل مستوى
    streak: { current: 0, longest: 0, lastActiveDate: null },
    cultureStreak: { current: 0, longest: 0, lastReadDate: null, readCards: [] },
    reviewQueue: {},                // { "v001": {...} }
    lastReviewSessionDate: null
  };
}

/* ------------------------------------------------------------
   تحميل / حفظ
   ------------------------------------------------------------ */
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed };
  } catch (e) {
    console.error("progress load error", e);
    return defaultState();
  }
}

function saveProgress(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("progress save error", e);
  }
}

/* ------------------------------------------------------------
   مساعد: تاريخ اليوم كنص ISO (بدون وقت)
   ------------------------------------------------------------ */
function todayStr() {
  return new Date().toISOString().split("T")[0];
}
function daysBetween(a, b) {
  const d1 = new Date(a), d2 = new Date(b);
  return Math.round((d2 - d1) / 86400000);
}

/* ------------------------------------------------------------
   تحديث الستريك العام (بيتنادى مرة كل ما المستخدم يخلص درس)
   ------------------------------------------------------------ */
function touchStreak(state) {
  const today = todayStr();
  const last = state.streak.lastActiveDate;

  if (last === today) {
    // خلص أكتر من درس النهارده، الستريك متاثرش
    return state;
  }

  if (!last) {
    state.streak.current = 1;
  } else {
    const diff = daysBetween(last, today);
    if (diff === 1) {
      state.streak.current += 1;
    } else if (diff > 1) {
      state.streak.current = 1; // انكسر الستريك
    }
  }

  state.streak.lastActiveDate = today;
  state.streak.longest = Math.max(state.streak.longest, state.streak.current);

  // بونص المراحل
  const milestone = POINTS_TABLE.streakMilestone[state.streak.current];
  if (milestone) state.points += milestone;

  return state;
}

/* ------------------------------------------------------------
   تحديث ستريك قراءة "الفكر الصيني"
   ------------------------------------------------------------ */
function touchCultureStreak(state, cardId) {
  const today = todayStr();
  const last = state.cultureStreak.lastReadDate;

  if (!state.cultureStreak.readCards.includes(cardId)) {
    state.cultureStreak.readCards.push(cardId);
    state.points += POINTS_TABLE.readCultureCard;
  }

  if (last === today) return state;

  if (!last) {
    state.cultureStreak.current = 1;
  } else {
    const diff = daysBetween(last, today);
    if (diff === 1) state.cultureStreak.current += 1;
    else if (diff > 1) state.cultureStreak.current = 1;
  }

  state.cultureStreak.lastReadDate = today;
  state.cultureStreak.longest = Math.max(state.cultureStreak.longest, state.cultureStreak.current);

  if (state.cultureStreak.current > 0 && state.cultureStreak.current % 7 === 0) {
    state.points += POINTS_TABLE.cultureStreakWeek;
  }

  return state;
}

/* ------------------------------------------------------------
   تسجيل إن درس اتخلص
   level: "HSK1" | "HSK2" ...
   lessonId: رقم الدرس (1, 2, 3...)
   quizScore: { correct, total } اختياري
   ------------------------------------------------------------ */
function completeLesson(level, lessonId, quizScore) {
  let state = loadProgress();
  const key = `${level}-${lessonId}`;

  const alreadyDone = state.completedLessons.includes(key);
  if (!alreadyDone) {
    state.completedLessons.push(key);
    state.points += POINTS_TABLE.completeLesson;
  }

  if (quizScore) {
    state.points += quizScore.correct * POINTS_TABLE.quizCorrectAnswer;
    if (quizScore.correct === quizScore.total) {
      state.points += POINTS_TABLE.quizPerfectScore;
    }
  }

  const currentLast = state.lastCompletedByLevel[level] || 0;
  if (lessonId > currentLast) {
    state.lastCompletedByLevel[level] = lessonId;
  }

  state = touchStreak(state);
  saveProgress(state);
  return state;
}

/* ------------------------------------------------------------
   تسجيل قراءة بطاقة "الفكر الصيني"
   ------------------------------------------------------------ */
function readCultureCard(cardId) {
  let state = loadProgress();
  state = touchCultureStreak(state, cardId);
  saveProgress(state);
  return state;
}

/* ------------------------------------------------------------
   حالة درس معيّن: locked / current / completed
   أول درس في المستوى دايمًا مفتوح، وبعد كده كل درس بيتفتح
   لما اللي قبله يتخلص
   ------------------------------------------------------------ */
function getLessonStatus(level, lessonId) {
  const state = loadProgress();
  const key = `${level}-${lessonId}`;

  if (state.completedLessons.includes(key)) return "completed";

  const lastDone = state.lastCompletedByLevel[level] || 0;
  if (lessonId === lastDone + 1) return "current";
  if (lessonId <= lastDone) return "completed"; // احتياطي
  return "locked";
}

/* ------------------------------------------------------------
   رقم أول درس "غير مكتمل" في المستوى - عشان زرار "استمر من هنا"
   ------------------------------------------------------------ */
function getNextLessonId(level, totalLessons) {
  const state = loadProgress();
  const lastDone = state.lastCompletedByLevel[level] || 0;
  return Math.min(lastDone + 1, totalLessons);
}

/* ------------------------------------------------------------
   نظام المراجعة بالتكرار المتباعد (Spaced Repetition)
   ------------------------------------------------------------ */
const REVIEW_INTERVALS = ["1d", "3d", "7d", "14d", "30d"];
const REVIEW_DAYS = { "1d": 1, "3d": 3, "7d": 7, "14d": 14, "30d": 30 };

/* رجّع كل الكلمات اللي مستحقة مراجعة النهارده من قايمة كلمات معينة
   allWords: [{id, hanzi, pinyin, meaning_ar, ...}, ...] */
function getDueWords(allWords) {
  const state = loadProgress();
  const today = todayStr();
  return allWords.filter(w => {
    const rec = state.reviewQueue[w.id];
    if (!rec) return true; // كلمة جديدة لسه ما اتراجعتش
    return rec.nextReview <= today;
  });
}

/* تسجيل نتيجة مراجعة كلمة واحدة (صح/غلط) وتحديد ميعاد المراجعة الجاية */
function recordWordReview(wordId, wasCorrect) {
  let state = loadProgress();
  let rec = state.reviewQueue[wordId] || { interval: "1d", correctStreak: 0, timesWrong: 0 };

  let idx = REVIEW_INTERVALS.indexOf(rec.interval || "1d");
  if (wasCorrect) {
    idx = Math.min(idx + 1, REVIEW_INTERVALS.length - 1);
    rec.correctStreak = (rec.correctStreak || 0) + 1;
  } else {
    idx = 0;
    rec.correctStreak = 0;
    rec.timesWrong = (rec.timesWrong || 0) + 1;
  }
  rec.interval = REVIEW_INTERVALS[idx];
  rec.lastReviewed = todayStr();
  const next = new Date();
  next.setDate(next.getDate() + REVIEW_DAYS[rec.interval]);
  rec.nextReview = next.toISOString().split("T")[0];

  state.reviewQueue[wordId] = rec;
  saveProgress(state);
  return state;
}

/* تُنادى لما المستخدم يخلص جلسة مراجعة كاملة (الطابور فاضي) - بونص مرة واحدة باليوم */
function completeReviewSession() {
  let state = loadProgress();
  const today = todayStr();
  if (state.lastReviewSessionDate === today) return state; // بونص اليوم اتاخد قبل كده

  state.points += POINTS_TABLE.dailyReviewCompleted;
  state.lastReviewSessionDate = today;
  state = touchStreak(state);
  saveProgress(state);
  return state;
}

/* ------------------------------------------------------------
   تصدير global (مفيش modules هنا، كله global زي باقي الملفات)
   ------------------------------------------------------------ */
window.TaallimProgress = {
  loadProgress,
  saveProgress,
  completeLesson,
  readCultureCard,
  getLessonStatus,
  getNextLessonId,
  getDueWords,
  recordWordReview,
  completeReviewSession,
  POINTS_TABLE
};
