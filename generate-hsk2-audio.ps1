# =====================================================================
# generate-hsk2-audio.ps1
# بيولّد كل ملفات صوت كلمات HSK2 تلقائيًا باستخدام صوت Huihui الصيني
# المثبت أصلاً على ويندوز - مفيش داعي لأي برنامج تاني
# =====================================================================
# طريقة الاستخدام:
# 1. افتحي PowerShell (اكتبي "PowerShell" في البحث)
# 2. روحي لمجلد المشروع بتاعك، مثلاً:
#    cd "$env:USERPROFILE\Desktop\taallim-chinese-in-arabic"
# 3. شغّلي السكريبت:
#    powershell -ExecutionPolicy Bypass -File generate-hsk2-audio.ps1
# 4. استني شوية، هيطلعلك رسالة "تم" بعد كل ملف
# =====================================================================

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer

# ---- اختيار صوت Huihui الصيني تلقائيًا ----
$voices = $synth.GetInstalledVoices() | Where-Object { $_.VoiceInfo.Name -like "*Huihui*" }
if ($voices.Count -eq 0) {
    Write-Host "تحذير: صوت Huihui مش لاقياه على الجهاز. هيستخدم الصوت الافتراضي." -ForegroundColor Yellow
} else {
    $synth.SelectVoice($voices[0].VoiceInfo.Name)
    Write-Host "تم اختيار الصوت: $($voices[0].VoiceInfo.Name)" -ForegroundColor Green
}

$synth.Rate = -2   # سرعة أبطأ شوية عشان النطق يبقى أوضح للمتعلمين

# ---- قائمة كل كلمات HSK2 مع اسم الملف ومجلد الدرس ----
$words = @(
    @{ Lesson="l01"; File="v101.wav"; Text="了" },
    @{ Lesson="l01"; File="v102.wav"; Text="昨天" },
    @{ Lesson="l01"; File="v103.wav"; Text="以前" },
    @{ Lesson="l01"; File="v104.wav"; Text="去年" },
    @{ Lesson="l01"; File="v105.wav"; Text="上个月" },
    @{ Lesson="l01"; File="v106.wav"; Text="以后" },
    @{ Lesson="l01"; File="v107.wav"; Text="过" },
    @{ Lesson="l01"; File="v108.wav"; Text="刚才" },

    @{ Lesson="l02"; File="v201.wav"; Text="比" },
    @{ Lesson="l02"; File="v202.wav"; Text="更" },
    @{ Lesson="l02"; File="v203.wav"; Text="最" },
    @{ Lesson="l02"; File="v204.wav"; Text="一样" },
    @{ Lesson="l02"; File="v205.wav"; Text="差" },
    @{ Lesson="l02"; File="v206.wav"; Text="比较" },
    @{ Lesson="l02"; File="v207.wav"; Text="还" },
    @{ Lesson="l02"; File="v208.wav"; Text="极了" },

    @{ Lesson="l03"; File="v301.wav"; Text="高兴" },
    @{ Lesson="l03"; File="v302.wav"; Text="难过" },
    @{ Lesson="l03"; File="v303.wav"; Text="生气" },
    @{ Lesson="l03"; File="v304.wav"; Text="害怕" },
    @{ Lesson="l03"; File="v305.wav"; Text="担心" },
    @{ Lesson="l03"; File="v306.wav"; Text="累" },
    @{ Lesson="l03"; File="v307.wav"; Text="舒服" },
    @{ Lesson="l03"; File="v308.wav"; Text="讨厌" },

    @{ Lesson="l04"; File="v401.wav"; Text="头" },
    @{ Lesson="l04"; File="v402.wav"; Text="肚子" },
    @{ Lesson="l04"; File="v403.wav"; Text="疼" },
    @{ Lesson="l04"; File="v404.wav"; Text="感冒" },
    @{ Lesson="l04"; File="v405.wav"; Text="医院" },
    @{ Lesson="l04"; File="v406.wav"; Text="医生" },
    @{ Lesson="l04"; File="v407.wav"; Text="药" },
    @{ Lesson="l04"; File="v408.wav"; Text="生病" },

    @{ Lesson="l05"; File="v501.wav"; Text="爱好" },
    @{ Lesson="l05"; File="v502.wav"; Text="游泳" },
    @{ Lesson="l05"; File="v503.wav"; Text="唱歌" },
    @{ Lesson="l05"; File="v504.wav"; Text="跳舞" },
    @{ Lesson="l05"; File="v505.wav"; Text="运动" },
    @{ Lesson="l05"; File="v506.wav"; Text="旅游" },
    @{ Lesson="l05"; File="v507.wav"; Text="画画" },
    @{ Lesson="l05"; File="v508.wav"; Text="听音乐" },

    @{ Lesson="l06"; File="v601.wav"; Text="飞机" },
    @{ Lesson="l06"; File="v602.wav"; Text="火车" },
    @{ Lesson="l06"; File="v603.wav"; Text="出租车" },
    @{ Lesson="l06"; File="v604.wav"; Text="公共汽车" },
    @{ Lesson="l06"; File="v605.wav"; Text="骑自行车" },
    @{ Lesson="l06"; File="v606.wav"; Text="开车" },
    @{ Lesson="l06"; File="v607.wav"; Text="走路" },
    @{ Lesson="l06"; File="v608.wav"; Text="机场" },

    @{ Lesson="l07"; File="v701.wav"; Text="想" },
    @{ Lesson="l07"; File="v702.wav"; Text="要" },
    @{ Lesson="l07"; File="v703.wav"; Text="会" },
    @{ Lesson="l07"; File="v704.wav"; Text="能" },
    @{ Lesson="l07"; File="v705.wav"; Text="可以" },
    @{ Lesson="l07"; File="v706.wav"; Text="应该" },
    @{ Lesson="l07"; File="v707.wav"; Text="得" },
    @{ Lesson="l07"; File="v708.wav"; Text="不用" },

    @{ Lesson="l08"; File="v801.wav"; Text="喂" },
    @{ Lesson="l08"; File="v802.wav"; Text="打电话" },
    @{ Lesson="l08"; File="v803.wav"; Text="手机" },
    @{ Lesson="l08"; File="v804.wav"; Text="等" },
    @{ Lesson="l08"; File="v805.wav"; Text="见面" },
    @{ Lesson="l08"; File="v806.wav"; Text="约" },
    @{ Lesson="l08"; File="v807.wav"; Text="迟到" },
    @{ Lesson="l08"; File="v808.wav"; Text="安排" },

    @{ Lesson="l09"; File="v901.wav"; Text="因为" },
    @{ Lesson="l09"; File="v902.wav"; Text="所以" },
    @{ Lesson="l09"; File="v903.wav"; Text="但是" },
    @{ Lesson="l09"; File="v904.wav"; Text="虽然" },
    @{ Lesson="l09"; File="v905.wav"; Text="可是" },
    @{ Lesson="l09"; File="v906.wav"; Text="而且" },
    @{ Lesson="l09"; File="v907.wav"; Text="除了" },
    @{ Lesson="l09"; File="v908.wav"; Text="特别" },

    @{ Lesson="l10"; File="v1001.wav"; Text="还" },
    @{ Lesson="l10"; File="v1002.wav"; Text="再" },
    @{ Lesson="l10"; File="v1003.wav"; Text="也" },
    @{ Lesson="l10"; File="v1004.wav"; Text="一起" },
    @{ Lesson="l10"; File="v1005.wav"; Text="已经" },
    @{ Lesson="l10"; File="v1006.wav"; Text="快要了" },
    @{ Lesson="l10"; File="v1007.wav"; Text="计划" },
    @{ Lesson="l10"; File="v1008.wav"; Text="打算" }
)

# ---- المجلد الأساسي اللي هتتحفظ فيه الملفات (جوه مجلد المشروع) ----
$baseFolder = Join-Path (Get-Location) "audio\hsk2"

$count = 0
$total = $words.Count

foreach ($w in $words) {
    $lessonFolder = Join-Path $baseFolder $w.Lesson
    if (-not (Test-Path $lessonFolder)) {
        New-Item -ItemType Directory -Path $lessonFolder -Force | Out-Null
    }

    $outputPath = Join-Path $lessonFolder $w.File
    $synth.SetOutputToWaveFile($outputPath)
    $synth.Speak($w.Text)
    $synth.SetOutputToDefaultAudioDevice()

    $count++
    Write-Host "[$count/$total] تم: $($w.Lesson)/$($w.File)  ←  $($w.Text)" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "خلصنا! اترفعت $count ملف صوت جوه مجلد audio\hsk2\" -ForegroundColor Green
Write-Host "دلوقتي ارفعي مجلد audio كامل على GitHub." -ForegroundColor Green
