/* ============================================================
   hsk4-data.js
   محتوى دروس HSK4 - تطبيق تعليم الصينية بالعربي
   نفس بنية HSK3 بالظبط (words + grammar + quiz + cultureCard)
   ملفات الصوت بنمط مسطّح: audio/hsk4/<hanzi>.wav
   (السكريبت generate_hsk4_audio.ps1 بيسمي كل ملف باسم الكلمة الصينية نفسها)
   ============================================================ */

const HSK4_LESSONS = [

/* ------------------ الدرس 1: الدراسة والمستقبل الأكاديمي ------------------ */
{
  id: 1, level: "HSK4", title: "الدراسة والمستقبل الأكاديمي", title_cn: "学术生活", icon: "🎓",
  words: [
    { id:"h4v101", hanzi:"毕业", pinyin:"bìyè", meaning_ar:"يتخرج", audio:"audio/hsk4/毕业.wav",
      example:{ hanzi:"我明年毕业。", pinyin:"wǒ míngnián bìyè", meaning_ar:"أنا هتخرج السنة الجاية." } },
    { id:"h4v102", hanzi:"博士", pinyin:"bóshì", meaning_ar:"دكتوراه", audio:"audio/hsk4/博士.wav",
      example:{ hanzi:"他是博士。", pinyin:"tā shì bóshì", meaning_ar:"هو دكتور (حاصل على دكتوراه)." } },
    { id:"h4v103", hanzi:"申请", pinyin:"shēnqǐng", meaning_ar:"يتقدم بطلب", audio:"audio/hsk4/申请.wav",
      example:{ hanzi:"我在申请大学。", pinyin:"wǒ zài shēnqǐng dàxué", meaning_ar:"باتقدم بطلب لجامعة." } },
    { id:"h4v104", hanzi:"学历", pinyin:"xuélì", meaning_ar:"مؤهل دراسي", audio:"audio/hsk4/学历.wav",
      example:{ hanzi:"他的学历很高。", pinyin:"tā de xuélì hěn gāo", meaning_ar:"مؤهله الدراسي عالي." } },
    { id:"h4v105", hanzi:"学术", pinyin:"xuéshù", meaning_ar:"أكاديمي", audio:"audio/hsk4/学术.wav",
      example:{ hanzi:"这是学术研究。", pinyin:"zhè shì xuéshù yánjiū", meaning_ar:"ده بحث أكاديمي." } },
    { id:"h4v106", hanzi:"论文", pinyin:"lùnwén", meaning_ar:"بحث علمي", audio:"audio/hsk4/论文.wav",
      example:{ hanzi:"我在写论文。", pinyin:"wǒ zài xiě lùnwén", meaning_ar:"باكتب بحث علمي دلوقتي." } },
    { id:"h4v107", hanzi:"培养", pinyin:"péiyǎng", meaning_ar:"ينمّي / يربّي", audio:"audio/hsk4/培养.wav",
      example:{ hanzi:"学校培养了很多人才。", pinyin:"xuéxiào péiyǎng le hěn duō réncái", meaning_ar:"المدرسة كوّنت كفاءات كتير." } },
    { id:"h4v108", hanzi:"教训", pinyin:"jiàoxun", meaning_ar:"درس (عبرة)", audio:"audio/hsk4/教训.wav",
      example:{ hanzi:"这是一个教训。", pinyin:"zhè shì yí gè jiàoxun", meaning_ar:"ده درس (عبرة) استفدنا منه." } },
    { id:"h4v109", hanzi:"证明", pinyin:"zhèngmíng", meaning_ar:"يثبت / إثبات", audio:"audio/hsk4/证明.wav",
      example:{ hanzi:"你需要证明你的能力。", pinyin:"nǐ xūyào zhèngmíng nǐ de nénglì", meaning_ar:"محتاج تثبت قدرتك." } },
    { id:"h4v110", hanzi:"推荐", pinyin:"tuījiàn", meaning_ar:"يوصي بـ", audio:"audio/hsk4/推荐.wav",
      example:{ hanzi:"老师推荐了这本书。", pinyin:"lǎoshī tuījiàn le zhè běn shū", meaning_ar:"المدرس أوصى بالكتاب ده." } },
    { id:"h4v111", hanzi:"研究", pinyin:"yánjiū", meaning_ar:"يبحث / بحث", audio:"audio/hsk4/研究.wav",
      example:{ hanzi:"他在研究历史。", pinyin:"tā zài yánjiū lìshǐ", meaning_ar:"هو بيبحث في التاريخ." } },
    { id:"h4v112", hanzi:"成为", pinyin:"chéngwéi", meaning_ar:"يصبح", audio:"audio/hsk4/成为.wav",
      example:{ hanzi:"我想成为一名医生。", pinyin:"wǒ xiǎng chéngwéi yì míng yīshēng", meaning_ar:"عايز أبقى دكتور." } }
  ],
  grammar: {
    title_ar: "التعبير عن مؤهّل بـ 是...的",
    explanation_ar: "لما تحبي تأكدي على تفاصيل حصلت فعلًا في الماضي (زمان، مكان، طريقة)، بتستخدمي 是...的 حوالين التفصيلة اللي بتأكدي عليها.",
    pattern: "是 + (تفصيلة) + الفعل + 的",
    examples: [
      { hanzi:"他是去年毕业的。", pinyin:"tā shì qùnián bìyè de", meaning_ar:"هو اتخرج السنة اللي فاتت (بالظبط)." }
    ]
  },
  practiceSentences: [
    { id:"h4p101", type:"reorder", hanzi:"我 在 申请 大学", correctOrder:["我","在","申请","大学"], meaning_ar:"أنا باتقدم بطلب لجامعة." }
  ],
  quiz: [
    { id:"h4q101", question_ar:"إيه معنى 培养؟", vocabId:"h4v107",
      options:["يفشل","ينمّي / يربّي","يثبت","يتخرج"], correctIndex:1 },
    { id:"h4q102", question_ar:"'بحث علمي' بالصيني؟", vocabId:"h4v106",
      options:["学历","论文","申请","博士"], correctIndex:1 },
    { id:"h4q103", question_ar:"إزاي تقولي 'هو اتخرج السنة اللي فاتت (بالظبط)'؟", vocabId:"h4v101",
      options:["他是去年毕业的","他去年是毕业的","是他去年毕业的","他毕业是去年的"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk4-l01", icon:"📜",
    title_ar:"ليه المؤهل الدراسي (学历) بيوزن كتير في سوق الشغل الصيني؟",
    body_ar:"في الصين، 学历 مش مجرد ورقة — لسنين طويلة كان بيتحدد بيه فرص كتير: الوظيفة، وأحيانًا حتى فرصة السكن في مدن معينة عن طريق نظام تسجيل السكان (户口). عشان كده تلاقي منافسة رهيبة على دخول الجامعات الكبيرة، وامتحان 高考 اللي اتكلمنا عليه قبل كده بيفتح أو يقفل أبواب كتير. في السنين الأخيرة بدأ التركيز يتحول شوية نحو المهارات العملية جنب الشهادة، بس الشهادة لسه بتفتح الباب الأول للمقابلة.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 2: العمل والإدارة ------------------ */
{
  id: 2, level: "HSK4", title: "العمل والإدارة", title_cn: "工作与管理", icon: "💼",
  words: [
    { id:"h4v201", hanzi:"工资", pinyin:"gōngzī", meaning_ar:"راتب", audio:"audio/hsk4/工资.wav",
      example:{ hanzi:"这个月的工资涨了。", pinyin:"zhège yuè de gōngzī zhǎng le", meaning_ar:"مرتب الشهر ده زاد." } },
    { id:"h4v202", hanzi:"责任", pinyin:"zérèn", meaning_ar:"مسؤولية", audio:"audio/hsk4/责任.wav",
      example:{ hanzi:"这是我的责任。", pinyin:"zhè shì wǒ de zérèn", meaning_ar:"دي مسؤوليتي." } },
    { id:"h4v203", hanzi:"管理", pinyin:"guǎnlǐ", meaning_ar:"يدير / إدارة", audio:"audio/hsk4/管理.wav",
      example:{ hanzi:"他管理一个团队。", pinyin:"tā guǎnlǐ yí gè tuánduì", meaning_ar:"هو بيدير فريق." } },
    { id:"h4v204", hanzi:"效率", pinyin:"xiàolǜ", meaning_ar:"كفاءة (إنتاجية)", audio:"audio/hsk4/效率.wav",
      example:{ hanzi:"我们要提高效率。", pinyin:"wǒmen yào tígāo xiàolǜ", meaning_ar:"لازم نرفع الكفاءة." } },
    { id:"h4v205", hanzi:"经济", pinyin:"jīngjì", meaning_ar:"اقتصاد", audio:"audio/hsk4/经济.wav",
      example:{ hanzi:"经济正在发展。", pinyin:"jīngjì zhèngzài fāzhǎn", meaning_ar:"الاقتصاد بيتطور دلوقتي." } },
    { id:"h4v206", hanzi:"企业", pinyin:"qǐyè", meaning_ar:"شركة / مؤسسة", audio:"audio/hsk4/企业.wav",
      example:{ hanzi:"这是一家大企业。", pinyin:"zhè shì yì jiā dà qǐyè", meaning_ar:"دي شركة كبيرة." } },
    { id:"h4v207", hanzi:"投资", pinyin:"tóuzī", meaning_ar:"استثمار / يستثمر", audio:"audio/hsk4/投资.wav",
      example:{ hanzi:"他投资了这个项目。", pinyin:"tā tóuzī le zhège xiàngmù", meaning_ar:"هو استثمر في المشروع ده." } },
    { id:"h4v208", hanzi:"支持", pinyin:"zhīchí", meaning_ar:"يدعم / دعم", audio:"audio/hsk4/支持.wav",
      example:{ hanzi:"公司支持我的想法。", pinyin:"gōngsī zhīchí wǒ de xiǎngfǎ", meaning_ar:"الشركة بتدعم فكرتي." } },
    { id:"h4v209", hanzi:"竞争", pinyin:"jìngzhēng", meaning_ar:"منافسة", audio:"audio/hsk4/竞争.wav",
      example:{ hanzi:"市场竞争很激烈。", pinyin:"shìchǎng jìngzhēng hěn jīliè", meaning_ar:"المنافسة في السوق شرسة." } },
    { id:"h4v210", hanzi:"加班", pinyin:"jiābān", meaning_ar:"يعمل ساعات إضافية", audio:"audio/hsk4/加班.wav",
      example:{ hanzi:"我今天要加班。", pinyin:"wǒ jīntiān yào jiābān", meaning_ar:"لازم أشتغل وقت زيادة النهارده." } },
    { id:"h4v211", hanzi:"降低", pinyin:"jiàngdī", meaning_ar:"يخفض", audio:"audio/hsk4/降低.wav",
      example:{ hanzi:"公司降低了成本。", pinyin:"gōngsī jiàngdī le chéngběn", meaning_ar:"الشركة خفّضت التكاليف." } },
    { id:"h4v212", hanzi:"增加", pinyin:"zēngjiā", meaning_ar:"يزيد", audio:"audio/hsk4/增加.wav",
      example:{ hanzi:"销售增加了。", pinyin:"xiāoshòu zēngjiā le", meaning_ar:"المبيعات زادت." } }
  ],
  grammar: {
    title_ar: "التعبير عن سبب/نتيجة بـ 由于...因此",
    explanation_ar: "由于 بتقدّم السبب، و因此 بتقدّم النتيجة اللي مبنية عليه - مفيدة جدًا في كلام عن الشغل والاقتصاد.",
    pattern: "由于 + السبب،因此 + النتيجة",
    examples: [
      { hanzi:"由于市场竞争，因此公司降低了价格。", pinyin:"yóuyú shìchǎng jìngzhēng, yīncǐ gōngsī jiàngdī le jiàgé", meaning_ar:"بسبب المنافسة في السوق، الشركة خفّضت السعر." }
    ]
  },
  practiceSentences: [
    { id:"h4p201", type:"reorder", hanzi:"他 管理 一 个 团队", correctOrder:["他","管理","一","个","团队"], meaning_ar:"هو بيدير فريق." }
  ],
  quiz: [
    { id:"h4q201", question_ar:"إيه معنى 效率؟", vocabId:"h4v204",
      options:["مسؤولية","كفاءة/إنتاجية","استثمار","منافسة"], correctIndex:1 },
    { id:"h4q202", question_ar:"'راتب' بالصيني؟", vocabId:"h4v201",
      options:["工资","经济","企业","投资"], correctIndex:0 },
    { id:"h4q203", question_ar:"إيه الأداة اللي بتربط سبب بنتيجته؟", vocabId:"h4v209",
      options:["虽然...但是","由于...因此","不但...而且","如果...就"], correctIndex:1 }
  ],
  cultureCard: {
    id:"c-hsk4-l02", icon:"🏢",
    title_ar:"إيه هي ثقافة 加班 (العمل ساعات إضافية) في الصين؟",
    body_ar:"جدول 996 (يعني تشتغل من الساعة 9 الصبح لـ9 بالليل، 6 أيام في الأسبوع) بقى مصطلح معروف عالميًا بيوصف ثقافة العمل في شركات التكنولوجيا الصينية الكبيرة. الموضوع ده اتناقش كتير جوه الصين نفسها في السنين الأخيرة، وفيه ضغط اجتماعي وقانوني متزايد ضده، لكن لسه فيه توقع ضمني في قطاعات معينة إن الالتزام بالشركة معناه وقت إضافي. المفهوم مرتبط بفكرة 吃苦 (تحمّل المشقة) اللي بتتربط تاريخيًا بالنجاح والتقدير الاجتماعي.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 3: الصحة والعادات ------------------ */
{
  id: 3, level: "HSK4", title: "الصحة والعادات", title_cn: "健康习惯", icon: "🩺",
  words: [
    { id:"h4v301", hanzi:"减肥", pinyin:"jiǎnféi", meaning_ar:"يخسر وزنًا", audio:"audio/hsk4/减肥.wav",
      example:{ hanzi:"她在减肥。", pinyin:"tā zài jiǎnféi", meaning_ar:"هي بتحاول تخس دلوقتي." } },
    { id:"h4v302", hanzi:"失眠", pinyin:"shīmián", meaning_ar:"أرق", audio:"audio/hsk4/失眠.wav",
      example:{ hanzi:"我最近失眠了。", pinyin:"wǒ zuìjìn shīmián le", meaning_ar:"أنا مؤخرًا بعاني من الأرق." } },
    { id:"h4v303", hanzi:"营养", pinyin:"yíngyǎng", meaning_ar:"تغذية", audio:"audio/hsk4/营养.wav",
      example:{ hanzi:"这个食物很有营养。", pinyin:"zhège shíwù hěn yǒu yíngyǎng", meaning_ar:"الأكل ده غني بالعناصر الغذائية." } },
    { id:"h4v304", hanzi:"心理", pinyin:"xīnlǐ", meaning_ar:"نفسي (علم النفس)", audio:"audio/hsk4/心理.wav",
      example:{ hanzi:"他去看心理医生。", pinyin:"tā qù kàn xīnlǐ yīshēng", meaning_ar:"هو راح لدكتور نفسي." } },
    { id:"h4v305", hanzi:"抽烟", pinyin:"chōuyān", meaning_ar:"يدخن", audio:"audio/hsk4/抽烟.wav",
      example:{ hanzi:"他不抽烟。", pinyin:"tā bù chōuyān", meaning_ar:"هو مبيدخنش." } },
    { id:"h4v306", hanzi:"平衡", pinyin:"pínghéng", meaning_ar:"توازن", audio:"audio/hsk4/平衡.wav",
      example:{ hanzi:"生活要平衡。", pinyin:"shēnghuó yào pínghéng", meaning_ar:"الحياة لازم يبقى فيها توازن." } },
    { id:"h4v307", hanzi:"坚持", pinyin:"jiānchí", meaning_ar:"يصر / يواظب", audio:"audio/hsk4/坚持.wav",
      example:{ hanzi:"我每天坚持运动。", pinyin:"wǒ měitiān jiānchí yùndòng", meaning_ar:"باواظب على الرياضة كل يوم." } },
    { id:"h4v308", hanzi:"缓解", pinyin:"huǎnjiě", meaning_ar:"يخفف / يهدئ", audio:"audio/hsk4/缓解.wav",
      example:{ hanzi:"运动可以缓解压力。", pinyin:"yùndòng kěyǐ huǎnjiě yālì", meaning_ar:"الرياضة ممكن تخفف الضغط النفسي." } },
    { id:"h4v309", hanzi:"效果", pinyin:"xiàoguǒ", meaning_ar:"نتيجة / تأثير", audio:"audio/hsk4/效果.wav",
      example:{ hanzi:"这个方法效果很好。", pinyin:"zhège fāngfǎ xiàoguǒ hěn hǎo", meaning_ar:"الطريقة دي ليها نتيجة كويسة." } },
    { id:"h4v310", hanzi:"状态", pinyin:"zhuàngtài", meaning_ar:"حالة (صحية/نفسية)", audio:"audio/hsk4/状态.wav",
      example:{ hanzi:"他的状态不太好。", pinyin:"tā de zhuàngtài bú tài hǎo", meaning_ar:"حالته مش كويسة أوي." } }
  ],
  grammar: {
    title_ar: "التعبير عن إمكانية بـ 可以...来",
    explanation_ar: "لما تحبي توضحي إن حاجة معينة (وسيلة) بتُستخدم عشان توصلي لهدف، بتستخدمي 可以 + الفعل + 来 + الهدف.",
    pattern: "可以 + الوسيلة + 来 + الهدف",
    examples: [
      { hanzi:"运动可以帮助我们来缓解压力。", pinyin:"yùndòng kěyǐ bāngzhù wǒmen lái huǎnjiě yālì", meaning_ar:"الرياضة ممكن تساعدنا نخفف الضغط النفسي." }
    ]
  },
  practiceSentences: [
    { id:"h4p301", type:"reorder", hanzi:"我 每天 坚持 运动", correctOrder:["我","每天","坚持","运动"], meaning_ar:"باواظب على الرياضة كل يوم." }
  ],
  quiz: [
    { id:"h4q301", question_ar:"إيه معنى 缓解؟", vocabId:"h4v308",
      options:["يزيد","يخفف / يهدئ","يخس","يتوتر"], correctIndex:1 },
    { id:"h4q302", question_ar:"'أرق' بالصيني؟", vocabId:"h4v302",
      options:["失眠","营养","心理","状态"], correctIndex:0 },
    { id:"h4q303", question_ar:"إزاي تقولي 'باواظب على الرياضة كل يوم'؟", vocabId:"h4v307",
      options:["我每天坚持运动","我坚持每天运动了","每天我运动坚持","我运动坚持每天"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk4-l03", icon:"🍵",
    title_ar:"إيه علاقة فكرة 养生 (رعاية الحياة) بالصحة في الثقافة الصينية؟",
    body_ar:"养生 (yǎngshēng) مفهوم قديم جدًا بيربط الأكل والنوم والحركة اليومية برعاية الجسم على المدى الطويل، مش بس علاج المرض لما يحصل. من أمثلته: شرب مية سخنة بدل الباردة، وتوقيت معين للنوم مرتبط بالساعة البيولوجية حسب الطب الصيني التقليدي (中医)، والتوازن بين 阴 و阳 في الجسم. المفهوم ده اتجدد شعبيته جدًا في الأجيال الشابة في الصين، وهتلاقي منتجات وتطبيقات صحية كتير بتستخدم المصطلح ده كأساس تسويقي.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 4: البيئة والمجتمع ------------------ */
{
  id: 4, level: "HSK4", title: "البيئة والمجتمع", title_cn: "环境与社会", icon: "🌱",
  words: [
    { id:"h4v401", hanzi:"环境", pinyin:"huánjìng", meaning_ar:"بيئة", audio:"audio/hsk4/环境.wav",
      example:{ hanzi:"我们要保护环境。", pinyin:"wǒmen yào bǎohù huánjìng", meaning_ar:"لازم نحافظ على البيئة." } },
    { id:"h4v402", hanzi:"保护", pinyin:"bǎohù", meaning_ar:"يحمي / حماية", audio:"audio/hsk4/保护.wav",
      example:{ hanzi:"我们应该保护动物。", pinyin:"wǒmen yīnggāi bǎohù dòngwù", meaning_ar:"لازم نحمي الحيوانات." } },
    { id:"h4v403", hanzi:"资源", pinyin:"zīyuán", meaning_ar:"مورد", audio:"audio/hsk4/资源.wav",
      example:{ hanzi:"水是重要的资源。", pinyin:"shuǐ shì zhòngyào de zīyuán", meaning_ar:"المية مورد مهم." } },
    { id:"h4v404", hanzi:"节约", pinyin:"jiéyuē", meaning_ar:"يوفر / اقتصاد", audio:"audio/hsk4/节约.wav",
      example:{ hanzi:"我们要节约用水。", pinyin:"wǒmen yào jiéyuē yòng shuǐ", meaning_ar:"لازم نوفّر في استخدام المية." } },
    { id:"h4v405", hanzi:"浪费", pinyin:"làngfèi", meaning_ar:"يبذّر / إسراف", audio:"audio/hsk4/浪费.wav",
      example:{ hanzi:"不要浪费食物。", pinyin:"búyào làngfèi shíwù", meaning_ar:"متبذرش في الأكل." } },
    { id:"h4v406", hanzi:"大自然", pinyin:"dàzìrán", meaning_ar:"الطبيعة", audio:"audio/hsk4/大自然.wav",
      example:{ hanzi:"我喜欢大自然。", pinyin:"wǒ xǐhuan dàzìrán", meaning_ar:"بحب الطبيعة." } },
    { id:"h4v407", hanzi:"农业", pinyin:"nóngyè", meaning_ar:"زراعة", audio:"audio/hsk4/农业.wav",
      example:{ hanzi:"这个地区以农业为主。", pinyin:"zhège dìqū yǐ nóngyè wéi zhǔ", meaning_ar:"المنطقة دي أساسها الزراعة." } },
    { id:"h4v408", hanzi:"土地", pinyin:"tǔdì", meaning_ar:"أرض (تربة)", audio:"audio/hsk4/土地.wav",
      example:{ hanzi:"这片土地很肥沃。", pinyin:"zhè piàn tǔdì hěn féiwò", meaning_ar:"الأرض دي خصبة." } },
    { id:"h4v409", hanzi:"灾害", pinyin:"zāihài", meaning_ar:"كارثة", audio:"audio/hsk4/灾害.wav",
      example:{ hanzi:"这是一场自然灾害。", pinyin:"zhè shì yì chǎng zìrán zāihài", meaning_ar:"دي كارثة طبيعية." } }
  ],
  grammar: {
    title_ar: "التعبير عن هدف بـ 为了",
    explanation_ar: "为了 بتيجي في أول الجملة عشان توضحي الهدف اللي من أجله بيحصل الفعل التاني.",
    pattern: "为了 + الهدف，+ الجملة",
    examples: [
      { hanzi:"为了保护环境，我们要节约用水。", pinyin:"wèile bǎohù huánjìng, wǒmen yào jiéyuē yòng shuǐ", meaning_ar:"عشان نحافظ على البيئة، لازم نوفّر في استخدام المية." }
    ]
  },
  practiceSentences: [
    { id:"h4p401", type:"reorder", hanzi:"我们 要 保护 环境", correctOrder:["我们","要","保护","环境"], meaning_ar:"لازم نحافظ على البيئة." }
  ],
  quiz: [
    { id:"h4q401", question_ar:"إيه معنى 浪费؟", vocabId:"h4v405",
      options:["يوفر","يبذّر / إسراف","يحمي","يزرع"], correctIndex:1 },
    { id:"h4q402", question_ar:"'مورد' بالصيني؟", vocabId:"h4v403",
      options:["资源","环境","土地","灾害"], correctIndex:0 },
    { id:"h4q403", question_ar:"إيه الأداة اللي بتقدّم بيها هدف الجملة؟", vocabId:"h4v402",
      options:["因为","为了","虽然","除了"], correctIndex:1 }
  ],
  cultureCard: {
    id:"c-hsk4-l04", icon:"🌾",
    title_ar:"إيه هو نظام 户口 وعلاقته بالأرض والزراعة في الصين؟",
    body_ar:"نظام تسجيل السكان (户口) بيقسم المواطنين تاريخيًا بين ريفي وحضري، وده أثّر كتير في ملكية الأرض الزراعية - الفلاحين في الأرياف عندهم حق استخدام قطعة أرض جماعية لكن مش ملكية فردية كاملة زي بلاد تانية. في العقود الأخيرة، الهجرة الكبيرة من الريف للمدن (بحثًا عن شغل أفضل) خلقت ظاهرة العمال المهاجرين (农民工) اللي بيسيبوا الأرض ويشتغلوا في المصانع والمدن الكبيرة، مع احتفاظهم بحقهم في أرض قريتهم الأصلية.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 5: العلاقات والمشاعر ------------------ */
{
  id: 5, level: "HSK4", title: "العلاقات والمشاعر", title_cn: "关系与感情", icon: "❤️",
  words: [
    { id:"h4v501", hanzi:"感情", pinyin:"gǎnqíng", meaning_ar:"عاطفة / مشاعر", audio:"audio/hsk4/感情.wav",
      example:{ hanzi:"他们的感情很深。", pinyin:"tāmen de gǎnqíng hěn shēn", meaning_ar:"مشاعرهم عميقة جدًا." } },
    { id:"h4v502", hanzi:"信任", pinyin:"xìnrèn", meaning_ar:"يثق بـ / ثقة", audio:"audio/hsk4/信任.wav",
      example:{ hanzi:"我很信任他。", pinyin:"wǒ hěn xìnrèn tā", meaning_ar:"أنا بثق فيه جدًا." } },
    { id:"h4v503", hanzi:"误会", pinyin:"wùhuì", meaning_ar:"سوء فهم", audio:"audio/hsk4/误会.wav",
      example:{ hanzi:"这是一个误会。", pinyin:"zhè shì yí gè wùhuì", meaning_ar:"ده سوء فهم." } },
    { id:"h4v504", hanzi:"矛盾", pinyin:"máodùn", meaning_ar:"تناقض / خلاف", audio:"audio/hsk4/矛盾.wav",
      example:{ hanzi:"他们之间有矛盾。", pinyin:"tāmen zhījiān yǒu máodùn", meaning_ar:"بينهم خلاف." } },
    { id:"h4v505", hanzi:"拥抱", pinyin:"yōngbào", meaning_ar:"يعانق", audio:"audio/hsk4/拥抱.wav",
      example:{ hanzi:"她拥抱了我。", pinyin:"tā yōngbào le wǒ", meaning_ar:"هي عانقتني." } },
    { id:"h4v506", hanzi:"亲切", pinyin:"qīnqiè", meaning_ar:"ودود", audio:"audio/hsk4/亲切.wav",
      example:{ hanzi:"她对人很亲切。", pinyin:"tā duì rén hěn qīnqiè", meaning_ar:"هي ودودة جدًا مع الناس." } },
    { id:"h4v507", hanzi:"尊敬", pinyin:"zūnjìng", meaning_ar:"يحترم / احترام", audio:"audio/hsk4/尊敬.wav",
      example:{ hanzi:"我们应该尊敬老人。", pinyin:"wǒmen yīnggāi zūnjìng lǎorén", meaning_ar:"لازم نحترم كبار السن." } },
    { id:"h4v508", hanzi:"忍不住", pinyin:"rěnbuzhù", meaning_ar:"لا يستطيع كبح نفسه", audio:"audio/hsk4/忍不住.wav",
      example:{ hanzi:"我忍不住笑了。", pinyin:"wǒ rěnbuzhù xiào le", meaning_ar:"مقدرتش أمنع نفسي من الضحك." } }
  ],
  grammar: {
    title_ar: "التعبير عن تناقض بـ 尽管...但是",
    explanation_ar: "尽管 بتقدّم حقيقة معينة، و但是 بعدها بتقدّم نتيجة عكسية أو غير متوقعة منها.",
    pattern: "尽管 + الحقيقة الأولى，但是 + العكس منها",
    examples: [
      { hanzi:"尽管他们有矛盾，但是感情还是很深。", pinyin:"jǐnguǎn tāmen yǒu máodùn, dànshì gǎnqíng háishi hěn shēn", meaning_ar:"رغم إن بينهم خلاف، لكن مشاعرهم لسه عميقة." }
    ]
  },
  practiceSentences: [
    { id:"h4p501", type:"reorder", hanzi:"我 很 信任 他", correctOrder:["我","很","信任","他"], meaning_ar:"أنا بثق فيه جدًا." }
  ],
  quiz: [
    { id:"h4q501", question_ar:"إيه معنى 误会؟", vocabId:"h4v503",
      options:["ثقة","سوء فهم","احترام","عاطفة"], correctIndex:1 },
    { id:"h4q502", question_ar:"'يعانق' بالصيني؟", vocabId:"h4v505",
      options:["拥抱","亲切","尊敬","矛盾"], correctIndex:0 },
    { id:"h4q503", question_ar:"إيه الأداة اللي بتعبّر عن تناقض بين جزئين؟", vocabId:"h4v504",
      options:["因为...所以","尽管...但是","一边...一边","越来越"], correctIndex:1 }
  ],
  cultureCard: {
    id:"c-hsk4-l05", icon:"🤝",
    title_ar:"إيه الفرق بين التعبير عن المشاعر علنًا في الصين وفي بلاد تانية؟",
    body_ar:"التعبير الجسدي عن المودة (زي العناق أو القبلة) في الأماكن العامة أقل شيوعًا في الصين مقارنة ببلاد كتير تانية، وده مش معناه إن المشاعر أضعف - غالبًا بيتعبّر عنها بطرق تانية زي الاهتمام العملي (يجيبلك أكل، يهتم بصحتك، يوصّلك) بدل الكلام العاطفي المباشر أو اللمس. المفهوم ده مرتبط بفكرة 含蓄 (التحفظ/عدم المباشرة) اللي بتتقدّر اجتماعيًا في كتير من المواقف، لكن ده بيختلف كتير بين الأجيال، خصوصًا في المدن الكبيرة بين الشباب.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 6: التكنولوجيا والمستقبل ------------------ */
{
  id: 6, level: "HSK4", title: "التكنولوجيا والمستقبل", title_cn: "科技与未来", icon: "💻",
  words: [
    { id:"h4v601", hanzi:"软件", pinyin:"ruǎnjiàn", meaning_ar:"برمجيات", audio:"audio/hsk4/软件.wav",
      example:{ hanzi:"这个软件很好用。", pinyin:"zhège ruǎnjiàn hěn hǎo yòng", meaning_ar:"البرنامج ده كويس ومفيد." } },
    { id:"h4v602", hanzi:"互联网", pinyin:"hùliánwǎng", meaning_ar:"الإنترنت", audio:"audio/hsk4/互联网.wav",
      example:{ hanzi:"互联网改变了我们的生活。", pinyin:"hùliánwǎng gǎibiàn le wǒmen de shēnghuó", meaning_ar:"الإنترنت غيّر حياتنا." } },
    { id:"h4v603", hanzi:"数码", pinyin:"shùmǎ", meaning_ar:"رقمي", audio:"audio/hsk4/数码.wav",
      example:{ hanzi:"我买了一个数码相机。", pinyin:"wǒ mǎi le yí gè shùmǎ xiàngjī", meaning_ar:"اشتريت كاميرا رقمية." } },
    { id:"h4v604", hanzi:"系统", pinyin:"xìtǒng", meaning_ar:"نظام", audio:"audio/hsk4/系统.wav",
      example:{ hanzi:"这个系统很复杂。", pinyin:"zhège xìtǒng hěn fùzá", meaning_ar:"النظام ده معقد." } },
    { id:"h4v605", hanzi:"应用", pinyin:"yìngyòng", meaning_ar:"يطبّق / تطبيق", audio:"audio/hsk4/应用.wav",
      example:{ hanzi:"这个理论有很多应用。", pinyin:"zhège lǐlùn yǒu hěn duō yìngyòng", meaning_ar:"النظرية دي ليها تطبيقات كتير." } },
    { id:"h4v606", hanzi:"科学", pinyin:"kēxué", meaning_ar:"علم / علمي", audio:"audio/hsk4/科学.wav",
      example:{ hanzi:"这是一个科学问题。", pinyin:"zhè shì yí gè kēxué wèntí", meaning_ar:"دي مسألة علمية." } },
    { id:"h4v607", hanzi:"未来", pinyin:"wèilái", meaning_ar:"المستقبل", audio:"audio/hsk4/未来.wav",
      example:{ hanzi:"我对未来很有信心。", pinyin:"wǒ duì wèilái hěn yǒu xìnxīn", meaning_ar:"أنا واثق في المستقبل." } },
    { id:"h4v608", hanzi:"掌握", pinyin:"zhǎngwò", meaning_ar:"يتقن / يسيطر على", audio:"audio/hsk4/掌握.wav",
      example:{ hanzi:"他掌握了这门技术。", pinyin:"tā zhǎngwò le zhè mén jìshù", meaning_ar:"هو أتقن التقنية دي." } }
  ],
  grammar: {
    title_ar: "التعبير عن نتيجة تدريجية بـ 随着...越来越",
    explanation_ar: "随着 بتقدّم تطور أو حدث مستمر، و越来越 بعدها بتوصفي إزاي حاجة تانية بتتغير بشكل تدريجي نتيجة له.",
    pattern: "随着 + التطور，+ الشيء + 越来越 + الصفة",
    examples: [
      { hanzi:"随着科技的发展，生活越来越方便了。", pinyin:"suízhe kējì de fāzhǎn, shēnghuó yuè lái yuè fāngbiàn le", meaning_ar:"مع تطور التكنولوجيا، الحياة بقت أسهل وأسهل." }
    ]
  },
  practiceSentences: [
    { id:"h4p601", type:"reorder", hanzi:"互联网 改变 了 我们 的 生活", correctOrder:["互联网","改变","了","我们","的","生活"], meaning_ar:"الإنترنت غيّر حياتنا." }
  ],
  quiz: [
    { id:"h4q601", question_ar:"إيه معنى 掌握؟", vocabId:"h4v608",
      options:["يتقن / يسيطر على","يطبّق","يفهم بس","ينسى"], correctIndex:0 },
    { id:"h4q602", question_ar:"'الإنترنت' بالصيني؟", vocabId:"h4v602",
      options:["软件","互联网","系统","数码"], correctIndex:1 },
    { id:"h4q603", question_ar:"إيه الأداة اللي بتوصف تغيّر تدريجي مرتبط بتطور حاجة تانية؟", vocabId:"h4v607",
      options:["随着...越来越","为了...而","尽管...但是","不但...而且"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk4-l06", icon:"📱",
    title_ar:"ليه الدفع بالموبايل (支付宝/微信支付) بقى شبه إجباري في الصين؟",
    body_ar:"الصين قفزت من الكاش مباشرة لأنظمة الدفع بالموبايل (زي Alipay وWeChat Pay) من غير ما تمر بمرحلة انتشار البطاقات البنكية زي بلاد تانية كتير. النتيجة إنك دلوقتي في المدن الكبيرة تلاقي بائعين متجولين وأسواق شعبية بيقبلوا بس الدفع بالكيو آر كود، ومحدش بيحمل كاش تقريبًا. الموضوع ده غيّر حتى طريقة الناس في إدارة فلوسهم وتتبع مصاريفهم اليومية، لأن كل حاجة بقت مسجلة رقميًا في التطبيقين دول.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 7: السفر والانتقال ------------------ */
{
  id: 7, level: "HSK4", title: "السفر والانتقال", title_cn: "旅行与移居", icon: "✈️",
  words: [
    { id:"h4v701", hanzi:"签证", pinyin:"qiānzhèng", meaning_ar:"تأشيرة", audio:"audio/hsk4/签证.wav",
      example:{ hanzi:"我在办签证。", pinyin:"wǒ zài bàn qiānzhèng", meaning_ar:"باستخرج تأشيرة دلوقتي." } },
    { id:"h4v702", hanzi:"移民", pinyin:"yímín", meaning_ar:"يهاجر / مهاجر", audio:"audio/hsk4/移民.wav",
      example:{ hanzi:"他移民到了加拿大。", pinyin:"tā yímín dào le jiānádà", meaning_ar:"هو هاجر لكندا." } },
    { id:"h4v703", hanzi:"大使馆", pinyin:"dàshǐguǎn", meaning_ar:"سفارة", audio:"audio/hsk4/大使馆.wav",
      example:{ hanzi:"我要去大使馆。", pinyin:"wǒ yào qù dàshǐguǎn", meaning_ar:"لازم أروح السفارة." } },
    { id:"h4v704", hanzi:"导游", pinyin:"dǎoyóu", meaning_ar:"مرشد سياحي", audio:"audio/hsk4/导游.wav",
      example:{ hanzi:"我们请了一个导游。", pinyin:"wǒmen qǐng le yí gè dǎoyóu", meaning_ar:"استأجرنا مرشد سياحي." } },
    { id:"h4v705", hanzi:"交通", pinyin:"jiāotōng", meaning_ar:"مواصلات / مرور", audio:"audio/hsk4/交通.wav",
      example:{ hanzi:"这里的交通很方便。", pinyin:"zhèli de jiāotōng hěn fāngbiàn", meaning_ar:"المواصلات هنا سهلة أوي." } },
    { id:"h4v706", hanzi:"距离", pinyin:"jùlí", meaning_ar:"مسافة", audio:"audio/hsk4/距离.wav",
      example:{ hanzi:"这两个城市距离很远。", pinyin:"zhè liǎng gè chéngshì jùlí hěn yuǎn", meaning_ar:"المدينتين ديه المسافة بينهم بعيدة." } },
    { id:"h4v707", hanzi:"位于", pinyin:"wèiyú", meaning_ar:"يقع في", audio:"audio/hsk4/位于.wav",
      example:{ hanzi:"这个城市位于中国南方。", pinyin:"zhège chéngshì wèiyú zhōngguó nánfāng", meaning_ar:"المدينة دي واقعة جنوب الصين." } },
    { id:"h4v708", hanzi:"国际", pinyin:"guójì", meaning_ar:"دولي", audio:"audio/hsk4/国际.wav",
      example:{ hanzi:"这是一个国际机场。", pinyin:"zhè shì yí gè guójì jīchǎng", meaning_ar:"ده مطار دولي." } },
    { id:"h4v709", hanzi:"国籍", pinyin:"guójí", meaning_ar:"جنسية", audio:"audio/hsk4/国籍.wav",
      example:{ hanzi:"他的国籍是埃及。", pinyin:"tā de guójí shì āijí", meaning_ar:"جنسيته مصري." } }
  ],
  grammar: {
    title_ar: "التعبير عن إضافة بـ 除了...以外，还",
    explanation_ar: "لما تحبي تقولي 'غير حاجة معينة، فيه كمان حاجة تانية' بتستخدمي 除了 + الحاجة الأولى + 以外，还 + الحاجة التانية.",
    pattern: "除了 + الحاجة الأولى + 以外，还 + الحاجة التانية",
    examples: [
      { hanzi:"除了签证以外，还需要护照。", pinyin:"chúle qiānzhèng yǐwài, hái xūyào hùzhào", meaning_ar:"غير التأشيرة، لسه محتاج جواز سفر كمان." }
    ]
  },
  practiceSentences: [
    { id:"h4p701", type:"reorder", hanzi:"这个 城市 位于 中国 南方", correctOrder:["这个","城市","位于","中国","南方"], meaning_ar:"المدينة دي واقعة جنوب الصين." }
  ],
  quiz: [
    { id:"h4q701", question_ar:"إيه معنى 移民؟", vocabId:"h4v702",
      options:["يزور","يهاجر / مهاجر","يترجم","يعود"], correctIndex:1 },
    { id:"h4q702", question_ar:"'سفارة' بالصيني؟", vocabId:"h4v703",
      options:["大使馆","导游","国际","交通"], correctIndex:0 },
    { id:"h4q703", question_ar:"إزاي تقولي 'غير التأشيرة، لسه محتاج جواز سفر كمان'؟", vocabId:"h4v701",
      options:["除了签证以外，还需要护照","除了以外签证，还需要护照","签证除了以外还需要护照","还除了签证以外需要护照"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk4-l07", icon:"🛂",
    title_ar:"إيه هو نظام 户口 وعلاقته بحرية التنقل جوه الصين نفسها؟",
    body_ar:"غريب إن أصعب هجرة بالنسبة لمواطن صيني عادي ممكن تكون داخلية مش دولية - نظام 户口 (تسجيل السكان) بيربط كل مواطن بمكان ميلاده، وده بيأثر على حقه في التعليم المجاني والتأمين الصحي لو انتقل لمدينة تانية من غير ما يغيّر تسجيله. عشان كده هتلاقي ملايين العمال المهاجرين داخليًا بيشتغلوا في مدن كبيرة زي شنغهاي وبكين، لكن أولادهم أحيانًا بيرجعوا يدرسوا في مسقط رأس العيلة عشان مشاكل التسجيل دي.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 8: القانون والمجتمع ------------------ */
{
  id: 8, level: "HSK4", title: "القانون والمجتمع", title_cn: "法律与社会", icon: "⚖️",
  words: [
    { id:"h4v801", hanzi:"法律", pinyin:"fǎlǜ", meaning_ar:"قانون", audio:"audio/hsk4/法律.wav",
      example:{ hanzi:"这是违反法律的。", pinyin:"zhè shì wéifǎn fǎlǜ de", meaning_ar:"ده مخالف للقانون." } },
    { id:"h4v802", hanzi:"政府", pinyin:"zhèngfǔ", meaning_ar:"حكومة", audio:"audio/hsk4/政府.wav",
      example:{ hanzi:"政府发布了新政策。", pinyin:"zhèngfǔ fābù le xīn zhèngcè", meaning_ar:"الحكومة أصدرت سياسة جديدة." } },
    { id:"h4v803", hanzi:"政治", pinyin:"zhèngzhì", meaning_ar:"سياسة", audio:"audio/hsk4/政治.wav",
      example:{ hanzi:"我对政治不感兴趣。", pinyin:"wǒ duì zhèngzhì bù gǎn xìngqù", meaning_ar:"مش مهتم بالسياسة." } },
    { id:"h4v804", hanzi:"罪犯", pinyin:"zuìfàn", meaning_ar:"مجرم", audio:"audio/hsk4/罪犯.wav",
      example:{ hanzi:"警察抓住了罪犯。", pinyin:"jǐngchá zhuāzhù le zuìfàn", meaning_ar:"الشرطة مسكت المجرم." } },
    { id:"h4v805", hanzi:"遵守", pinyin:"zūnshǒu", meaning_ar:"يلتزم بـ (قانون)", audio:"audio/hsk4/遵守.wav",
      example:{ hanzi:"我们要遵守规则。", pinyin:"wǒmen yào zūnshǒu guīzé", meaning_ar:"لازم نلتزم بالقواعد." } },
    { id:"h4v806", hanzi:"证件", pinyin:"zhèngjiàn", meaning_ar:"وثيقة (هوية)", audio:"audio/hsk4/证件.wav",
      example:{ hanzi:"请出示您的证件。", pinyin:"qǐng chūshì nín de zhèngjiàn", meaning_ar:"من فضلك اعرض وثيقة هويتك." } },
    { id:"h4v807", hanzi:"违反", pinyin:"wéifǎn", meaning_ar:"يخالف (قانونًا)", audio:"audio/hsk4/违反.wav",
      example:{ hanzi:"他违反了交通规则。", pinyin:"tā wéifǎn le jiāotōng guīzé", meaning_ar:"هو خالف قواعد المرور." } },
    { id:"h4v808", hanzi:"禁止", pinyin:"jìnzhǐ", meaning_ar:"يمنع", audio:"audio/hsk4/禁止.wav",
      example:{ hanzi:"这里禁止抽烟。", pinyin:"zhèli jìnzhǐ chōuyān", meaning_ar:"التدخين ممنوع هنا." } },
    { id:"h4v809", hanzi:"记者", pinyin:"jìzhě", meaning_ar:"صحفي", audio:"audio/hsk4/记者.wav",
      example:{ hanzi:"她是一名记者。", pinyin:"tā shì yì míng jìzhě", meaning_ar:"هي صحفية." } },
    { id:"h4v810", hanzi:"宣布", pinyin:"xuānbù", meaning_ar:"يعلن", audio:"audio/hsk4/宣布.wav",
      example:{ hanzi:"政府宣布了新消息。", pinyin:"zhèngfǔ xuānbù le xīn xiāoxi", meaning_ar:"الحكومة أعلنت خبر جديد." } }
  ],
  grammar: {
    title_ar: "التعبير عن نتيجة فورية بـ 一旦...就",
    explanation_ar: "一旦 بتقدّم شرط أو حدث، و就 بعدها بتقدّم النتيجة اللي بتحصل فورًا لما يتحقق الشرط ده.",
    pattern: "一旦 + الشرط，就 + النتيجة",
    examples: [
      { hanzi:"一旦违反法律，就会受到处罚。", pinyin:"yídàn wéifǎn fǎlǜ, jiù huì shòudào chǔfá", meaning_ar:"لو خالفت القانون، هتتعاقب فورًا." }
    ]
  },
  practiceSentences: [
    { id:"h4p801", type:"reorder", hanzi:"我们 要 遵守 规则", correctOrder:["我们","要","遵守","规则"], meaning_ar:"لازم نلتزم بالقواعد." }
  ],
  quiz: [
    { id:"h4q801", question_ar:"إيه معنى 违反؟", vocabId:"h4v807",
      options:["يلتزم بـ","يخالف (قانونًا)","يعلن","يمنع"], correctIndex:1 },
    { id:"h4q802", question_ar:"'مجرم' بالصيني؟", vocabId:"h4v804",
      options:["罪犯","记者","政府","证件"], correctIndex:0 },
    { id:"h4q803", question_ar:"إيه الأداة اللي بتعبّر عن نتيجة فورية لشرط؟", vocabId:"h4v808",
      options:["一旦...就","不但...而且","虽然...但是","除了...以外"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk4-l08", icon:"📰",
    title_ar:"إيه دور 关系 (العلاقات الشخصية) في التعامل مع القانون والبيروقراطية؟",
    body_ar:"في تعاملات كتير يومية زي استخراج وثيقة أو حل مشكلة إدارية، معرفة الشخص المناسب (关系) ممكن تسهّل الإجراءات الرسمية بشكل كبير - ده مش رشوة بالضرورة، لكن شبكة معارف وثقة متبادلة بتتراكم بمرور الوقت. الحكومة الصينية في العقد الأخير بذلت مجهود كبير في الرقمنة (زي تطبيقات موحدة للخدمات الحكومية) عشان تقلل الاعتماد على الوسطاء والمعارف الشخصية في الإجراءات الرسمية، لكن الثقافة دي لسه موجودة وبتأثر في مجالات تانية زي الشغل والتجارة.",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 9: الثقافة والفن ------------------ */
{
  id: 9, level: "HSK4", title: "الثقافة والفن", title_cn: "文化与艺术", icon: "🎭",
  words: [
    { id:"h4v901", hanzi:"传统", pinyin:"chuántǒng", meaning_ar:"تقليد / تقليدي", audio:"audio/hsk4/传统.wav",
      example:{ hanzi:"这是一个传统节日。", pinyin:"zhè shì yí gè chuántǒng jiérì", meaning_ar:"ده عيد تقليدي." } },
    { id:"h4v902", hanzi:"文明", pinyin:"wénmíng", meaning_ar:"حضارة / متحضر", audio:"audio/hsk4/文明.wav",
      example:{ hanzi:"中国有悠久的文明。", pinyin:"zhōngguó yǒu yōujiǔ de wénmíng", meaning_ar:"الصين عندها حضارة عريقة." } },
    { id:"h4v903", hanzi:"文学", pinyin:"wénxué", meaning_ar:"أدب", audio:"audio/hsk4/文学.wav",
      example:{ hanzi:"她喜欢古典文学。", pinyin:"tā xǐhuan gǔdiǎn wénxué", meaning_ar:"هي بتحب الأدب الكلاسيكي." } },
    { id:"h4v904", hanzi:"作品", pinyin:"zuòpǐn", meaning_ar:"عمل (فني/أدبي)", audio:"audio/hsk4/作品.wav",
      example:{ hanzi:"这是他的代表作品。", pinyin:"zhè shì tā de dàibiǎo zuòpǐn", meaning_ar:"ده أشهر أعماله." } },
    { id:"h4v905", hanzi:"表演", pinyin:"biǎoyǎn", meaning_ar:"يؤدي / أداء (فني)", audio:"audio/hsk4/表演.wav",
      example:{ hanzi:"这个表演很精彩。", pinyin:"zhège biǎoyǎn hěn jīngcǎi", meaning_ar:"الأداء ده رائع أوي." } },
    { id:"h4v906", hanzi:"欣赏", pinyin:"xīnshǎng", meaning_ar:"يقدّر / يستمتع بـ", audio:"audio/hsk4/欣赏.wav",
      example:{ hanzi:"我很欣赏他的才华。", pinyin:"wǒ hěn xīnshǎng tā de cáihuá", meaning_ar:"أنا معجب جدًا بموهبته." } },
    { id:"h4v907", hanzi:"古代", pinyin:"gǔdài", meaning_ar:"العصور القديمة", audio:"audio/hsk4/古代.wav",
      example:{ hanzi:"这是古代的建筑。", pinyin:"zhè shì gǔdài de jiànzhù", meaning_ar:"دي عمارة من العصور القديمة." } },
    { id:"h4v908", hanzi:"象征", pinyin:"xiàngzhēng", meaning_ar:"يرمز إلى / رمز", audio:"audio/hsk4/象征.wav",
      example:{ hanzi:"龙象征着力量。", pinyin:"lóng xiàngzhēng zhe lìliàng", meaning_ar:"التنين بيرمز للقوة." } }
  ],
  grammar: {
    title_ar: "التعبير عن سبب حقيقي بـ 之所以...是因为",
    explanation_ar: "之所以 بتقدّم النتيجة/الظاهرة الأول، و是因为 بعدها بتوضح السبب الحقيقي وراها - أسلوب رسمي شوية بيستخدم في الكلام عن ظواهر ثقافية أو اجتماعية.",
    pattern: "الفاعل + 之所以 + النتيجة，是因为 + السبب",
    examples: [
      { hanzi:"这个传统之所以重要，是因为它象征着家庭的团圆。", pinyin:"zhège chuántǒng zhī suǒyǐ zhòngyào, shì yīnwèi tā xiàngzhēng zhe jiātíng de tuányuán", meaning_ar:"التقليد ده مهم لأنه بيرمز لتجمّع العيلة." } ]
  },
  practiceSentences: [
    { id:"h4p901", type:"reorder", hanzi:"这个 表演 很 精彩", correctOrder:["这个","表演","很","精彩"], meaning_ar:"الأداء ده رائع أوي." }
  ],
  quiz: [
    { id:"h4q901", question_ar:"إيه معنى 象征؟", vocabId:"h4v908",
      options:["يقدّر","يرمز إلى / رمز","يؤدي","يكتب"], correctIndex:1 },
    { id:"h4q902", question_ar:"'أدب' بالصيني؟", vocabId:"h4v903",
      options:["文学","文明","作品","传统"], correctIndex:0 },
    { id:"h4q903", question_ar:"إيه الأداة اللي بتقدّم بيها سبب حقيقي لظاهرة معينة؟", vocabId:"h4v901",
      options:["之所以...是因为","一旦...就","除了...以外","越来越"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk4-l09", icon:"🐉",
    title_ar:"ليه التنين (龙) رمز إيجابي في الصين بعكس تصويره في ثقافات تانية؟",
    body_ar:"في كتير من الثقافات الغربية التنين مرتبط بالخطر والشر، لكن في الصين 龙 رمز للقوة والحظ الطيب والسلطة الإمبراطورية تاريخيًا - الإمبراطور كان بيتلقب بـ'ابن التنين'. عشان كده تلاقي التنين حاضر بقوة في احتفالات زي رأس السنة الصينية (رقصة التنين 舞龙)، وفي فن العمارة التقليدية، وحتى في تسمية السنة القمرية كل 12 سنة (سنة التنين تعتبر من أكتر السنين المحظوظة للولادة فيها حسب المعتقد الشعبي).",
    relatedTo:"daily_life"
  }
},

/* ------------------ الدرس 10: الشخصية والصفات ------------------ */
{
  id: 10, level: "HSK4", title: "الشخصية والصفات", title_cn: "性格特点", icon: "🧩",
  words: [
    { id:"h4v1001", hanzi:"诚实", pinyin:"chéngshí", meaning_ar:"صادق / أمين", audio:"audio/hsk4/诚实.wav",
      example:{ hanzi:"他是一个诚实的人。", pinyin:"tā shì yí gè chéngshí de rén", meaning_ar:"هو راجل صادق." } },
    { id:"h4v1002", hanzi:"骄傲", pinyin:"jiāoào", meaning_ar:"فخور / متكبر", audio:"audio/hsk4/骄傲.wav",
      example:{ hanzi:"她对自己的成绩很骄傲。", pinyin:"tā duì zìjǐ de chéngjì hěn jiāoào", meaning_ar:"هي فخورة بإنجازاتها." } },
    { id:"h4v1003", hanzi:"谦虚", pinyin:"qiānxū", meaning_ar:"متواضع", audio:"audio/hsk4/谦虚.wav",
      example:{ hanzi:"他很谦虚，从不炫耀。", pinyin:"tā hěn qiānxū, cóng bù xuànyào", meaning_ar:"هو متواضع جدًا، مابيتفاخرش أبدًا." } },
    { id:"h4v1004", hanzi:"勤奋", pinyin:"qínfèn", meaning_ar:"مجتهد", audio:"audio/hsk4/勤奋.wav",
      example:{ hanzi:"她工作很勤奋。", pinyin:"tā gōngzuò hěn qínfèn", meaning_ar:"هي بتشتغل باجتهاد." } },
    { id:"h4v1005", hanzi:"懒", pinyin:"lǎn", meaning_ar:"كسول", audio:"audio/hsk4/懒.wav",
      example:{ hanzi:"他今天有点懒。", pinyin:"tā jīntiān yǒudiǎn lǎn", meaning_ar:"هو النهارده شوية كسول." } },
    { id:"h4v1006", hanzi:"乐观", pinyin:"lèguān", meaning_ar:"متفائل", audio:"audio/hsk4/乐观.wav",
      example:{ hanzi:"她总是很乐观。", pinyin:"tā zǒngshì hěn lèguān", meaning_ar:"هي دايمًا متفائلة." } },
    { id:"h4v1007", hanzi:"自私", pinyin:"zìsī", meaning_ar:"أناني", audio:"audio/hsk4/自私.wav",
      example:{ hanzi:"他有点自私。", pinyin:"tā yǒudiǎn zìsī", meaning_ar:"هو شوية أناني." } },
    { id:"h4v1008", hanzi:"冷静", pinyin:"lěngjìng", meaning_ar:"هادئ / رابط الجأش", audio:"audio/hsk4/冷静.wav",
      example:{ hanzi:"遇到问题要冷静。", pinyin:"yùdào wèntí yào lěngjìng", meaning_ar:"لما تقابل مشكلة لازم تفضل هادئ." } },
    { id:"h4v1009", hanzi:"耐心", pinyin:"nàixīn", meaning_ar:"صبور / صبر", audio:"audio/hsk4/耐心.wav",
      example:{ hanzi:"老师很有耐心。", pinyin:"lǎoshī hěn yǒu nàixīn", meaning_ar:"المدرس صبور جدًا." } }
  ],
  grammar: {
    title_ar: "وصف شخصية بصفتين بـ 又...又",
    explanation_ar: "又...又 بتستخدم عشان توصفي حاجة أو شخص بصفتين في نفس الوقت.",
    pattern: "又 + الصفة الأولى + 又 + الصفة التانية",
    examples: [
      { hanzi:"他又勤奋又谦虚。", pinyin:"tā yòu qínfèn yòu qiānxū", meaning_ar:"هو مجتهد ومتواضع في نفس الوقت." }
    ]
  },
  practiceSentences: [
    { id:"h4p1001", type:"reorder", hanzi:"她 总是 很 乐观", correctOrder:["她","总是","很","乐观"], meaning_ar:"هي دايمًا متفائلة." }
  ],
  quiz: [
    { id:"h4q1001", question_ar:"إيه معنى 谦虚؟", vocabId:"h4v1003",
      options:["متكبر","متواضع","أناني","كسول"], correctIndex:1 },
    { id:"h4q1002", question_ar:"'صبور' بالصيني؟", vocabId:"h4v1009",
      options:["耐心","冷静","乐观","诚实"], correctIndex:0 },
    { id:"h4q1003", question_ar:"إزاي تقولي 'هو مجتهد ومتواضع في نفس الوقت'؟", vocabId:"h4v1004",
      options:["他又勤奋又谦虚","他勤奋又谦虚又","又他勤奋又谦虚","他又又勤奋谦虚"], correctIndex:0 }
  ],
  cultureCard: {
    id:"c-hsk4-l10", icon:"🙇",
    title_ar:"ليه التواضع (谦虚) بيتقدّر جدًا في الثقافة الصينية حتى مع نجاح واضح؟",
    body_ar:"من قيم كونفوشيوسية قديمة، الشخص اللي بيحقق إنجاز بيتوقع منه إنه يقلل من قيمة نجاحه علنًا بدل ما يتفاخر بيه - رد الفعل المتوقع على مديح زي 'إنجازك رائع' غالبًا بيكون 哪里哪里 (يعني حرفيًا 'فين فين؟!' كطريقة لرفض المديح بأدب) بدل قبوله المباشر. الفكرة إن التفاخر العلني ممكن يتفسّر كعلامة ضعف شخصية مش قوة، وإن الإنجاز الحقيقي بيتكلم عن نفسه من غير ما تحتاج تأكيد لفظي منك. الجيل الأصغر في المدن الكبيرة بقى أكتر انفتاحًا على التعبير المباشر عن الفخر، لكن القيمة دي لسه موجودة في السياقات الرسمية والعائلية.",
    relatedTo:"daily_life"
  }
}

];
