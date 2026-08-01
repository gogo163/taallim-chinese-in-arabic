// بيانات مفردات HSK1 + نطق عربي تقريبي (pinyin_ar لكل كلمة، ex_py_ar لكل جملة مثال)
// ⚠️ النطق العربي تقريبي وبيفقد النغمات (tones) — استخدمه كمساعد جنب الـ pinyin مش بديل عنه.

const HSK1_LESSONS = [
  {
    "id": 1,
    "title": "التحية والتعارف",
    "culture": "في الصين، أشهر تحية يومية مش 'إزيك؟' زي عندنا، دي 你吃了吗؟ (nǐ chī le ma) يعني حرفيًا 'إنت اكلت؟'. العبارة دي بقت تحية عادية مالهاش علاقة بالأكل فعليًا، لكنها بترجع لتاريخ طويل من المجاعات في الصين، لما السؤال عن الأكل كان فعلاً أهم سؤال ممكن تسأله لحد بتحبه.",
    "words": [
      {
        "char": "你",
        "pinyin": "nǐ",
        "ar": "إنتَ / إنتِ",
        "ex_zh": "你好",
        "ex_py": "nǐ hǎo",
        "ex_ar": "مرحبًا (حرفيًا: إنت كويس)",
        "pinyin_ar": "ني",
        "ex_py_ar": "ني هاو"
      },
      {
        "char": "我",
        "pinyin": "wǒ",
        "ar": "أنا",
        "ex_zh": "我是学生",
        "ex_py": "wǒ shì xuésheng",
        "ex_ar": "أنا طالب",
        "pinyin_ar": "وو",
        "ex_py_ar": "وو شي شيهشنغ"
      },
      {
        "char": "他 / 她",
        "pinyin": "tā",
        "ar": "هو / هي",
        "ex_zh": "他是老师",
        "ex_py": "tā shì lǎoshī",
        "ex_ar": "هو مدرّس",
        "pinyin_ar": "تا",
        "ex_py_ar": "تا شي لاوشي"
      },
      {
        "char": "是",
        "pinyin": "shì",
        "ar": "يكون (فعل الكينونة)",
        "ex_zh": "我是埃及人",
        "ex_py": "wǒ shì Āijí rén",
        "ex_ar": "أنا مصري",
        "pinyin_ar": "شي",
        "ex_py_ar": "وو شي āiji رن"
      },
      {
        "char": "叫",
        "pinyin": "jiào",
        "ar": "يُسمّى",
        "ex_zh": "我叫Gehad",
        "ex_py": "wǒ jiào Gehad",
        "ex_ar": "اسمي Gehad",
        "pinyin_ar": "جياو",
        "ex_py_ar": "وو جياو غهhad"
      },
      {
        "char": "名字",
        "pinyin": "míngzi",
        "ar": "اسم",
        "ex_zh": "你叫什么名字？",
        "ex_py": "nǐ jiào shénme míngzi",
        "ex_ar": "إيه اسمك؟",
        "pinyin_ar": "مينغزي",
        "ex_py_ar": "ني جياو شنمه مينغزي"
      },
      {
        "char": "老师",
        "pinyin": "lǎoshī",
        "ar": "مدرّس / مدرّسة",
        "ex_zh": "她是老师",
        "ex_py": "tā shì lǎoshī",
        "ex_ar": "هي مدرّسة",
        "pinyin_ar": "لاوشي",
        "ex_py_ar": "تا شي لاوشي"
      },
      {
        "char": "学生",
        "pinyin": "xuésheng",
        "ar": "طالب / طالبة",
        "ex_zh": "我是学生",
        "ex_py": "wǒ shì xuésheng",
        "ex_ar": "أنا طالب",
        "pinyin_ar": "شيهشنغ",
        "ex_py_ar": "وو شي شيهشنغ"
      },
      {
        "char": "朋友",
        "pinyin": "péngyou",
        "ar": "صديق",
        "ex_zh": "他是我朋友",
        "ex_py": "tā shì wǒ péngyou",
        "ex_ar": "هو صديقي",
        "pinyin_ar": "بنغيو",
        "ex_py_ar": "تا شي وو بنغيو"
      },
      {
        "char": "认识",
        "pinyin": "rènshi",
        "ar": "يتعرّف على",
        "ex_zh": "很高兴认识你",
        "ex_py": "hěn gāoxìng rènshi nǐ",
        "ex_ar": "فرصة سعيدة",
        "pinyin_ar": "رنشي",
        "ex_py_ar": "هن غاوشينغ رنشي ني"
      },
      {
        "char": "很",
        "pinyin": "hěn",
        "ar": "جدًا",
        "ex_zh": "很好",
        "ex_py": "hěn hǎo",
        "ex_ar": "كويس جدًا",
        "pinyin_ar": "هن",
        "ex_py_ar": "هن هاو"
      },
      {
        "char": "高兴",
        "pinyin": "gāoxìng",
        "ar": "سعيد",
        "ex_zh": "我很高兴",
        "ex_py": "wǒ hěn gāoxìng",
        "ex_ar": "أنا مبسوط جدًا",
        "pinyin_ar": "غاوشينغ",
        "ex_py_ar": "وو هن غاوشينغ"
      },
      {
        "char": "谢谢",
        "pinyin": "xièxie",
        "ar": "شكرًا",
        "ex_zh": "谢谢你",
        "ex_py": "xièxie nǐ",
        "ex_ar": "شكرًا لك",
        "pinyin_ar": "شيهشيه",
        "ex_py_ar": "شيهشيه ني"
      },
      {
        "char": "不客气",
        "pinyin": "bú kèqi",
        "ar": "العفو",
        "ex_zh": "不客气！",
        "ex_py": "bú kèqi",
        "ex_ar": "العفو!",
        "pinyin_ar": "بو كهتشي",
        "ex_py_ar": "بو كهتشي"
      },
      {
        "char": "再见",
        "pinyin": "zàijiàn",
        "ar": "مع السلامة",
        "ex_zh": "再见，明天见",
        "ex_py": "zàijiàn, míngtiān jiàn",
        "ex_ar": "مع السلامة، أشوفك بكرة",
        "pinyin_ar": "زايجيان",
        "ex_py_ar": "زايjian, مينغتيان جيان"
      }
    ]
  },
  {
    "id": 2,
    "title": "الأرقام والعد",
    "culture": "الأرقام في الصين مش مجرد أرقام، كل رقم له 'شخصية'. رقم 4 (四 sì) منحوس جدًا لأن نطقه قريب من كلمة 'موت' (死 sǐ) — كتير من العمارات في الصين بتتخطى الدور الرابع زي ما إحنا بنتخطى الدور 13. في المقابل، رقم 8 (八 bā) محظوظ جدًا لأنه شبه كلمة 'يزدهر' (发 fā)، وعشان كده أسعار الشقق والتليفونات اللي فيها رقم 8 بتتباع بسعر أعلى!",
    "words": [
      {
        "char": "一",
        "pinyin": "yī",
        "ar": "واحد",
        "ex_zh": "一个人",
        "ex_py": "yí ge rén",
        "ex_ar": "شخص واحد",
        "pinyin_ar": "ي",
        "ex_py_ar": "ي غه رن"
      },
      {
        "char": "二",
        "pinyin": "èr",
        "ar": "اتنين",
        "ex_zh": "二月",
        "ex_py": "èr yuè",
        "ex_ar": "شهر فبراير",
        "pinyin_ar": "ار",
        "ex_py_ar": "ار يويه"
      },
      {
        "char": "三",
        "pinyin": "sān",
        "ar": "تلاتة",
        "ex_zh": "三个苹果",
        "ex_py": "sān ge píngguǒ",
        "ex_ar": "تلات تفاحات",
        "pinyin_ar": "سان",
        "ex_py_ar": "سان غه بينغغوو"
      },
      {
        "char": "四",
        "pinyin": "sì",
        "ar": "أربعة",
        "ex_zh": "四点",
        "ex_py": "sì diǎn",
        "ex_ar": "الساعة أربعة",
        "pinyin_ar": "سي",
        "ex_py_ar": "سي ديان"
      },
      {
        "char": "五",
        "pinyin": "wǔ",
        "ar": "خمسة",
        "ex_zh": "五个学生",
        "ex_py": "wǔ ge xuésheng",
        "ex_ar": "خمس طلاب",
        "pinyin_ar": "وو",
        "ex_py_ar": "وو غه شيهشنغ"
      },
      {
        "char": "六",
        "pinyin": "liù",
        "ar": "ستة",
        "ex_zh": "六月",
        "ex_py": "liù yuè",
        "ex_ar": "شهر يونيو",
        "pinyin_ar": "ليو",
        "ex_py_ar": "ليو يويه"
      },
      {
        "char": "七",
        "pinyin": "qī",
        "ar": "سبعة",
        "ex_zh": "七天",
        "ex_py": "qī tiān",
        "ex_ar": "سبع أيام",
        "pinyin_ar": "تشي",
        "ex_py_ar": "تشي تيان"
      },
      {
        "char": "八",
        "pinyin": "bā",
        "ar": "تمانية",
        "ex_zh": "八点",
        "ex_py": "bā diǎn",
        "ex_ar": "الساعة تمانية",
        "pinyin_ar": "با",
        "ex_py_ar": "با ديان"
      },
      {
        "char": "九",
        "pinyin": "jiǔ",
        "ar": "تسعة",
        "ex_zh": "九月",
        "ex_py": "jiǔ yuè",
        "ex_ar": "شهر سبتمبر",
        "pinyin_ar": "جيو",
        "ex_py_ar": "جيو يويه"
      },
      {
        "char": "十",
        "pinyin": "shí",
        "ar": "عشرة",
        "ex_zh": "十个人",
        "ex_py": "shí ge rén",
        "ex_ar": "عشرة أشخاص",
        "pinyin_ar": "شي",
        "ex_py_ar": "شي غه رن"
      },
      {
        "char": "零",
        "pinyin": "líng",
        "ar": "صفر",
        "ex_zh": "零度",
        "ex_py": "líng dù",
        "ex_ar": "صفر درجة",
        "pinyin_ar": "لينغ",
        "ex_py_ar": "لينغ دو"
      },
      {
        "char": "多少",
        "pinyin": "duōshao",
        "ar": "كام (لأرقام كبيرة)",
        "ex_zh": "多少钱？",
        "ex_py": "duōshao qián",
        "ex_ar": "بكام؟",
        "pinyin_ar": "دووشاو",
        "ex_py_ar": "دووشاو تشيان"
      },
      {
        "char": "几",
        "pinyin": "jǐ",
        "ar": "كام (لأرقام صغيرة)",
        "ex_zh": "几点了？",
        "ex_py": "jǐ diǎn le",
        "ex_ar": "الساعة كام؟",
        "pinyin_ar": "جي",
        "ex_py_ar": "جي ديان له"
      },
      {
        "char": "个",
        "pinyin": "gè",
        "ar": "كلمة عدّ عامة",
        "ex_zh": "一个朋友",
        "ex_py": "yí ge péngyou",
        "ex_ar": "صديق واحد",
        "pinyin_ar": "غه",
        "ex_py_ar": "ي غه بنغيو"
      },
      {
        "char": "岁",
        "pinyin": "suì",
        "ar": "سنة (عمر)",
        "ex_zh": "我二十岁",
        "ex_py": "wǒ èrshí suì",
        "ex_ar": "أنا عندي عشرين سنة",
        "pinyin_ar": "سوي",
        "ex_py_ar": "وو ارشي سوي"
      }
    ]
  },
  {
    "id": 3,
    "title": "الأسرة والناس",
    "culture": "لاحظت إننا اتعلمنا 'أخ' واحدة بس (الأخ)؟ في الحقيقة الصيني عنده كلمات مختلفة تمامًا للأخ الأكبر (哥哥 gēge) والأخ الأصغر (弟弟 dìdi)، ونفس الكلام للأخت الكبيرة والصغيرة. الترتيب في العيلة مهم جدًا في الثقافة الصينية لدرجة إنه بقى جزء من اللغة نفسها — العمر بيحدد الاحترام والمسؤولية داخل البيت.",
    "words": [
      {
        "char": "爸爸",
        "pinyin": "bàba",
        "ar": "بابا",
        "ex_zh": "我爸爸是医生",
        "ex_py": "wǒ bàba shì yīshēng",
        "ex_ar": "بابا دكتور",
        "pinyin_ar": "بابا",
        "ex_py_ar": "وو بابا شي يشنغ"
      },
      {
        "char": "妈妈",
        "pinyin": "māma",
        "ar": "ماما",
        "ex_zh": "我妈妈很漂亮",
        "ex_py": "wǒ māma hěn piàoliang",
        "ex_ar": "ماما جميلة جدًا",
        "pinyin_ar": "ماما",
        "ex_py_ar": "وو ماما هن بياوليانغ"
      },
      {
        "char": "儿子",
        "pinyin": "érzi",
        "ar": "ابن",
        "ex_zh": "他有一个儿子",
        "ex_py": "tā yǒu yí ge érzi",
        "ex_ar": "عنده ابن واحد",
        "pinyin_ar": "ارزي",
        "ex_py_ar": "تا يو ي غه ارزي"
      },
      {
        "char": "女儿",
        "pinyin": "nǚ'ér",
        "ar": "بنت",
        "ex_zh": "她有两个女儿",
        "ex_py": "tā yǒu liǎng ge nǚ'ér",
        "ex_ar": "عندها بنتين",
        "pinyin_ar": "نيوار",
        "ex_py_ar": "تا يو ليانغ غه نيوار"
      },
      {
        "char": "家",
        "pinyin": "jiā",
        "ar": "بيت / عيلة",
        "ex_zh": "我家在开罗",
        "ex_py": "wǒ jiā zài Kāiluó",
        "ex_ar": "بيتي في القاهرة",
        "pinyin_ar": "جيا",
        "ex_py_ar": "وو جيا زاي كايلوو"
      },
      {
        "char": "先生",
        "pinyin": "xiānsheng",
        "ar": "سيد / زوج",
        "ex_zh": "王先生",
        "ex_py": "Wáng xiānsheng",
        "ex_ar": "السيد وانج",
        "pinyin_ar": "شيانشنغ",
        "ex_py_ar": "وانغ شيانشنغ"
      },
      {
        "char": "小姐",
        "pinyin": "xiǎojiě",
        "ar": "آنسة",
        "ex_zh": "李小姐",
        "ex_py": "Lǐ xiǎojiě",
        "ex_ar": "الآنسة لي",
        "pinyin_ar": "شياوجيه",
        "ex_py_ar": "لي شياوجيه"
      },
      {
        "char": "同学",
        "pinyin": "tóngxué",
        "ar": "زميل دراسة",
        "ex_zh": "他是我同学",
        "ex_py": "tā shì wǒ tóngxué",
        "ex_ar": "هو زميلي في الدراسة",
        "pinyin_ar": "تونغشيه",
        "ex_py_ar": "تا شي وو تونغشيه"
      },
      {
        "char": "人",
        "pinyin": "rén",
        "ar": "شخص / إنسان",
        "ex_zh": "中国人",
        "ex_py": "Zhōngguó rén",
        "ex_ar": "شخص صيني",
        "pinyin_ar": "رن",
        "ex_py_ar": "جونغغوو رن"
      },
      {
        "char": "猫",
        "pinyin": "māo",
        "ar": "قطة",
        "ex_zh": "我有一只猫",
        "ex_py": "wǒ yǒu yì zhī māo",
        "ex_ar": "عندي قطة",
        "pinyin_ar": "ماو",
        "ex_py_ar": "وو يو ي جي ماو"
      },
      {
        "char": "狗",
        "pinyin": "gǒu",
        "ar": "كلب",
        "ex_zh": "那是我的狗",
        "ex_py": "nà shì wǒ de gǒu",
        "ex_ar": "ده كلبي",
        "pinyin_ar": "غو",
        "ex_py_ar": "نا شي وو ده غو"
      },
      {
        "char": "谁",
        "pinyin": "shéi",
        "ar": "مين",
        "ex_zh": "他是谁？",
        "ex_py": "tā shì shéi",
        "ex_ar": "هو مين؟",
        "pinyin_ar": "شيي",
        "ex_py_ar": "تا شي شيي"
      },
      {
        "char": "我们",
        "pinyin": "wǒmen",
        "ar": "إحنا",
        "ex_zh": "我们是朋友",
        "ex_py": "wǒmen shì péngyou",
        "ex_ar": "إحنا أصحاب",
        "pinyin_ar": "وومن",
        "ex_py_ar": "وومن شي بنغيو"
      },
      {
        "char": "你们",
        "pinyin": "nǐmen",
        "ar": "إنتم",
        "ex_zh": "你们好",
        "ex_py": "nǐmen hǎo",
        "ex_ar": "مرحبًا بيكم",
        "pinyin_ar": "نيمن",
        "ex_py_ar": "نيمن هاو"
      },
      {
        "char": "他们",
        "pinyin": "tāmen",
        "ar": "هم",
        "ex_zh": "他们是学生",
        "ex_py": "tāmen shì xuésheng",
        "ex_ar": "هم طلاب",
        "pinyin_ar": "تامن",
        "ex_py_ar": "تامن شي شيهشنغ"
      }
    ]
  },
  {
    "id": 4,
    "title": "الوقت",
    "culture": "التقويم الصيني التقليدي مش خطي زي بتاعنا، هو دائري: كل سنة ليها حيوان من 12 حيوان (الفار، الثور، النمر... لحد آخرهم) بيتكرروا كل 12 سنة. الصينيين بيسألوا 'انت مواليد أنهي حيوان؟' بدل 'انت مواليد سنة كام؟' أحيانًا، وشخصيتك المفروض بتتأثر بحيوان مولدك حسب المعتقد الشعبي.",
    "words": [
      {
        "char": "现在",
        "pinyin": "xiànzài",
        "ar": "دلوقتي",
        "ex_zh": "现在几点？",
        "ex_py": "xiànzài jǐ diǎn",
        "ex_ar": "الساعة كام دلوقتي؟",
        "pinyin_ar": "شيانزاي",
        "ex_py_ar": "شيانزاي جي ديان"
      },
      {
        "char": "今天",
        "pinyin": "jīntiān",
        "ar": "النهاردة",
        "ex_zh": "今天星期几？",
        "ex_py": "jīntiān xīngqī jǐ",
        "ex_ar": "النهاردة إيه اليوم؟",
        "pinyin_ar": "جينتيان",
        "ex_py_ar": "جينتيان شينغتشي جي"
      },
      {
        "char": "明天",
        "pinyin": "míngtiān",
        "ar": "بكرة",
        "ex_zh": "明天见",
        "ex_py": "míngtiān jiàn",
        "ex_ar": "أشوفك بكرة",
        "pinyin_ar": "مينغتيان",
        "ex_py_ar": "مينغتيان جيان"
      },
      {
        "char": "昨天",
        "pinyin": "zuótiān",
        "ar": "إمبارح",
        "ex_zh": "昨天很冷",
        "ex_py": "zuótiān hěn lěng",
        "ex_ar": "إمبارح كان برد جدًا",
        "pinyin_ar": "زووتيان",
        "ex_py_ar": "زووتيان هن لنغ"
      },
      {
        "char": "年",
        "pinyin": "nián",
        "ar": "سنة",
        "ex_zh": "今年",
        "ex_py": "jīnnián",
        "ex_ar": "السنة دي",
        "pinyin_ar": "نيان",
        "ex_py_ar": "جيننيان"
      },
      {
        "char": "月",
        "pinyin": "yuè",
        "ar": "شهر",
        "ex_zh": "这个月",
        "ex_py": "zhège yuè",
        "ex_ar": "الشهر ده",
        "pinyin_ar": "يويه",
        "ex_py_ar": "جهغه يويه"
      },
      {
        "char": "星期",
        "pinyin": "xīngqī",
        "ar": "أسبوع / يوم في الأسبوع",
        "ex_zh": "星期一",
        "ex_py": "xīngqīyī",
        "ex_ar": "يوم الاتنين",
        "pinyin_ar": "شينغتشي",
        "ex_py_ar": "شينغتشيي"
      },
      {
        "char": "点",
        "pinyin": "diǎn",
        "ar": "الساعة (وقت)",
        "ex_zh": "三点",
        "ex_py": "sān diǎn",
        "ex_ar": "الساعة تلاتة",
        "pinyin_ar": "ديان",
        "ex_py_ar": "سان ديان"
      },
      {
        "char": "分钟",
        "pinyin": "fēnzhōng",
        "ar": "دقيقة",
        "ex_zh": "十分钟",
        "ex_py": "shí fēnzhōng",
        "ex_ar": "عشر دقايق",
        "pinyin_ar": "فنجونغ",
        "ex_py_ar": "شي فنجونغ"
      },
      {
        "char": "时候",
        "pinyin": "shíhou",
        "ar": "وقت / لحظة",
        "ex_zh": "什么时候？",
        "ex_py": "shénme shíhou",
        "ex_ar": "إمتى؟",
        "pinyin_ar": "شيهو",
        "ex_py_ar": "شنمه شيهو"
      },
      {
        "char": "上午",
        "pinyin": "shàngwǔ",
        "ar": "الصبح",
        "ex_zh": "上午九点",
        "ex_py": "shàngwǔ jiǔ diǎn",
        "ex_ar": "الساعة تسعة الصبح",
        "pinyin_ar": "شانغوو",
        "ex_py_ar": "شانغوو جيو ديان"
      },
      {
        "char": "下午",
        "pinyin": "xiàwǔ",
        "ar": "بعد الضهر",
        "ex_zh": "下午三点",
        "ex_py": "xiàwǔ sān diǎn",
        "ex_ar": "الساعة تلاتة بعد الضهر",
        "pinyin_ar": "شياوو",
        "ex_py_ar": "شياوو سان ديان"
      },
      {
        "char": "中午",
        "pinyin": "zhōngwǔ",
        "ar": "الضهر",
        "ex_zh": "中午吃饭",
        "ex_py": "zhōngwǔ chī fàn",
        "ex_ar": "الأكل وقت الضهر",
        "pinyin_ar": "جونغوو",
        "ex_py_ar": "جونغوو تشي فان"
      },
      {
        "char": "号",
        "pinyin": "hào",
        "ar": "تاريخ / رقم",
        "ex_zh": "八月三号",
        "ex_py": "bā yuè sān hào",
        "ex_ar": "3 أغسطس",
        "pinyin_ar": "هاو",
        "ex_py_ar": "با يويه سان هاو"
      },
      {
        "char": "一点儿",
        "pinyin": "yìdiǎnr",
        "ar": "شوية",
        "ex_zh": "一点儿水",
        "ex_py": "yìdiǎnr shuǐ",
        "ex_ar": "شوية مية",
        "pinyin_ar": "يديانر",
        "ex_py_ar": "يديانر شوي"
      }
    ]
  },
  {
    "id": 5,
    "title": "الأكل والشرب",
    "culture": "لو قاعد تاكل أرز بعيدان الأكل (筷子)، فيه حاجة واحدة ممنوعة تمامًا: متغرزش العيدان واقفة في نص الأرز. الشكل ده بيشبه عيدان البخور اللي بتتحط قدام صور الموتى في الطقوس التقليدية، فعمله على مائدة الأكل بيتعتبر نذير شؤم ومنظر مؤسف قدام أي صيني.",
    "words": [
      {
        "char": "吃",
        "pinyin": "chī",
        "ar": "ياكل",
        "ex_zh": "我吃米饭",
        "ex_py": "wǒ chī mǐfàn",
        "ex_ar": "أنا باكل أرز",
        "pinyin_ar": "تشي",
        "ex_py_ar": "وو تشي ميفان"
      },
      {
        "char": "喝",
        "pinyin": "hē",
        "ar": "يشرب",
        "ex_zh": "喝茶",
        "ex_py": "hē chá",
        "ex_ar": "يشرب شاي",
        "pinyin_ar": "هه",
        "ex_py_ar": "هه تشا"
      },
      {
        "char": "茶",
        "pinyin": "chá",
        "ar": "شاي",
        "ex_zh": "一杯茶",
        "ex_py": "yì bēi chá",
        "ex_ar": "كوباية شاي",
        "pinyin_ar": "تشا",
        "ex_py_ar": "ي بيي تشا"
      },
      {
        "char": "水",
        "pinyin": "shuǐ",
        "ar": "مية",
        "ex_zh": "喝水",
        "ex_py": "hē shuǐ",
        "ex_ar": "يشرب مية",
        "pinyin_ar": "شوي",
        "ex_py_ar": "هه شوي"
      },
      {
        "char": "米饭",
        "pinyin": "mǐfàn",
        "ar": "أرز",
        "ex_zh": "米饭很好吃",
        "ex_py": "mǐfàn hěn hǎochī",
        "ex_ar": "الأرز طعمه حلو",
        "pinyin_ar": "ميفان",
        "ex_py_ar": "ميفان هن هاوتشي"
      },
      {
        "char": "苹果",
        "pinyin": "píngguǒ",
        "ar": "تفاحة",
        "ex_zh": "一个苹果",
        "ex_py": "yí ge píngguǒ",
        "ex_ar": "تفاحة واحدة",
        "pinyin_ar": "بينغغوو",
        "ex_py_ar": "ي غه بينغغوو"
      },
      {
        "char": "水果",
        "pinyin": "shuǐguǒ",
        "ar": "فاكهة",
        "ex_zh": "我喜欢水果",
        "ex_py": "wǒ xǐhuan shuǐguǒ",
        "ex_ar": "أنا بحب الفاكهة",
        "pinyin_ar": "شويغوو",
        "ex_py_ar": "وو شيهوان شويغوو"
      },
      {
        "char": "菜",
        "pinyin": "cài",
        "ar": "أكلة / خضار",
        "ex_zh": "这个菜很好吃",
        "ex_py": "zhège cài hěn hǎochī",
        "ex_ar": "الأكلة دي طعمها حلو",
        "pinyin_ar": "تساي",
        "ex_py_ar": "جهغه تساي هن هاوتشي"
      },
      {
        "char": "杯子",
        "pinyin": "bēizi",
        "ar": "كوباية",
        "ex_zh": "一个杯子",
        "ex_py": "yí ge bēizi",
        "ex_ar": "كوباية واحدة",
        "pinyin_ar": "بييزي",
        "ex_py_ar": "ي غه بييزي"
      },
      {
        "char": "饭店",
        "pinyin": "fàndiàn",
        "ar": "مطعم / فندق",
        "ex_zh": "去饭店吃饭",
        "ex_py": "qù fàndiàn chī fàn",
        "ex_ar": "نروح المطعم ناكل",
        "pinyin_ar": "فانديان",
        "ex_py_ar": "تشو فانديان تشي فان"
      },
      {
        "char": "喜欢",
        "pinyin": "xǐhuan",
        "ar": "يحب",
        "ex_zh": "我喜欢中国菜",
        "ex_py": "wǒ xǐhuan Zhōngguó cài",
        "ex_ar": "أنا بحب الأكل الصيني",
        "pinyin_ar": "شيهوان",
        "ex_py_ar": "وو شيهوان جونغغوو تساي"
      },
      {
        "char": "些",
        "pinyin": "xiē",
        "ar": "شوية / بعض",
        "ex_zh": "一些水果",
        "ex_py": "yìxiē shuǐguǒ",
        "ex_ar": "شوية فاكهة",
        "pinyin_ar": "شيه",
        "ex_py_ar": "يشيه شويغوو"
      },
      {
        "char": "东西",
        "pinyin": "dōngxi",
        "ar": "حاجة / أشياء",
        "ex_zh": "买东西",
        "ex_py": "mǎi dōngxi",
        "ex_ar": "يشتري حاجات",
        "pinyin_ar": "دونغشي",
        "ex_py_ar": "ماي دونغشي"
      },
      {
        "char": "好",
        "pinyin": "hǎo",
        "ar": "كويس",
        "ex_zh": "很好吃",
        "ex_py": "hěn hǎochī",
        "ex_ar": "طعمه حلو جدًا",
        "pinyin_ar": "هاو",
        "ex_py_ar": "هن هاوتشي"
      },
      {
        "char": "太",
        "pinyin": "tài",
        "ar": "جدًا (زيادة)",
        "ex_zh": "太好了",
        "ex_py": "tài hǎo le",
        "ex_ar": "تمام أوي!",
        "pinyin_ar": "تاي",
        "ex_py_ar": "تاي هاو له"
      }
    ]
  },
  {
    "id": 6,
    "title": "الأماكن والاتجاهات",
    "culture": "اتجاهات البيوت والمباني في الصين مش عشوائية. حسب فلسفة الفنغ شوي (风水) التقليدية، أفضل اتجاه للبيت إنه يبص جنوب، عشان يكسب أكبر قدر من ضوء الشمس والطاقة الإيجابية. لحد دلوقتي، شركات المقاولات الكبيرة في الصين بتاخد الاتجاه في الاعتبار وقت التصميم، وشقق 'الاتجاه الجنوبي' بتتباع بسعر أعلى من غيرها.",
    "words": [
      {
        "char": "在",
        "pinyin": "zài",
        "ar": "موجود في",
        "ex_zh": "我在家",
        "ex_py": "wǒ zài jiā",
        "ex_ar": "أنا في البيت",
        "pinyin_ar": "زاي",
        "ex_py_ar": "وو زاي جيا"
      },
      {
        "char": "这",
        "pinyin": "zhè",
        "ar": "ده / دي",
        "ex_zh": "这是我的书",
        "ex_py": "zhè shì wǒ de shū",
        "ex_ar": "ده كتابي",
        "pinyin_ar": "جه",
        "ex_py_ar": "جه شي وو ده شو"
      },
      {
        "char": "那",
        "pinyin": "nà",
        "ar": "ده (بعيد)",
        "ex_zh": "那是他的车",
        "ex_py": "nà shì tā de chē",
        "ex_ar": "دي عربيته",
        "pinyin_ar": "نا",
        "ex_py_ar": "نا شي تا ده تشه"
      },
      {
        "char": "哪",
        "pinyin": "nǎ",
        "ar": "أنهي",
        "ex_zh": "哪个好？",
        "ex_py": "nǎge hǎo",
        "ex_ar": "أنهي واحد أحسن؟",
        "pinyin_ar": "نا",
        "ex_py_ar": "ناغه هاو"
      },
      {
        "char": "哪儿",
        "pinyin": "nǎr",
        "ar": "فين",
        "ex_zh": "你在哪儿？",
        "ex_py": "nǐ zài nǎr",
        "ex_ar": "إنت فين؟",
        "pinyin_ar": "نار",
        "ex_py_ar": "ني زاي نار"
      },
      {
        "char": "里",
        "pinyin": "lǐ",
        "ar": "جوّه",
        "ex_zh": "家里",
        "ex_py": "jiā lǐ",
        "ex_ar": "جوّه البيت",
        "pinyin_ar": "لي",
        "ex_py_ar": "جيا لي"
      },
      {
        "char": "前面",
        "pinyin": "qiánmiàn",
        "ar": "قدام",
        "ex_zh": "学校前面",
        "ex_py": "xuéxiào qiánmiàn",
        "ex_ar": "قدام المدرسة",
        "pinyin_ar": "تشيانميان",
        "ex_py_ar": "شيهشياو تشيانميان"
      },
      {
        "char": "后面",
        "pinyin": "hòumiàn",
        "ar": "ورا",
        "ex_zh": "医院后面",
        "ex_py": "yīyuàn hòumiàn",
        "ex_ar": "ورا المستشفى",
        "pinyin_ar": "هوميان",
        "ex_py_ar": "ييوان هوميان"
      },
      {
        "char": "上",
        "pinyin": "shàng",
        "ar": "فوق",
        "ex_zh": "桌子上",
        "ex_py": "zhuōzi shàng",
        "ex_ar": "فوق الترابيزة",
        "pinyin_ar": "شانغ",
        "ex_py_ar": "جووزي شانغ"
      },
      {
        "char": "下",
        "pinyin": "xià",
        "ar": "تحت",
        "ex_zh": "桌子下",
        "ex_py": "zhuōzi xià",
        "ex_ar": "تحت الترابيزة",
        "pinyin_ar": "شيا",
        "ex_py_ar": "جووزي شيا"
      },
      {
        "char": "中国",
        "pinyin": "Zhōngguó",
        "ar": "الصين",
        "ex_zh": "我去中国",
        "ex_py": "wǒ qù Zhōngguó",
        "ex_ar": "أنا رايح الصين",
        "pinyin_ar": "جونغغوو",
        "ex_py_ar": "وو تشو جونغغوو"
      },
      {
        "char": "北京",
        "pinyin": "Běijīng",
        "ar": "بكين",
        "ex_zh": "北京很大",
        "ex_py": "Běijīng hěn dà",
        "ex_ar": "بكين مدينة كبيرة",
        "pinyin_ar": "بييجينغ",
        "ex_py_ar": "بييجينغ هن دا"
      },
      {
        "char": "学校",
        "pinyin": "xuéxiào",
        "ar": "مدرسة",
        "ex_zh": "去学校",
        "ex_py": "qù xuéxiào",
        "ex_ar": "يروح المدرسة",
        "pinyin_ar": "شيهشياو",
        "ex_py_ar": "تشو شيهشياو"
      },
      {
        "char": "医院",
        "pinyin": "yīyuàn",
        "ar": "مستشفى",
        "ex_zh": "去医院",
        "ex_py": "qù yīyuàn",
        "ex_ar": "يروح المستشفى",
        "pinyin_ar": "ييوان",
        "ex_py_ar": "تشو ييوان"
      },
      {
        "char": "商店",
        "pinyin": "shāngdiàn",
        "ar": "محل",
        "ex_zh": "这个商店",
        "ex_py": "zhège shāngdiàn",
        "ex_ar": "المحل ده",
        "pinyin_ar": "شانغديان",
        "ex_py_ar": "جهغه شانغديان"
      }
    ]
  },
  {
    "id": 7,
    "title": "الأفعال اليومية",
    "culture": "لو صاحبك الصيني قالك 'ممكن' بدل 'لا' مباشرة، افهم إنه بيرفض بأدب. مفهوم 'ماء الوش' (面子 miànzi) أساسي جدًا في التواصل اليومي: الصينيين بيتجنبوا الرفض المباشر أو النقد الصريح قدام الناس عشان محدش 'يخسر ماء وشه'. تعلّم تقرا اللي بين السطور هنا أهم من حفظ الكلمات نفسها أحيانًا.",
    "words": [
      {
        "char": "看",
        "pinyin": "kàn",
        "ar": "يشوف / يقرا",
        "ex_zh": "看电视",
        "ex_py": "kàn diànshì",
        "ex_ar": "يتفرج على التلفزيون",
        "pinyin_ar": "كان",
        "ex_py_ar": "كان ديانشي"
      },
      {
        "char": "看见",
        "pinyin": "kànjiàn",
        "ar": "يشوف (لمح)",
        "ex_zh": "我看见他了",
        "ex_py": "wǒ kànjiàn tā le",
        "ex_ar": "شفته",
        "pinyin_ar": "كانجيان",
        "ex_py_ar": "وو كانجيان تا له"
      },
      {
        "char": "听",
        "pinyin": "tīng",
        "ar": "يسمع",
        "ex_zh": "听音乐",
        "ex_py": "tīng yīnyuè",
        "ex_ar": "يسمع موسيقى",
        "pinyin_ar": "تينغ",
        "ex_py_ar": "تينغ ينيويه"
      },
      {
        "char": "说",
        "pinyin": "shuō",
        "ar": "يقول / يتكلم",
        "ex_zh": "说汉语",
        "ex_py": "shuō Hànyǔ",
        "ex_ar": "يتكلم صيني",
        "pinyin_ar": "شوو",
        "ex_py_ar": "شوو هانيو"
      },
      {
        "char": "读",
        "pinyin": "dú",
        "ar": "يقرا (بصوت)",
        "ex_zh": "读书",
        "ex_py": "dú shū",
        "ex_ar": "يقرا كتاب",
        "pinyin_ar": "دو",
        "ex_py_ar": "دو شو"
      },
      {
        "char": "来",
        "pinyin": "lái",
        "ar": "ييجي",
        "ex_zh": "他来了",
        "ex_py": "tā lái le",
        "ex_ar": "هو جه",
        "pinyin_ar": "لاي",
        "ex_py_ar": "تا لاي له"
      },
      {
        "char": "去",
        "pinyin": "qù",
        "ar": "يروح",
        "ex_zh": "去学校",
        "ex_py": "qù xuéxiào",
        "ex_ar": "يروح المدرسة",
        "pinyin_ar": "تشو",
        "ex_py_ar": "تشو شيهشياو"
      },
      {
        "char": "回",
        "pinyin": "huí",
        "ar": "يرجع",
        "ex_zh": "回家",
        "ex_py": "huí jiā",
        "ex_ar": "يرجع البيت",
        "pinyin_ar": "هوي",
        "ex_py_ar": "هوي جيا"
      },
      {
        "char": "开",
        "pinyin": "kāi",
        "ar": "يفتح / يسوق",
        "ex_zh": "开车",
        "ex_py": "kāi chē",
        "ex_ar": "يسوق عربية",
        "pinyin_ar": "كاي",
        "ex_py_ar": "كاي تشه"
      },
      {
        "char": "打电话",
        "pinyin": "dǎ diànhuà",
        "ar": "يتصل تليفونيًا",
        "ex_zh": "给我打电话",
        "ex_py": "gěi wǒ dǎ diànhuà",
        "ex_ar": "اتصل بيا",
        "pinyin_ar": "دا ديانهوا",
        "ex_py_ar": "غيي وو دا ديانهوا"
      },
      {
        "char": "睡觉",
        "pinyin": "shuìjiào",
        "ar": "ينام",
        "ex_zh": "我要睡觉了",
        "ex_py": "wǒ yào shuìjiào le",
        "ex_ar": "هنام دلوقتي",
        "pinyin_ar": "شويجياو",
        "ex_py_ar": "وو ياو شويجياو له"
      },
      {
        "char": "工作",
        "pinyin": "gōngzuò",
        "ar": "يشتغل / شغل",
        "ex_zh": "我在工作",
        "ex_py": "wǒ zài gōngzuò",
        "ex_ar": "أنا بشتغل دلوقتي",
        "pinyin_ar": "غونغزوو",
        "ex_py_ar": "وو زاي غونغزوو"
      },
      {
        "char": "学习",
        "pinyin": "xuéxí",
        "ar": "يذاكر / يتعلم",
        "ex_zh": "学习汉语",
        "ex_py": "xuéxí Hànyǔ",
        "ex_ar": "يتعلم صيني",
        "pinyin_ar": "شيهشي",
        "ex_py_ar": "شيهشي هانيو"
      },
      {
        "char": "住",
        "pinyin": "zhù",
        "ar": "يسكن",
        "ex_zh": "你住在哪儿？",
        "ex_py": "nǐ zhù zài nǎr",
        "ex_ar": "إنت ساكن فين؟",
        "pinyin_ar": "جو",
        "ex_py_ar": "ني جو زاي نار"
      },
      {
        "char": "做",
        "pinyin": "zuò",
        "ar": "يعمل",
        "ex_zh": "做什么？",
        "ex_py": "zuò shénme",
        "ex_ar": "بتعمل إيه؟",
        "pinyin_ar": "زوو",
        "ex_py_ar": "زوو شنمه"
      }
    ]
  },
  {
    "id": 8,
    "title": "الطقس والوصف",
    "culture": "اللون الأحمر (红色) في الصين معناه حظ وفرح واحتفال — عشان كده هتلاقيه في كل حاجة من أظرفة الهدايا لحد باب البيوت وقت الأعياد. لكن اللون الأبيض (白色) عكس اللي إحنا متعودين عليه في العربي تمامًا: بدل ما يرمز للنقاء والفرح، هو لون الحداد والعزاء التقليدي في الصين.",
    "words": [
      {
        "char": "天气",
        "pinyin": "tiānqì",
        "ar": "الطقس",
        "ex_zh": "今天天气很好",
        "ex_py": "jīntiān tiānqì hěn hǎo",
        "ex_ar": "النهاردة الطقس حلو",
        "pinyin_ar": "تيانتشي",
        "ex_py_ar": "جينتيان تيانتشي هن هاو"
      },
      {
        "char": "冷",
        "pinyin": "lěng",
        "ar": "برد",
        "ex_zh": "今天很冷",
        "ex_py": "jīntiān hěn lěng",
        "ex_ar": "النهاردة برد جدًا",
        "pinyin_ar": "لنغ",
        "ex_py_ar": "جينتيان هن لنغ"
      },
      {
        "char": "热",
        "pinyin": "rè",
        "ar": "حر",
        "ex_zh": "夏天很热",
        "ex_py": "xiàtiān hěn rè",
        "ex_ar": "الصيف بيبقى حر جدًا",
        "pinyin_ar": "ره",
        "ex_py_ar": "شياتيان هن ره"
      },
      {
        "char": "下雨",
        "pinyin": "xiàyǔ",
        "ar": "بتنزل مطر",
        "ex_zh": "外面下雨了",
        "ex_py": "wàimiàn xiàyǔ le",
        "ex_ar": "بره بتمطر",
        "pinyin_ar": "شيايو",
        "ex_py_ar": "وايميان شيايو له"
      },
      {
        "char": "大",
        "pinyin": "dà",
        "ar": "كبير",
        "ex_zh": "大房子",
        "ex_py": "dà fángzi",
        "ex_ar": "بيت كبير",
        "pinyin_ar": "دا",
        "ex_py_ar": "دا فانغزي"
      },
      {
        "char": "小",
        "pinyin": "xiǎo",
        "ar": "صغير",
        "ex_zh": "小狗",
        "ex_py": "xiǎo gǒu",
        "ex_ar": "كلب صغير",
        "pinyin_ar": "شياو",
        "ex_py_ar": "شياو غو"
      },
      {
        "char": "漂亮",
        "pinyin": "piàoliang",
        "ar": "جميل",
        "ex_zh": "很漂亮",
        "ex_py": "hěn piàoliang",
        "ex_ar": "جميل جدًا",
        "pinyin_ar": "بياوليانغ",
        "ex_py_ar": "هن بياوليانغ"
      },
      {
        "char": "多",
        "pinyin": "duō",
        "ar": "كتير",
        "ex_zh": "很多人",
        "ex_py": "hěn duō rén",
        "ex_ar": "ناس كتير",
        "pinyin_ar": "دوو",
        "ex_py_ar": "هن دوو رن"
      },
      {
        "char": "少",
        "pinyin": "shǎo",
        "ar": "قليل",
        "ex_zh": "很少",
        "ex_py": "hěn shǎo",
        "ex_ar": "قليل جدًا",
        "pinyin_ar": "شاو",
        "ex_py_ar": "هن شاو"
      },
      {
        "char": "能",
        "pinyin": "néng",
        "ar": "يقدر",
        "ex_zh": "我能去",
        "ex_py": "wǒ néng qù",
        "ex_ar": "أنا أقدر أروح",
        "pinyin_ar": "ننغ",
        "ex_py_ar": "وو ننغ تشو"
      },
      {
        "char": "会",
        "pinyin": "huì",
        "ar": "يعرف يعمل",
        "ex_zh": "我会说汉语",
        "ex_py": "wǒ huì shuō Hànyǔ",
        "ex_ar": "أنا أعرف أتكلم صيني",
        "pinyin_ar": "هوي",
        "ex_py_ar": "وو هوي شوو هانيو"
      },
      {
        "char": "想",
        "pinyin": "xiǎng",
        "ar": "عايز / يفكر",
        "ex_zh": "我想去中国",
        "ex_py": "wǒ xiǎng qù Zhōngguó",
        "ex_ar": "عايز أروح الصين",
        "pinyin_ar": "شيانغ",
        "ex_py_ar": "وو شيانغ تشو جونغغوو"
      },
      {
        "char": "没有",
        "pinyin": "méiyǒu",
        "ar": "معندوش / مفيش",
        "ex_zh": "我没有钱",
        "ex_py": "wǒ méiyǒu qián",
        "ex_ar": "معنديش فلوس",
        "pinyin_ar": "ميييو",
        "ex_py_ar": "وو ميييو تشيان"
      },
      {
        "char": "都",
        "pinyin": "dōu",
        "ar": "كله / الكل",
        "ex_zh": "我们都是学生",
        "ex_py": "wǒmen dōu shì xuésheng",
        "ex_ar": "كلنا طلاب",
        "pinyin_ar": "دو",
        "ex_py_ar": "وومن دو شي شيهشنغ"
      },
      {
        "char": "对不起",
        "pinyin": "duìbuqǐ",
        "ar": "آسف",
        "ex_zh": "对不起！",
        "ex_py": "duìbuqǐ",
        "ex_ar": "آسف!",
        "pinyin_ar": "دويبوتشي",
        "ex_py_ar": "دويبوتشي"
      }
    ]
  },
  {
    "id": 9,
    "title": "التسوق والأغراض اليومية",
    "culture": "لو ناوي تشتري هدية لصاحبك الصيني، فيه حاجتين اوعى تشتريهم: **ساعة حائط** (钟 zhōng)، لأن نطقها زي كلمة 'حضور الجنازة' (送终)، و**حذاء** لأن نطقه (鞋 xié) قريب من كلمة 'شر' (邪). الهدايا في الثقافة الصينية بتتحط تحت اختبار نطقي قبل ما تتقدّم، مش بس شكلها أو قيمتها.",
    "words": [
      {
        "char": "钱",
        "pinyin": "qián",
        "ar": "فلوس",
        "ex_zh": "多少钱？",
        "ex_py": "duōshao qián",
        "ex_ar": "بكام؟",
        "pinyin_ar": "تشيان",
        "ex_py_ar": "دووشاو تشيان"
      },
      {
        "char": "买",
        "pinyin": "mǎi",
        "ar": "يشتري",
        "ex_zh": "我想买苹果",
        "ex_py": "wǒ xiǎng mǎi píngguǒ",
        "ex_ar": "عايز أشتري تفاح",
        "pinyin_ar": "ماي",
        "ex_py_ar": "وو شيانغ ماي بينغغوو"
      },
      {
        "char": "块",
        "pinyin": "kuài",
        "ar": "وحدة عملة (جنيه/يوان)",
        "ex_zh": "十块钱",
        "ex_py": "shí kuài qián",
        "ex_ar": "عشرة جنيه",
        "pinyin_ar": "كواي",
        "ex_py_ar": "شي كواي تشيان"
      },
      {
        "char": "衣服",
        "pinyin": "yīfu",
        "ar": "هدوم",
        "ex_zh": "买衣服",
        "ex_py": "mǎi yīfu",
        "ex_ar": "يشتري هدوم",
        "pinyin_ar": "يفو",
        "ex_py_ar": "ماي يفو"
      },
      {
        "char": "出租车",
        "pinyin": "chūzūchē",
        "ar": "تاكسي",
        "ex_zh": "坐出租车",
        "ex_py": "zuò chūzūchē",
        "ex_ar": "يركب تاكسي",
        "pinyin_ar": "تشوزوتشه",
        "ex_py_ar": "زوو تشوزوتشه"
      },
      {
        "char": "飞机",
        "pinyin": "fēijī",
        "ar": "طيارة",
        "ex_zh": "坐飞机",
        "ex_py": "zuò fēijī",
        "ex_ar": "يركب طيارة",
        "pinyin_ar": "فييجي",
        "ex_py_ar": "زوو فييجي"
      },
      {
        "char": "请",
        "pinyin": "qǐng",
        "ar": "من فضلك / يدعو",
        "ex_zh": "请坐",
        "ex_py": "qǐng zuò",
        "ex_ar": "اتفضل اقعد",
        "pinyin_ar": "تشينغ",
        "ex_py_ar": "تشينغ زوو"
      },
      {
        "char": "没关系",
        "pinyin": "méi guānxi",
        "ar": "معلش / مفيش مشكلة",
        "ex_zh": "没关系！",
        "ex_py": "méi guānxi",
        "ex_ar": "معلش، مفيش مشكلة",
        "pinyin_ar": "ميي غوانشي",
        "ex_py_ar": "ميي غوانشي"
      },
      {
        "char": "汉语",
        "pinyin": "Hànyǔ",
        "ar": "اللغة الصينية",
        "ex_zh": "学习汉语",
        "ex_py": "xuéxí Hànyǔ",
        "ex_ar": "يتعلم صيني",
        "pinyin_ar": "هانيو",
        "ex_py_ar": "شيهشي هانيو"
      },
      {
        "char": "书",
        "pinyin": "shū",
        "ar": "كتاب",
        "ex_zh": "一本书",
        "ex_py": "yì běn shū",
        "ex_ar": "كتاب واحد",
        "pinyin_ar": "شو",
        "ex_py_ar": "ي بن شو"
      },
      {
        "char": "桌子",
        "pinyin": "zhuōzi",
        "ar": "ترابيزة",
        "ex_zh": "一张桌子",
        "ex_py": "yì zhāng zhuōzi",
        "ex_ar": "ترابيزة واحدة",
        "pinyin_ar": "جووزي",
        "ex_py_ar": "ي جانغ جووزي"
      },
      {
        "char": "椅子",
        "pinyin": "yǐzi",
        "ar": "كرسي",
        "ex_zh": "坐在椅子上",
        "ex_py": "zuò zài yǐzi shàng",
        "ex_ar": "قاعد على الكرسي",
        "pinyin_ar": "يزي",
        "ex_py_ar": "زوو زاي يزي شانغ"
      },
      {
        "char": "电脑",
        "pinyin": "diànnǎo",
        "ar": "كمبيوتر",
        "ex_zh": "用电脑",
        "ex_py": "yòng diànnǎo",
        "ex_ar": "يستخدم الكمبيوتر",
        "pinyin_ar": "ديانناو",
        "ex_py_ar": "يونغ ديانناو"
      },
      {
        "char": "医生",
        "pinyin": "yīshēng",
        "ar": "دكتور",
        "ex_zh": "他是医生",
        "ex_py": "tā shì yīshēng",
        "ex_ar": "هو دكتور",
        "pinyin_ar": "يشنغ",
        "ex_py_ar": "تا شي يشنغ"
      },
      {
        "char": "电视",
        "pinyin": "diànshì",
        "ar": "تلفزيون",
        "ex_zh": "看电视",
        "ex_py": "kàn diànshì",
        "ex_ar": "يتفرج على التلفزيون",
        "pinyin_ar": "ديانشي",
        "ex_py_ar": "كان ديانشي"
      }
    ]
  },
  {
    "id": 10,
    "title": "أدوات السؤال والربط",
    "culture": "لو حد صيني سألك 'عندك كام سنة؟' أو 'بتقبض كام؟' من أول ما تتعرفوا، متتضايقش — الأسئلة دي عادية جدًا وبتعتبر اهتمام مش فضول زيادة عن اللزوم زي في تقاليدنا. الخصوصية الشخصية بمفهومها الغربي/العربي مش مفهوم أساسي بنفس الدرجة في المحادثات اليومية الصينية، خصوصًا بين الناس اللي بتبدأ تتقرب من بعض.",
    "words": [
      {
        "char": "什么",
        "pinyin": "shénme",
        "ar": "إيه",
        "ex_zh": "这是什么？",
        "ex_py": "zhè shì shénme",
        "ex_ar": "ده إيه؟",
        "pinyin_ar": "شنمه",
        "ex_py_ar": "جه شي شنمه"
      },
      {
        "char": "怎么",
        "pinyin": "zěnme",
        "ar": "إزاي",
        "ex_zh": "怎么去？",
        "ex_py": "zěnme qù",
        "ex_ar": "نروح إزاي؟",
        "pinyin_ar": "زنمه",
        "ex_py_ar": "زنمه تشو"
      },
      {
        "char": "怎么样",
        "pinyin": "zěnmeyàng",
        "ar": "عامل إيه / رأيك إيه",
        "ex_zh": "这个怎么样？",
        "ex_py": "zhège zěnmeyàng",
        "ex_ar": "رأيك إيه في ده؟",
        "pinyin_ar": "زنمهيانغ",
        "ex_py_ar": "جهغه زنمهيانغ"
      },
      {
        "char": "呢",
        "pinyin": "ne",
        "ar": "أداة سؤال (وانت؟)",
        "ex_zh": "你呢？",
        "ex_py": "nǐ ne",
        "ex_ar": "وانت؟",
        "pinyin_ar": "نه",
        "ex_py_ar": "ني نه"
      },
      {
        "char": "吗",
        "pinyin": "ma",
        "ar": "أداة سؤال نعم/لا",
        "ex_zh": "你好吗？",
        "ex_py": "nǐ hǎo ma",
        "ex_ar": "إزيك؟",
        "pinyin_ar": "ما",
        "ex_py_ar": "ني هاو ما"
      },
      {
        "char": "的",
        "pinyin": "de",
        "ar": "أداة ملكية (بتاع)",
        "ex_zh": "我的书",
        "ex_py": "wǒ de shū",
        "ex_ar": "كتابي",
        "pinyin_ar": "ده",
        "ex_py_ar": "وو ده شو"
      },
      {
        "char": "了",
        "pinyin": "le",
        "ar": "أداة تدل على اكتمال الفعل",
        "ex_zh": "我吃了",
        "ex_py": "wǒ chī le",
        "ex_ar": "أنا كلت خلاص",
        "pinyin_ar": "له",
        "ex_py_ar": "وو تشي له"
      },
      {
        "char": "和",
        "pinyin": "hé",
        "ar": "و",
        "ex_zh": "我和你",
        "ex_py": "wǒ hé nǐ",
        "ex_ar": "أنا وإنت",
        "pinyin_ar": "هه",
        "ex_py_ar": "وو هه ني"
      },
      {
        "char": "喂",
        "pinyin": "wéi",
        "ar": "ألو (في التليفون)",
        "ex_zh": "喂，你好",
        "ex_py": "wéi, nǐ hǎo",
        "ex_ar": "ألو، إزيك",
        "pinyin_ar": "وي",
        "ex_py_ar": "ويي, ني هاو"
      },
      {
        "char": "爱",
        "pinyin": "ài",
        "ar": "يحب (حب عميق)",
        "ex_zh": "我爱你",
        "ex_py": "wǒ ài nǐ",
        "ex_ar": "بحبك",
        "pinyin_ar": "اي",
        "ex_py_ar": "وو اي ني"
      },
      {
        "char": "字",
        "pinyin": "zì",
        "ar": "حرف / كلمة مكتوبة",
        "ex_zh": "汉字",
        "ex_py": "Hànzì",
        "ex_ar": "الحرف الصيني",
        "pinyin_ar": "زي",
        "ex_py_ar": "هانزي"
      },
      {
        "char": "电影",
        "pinyin": "diànyǐng",
        "ar": "فيلم",
        "ex_zh": "看电影",
        "ex_py": "kàn diànyǐng",
        "ex_ar": "يتفرج على فيلم",
        "pinyin_ar": "ديانينغ",
        "ex_py_ar": "كان ديانينغ"
      },
      {
        "char": "坐",
        "pinyin": "zuò",
        "ar": "يقعد / يركب",
        "ex_zh": "请坐",
        "ex_py": "qǐng zuò",
        "ex_ar": "اتفضل اقعد",
        "pinyin_ar": "زوو",
        "ex_py_ar": "تشينغ زوو"
      },
      {
        "char": "本",
        "pinyin": "běn",
        "ar": "كلمة عدّ للكتب",
        "ex_zh": "两本书",
        "ex_py": "liǎng běn shū",
        "ex_ar": "كتابين",
        "pinyin_ar": "بن",
        "ex_py_ar": "ليانغ بن شو"
      }
    ]
  }
];

module.exports = { HSK1_LESSONS };
