/* ============================================================
   factory-data.js
   كتيّب التعامل مع المصانع الصينية - للتجار والمستوردين
   مش دروس، مفيش كويز ولا نقاط - بس مرجع سريع وقت الحاجة
   ⚠️ pinyin_ar نطق عربي تقريبي وبيفقد النغمات (tones) — استخدمه كمساعد جنب الـ pinyin.
   ============================================================ */

const FACTORY_CATEGORIES = [
  {
    "id": "basics",
    "title": "أساسيات المصانع",
    "icon": "🏭",
    "phrases": [
      {
        "id": "fc01",
        "hanzi": "工厂",
        "pinyin": "gōngchǎng",
        "meaning_ar": "مصنع",
        "audio": "audio/factory/f01.wav",
        "pinyin_ar": "جونغتشانغ"
      },
      {
        "id": "fc02",
        "hanzi": "供应商",
        "pinyin": "gōngyìngshāng",
        "meaning_ar": "مورّد",
        "audio": "audio/factory/f02.wav",
        "pinyin_ar": "جونغينغشانغ"
      },
      {
        "id": "fc03",
        "hanzi": "样品",
        "pinyin": "yàngpǐn",
        "meaning_ar": "عينة",
        "audio": "audio/factory/f03.wav",
        "pinyin_ar": "يانغبين"
      },
      {
        "id": "fc04",
        "hanzi": "订单",
        "pinyin": "dìngdān",
        "meaning_ar": "أوردر / طلبية",
        "audio": "audio/factory/f04.wav",
        "pinyin_ar": "دينغدان"
      },
      {
        "id": "fc05",
        "hanzi": "报价",
        "pinyin": "bàojià",
        "meaning_ar": "عرض سعر",
        "audio": "audio/factory/f05.wav",
        "pinyin_ar": "باوجيا"
      },
      {
        "id": "fc06",
        "hanzi": "产品",
        "pinyin": "chǎnpǐn",
        "meaning_ar": "منتج",
        "audio": "audio/factory/f06.wav",
        "pinyin_ar": "تشانبين"
      },
      {
        "id": "fc07",
        "hanzi": "型号",
        "pinyin": "xínghào",
        "meaning_ar": "موديل / رقم الموديل",
        "audio": "audio/factory/f07.wav",
        "pinyin_ar": "شينغهاو"
      },
      {
        "id": "fc08",
        "hanzi": "目录",
        "pinyin": "mùlù",
        "meaning_ar": "كتالوج",
        "audio": "audio/factory/f08.wav",
        "pinyin_ar": "مولو"
      },
      {
        "id": "fc09",
        "hanzi": "现货",
        "pinyin": "xiànhuò",
        "meaning_ar": "متوفر في المخزن",
        "audio": "audio/factory/f09.wav",
        "pinyin_ar": "شيانهوو"
      },
      {
        "id": "fc10",
        "hanzi": "定制",
        "pinyin": "dìngzhì",
        "meaning_ar": "تصنيع حسب الطلب",
        "audio": "audio/factory/f10.wav",
        "pinyin_ar": "دينغجر"
      }
    ]
  },
  {
    "id": "order",
    "title": "الطلب والكميات",
    "icon": "📦",
    "phrases": [
      {
        "id": "fc11",
        "hanzi": "我想订货。",
        "pinyin": "wǒ xiǎng dìnghuò",
        "meaning_ar": "عايز أعمل أوردر.",
        "audio": "audio/factory/f11.wav",
        "pinyin_ar": "ووو شيانغ دينغهوو"
      },
      {
        "id": "fc12",
        "hanzi": "最小起订量是多少？",
        "pinyin": "zuìxiǎo qǐdìngliàng shì duōshao",
        "meaning_ar": "أقل كمية للطلب كام؟",
        "audio": "audio/factory/f12.wav",
        "pinyin_ar": "تسوي شياو تشي دينغ ليانغ شر دوو شاو"
      },
      {
        "id": "fc13",
        "hanzi": "可以给我样品吗？",
        "pinyin": "kěyǐ gěi wǒ yàngpǐn ma",
        "meaning_ar": "ممكن تدّيني عينة؟",
        "audio": "audio/factory/f13.wav",
        "pinyin_ar": "كه يي جي ووو يانغبين ما"
      },
      {
        "id": "fc14",
        "hanzi": "有现货吗？",
        "pinyin": "yǒu xiànhuò ma",
        "meaning_ar": "متوفر في المخزن؟",
        "audio": "audio/factory/f14.wav",
        "pinyin_ar": "يو شيانهوو ما"
      },
      {
        "id": "fc15",
        "hanzi": "可以定制吗？",
        "pinyin": "kěyǐ dìngzhì ma",
        "meaning_ar": "ينفع تصنيع حسب الطلب؟",
        "audio": "audio/factory/f15.wav",
        "pinyin_ar": "كه يي دينغجر ما"
      },
      {
        "id": "fc16",
        "hanzi": "交货期是多久？",
        "pinyin": "jiāohuòqī shì duōjiǔ",
        "meaning_ar": "التسليم هياخد قد إيه؟",
        "audio": "audio/factory/f16.wav",
        "pinyin_ar": "جياوهوو تشي شر دوو جيو"
      },
      {
        "id": "fc17",
        "hanzi": "能发产品目录给我吗？",
        "pinyin": "néng fā chǎnpǐn mùlù gěi wǒ ma",
        "meaning_ar": "ممكن تبعتلي الكتالوج؟",
        "audio": "audio/factory/f17.wav",
        "pinyin_ar": "نينغ فا تشانبين مولو جي ووو ما"
      },
      {
        "id": "fc18",
        "hanzi": "可以看实物照片吗？",
        "pinyin": "kěyǐ kàn shíwù zhàopiàn ma",
        "meaning_ar": "ممكن أشوف صور حقيقية للمنتج؟",
        "audio": "audio/factory/f18.wav",
        "pinyin_ar": "كه يي كان شرووو جاوبيان ما"
      }
    ]
  },
  {
    "id": "price",
    "title": "الأسعار والتفاوض",
    "icon": "💰",
    "phrases": [
      {
        "id": "fc19",
        "hanzi": "价格",
        "pinyin": "jiàgé",
        "meaning_ar": "السعر",
        "audio": "audio/factory/f19.wav",
        "pinyin_ar": "جياغه"
      },
      {
        "id": "fc20",
        "hanzi": "多少钱？",
        "pinyin": "duōshao qián",
        "meaning_ar": "بكام؟",
        "audio": "audio/factory/f20.wav",
        "pinyin_ar": "دوو شاو تشيان"
      },
      {
        "id": "fc21",
        "hanzi": "请给我报价。",
        "pinyin": "qǐng gěi wǒ bàojià",
        "meaning_ar": "ابعتلي عرض سعر من فضلك.",
        "audio": "audio/factory/f21.wav",
        "pinyin_ar": "تشينغ جي ووو باوجيا"
      },
      {
        "id": "fc22",
        "hanzi": "能便宜一点吗？",
        "pinyin": "néng piányi yìdiǎn ma",
        "meaning_ar": "ممكن أرخص شوية؟",
        "audio": "audio/factory/f22.wav",
        "pinyin_ar": "نينغ بيانيي يي ديان ما"
      },
      {
        "id": "fc23",
        "hanzi": "量大可以优惠吗？",
        "pinyin": "liàng dà kěyǐ yōuhuì ma",
        "meaning_ar": "لو الكمية كبيرة في خصم؟",
        "audio": "audio/factory/f23.wav",
        "pinyin_ar": "ليانغ دا كه يي يوهوي ما"
      },
      {
        "id": "fc24",
        "hanzi": "这是最低价吗？",
        "pinyin": "zhè shì zuìdī jià ma",
        "meaning_ar": "ده أقل سعر؟",
        "audio": "audio/factory/f24.wav",
        "pinyin_ar": "جه شر تسوي دي جيا ما"
      },
      {
        "id": "fc25",
        "hanzi": "价格包含运费吗？",
        "pinyin": "jiàgé bāohán yùnfèi ma",
        "meaning_ar": "السعر شامل الشحن؟",
        "audio": "audio/factory/f25.wav",
        "pinyin_ar": "جياغه باوهان يونفي ما"
      }
    ]
  },
  {
    "id": "payment",
    "title": "الدفع",
    "icon": "💳",
    "phrases": [
      {
        "id": "fc26",
        "hanzi": "付款方式是什么？",
        "pinyin": "fùkuǎn fāngshì shì shénme",
        "meaning_ar": "طريقة الدفع إيه؟",
        "audio": "audio/factory/f26.wav",
        "pinyin_ar": "فوكوان فانغشر شر شنمه"
      },
      {
        "id": "fc27",
        "hanzi": "定金",
        "pinyin": "dìngjīn",
        "meaning_ar": "عربون",
        "audio": "audio/factory/f27.wav",
        "pinyin_ar": "دينغجين"
      },
      {
        "id": "fc28",
        "hanzi": "尾款",
        "pinyin": "wěikuǎn",
        "meaning_ar": "باقي المبلغ",
        "audio": "audio/factory/f28.wav",
        "pinyin_ar": "ويكوان"
      },
      {
        "id": "fc29",
        "hanzi": "我先付定金。",
        "pinyin": "wǒ xiān fù dìngjīn",
        "meaning_ar": "هدفع العربون الأول.",
        "audio": "audio/factory/f29.wav",
        "pinyin_ar": "ووو شيان فو دينغجين"
      },
      {
        "id": "fc30",
        "hanzi": "发货前付尾款。",
        "pinyin": "fāhuò qián fù wěikuǎn",
        "meaning_ar": "هدفع باقي المبلغ قبل الشحن.",
        "audio": "audio/factory/f30.wav",
        "pinyin_ar": "فاهوو تشيان فو ويكوان"
      },
      {
        "id": "fc31",
        "hanzi": "电汇",
        "pinyin": "diànhuì",
        "meaning_ar": "تحويل بنكي",
        "audio": "audio/factory/f31.wav",
        "pinyin_ar": "ديانهوي"
      },
      {
        "id": "fc32",
        "hanzi": "请发发票给我。",
        "pinyin": "qǐng fā fāpiào gěi wǒ",
        "meaning_ar": "ابعتلي الفاتورة من فضلك.",
        "audio": "audio/factory/f32.wav",
        "pinyin_ar": "تشينغ فا فابياو جي ووو"
      }
    ]
  },
  {
    "id": "shipping",
    "title": "الشحن",
    "icon": "🚢",
    "phrases": [
      {
        "id": "fc33",
        "hanzi": "运费",
        "pinyin": "yùnfèi",
        "meaning_ar": "تكلفة الشحن",
        "audio": "audio/factory/f33.wav",
        "pinyin_ar": "يونفي"
      },
      {
        "id": "fc34",
        "hanzi": "海运 / 空运",
        "pinyin": "hǎiyùn / kōngyùn",
        "meaning_ar": "شحن بحري / جوي",
        "audio": "audio/factory/f34.wav",
        "pinyin_ar": "هاي يون / كونغ يون"
      },
      {
        "id": "fc35",
        "hanzi": "什么时候可以发货？",
        "pinyin": "shénme shíhou kěyǐ fāhuò",
        "meaning_ar": "هتشحنوا امتى؟",
        "audio": "audio/factory/f35.wav",
        "pinyin_ar": "شنمه شرهو كه يي فاهوو"
      },
      {
        "id": "fc36",
        "hanzi": "请发装箱单给我。",
        "pinyin": "qǐng fā zhuāngxiāngdān gěi wǒ",
        "meaning_ar": "ابعتلي قايمة التعبئة.",
        "audio": "audio/factory/f36.wav",
        "pinyin_ar": "تشينغ فا جوانغشيانغدان جي ووو"
      },
      {
        "id": "fc37",
        "hanzi": "请给我物流单号。",
        "pinyin": "qǐng gěi wǒ wùliú dānhào",
        "meaning_ar": "ادّيني رقم تتبع الشحنة.",
        "audio": "audio/factory/f37.wav",
        "pinyin_ar": "تشينغ جي ووو ووليو دانهاو"
      },
      {
        "id": "fc38",
        "hanzi": "货到了。",
        "pinyin": "huò dào le",
        "meaning_ar": "البضاعة وصلت.",
        "audio": "audio/factory/f38.wav",
        "pinyin_ar": "هوو داو له"
      }
    ]
  },
  {
    "id": "quality",
    "title": "الجودة والمشاكل",
    "icon": "🔍",
    "phrases": [
      {
        "id": "fc39",
        "hanzi": "质量",
        "pinyin": "zhìliàng",
        "meaning_ar": "الجودة",
        "audio": "audio/factory/f39.wav",
        "pinyin_ar": "جرليانغ"
      },
      {
        "id": "fc40",
        "hanzi": "次品",
        "pinyin": "cìpǐn",
        "meaning_ar": "منتج معيب",
        "audio": "audio/factory/f40.wav",
        "pinyin_ar": "تسيبين"
      },
      {
        "id": "fc41",
        "hanzi": "发货前请检查质量。",
        "pinyin": "fāhuò qián qǐng jiǎnchá zhìliàng",
        "meaning_ar": "افحصوا الجودة قبل الشحن من فضلكم.",
        "audio": "audio/factory/f41.wav",
        "pinyin_ar": "فاهوو تشيان تشينغ جيانتشا جرليانغ"
      },
      {
        "id": "fc42",
        "hanzi": "这个产品有问题。",
        "pinyin": "zhège chǎnpǐn yǒu wèntí",
        "meaning_ar": "المنتج ده فيه مشكلة.",
        "audio": "audio/factory/f42.wav",
        "pinyin_ar": "جه غه تشانبين يو وينتي"
      },
      {
        "id": "fc43",
        "hanzi": "请拍照片给我看。",
        "pinyin": "qǐng pāi zhàopiàn gěi wǒ kàn",
        "meaning_ar": "صوّرلي وابعتلي الصور.",
        "audio": "audio/factory/f43.wav",
        "pinyin_ar": "تشينغ باي جاوبيان جي ووو كان"
      },
      {
        "id": "fc44",
        "hanzi": "可以退货吗？",
        "pinyin": "kěyǐ tuìhuò ma",
        "meaning_ar": "ينفع أرجّع البضاعة؟",
        "audio": "audio/factory/f44.wav",
        "pinyin_ar": "كه يي توي هوو ما"
      },
      {
        "id": "fc45",
        "hanzi": "请补发。",
        "pinyin": "qǐng bǔfā",
        "meaning_ar": "ابعتولي بدل المعيب من فضلكم.",
        "audio": "audio/factory/f45.wav",
        "pinyin_ar": "تشينغ بوفا"
      }
    ]
  },
  {
    "id": "chat",
    "title": "التواصل مع المصنع",
    "icon": "💬",
    "phrases": [
      {
        "id": "fc46",
        "hanzi": "你好，我是进口商。",
        "pinyin": "nǐ hǎo, wǒ shì jìnkǒushāng",
        "meaning_ar": "مرحبا، أنا مستورد.",
        "audio": "audio/factory/f46.wav",
        "pinyin_ar": "ني هاو، ووو شر جينكوشانغ"
      },
      {
        "id": "fc47",
        "hanzi": "你有微信吗？",
        "pinyin": "nǐ yǒu wēixìn ma",
        "meaning_ar": "عندك ويتشات؟",
        "audio": "audio/factory/f47.wav",
        "pinyin_ar": "ني يو ويشين ما"
      },
      {
        "id": "fc48",
        "hanzi": "请稍等。",
        "pinyin": "qǐng shāo děng",
        "meaning_ar": "استنى شوية من فضلك.",
        "audio": "audio/factory/f48.wav",
        "pinyin_ar": "تشينغ شاو دنغ"
      },
      {
        "id": "fc49",
        "hanzi": "我再考虑一下。",
        "pinyin": "wǒ zài kǎolǜ yíxià",
        "meaning_ar": "هفكر تاني وأرد عليك.",
        "audio": "audio/factory/f49.wav",
        "pinyin_ar": "ووو زاي كاولو يشيا"
      },
      {
        "id": "fc50",
        "hanzi": "谢谢，合作愉快！",
        "pinyin": "xièxie, hézuò yúkuài",
        "meaning_ar": "شكرا، تعاون موفق!",
        "audio": "audio/factory/f50.wav",
        "pinyin_ar": "شيهشيه، هه زوو يوكواي"
      }
    ]
  }
];
