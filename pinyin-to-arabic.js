/**
 * pinyin-to-arabic.js
 * تحويل تقريبي من Pinyin (بينيين) إلى نطق عربي تقريبي.
 *
 * ⚠️ مهم جدًا: الصينية لغة نغمية (tones) — نفس المقطع بنغمة مختلفة = معنى مختلف تمامًا.
 * الكتابة العربية هنا (زي الصور اللي بعتها) بتفقد النغمة تمامًا.
 * لذلك: استخدم الناتج ده كـ "مساعدة نطق إضافية" جنب الـ pinyin الأصلي، مش بديل عنه.
 * لو حابب تحافظ على النغمة، استخدم دالة pinyinToArabicWithTone اللي بترجع رقم النغمة كمان
 * عشان تلوّن الحرف في الواجهة (1 أحمر / 2 أخضر / 3 أزرق / 4 بنفسجي مثلاً).
 */

// ---------- 1. جدول شيل النغمات (tone marks) وإرجاع الحرف الأساسي + رقم النغمة ----------
const TONE_MAP = {
  'ā':['a',1],'á':['a',2],'ǎ':['a',3],'à':['a',4],
  'ē':['e',1],'é':['e',2],'ě':['e',3],'è':['e',4],
  'ī':['i',1],'í':['i',2],'ǐ':['i',3],'ì':['i',4],
  'ō':['o',1],'ó':['o',2],'ǒ':['o',3],'ò':['o',4],
  'ū':['u',1],'ú':['u',2],'ǔ':['u',3],'ù':['u',4],
  'ǖ':['ü',1],'ǘ':['ü',2],'ǚ':['ü',3],'ǜ':['ü',4],
};

function stripTone(syllable) {
  let tone = 0;
  let plain = '';
  for (const ch of syllable) {
    if (TONE_MAP[ch]) {
      plain += TONE_MAP[ch][0];
      tone = TONE_MAP[ch][1];
    } else {
      plain += ch;
    }
  }
  return { plain: plain.toLowerCase(), tone };
}

// ---------- 2. جدول الحروف الأولية (initials) — الأطول أولاً عشان يتطابق صح ----------
const INITIALS = [
  ['zh', 'ج'], ['ch', 'تش'], ['sh', 'ش'],
  ['b', 'ب'], ['p', 'ب'], ['m', 'م'], ['f', 'ف'],
  ['d', 'د'], ['t', 'ت'], ['n', 'ن'], ['l', 'ل'],
  ['g', 'غ'], ['k', 'ك'], ['h', 'ه'],
  ['j', 'ج'], ['q', 'تش'], ['x', 'ش'],
  ['r', 'ر'], ['z', 'ز'], ['c', 'تس'], ['s', 'س'],
  ['y', 'ي'], ['w', 'و'],
];

// ---------- 3. جدول النهايات (finals) — الأطول أولاً ----------
const FINALS = [
  ['iang', 'يانغ'], ['iong', 'يونغ'], ['uang', 'وانغ'],
  ['ang', 'انغ'], ['eng', 'نغ'], ['ing', 'ينغ'], ['ong', 'ونغ'],
  ['ian', 'يان'], ['iao', 'ياو'], ['uai', 'واي'], ['uan', 'وان'],
  ['ai', 'اي'], ['ao', 'او'], ['an', 'ان'],
  ['ei', 'يي'], ['en', 'ن'],
  ['ia', 'يا'], ['ie', 'يه'], ['ue', 'يه'], ['in', 'ين'], ['iu', 'يو'],
  ['ou', 'و'],
  ['ua', 'وا'], ['ui', 'وي'], ['un', 'ون'], ['uo', 'وو'],
  ['ü', 'يو'], ['er', 'ار'],
  ['a', 'ا'], ['e', 'ه'], ['i', 'ي'], ['o', 'و'], ['u', 'و'],
];

// ---------- 4. حالات خاصة (مقاطع كاملة بتتغير شكلها) ----------
const SPECIAL_SYLLABLES = {
  'yi': 'ي', 'wu': 'وو', 'yu': 'يو',
  'ye': 'يه', 'yue': 'يويه', 'yuan': 'يوان',
  'yin': 'ين', 'ying': 'ينغ', 'yun': 'يون',
  'wa': 'وا', 'wo': 'وو', 'wai': 'واي', 'wei': 'وي',
  'wan': 'وان', 'wen': 'ون', 'wang': 'وانغ', 'weng': 'ونغ',
};

function convertSyllable(rawSyllable) {
  const { plain, tone } = stripTone(rawSyllable.trim());
  if (!plain) return { arabic: '', tone: 0 };

  if (SPECIAL_SYLLABLES[plain]) {
    return { arabic: SPECIAL_SYLLABLES[plain], tone };
  }

  let rest = plain;
  let arabicInitial = '';

  for (const [pin, ar] of INITIALS) {
    if (rest.startsWith(pin)) {
      arabicInitial = ar;
      rest = rest.slice(pin.length);
      break;
    }
  }

  let arabicFinal = '';
  for (const [pin, ar] of FINALS) {
    if (rest === pin || rest.startsWith(pin)) {
      arabicFinal = ar;
      rest = rest.slice(pin.length);
      break;
    }
  }
  // أي بقايا مش متغطية (نادر) نضيفها زي ما هي
  if (rest) arabicFinal += rest;

  return { arabic: arabicInitial + arabicFinal, tone };
}

// ---------- 4.5 تقطيع الكلمات المدموجة (زي xuésheng = xué+sheng) ----------
const ALL_INITIALS_PLAIN = INITIALS.map(([p]) => p).concat(['']);
const ALL_FINALS_PLAIN = FINALS.map(([p]) => p);
const VALID_SYLLABLES = new Set(Object.keys(SPECIAL_SYLLABLES));
for (const i of ALL_INITIALS_PLAIN) {
  for (const f of ALL_FINALS_PLAIN) {
    VALID_SYLLABLES.add(i + f);
  }
}
['n', 'ng', 'er', 'r'].forEach(s => VALID_SYLLABLES.add(s));

function isValidSyllable(s) {
  return VALID_SYLLABLES.has(s);
}

function segmentSyllables(plainWord) {
  const n = plainWord.length;
  const memoFail = new Set();
  function helper(start) {
    if (start === n) return [];
    if (memoFail.has(start)) return null;
    const maxLen = Math.min(6, n - start);
    for (let len = maxLen; len >= 1; len--) {
      const candidate = plainWord.slice(start, start + len);
      if (isValidSyllable(candidate)) {
        const rest = helper(start + len);
        if (rest !== null) return [candidate, ...rest];
      }
    }
    memoFail.add(start);
    return null;
  }
  return helper(0);
}

function convertToken(rawToken) {
  const parts = rawToken.split(/['-]/).filter(Boolean);
  return parts.map(part => {
    const { plain } = stripTone(part);
    if (isValidSyllable(plain) || SPECIAL_SYLLABLES[plain]) {
      return convertSyllable(part).arabic;
    }
    const originalChars = [...part];
    const segments = segmentSyllables(plain);
    if (segments) {
      let idx = 0;
      return segments.map(seg => {
        const origSub = originalChars.slice(idx, idx + seg.length).join('');
        idx += seg.length;
        return convertSyllable(origSub).arabic;
      }).join('');
    }
    return convertSyllable(part).arabic;
  }).join('');
}

// ---------- 5. الدالة الرئيسية: تحول جملة/كلمة pinyin كاملة (توكنز مفصولة بمسافة) ----------
function pinyinToArabic(pinyinText) {
  return pinyinText
    .split(/\s+/)
    .filter(Boolean)
    .map(convertToken)
    .join(' ');
}

// نسخة بترجع كمان أرقام النغمات (لو عايز تلوّن الحروف في الواجهة)
// ملاحظة: للكلمات المدموجة (multi-syllable) بترجع أول نغمة بس تقريبيًا
function pinyinToArabicWithTone(pinyinText) {
  return pinyinText
    .split(/\s+/)
    .filter(Boolean)
    .map(tok => ({ arabic: convertToken(tok), tone: stripTone(tok.split(/['-]/)[0]).tone }));
}

module.exports = { pinyinToArabic, pinyinToArabicWithTone };

// ---------- 6. اختبار سريع على نفس أمثلة الصور بتاعتك ----------
if (require.main === module) {
  const tests = [
    ['nǐ hǎo', 'ني هاو (الأصل)'],
    ['zǎo shang hǎo', 'زاو شانغ هاو (الأصل)'],
    ['wǎn shàng hǎo', 'وان شانغ هاو (الأصل)'],
    ['wǎn ān', 'وان آن (الأصل)'],
    ['zài jiàn', 'تساي جيان (الأصل)'],
    ['qǐng', 'تشينغ (الأصل)'],
    ['xiè xie', 'شيه شيه (الأصل)'],
    ['bù kè qi', 'بو كه تشي (الأصل)'],
    ['nǐ hǎo ma', 'ني هاو ما (الأصل)'],
    ['wǒ hěn hǎo', 'وو هن هاو (الأصل)'],
    ['piào liang', 'بياوليانغ (الأصل)'],
    ['gāo xìng', 'غاو شينغ (الأصل)'],
    ['shāng xīn', 'شانغ شين (الأصل)'],
    ['róng yì', 'رونغ يي (الأصل)'],
  ];

  console.log('Pinyin -> Arabic (ناتج السكريبت) | (الأصل من الصورة)\n');
  for (const [py, original] of tests) {
    console.log(`${py.padEnd(18)} -> ${pinyinToArabic(py).padEnd(15)} | ${original}`);
  }
}
