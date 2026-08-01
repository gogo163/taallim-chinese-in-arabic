/* ============================================================
   travel-data.js
   كتيّب عبارات السفر - عبارات جاهزة للاستخدام الفوري
   مش دروس، مفيش كويز ولا نقاط - بس مرجع سريع وقت الحاجة
   ⚠️ pinyin_ar نطق عربي تقريبي وبيفقد النغمات (tones) — استخدمه كمساعد جنب الـ pinyin.
   ============================================================ */

const TRAVEL_CATEGORIES = [
  {
    "id": "airport",
    "title": "في المطار",
    "icon": "✈️",
    "phrases": [
      {
        "id": "tv01",
        "hanzi": "护照",
        "pinyin": "hùzhào",
        "meaning_ar": "جواز السفر",
        "audio": "audio/travel/v01.wav",
        "pinyin_ar": "هوجاو"
      },
      {
        "id": "tv02",
        "hanzi": "登机牌",
        "pinyin": "dēngjīpái",
        "meaning_ar": "بطاقة الصعود للطائرة",
        "audio": "audio/travel/v02.wav",
        "pinyin_ar": "دنغجيباي"
      },
      {
        "id": "tv03",
        "hanzi": "行李",
        "pinyin": "xíngli",
        "meaning_ar": "شنطة السفر / العفش",
        "audio": "audio/travel/v03.wav",
        "pinyin_ar": "شينغلي"
      },
      {
        "id": "tv04",
        "hanzi": "安检",
        "pinyin": "ānjiǎn",
        "meaning_ar": "التفتيش الأمني",
        "audio": "audio/travel/v04.wav",
        "pinyin_ar": "انجيان"
      },
      {
        "id": "tv05",
        "hanzi": "航班",
        "pinyin": "hángbān",
        "meaning_ar": "رحلة طيران",
        "audio": "audio/travel/v05.wav",
        "pinyin_ar": "هانغبان"
      },
      {
        "id": "tv06",
        "hanzi": "起飞",
        "pinyin": "qǐfēi",
        "meaning_ar": "إقلاع الطيارة",
        "audio": "audio/travel/v06.wav",
        "pinyin_ar": "تشيفيي"
      },
      {
        "id": "tv07",
        "hanzi": "到达",
        "pinyin": "dàodá",
        "meaning_ar": "الوصول",
        "audio": "audio/travel/v07.wav",
        "pinyin_ar": "داودا"
      },
      {
        "id": "tv08",
        "hanzi": "免税店",
        "pinyin": "miǎnshuìdiàn",
        "meaning_ar": "محل دْيوتي فري",
        "audio": "audio/travel/v08.wav",
        "pinyin_ar": "ميانشويديان"
      }
    ]
  },
  {
    "id": "hotel",
    "title": "في الفندق",
    "icon": "🏨",
    "phrases": [
      {
        "id": "tv09",
        "hanzi": "预订",
        "pinyin": "yùdìng",
        "meaning_ar": "حجز",
        "audio": "audio/travel/v09.wav",
        "pinyin_ar": "يودينغ"
      },
      {
        "id": "tv10",
        "hanzi": "房间",
        "pinyin": "fángjiān",
        "meaning_ar": "غرفة",
        "audio": "audio/travel/v10.wav",
        "pinyin_ar": "فانغجيان"
      },
      {
        "id": "tv11",
        "hanzi": "钥匙",
        "pinyin": "yàoshi",
        "meaning_ar": "مفتاح",
        "audio": "audio/travel/v11.wav",
        "pinyin_ar": "ياوشي"
      },
      {
        "id": "tv12",
        "hanzi": "前台",
        "pinyin": "qiántái",
        "meaning_ar": "الاستقبال (الريسبشن)",
        "audio": "audio/travel/v12.wav",
        "pinyin_ar": "تشيانتاي"
      },
      {
        "id": "tv13",
        "hanzi": "入住",
        "pinyin": "rùzhù",
        "meaning_ar": "تسجيل الدخول (تشيك إن)",
        "audio": "audio/travel/v13.wav",
        "pinyin_ar": "روجو"
      },
      {
        "id": "tv14",
        "hanzi": "退房",
        "pinyin": "tuìfáng",
        "meaning_ar": "تسجيل الخروج (تشيك أوت)",
        "audio": "audio/travel/v14.wav",
        "pinyin_ar": "تويفانغ"
      },
      {
        "id": "tv15",
        "hanzi": "早餐",
        "pinyin": "zǎocān",
        "meaning_ar": "فطار",
        "audio": "audio/travel/v15.wav",
        "pinyin_ar": "زاوتسان"
      },
      {
        "id": "tv16",
        "hanzi": "无线网密码是什么？",
        "pinyin": "wúxiàn wǎng mìmǎ shì shénme",
        "meaning_ar": "إيه باسورد الواي فاي؟",
        "audio": "audio/travel/v16.wav",
        "pinyin_ar": "ووشيان وانغ ميما شي شنمه"
      }
    ]
  },
  {
    "id": "transport",
    "title": "التاكسي والمواصلات",
    "icon": "🚕",
    "phrases": [
      {
        "id": "tv17",
        "hanzi": "打车",
        "pinyin": "dǎchē",
        "meaning_ar": "يوقّف تاكسي",
        "audio": "audio/travel/v17.wav",
        "pinyin_ar": "داتشه"
      },
      {
        "id": "tv18",
        "hanzi": "地铁站",
        "pinyin": "dìtiězhàn",
        "meaning_ar": "محطة مترو",
        "audio": "audio/travel/v18.wav",
        "pinyin_ar": "ديتيهجان"
      },
      {
        "id": "tv19",
        "hanzi": "请到这个地址。",
        "pinyin": "qǐng dào zhège dìzhǐ",
        "meaning_ar": "روح العنوان ده من فضلك.",
        "audio": "audio/travel/v19.wav",
        "pinyin_ar": "تشينغ داو جهغه ديجي"
      },
      {
        "id": "tv20",
        "hanzi": "多少钱？",
        "pinyin": "duōshǎo qián",
        "meaning_ar": "بكام؟",
        "audio": "audio/travel/v20.wav",
        "pinyin_ar": "دووشاو تشيان"
      },
      {
        "id": "tv21",
        "hanzi": "请等一下。",
        "pinyin": "qǐng děng yíxià",
        "meaning_ar": "استنى لحظة من فضلك.",
        "audio": "audio/travel/v21.wav",
        "pinyin_ar": "تشينغ دنغ يشيا"
      },
      {
        "id": "tv22",
        "hanzi": "快一点，谢谢。",
        "pinyin": "kuài yìdiǎn, xièxie",
        "meaning_ar": "يا ريت أسرع شوية، شكرًا.",
        "audio": "audio/travel/v22.wav",
        "pinyin_ar": "كواي يديان, شيهشيه"
      },
      {
        "id": "tv23",
        "hanzi": "在这里停车。",
        "pinyin": "zài zhèlǐ tíngchē",
        "meaning_ar": "وقّف هنا.",
        "audio": "audio/travel/v23.wav",
        "pinyin_ar": "زاي جهلي تينغتشه"
      },
      {
        "id": "tv24",
        "hanzi": "机场怎么走？",
        "pinyin": "jīchǎng zěnme zǒu",
        "meaning_ar": "أروح المطار إزاي؟",
        "audio": "audio/travel/v24.wav",
        "pinyin_ar": "جيتشانغ زنمه زو"
      }
    ]
  },
  {
    "id": "emergency",
    "title": "الطوارئ والصحة",
    "icon": "🚑",
    "phrases": [
      {
        "id": "tv25",
        "hanzi": "救命！",
        "pinyin": "jiùmìng",
        "meaning_ar": "النجدة!",
        "audio": "audio/travel/v25.wav",
        "pinyin_ar": "جيومينغ"
      },
      {
        "id": "tv26",
        "hanzi": "我需要帮助。",
        "pinyin": "wǒ xūyào bāngzhù",
        "meaning_ar": "محتاج مساعدة.",
        "audio": "audio/travel/v26.wav",
        "pinyin_ar": "وو شوياو بانغجو"
      },
      {
        "id": "tv27",
        "hanzi": "医院",
        "pinyin": "yīyuàn",
        "meaning_ar": "مستشفى",
        "audio": "audio/travel/v27.wav",
        "pinyin_ar": "ييوان"
      },
      {
        "id": "tv28",
        "hanzi": "我生病了。",
        "pinyin": "wǒ shēngbìng le",
        "meaning_ar": "أنا تعبان/عيّان.",
        "audio": "audio/travel/v28.wav",
        "pinyin_ar": "وو شنغبينغ له"
      },
      {
        "id": "tv29",
        "hanzi": "药店",
        "pinyin": "yàodiàn",
        "meaning_ar": "صيدلية",
        "audio": "audio/travel/v29.wav",
        "pinyin_ar": "ياوديان"
      },
      {
        "id": "tv30",
        "hanzi": "我对...过敏。",
        "pinyin": "wǒ duì...guòmǐn",
        "meaning_ar": "عندي حساسية من...",
        "audio": "audio/travel/v30.wav",
        "pinyin_ar": "وو دوي...غوومين"
      },
      {
        "id": "tv31",
        "hanzi": "请报警。",
        "pinyin": "qǐng bàojǐng",
        "meaning_ar": "اتصل بالبوليس من فضلك.",
        "audio": "audio/travel/v31.wav",
        "pinyin_ar": "تشينغ باوجينغ"
      },
      {
        "id": "tv32",
        "hanzi": "大使馆",
        "pinyin": "dàshǐguǎn",
        "meaning_ar": "السفارة",
        "audio": "audio/travel/v32.wav",
        "pinyin_ar": "داشيغوان"
      }
    ]
  },
  {
    "id": "shopping",
    "title": "التسوق السريع",
    "icon": "🛍️",
    "phrases": [
      {
        "id": "tv33",
        "hanzi": "太贵了。",
        "pinyin": "tài guì le",
        "meaning_ar": "غالي أوي.",
        "audio": "audio/travel/v33.wav",
        "pinyin_ar": "تاي غوي له"
      },
      {
        "id": "tv34",
        "hanzi": "便宜一点吧。",
        "pinyin": "piányi yìdiǎn ba",
        "meaning_ar": "يا ريت أرخص شوية.",
        "audio": "audio/travel/v34.wav",
        "pinyin_ar": "بياني يديان با"
      },
      {
        "id": "tv35",
        "hanzi": "可以刷卡吗？",
        "pinyin": "kěyǐ shuākǎ ma",
        "meaning_ar": "ينفع أدفع بالكارت؟",
        "audio": "audio/travel/v35.wav",
        "pinyin_ar": "كهي شواكا ما"
      },
      {
        "id": "tv36",
        "hanzi": "可以试穿吗？",
        "pinyin": "kěyǐ shìchuān ma",
        "meaning_ar": "ينفع أقيس؟",
        "audio": "audio/travel/v36.wav",
        "pinyin_ar": "كهي شيتشوان ما"
      },
      {
        "id": "tv37",
        "hanzi": "有别的颜色吗？",
        "pinyin": "yǒu bié de yánsè ma",
        "meaning_ar": "فيه ألوان تانية؟",
        "audio": "audio/travel/v37.wav",
        "pinyin_ar": "يو بيه ده يانسه ما"
      },
      {
        "id": "tv38",
        "hanzi": "这个打折吗？",
        "pinyin": "zhège dǎzhé ma",
        "meaning_ar": "ده فيه تخفيض؟",
        "audio": "audio/travel/v38.wav",
        "pinyin_ar": "جهغه داجه ما"
      },
      {
        "id": "tv39",
        "hanzi": "就这个了，谢谢。",
        "pinyin": "jiù zhège le, xièxie",
        "meaning_ar": "هاخد ده بس، شكرًا.",
        "audio": "audio/travel/v39.wav",
        "pinyin_ar": "جيو جهغه له, شيهشيه"
      },
      {
        "id": "tv40",
        "hanzi": "请给我收据。",
        "pinyin": "qǐng gěi wǒ shōujù",
        "meaning_ar": "ممكن الإيصال من فضلك؟",
        "audio": "audio/travel/v40.wav",
        "pinyin_ar": "تشينغ غيي وو شوجو"
      }
    ]
  },
  {
    "id": "essentials",
    "title": "عبارات أساسية",
    "icon": "💬",
    "phrases": [
      {
        "id": "tv41",
        "hanzi": "你好。",
        "pinyin": "nǐ hǎo",
        "meaning_ar": "أهلًا.",
        "audio": "audio/travel/v41.wav",
        "pinyin_ar": "ني هاو"
      },
      {
        "id": "tv42",
        "hanzi": "谢谢。",
        "pinyin": "xièxie",
        "meaning_ar": "شكرًا.",
        "audio": "audio/travel/v42.wav",
        "pinyin_ar": "شيهشيه"
      },
      {
        "id": "tv43",
        "hanzi": "请问...",
        "pinyin": "qǐngwèn...",
        "meaning_ar": "لو سمحت... (لبدء سؤال)",
        "audio": "audio/travel/v43.wav",
        "pinyin_ar": "تشينغون..."
      },
      {
        "id": "tv44",
        "hanzi": "对不起。",
        "pinyin": "duìbuqǐ",
        "meaning_ar": "آسف / معلش.",
        "audio": "audio/travel/v44.wav",
        "pinyin_ar": "دويبوتشي"
      },
      {
        "id": "tv45",
        "hanzi": "我不会说中文。",
        "pinyin": "wǒ bú huì shuō zhōngwén",
        "meaning_ar": "أنا مش بعرف أتكلم صيني.",
        "audio": "audio/travel/v45.wav",
        "pinyin_ar": "وو بو هوي شوو جونغون"
      },
      {
        "id": "tv46",
        "hanzi": "你会说英语吗？",
        "pinyin": "nǐ huì shuō yīngyǔ ma",
        "meaning_ar": "بتتكلم إنجليزي؟",
        "audio": "audio/travel/v46.wav",
        "pinyin_ar": "ني هوي شوو ينغيو ما"
      },
      {
        "id": "tv47",
        "hanzi": "洗手间在哪里？",
        "pinyin": "xǐshǒujiān zài nǎlǐ",
        "meaning_ar": "الحمام فين؟",
        "audio": "audio/travel/v47.wav",
        "pinyin_ar": "شيشوجيان زاي نالي"
      },
      {
        "id": "tv48",
        "hanzi": "请说慢一点。",
        "pinyin": "qǐng shuō màn yìdiǎn",
        "meaning_ar": "اتكلم أبطأ شوية من فضلك.",
        "audio": "audio/travel/v48.wav",
        "pinyin_ar": "تشينغ شوو مان يديان"
      }
    ]
  }
];
