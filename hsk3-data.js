/* ============================================================
   hsk3-data.js
   محتوى دروس HSK3 - تطبيق تعليم الصينية بالعربي
   نفس بنية HSK2 بالظبط (words + grammar + quiz + cultureCard)
   ملفات الصوت بنمط مسطّح: audio/hsk3/vNNN.wav (بدون فولدرات فرعية)
   ============================================================ */

const HSK3_LESSONS = [

/* ------------------ الدرس 1: الدراسة والامتحانات ------------------ */
{
  id: 1, level: "HSK3", title: "الدراسة والامتحانات", title_cn: "学习考试", icon: "📖",
  words: [
    { id:"h3v101", hanzi:"学习", pinyin:"xuéxí", meaning_ar:"يدرس / التعلّم", audio:"audio/hsk3/v101.wav",
      example:{ hanzi:"我在学习中文。", pinyin:"wǒ zài xuéxí zhōngwén", meaning_ar:"أنا بدرس صيني دلوقتي." } },
    { id:"h3v102", hanzi:"考试", pinyin:"kǎoshì", meaning_ar:"امتحان", audio:"audio/hsk3/v102.wav",
      example:{ hanzi:"明天有考试。", pinyin:"míngtiān yǒu kǎoshì", meaning_ar:"بكرة فيه امتحان." } },
    { id:"h3v103", hanzi:"准备", pinyin:"zhǔnbèi", meaning_ar:"يجهّز / يستعد", audio:"audio/hsk3/v103.wav",
      example:{ hanzi:"我在准备考试。", pinyin:"wǒ zài zhǔnbèi kǎoshì", meaning_ar:"باستعد للامتحان." } },
    { id:"h3v104", hanzi:"成绩", pinyin:"chéngjì", meaning_ar:"درجة / نتيجة", audio:"audio/hsk3/v104.wav",
      example:{ hanzi:"我的成绩不错。", pinyin:"wǒ de chéngjì búcuò", meaning_ar:"درجتي كويسة." } },
    { id:"h3v105", hanzi:"复习", pinyin:"fùxí", meaning_ar:"يراجع", audio:"audio/hsk3/v105.wav",
      example:{ hanzi:"我每天复习。", pinyin:"wǒ měitiān fùxí", meaning_ar:"براجع كل يوم." } },
    { id:"h3v106", hanzi:"作业", pinyin:"zuòyè", meaning_ar:"واجب / homework", audio:"audio/hsk3/v106.wav",
      example:{ hanzi:"我做完作业了。", pinyin:"wǒ zuò wán zuòyè le", meaning_ar:"خلصت الواجب." } },
    { id:"h3v107", hanzi:"及格", pinyin:"jígé", meaning_ar:"ينجح (في امتحان)", audio:"audio/hsk3/v107.wav",
      example:{ hanzi:"他考试及格了。", pinyin:"tā kǎoshì jígé le", meaning_ar:"هو نجح في الامتحان." } },
    { id:"h3v108", hanzi:"努力", pinyin:"nǔlì", meaning_ar:"يجتهد / بجدية", audio:"audio/hsk3/v108.wav",
      example:{ hanzi:"她努力地学习。", pinyin:"tā nǔlì de xuéxí", meaning_ar:"هي بتدرس بجدية." } },
    { id:"h3v109", hanzi:"老师", pinyin:"lǎoshī", meaning_ar:"مدرّس / أستاذ", audio:"audio/hsk3/v109.wav",
      example:{ hanzi:"老师很好。", pinyin:"lǎoshī hěn hǎo", meaning_ar:"المدرّس كويس أوي." } },
    { id:"h3v110", hanzi:"学生", pinyin:"xuésheng", meaning_ar:"طالب", audio:"audio/hsk3/v110.wav",
      example:{ hanzi:"我是学生。", pinyin:"wǒ shì xuésheng", meaning_ar:"أنا طالب." } },
    { id:"h3v111", hanzi:"教室", pinyin:"jiàoshì", meaning_ar:"فصل / قاعة دراسة", audio:"audio/hsk3/v111.wav",
      example:{ hanzi:"我们在教室学习。", pinyin:"wǒmen zài jiàoshì xuéxí", meaning_ar:"إحنا بندرس في الفصل." } },
    { id:"h3v112", hanzi:"题", pinyin:"tí", meaning_ar:"سؤال (في امتحان)", audio:"audio/hsk3/v112.wav",
      example:{ hanzi:"这道题很难。", pinyin:"zhè dào tí hěn nán", meaning_ar:"السؤال ده صعب أوي." } },
    { id:"h3v113", hanzi:"分数", pinyin:"fēnshù", meaning_ar:"درجة (رقم)", audio:"audio/hsk3/v113.wav",
      example:{ hanzi:"我的分数很高。", pinyin:"wǒ de fēnshù hěn gāo", meaning_ar:"درجتي عالية." } },
    { id:"h3v114", hanzi:"通过", pinyin:"tōngguò", meaning_ar:"ينجح / يعدّي (امتحان)", audio:"audio/hsk3/v114.wav",
      example:{ hanzi:"我通过了考试。", pinyin:"wǒ tōngguò le kǎoshì", meaning_ar:"أنا عديت الامتحان." } },
    { id:"h3v115", hanzi:"难", pinyin:"nán", meaning_ar:"صعب", audio:"audio/hsk3/v115.wav",
      example:{ hanzi:"中文不太难。", pinyin:"zhōngwén bú tài nán", meaning_ar:"الصيني مش صعب أوي." } }
  ],
  grammar: {
    title_ar: "استخدام 地 لوصف طريقة عمل الفعل",
    explanation_ar: "زي 得 اللي اتعلمناها قبل كده (بعد الفعل)، 地 بتيجي قبل الفعل عشان توصفي إزاي حد بيعمل حاجة. الصفة + 地 + الفعل.",
    pattern: "الصفة + 地 + الفعل",
    examples: [
      { hanzi:"他努力地工作。", pinyin:"tā nǔlì de gōngzuò", meaning_ar:"هو بيشتغل بجدية." }
    ]
  },
  practiceSentences: [
    { id:"h3p101", type:"reorder", hanzi:"我 在 准备 考试", correctOrder:["我","在","准备","考试"], meaning_ar:"أنا باستعد للامتحان." }
  ],
  quiz: [
    { id:"h3q101", question_ar:"إيه معنى 及格؟", vocabId:"h3v107",
      options:["يفشل","ينجح في امتحان","يراجع","يجتهد"], correctIndex:1 },
    { id:"h3q102", question_ar:"'واجب' بالصيني؟", vocabId:"h3v106",
      options:["考试","成绩","作业","复习"], correctIndex:2 },
    { id:"h3q103", question_ar:"إيه الأداة اللي بتيجي قبل الفعل لوصف طريقة عمله؟", vocabId:"h3v108",
      options:["得","地","的","了"], correctIndex:1 }
  ],
  cultureCard: {
    id:"c-hsk3-l01", icon:"🎓",
    title_ar:"ليه امتحان الثانوية العامة الصيني (高考) بالذات بيوقف الدنيا؟",
    body_ar:"高考 (gāokǎo) هو امتحان دخول الجامعات في الصين، وبيتاخد بجدية غير عادية - مدن كاملة بتقفل شوارع حوالين لجان الامتحانات، وأهالي بيقفوا برا بالساعات في انتظار أولادهم. النتيجة في الامتحان ده بتحدد مستقبل الطالب المهني بشكل كبير، وده بيرجع لقيمة قديمة في الفكر الكونفوشيوسي بتقول إن التفوق العلمي هو أهم طريق للترقي الاجتماعي، حتى قبل عصر الامتحانات الحديثة كان فيه امتحانات إمبراطورية (科举) بنفس الفكرة من مئات السنين.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 2: المهنة والعمل ------------------ */
{
  id: 2, level: "HSK3", title: "المهنة والعمل", title_cn: "工作", icon: "💼",
  words: [
    { id:"h3v201", hanzi:"工作", pinyin:"gōngzuò", meaning_ar:"شغل / وظيفة", audio:"audio/hsk3/v201.wav",
      example:{ hanzi:"我的工作很忙。", pinyin:"wǒ de gōngzuò hěn máng", meaning_ar:"شغلي مشغول أوي." } },
    { id:"h3v202", hanzi:"公司", pinyin:"gōngsī", meaning_ar:"شركة", audio:"audio/hsk3/v202.wav",
      example:{ hanzi:"他在一家大公司工作。", pinyin:"tā zài yì jiā dà gōngsī gōngzuò", meaning_ar:"هو بيشتغل في شركة كبيرة." } },
    { id:"h3v203", hanzi:"经理", pinyin:"jīnglǐ", meaning_ar:"مدير", audio:"audio/hsk3/v203.wav",
      example:{ hanzi:"经理开会了。", pinyin:"jīnglǐ kāihuì le", meaning_ar:"المدير عمل اجتماع." } },
    { id:"h3v204", hanzi:"同事", pinyin:"tóngshì", meaning_ar:"زميل شغل", audio:"audio/hsk3/v204.wav",
      example:{ hanzi:"他是我的同事。", pinyin:"tā shì wǒ de tóngshì", meaning_ar:"هو زميلي في الشغل." } },
    { id:"h3v205", hanzi:"老板", pinyin:"lǎobǎn", meaning_ar:"صاحب العمل / البوس", audio:"audio/hsk3/v205.wav",
      example:{ hanzi:"老板不在。", pinyin:"lǎobǎn bú zài", meaning_ar:"البوس مش موجود." } },
    { id:"h3v206", hanzi:"上班", pinyin:"shàngbān", meaning_ar:"يروح الشغل", audio:"audio/hsk3/v206.wav",
      example:{ hanzi:"我九点上班。", pinyin:"wǒ jiǔ diǎn shàngbān", meaning_ar:"باروح الشغل الساعة تسعة." } },
    { id:"h3v207", hanzi:"下班", pinyin:"xiàbān", meaning_ar:"يخرج من الشغل", audio:"audio/hsk3/v207.wav",
      example:{ hanzi:"我五点下班。", pinyin:"wǒ wǔ diǎn xiàbān", meaning_ar:"باخرج من الشغل الساعة خمسة." } },
    { id:"h3v208", hanzi:"加班", pinyin:"jiābān", meaning_ar:"يعمل ساعات زيادة", audio:"audio/hsk3/v208.wav",
      example:{ hanzi:"我今天要加班。", pinyin:"wǒ jīntiān yào jiābān", meaning_ar:"لازم أعمل وقت زيادة النهارده." } },
    { id:"h3v209", hanzi:"会议", pinyin:"huìyì", meaning_ar:"اجتماع", audio:"audio/hsk3/v209.wav",
      example:{ hanzi:"我们有一个会议。", pinyin:"wǒmen yǒu yí gè huìyì", meaning_ar:"عندنا اجتماع." } },
    { id:"h3v210", hanzi:"出差", pinyin:"chūchāi", meaning_ar:"يسافر في مهمة عمل", audio:"audio/hsk3/v210.wav",
      example:{ hanzi:"他去北京出差了。", pinyin:"tā qù běijīng chūchāi le", meaning_ar:"هو راح بكين في مهمة عمل." } },
    { id:"h3v211", hanzi:"项目", pinyin:"xiàngmù", meaning_ar:"مشروع", audio:"audio/hsk3/v211.wav",
      example:{ hanzi:"这个项目很重要。", pinyin:"zhège xiàngmù hěn zhòngyào", meaning_ar:"المشروع ده مهم أوي." } },
    { id:"h3v212", hanzi:"简历", pinyin:"jiǎnlì", meaning_ar:"سيرة ذاتية", audio:"audio/hsk3/v212.wav",
      example:{ hanzi:"请发给我你的简历。", pinyin:"qǐng fā gěi wǒ nǐ de jiǎnlì", meaning_ar:"ابعتيلي السيرة الذاتية بتاعتك." } },
    { id:"h3v213", hanzi:"面试", pinyin:"miànshì", meaning_ar:"مقابلة عمل", audio:"audio/hsk3/v213.wav",
      example:{ hanzi:"明天我有面试。", pinyin:"míngtiān wǒ yǒu miànshì", meaning_ar:"بكرة عندي مقابلة عمل." } },
    { id:"h3v214", hanzi:"工资", pinyin:"gōngzī", meaning_ar:"مرتب", audio:"audio/hsk3/v214.wav",
      example:{ hanzi:"工资不错。", pinyin:"gōngzī búcuò", meaning_ar:"المرتب كويس." } },
    { id:"h3v215", hanzi:"请假", pinyin:"qǐngjià", meaning_ar:"يطلب إجازة", audio:"audio/hsk3/v215.wav",
      example:{ hanzi:"我想请假。", pinyin:"wǒ xiǎng qǐngjià", meaning_ar:"عايز آخد إجازة." } }
  ],
  grammar: {
    title_ar: "التعبير عن مدة زمنية بـ 从...到...",
    explanation_ar: "لوصف الفترة من وقت لوقت (زي مواعيد الشغل)، بنستخدم 从 قبل بداية الفترة و到 قبل نهايتها.",
    pattern: "从 + وقت البداية + 到 + وقت النهاية",
    examples: [
      { hanzi:"我从九点到五点上班。", pinyin:"wǒ cóng jiǔ diǎn dào wǔ diǎn shàngbān", meaning_ar:"باشتغل من التسعة للخمسة." }
    ]
  },
  practiceSentences: [
    { id:"h3p201", type:"reorder", hanzi:"我 从 九点 到 五点 上班", correctOrder:["我","从","九点","到","五点","上班"], meaning_ar:"باشتغل من التسعة للخمسة." }
  ],
  quiz: [
    { id:"h3q201", question_ar:"'زميل الشغل' بالصيني؟", vocabId:"h3v204",
      options:["老板","经理","同事","公司"], correctIndex:2 },
    { id:"h3q202", question_ar:"إيه معنى 加班؟", vocabId:"h3v208",
      options:["يروح الشغل","يخرج من الشغل","وقت زيادة في الشغل","يجتمع"], correctIndex:2 },
    { id:"h3q203", question_ar:"'من التسعة للخمسة' تترجم بـ؟", vocabId:"h3v206",
      options:["从九点到五点","到九点从五点","九点从到五点","五点从九点到"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk3-l02", icon:"🏢",
    title_ar:"ليه ثقافة 'العمل لوقت متأخر' منتشرة أوي في شركات الصين؟",
    body_ar:"سمعتي يمكن عن نظام '996' (يعني الشغل من الساعة 9 الصبح لـ9 بليل، 6 أيام في الأسبوع) اللي انتشر في شركات التكنولوجيا الصينية الكبيرة. الفكرة دي مرتبطة بضغط تنافسي شديد في سوق العمل، وبتوقع اجتماعي إن إظهار الالتزام والتفاني للشركة (حتى لو على حساب الوقت الشخصي) علامة على الجدية. في السنين الأخيرة، فيه نقاش صيني داخلي متزايد حوالين استدامة النظام ده وتأثيره على الصحة النفسية للموظفين، فمش كل الشركات بتطبقه، لكنه لسه موجود وبارز في قطاعات معينة.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 3: وصف الناس والمظهر ------------------ */
{
  id: 3, level: "HSK3", title: "وصف الناس والمظهر", title_cn: "外貌", icon: "🧑",
  words: [
    { id:"h3v301", hanzi:"高", pinyin:"gāo", meaning_ar:"طويل (في الطول)", audio:"audio/hsk3/v301.wav",
      example:{ hanzi:"他很高。", pinyin:"tā hěn gāo", meaning_ar:"هو طويل أوي." } },
    { id:"h3v302", hanzi:"矮", pinyin:"ǎi", meaning_ar:"قصير (في الطول)", audio:"audio/hsk3/v302.wav",
      example:{ hanzi:"她比较矮。", pinyin:"tā bǐjiào ǎi", meaning_ar:"هي قصيرة نسبيًا." } },
    { id:"h3v303", hanzi:"瘦", pinyin:"shòu", meaning_ar:"نحيف", audio:"audio/hsk3/v303.wav",
      example:{ hanzi:"他很瘦。", pinyin:"tā hěn shòu", meaning_ar:"هو نحيف أوي." } },
    { id:"h3v304", hanzi:"胖", pinyin:"pàng", meaning_ar:"سمين", audio:"audio/hsk3/v304.wav",
      example:{ hanzi:"我最近胖了。", pinyin:"wǒ zuìjìn pàng le", meaning_ar:"أنا زودت في الوزن مؤخرًا." } },
    { id:"h3v305", hanzi:"漂亮", pinyin:"piàoliang", meaning_ar:"جميلة", audio:"audio/hsk3/v305.wav",
      example:{ hanzi:"她很漂亮。", pinyin:"tā hěn piàoliang", meaning_ar:"هي جميلة أوي." } },
    { id:"h3v306", hanzi:"帅", pinyin:"shuài", meaning_ar:"وسيم", audio:"audio/hsk3/v306.wav",
      example:{ hanzi:"他很帅。", pinyin:"tā hěn shuài", meaning_ar:"هو وسيم أوي." } },
    { id:"h3v307", hanzi:"头发", pinyin:"tóufa", meaning_ar:"شعر (الراس)", audio:"audio/hsk3/v307.wav",
      example:{ hanzi:"她的头发很长。", pinyin:"tā de tóufa hěn cháng", meaning_ar:"شعرها طويل أوي." } },
    { id:"h3v308", hanzi:"又", pinyin:"yòu", meaning_ar:"كمان (في تعداد صفات)", audio:"audio/hsk3/v308.wav",
      example:{ hanzi:"她又高又漂亮。", pinyin:"tā yòu gāo yòu piàoliang", meaning_ar:"هي طويلة وجميلة في نفس الوقت." } },
    { id:"h3v309", hanzi:"年轻", pinyin:"niánqīng", meaning_ar:"شاب / صغير في السن", audio:"audio/hsk3/v309.wav",
      example:{ hanzi:"他看起来很年轻。", pinyin:"tā kànqǐlái hěn niánqīng", meaning_ar:"هو شكله شاب أوي." } },
    { id:"h3v310", hanzi:"老", pinyin:"lǎo", meaning_ar:"كبير في السن", audio:"audio/hsk3/v310.wav",
      example:{ hanzi:"我爷爷很老了。", pinyin:"wǒ yéye hěn lǎo le", meaning_ar:"جدي كبير في السن أوي." } },
    { id:"h3v311", hanzi:"长", pinyin:"cháng", meaning_ar:"طويل (للأشياء)", audio:"audio/hsk3/v311.wav",
      example:{ hanzi:"她的头发很长。", pinyin:"tā de tóufa hěn cháng", meaning_ar:"شعرها طويل." } },
    { id:"h3v312", hanzi:"短", pinyin:"duǎn", meaning_ar:"قصير (للأشياء)", audio:"audio/hsk3/v312.wav",
      example:{ hanzi:"我喜欢短头发。", pinyin:"wǒ xǐhuan duǎn tóufa", meaning_ar:"بحب الشعر القصير." } },
    { id:"h3v313", hanzi:"可爱", pinyin:"kě'ài", meaning_ar:"لطيف / كيوت", audio:"audio/hsk3/v313.wav",
      example:{ hanzi:"这只猫很可爱。", pinyin:"zhè zhī māo hěn kě'ài", meaning_ar:"القطة دي كيوت أوي." } },
    { id:"h3v314", hanzi:"像", pinyin:"xiàng", meaning_ar:"يشبه", audio:"audio/hsk3/v314.wav",
      example:{ hanzi:"他很像他爸爸。", pinyin:"tā hěn xiàng tā bàba", meaning_ar:"هو شبه أبوه أوي." } },
    { id:"h3v315", hanzi:"眼镜", pinyin:"yǎnjìng", meaning_ar:"نضارة", audio:"audio/hsk3/v315.wav",
      example:{ hanzi:"她戴眼镜。", pinyin:"tā dài yǎnjìng", meaning_ar:"هي لابسة نضارة." } }
  ],
  grammar: {
    title_ar: "وصف صفتين مع بعض بـ 又...又...",
    explanation_ar: "لما عايزة تجمعي صفتين لنفس الشيء في جملة واحدة، بتستخدمي 又 قبل كل صفة.",
    pattern: "又 + الصفة الأولى + 又 + الصفة الثانية",
    examples: [
      { hanzi:"这个菜又便宜又好吃。", pinyin:"zhège cài yòu piányi yòu hǎochī", meaning_ar:"الأكل ده رخيص وطعمه حلو في نفس الوقت." }
    ]
  },
  practiceSentences: [
    { id:"h3p301", type:"reorder", hanzi:"她 又 高 又 漂亮", correctOrder:["她","又","高","又","漂亮"], meaning_ar:"هي طويلة وجميلة." }
  ],
  quiz: [
    { id:"h3q301", question_ar:"عكس 高 (طويل) إيه؟", vocabId:"h3v302",
      options:["瘦","矮","胖","帅"], correctIndex:1 },
    { id:"h3q302", question_ar:"'شعر' بالصيني؟", vocabId:"h3v307",
      options:["头发","脸","眼睛","手"], correctIndex:0 },
    { id:"h3q303", question_ar:"جملة 'هي طويلة وجميلة' بتستخدم إيه لربط الصفتين؟", vocabId:"h3v308",
      options:["和","又...又...","但是","也"], correctIndex:1 }
  ],
  cultureCard: {
    id:"c-hsk3-l03", icon:"🌸",
    title_ar:"ليه هتلاقي شماسي كتير في الصين وسط الصيف؟",
    body_ar:"لو زرتي الصين في الصيف، هتلاحظي ناس كتير (خصوصًا الستات) بيمشوا بالشمسية حتى في يوم صحيّه صافي بدون مطر. ده مرتبط بمعيار جمالي تاريخي بيربط البشرة الفاتحة بالرقي الاجتماعي - المفهوم عمره قرون ومرتبط بالتمييز بين الطبقة اللي بتعمل في الحقول تحت الشمس والطبقة اللي بتقدر تحمي نفسها منها. المعيار الجمالي ده لسه له تأثير النهاردة، وتلاقي منتجات الوقاية من الشمس (whitening) منتشرة أوي في محلات مستحضرات التجميل الصينية.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 4: الاتجاهات والأماكن بالتفصيل ------------------ */
{
  id: 4, level: "HSK3", title: "الاتجاهات والأماكن بالتفصيل", title_cn: "方向", icon: "🧭",
  words: [
    { id:"h3v401", hanzi:"左边", pinyin:"zuǒbiān", meaning_ar:"الجهة الشمال", audio:"audio/hsk3/v401.wav",
      example:{ hanzi:"银行在左边。", pinyin:"yínháng zài zuǒbiān", meaning_ar:"البنك على الشمال." } },
    { id:"h3v402", hanzi:"右边", pinyin:"yòubiān", meaning_ar:"الجهة اليمين", audio:"audio/hsk3/v402.wav",
      example:{ hanzi:"学校在右边。", pinyin:"xuéxiào zài yòubiān", meaning_ar:"المدرسة على اليمين." } },
    { id:"h3v403", hanzi:"前边", pinyin:"qiánbiān", meaning_ar:"قدام", audio:"audio/hsk3/v403.wav",
      example:{ hanzi:"车站在前边。", pinyin:"chēzhàn zài qiánbiān", meaning_ar:"المحطة قدام." } },
    { id:"h3v404", hanzi:"后边", pinyin:"hòubiān", meaning_ar:"ورا", audio:"audio/hsk3/v404.wav",
      example:{ hanzi:"公园在后边。", pinyin:"gōngyuán zài hòubiān", meaning_ar:"الحديقة ورا." } },
    { id:"h3v405", hanzi:"附近", pinyin:"fùjìn", meaning_ar:"قريب / في المنطقة", audio:"audio/hsk3/v405.wav",
      example:{ hanzi:"附近有超市吗？", pinyin:"fùjìn yǒu chāoshì ma", meaning_ar:"فيه سوبر ماركت قريب؟" } },
    { id:"h3v406", hanzi:"一直", pinyin:"yìzhí", meaning_ar:"على طول / باستمرار", audio:"audio/hsk3/v406.wav",
      example:{ hanzi:"一直走。", pinyin:"yìzhí zǒu", meaning_ar:"سيبك على طول." } },
    { id:"h3v407", hanzi:"拐", pinyin:"guǎi", meaning_ar:"يلف / ينحرف", audio:"audio/hsk3/v407.wav",
      example:{ hanzi:"往右拐。", pinyin:"wǎng yòu guǎi", meaning_ar:"لفّي يمين." } },
    { id:"h3v408", hanzi:"往", pinyin:"wǎng", meaning_ar:"في اتجاه / نحو", audio:"audio/hsk3/v408.wav",
      example:{ hanzi:"往前走。", pinyin:"wǎng qián zǒu", meaning_ar:"روحي قدام." } },
    { id:"h3v409", hanzi:"地图", pinyin:"dìtú", meaning_ar:"خريطة", audio:"audio/hsk3/v409.wav",
      example:{ hanzi:"我看一下地图。", pinyin:"wǒ kàn yíxià dìtú", meaning_ar:"هشوف الخريطة شوية." } },
    { id:"h3v410", hanzi:"马路", pinyin:"mǎlù", meaning_ar:"شارع / طريق", audio:"audio/hsk3/v410.wav",
      example:{ hanzi:"过马路要小心。", pinyin:"guò mǎlù yào xiǎoxīn", meaning_ar:"لازم تاخدي بالك وانتِ بتعدّي الشارع." } },
    { id:"h3v411", hanzi:"红绿灯", pinyin:"hónglǜdēng", meaning_ar:"إشارة المرور", audio:"audio/hsk3/v411.wav",
      example:{ hanzi:"在红绿灯往右拐。", pinyin:"zài hónglǜdēng wǎng yòu guǎi", meaning_ar:"عند الإشارة لفّي يمين." } },
    { id:"h3v412", hanzi:"迷路", pinyin:"mílù", meaning_ar:"يتوه", audio:"audio/hsk3/v412.wav",
      example:{ hanzi:"我迷路了。", pinyin:"wǒ mílù le", meaning_ar:"أنا تهت." } },
    { id:"h3v413", hanzi:"方向", pinyin:"fāngxiàng", meaning_ar:"اتجاه", audio:"audio/hsk3/v413.wav",
      example:{ hanzi:"我不知道方向。", pinyin:"wǒ bù zhīdào fāngxiàng", meaning_ar:"مش عارفة الاتجاه." } },
    { id:"h3v414", hanzi:"远", pinyin:"yuǎn", meaning_ar:"بعيد", audio:"audio/hsk3/v414.wav",
      example:{ hanzi:"学校很远。", pinyin:"xuéxiào hěn yuǎn", meaning_ar:"المدرسة بعيدة أوي." } },
    { id:"h3v415", hanzi:"近", pinyin:"jìn", meaning_ar:"قريب", audio:"audio/hsk3/v415.wav",
      example:{ hanzi:"公司离我家很近。", pinyin:"gōngsī lí wǒ jiā hěn jìn", meaning_ar:"الشركة قريبة من بيتي." } }
  ],
  grammar: {
    title_ar: "إعطاء اتجاهات بـ 往 + اتجاه + فعل الحركة",
    explanation_ar: "عشان تقولي حد يتجه لمكان معين، بتحطي 往 قبل الاتجاه وبعده فعل الحركة (走 يمشي أو 拐 يلف).",
    pattern: "往 + الاتجاه + 走/拐",
    examples: [
      { hanzi:"一直走，然后往左拐。", pinyin:"yìzhí zǒu, ránhòu wǎng zuǒ guǎi", meaning_ar:"سيبك على طول، وبعدين لفّي شمال." }
    ]
  },
  practiceSentences: [
    { id:"h3p401", type:"reorder", hanzi:"往 右 拐", correctOrder:["往","右","拐"], meaning_ar:"لفّي يمين." }
  ],
  quiz: [
    { id:"h3q401", question_ar:"'قريب' بالصيني؟", vocabId:"h3v405",
      options:["左边","附近","一直","前边"], correctIndex:1 },
    { id:"h3q402", question_ar:"إيه معنى 拐؟", vocabId:"h3v407",
      options:["يمشي","يلف","يقف","يرجع"], correctIndex:1 },
    { id:"h3q403", question_ar:"'روحي قدام' بالصيني؟", vocabId:"h3v408",
      options:["往前走","前边走往","走往前","往走前"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk3-l04", icon:"🏠",
    title_ar:"ليه الاتجاه اللي البيت شايف عليه مهم أوي عند بعض الصينيين؟",
    body_ar:"في فلسفة الفنغ شوي (风水) الصينية التقليدية، اتجاه البيت أو الغرفة مش تفصيلة عادية، لكنه بيأثر على تدفق الطاقة (气) وبالتالي على الحظ والصحة والثروة لساكنيه. البيوت اللي بتواجه الجنوب مثلاً بتتفضّل تاريخيًا لأنها بتاخد أكتر شمس وضوء. حتى لو كتير من الصينيين النهارده (خصوصًا الشباب في المدن) بيشوفوا الفنغ شوي كتقليد قديم مش علم، لسه هتلاقي المبدأ ده مؤثر في تصميم المباني والعقارات، وبعض شركات المقاولات بتستخدمه كنقطة تسويقية.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 5: الطعام في المطعم ------------------ */
{
  id: 5, level: "HSK3", title: "الطعام في المطعم", title_cn: "在饭馆", icon: "🍽️",
  words: [
    { id:"h3v501", hanzi:"菜单", pinyin:"càidān", meaning_ar:"قائمة الطعام (المنيو)", audio:"audio/hsk3/v501.wav",
      example:{ hanzi:"请给我菜单。", pinyin:"qǐng gěi wǒ càidān", meaning_ar:"ممكن المنيو من فضلك؟" } },
    { id:"h3v502", hanzi:"服务员", pinyin:"fúwùyuán", meaning_ar:"جرسون / نادل", audio:"audio/hsk3/v502.wav",
      example:{ hanzi:"服务员，点菜！", pinyin:"fúwùyuán, diǎncài", meaning_ar:"يا جرسون، عايز أطلب!" } },
    { id:"h3v503", hanzi:"点菜", pinyin:"diǎncài", meaning_ar:"يطلب أكل", audio:"audio/hsk3/v503.wav",
      example:{ hanzi:"我们点菜吧。", pinyin:"wǒmen diǎncài ba", meaning_ar:"يلا نطلب." } },
    { id:"h3v504", hanzi:"好吃", pinyin:"hǎochī", meaning_ar:"طعمه حلو (أكل)", audio:"audio/hsk3/v504.wav",
      example:{ hanzi:"这个菜很好吃。", pinyin:"zhège cài hěn hǎochī", meaning_ar:"الأكل ده طعمه حلو أوي." } },
    { id:"h3v505", hanzi:"好喝", pinyin:"hǎohē", meaning_ar:"طعمه حلو (مشروب)", audio:"audio/hsk3/v505.wav",
      example:{ hanzi:"这个茶很好喝。", pinyin:"zhège chá hěn hǎohē", meaning_ar:"الشاي ده طعمه حلو أوي." } },
    { id:"h3v506", hanzi:"结账", pinyin:"jiézhàng", meaning_ar:"يدفع الحساب", audio:"audio/hsk3/v506.wav",
      example:{ hanzi:"我们结账吧。", pinyin:"wǒmen jiézhàng ba", meaning_ar:"يلا ندفع الحساب." } },
    { id:"h3v507", hanzi:"打包", pinyin:"dǎbāo", meaning_ar:"ياخد الباقي (تيك أواي)", audio:"audio/hsk3/v507.wav",
      example:{ hanzi:"可以打包吗？", pinyin:"kěyǐ dǎbāo ma", meaning_ar:"ينفع أاخد الباقي معايا؟" } },
    { id:"h3v508", hanzi:"味道", pinyin:"wèidào", meaning_ar:"طعم / نكهة", audio:"audio/hsk3/v508.wav",
      example:{ hanzi:"味道怎么样？", pinyin:"wèidào zěnmeyàng", meaning_ar:"الطعم عامل إيه؟" } },
    { id:"h3v509", hanzi:"饺子", pinyin:"jiǎozi", meaning_ar:"جياو زي (زلابية صينية)", audio:"audio/hsk3/v509.wav",
      example:{ hanzi:"我喜欢吃饺子。", pinyin:"wǒ xǐhuan chī jiǎozi", meaning_ar:"بحب آكل الجياو زي." } },
    { id:"h3v510", hanzi:"米饭", pinyin:"mǐfàn", meaning_ar:"أرز", audio:"audio/hsk3/v510.wav",
      example:{ hanzi:"我要一碗米饭。", pinyin:"wǒ yào yì wǎn mǐfàn", meaning_ar:"عايز طبق أرز." } },
    { id:"h3v511", hanzi:"汤", pinyin:"tāng", meaning_ar:"شوربة", audio:"audio/hsk3/v511.wav",
      example:{ hanzi:"这个汤很好喝。", pinyin:"zhège tāng hěn hǎohē", meaning_ar:"الشوربة دي طعمها حلو." } },
    { id:"h3v512", hanzi:"辣", pinyin:"là", meaning_ar:"حار (فلفل)", audio:"audio/hsk3/v512.wav",
      example:{ hanzi:"这个菜很辣。", pinyin:"zhège cài hěn là", meaning_ar:"الأكل ده حار أوي." } },
    { id:"h3v513", hanzi:"甜", pinyin:"tián", meaning_ar:"حلو (طعم)", audio:"audio/hsk3/v513.wav",
      example:{ hanzi:"这个蛋糕很甜。", pinyin:"zhège dàngāo hěn tián", meaning_ar:"الكيكة دي حلوة أوي." } },
    { id:"h3v514", hanzi:"素菜", pinyin:"sùcài", meaning_ar:"أكل نباتي", audio:"audio/hsk3/v514.wav",
      example:{ hanzi:"我只吃素菜。", pinyin:"wǒ zhǐ chī sùcài", meaning_ar:"أنا باكل نباتي بس." } },
    { id:"h3v515", hanzi:"服务", pinyin:"fúwù", meaning_ar:"خدمة", audio:"audio/hsk3/v515.wav",
      example:{ hanzi:"这里的服务很好。", pinyin:"zhèlǐ de fúwù hěn hǎo", meaning_ar:"الخدمة هنا كويسة أوي." } }
  ],
  grammar: {
    title_ar: "طلب حاجة بلطف بـ V + 一下",
    explanation_ar: "زيادة 一下 بعد الفعل بتخلي الطلب يبقى أخف وألطف، زي إضافة 'لحظة' أو 'شوية' بالعربي.",
    pattern: "الفعل + 一下",
    examples: [
      { hanzi:"我可以看一下菜单吗？", pinyin:"wǒ kěyǐ kàn yíxià càidān ma", meaning_ar:"ممكن أشوف المنيو شوية؟" }
    ]
  },
  practiceSentences: [
    { id:"h3p501", type:"reorder", hanzi:"我们 点菜 吧", correctOrder:["我们","点菜","吧"], meaning_ar:"يلا نطلب." }
  ],
  quiz: [
    { id:"h3q501", question_ar:"'الحساب' بيتدفع باستخدام فعل إيه؟", vocabId:"h3v506",
      options:["点菜","打包","结账","好吃"], correctIndex:2 },
    { id:"h3q502", question_ar:"إيه الفرق بين 好吃 و好喝؟", vocabId:"h3v505",
      options:["مفيش فرق","好吃 للأكل، 好喝 للمشروبات","好喝 للأكل، 好吃 للمشروبات","好吃 للحلويات بس"], correctIndex:1 },
    { id:"h3q503", question_ar:"إزاي تخليها طلب ألطف؟", vocabId:"h3v503",
      options:["زودي 了","زودي 一下 بعد الفعل","زودي 吗","زودي 的"], correctIndex:1 }
  ],
  cultureCard: {
    id:"c-hsk3-l05", icon:"🍜",
    title_ar:"ليه المطاعم الصينية غالبًا بتحطلك طبلية بتلف (لايزي سوزان)؟",
    body_ar:"في المطاعم الصينية التقليدية، الأكل بيتقدم في نص الترابيزة على طبلية دايرة بتلف (转盘)، وكل الأطباق بتتشارك بين الكل مش كل واحد له طبق خاص بيه. الفكرة دي مش بس عملية، لكنها بتعكس قيمة الجماعية والمشاركة في الثقافة الصينية - الأكل مناسبة اجتماعية للمشاركة مش تجربة فردية. وفيه أدب اجتماعي معروف: تاخدي من الطبق اللي قدامك مباشرة الأول، ولو حابة تاخدي من طبق بعيد، تستأذني أو تستخدمي أدوات المشاركة المخصصة لو موجودة.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 6: الطبيعة والبيئة ------------------ */
{
  id: 6, level: "HSK3", title: "الطبيعة والبيئة", title_cn: "自然环境", icon: "🌳",
  words: [
    { id:"h3v601", hanzi:"环境", pinyin:"huánjìng", meaning_ar:"البيئة", audio:"audio/hsk3/v601.wav",
      example:{ hanzi:"这里的环境很好。", pinyin:"zhèlǐ de huánjìng hěn hǎo", meaning_ar:"البيئة هنا كويسة أوي." } },
    { id:"h3v602", hanzi:"空气", pinyin:"kōngqì", meaning_ar:"الهواء", audio:"audio/hsk3/v602.wav",
      example:{ hanzi:"空气很新鲜。", pinyin:"kōngqì hěn xīnxiān", meaning_ar:"الهواء نضيف أوي." } },
    { id:"h3v603", hanzi:"树", pinyin:"shù", meaning_ar:"شجرة", audio:"audio/hsk3/v603.wav",
      example:{ hanzi:"公园里有很多树。", pinyin:"gōngyuán lǐ yǒu hěn duō shù", meaning_ar:"في الحديقة شجر كتير." } },
    { id:"h3v604", hanzi:"河", pinyin:"hé", meaning_ar:"نهر", audio:"audio/hsk3/v604.wav",
      example:{ hanzi:"这条河很长。", pinyin:"zhè tiáo hé hěn cháng", meaning_ar:"النهر ده طويل أوي." } },
    { id:"h3v605", hanzi:"山", pinyin:"shān", meaning_ar:"جبل", audio:"audio/hsk3/v605.wav",
      example:{ hanzi:"我们去爬山。", pinyin:"wǒmen qù pá shān", meaning_ar:"إحنا رايحين نتسلق الجبل." } },
    { id:"h3v606", hanzi:"干净", pinyin:"gānjìng", meaning_ar:"نضيف", audio:"audio/hsk3/v606.wav",
      example:{ hanzi:"这个房间很干净。", pinyin:"zhège fángjiān hěn gānjìng", meaning_ar:"الغرفة دي نضيفة أوي." } },
    { id:"h3v607", hanzi:"脏", pinyin:"zāng", meaning_ar:"وسخ", audio:"audio/hsk3/v607.wav",
      example:{ hanzi:"你的手很脏。", pinyin:"nǐ de shǒu hěn zāng", meaning_ar:"إيدك وسخة." } },
    { id:"h3v608", hanzi:"安静", pinyin:"ānjìng", meaning_ar:"هادي / ساكت", audio:"audio/hsk3/v608.wav",
      example:{ hanzi:"这里很安静。", pinyin:"zhèlǐ hěn ānjìng", meaning_ar:"هنا هادي أوي." } },
    { id:"h3v609", hanzi:"天空", pinyin:"tiānkōng", meaning_ar:"السما", audio:"audio/hsk3/v609.wav",
      example:{ hanzi:"天空很蓝。", pinyin:"tiānkōng hěn lán", meaning_ar:"السما زرقا أوي." } },
    { id:"h3v610", hanzi:"阳光", pinyin:"yángguāng", meaning_ar:"ضوء الشمس", audio:"audio/hsk3/v610.wav",
      example:{ hanzi:"今天阳光很好。", pinyin:"jīntiān yángguāng hěn hǎo", meaning_ar:"النهارده الشمس حلوة." } },
    { id:"h3v611", hanzi:"风", pinyin:"fēng", meaning_ar:"ريح / هوا", audio:"audio/hsk3/v611.wav",
      example:{ hanzi:"外面风很大。", pinyin:"wàimiàn fēng hěn dà", meaning_ar:"الريح برا قوية أوي." } },
    { id:"h3v612", hanzi:"云", pinyin:"yún", meaning_ar:"سحاب", audio:"audio/hsk3/v612.wav",
      example:{ hanzi:"天上有很多云。", pinyin:"tiānshàng yǒu hěn duō yún", meaning_ar:"السما فيها سحاب كتير." } },
    { id:"h3v613", hanzi:"污染", pinyin:"wūrǎn", meaning_ar:"تلوّث", audio:"audio/hsk3/v613.wav",
      example:{ hanzi:"这里的污染很严重。", pinyin:"zhèlǐ de wūrǎn hěn yánzhòng", meaning_ar:"التلوث هنا خطير أوي." } },
    { id:"h3v614", hanzi:"保护", pinyin:"bǎohù", meaning_ar:"يحمي", audio:"audio/hsk3/v614.wav",
      example:{ hanzi:"我们要保护环境。", pinyin:"wǒmen yào bǎohù huánjìng", meaning_ar:"لازم نحمي البيئة." } },
    { id:"h3v615", hanzi:"自然", pinyin:"zìrán", meaning_ar:"طبيعة", audio:"audio/hsk3/v615.wav",
      example:{ hanzi:"我喜欢大自然。", pinyin:"wǒ xǐhuan dà zìrán", meaning_ar:"بحب الطبيعة." } }
  ],
  grammar: {
    title_ar: "جملة الوجود بـ 有 لوصف مكان",
    explanation_ar: "لوصف إن حاجة موجودة في مكان معين، بنبدأ بالمكان وبعده 有، زي 'فيه' بالعربي.",
    pattern: "المكان + 有 + الشيء",
    examples: [
      { hanzi:"这里有山，也有河。", pinyin:"zhèlǐ yǒu shān, yě yǒu hé", meaning_ar:"هنا فيه جبل، وفيه نهر كمان." }
    ]
  },
  practiceSentences: [
    { id:"h3p601", type:"reorder", hanzi:"公园 里 有 很多 树", correctOrder:["公园","里","有","很多","树"], meaning_ar:"في الحديقة شجر كتير." }
  ],
  quiz: [
    { id:"h3q601", question_ar:"عكس 干净 (نضيف) إيه؟", vocabId:"h3v607",
      options:["安静","脏","空气","环境"], correctIndex:1 },
    { id:"h3q602", question_ar:"'جبل' بالصيني؟", vocabId:"h3v605",
      options:["河","树","山","空气"], correctIndex:2 },
    { id:"h3q603", question_ar:"جملة 'فيه جبل هنا' بتستخدم إيه؟", vocabId:"h3v601",
      options:["是","在","有","的"], correctIndex:2 }
  ],
  cultureCard: {
    id:"c-hsk3-l06", icon:"🏞️",
    title_ar:"ليه الحدائق الصينية التقليدية مصممة عشان 'تقلّد' الطبيعة؟",
    body_ar:"الحدائق الصينية الكلاسيكية (زي حدائق سوتشو المشهورة) مش مجرد مساحة خضرا منظمة بشكل هندسي كالحدائق الأوروبية، لكنها مصممة عشان تحاكي مناظر طبيعية بمقياس مصغّر - صخور تمثل جبال، بحيرات صغيرة تمثل بحار، وممرات ملتوية بدل الخطوط المستقيمة. الفكرة دي جاية من فلسفة 天人合一 (اتحاد الإنسان مع الطبيعة)، اللي بتقول إن الإنسان مش منفصل عن الطبيعة لكنه جزء منها، فحتى في وسط المدينة، الحديقة المصغّرة بتحاول تجيب إحساس الطبيعة الواسعة جوه مساحة صغيرة.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 7: التسوق والتفاوض على السعر ------------------ */
{
  id: 7, level: "HSK3", title: "التسوق والتفاوض على السعر", title_cn: "购物讲价", icon: "🛍️",
  words: [
    { id:"h3v701", hanzi:"便宜", pinyin:"piányi", meaning_ar:"رخيص", audio:"audio/hsk3/v701.wav",
      example:{ hanzi:"这个很便宜。", pinyin:"zhège hěn piányi", meaning_ar:"ده رخيص أوي." } },
    { id:"h3v702", hanzi:"贵", pinyin:"guì", meaning_ar:"غالي", audio:"audio/hsk3/v702.wav",
      example:{ hanzi:"太贵了！", pinyin:"tài guì le", meaning_ar:"غالي جدًا!" } },
    { id:"h3v703", hanzi:"打折", pinyin:"dǎzhé", meaning_ar:"تخفيض / خصم", audio:"audio/hsk3/v703.wav",
      example:{ hanzi:"这里打折。", pinyin:"zhèlǐ dǎzhé", meaning_ar:"هنا فيه تخفيض." } },
    { id:"h3v704", hanzi:"讲价", pinyin:"jiǎngjià", meaning_ar:"يفاصل على السعر", audio:"audio/hsk3/v704.wav",
      example:{ hanzi:"可以讲价吗？", pinyin:"kěyǐ jiǎngjià ma", meaning_ar:"ينفع نتفاصل على السعر؟" } },
    { id:"h3v705", hanzi:"付钱", pinyin:"fùqián", meaning_ar:"يدفع الفلوس", audio:"audio/hsk3/v705.wav",
      example:{ hanzi:"我来付钱。", pinyin:"wǒ lái fùqián", meaning_ar:"أنا هدفع." } },
    { id:"h3v706", hanzi:"现金", pinyin:"xiànjīn", meaning_ar:"كاش / فلوس نقدية", audio:"audio/hsk3/v706.wav",
      example:{ hanzi:"我没有现金。", pinyin:"wǒ méiyǒu xiànjīn", meaning_ar:"معايا كاش." } },
    { id:"h3v707", hanzi:"刷卡", pinyin:"shuākǎ", meaning_ar:"يدفع بالكارت", audio:"audio/hsk3/v707.wav",
      example:{ hanzi:"可以刷卡吗？", pinyin:"kěyǐ shuākǎ ma", meaning_ar:"ينفع أدفع بالكارت؟" } },
    { id:"h3v708", hanzi:"找钱", pinyin:"zhǎoqián", meaning_ar:"يرجّع الباقي (فلوس)", audio:"audio/hsk3/v708.wav",
      example:{ hanzi:"这是找您的钱。", pinyin:"zhè shì zhǎo nín de qián", meaning_ar:"ده باقيك." } },
    { id:"h3v709", hanzi:"商店", pinyin:"shāngdiàn", meaning_ar:"محل", audio:"audio/hsk3/v709.wav",
      example:{ hanzi:"这个商店很大。", pinyin:"zhège shāngdiàn hěn dà", meaning_ar:"المحل ده كبير أوي." } },
    { id:"h3v710", hanzi:"超市", pinyin:"chāoshì", meaning_ar:"سوبر ماركت", audio:"audio/hsk3/v710.wav",
      example:{ hanzi:"我去超市买东西。", pinyin:"wǒ qù chāoshì mǎi dōngxi", meaning_ar:"هروح السوبر ماركت أشتري حاجات." } },
    { id:"h3v711", hanzi:"试", pinyin:"shì", meaning_ar:"يجرّب (يقيس هدوم)", audio:"audio/hsk3/v711.wav",
      example:{ hanzi:"我可以试一下吗？", pinyin:"wǒ kěyǐ shì yíxià ma", meaning_ar:"ممكن أجرّبه؟" } },
    { id:"h3v712", hanzi:"号", pinyin:"hào", meaning_ar:"مقاس (رقم)", audio:"audio/hsk3/v712.wav",
      example:{ hanzi:"我穿中号。", pinyin:"wǒ chuān zhōng hào", meaning_ar:"أنا لابسة مقاس مديم." } },
    { id:"h3v713", hanzi:"换", pinyin:"huàn", meaning_ar:"يستبدل / يغيّر", audio:"audio/hsk3/v713.wav",
      example:{ hanzi:"我想换一个颜色。", pinyin:"wǒ xiǎng huàn yí gè yánsè", meaning_ar:"عايزة أغيّر اللون." } },
    { id:"h3v714", hanzi:"退货", pinyin:"tuìhuò", meaning_ar:"يرجّع بضاعة", audio:"audio/hsk3/v714.wav",
      example:{ hanzi:"我要退货。", pinyin:"wǒ yào tuìhuò", meaning_ar:"عايزة أرجّع البضاعة." } },
    { id:"h3v715", hanzi:"收据", pinyin:"shōujù", meaning_ar:"إيصال / فاتورة", audio:"audio/hsk3/v715.wav",
      example:{ hanzi:"请给我收据。", pinyin:"qǐng gěi wǒ shōujù", meaning_ar:"ممكن الإيصال من فضلك؟" } }
  ],
  grammar: {
    title_ar: "طلب تخفيض بلطف بـ 能不能",
    explanation_ar: "能不能 بتستخدم لطلب إذن أو إمكانية بشكل مهذب، زي 'ينفع...؟' بالعربي.",
    pattern: "能不能 + الفعل",
    examples: [
      { hanzi:"能不能便宜一点？", pinyin:"néng bù néng piányi yìdiǎn", meaning_ar:"ينفع يبقى أرخص شوية؟" }
    ]
  },
  practiceSentences: [
    { id:"h3p701", type:"reorder", hanzi:"能 不能 便宜 一点", correctOrder:["能","不能","便宜","一点"], meaning_ar:"ينفع يبقى أرخص شوية؟" }
  ],
  quiz: [
    { id:"h3q701", question_ar:"'يفاصل على السعر' بالصيني؟", vocabId:"h3v704",
      options:["打折","讲价","付钱","刷卡"], correctIndex:1 },
    { id:"h3q702", question_ar:"إيه معنى 找钱؟", vocabId:"h3v708",
      options:["يدفع","يرجّع الباقي","يفاصل","خصم"], correctIndex:1 },
    { id:"h3q703", question_ar:"إزاي تطلبي تخفيض بلطف؟", vocabId:"h3v701",
      options:["能不能 + الفعل","一定 + الفعل","应该 + الفعل","要 + الفعل"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk3-l07", icon:"💴",
    title_ar:"فين ينفع تفاصلي على السعر في الصين، وفين لأ؟",
    body_ar:"في الأسواق الشعبية والمحلات الصغيرة والبازارات السياحية، المفاصلة (讲价) متوقعة وجزء من التجربة، والبايع نفسه غالبًا بيحدد سعر أعلى من الأول متوقعًا إنك تفاصلي. لكن في المولات والمحلات الكبيرة والسلاسل التجارية، الأسعار ثابتة والمفاصلة هتبقى غريبة أو محرجة. الفرق ده بيوضح حاجة مهمة عن التسوق في الصين: قاعدة واحدة مش بتنطبق على كل السياقات، ولازم تلاحظي نوع المكان قبل ما تحاولي تفاصلي.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 8: الرأي والموافقة/الاختلاف ------------------ */
{
  id: 8, level: "HSK3", title: "الرأي والموافقة والاختلاف", title_cn: "看法", icon: "💭",
  words: [
    { id:"h3v801", hanzi:"同意", pinyin:"tóngyì", meaning_ar:"يوافق", audio:"audio/hsk3/v801.wav",
      example:{ hanzi:"我同意你的看法。", pinyin:"wǒ tóngyì nǐ de kànfǎ", meaning_ar:"موافق على رأيك." } },
    { id:"h3v802", hanzi:"觉得", pinyin:"juéde", meaning_ar:"يحس / يعتقد", audio:"audio/hsk3/v802.wav",
      example:{ hanzi:"我觉得这样不好。", pinyin:"wǒ juéde zhèyàng bù hǎo", meaning_ar:"في رأيي ده مش كويس." } },
    { id:"h3v803", hanzi:"看法", pinyin:"kànfǎ", meaning_ar:"رأي / وجهة نظر", audio:"audio/hsk3/v803.wav",
      example:{ hanzi:"你的看法是什么？", pinyin:"nǐ de kànfǎ shì shénme", meaning_ar:"رأيك إيه؟" } },
    { id:"h3v804", hanzi:"反对", pinyin:"fǎnduì", meaning_ar:"يعارض / يرفض", audio:"audio/hsk3/v804.wav",
      example:{ hanzi:"我反对这个计划。", pinyin:"wǒ fǎnduì zhège jìhuà", meaning_ar:"أنا معارض الخطة دي." } },
    { id:"h3v805", hanzi:"意见", pinyin:"yìjiàn", meaning_ar:"رأي / ملاحظة", audio:"audio/hsk3/v805.wav",
      example:{ hanzi:"你有什么意见？", pinyin:"nǐ yǒu shénme yìjiàn", meaning_ar:"عندك أي ملاحظات؟" } },
    { id:"h3v806", hanzi:"当然", pinyin:"dāngrán", meaning_ar:"طبعًا", audio:"audio/hsk3/v806.wav",
      example:{ hanzi:"当然可以。", pinyin:"dāngrán kěyǐ", meaning_ar:"طبعًا ينفع." } },
    { id:"h3v807", hanzi:"也许", pinyin:"yěxǔ", meaning_ar:"يمكن / ممكن", audio:"audio/hsk3/v807.wav",
      example:{ hanzi:"也许他不知道。", pinyin:"yěxǔ tā bù zhīdào", meaning_ar:"يمكن هو مش عارف." } },
    { id:"h3v808", hanzi:"一定", pinyin:"yídìng", meaning_ar:"بالتأكيد / لازم", audio:"audio/hsk3/v808.wav",
      example:{ hanzi:"你一定要来。", pinyin:"nǐ yídìng yào lái", meaning_ar:"لازم تيجي بالتأكيد." } },
    { id:"h3v809", hanzi:"理解", pinyin:"lǐjiě", meaning_ar:"يفهم / يتفهّم", audio:"audio/hsk3/v809.wav",
      example:{ hanzi:"我理解你的意思。", pinyin:"wǒ lǐjiě nǐ de yìsi", meaning_ar:"أنا فاهمة قصدك." } },
    { id:"h3v810", hanzi:"支持", pinyin:"zhīchí", meaning_ar:"يدعم / يؤيّد", audio:"audio/hsk3/v810.wav",
      example:{ hanzi:"我支持你的决定。", pinyin:"wǒ zhīchí nǐ de juédìng", meaning_ar:"أنا مؤيدة قرارك." } },
    { id:"h3v811", hanzi:"建议", pinyin:"jiànyì", meaning_ar:"يقترح / اقتراح", audio:"audio/hsk3/v811.wav",
      example:{ hanzi:"我有一个建议。", pinyin:"wǒ yǒu yí gè jiànyì", meaning_ar:"عندي اقتراح." } },
    { id:"h3v812", hanzi:"决定", pinyin:"juédìng", meaning_ar:"يقرر / قرار", audio:"audio/hsk3/v812.wav",
      example:{ hanzi:"我决定了。", pinyin:"wǒ juédìng le", meaning_ar:"أنا قررت." } },
    { id:"h3v813", hanzi:"想法", pinyin:"xiǎngfǎ", meaning_ar:"فكرة", audio:"audio/hsk3/v813.wav",
      example:{ hanzi:"这是个好想法。", pinyin:"zhè shì gè hǎo xiǎngfǎ", meaning_ar:"دي فكرة كويسة." } },
    { id:"h3v814", hanzi:"其实", pinyin:"qíshí", meaning_ar:"في الحقيقة", audio:"audio/hsk3/v814.wav",
      example:{ hanzi:"其实我不同意。", pinyin:"qíshí wǒ bù tóngyì", meaning_ar:"في الحقيقة أنا مش موافقة." } },
    { id:"h3v815", hanzi:"肯定", pinyin:"kěndìng", meaning_ar:"مؤكد / متأكد", audio:"audio/hsk3/v815.wav",
      example:{ hanzi:"他肯定会来。", pinyin:"tā kěndìng huì lái", meaning_ar:"هو بالتأكيد هييجي." } }
  ],
  grammar: {
    title_ar: "التعبير عن رأي بـ 我觉得...",
    explanation_ar: "覚得 بتستخدم عشان تبدي رأيك الشخصي، وبتيجي في أول الجملة عادةً زي 'أعتقد إن...' بالعربي.",
    pattern: "我觉得 + الجملة",
    examples: [
      { hanzi:"我觉得这个主意不错。", pinyin:"wǒ juéde zhège zhǔyì búcuò", meaning_ar:"أنا حاسة إن الفكرة دي كويسة." }
    ]
  },
  practiceSentences: [
    { id:"h3p801", type:"reorder", hanzi:"我 觉得 这样 不好", correctOrder:["我","觉得","这样","不好"], meaning_ar:"في رأيي ده مش كويس." }
  ],
  quiz: [
    { id:"h3q801", question_ar:"عكس 同意 (يوافق) إيه؟", vocabId:"h3v804",
      options:["觉得","反对","看法","意见"], correctIndex:1 },
    { id:"h3q802", question_ar:"إيه معنى 也许؟", vocabId:"h3v807",
      options:["بالتأكيد","طبعًا","يمكن","أبدًا"], correctIndex:2 },
    { id:"h3q803", question_ar:"إزاي تبدي رأيك الشخصي؟", vocabId:"h3v802",
      options:["我觉得...","你觉得...","他觉得...","觉得我..."], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk3-l08", icon:"🤝",
    title_ar:"ليه القرار الجماعي في الصين بيتاخد بالتوافق مش بالتصويت غالبًا؟",
    body_ar:"في كتير من الاجتماعات والقرارات الجماعية في الصين، النقاش بيستمر لحد ما يوصل الكل لتوافق (共识) عام، بدل ما يتاخد قرار بالتصويت وأغلبية بسيطة زي في تقاليد تانية. الفكرة دي مرتبطة بقيمة 和 (الانسجام الجماعي) اللي بتفضّل تجنب انقسام واضح في المجموعة، حتى لو استغرق الوصول للتوافق وقت أطول. رأي الأكبر سنًا أو الأعلى مكانة في المجموعة غالبًا بيكون له تأثير أكبر في تشكيل التوافق ده، وده بينعكس في التعبير عن 'الرأي' نفسه - غالبًا بيتقال بحذر أكتر لو كان مخالف لرأي شخص أكبر.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 9: الاعتذار والشكوى ------------------ */
{
  id: 9, level: "HSK3", title: "الاعتذار والشكوى", title_cn: "抱歉投诉", icon: "🙏",
  words: [
    { id:"h3v901", hanzi:"抱歉", pinyin:"bàoqiàn", meaning_ar:"آسف / معتذر", audio:"audio/hsk3/v901.wav",
      example:{ hanzi:"很抱歉，我迟到了。", pinyin:"hěn bàoqiàn, wǒ chídào le", meaning_ar:"آسف جدًا، اتأخرت." } },
    { id:"h3v902", hanzi:"麻烦", pinyin:"máfan", meaning_ar:"يزعج / متاعب", audio:"audio/hsk3/v902.wav",
      example:{ hanzi:"麻烦你了。", pinyin:"máfan nǐ le", meaning_ar:"تعبتك معايا." } },
    { id:"h3v903", hanzi:"投诉", pinyin:"tóusù", meaning_ar:"يشتكي (رسميًا)", audio:"audio/hsk3/v903.wav",
      example:{ hanzi:"我要投诉。", pinyin:"wǒ yào tóusù", meaning_ar:"عايز أقدم شكوى." } },
    { id:"h3v904", hanzi:"问题", pinyin:"wèntí", meaning_ar:"مشكلة / سؤال", audio:"audio/hsk3/v904.wav",
      example:{ hanzi:"有一个问题。", pinyin:"yǒu yí gè wèntí", meaning_ar:"فيه مشكلة." } },
    { id:"h3v905", hanzi:"解决", pinyin:"jiějué", meaning_ar:"يحل (مشكلة)", audio:"audio/hsk3/v905.wav",
      example:{ hanzi:"这个问题很难解决。", pinyin:"zhège wèntí hěn nán jiějué", meaning_ar:"المشكلة دي صعب تتحل." } },
    { id:"h3v906", hanzi:"原谅", pinyin:"yuánliàng", meaning_ar:"يسامح", audio:"audio/hsk3/v906.wav",
      example:{ hanzi:"请原谅我。", pinyin:"qǐng yuánliàng wǒ", meaning_ar:"سامحيني من فضلك." } },
    { id:"h3v907", hanzi:"道歉", pinyin:"dàoqiàn", meaning_ar:"يقدّم اعتذار", audio:"audio/hsk3/v907.wav",
      example:{ hanzi:"他跟我道歉了。", pinyin:"tā gēn wǒ dàoqiàn le", meaning_ar:"هو اعتذرلي." } },
    { id:"h3v908", hanzi:"没关系", pinyin:"méi guānxi", meaning_ar:"معلش / مفيش مشكلة", audio:"audio/hsk3/v908.wav",
      example:{ hanzi:"没关系，没事。", pinyin:"méi guānxi, méi shì", meaning_ar:"معلش، مفيش حاجة." } },
    { id:"h3v909", hanzi:"错", pinyin:"cuò", meaning_ar:"غلط / خطأ", audio:"audio/hsk3/v909.wav",
      example:{ hanzi:"这是我的错。", pinyin:"zhè shì wǒ de cuò", meaning_ar:"ده غلطي." } },
    { id:"h3v910", hanzi:"怪", pinyin:"guài", meaning_ar:"يلوم", audio:"audio/hsk3/v910.wav",
      example:{ hanzi:"不要怪他。", pinyin:"búyào guài tā", meaning_ar:"متلوميهوش." } },
    { id:"h3v911", hanzi:"理由", pinyin:"lǐyóu", meaning_ar:"سبب / مبرر", audio:"audio/hsk3/v911.wav",
      example:{ hanzi:"你有什么理由？", pinyin:"nǐ yǒu shénme lǐyóu", meaning_ar:"عندك أي مبرر؟" } },
    { id:"h3v912", hanzi:"态度", pinyin:"tàidù", meaning_ar:"موقف / أسلوب تعامل", audio:"audio/hsk3/v912.wav",
      example:{ hanzi:"他的态度很好。", pinyin:"tā de tàidù hěn hǎo", meaning_ar:"أسلوبه كويس أوي." } },
    { id:"h3v913", hanzi:"责任", pinyin:"zérèn", meaning_ar:"مسؤولية", audio:"audio/hsk3/v913.wav",
      example:{ hanzi:"这是我的责任。", pinyin:"zhè shì wǒ de zérèn", meaning_ar:"دي مسؤوليتي." } },
    { id:"h3v914", hanzi:"赔偿", pinyin:"péicháng", meaning_ar:"يعوّض", audio:"audio/hsk3/v914.wav",
      example:{ hanzi:"公司会赔偿你。", pinyin:"gōngsī huì péicháng nǐ", meaning_ar:"الشركة هتعوّضك." } },
    { id:"h3v915", hanzi:"满意", pinyin:"mǎnyì", meaning_ar:"راضي", audio:"audio/hsk3/v915.wav",
      example:{ hanzi:"我不满意。", pinyin:"wǒ bù mǎnyì", meaning_ar:"أنا مش راضية." } }
  ],
  grammar: {
    title_ar: "التعبير عن الزيادة بـ 太...了",
    explanation_ar: "太...了 بتستخدم للتعبير عن إن حاجة زيادة عن الحد، غالبًا بمعنى سلبي أو شكوى.",
    pattern: "太 + الصفة + 了",
    examples: [
      { hanzi:"这个太麻烦了。", pinyin:"zhège tài máfan le", meaning_ar:"ده متاعب جدًا." }
    ]
  },
  practiceSentences: [
    { id:"h3p901", type:"reorder", hanzi:"很 抱歉 我 迟到 了", correctOrder:["很","抱歉","我","迟到","了"], meaning_ar:"آسف جدًا، اتأخرت." }
  ],
  quiz: [
    { id:"h3q901", question_ar:"إيه معنى 麻烦؟", vocabId:"h3v902",
      options:["مشكلة/متاعب","حل","اعتذار","سماح"], correctIndex:0 },
    { id:"h3q902", question_ar:"'معلش' بالصيني؟", vocabId:"h3v908",
      options:["抱歉","没关系","道歉","原谅"], correctIndex:1 },
    { id:"h3q903", question_ar:"إزاي تقولي 'ده متاعب جدًا'؟", vocabId:"h3v902",
      options:["这个太麻烦了","这个麻烦太了","太这个麻烦了","麻烦了太这个"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk3-l09", icon:"🎁",
    title_ar:"ليه الاعتذار الرسمي في الصين ممكن يكون مصحوب بهدية؟",
    body_ar:"في المواقف اللي فيها إحراج أو غلطة واضحة (خصوصًا في سياق العمل أو العلاقات المهمة)، الاعتذار الكلامي بس ممكن ميكفيش، وهتلاقي إن مصاحبته بهدية صغيرة أو دعوة عشاء بتقوّي الاعتذار وتوضح الجدية فيه. ده جزء من مفهوم 关系 (العلاقات) اللي اتكلمنا عليه قبل كده - رد الاعتبار مش بس بالكلام لكن بعمل ملموس بيرمّم العلاقة. من ناحية تانية، لو حد قالك 没关系 بسرعة جدًا بعد اعتذارك، ده ممكن يبقى مؤشر إنه لسه مستاء وبيقول كده بس من باب المجاملة الاجتماعية.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 10: الخبرة والتكرار ------------------ */
{
  id: 10, level: "HSK3", title: "الخبرة والتكرار", title_cn: "经验", icon: "🔁",
  words: [
    { id:"h3v1001", hanzi:"越来越", pinyin:"yuè lái yuè", meaning_ar:"بيزيد أكتر وأكتر", audio:"audio/hsk3/v1001.wav",
      example:{ hanzi:"天气越来越冷了。", pinyin:"tiānqì yuè lái yuè lěng le", meaning_ar:"الجو بيبرد أكتر وأكتر." } },
    { id:"h3v1002", hanzi:"一边", pinyin:"yìbiān", meaning_ar:"في نفس الوقت (بيعمل حاجتين)", audio:"audio/hsk3/v1002.wav",
      example:{ hanzi:"我一边吃饭一边看电视。", pinyin:"wǒ yìbiān chīfàn yìbiān kàn diànshì", meaning_ar:"باكل وباتفرج على التليفزيون في نفس الوقت." } },
    { id:"h3v1003", hanzi:"着", pinyin:"zhe", meaning_ar:"أداة الاستمرارية (بيحصل دلوقتي)", audio:"audio/hsk3/v1003.wav",
      example:{ hanzi:"他坐着看书。", pinyin:"tā zuò zhe kàn shū", meaning_ar:"هو قاعد بيقرا." } },
    { id:"h3v1004", hanzi:"正在", pinyin:"zhèngzài", meaning_ar:"دلوقتي بيحصل (فعل مستمر)", audio:"audio/hsk3/v1004.wav",
      example:{ hanzi:"我正在吃饭。", pinyin:"wǒ zhèngzài chīfàn", meaning_ar:"أنا بالفعل بآكل دلوقتي." } },
    { id:"h3v1005", hanzi:"从来", pinyin:"cónglái", meaning_ar:"أبدًا (مع النفي)", audio:"audio/hsk3/v1005.wav",
      example:{ hanzi:"我从来没去过中国。", pinyin:"wǒ cónglái méi qù guo zhōngguó", meaning_ar:"أنا أبدًا ماروحتش الصين." } },
    { id:"h3v1006", hanzi:"曾经", pinyin:"céngjīng", meaning_ar:"سبق و... (في الماضي)", audio:"audio/hsk3/v1006.wav",
      example:{ hanzi:"我曾经住在北京。", pinyin:"wǒ céngjīng zhù zài běijīng", meaning_ar:"سبق وعشت في بكين." } },
    { id:"h3v1007", hanzi:"后来", pinyin:"hòulái", meaning_ar:"بعد كده / لاحقًا", audio:"audio/hsk3/v1007.wav",
      example:{ hanzi:"后来我们成了朋友。", pinyin:"hòulái wǒmen chéng le péngyou", meaning_ar:"بعد كده بقينا أصحاب." } },
    { id:"h3v1008", hanzi:"终于", pinyin:"zhōngyú", meaning_ar:"في النهاية / أخيرًا", audio:"audio/hsk3/v1008.wav",
      example:{ hanzi:"我终于成功了。", pinyin:"wǒ zhōngyú chénggōng le", meaning_ar:"في النهاية نجحت." } },
    { id:"h3v1009", hanzi:"经验", pinyin:"jīngyàn", meaning_ar:"خبرة", audio:"audio/hsk3/v1009.wav",
      example:{ hanzi:"我没有经验。", pinyin:"wǒ méiyǒu jīngyàn", meaning_ar:"معنديش خبرة." } },
    { id:"h3v1010", hanzi:"经历", pinyin:"jīnglì", meaning_ar:"يمر بتجربة / تجربة", audio:"audio/hsk3/v1010.wav",
      example:{ hanzi:"这是一次难忘的经历。", pinyin:"zhè shì yí cì nánwàng de jīnglì", meaning_ar:"دي تجربة مش هتتنسى." } },
    { id:"h3v1011", hanzi:"记得", pinyin:"jìde", meaning_ar:"يفتكر", audio:"audio/hsk3/v1011.wav",
      example:{ hanzi:"我还记得他。", pinyin:"wǒ hái jìde tā", meaning_ar:"لسه فاكراه." } },
    { id:"h3v1012", hanzi:"忘记", pinyin:"wàngjì", meaning_ar:"ينسى", audio:"audio/hsk3/v1012.wav",
      example:{ hanzi:"我忘记了。", pinyin:"wǒ wàngjì le", meaning_ar:"أنا نسيت." } },
    { id:"h3v1013", hanzi:"突然", pinyin:"tūrán", meaning_ar:"فجأة", audio:"audio/hsk3/v1013.wav",
      example:{ hanzi:"他突然来了。", pinyin:"tā tūrán lái le", meaning_ar:"هو جه فجأة." } },
    { id:"h3v1014", hanzi:"慢慢", pinyin:"mànmàn", meaning_ar:"بالتدريج / على مهل", audio:"audio/hsk3/v1014.wav",
      example:{ hanzi:"慢慢来，不着急。", pinyin:"mànmàn lái, bù zháojí", meaning_ar:"خدي وقتك، مفيش استعجال." } },
    { id:"h3v1015", hanzi:"继续", pinyin:"jìxù", meaning_ar:"يكمل / يستمر", audio:"audio/hsk3/v1015.wav",
      example:{ hanzi:"我们继续吧。", pinyin:"wǒmen jìxù ba", meaning_ar:"يلا نكمل." } }
  ],
  grammar: {
    title_ar: "التعبير عن تطور تدريجي بـ 越来越",
    explanation_ar: "越来越 بتيجي قبل الصفة عشان تعبري عن إن حاجة بتزيد أو بتتغير بشكل تدريجي مع الوقت.",
    pattern: "越来越 + الصفة",
    examples: [
      { hanzi:"我的中文越来越好了。", pinyin:"wǒ de zhōngwén yuè lái yuè hǎo le", meaning_ar:"صينيتي بقت أحسن وأحسن." }
    ]
  },
  practiceSentences: [
    { id:"h3p1001", type:"reorder", hanzi:"天气 越来越 冷 了", correctOrder:["天气","越来越","冷","了"], meaning_ar:"الجو بيبرد أكتر وأكتر." }
  ],
  quiz: [
    { id:"h3q1001", question_ar:"إيه معنى 从来 (مع النفي)؟", vocabId:"h3v1005",
      options:["دايمًا","أحيانًا","أبدًا","نادرًا"], correctIndex:2 },
    { id:"h3q1002", question_ar:"'في النهاية / أخيرًا' بالصيني؟", vocabId:"h3v1008",
      options:["后来","曾经","终于","正在"], correctIndex:2 },
    { id:"h3q1003", question_ar:"إزاي تعبري إن صينيتك بتتحسن أكتر وأكتر؟", vocabId:"h3v1001",
      options:["我的中文越来越好了","我的中文好越来越了","越来越我的中文好了","我的中文了越来越好"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk3-l10", icon:"📈",
    title_ar:"ليه فكرة 'التحسن التدريجي المستمر' مهمة جدًا في الفكر الصيني؟",
    body_ar:"عبارة 天天向上 (كل يوم بتتحسن أكتر) منتشرة جدًا في الصين كشعار تحفيزي في المدارس والشركات. الفكرة جايه من تصور كونفوشيوسي قديم إن التطور الشخصي مش حدث لحظي لكنه رحلة تراكمية طويلة، والقيمة الحقيقية في الاستمرارية والانضباط اليومي مش في الطفرات السريعة. عشان كده تركيبة 越来越 (بيزيد أكتر وأكتر) شائعة جدًا في الكلام اليومي - مش بس وصف لتغيير، لكنها بتعكس طريقة تفكير في التقدم كعملية مستمرة خطوة بخطوة.",
    relatedTo:"daily_life"
  }
}

];
