// ══════════════════════════════════════════════════
// SpeakUp v8 — 10-preclass-engine.js
// Pre-Class Lesson Engine — alphabet, phonics, batch system
// ══════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════
// PC_ALPHABETS — Inbuilt alphabet data har language ke liye
// Priority: Firebase/Admin > PC_ALPHABETS > "no data" screen
// ══════════════════════════════════════════════════════════
var PC_ALPHABETS = {
  en: [
    {char:'A',upper:'A',lower:'a',name:'A',pronunciation:'ay',example:'Apple',meaning:'Seb',urdu:'سیب',sound_hint:"Jaise 'ey' bolta hai"},
    {char:'B',upper:'B',lower:'b',name:'B',pronunciation:'bee',example:'Ball',meaning:'Gend',urdu:'گیند',sound_hint:"Honton ko mila ke 'b' bolo"},
    {char:'C',upper:'C',lower:'c',name:'C',pronunciation:'see',example:'Cat',meaning:'Billi',urdu:'بلی',sound_hint:"'k' ya 's' ki awaaz"},
    {char:'D',upper:'D',lower:'d',name:'D',pronunciation:'dee',example:'Dog',meaning:'Kutta',urdu:'کتا',sound_hint:"Zeban daanton ke peeche rakho"},
    {char:'E',upper:'E',lower:'e',name:'E',pronunciation:'ee',example:'Egg',meaning:'Anda',urdu:'انڈا',sound_hint:"Seedha 'ee' ki awaaz"},
    {char:'F',upper:'F',lower:'f',name:'F',pronunciation:'ef',example:'Fish',meaning:'Machli',urdu:'مچھلی',sound_hint:"Upar ke daant nichle honth pe rakho"},
    {char:'G',upper:'G',lower:'g',name:'G',pronunciation:'jee',example:'Goat',meaning:'Bakri',urdu:'بکری',sound_hint:"Andar se 'g' nikalo"},
    {char:'H',upper:'H',lower:'h',name:'H',pronunciation:'aych',example:'Hat',meaning:'Topi',urdu:'ٹوپی',sound_hint:"Halki saans ki awaaz"},
    {char:'I',upper:'I',lower:'i',name:'I',pronunciation:'eye',example:'Ice',meaning:'Baraf',urdu:'برف',sound_hint:"'aa-ee' milake bolo"},
    {char:'J',upper:'J',lower:'j',name:'J',pronunciation:'jay',example:'Jam',meaning:'Murabba',urdu:'مربہ',sound_hint:"'j' phir 'ey'"},
    {char:'K',upper:'K',lower:'k',name:'K',pronunciation:'kay',example:'King',meaning:'Badshah',urdu:'بادشاہ',sound_hint:"Andar se 'k' ki awaaz"},
    {char:'L',upper:'L',lower:'l',name:'L',pronunciation:'el',example:'Lion',meaning:'Sher',urdu:'شیر',sound_hint:"Zeban taalu se lagao"},
    {char:'M',upper:'M',lower:'m',name:'M',pronunciation:'em',example:'Moon',meaning:'Chaand',urdu:'چاند',sound_hint:"Honton ko band karke 'm' bolo"},
    {char:'N',upper:'N',lower:'n',name:'N',pronunciation:'en',example:'Nose',meaning:'Naak',urdu:'ناک',sound_hint:"Naak se awaaz nikalo"},
    {char:'O',upper:'O',lower:'o',name:'O',pronunciation:'oh',example:'Orange',meaning:'Narangi',urdu:'نارنجی',sound_hint:"Honton ko gol karo"},
    {char:'P',upper:'P',lower:'p',name:'P',pronunciation:'pee',example:'Pen',meaning:'Qalam',urdu:'قلم',sound_hint:"Honton se hawa phenko"},
    {char:'Q',upper:'Q',lower:'q',name:'Q',pronunciation:'cue',example:'Queen',meaning:'Malika',urdu:'ملکہ',sound_hint:"'k-yoo' milake bolo"},
    {char:'R',upper:'R',lower:'r',name:'R',pronunciation:'ar',example:'Rain',meaning:'Baarish',urdu:'بارش',sound_hint:"Thodi si zeban ghuma ke bolo"},
    {char:'S',upper:'S',lower:'s',name:'S',pronunciation:'ess',example:'Sun',meaning:'Suraj',urdu:'سورج',sound_hint:"Saanp jaisi seeti awaaz"},
    {char:'T',upper:'T',lower:'t',name:'T',pronunciation:'tee',example:'Tree',meaning:'Darakht',urdu:'درخت',sound_hint:"Zeban daanton pe rakho"},
    {char:'U',upper:'U',lower:'u',name:'U',pronunciation:'you',example:'Umbrella',meaning:'Chhatri',urdu:'چھتری',sound_hint:"Honton aage karke 'yoo' bolo"},
    {char:'V',upper:'V',lower:'v',name:'V',pronunciation:'vee',example:'Van',meaning:'Gaadi',urdu:'گاڑی',sound_hint:"Daant nichle honth pe rakho, 'v'"},
    {char:'W',upper:'W',lower:'w',name:'W',pronunciation:'double-u',example:'Water',meaning:'Paani',urdu:'پانی',sound_hint:"Honton gol karke 'w' bolo"},
    {char:'X',upper:'X',lower:'x',name:'X',pronunciation:'ex',example:'X-ray',meaning:'X-ray',urdu:'ایکس رے',sound_hint:"'eks' ki awaaz"},
    {char:'Y',upper:'Y',lower:'y',name:'Y',pronunciation:'why',example:'Yellow',meaning:'Peela',urdu:'پیلا',sound_hint:"'w-aa-ee' milake bolo"},
    {char:'Z',upper:'Z',lower:'z',name:'Z',pronunciation:'zee',example:'Zebra',meaning:'Zebra',urdu:'زیبرا',sound_hint:"Machhar jaisi awaaz 'zzz'"}
  ],
  ru: [
    // ── Batch 1: Asaan — English/Urdu jaise (А Б В Г Д Е Ё) ──
    {char:'А',upper:'А',lower:'а',name:'А',pronunciation:'a',sound_hint:"آ — بالکل اردو 'الف' جیسی سیدھی آواز",example:'Арбуз (Arbuz)',meaning:'Tarbooz (تربوز)',urdu:'تربوز',romanUrdu:'Tarbooz'},
    {char:'Б',upper:'Б',lower:'б',name:'Б',pronunciation:'b',sound_hint:"ب — ہونٹ ملا کر 'ب' بولو، جیسے اردو 'باپ' میں",example:'Банан (Banan)',meaning:'Kela (کیلا)',urdu:'کیلا',romanUrdu:'Kela'},
    {char:'В',upper:'В',lower:'в',name:'В',pronunciation:'v',sound_hint:"و/و — اوپری دانت نیچے ہونٹ پر رکھ کر 'و' بولو",example:'Вода (Voda)',meaning:'Paani (پانی)',urdu:'پانی',romanUrdu:'Paani'},
    {char:'Г',upper:'Г',lower:'г',name:'Г',pronunciation:'g',sound_hint:"گ — اندر سے 'گ' نکالو، جیسے اردو 'گھر' میں",example:'Город (Gorod)',meaning:'Shehar (شہر)',urdu:'شہر',romanUrdu:'Shehar'},
    {char:'Д',upper:'Д',lower:'д',name:'Д',pronunciation:'d',sound_hint:"د — زبان دانتوں کے پیچھے رکھ کر 'د' بولو",example:'Дом (Dom)',meaning:'Ghar (گھر)',urdu:'گھر',romanUrdu:'Ghar'},
    {char:'Е',upper:'Е',lower:'е',name:'Е',pronunciation:'ye',sound_hint:"یے — 'ی' پھر 'ے' ملا کر بولو، جیسے 'yet' میں",example:'Ель (Yel)',meaning:'Devdar darakht (دیودار درخت)',urdu:'دیودار درخت',romanUrdu:'Devdar darakht'},
    {char:'Ё',upper:'Ё',lower:'ё',name:'Ё',pronunciation:'yo',sound_hint:"یو — 'ی' پھر 'و' ملا کر بولو، جیسے 'yogurt' میں",example:'Ёж (Yozh)',meaning:'Khaardaar jaanwar (خاردار جانور)',urdu:'خاردار جانور',romanUrdu:'Khaardaar jaanwar'},
    // ── Batch 2: Common (Ж З И Й К Л М Н) ──
    {char:'Ж',upper:'Ж',lower:'ж',name:'Zh',pronunciation:'zh',sound_hint:"ژ — 'ش' جیسی آواز لیکن گہری، جیسے انگریزی 'beige' میں",example:'Журнал (Zhurnal)',meaning:'Risaala (رسالہ)',urdu:'رسالہ',romanUrdu:'Risaala'},
    {char:'З',upper:'З',lower:'з',name:'З',pronunciation:'z',sound_hint:"ز — مچھر جیسی گنگناہٹ، اردو 'زمین' جیسی آواز",example:'Зима (Zima)',meaning:'Sardi (سردی)',urdu:'سردی',romanUrdu:'Sardi'},
    {char:'И',upper:'И',lower:'и',name:'И',pronunciation:'ee',sound_hint:"ی — لمبی 'ی' کی آواز، جیسے اردو 'دیکھو' میں",example:'Имя (Imya)',meaning:'Naam (نام)',urdu:'نام',romanUrdu:'Naam'},
    {char:'Й',upper:'Й',lower:'й',name:'Й',pronunciation:'y',sound_hint:"ئ — چھوٹی 'ی' کی آواز، جیسے 'yes' میں 'y'",example:'Йод (Yod)',meaning:'Iodine (آیوڈین)',urdu:'آیوڈین',romanUrdu:'Iodine'},
    {char:'К',upper:'К',lower:'к',name:'К',pronunciation:'k',sound_hint:"ک — اردو 'کتاب' جیسی 'ک' کی آواز",example:'Кот (Kot)',meaning:'Billi (بلی)',urdu:'بلی',romanUrdu:'Billi'},
    {char:'Л',upper:'Л',lower:'л',name:'Л',pronunciation:'l',sound_hint:"ل — زبان تالو پر رکھ کر 'ل' بولو، جیسے 'لال' میں",example:'Лес (Les)',meaning:'Jungle (جنگل)',urdu:'جنگل',romanUrdu:'Jungle'},
    {char:'М',upper:'М',lower:'м',name:'М',pronunciation:'m',sound_hint:"م — ہونٹ بند کر کے 'م' بولو، جیسے 'ماں' میں",example:'Мама (Mama)',meaning:'Ammi (امی)',urdu:'امی',romanUrdu:'Ammi'},
    {char:'Н',upper:'Н',lower:'н',name:'Н',pronunciation:'n',sound_hint:"ن — اردو 'ناک' جیسی 'ن' کی آواز",example:'Нос (Nos)',meaning:'Naak (ناک)',urdu:'ناک',romanUrdu:'Naak'},
    // ── Batch 3: Mid (О П Р С Т У Ф Х) ──
    {char:'О',upper:'О',lower:'о',name:'О',pronunciation:'o',sound_hint:"او — گول ہونٹوں سے 'او' بولو، جیسے 'اوپر' میں",example:'Окно (Okno)',meaning:'Khirki (کھڑکی)',urdu:'کھڑکی',romanUrdu:'Khirki'},
    {char:'П',upper:'П',lower:'п',name:'П',pronunciation:'p',sound_hint:"پ — ہونٹ ملا کر ہوا کے ساتھ 'پ' بولو",example:'Папа (Papa)',meaning:'Abbu (ابو)',urdu:'ابو',romanUrdu:'Abbu'},
    {char:'Р',upper:'Р',lower:'р',name:'Р',pronunciation:'r',sound_hint:"ر — زبان کو ہلا کر 'ر' بولو، اردو کا لڑھکتا 'ر'",example:'Рыба (Ryba)',meaning:'Machli (مچھلی)',urdu:'مچھلی',romanUrdu:'Machli'},
    {char:'С',upper:'С',lower:'с',name:'С',pronunciation:'s',sound_hint:"س — سانپ جیسی سیٹی کی آواز، اردو 'سیب' میں",example:'Собака (Sobaka)',meaning:'Kutta (کتا)',urdu:'کتا',romanUrdu:'Kutta'},
    {char:'Т',upper:'Т',lower:'т',name:'Т',pronunciation:'t',sound_hint:"ت — زبان دانتوں کے پیچھے 'ت' بولو، جیسے 'تارہ' میں",example:'Телефон (Telefon)',meaning:'Phone (فون)',urdu:'فون',romanUrdu:'Phone'},
    {char:'У',upper:'У',lower:'у',name:'У',pronunciation:'oo',sound_hint:"او — ہونٹ آگے کر کے لمبا 'اوو' بولو",example:'Утро (Utro)',meaning:'Subah (صبح)',urdu:'صبح',romanUrdu:'Subah'},
    {char:'Ф',upper:'Ф',lower:'ф',name:'Ф',pronunciation:'f',sound_hint:"ف — اوپری دانت نیچے ہونٹ پر 'ف' بولو، جیسے 'فون'",example:'Фото (Foto)',meaning:'Tasveer (تصویر)',urdu:'تصویر',romanUrdu:'Tasveer'},
    {char:'Х',upper:'Х',lower:'х',name:'Kh',pronunciation:'kh',sound_hint:"خ — اردو 'خ' جیسی آواز، جیسے 'خانہ' میں",example:'Хлеб (Khleb)',meaning:'Roti (روٹی)',urdu:'روٹی',romanUrdu:'Roti'},
    // ── Batch 4: Tricky (Ц Ч Ш Щ Ъ Ы Ь) ──
    {char:'Ц',upper:'Ц',lower:'ц',name:'Ts',pronunciation:'ts',sound_hint:"تس — 'ت' اور 'س' ملا کر تیزی سے 'تس' بولو",example:'Цирк (Tsirk)',meaning:'Circus (سرکس)',urdu:'سرکس',romanUrdu:'Circus'},
    {char:'Ч',upper:'Ч',lower:'ч',name:'Ch',pronunciation:'ch',sound_hint:"چ — اردو 'چ' جیسی آواز، جیسے 'چاند' میں",example:'Час (Chas)',meaning:'Ghanta (گھنٹہ)',urdu:'گھنٹہ',romanUrdu:'Ghanta'},
    {char:'Ш',upper:'Ш',lower:'ш',name:'Sh',pronunciation:'sh',sound_hint:"ش — اردو 'ش' جیسی آواز، جیسے 'شہر' میں",example:'Школа (Shkola)',meaning:'School (اسکول)',urdu:'اسکول',romanUrdu:'School'},
    {char:'Щ',upper:'Щ',lower:'щ',name:'Shch',pronunciation:'shch',sound_hint:"شچ — لمبی 'ش' پھر 'چ' ملا کر بولو",example:'Щи (Shchi)',meaning:'Soop (سوپ)',urdu:'سوپ',romanUrdu:'Soop'},
    {char:'Ъ',upper:'Ъ',lower:'ъ',name:'Tvyordy znak',pronunciation:'(khamosh)',sound_hint:"سخت علامت — کوئی آواز نہیں، صرف الفاظ کو الگ کرتی ہے",example:'Объект (Obyekt)',meaning:'Cheez (چیز)',urdu:'چیز',romanUrdu:'Cheez'},
    {char:'Ы',upper:'Ы',lower:'ы',name:'Y',pronunciation:'y',sound_hint:"اِ — 'ا' اور 'ی' کے درمیان کی آواز، منہ کھول کر بولو",example:'Мышь (Mysh)',meaning:'Chuha (چوہا)',urdu:'چوہا',romanUrdu:'Chuha'},
    {char:'Ь',upper:'Ь',lower:'ь',name:'Myagky znak',pronunciation:'(naram)',sound_hint:"نرم علامت — کوئی آواز نہیں، پہلے حرف کو نرم بناتی ہے",example:'Мать (Mat)',meaning:'Maadhar (ماں)',urdu:'ماں',romanUrdu:'Maadhar'},
    // ── Batch 5: Final (Э Ю Я) ──
    {char:'Э',upper:'Э',lower:'э',name:'Э',pronunciation:'e',sound_hint:"اے — منہ کھول کر 'اے' بولو، جیسے 'egg' میں",example:'Эхо (Ekho)',meaning:'Gaoonj (گونج)',urdu:'گونج',romanUrdu:'Gaoonj'},
    {char:'Ю',upper:'Ю',lower:'ю',name:'Ю',pronunciation:'yu',sound_hint:"یو — 'ی' پھر 'و' ملا کر، جیسے انگریزی 'you' میں",example:'Юг (Yug)',meaning:'Janub (جنوب)',urdu:'جنوب',romanUrdu:'Janub'},
    {char:'Я',upper:'Я',lower:'я',name:'Я',pronunciation:'ya',sound_hint:"یا — 'ی' پھر 'ا' ملا کر، جیسے 'yacht' میں",example:'Яблоко (Yabloko)',meaning:'Seb (سیب)',urdu:'سیب',romanUrdu:'Seb'}
  ],
  tr: [
    // ── Batch 1: Asaan — English jaise (A B C D E F G H I) ──
    {char:'A',upper:'A',lower:'a',name:'A',pronunciation:'ah',sound_hint:"آ — بالکل اردو 'الف' جیسی سیدھی آواز، جیسے 'araba' میں",example:'Araba (Araba)',meaning:'Gaari (گاڑی)',urdu:'گاڑی',romanUrdu:'Gaari'},
    {char:'B',upper:'B',lower:'b',name:'B',pronunciation:'beh',sound_hint:"ب — ہونٹ ملا کر 'ب' بولو، جیسے اردو 'باپ' میں",example:'Bardak (Bardak)',meaning:'Gilaas (گلاس)',urdu:'گلاس',romanUrdu:'Gilaas'},
    {char:'C',upper:'C',lower:'c',name:'C',pronunciation:'jeh',sound_hint:"ج — ترکی میں C ہمیشہ 'ج' بولتے ہیں، جیسے 'jam' میں",example:'Ceket (Ceket)',meaning:'Jacket (جیکٹ)',urdu:'جیکٹ',romanUrdu:'Jacket'},
    {char:'D',upper:'D',lower:'d',name:'D',pronunciation:'deh',sound_hint:"د — زبان دانتوں کے پیچھے رکھ کر 'د' بولو",example:'Dil (Dil)',meaning:'Dil (دل)',urdu:'دل',romanUrdu:'Dil'},
    {char:'E',upper:'E',lower:'e',name:'E',pronunciation:'eh',sound_hint:"اے — منہ کھول کر 'اے' بولو، جیسے 'egg' میں",example:'Ev (Ev)',meaning:'Ghar (گھر)',urdu:'گھر',romanUrdu:'Ghar'},
    {char:'F',upper:'F',lower:'f',name:'F',pronunciation:'feh',sound_hint:"ف — اوپری دانت نیچے ہونٹ پر رکھ کر 'ف' بولو",example:'Fare (Fare)',meaning:'Chuha (چوہا)',urdu:'چوہا',romanUrdu:'Chuha'},
    {char:'G',upper:'G',lower:'g',name:'G',pronunciation:'geh',sound_hint:"گ — اندر سے 'گ' نکالو، جیسے اردو 'گھر' میں",example:'Göz (Goz)',meaning:'Aankh (آنکھ)',urdu:'آنکھ',romanUrdu:'Aankh'},
    {char:'H',upper:'H',lower:'h',name:'H',pronunciation:'heh',sound_hint:"ہ — ہلکی سانس کی آواز، جیسے اردو 'ہوا' میں",example:'Hava (Hava)',meaning:'Hawa (ہوا)',urdu:'ہوا',romanUrdu:'Hawa'},
    {char:'I',upper:'I',lower:'ı',name:'I (dotless)',pronunciation:'uh',sound_hint:"اِ — بغیر نقطے والی I، بند منہ سے 'اِ' بولو — یہ انگریزی I سے مختلف ہے",example:'Isı (Isuh)',meaning:'Garmi (گرمی)',urdu:'گرمی',romanUrdu:'Garmi'},
    // ── Batch 2: Common (J K L M N O P R S T U V Y Z) ──
    {char:'J',upper:'J',lower:'j',name:'J',pronunciation:'zheh',sound_hint:"ژ — فرانسیسی 'j' جیسی آواز، جیسے 'beige' میں 'ge'",example:'Jilet (Jilet)',meaning:'Blade (بلیڈ)',urdu:'بلیڈ',romanUrdu:'Blade'},
    {char:'K',upper:'K',lower:'k',name:'K',pronunciation:'keh',sound_hint:"ک — اردو 'کتاب' جیسی 'ک' کی آواز",example:'Kitap (Kitap)',meaning:'Kitaab (کتاب)',urdu:'کتاب',romanUrdu:'Kitaab'},
    {char:'L',upper:'L',lower:'l',name:'L',pronunciation:'leh',sound_hint:"ل — زبان تالو پر رکھ کر 'ل' بولو، جیسے 'لال' میں",example:'Lale (Lale)',meaning:'Laleh phool (لالہ پھول)',urdu:'لالہ پھول',romanUrdu:'Laleh phool'},
    {char:'M',upper:'M',lower:'m',name:'M',pronunciation:'meh',sound_hint:"م — ہونٹ بند کر کے 'م' بولو، جیسے 'ماں' میں",example:'Masa (Masa)',meaning:'Mez (میز)',urdu:'میز',romanUrdu:'Mez'},
    {char:'N',upper:'N',lower:'n',name:'N',pronunciation:'neh',sound_hint:"ن — اردو 'ناک' جیسی 'ن' کی آواز",example:'Ne (Ne)',meaning:'Kya (کیا)',urdu:'کیا',romanUrdu:'Kya'},
    {char:'O',upper:'O',lower:'o',name:'O',pronunciation:'oh',sound_hint:"او — گول ہونٹوں سے 'او' بولو، جیسے 'اوپر' میں",example:'On (On)',meaning:'Dus (دس)',urdu:'دس',romanUrdu:'Dus'},
    {char:'P',upper:'P',lower:'p',name:'P',pronunciation:'peh',sound_hint:"پ — ہونٹ ملا کر ہوا کے ساتھ 'پ' بولو",example:'Para (Para)',meaning:'Paisa (پیسہ)',urdu:'پیسہ',romanUrdu:'Paisa'},
    {char:'R',upper:'R',lower:'r',name:'R',pronunciation:'reh',sound_hint:"ر — زبان کو ہلا کر 'ر' بولو، اردو کا لڑھکتا 'ر'",example:'Renk (Renk)',meaning:'Rang (رنگ)',urdu:'رنگ',romanUrdu:'Rang'},
    {char:'S',upper:'S',lower:'s',name:'S',pronunciation:'seh',sound_hint:"س — سانپ جیسی سیٹی کی آواز، اردو 'سیب' میں",example:'Su (Su)',meaning:'Paani (پانی)',urdu:'پانی',romanUrdu:'Paani'},
    {char:'T',upper:'T',lower:'t',name:'T',pronunciation:'teh',sound_hint:"ت — زبان دانتوں کے پیچھے 'ت' بولو، جیسے 'تارہ' میں",example:'Taş (Tash)',meaning:'Patthar (پتھر)',urdu:'پتھر',romanUrdu:'Patthar'},
    {char:'U',upper:'U',lower:'u',name:'U',pronunciation:'oo',sound_hint:"او — ہونٹ آگے کر کے لمبا 'اوو' بولو، جیسے 'اول' میں",example:'Un (Un)',meaning:'Maida (میدہ)',urdu:'میدہ',romanUrdu:'Maida'},
    {char:'V',upper:'V',lower:'v',name:'V',pronunciation:'veh',sound_hint:"و/ف — اوپری دانت نیچے ہونٹ پر رکھ کر 'و' بولو",example:'Var (Var)',meaning:'Hai / Maujood (موجود)',urdu:'موجود',romanUrdu:'Maujood'},
    {char:'Y',upper:'Y',lower:'y',name:'Y',pronunciation:'yeh',sound_hint:"ی — چھوٹی 'ی' کی آواز، جیسے 'yes' میں 'y'",example:'Yol (Yol)',meaning:'Raasta (راستہ)',urdu:'راستہ',romanUrdu:'Raasta'},
    {char:'Z',upper:'Z',lower:'z',name:'Z',pronunciation:'zeh',sound_hint:"ز — مچھر جیسی گنگناہٹ، اردو 'زمین' جیسی آواز",example:'Zaman (Zaman)',meaning:'Waqt (وقت)',urdu:'وقت',romanUrdu:'Waqt'},
    // ── Batch 3: Special — cedilla/breve (Ç Ğ) ──
    {char:'Ç',upper:'Ç',lower:'ç',name:'C cedilla',pronunciation:'cheh',sound_hint:"چ — اردو 'چ' جیسی آواز، جیسے 'چاند' میں — C کے نیچے ذیل ہے",example:'Çay (Chay)',meaning:'Chai (چائے)',urdu:'چائے',romanUrdu:'Chai'},
    {char:'Ğ',upper:'Ğ',lower:'ğ',name:'G breve (yumusak ge)',pronunciation:'(kheench)',sound_hint:"غ/خاموش — یہ حرف پہلے والے حرف کو لمبا کرتا ہے، خود آواز نہیں دیتا — جیسے 'dağ' میں 'aa' لمبا ہو جاتا ہے",example:'Dağ (Daa)',meaning:'Pahaad (پہاڑ)',urdu:'پہاڑ',romanUrdu:'Pahaad'},
    // ── Batch 4: Dotted/Umlaut special (İ Ö Ş Ü ı) ──
    {char:'İ',upper:'İ',lower:'i',name:'I (dotted)',pronunciation:'ee',sound_hint:"ی — نقطے والی I، لمبی 'ی' کی آواز، جیسے 'machine' میں — بغیر نقطے والی I سے بالکل مختلف",example:'İnek (Enek)',meaning:'Gaay (گائے)',urdu:'گائے',romanUrdu:'Gaay'},
    {char:'Ö',upper:'Ö',lower:'ö',name:'O umlaut',pronunciation:'eu',sound_hint:"اؤ — 'او' بولتے ہوئے ہونٹ گول کرو لیکن منہ کم کھولو — جرمن 'ö' جیسی آواز",example:'Göz (Geuz)',meaning:'Aankh (آنکھ)',urdu:'آنکھ',romanUrdu:'Aankh'},
    {char:'Ş',upper:'Ş',lower:'ş',name:'S cedilla',pronunciation:'sheh',sound_hint:"ش — اردو 'ش' جیسی آواز، جیسے 'شہر' میں — S کے نیچے ذیل ہے",example:'Şeker (Sheker)',meaning:'Cheeni (چینی)',urdu:'چینی',romanUrdu:'Cheeni'},
    {char:'Ü',upper:'Ü',lower:'ü',name:'U umlaut',pronunciation:'uu',sound_hint:"یو — 'او' بولتے ہوئے ہونٹ مزید آگے کرو — فرانسیسی 'u' جیسی آواز، جیسے 'üzüm' میں",example:'Üzüm (Uuzuum)',meaning:'Angoor (انگور)',urdu:'انگور',romanUrdu:'Angoor'}
  ],
  ar: [
    // ── Batch 1: Asaan — Urdu se milte ──
    {char:'ب',upper:'ب',lower:'ب',name:'Ba',pronunciation:'b',sound_hint:'ب — ہونٹ ملا کر بولو، جیسے اردو "باپ" میں',example:'بيت',meaning:'Ghar (گھر)',urdu:'گھر',romanUrdu:'Ba'},
    {char:'ت',upper:'ت',lower:'ت',name:'Ta',pronunciation:'t',sound_hint:'ت — زبان اوپر لگا کر بولو، جیسے اردو "تاج" میں',example:'تفاح',meaning:'Seb (سیب)',urdu:'سیب',romanUrdu:'Ta'},
    {char:'ث',upper:'ث',lower:'ث',name:'Tha',pronunciation:'th',sound_hint:'ث — زبان دانتوں کے درمیان رکھ کر بولو، جیسے انگریزی "think" میں',example:'ثلاثة',meaning:'Teen (تین)',urdu:'تین',romanUrdu:'Tha'},
    {char:'ج',upper:'ج',lower:'ج',name:'Jeem',pronunciation:'j',sound_hint:'ج — اردو "جنگل" جیسی آواز',example:'جمل',meaning:'Ount (اونٹ)',urdu:'اونٹ',romanUrdu:'Jeem'},
    {char:'د',upper:'د',lower:'د',name:'Dal',pronunciation:'d',sound_hint:'د — اردو "دودھ" جیسی آواز',example:'دار',meaning:'Ghar (گھر)',urdu:'گھر',romanUrdu:'Dal'},
    {char:'ذ',upper:'ذ',lower:'ذ',name:'Dhal',pronunciation:'dh',sound_hint:'ذ — زبان دانتوں کے درمیان رکھ کر بولو، جیسے انگریزی "this" میں',example:'ذهب',meaning:'Sona (سونا)',urdu:'سونا',romanUrdu:'Dhal'},
    {char:'ر',upper:'ر',lower:'ر',name:'Ra',pronunciation:'r',sound_hint:'ر — اردو "رات" جیسی آواز، زبان تھوڑی گھماؤ',example:'رجل',meaning:'Aadmi (آدمی)',urdu:'آدمی',romanUrdu:'Ra'},
    {char:'ز',upper:'ز',lower:'ز',name:'Zay',pronunciation:'z',sound_hint:'ز — اردو "زمین" جیسی آواز',example:'زيت',meaning:'Tel (تیل)',urdu:'تیل',romanUrdu:'Zay'},
    {char:'س',upper:'س',lower:'س',name:'Seen',pronunciation:'s',sound_hint:'س — اردو "سانپ" جیسی ہلکی آواز',example:'سمك',meaning:'Machli (مچھلی)',urdu:'مچھلی',romanUrdu:'Seen'},
    {char:'ش',upper:'ش',lower:'ش',name:'Sheen',pronunciation:'sh',sound_hint:'ش — اردو "شیر" جیسی آواز',example:'شمس',meaning:'Suraj (سورج)',urdu:'سورج',romanUrdu:'Sheen'},
    {char:'ص',upper:'ص',lower:'ص',name:'Saad',pronunciation:'S',sound_hint:'ص — بھاری "س" — زبان نیچے دبا کر بولو، منہ بھر کر',example:'صابون',meaning:'Sabun (صابن)',urdu:'صابن',romanUrdu:'Saad'},
    {char:'ض',upper:'ض',lower:'ض',name:'Daad',pronunciation:'D',sound_hint:'ض — بھاری "د" — منہ بھر کر بولو، گہری آواز',example:'ضفدع',meaning:'Mendhak (مینڈک)',urdu:'مینڈک',romanUrdu:'Daad'},
    {char:'ط',upper:'ط',lower:'ط',name:'Toa',pronunciation:'T',sound_hint:'ط — بھاری "ت" — گہری آواز، سینے سے نکالو',example:'طفل',meaning:'Bacha (بچہ)',urdu:'بچہ',romanUrdu:'Toa'},
    {char:'ظ',upper:'ظ',lower:'ظ',name:'Dha',pronunciation:'DH',sound_hint:'ظ — بھاری "ذ/ز" — گہری آواز، زبان دانتوں کے قریب',example:'ظلام',meaning:'Andhera (اندھیرا)',urdu:'اندھیرا',romanUrdu:'Dha'},
    {char:'ع',upper:'ع',lower:'ع',name:'Ain',pronunciation:'ayn',sound_hint:'ع — گہری آواز حلق سے — اردو "ع" جیسی، جیسے "علم" میں',example:'عين',meaning:'Aankh (آنکھ)',urdu:'آنکھ',romanUrdu:'Ain'},
    {char:'غ',upper:'غ',lower:'غ',name:'Ghain',pronunciation:'gh',sound_hint:'غ — اردو "غریب" جیسی آواز، حلق سے',example:'غرفة',meaning:'Kamra (کمرہ)',urdu:'کمرہ',romanUrdu:'Ghain'},
    {char:'ف',upper:'ف',lower:'ف',name:'Fa',pronunciation:'f',sound_hint:'ف — اوپر کے دانت نچلے ہونٹ پر رکھ کر بولو، جیسے "فون" میں',example:'فيل',meaning:'Haathi (ہاتھی)',urdu:'ہاتھی',romanUrdu:'Fa'},
    {char:'ق',upper:'ق',lower:'ق',name:'Qaf',pronunciation:'q',sound_hint:'ق — حلق کے بالکل پیچھے سے بولو، اردو "ق" جیسے "قلم" میں',example:'قمر',meaning:'Chaand (چاند)',urdu:'چاند',romanUrdu:'Qaf'},
    {char:'ك',upper:'ك',lower:'ك',name:'Kaf',pronunciation:'k',sound_hint:'ك — اردو "کتاب" جیسی "ک" کی آواز',example:'كتاب',meaning:'Kitaab (کتاب)',urdu:'کتاب',romanUrdu:'Kaf'},
    {char:'ل',upper:'ل',lower:'ل',name:'Lam',pronunciation:'l',sound_hint:'ل — زبان تالو سے لگا کر بولو، جیسے "لمبا" میں',example:'لبن',meaning:'Doodh (دودھ)',urdu:'دودھ',romanUrdu:'Lam'},
    {char:'م',upper:'م',lower:'م',name:'Meem',pronunciation:'m',sound_hint:'م — ہونٹ بند کر کے بولو، جیسے "ماں" میں',example:'مدرسة',meaning:'School (اسکول)',urdu:'اسکول',romanUrdu:'Meem'},
    {char:'ن',upper:'ن',lower:'ن',name:'Noon',pronunciation:'n',sound_hint:'ن — ناک سے نکالو، جیسے "نام" میں',example:'نهر',meaning:'Darya (دریا)',urdu:'دریا',romanUrdu:'Noon'},
    {char:'ه',upper:'ه',lower:'ه',name:'Ha',pronunciation:'h',sound_hint:'ه — ہلکی سانس کی آواز، جیسے "ہوا" میں',example:'هواء',meaning:'Hawa (ہوا)',urdu:'ہوا',romanUrdu:'Ha'},
    {char:'و',upper:'و',lower:'و',name:'Waw',pronunciation:'w / oo',sound_hint:'و — ہونٹ گول کر کے بولو، جیسے "وقت" یا "اردو" میں',example:'وردة',meaning:'Phool (پھول)',urdu:'پھول',romanUrdu:'Waw'},
    {char:'ي',upper:'ي',lower:'ي',name:'Ya',pronunciation:'y / ee',sound_hint:'ي — اردو "یار" یا "ایک" جیسی آواز',example:'يد',meaning:'Haath (ہاتھ)',urdu:'ہاتھ',romanUrdu:'Ya'},
    // ── Batch 2: Special — Thodi mushkil ──
    {char:'ا',upper:'ا',lower:'ا',name:'Alif',pronunciation:'a / aa',sound_hint:'ا — سیدھا "آ" یا "اے" کی آواز — اردو الف جیسا لیکن لمبا',example:'أسد',meaning:'Sher (شیر)',urdu:'شیر',romanUrdu:'Alif'},
    {char:'ح',upper:'ح',lower:'ح',name:'Ha (gehri)',pronunciation:'H',sound_hint:'ح — گہری "ح" — سینے سے نکالو، اردو "ح" سے بھی زیادہ گہری',example:'حر',meaning:'Garmi (گرمی)',urdu:'گرمی',romanUrdu:'Ha'},
    {char:'خ',upper:'خ',lower:'خ',name:'Kha',pronunciation:'kh',sound_hint:'خ — اردو "خدا" جیسی آواز، حلق سے',example:'خبز',meaning:'Roti (روٹی)',urdu:'روٹی',romanUrdu:'Kha'},
    // ── Batch 3: Sun aur Moon letters (note) ──
    // NOTE: Arabic mein kuch letters "shams" (sun) hain — "ال" bolte waqt "ل" ki awaaz nahi aati
    // Misal: الشمس = "ash-shams" (na "al-shams") | الرجل = "ar-rajul"
    // Moon letters mein "ال" ka "ل" poora bolta hai: الكتاب = "al-kitaab"
    // ── Batch 4: Harakat — Short Vowels ──
    {char:'فَ',upper:'فَ',lower:'فَ',name:'Fatha',pronunciation:'a',sound_hint:'فَتحہ — حرف کے اوپر چھوٹی لکیر — "اَ" کی چھوٹی آواز، جیسے "بَیت" = "bayt"',example:'بَيت',meaning:'Ghar (گھر)',urdu:'گھر',romanUrdu:'Fatha'},
    {char:'فِ',upper:'فِ',lower:'فِ',name:'Kasra',pronunciation:'i',sound_hint:'کِسرہ — حرف کے نیچے چھوٹی لکیر — "اِ" کی چھوٹی آواز، جیسے "بِسم" میں',example:'بِسم',meaning:'Naam se (نام سے)',urdu:'نام سے',romanUrdu:'Kasra'},
    {char:'فُ',upper:'فُ',lower:'فُ',name:'Damma',pronunciation:'u',sound_hint:'ضَمّہ — حرف کے اوپر گول نشان — "اُ" کی چھوٹی آواز، جیسے "كُتُب" میں',example:'كُتُب',meaning:'Kitaabein (کتابیں)',urdu:'کتابیں',romanUrdu:'Damma'}
  ],
  ja: [
    // ── Batch 1: A-row vowels ──
    {char:'あ',name:'a',pronunciation:'a',sound_hint:"آ کی آواز — جیسے 'آم' میں",example:'あめ',meaning:'Baarish (بارش)',urdu:'بارش',romanUrdu:'a'},
    {char:'い',name:'i',pronunciation:'i',sound_hint:"اِی کی آواز — جیسے 'ایک' میں",example:'いぬ',meaning:'Kutta (کتا)',urdu:'کتا',romanUrdu:'i'},
    {char:'う',name:'u',pronunciation:'u',sound_hint:"اُو — ہونٹ آگے کیے بغیر بولو",example:'うみ',meaning:'Samundar (سمندر)',urdu:'سمندر',romanUrdu:'u'},
    {char:'え',name:'e',pronunciation:'e',sound_hint:"اے کی آواز — جیسے 'egg' میں",example:'えき',meaning:'Station (اسٹیشن)',urdu:'اسٹیشن',romanUrdu:'e'},
    {char:'お',name:'o',pronunciation:'o',sound_hint:"او کی آواز — ہونٹ گول کرو",example:'おかね',meaning:'Paisa (پیسہ)',urdu:'پیسہ',romanUrdu:'o'},
    // ── Batch 2: KA-row ──
    {char:'か',name:'ka',pronunciation:'ka',sound_hint:"ک + آ — جیسے 'کام' میں",example:'かさ',meaning:'Chhatri (چھتری)',urdu:'چھتری',romanUrdu:'ka'},
    {char:'き',name:'ki',pronunciation:'ki',sound_hint:"ک + اِی — جیسے 'کیا' میں",example:'きつね',meaning:'Lomri (لومڑی)',urdu:'لومڑی',romanUrdu:'ki'},
    {char:'く',name:'ku',pronunciation:'ku',sound_hint:"ک + اُو — جیسے 'کُو' میں",example:'くも',meaning:'Baadal (بادل)',urdu:'بادل',romanUrdu:'ku'},
    {char:'け',name:'ke',pronunciation:'ke',sound_hint:"ک + اے — جیسے 'کے' میں",example:'けむり',meaning:'Dhuwaan (دھواں)',urdu:'دھواں',romanUrdu:'ke'},
    {char:'こ',name:'ko',pronunciation:'ko',sound_hint:"ک + او — جیسے 'کو' میں",example:'こども',meaning:'Bacha (بچہ)',urdu:'بچہ',romanUrdu:'ko'},
    // ── Batch 3: SA-row ──
    {char:'さ',name:'sa',pronunciation:'sa',sound_hint:"س + آ — جیسے 'سال' میں",example:'さかな',meaning:'Machli (مچھلی)',urdu:'مچھلی',romanUrdu:'sa'},
    {char:'し',name:'shi',pronunciation:'shi',sound_hint:"شِ کی آواز — جیسے 'شیر' کا شروع",example:'しんぶん',meaning:'Akhbaar (اخبار)',urdu:'اخبار',romanUrdu:'shi'},
    {char:'す',name:'su',pronunciation:'su',sound_hint:"س + اُو — جیسے 'سو' میں",example:'すし',meaning:'Sushi (سوشی)',urdu:'سوشی',romanUrdu:'su'},
    {char:'せ',name:'se',pronunciation:'se',sound_hint:"س + اے — جیسے 'سے' میں",example:'せんせい',meaning:'Ustaad (استاد)',urdu:'استاد',romanUrdu:'se'},
    {char:'そ',name:'so',pronunciation:'so',sound_hint:"س + او — جیسے 'سو' میں",example:'そら',meaning:'Aasman (آسمان)',urdu:'آسمان',romanUrdu:'so'},
    // ── Batch 4: TA-row ──
    {char:'た',name:'ta',pronunciation:'ta',sound_hint:"ت + آ — جیسے 'تاج' میں",example:'たまご',meaning:'Anda (انڈا)',urdu:'انڈا',romanUrdu:'ta'},
    {char:'ち',name:'chi',pronunciation:'chi',sound_hint:"چِ کی آواز — جیسے 'چیز' کا شروع",example:'ちず',meaning:'Naksha (نقشہ)',urdu:'نقشہ',romanUrdu:'chi'},
    {char:'つ',name:'tsu',pronunciation:'tsu',sound_hint:"ت + س + اُو — 'ts' پھر 'oo'",example:'つき',meaning:'Chaand (چاند)',urdu:'چاند',romanUrdu:'tsu'},
    {char:'て',name:'te',pronunciation:'te',sound_hint:"ت + اے — جیسے 'تے' میں",example:'てがみ',meaning:'Khat (خط)',urdu:'خط',romanUrdu:'te'},
    {char:'と',name:'to',pronunciation:'to',sound_hint:"ت + او — جیسے 'تو' میں",example:'とり',meaning:'Parinda (پرندہ)',urdu:'پرندہ',romanUrdu:'to'},
    // ── Batch 5: NA-row ──
    {char:'な',name:'na',pronunciation:'na',sound_hint:"ن + آ — جیسے 'ناک' میں",example:'なまえ',meaning:'Naam (نام)',urdu:'نام',romanUrdu:'na'},
    {char:'に',name:'ni',pronunciation:'ni',sound_hint:"ن + اِی — جیسے 'نیچے' کا شروع",example:'にわ',meaning:'Bagicha (باغیچہ)',urdu:'باغیچہ',romanUrdu:'ni'},
    {char:'ぬ',name:'nu',pronunciation:'nu',sound_hint:"ن + اُو — جیسے 'نو' میں",example:'ぬいぐるみ',meaning:'Gudiya (گڑیا)',urdu:'گڑیا',romanUrdu:'nu'},
    {char:'ね',name:'ne',pronunciation:'ne',sound_hint:"ن + اے — جیسے 'نے' میں",example:'ねこ',meaning:'Billi (بلی)',urdu:'بلی',romanUrdu:'ne'},
    {char:'の',name:'no',pronunciation:'no',sound_hint:"ن + او — جیسے 'نو' میں",example:'のみもの',meaning:'Peene ki cheez (پینے کی چیز)',urdu:'پینے کی چیز',romanUrdu:'no'},
    // ── Batch 6: HA-row ──
    {char:'は',name:'ha',pronunciation:'ha',sound_hint:"ہ + آ — جیسے 'ہاتھ' میں",example:'はな',meaning:'Phool (پھول)',urdu:'پھول',romanUrdu:'ha'},
    {char:'ひ',name:'hi',pronunciation:'hi',sound_hint:"ہ + اِی — جیسے 'ہی' میں",example:'ひと',meaning:'Insaan (انسان)',urdu:'انسان',romanUrdu:'hi'},
    {char:'ふ',name:'fu',pronunciation:'fu',sound_hint:"ہونٹوں سے ہلکی 'f' + اُو — منفرد آواز",example:'ふね',meaning:'Jahaaz (جہاز)',urdu:'جہاز',romanUrdu:'fu'},
    {char:'へ',name:'he',pronunciation:'he',sound_hint:"ہ + اے — جیسے 'ہے' میں",example:'へや',meaning:'Kamra (کمرہ)',urdu:'کمرہ',romanUrdu:'he'},
    {char:'ほ',name:'ho',pronunciation:'ho',sound_hint:"ہ + او — جیسے 'ہو' میں",example:'ほん',meaning:'Kitaab (کتاب)',urdu:'کتاب',romanUrdu:'ho'},
    // ── Batch 7: MA-row ──
    {char:'ま',name:'ma',pronunciation:'ma',sound_hint:"م + آ — جیسے 'ماں' میں",example:'まち',meaning:'Shehar (شہر)',urdu:'شہر',romanUrdu:'ma'},
    {char:'み',name:'mi',pronunciation:'mi',sound_hint:"م + اِی — جیسے 'میں' میں",example:'みず',meaning:'Paani (پانی)',urdu:'پانی',romanUrdu:'mi'},
    {char:'む',name:'mu',pronunciation:'mu',sound_hint:"م + اُو — جیسے 'مو' میں",example:'むし',meaning:'Keeda (کیڑا)',urdu:'کیڑا',romanUrdu:'mu'},
    {char:'め',name:'me',pronunciation:'me',sound_hint:"م + اے — جیسے 'مے' میں",example:'めだか',meaning:'Machli (مچھلی)',urdu:'مچھلی',romanUrdu:'me'},
    {char:'も',name:'mo',pronunciation:'mo',sound_hint:"م + او — جیسے 'مو' میں",example:'もり',meaning:'Jungle (جنگل)',urdu:'جنگل',romanUrdu:'mo'},
    // ── Batch 8: YA-row ──
    {char:'や',name:'ya',pronunciation:'ya',sound_hint:"ی + آ — جیسے 'یار' میں",example:'やさい',meaning:'Sabzi (سبزی)',urdu:'سبزی',romanUrdu:'ya'},
    {char:'ゆ',name:'yu',pronunciation:'yu',sound_hint:"ی + اُو — جیسے 'یو' میں",example:'ゆき',meaning:'Baraf (برف)',urdu:'برف',romanUrdu:'yu'},
    {char:'よ',name:'yo',pronunciation:'yo',sound_hint:"ی + او — جیسے 'یو' میں",example:'よる',meaning:'Raat (رات)',urdu:'رات',romanUrdu:'yo'},
    // ── Batch 9: RA-row ──
    {char:'ら',name:'ra',pronunciation:'ra',sound_hint:"ر + آ — جیسے 'راہ' میں",example:'らいおん',meaning:'Sher (شیر)',urdu:'شیر',romanUrdu:'ra'},
    {char:'り',name:'ri',pronunciation:'ri',sound_hint:"ر + اِی — جیسے 'ری' میں",example:'りんご',meaning:'Seb (سیب)',urdu:'سیب',romanUrdu:'ri'},
    {char:'る',name:'ru',pronunciation:'ru',sound_hint:"ر + اُو — جیسے 'رو' میں",example:'るーむ',meaning:'Kamra (کمرہ)',urdu:'کمرہ',romanUrdu:'ru'},
    {char:'れ',name:'re',pronunciation:'re',sound_hint:"ر + اے — جیسے 'رے' میں",example:'れい',meaning:'Zero (صفر)',urdu:'صفر',romanUrdu:'re'},
    {char:'ろ',name:'ro',pronunciation:'ro',sound_hint:"ر + او — جیسے 'رو' میں",example:'ろく',meaning:'Chhe (چھ)',urdu:'چھ',romanUrdu:'ro'},
    // ── Batch 10: WA-row + N ──
    {char:'わ',name:'wa',pronunciation:'wa',sound_hint:"و + آ — جیسے 'واہ' میں",example:'わたし',meaning:'Main (میں)',urdu:'میں',romanUrdu:'wa'},
    {char:'を',name:'wo',pronunciation:'o',sound_hint:"'او' کی آواز — grammar particle ہے",example:'(grammar particle)',meaning:'(Grammar ka hissa)',urdu:'(گرامر)',romanUrdu:'wo'},
    {char:'ん',name:'n',pronunciation:'n',sound_hint:"ناک سے 'ن' — جیسے 'نہیں' کے آخر میں",example:'でんしゃ',meaning:'Train (ٹرین)',urdu:'ٹرین',romanUrdu:'n'}
  ],
  zh: [
    // ── Batch 1: Labial Initials (ہونٹوں کی آوازیں) ──
    {char:'b',name:'b',pronunciation:'b',sound_hint:"ب کی آواز — جیسے 'باپ' میں، بغیر ہوا کے",example:'爸爸 (bàba)',meaning:'Baap (باپ)',urdu:'باپ',romanUrdu:'ba'},
    {char:'p',name:'p',pronunciation:'p',sound_hint:"پ کی آواز — جیسے 'پانی' میں، ہوا کے ساتھ",example:'朋友 (péngyou)',meaning:'Dost (دوست)',urdu:'دوست',romanUrdu:'pa'},
    {char:'m',name:'m',pronunciation:'m',sound_hint:"م کی آواز — جیسے 'ماں' میں، ہونٹ بند کرو",example:'妈妈 (māma)',meaning:'Ammi (امی)',urdu:'امی',romanUrdu:'ma'},
    {char:'f',name:'f',pronunciation:'f',sound_hint:"ف کی آواز — جیسے 'فون' میں، اوپری دانت نیچے ہونٹ پر",example:'饭 (fàn)',meaning:'Khaana (کھانا)',urdu:'کھانا',romanUrdu:'fa'},
    // ── Batch 2: Dental Initials (دانتوں کی آوازیں) ──
    {char:'d',name:'d',pronunciation:'d',sound_hint:"د کی آواز — جیسے 'دل' میں، بغیر ہوا کے",example:'大 (dà)',meaning:'Bara (بڑا)',urdu:'بڑا',romanUrdu:'da'},
    {char:'t',name:'t',pronunciation:'t',sound_hint:"ت کی آواز — جیسے 'تارہ' میں، ہوا کے ساتھ",example:'他 (tā)',meaning:'Woh (وہ)',urdu:'وہ',romanUrdu:'ta'},
    {char:'n',name:'n',pronunciation:'n',sound_hint:"ن کی آواز — جیسے 'ناک' میں",example:'你 (nǐ)',meaning:'Tum (تم)',urdu:'تم',romanUrdu:'na'},
    {char:'l',name:'l',pronunciation:'l',sound_hint:"ل کی آواز — جیسے 'لال' میں",example:'来 (lái)',meaning:'Aao (آؤ)',urdu:'آؤ',romanUrdu:'la'},
    // ── Batch 3: Velar Initials (گلے کی آوازیں) ──
    {char:'g',name:'g',pronunciation:'g',sound_hint:"گ کی آواز — جیسے 'گھر' میں، بغیر ہوا کے",example:'国 (guó)',meaning:'Mulk (ملک)',urdu:'ملک',romanUrdu:'ga'},
    {char:'k',name:'k',pronunciation:'k',sound_hint:"ک کی آواز — جیسے 'کتاب' میں، ہوا کے ساتھ",example:'看 (kàn)',meaning:'Dekho (دیکھو)',urdu:'دیکھو',romanUrdu:'ka'},
    {char:'h',name:'h',pronunciation:'h',sound_hint:"ہ کی آواز — جیسے 'ہوا' میں، گلے سے",example:'好 (hǎo)',meaning:'Acha (اچھا)',urdu:'اچھا',romanUrdu:'ha'},
    // ── Batch 4: Palatal Initials (تالو کی آوازیں) ──
    {char:'j',name:'j',pronunciation:'j',sound_hint:"ج کی آواز — جیسے 'جنگل' میں، پتلی 'ی' کے ساتھ",example:'家 (jiā)',meaning:'Ghar (گھر)',urdu:'گھر',romanUrdu:'jia'},
    {char:'q',name:'q',pronunciation:'q',sound_hint:"چ+ی کی آواز — 'چی' جیسے، ہوا کے ساتھ",example:'去 (qù)',meaning:'Jao (جاؤ)',urdu:'جاؤ',romanUrdu:'chi'},
    {char:'x',name:'x',pronunciation:'x',sound_hint:"ش+ی کی آواز — 'شی' جیسے، نرم آواز",example:'学 (xué)',meaning:'Seekhna (سیکھنا)',urdu:'سیکھنا',romanUrdu:'shi'},
    // ── Batch 5: Retroflex Initials (مڑی زبان کی آوازیں) ──
    {char:'zh',name:'zh',pronunciation:'zh',sound_hint:"ژ کی آواز — زبان کو اوپر مڑو، 'ژ' بولو",example:'中 (zhōng)',meaning:'Beech (بیچ)',urdu:'بیچ',romanUrdu:'zher'},
    {char:'ch',name:'ch',pronunciation:'ch',sound_hint:"چ کی آواز — زبان اوپر مڑی، ہوا کے ساتھ",example:'吃 (chī)',meaning:'Khana (کھانا)',urdu:'کھانا',romanUrdu:'cher'},
    {char:'sh',name:'sh',pronunciation:'sh',sound_hint:"ش کی آواز — زبان اوپر مڑی، 'ش' بولو",example:'是 (shì)',meaning:'Hai (ہے)',urdu:'ہے',romanUrdu:'sher'},
    {char:'r',name:'r',pronunciation:'r',sound_hint:"ر+ژ کی آواز — زبان اوپر مڑی، 'ر' کی نرم آواز",example:'人 (rén)',meaning:'Insaan (انسان)',urdu:'انسان',romanUrdu:'ren'},
    // ── Batch 6: Sibilant Initials (سیٹی آوازیں) ──
    {char:'z',name:'z',pronunciation:'z',sound_hint:"ز کی آواز — جیسے 'زندگی' میں، 'دز' مل کر",example:'字 (zì)',meaning:'Harf (حرف)',urdu:'حرف',romanUrdu:'zi'},
    {char:'c',name:'c',pronunciation:'c',sound_hint:"تس کی آواز — 'ت+س' مل کر، ہوا کے ساتھ",example:'草 (cǎo)',meaning:'Ghaas (گھاس)',urdu:'گھاس',romanUrdu:'tsi'},
    {char:'s',name:'s',pronunciation:'s',sound_hint:"س کی آواز — جیسے 'ستارہ' میں",example:'三 (sān)',meaning:'Teen (تین)',urdu:'تین',romanUrdu:'sa'},
    // ── Batch 7: Basic Finals (بنیادی آخری آوازیں) ──
    {char:'a',name:'a',pronunciation:'a',sound_hint:"آ کی آواز — جیسے 'آم' میں، منہ پوری طرح کھولو",example:'啊 (ā)',meaning:'Oh! (اوہ!)',urdu:'آہ',romanUrdu:'aa'},
    {char:'o',name:'o',pronunciation:'o',sound_hint:"او کی آواز — جیسے 'اوپر' میں، ہونٹ گول کرو",example:'哦 (ó)',meaning:'Oh! (اوہ!)',urdu:'اوہ',romanUrdu:'oh'},
    {char:'e',name:'e',pronunciation:'e',sound_hint:"اے کی آواز — منہ درمیانہ کھولو، پیچھے سے بولو",example:'鹅 (é)',meaning:'Batakh (بطخ)',urdu:'بطخ',romanUrdu:'eh'},
    {char:'i',name:'i',pronunciation:'i',sound_hint:"ای کی آواز — جیسے 'ایک' میں، ہونٹ چوڑے کرو",example:'一 (yī)',meaning:'Ek (ایک)',urdu:'ایک',romanUrdu:'ee'},
    {char:'u',name:'u',pronunciation:'u',sound_hint:"اُو کی آواز — جیسے 'اُوپر' میں، ہونٹ آگے کرو",example:'五 (wǔ)',meaning:'Paanch (پانچ)',urdu:'پانچ',romanUrdu:'oo'},
    {char:'ü',name:'ü',pronunciation:'ü',sound_hint:"اُی کی آواز — ہونٹ گول کرو جیسے 'او'، پھر 'ای' بولو",example:'鱼 (yú)',meaning:'Machli (مچھلی)',urdu:'مچھلی',romanUrdu:'yu'},
    // ── Batch 8: Compound Finals (مرکب آخری آوازیں) ──
    {char:'ai',name:'ai',pronunciation:'ai',sound_hint:"آئی کی آواز — 'آ' پھر 'ی' جلدی سے",example:'爱 (ài)',meaning:'Mohabbat (محبت)',urdu:'محبت',romanUrdu:'ai'},
    {char:'ei',name:'ei',pronunciation:'ei',sound_hint:"اے+ی کی آواز — 'اے' پھر 'ی'",example:'北 (běi)',meaning:'Shumal (شمال)',urdu:'شمال',romanUrdu:'ei'},
    {char:'ui',name:'ui',pronunciation:'ui',sound_hint:"اُوئی کی آواز — 'اُو' پھر 'ی'",example:'水 (shuǐ)',meaning:'Paani (پانی)',urdu:'پانی',romanUrdu:'uei'},
    {char:'ao',name:'ao',pronunciation:'ao',sound_hint:"آؤ کی آواز — 'آ' پھر 'او' جلدی سے",example:'好 (hǎo)',meaning:'Acha (اچھا)',urdu:'اچھا',romanUrdu:'ao'},
    {char:'ou',name:'ou',pronunciation:'ou',sound_hint:"اوؤ کی آواز — 'او' پھر 'اُو'",example:'狗 (gǒu)',meaning:'Kutta (کتا)',urdu:'کتا',romanUrdu:'ou'},
    {char:'iu',name:'iu',pronunciation:'iu',sound_hint:"یو کی آواز — 'ای' پھر 'اُو' جلدی سے",example:'六 (liù)',meaning:'Chhe (چھ)',urdu:'چھ',romanUrdu:'iou'},
    // ── Batch 9: Front Nasal Finals (ناک کی آوازیں — اگلی) ──
    {char:'ie',name:'ie',pronunciation:'ie',sound_hint:"یے کی آواز — 'ای' پھر 'اے'",example:'姐 (jiě)',meaning:'Baji (باجی)',urdu:'باجی',romanUrdu:'ieh'},
    {char:'üe',name:'üe',pronunciation:'üe',sound_hint:"یُوے کی آواز — گول ہونٹوں سے 'یے'",example:'月 (yuè)',meaning:'Chaand (چاند)',urdu:'چاند',romanUrdu:'yue'},
    {char:'an',name:'an',pronunciation:'an',sound_hint:"آن کی آواز — 'آ' پھر 'ن'",example:'安 (ān)',meaning:'Aman (امن)',urdu:'امن',romanUrdu:'an'},
    {char:'en',name:'en',pronunciation:'en',sound_hint:"اَن کی آواز — 'اَ' پھر 'ن'",example:'门 (mén)',meaning:'Darwaaza (دروازہ)',urdu:'دروازہ',romanUrdu:'en'},
    {char:'in',name:'in',pronunciation:'in',sound_hint:"ین کی آواز — 'ای' پھر 'ن'",example:'心 (xīn)',meaning:'Dil (دل)',urdu:'دل',romanUrdu:'in'},
    {char:'un',name:'un',pronunciation:'un',sound_hint:"اُون کی آواز — 'اُو' پھر 'ن'",example:'春 (chūn)',meaning:'Bahaar (بہار)',urdu:'بہار',romanUrdu:'uen'},
    {char:'ün',name:'ün',pronunciation:'ün',sound_hint:"یُون کی آواز — گول ہونٹوں سے 'این'",example:'云 (yún)',meaning:'Badal (بادل)',urdu:'بادل',romanUrdu:'yun'},
    // ── Batch 10: Back Nasal Finals (ناک کی آوازیں — پچھلی) ──
    {char:'ang',name:'ang',pronunciation:'ang',sound_hint:"آنگ کی آواز — 'آ' پھر ناک سے 'نگ'",example:'上 (shàng)',meaning:'Upar (اوپر)',urdu:'اوپر',romanUrdu:'ang'},
    {char:'eng',name:'eng',pronunciation:'eng',sound_hint:"اَنگ کی آواز — 'اَ' پھر ناک سے 'نگ'",example:'冷 (lěng)',meaning:'Thanda (ٹھنڈا)',urdu:'ٹھنڈا',romanUrdu:'eng'},
    {char:'ing',name:'ing',pronunciation:'ing',sound_hint:"ینگ کی آواز — 'ای' پھر ناک سے 'نگ'",example:'星 (xīng)',meaning:'Sitara (ستارہ)',urdu:'ستارہ',romanUrdu:'ing'},
    {char:'ong',name:'ong',pronunciation:'ong',sound_hint:"اونگ کی آواز — 'او' پھر ناک سے 'نگ'",example:'红 (hóng)',meaning:'Surkh (سرخ)',urdu:'سرخ',romanUrdu:'ong'},
    {char:'er',name:'er',pronunciation:'er',sound_hint:"اَر کی آواز — 'اَ' بولو، زبان اوپر مڑو",example:'耳 (ěr)',meaning:'Kaan (کان)',urdu:'کان',romanUrdu:'er'},
    // ══════════════════════════════════════════════════════
    // HANYU — Simplified Chinese Characters (ہانیو)
    // ══════════════════════════════════════════════════════
    // ── Batch 1: People & Family (لوگ اور خاندان) ──
    {char:'人',name:'rén',pronunciation:'ren',sound_hint:"رَن — 'ر' بولو، زبان تھوڑی اوپر، آواز نیچے آئے",example:'人们 (rénmen)',meaning:'Insaan (انسان)',urdu:'انسان',romanUrdu:'Insaan'},
    {char:'女',name:'nǚ',pronunciation:'nü',sound_hint:"نیُو — ناک سے 'ن' پھر گول ہونٹوں سے 'یو'",example:'女人 (nǚrén)',meaning:'Aurat (عورت)',urdu:'عورت',romanUrdu:'Aurat'},
    {char:'男',name:'nán',pronunciation:'nan',sound_hint:"نان — 'ن' پھر لمبی 'آ' پھر 'ن'",example:'男人 (nánrén)',meaning:'Mard (مرد)',urdu:'مرد',romanUrdu:'Mard'},
    {char:'子',name:'zǐ',pronunciation:'zi',sound_hint:"ذی — 'ذ' جیسی آواز، پھر 'ی'",example:'孩子 (háizi)',meaning:'Bachcha (بچہ)',urdu:'بچہ',romanUrdu:'Bachcha'},
    {char:'母',name:'mǔ',pronunciation:'mu',sound_hint:"مُو — 'م' پھر گول ہونٹوں سے 'اُو'",example:'母亲 (mǔqīn)',meaning:'Maa (ماں)',urdu:'ماں',romanUrdu:'Maa'},
    {char:'父',name:'fù',pronunciation:'fu',sound_hint:"فُو — 'ف' پھر 'اُو'، آواز تیزی سے نیچے آئے",example:'父亲 (fùqīn)',meaning:'Baap (باپ)',urdu:'باپ',romanUrdu:'Baap'},
    {char:'兄',name:'xiōng',pronunciation:'xiong',sound_hint:"شیُونگ — 'ش' پھر 'یو' پھر ناک سے 'نگ'",example:'兄弟 (xiōngdì)',meaning:'Bhai (بھائی)',urdu:'بھائی',romanUrdu:'Bhai'},
    {char:'弟',name:'dì',pronunciation:'di',sound_hint:"دی — 'د' پھر 'ای'، آواز تیزی سے نیچے آئے",example:'兄弟 (xiōngdì)',meaning:'Chota Bhai (چھوٹا بھائی)',urdu:'چھوٹا بھائی',romanUrdu:'Chota Bhai'},
    // ── Batch 2: Body (جسم) ──
    {char:'手',name:'shǒu',pronunciation:'shou',sound_hint:"شو — 'ش' پھر 'او'، آواز پہلے نیچے پھر اوپر آئے",example:'手机 (shǒujī)',meaning:'Haath (ہاتھ)',urdu:'ہاتھ',romanUrdu:'Haath'},
    {char:'口',name:'kǒu',pronunciation:'kou',sound_hint:"کو — 'ک' پھر 'او'، آواز پہلے نیچے پھر اوپر آئے",example:'口水 (kǒushuǐ)',meaning:'Munh (منہ)',urdu:'منہ',romanUrdu:'Munh'},
    {char:'目',name:'mù',pronunciation:'mu',sound_hint:"مُو — 'م' پھر 'اُو'، آواز تیزی سے نیچے آئے",example:'目光 (mùguāng)',meaning:'Aankh (آنکھ)',urdu:'آنکھ',romanUrdu:'Aankh'},
    {char:'耳',name:'ěr',pronunciation:'er',sound_hint:"اَر — 'اَ' بولو، زبان اوپر مڑو",example:'耳朵 (ěrduo)',meaning:'Kaan (کان)',urdu:'کان',romanUrdu:'Kaan'},
    {char:'心',name:'xīn',pronunciation:'xin',sound_hint:"شین — 'ش' پھر 'ای' پھر ناک سے 'ن'",example:'心里 (xīnlǐ)',meaning:'Dil (دل)',urdu:'دل',romanUrdu:'Dil'},
    {char:'头',name:'tóu',pronunciation:'tou',sound_hint:"تو — 'ت' پھر 'او'، آواز اوپر سے آئے",example:'头发 (tóufa)',meaning:'Sir (سر)',urdu:'سر',romanUrdu:'Sir'},
    {char:'脚',name:'jiǎo',pronunciation:'jiao',sound_hint:"جیاؤ — 'ج' پھر 'یا' پھر 'او'، آواز نیچے پھر اوپر",example:'脚步 (jiǎobù)',meaning:'Pair (پاؤں)',urdu:'پاؤں',romanUrdu:'Pair'},
    {char:'身',name:'shēn',pronunciation:'shen',sound_hint:"شَن — 'ش' پھر 'اَ' پھر 'ن'، آواز سیدھی رہے",example:'身体 (shēntǐ)',meaning:'Jism (جسم)',urdu:'جسم',romanUrdu:'Jism'},
    // ── Batch 3: Nature (قدرت) ──
    {char:'山',name:'shān',pronunciation:'shan',sound_hint:"شان — 'ش' پھر 'آ' پھر 'ن'، آواز سیدھی رہے",example:'山水 (shānshuǐ)',meaning:'Pahaar (پہاڑ)',urdu:'پہاڑ',romanUrdu:'Pahaar'},
    {char:'水',name:'shuǐ',pronunciation:'shui',sound_hint:"شوے — 'ش' پھر 'و' پھر 'اے'، آواز نیچے پھر اوپر",example:'水果 (shuǐguǒ)',meaning:'Paani (پانی)',urdu:'پانی',romanUrdu:'Paani'},
    {char:'火',name:'huǒ',pronunciation:'huo',sound_hint:"ہُوو — 'ہ' پھر 'اُو'، آواز نیچے پھر اوپر آئے",example:'火山 (huǒshān)',meaning:'Aag (آگ)',urdu:'آگ',romanUrdu:'Aag'},
    {char:'木',name:'mù',pronunciation:'mu',sound_hint:"مُو — 'م' پھر 'اُو'، آواز تیزی سے نیچے آئے",example:'木头 (mùtou)',meaning:'Lakri (لکڑی)',urdu:'لکڑی',romanUrdu:'Lakri'},
    {char:'土',name:'tǔ',pronunciation:'tu',sound_hint:"تُو — 'ت' پھر 'اُو'، آواز نیچے پھر اوپر آئے",example:'土地 (tǔdì)',meaning:'Mitti (مٹی)',urdu:'مٹی',romanUrdu:'Mitti'},
    {char:'日',name:'rì',pronunciation:'ri',sound_hint:"ری — 'ر' بولو، زبان تھوڑی اوپر، آواز تیز نیچے",example:'日出 (rìchū)',meaning:'Suraj (سورج)',urdu:'سورج',romanUrdu:'Suraj'},
    {char:'月',name:'yuè',pronunciation:'yue',sound_hint:"یُوے — 'ی' پھر گول ہونٹوں سے 'اے'، آواز تیز نیچے",example:'月亮 (yuèliang)',meaning:'Chaand (چاند)',urdu:'چاند',romanUrdu:'Chaand'},
    {char:'风',name:'fēng',pronunciation:'feng',sound_hint:"فَنگ — 'ف' پھر 'اَ' پھر ناک سے 'نگ'، آواز سیدھی",example:'风景 (fēngjǐng)',meaning:'Hawa (ہوا)',urdu:'ہوا',romanUrdu:'Hawa'},
    // ── Batch 4: Animals (جانور) ──
    {char:'马',name:'mǎ',pronunciation:'ma',sound_hint:"ما — 'م' پھر 'آ'، آواز نیچے پھر اوپر آئے",example:'马路 (mǎlù)',meaning:'Ghora (گھوڑا)',urdu:'گھوڑا',romanUrdu:'Ghora'},
    {char:'牛',name:'niú',pronunciation:'niu',sound_hint:"نیو — 'ن' پھر 'ای' پھر 'او'، آواز اوپر سے آئے",example:'牛奶 (niúnǎi)',meaning:'Bail (بیل)',urdu:'بیل',romanUrdu:'Bail'},
    {char:'羊',name:'yáng',pronunciation:'yang',sound_hint:"یانگ — 'ی' پھر 'آ' پھر ناک سے 'نگ'، آواز اوپر",example:'羊肉 (yángròu)',meaning:'Bakri (بکری)',urdu:'بکری',romanUrdu:'Bakri'},
    {char:'鱼',name:'yú',pronunciation:'yu',sound_hint:"یُو — 'ی' پھر گول ہونٹوں سے 'اُو'، آواز اوپر سے",example:'鱼肉 (yúròu)',meaning:'Machli (مچھلی)',urdu:'مچھلی',romanUrdu:'Machli'},
    {char:'鸟',name:'niǎo',pronunciation:'niao',sound_hint:"نیاؤ — 'ن' پھر 'یا' پھر 'او'، آواز نیچے پھر اوپر",example:'小鸟 (xiǎoniǎo)',meaning:'Chirya (چڑیا)',urdu:'چڑیا',romanUrdu:'Chirya'},
    {char:'猫',name:'māo',pronunciation:'mao',sound_hint:"ماؤ — 'م' پھر 'آ' پھر 'او'، آواز سیدھی رہے",example:'猫咪 (māomī)',meaning:'Billi (بلی)',urdu:'بلی',romanUrdu:'Billi'},
    {char:'狗',name:'gǒu',pronunciation:'gou',sound_hint:"گو — 'گ' پھر 'او'، آواز نیچے پھر اوپر آئے",example:'小狗 (xiǎogǒu)',meaning:'Kutta (کتا)',urdu:'کتا',romanUrdu:'Kutta'},
    {char:'虎',name:'hǔ',pronunciation:'hu',sound_hint:"ہُو — 'ہ' پھر 'اُو'، آواز نیچے پھر اوپر آئے",example:'老虎 (lǎohǔ)',meaning:'Sher (شیر)',urdu:'شیر',romanUrdu:'Sher'},
    // ── Batch 5: Food & Drink (کھانا پینا) ──
    {char:'饭',name:'fàn',pronunciation:'fan',sound_hint:"فان — 'ف' پھر 'آ' پھر 'ن'، آواز تیزی سے نیچے",example:'吃饭 (chīfàn)',meaning:'Chawal/Khana (چاول/کھانا)',urdu:'چاول/کھانا',romanUrdu:'Chawal'},
    {char:'水',name:'shuǐ',pronunciation:'shui',sound_hint:"شوے — 'ش' پھر 'و' پھر 'اے'، آواز نیچے پھر اوپر",example:'喝水 (hē shuǐ)',meaning:'Paani Peena (پانی پینا)',urdu:'پانی',romanUrdu:'Paani'},
    {char:'茶',name:'chá',pronunciation:'cha',sound_hint:"چا — 'چ' پھر 'آ'، آواز اوپر سے آئے",example:'茶水 (cháshuǐ)',meaning:'Chai (چائے)',urdu:'چائے',romanUrdu:'Chai'},
    {char:'果',name:'guǒ',pronunciation:'guo',sound_hint:"گُوو — 'گ' پھر 'اُو'، آواز نیچے پھر اوپر آئے",example:'水果 (shuǐguǒ)',meaning:'Phal (پھل)',urdu:'پھل',romanUrdu:'Phal'},
    {char:'米',name:'mǐ',pronunciation:'mi',sound_hint:"می — 'م' پھر 'ای'، آواز نیچے پھر اوپر آئے",example:'米饭 (mǐfàn)',meaning:'Chawal (چاول)',urdu:'چاول',romanUrdu:'Chawal'},
    {char:'面',name:'miàn',pronunciation:'mian',sound_hint:"میان — 'م' پھر 'یا' پھر 'ن'، آواز تیزی سے نیچے",example:'面条 (miàntiáo)',meaning:'Aata/Noodle (آٹا)',urdu:'آٹا',romanUrdu:'Aata'},
    {char:'肉',name:'ròu',pronunciation:'rou',sound_hint:"رو — 'ر' بولو پھر 'او'، آواز تیزی سے نیچے",example:'牛肉 (niúròu)',meaning:'Gosht (گوشت)',urdu:'گوشت',romanUrdu:'Gosht'},
    {char:'菜',name:'cài',pronunciation:'cai',sound_hint:"تسائی — 'ت+س' پھر 'آئی'، آواز تیزی سے نیچے",example:'蔬菜 (shūcài)',meaning:'Sabzi (سبزی)',urdu:'سبزی',romanUrdu:'Sabzi'},
    // ── Batch 6: Common Verbs (عام فعل) ──
    {char:'来',name:'lái',pronunciation:'lai',sound_hint:"لائی — 'ل' پھر 'آئی'، آواز اوپر سے آئے",example:'来吧 (lái ba)',meaning:'Aao (آؤ)',urdu:'آؤ',romanUrdu:'Aao'},
    {char:'去',name:'qù',pronunciation:'qu',sound_hint:"چھیُو — 'چھ' پھر 'یُو'، آواز تیزی سے نیچے",example:'去吧 (qù ba)',meaning:'Jao (جاؤ)',urdu:'جاؤ',romanUrdu:'Jao'},
    {char:'吃',name:'chī',pronunciation:'chi',sound_hint:"چھ — 'چھ' پھر لمبی 'ای'، آواز سیدھی رہے",example:'吃饭 (chīfàn)',meaning:'Khana Khao (کھانا کھاؤ)',urdu:'کھانا',romanUrdu:'Khana'},
    {char:'喝',name:'hē',pronunciation:'he',sound_hint:"ہَ — 'ہ' پھر 'اَ'، آواز سیدھی رہے",example:'喝水 (hē shuǐ)',meaning:'Peena (پینا)',urdu:'پینا',romanUrdu:'Peena'},
    {char:'说',name:'shuō',pronunciation:'shuo',sound_hint:"شُوو — 'ش' پھر 'اُو'، آواز سیدھی رہے",example:'说话 (shuōhuà)',meaning:'Bolna (بولنا)',urdu:'بولنا',romanUrdu:'Bolna'},
    {char:'看',name:'kàn',pronunciation:'kan',sound_hint:"کان — 'ک' پھر 'آ' پھر 'ن'، آواز تیزی سے نیچے",example:'看书 (kàn shū)',meaning:'Dekhna (دیکھنا)',urdu:'دیکھنا',romanUrdu:'Dekhna'},
    {char:'走',name:'zǒu',pronunciation:'zou',sound_hint:"ذو — 'ذ' پھر 'او'، آواز نیچے پھر اوپر آئے",example:'走路 (zǒulù)',meaning:'Chalna (چلنا)',urdu:'چلنا',romanUrdu:'Chalna'},
    {char:'坐',name:'zuò',pronunciation:'zuo',sound_hint:"ذُوو — 'ذ' پھر 'اُو'، آواز تیزی سے نیچے",example:'坐下 (zuò xia)',meaning:'Baithna (بیٹھنا)',urdu:'بیٹھنا',romanUrdu:'Baithna'},
    // ── Batch 7: Numbers & Size (گنتی اور سائز) ──
    {char:'一',name:'yī',pronunciation:'yi',sound_hint:"ای — 'ای'، آواز سیدھی رہے",example:'一个 (yī gè)',meaning:'Ek (ایک)',urdu:'ایک',romanUrdu:'Ek'},
    {char:'二',name:'èr',pronunciation:'er',sound_hint:"اَر — 'اَ' بولو، زبان اوپر مڑو، آواز تیزی سے نیچے",example:'二月 (èr yuè)',meaning:'Do (دو)',urdu:'دو',romanUrdu:'Do'},
    {char:'三',name:'sān',pronunciation:'san',sound_hint:"سان — 'س' پھر 'آ' پھر 'ن'، آواز سیدھی رہے",example:'三个 (sān gè)',meaning:'Teen (تین)',urdu:'تین',romanUrdu:'Teen'},
    {char:'大',name:'dà',pronunciation:'da',sound_hint:"دا — 'د' پھر 'آ'، آواز تیزی سے نیچے آئے",example:'大人 (dàrén)',meaning:'Bara (بڑا)',urdu:'بڑا',romanUrdu:'Bara'},
    {char:'小',name:'xiǎo',pronunciation:'xiao',sound_hint:"شیاؤ — 'ش' پھر 'یا' پھر 'او'، آواز نیچے پھر اوپر",example:'小心 (xiǎoxīn)',meaning:'Chota (چھوٹا)',urdu:'چھوٹا',romanUrdu:'Chota'},
    {char:'多',name:'duō',pronunciation:'duo',sound_hint:"دُوو — 'د' پھر 'اُو'، آواز سیدھی رہے",example:'多少 (duōshao)',meaning:'Zyada (زیادہ)',urdu:'زیادہ',romanUrdu:'Zyada'},
    {char:'少',name:'shǎo',pronunciation:'shao',sound_hint:"شاؤ — 'ش' پھر 'آ' پھر 'او'، آواز نیچے پھر اوپر",example:'多少 (duōshao)',meaning:'Kam (کم)',urdu:'کم',romanUrdu:'Kam'},
    {char:'好',name:'hǎo',pronunciation:'hao',sound_hint:"ہاؤ — 'ہ' پھر 'آ' پھر 'او'، آواز نیچے پھر اوپر",example:'好人 (hǎorén)',meaning:'Acha (اچھا)',urdu:'اچھا',romanUrdu:'Acha'},
    // ── Batch 8: Place & Direction (جگہ اور سمت) ──
    {char:'上',name:'shàng',pronunciation:'shang',sound_hint:"شانگ — 'ش' پھر 'آ' پھر ناک سے 'نگ'، آواز نیچے",example:'上面 (shàngmian)',meaning:'Upar (اوپر)',urdu:'اوپر',romanUrdu:'Upar'},
    {char:'下',name:'xià',pronunciation:'xia',sound_hint:"شیا — 'ش' پھر 'یا'، آواز تیزی سے نیچے آئے",example:'下面 (xiàmian)',meaning:'Neeche (نیچے)',urdu:'نیچے',romanUrdu:'Neeche'},
    {char:'左',name:'zuǒ',pronunciation:'zuo',sound_hint:"ذُوو — 'ذ' پھر 'اُو'، آواز نیچے پھر اوپر آئے",example:'左边 (zuǒbian)',meaning:'Baayein (بائیں)',urdu:'بائیں',romanUrdu:'Baayein'},
    {char:'右',name:'yòu',pronunciation:'you',sound_hint:"یو — 'ی' پھر 'او'، آواز تیزی سے نیچے آئے",example:'右边 (yòubian)',meaning:'Daayein (دائیں)',urdu:'دائیں',romanUrdu:'Daayein'},
    {char:'前',name:'qián',pronunciation:'qian',sound_hint:"چھیَن — 'چھ' پھر 'یَ' پھر 'ن'، آواز اوپر سے آئے",example:'前面 (qiánmian)',meaning:'Aage (آگے)',urdu:'آگے',romanUrdu:'Aage'},
    {char:'后',name:'hòu',pronunciation:'hou',sound_hint:"ہو — 'ہ' پھر 'او'، آواز تیزی سے نیچے آئے",example:'后面 (hòumian)',meaning:'Peechhe (پیچھے)',urdu:'پیچھے',romanUrdu:'Peechhe'},
    {char:'家',name:'jiā',pronunciation:'jia',sound_hint:"جیا — 'ج' پھر 'یا'، آواز سیدھی رہے",example:'回家 (huíjiā)',meaning:'Ghar (گھر)',urdu:'گھر',romanUrdu:'Ghar'},
    {char:'国',name:'guó',pronunciation:'guo',sound_hint:"گُوو — 'گ' پھر 'اُو'، آواز اوپر سے آئے",example:'中国 (Zhōngguó)',meaning:'Mulk (ملک)',urdu:'ملک',romanUrdu:'Mulk'}
  ],
  fr: [
    // ── Batch 1: Bunyaadi Haroof — Vowels (Asaan) ──
    {char:'A',upper:'A',lower:'a',name:'A',pronunciation:'ah',sound_hint:"آ — سیدھا اردو 'الف' جیسا، جیسے 'arbre' میں",example:'arbre (arbre)',meaning:'Darakht (درخت)',urdu:'درخت',romanUrdu:'A'},
    {char:'E',upper:'E',lower:'e',name:'E',pronunciation:'uh',sound_hint:"اِ/اَ — کمزور آواز، جیسے اردو 'کے' کا آخری حصہ — اکثر خاموش بھی ہوتی ہے",example:'enfant (onfon)',meaning:'Bacha (بچہ)',urdu:'بچہ',romanUrdu:'E'},
    {char:'I',upper:'I',lower:'i',name:'I',pronunciation:'ee',sound_hint:"ی — لمبی 'ی' کی آواز، جیسے اردو 'دیکھو' میں",example:'île (eel)',meaning:'Jazeera (جزیرہ)',urdu:'جزیرہ',romanUrdu:'I'},
    {char:'O',upper:'O',lower:'o',name:'O',pronunciation:'oh',sound_hint:"او — گول ہونٹوں سے 'او' بولو، جیسے اردو 'اوپر' میں",example:'orange (oronzh)',meaning:'Narangi (نارنجی)',urdu:'نارنجی',romanUrdu:'O'},
    {char:'U',upper:'U',lower:'u',name:'U',pronunciation:'oo-round',sound_hint:"یو — ہونٹ گول کرو اور 'ی' بولو — اردو میں یہ آواز نہیں، مشق چاہیے",example:'lune (loon)',meaning:'Chaand (چاند)',urdu:'چاند',romanUrdu:'U'},
    {char:'Y',upper:'Y',lower:'y',name:'I grec',pronunciation:'ee-grek',sound_hint:"ی — فرانسیسی میں 'Y' بھی 'ی' کی آواز دیتا ہے، جیسے 'gym' میں",example:'yaourt (ya-oor)',meaning:'Dahi (دہی)',urdu:'دہی',romanUrdu:'I grek'},
    // ── Batch 2: Bunyaadi Haroof — Consonants ──
    {char:'B',upper:'B',lower:'b',name:'Bé',pronunciation:'bay',sound_hint:"ب — ہونٹ ملا کر 'ب' بولو، جیسے اردو 'باپ' میں",example:'bonjour (bõzhoor)',meaning:'Assalamu alaikum (السلام علیکم)',urdu:'السلام علیکم',romanUrdu:'Bay'},
    {char:'C',upper:'C',lower:'c',name:'Cé',pronunciation:'say',sound_hint:"ک/س — 'a,o,u' سے پہلے 'ک' کی آواز، 'e,i,y' سے پہلے 'س' کی آواز",example:'chat (sha)',meaning:'Billi (بلی)',urdu:'بلی',romanUrdu:'Say'},
    {char:'D',upper:'D',lower:'d',name:'Dé',pronunciation:'day',sound_hint:"د — اردو 'دودھ' جیسی آواز — آخر میں اکثر خاموش ہوتی ہے",example:'demain (duh-mẽ)',meaning:'Kal (کل)',urdu:'کل',romanUrdu:'Day'},
    {char:'F',upper:'F',lower:'f',name:'Effe',pronunciation:'ef',sound_hint:"ف — اوپری دانت نیچے ہونٹ پر رکھ کر 'ف' بولو، جیسے 'فرانس' میں",example:'fromage (fromaj)',meaning:'Paneer (پنیر)',urdu:'پنیر',romanUrdu:'Ef'},
    {char:'G',upper:'G',lower:'g',name:'Gé',pronunciation:'zhay',sound_hint:"گ/ژ — 'a,o,u' سے پہلے 'گ' کی آواز، 'e,i' سے پہلے 'ژ' کی آواز (جیسے 'beige' میں)",example:'garçon (garsõ)',meaning:'Ladka (لڑکا)',urdu:'لڑکا',romanUrdu:'Zhay'},
    {char:'H',upper:'H',lower:'h',name:'Ache',pronunciation:'ash',sound_hint:"ہ — فرانسیسی میں 'ہ' خاموش ہوتی ہے، بولتے نہیں — جیسے 'heure' = 'eur'",example:'heure (ur)',meaning:'Ghanta (گھنٹہ)',urdu:'گھنٹہ',romanUrdu:'Ash'},
    {char:'J',upper:'J',lower:'j',name:'Ji',pronunciation:'zhee',sound_hint:"ژ — 'ش' جیسی آواز لیکن گہری — انگریزی 'measure' میں 's' جیسی",example:'jour (zhoor)',meaning:'Din (دن)',urdu:'دن',romanUrdu:'Zhee'},
    {char:'K',upper:'K',lower:'k',name:'Ka',pronunciation:'ka',sound_hint:"ک — اردو 'کتاب' جیسی 'ک' کی آواز — فرانسیسی میں کم استعمال",example:'kilo (keelo)',meaning:'Kilo (کلو)',urdu:'کلو',romanUrdu:'Ka'},
    {char:'L',upper:'L',lower:'l',name:'Elle',pronunciation:'el',sound_hint:"ل — زبان تالو پر رکھ کر 'ل' بولو، جیسے 'لال' میں",example:'lune (loon)',meaning:'Chaand (چاند)',urdu:'چاند',romanUrdu:'El'},
    {char:'M',upper:'M',lower:'m',name:'Emme',pronunciation:'em',sound_hint:"م — ہونٹ بند کر کے 'م' بولو، جیسے 'ماں' میں",example:'maison (mezõ)',meaning:'Ghar (گھر)',urdu:'گھر',romanUrdu:'Em'},
    {char:'N',upper:'N',lower:'n',name:'Enne',pronunciation:'en',sound_hint:"ن — اردو 'ناک' جیسی 'ن' کی آواز — آخر میں ناک کی آواز بن جاتی ہے",example:'nuit (nwee)',meaning:'Raat (رات)',urdu:'رات',romanUrdu:'En'},
    {char:'P',upper:'P',lower:'p',name:'Pé',pronunciation:'pay',sound_hint:"پ — ہونٹ ملا کر ہوا کے ساتھ 'پ' بولو — آخر میں اکثر خاموش",example:'père (pehr)',meaning:'Baap (باپ)',urdu:'باپ',romanUrdu:'Pay'},
    {char:'Q',upper:'Q',lower:'q',name:'Cu',pronunciation:'coo',sound_hint:"ک — ہمیشہ 'qu' کی صورت میں آتا ہے — 'ک' کی آواز دیتا ہے",example:'que (kuh)',meaning:'Ke/Jo (کہ)',urdu:'کہ',romanUrdu:'Coo'},
    {char:'R',upper:'R',lower:'r',name:'Erre',pronunciation:'er',sound_hint:"ر — حلق سے گہری 'ر' بولو، اردو 'ر' سے مختلف — گرگرانے جیسی آواز",example:'rouge (roozh)',meaning:'Surakh (سرخ)',urdu:'سرخ',romanUrdu:'Er'},
    {char:'S',upper:'S',lower:'s',name:'Esse',pronunciation:'es',sound_hint:"س — سانپ جیسی سیٹی کی آواز — دو حروف کے درمیان 'ز' بن جاتی ہے",example:'soleil (solay)',meaning:'Suraj (سورج)',urdu:'سورج',romanUrdu:'Es'},
    {char:'T',upper:'T',lower:'t',name:'Té',pronunciation:'tay',sound_hint:"ت — زبان دانتوں کے پیچھے رکھ کر 'ت' بولو — آخر میں اکثر خاموش",example:'table (tabl)',meaning:'Mez (میز)',urdu:'میز',romanUrdu:'Tay'},
    {char:'V',upper:'V',lower:'v',name:'Vé',pronunciation:'vay',sound_hint:"و/ف — اوپری دانت نیچے ہونٹ پر رکھ کر 'و' بولو، جیسے 'ville' میں",example:'ville (veel)',meaning:'Shehar (شہر)',urdu:'شہر',romanUrdu:'Vay'},
    {char:'W',upper:'W',lower:'w',name:'Double-vé',pronunciation:'doobl-vay',sound_hint:"و — فرانسیسی میں عموماً 'و' کی آواز، غیر ملکی الفاظ میں",example:'wagon (vagõ)',meaning:'Dabbe (ڈبے)',urdu:'ڈبے',romanUrdu:'Doobl-vay'},
    {char:'X',upper:'X',lower:'x',name:'Ixe',pronunciation:'eeks',sound_hint:"کس/گز — 'ks' یا 'gz' کی آواز، جیسے 'taxi = taksi'",example:'taxi (taksi)',meaning:'Taksi (ٹیکسی)',urdu:'ٹیکسی',romanUrdu:'Eeks'},
    {char:'Z',upper:'Z',lower:'z',name:'Zède',pronunciation:'zed',sound_hint:"ز — مچھر جیسی گنگناہٹ، اردو 'زمین' جیسی آواز",example:'zéro (zero)',meaning:'Sifar (صفر)',urdu:'صفر',romanUrdu:'Zed'},
    // ── Batch 3: Accented Vowels — Special French Sounds ──
    {char:'À',upper:'À',lower:'à',name:'A accent grave',pronunciation:'ah',sound_hint:"آ — لمبی 'آ' کی آواز، معنی بدلنے کے لیے استعمال ہوتی ہے",example:'là (la)',meaning:'Wahaan (وہاں)',urdu:'وہاں',romanUrdu:'A'},
    {char:'Â',upper:'Â',lower:'â',name:'A accent circonflexe',pronunciation:'ah',sound_hint:"آ — لمبی 'آ' کی آواز، 'circonflex' پرانے 's' کا نشان",example:'château (shato)',meaning:'Mehel (محل)',urdu:'محل',romanUrdu:'A'},
    {char:'Æ',upper:'Æ',lower:'æ',name:'AE ligature',pronunciation:'ay',sound_hint:"اے — 'A' اور 'E' کا ملاپ — صاف 'اے' کی آواز، لاطینی الفاظ میں",example:'curriculum vitae',meaning:'Zindagi ka khulasa (زندگی کا خلاصہ)',urdu:'زندگی کا خلاصہ',romanUrdu:'AE'},
    {char:'É',upper:'É',lower:'é',name:'E accent aigu',pronunciation:'ay',sound_hint:"اے — لمبی صاف 'اے' کی آواز، جیسے اردو 'میں' کا 'ے'",example:'été (aytay)',meaning:'Garmi (گرمی)',urdu:'گرمی',romanUrdu:'Ay'},
    {char:'È',upper:'È',lower:'è',name:'E accent grave',pronunciation:'eh',sound_hint:"ے — کھلی 'اے' کی آواز، جیسے انگریزی 'bed' میں",example:'père (pehr)',meaning:'Baap (باپ)',urdu:'باپ',romanUrdu:'Eh'},
    {char:'Ê',upper:'Ê',lower:'ê',name:'E accent circonflexe',pronunciation:'eh',sound_hint:"ے — کھلی 'اے' کی آواز، تھوڑی لمبی — جیسے 'tête' میں",example:'fête (feht)',meaning:'Tyohaar (تیوہار)',urdu:'تیوہار',romanUrdu:'Eh'},
    {char:'Ë',upper:'Ë',lower:'ë',name:'E tréma',pronunciation:'eh',sound_hint:"ے — 'tréma' بتاتا ہے کہ یہ E الگ سے بولی جائے گی — جیسے 'Noël' میں 'e' الگ",example:'Noël (no-el)',meaning:'Christmas (کرسمس)',urdu:'کرسمس',romanUrdu:'Eh'},
    {char:'Î',upper:'Î',lower:'î',name:'I accent circonflexe',pronunciation:'ee',sound_hint:"ی — لمبی 'ی' کی آواز — circonflex پرانے 's' کا نشان ہے",example:'île (eel)',meaning:'Jazeera (جزیرہ)',urdu:'جزیرہ',romanUrdu:'Ee'},
    {char:'Ï',upper:'Ï',lower:'ï',name:'I tréma',pronunciation:'ee',sound_hint:"ی — 'tréma' بتاتا ہے کہ یہ I الگ سے بولی جائے — جیسے 'naïf' میں 'a' اور 'i' الگ الگ",example:'naïf (na-eef)',meaning:'Masoom (معصوم)',urdu:'معصوم',romanUrdu:'Ee'},
    {char:'Ô',upper:'Ô',lower:'ô',name:'O accent circonflexe',pronunciation:'oh',sound_hint:"او — لمبی گول 'او' کی آواز، جیسے 'tôt' میں",example:'tôt (toh)',meaning:'Jaldi (جلدی)',urdu:'جلدی',romanUrdu:'Oh'},
    {char:'Œ',upper:'Œ',lower:'œ',name:'OE ligature',pronunciation:'eu',sound_hint:"اؤ — ہونٹ گول کرو 'او' کے لیے لیکن 'ے' بولو — مشکل آواز، مشق چاہیے",example:'cœur (kur)',meaning:'Dil (دل)',urdu:'دل',romanUrdu:'Eu'},
    {char:'Ù',upper:'Ù',lower:'ù',name:'U accent grave',pronunciation:'oo-round',sound_hint:"یو — ہونٹ گول کرو اور 'ی' بولو — 'où' میں 'کہاں' کے معنی",example:'où (oo)',meaning:'Kahan (کہاں)',urdu:'کہاں',romanUrdu:'U'},
    {char:'Û',upper:'Û',lower:'û',name:'U accent circonflexe',pronunciation:'oo-round',sound_hint:"یو — گول ہونٹوں سے 'ی' بولو — circonflex پرانی ہجے کا نشان",example:'flûte (floot)',meaning:'Baansuri (بانسری)',urdu:'بانسری',romanUrdu:'U'},
    {char:'Ü',upper:'Ü',lower:'ü',name:'U tréma',pronunciation:'oo-round',sound_hint:"یو — 'tréma' بتاتا ہے کہ یہ U الگ سے بولی جائے، جیسے 'Noël' طرز پر",example:'capharnaüm (kafarna-um)',meaning:'Afra Tafri (افراتفری)',urdu:'افراتفری',romanUrdu:'U'},
    {char:'Ÿ',upper:'Ÿ',lower:'ÿ',name:'Y tréma',pronunciation:'ee',sound_hint:"ی — نادر حرف — 'tréma' کے ساتھ — 'ی' کی آواز — صرف چند الفاظ میں",example:'L\'Haÿ-les-Roses',meaning:'Paris ka ek ilaaqa (پیرس کا ایک علاقہ)',urdu:'پیرس کا ایک علاقہ',romanUrdu:'Ee'},
    // ── Batch 4: Special Consonant ──
    {char:'Ç',upper:'Ç',lower:'ç',name:'C cédille',pronunciation:'say',sound_hint:"س — 'ç' ہمیشہ 'س' کی آواز دیتا ہے، جیسے 'garçon = garsõ' — c کے نیچے ذیل",example:'garçon (garsõ)',meaning:'Ladka (لڑکا)',urdu:'لڑکا',romanUrdu:'Say'}
  ],
  de: [
    // ── Batch 1: Vowels — Bunyaadi haroof ──
    {char:'A',upper:'A',lower:'a',name:'A',pronunciation:'ah',sound_hint:'آ — سیدھا اردو الف جیسا، جیسے "آم" میں',example:'Apfel (apfel)',meaning:'Seb (سیب)',urdu:'سیب',romanUrdu:'A'},
    {char:'E',upper:'E',lower:'e',name:'E',pronunciation:'ay',sound_hint:'اے — اردو "ے" جیسا، جیسے "ایک" میں',example:'Essen (essen)',meaning:'Khaana (کھانا)',urdu:'کھانا',romanUrdu:'E'},
    {char:'I',upper:'I',lower:'i',name:'I',pronunciation:'ee',sound_hint:'ای — لمبی "ای" کی آواز، جیسے "ایمان" میں',example:'Igel (eegel)',meaning:'Khar pust (خارپشت)',urdu:'خارپشت',romanUrdu:'I'},
    {char:'O',upper:'O',lower:'o',name:'O',pronunciation:'oh',sound_hint:'او — گول "او" کی آواز، جیسے "اور" میں',example:'Ohr (or)',meaning:'Kaan (کان)',urdu:'کان',romanUrdu:'O'},
    {char:'U',upper:'U',lower:'u',name:'U',pronunciation:'oo',sound_hint:'اُو — لمبی "اُو" کی آواز، جیسے "اوپر" میں',example:'Uhr (oor)',meaning:'Ghadi (گھڑی)',urdu:'گھڑی',romanUrdu:'U'},
    // ── Batch 2: Consonants ──
    {char:'B',upper:'B',lower:'b',name:'Be',pronunciation:'bay',sound_hint:'ب — اردو "ب" جیسا، ہونٹ بند کر کے بولو',example:'Buch (bookh)',meaning:'Kitaab (کتاب)',urdu:'کتاب',romanUrdu:'Bay'},
    {char:'C',upper:'C',lower:'c',name:'Ce',pronunciation:'tsay',sound_hint:'ک/ٹس — "ca/co/cu" میں "ک" اور "ce/ci" میں "ٹس" کی آواز',example:'Computer (kompyooter)',meaning:'Computer (کمپیوٹر)',urdu:'کمپیوٹر',romanUrdu:'Tsay'},
    {char:'D',upper:'D',lower:'d',name:'De',pronunciation:'day',sound_hint:'د — اردو "د" جیسا، زبان دانتوں کے پیچھے',example:'Danke (danke)',meaning:'Shukriya (شکریہ)',urdu:'شکریہ',romanUrdu:'Day'},
    {char:'F',upper:'F',lower:'f',name:'Ef',pronunciation:'ef',sound_hint:'ف — اوپر کے دانت نچلے ہونٹ پر رکھ کر بولو',example:'Freund (froynd)',meaning:'Dost (دوست)',urdu:'دوست',romanUrdu:'Ef'},
    {char:'G',upper:'G',lower:'g',name:'Ge',pronunciation:'gay',sound_hint:'گ — اردو "گ" جیسا، حلق سے بولو',example:'Guten (gooten)',meaning:'Acha (اچھا)',urdu:'اچھا',romanUrdu:'Gay'},
    {char:'H',upper:'H',lower:'h',name:'Ha',pronunciation:'ha',sound_hint:'ہ — سیدھا اردو "ہ" جیسا — صرف شروع میں بولی جاتی ہے',example:'Haus (haus)',meaning:'Ghar (گھر)',urdu:'گھر',romanUrdu:'Ha'},
    {char:'J',upper:'J',lower:'j',name:'Jot',pronunciation:'yot',sound_hint:'ی — جرمن میں "J" ہمیشہ "ی" کی آواز — jetzt = یتست',example:'Ja (ya)',meaning:'Haan (ہاں)',urdu:'ہاں',romanUrdu:'Yot'},
    {char:'K',upper:'K',lower:'k',name:'Ka',pronunciation:'ka',sound_hint:'ک — اردو "ک" جیسا، بالکل سیدھا',example:'Kinder (kinder)',meaning:'Bachay (بچے)',urdu:'بچے',romanUrdu:'Ka'},
    {char:'L',upper:'L',lower:'l',name:'El',pronunciation:'el',sound_hint:'ل — اردو "ل" جیسا، زبان اوپر لگا کر بولو',example:'Liebe (leebe)',meaning:'Mohabbat (محبت)',urdu:'محبت',romanUrdu:'El'},
    {char:'M',upper:'M',lower:'m',name:'Em',pronunciation:'em',sound_hint:'م — اردو "م" جیسا، ہونٹ بند کر کے بولو',example:'Mutter (mootter)',meaning:'Ammi (امی)',urdu:'امی',romanUrdu:'Em'},
    {char:'N',upper:'N',lower:'n',name:'En',pronunciation:'en',sound_hint:'ن — اردو "ن" جیسا، زبان اوپر لگا کر بولو',example:'Nacht (nakht)',meaning:'Raat (رات)',urdu:'رات',romanUrdu:'En'},
    {char:'P',upper:'P',lower:'p',name:'Pe',pronunciation:'pay',sound_hint:'پ — اردو "پ" جیسا، ہونٹ بند سے ہوا کے ساتھ',example:'Papa (papa)',meaning:'Abbu (ابو)',urdu:'ابو',romanUrdu:'Pay'},
    {char:'Q',upper:'Q',lower:'q',name:'Qu',pronunciation:'koo',sound_hint:'کو — جرمن میں "qu" ہمیشہ "کو" کی آواز',example:'Quelle (kvelle)',meaning:'Zariya (ذریعہ)',urdu:'ذریعہ',romanUrdu:'Koo'},
    {char:'R',upper:'R',lower:'r',name:'Er',pronunciation:'er',sound_hint:'ر — حلق سے تھوڑی گڑگڑاہٹ کے ساتھ "ر" — جیسے غرارہ کرتے وقت',example:'Rot (rot)',meaning:'Laal (لال)',urdu:'لال',romanUrdu:'Er'},
    {char:'S',upper:'S',lower:'s',name:'Es',pronunciation:'es',sound_hint:'ز/س — لفظ کے شروع میں vowel سے پہلے "ز" کی آواز — Sonne = زونے',example:'Sonne (zonne)',meaning:'Suraj (سورج)',urdu:'سورج',romanUrdu:'Es'},
    {char:'T',upper:'T',lower:'t',name:'Te',pronunciation:'tay',sound_hint:'ت — اردو "ت" جیسا، زبان دانتوں کے پیچھے',example:'Tag (takh)',meaning:'Din (دن)',urdu:'دن',romanUrdu:'Tay'},
    {char:'V',upper:'V',lower:'v',name:'Vau',pronunciation:'fow',sound_hint:'ف — جرمن میں "V" انگریزی "F" جیسی آواز — Vater = فاتر',example:'Vater (fater)',meaning:'Baap (باپ)',urdu:'باپ',romanUrdu:'Fow'},
    {char:'W',upper:'W',lower:'w',name:'We',pronunciation:'vay',sound_hint:'و/ف — جرمن میں "W" انگریزی "V" جیسی آواز — Wasser = واسر',example:'Wasser (vasser)',meaning:'Paani (پانی)',urdu:'پانی',romanUrdu:'Vay'},
    {char:'X',upper:'X',lower:'x',name:'Ix',pronunciation:'iks',sound_hint:'کس — "ks" کی آواز — جیسے "iks"',example:'Xylophon (ksüloofon)',meaning:'Xylophone (زائلوفون)',urdu:'زائلوفون',romanUrdu:'Iks'},
    {char:'Y',upper:'Y',lower:'y',name:'Ypsilon',pronunciation:'upsilon',sound_hint:'اُی — عموماً "اُی" یا "یو" کی آواز — غیر ملکی الفاظ میں',example:'Yoga (yoga)',meaning:'Yoga (یوگا)',urdu:'یوگا',romanUrdu:'Upsilon'},
    {char:'Z',upper:'Z',lower:'z',name:'Zett',pronunciation:'tset',sound_hint:'ٹس — جرمن میں "Z" ہمیشہ "ٹس" کی آواز — Zeit = ٹسائت',example:'Zug (tsoog)',meaning:'Train (ٹرین)',urdu:'ٹرین',romanUrdu:'Tset'},
    // ── Batch 3: Umlaut vowels ──
    {char:'Ä',upper:'Ä',lower:'ä',name:'A-Umlaut',pronunciation:'eh',sound_hint:'ایے — "ا" کا umlaut — "egg" جیسی آواز — منہ تھوڑا کھول کر بولو',example:'Ärger (erger)',meaning:'Gussa (غصہ)',urdu:'غصہ',romanUrdu:'Eh'},
    {char:'Ö',upper:'Ö',lower:'ö',name:'O-Umlaut',pronunciation:'uh',sound_hint:'اوے — "O" کا umlaut — ہونٹ گول کر کے "ے" بولو',example:'Öl (eul)',meaning:'Tel (تیل)',urdu:'تیل',romanUrdu:'Uh'},
    {char:'Ü',upper:'Ü',lower:'ü',name:'U-Umlaut',pronunciation:'ue',sound_hint:'اُویے — "U" کا umlaut — ہونٹ گول کر کے "ای" بولو',example:'Über (ueber)',meaning:'Oopar (اوپر)',urdu:'اوپر',romanUrdu:'Ue'},
    // ── Batch 4: Special ──
    {char:'ß',upper:'ß',lower:'ß',name:'Eszett',pronunciation:'ss',sound_hint:'س — دوہری "ss" کی آواز — Straße = شٹراسے — صرف lowercase ہوتی ہے',example:'Straße (shtrasse)',meaning:'Sadak (سڑک)',urdu:'سڑک',romanUrdu:'Ss'}
  ],
  es: [
    // ── Batch 1: Vowels — Bunyaadi haroof ──
    {char:'A',upper:'A',lower:'a',name:'A',pronunciation:'ah',sound_hint:'آ — سیدھا اردو الف جیسا، جیسے "آم" میں',example:'árbol (arbol)',meaning:'Darakht (درخت)',urdu:'درخت',romanUrdu:'A'},
    {char:'E',upper:'E',lower:'e',name:'E',pronunciation:'ay',sound_hint:'اے — اردو "ے" جیسا، جیسے "ایک" میں',example:'español (espanyol)',meaning:'Spanish zubaan (ہسپانوی)',urdu:'ہسپانوی',romanUrdu:'E'},
    {char:'I',upper:'I',lower:'i',name:'I',pronunciation:'ee',sound_hint:'ای — لمبی "ای" کی آواز، جیسے "ایمان" میں',example:'isla (eesla)',meaning:'Jazeera (جزیرہ)',urdu:'جزیرہ',romanUrdu:'I'},
    {char:'O',upper:'O',lower:'o',name:'O',pronunciation:'oh',sound_hint:'او — گول "او" کی آواز، جیسے "اور" میں',example:'ojo (oho)',meaning:'Aankh (آنکھ)',urdu:'آنکھ',romanUrdu:'O'},
    {char:'U',upper:'U',lower:'u',name:'U',pronunciation:'oo',sound_hint:'اُو — لمبی "اُو" کی آواز، جیسے "اوپر" میں',example:'uno (oono)',meaning:'Ek (ایک)',urdu:'ایک',romanUrdu:'U'},
    // ── Batch 2: Consonants ──
    {char:'B',upper:'B',lower:'b',name:'Be',pronunciation:'bay',sound_hint:'ب — اردو "ب" جیسا، ہونٹ بند کر کے بولو',example:'bueno (bweno)',meaning:'Acha (اچھا)',urdu:'اچھا',romanUrdu:'Bay'},
    {char:'C',upper:'C',lower:'c',name:'Ce',pronunciation:'say',sound_hint:'ک/س — "ca/co/cu" میں "ک" اور "ce/ci" میں "س" کی آواز',example:'casa (kasa)',meaning:'Ghar (گھر)',urdu:'گھر',romanUrdu:'Say'},
    {char:'D',upper:'D',lower:'d',name:'De',pronunciation:'day',sound_hint:'د — اردو "د" جیسا، زبان دانتوں کے پیچھے',example:'día (dee-a)',meaning:'Din (دن)',urdu:'دن',romanUrdu:'Day'},
    {char:'F',upper:'F',lower:'f',name:'Efe',pronunciation:'efay',sound_hint:'ف — اوپر کے دانت نچلے ہونٹ پر رکھ کر بولو',example:'familia (fameelya)',meaning:'Khandan (خاندان)',urdu:'خاندان',romanUrdu:'Efay'},
    {char:'G',upper:'G',lower:'g',name:'Ge',pronunciation:'hay',sound_hint:'گ/خ — "ga/go/gu" میں "گ" اور "ge/gi" میں "خ" کی آواز',example:'gato (gato)',meaning:'Billi (بلی)',urdu:'بلی',romanUrdu:'Hay'},
    {char:'H',upper:'H',lower:'h',name:'Hache',pronunciation:'achay',sound_hint:'ہ — ہسپانوی میں "ہ" بالکل خاموش ہوتی ہے — جیسے "hola = ola"',example:'hola (ola)',meaning:'Salam (سلام)',urdu:'سلام',romanUrdu:'Achay'},
    {char:'J',upper:'J',lower:'j',name:'Jota',pronunciation:'hota',sound_hint:'خ — حلق سے "خ" کی آواز، جیسے اردو "خدا" میں — jota = khota',example:'jardín (khardeen)',meaning:'Bagicha (باغیچہ)',urdu:'باغیچہ',romanUrdu:'Hota'},
    {char:'K',upper:'K',lower:'k',name:'Ka',pronunciation:'ka',sound_hint:'ک — اردو "ک" جیسا، صرف غیر ملکی الفاظ میں',example:'kilo (keelo)',meaning:'Kilo (کلو)',urdu:'کلو',romanUrdu:'Ka'},
    {char:'L',upper:'L',lower:'l',name:'Ele',pronunciation:'elay',sound_hint:'ل — اردو "ل" جیسا، زبان اوپر لگا کر بولو',example:'luna (loona)',meaning:'Chaand (چاند)',urdu:'چاند',romanUrdu:'Elay'},
    {char:'M',upper:'M',lower:'m',name:'Eme',pronunciation:'emay',sound_hint:'م — اردو "م" جیسا، ہونٹ بند کر کے بولو',example:'madre (madre)',meaning:'Ammi (امی)',urdu:'امی',romanUrdu:'Emay'},
    {char:'N',upper:'N',lower:'n',name:'Ene',pronunciation:'enay',sound_hint:'ن — اردو "ن" جیسا، زبان اوپر لگا کر بولو',example:'noche (nochay)',meaning:'Raat (رات)',urdu:'رات',romanUrdu:'Enay'},
    {char:'P',upper:'P',lower:'p',name:'Pe',pronunciation:'pay',sound_hint:'پ — اردو "پ" جیسا، ہونٹ بند سے ہوا کے ساتھ',example:'padre (padray)',meaning:'Abbu (ابو)',urdu:'ابو',romanUrdu:'Pay'},
    {char:'Q',upper:'Q',lower:'q',name:'Cu',pronunciation:'koo',sound_hint:'ک — "qu" ہمیشہ "ک" کی آواز — "u" خاموش ہوتی ہے',example:'queso (keso)',meaning:'Paneer (پنیر)',urdu:'پنیر',romanUrdu:'Koo'},
    {char:'R',upper:'R',lower:'r',name:'Erre',pronunciation:'erray',sound_hint:'ر — اردو "ر" جیسی آواز — لفظ کے شروع میں لڑھکتی "ر"',example:'rojo (roho)',meaning:'Laal rang (لال رنگ)',urdu:'لال',romanUrdu:'Erray'},
    {char:'S',upper:'S',lower:'s',name:'Ese',pronunciation:'esay',sound_hint:'س — اردو "س" جیسا، ہسپانوی "s" ہمیشہ "س" ہے',example:'sol (sol)',meaning:'Suraj (سورج)',urdu:'سورج',romanUrdu:'Esay'},
    {char:'T',upper:'T',lower:'t',name:'Te',pronunciation:'tay',sound_hint:'ت — اردو "ت" جیسا، زبان دانتوں کے پیچھے',example:'tarde (tarday)',meaning:'Dopahar/Shaam (دوپہر)',urdu:'دوپہر',romanUrdu:'Tay'},
    {char:'V',upper:'V',lower:'v',name:'Uve',pronunciation:'oobay',sound_hint:'ب/و — ہسپانوی میں "V" اور "B" ایک جیسی آواز دیتے ہیں',example:'vino (beeno)',meaning:'Angoor ka Sharaab (انگور)',urdu:'انگور',romanUrdu:'Oobay'},
    {char:'W',upper:'W',lower:'w',name:'Doble uve',pronunciation:'doblay oobay',sound_hint:'و — غیر ملکی الفاظ میں — اصل ہسپانوی میں نہیں ہوتا',example:'web (web)',meaning:'Website (ویب سائٹ)',urdu:'ویب سائٹ',romanUrdu:'Doblay Oobay'},
    {char:'X',upper:'X',lower:'x',name:'Equis',pronunciation:'ekees',sound_hint:'س/کس/خ — مختلف الفاظ میں مختلف آواز',example:'exacto (eksacto)',meaning:'Bilkul theek (بالکل ٹھیک)',urdu:'بالکل',romanUrdu:'Ekees'},
    {char:'Y',upper:'Y',lower:'y',name:'Ye',pronunciation:'yay',sound_hint:'ی — اردو "ی" جیسا، جیسے "yo = یو"',example:'yo (yo)',meaning:'Main (میں)',urdu:'میں',romanUrdu:'Yay'},
    {char:'Z',upper:'Z',lower:'z',name:'Zeta',pronunciation:'sayta',sound_hint:'س — ہسپانوی میں "Z" کی آواز "س" ہے — جیسے "zapato = sapato"',example:'zapato (sapato)',meaning:'Joota (جوتا)',urdu:'جوتا',romanUrdu:'Sayta'},
    // ── Batch 3: Special Spanish letter ──
    {char:'Ñ',upper:'Ñ',lower:'ñ',name:'Eñe',pronunciation:'enyay',sound_hint:'نی — ناک سے نکلنے والی "ن+ی" کی ملی آواز — جیسے "mañana = manyaana"',example:'niño (neenyo)',meaning:'Ladka (لڑکا)',urdu:'لڑکا',romanUrdu:'Enyay'},
    // ── Batch 4: Accented vowels — Stress markers ──
    {char:'Á',upper:'Á',lower:'á',name:'A con tilde',pronunciation:'ah',sound_hint:'آ — یہ وہی "A" ہے لیکن اس حرف پر زور دینا ہے',example:'árbol (arbol)',meaning:'Darakht (درخت)',urdu:'درخت',romanUrdu:'A zor wala'},
    {char:'É',upper:'É',lower:'é',name:'E con tilde',pronunciation:'ay',sound_hint:'اے — یہ وہی "E" ہے لیکن اس حرف پر زور دینا ہے',example:'café (kafay)',meaning:'Qahwa ghar (قہوہ خانہ)',urdu:'قہوہ',romanUrdu:'E zor wala'},
    {char:'Í',upper:'Í',lower:'í',name:'I con tilde',pronunciation:'ee',sound_hint:'ای — یہ وہی "I" ہے لیکن اس حرف پر زور دینا ہے',example:'sí (see)',meaning:'Haan (ہاں)',urdu:'ہاں',romanUrdu:'I zor wala'},
    {char:'Ó',upper:'Ó',lower:'ó',name:'O con tilde',pronunciation:'oh',sound_hint:'او — یہ وہی "O" ہے لیکن اس حرف پر زور دینا ہے',example:'sólo (solo)',meaning:'Akela (اکیلا)',urdu:'اکیلا',romanUrdu:'O zor wala'},
    {char:'Ú',upper:'Ú',lower:'ú',name:'U con tilde',pronunciation:'oo',sound_hint:'اُو — یہ وہی "U" ہے لیکن اس حرف پر زور دینا ہے',example:'tú (too)',meaning:'Tum (تم)',urdu:'تم',romanUrdu:'U zor wala'},
    {char:'Ü',upper:'Ü',lower:'ü',name:'U con diéresis',pronunciation:'oo',sound_hint:'اُو — "güe/güi" میں "u" کو پڑھا جاتا ہے، ورنہ خاموش ہوتا',example:'pingüino (peengweeno)',meaning:'Penguin (پینگوئن)',urdu:'پینگوئن',romanUrdu:'U dots wala'}
  ],
  ko: [
    // ── Batch 1: Basic Consonants ──
    {char:'ㄱ',name:'Giyeok',pronunciation:'g',sound_hint:"گ کی آواز — جیسے 'گھر' میں",example:'가방',meaning:'Baig (بیگ)',urdu:'بیگ',romanUrdu:'Giyeok'},
    {char:'ㄴ',name:'Nieun',pronunciation:'n',sound_hint:"ن کی آواز — جیسے 'ناک' میں",example:'나무',meaning:'Darakht (درخت)',urdu:'درخت',romanUrdu:'Nieun'},
    {char:'ㄷ',name:'Digeut',pronunciation:'d',sound_hint:"د کی آواز — جیسے 'دل' میں",example:'다리',meaning:'Taang (ٹانگ)',urdu:'ٹانگ',romanUrdu:'Digeut'},
    {char:'ㄹ',name:'Rieul',pronunciation:'r/l',sound_hint:"ر اور ل کے درمیان آواز",example:'라면',meaning:'Ramen (نوڈلز)',urdu:'نوڈلز',romanUrdu:'Rieul'},
    {char:'ㅁ',name:'Mieum',pronunciation:'m',sound_hint:"م کی آواز — جیسے 'ماں' میں",example:'마음',meaning:'Dil (دل)',urdu:'دل',romanUrdu:'Mieum'},
    {char:'ㅂ',name:'Bieup',pronunciation:'b',sound_hint:"ب کی آواز — جیسے 'بلی' میں",example:'바나나',meaning:'Kela (کیلا)',urdu:'کیلا',romanUrdu:'Bieup'},
    // ── Batch 2: Basic Consonants ──
    {char:'ㅅ',name:'Siot',pronunciation:'s',sound_hint:"س کی آواز — جیسے 'سیب' میں",example:'사랑',meaning:'Mohabbat (محبت)',urdu:'محبت',romanUrdu:'Siot'},
    {char:'ㅇ',name:'Ieung',pronunciation:'ng (silent start)',sound_hint:"شروع میں خاموش، آخر میں 'ن' (ng)",example:'아이',meaning:'Bachcha (بچہ)',urdu:'بچہ',romanUrdu:'Ieung'},
    {char:'ㅈ',name:'Jieut',pronunciation:'j',sound_hint:"ج کی آواز — جیسے 'جنگل' میں",example:'자동차',meaning:'Gaari (گاڑی)',urdu:'گاڑی',romanUrdu:'Jieut'},
    {char:'ㅊ',name:'Chieut',pronunciation:'ch',sound_hint:"چ کی آواز — جیسے 'چاند' میں",example:'차',meaning:'Chai ya Gaari (چائے/گاڑی)',urdu:'چائے',romanUrdu:'Chieut'},
    {char:'ㅋ',name:'Kieuk',pronunciation:'k',sound_hint:"ک کی آواز (zor se) — کھنچی ہوئی",example:'코',meaning:'Naak (ناک)',urdu:'ناک',romanUrdu:'Kieuk'},
    {char:'ㅌ',name:'Tieut',pronunciation:'t',sound_hint:"ٹ کی آواز (zor se) — کھینچ کے بولو",example:'토끼',meaning:'Khargosh (خرگوش)',urdu:'خرگوش',romanUrdu:'Tieut'},
    // ── Batch 3: Remaining + Double Consonants ──
    {char:'ㅍ',name:'Pieup',pronunciation:'p',sound_hint:"پ کی آواز (zor se) — ہوا نکالو",example:'파란색',meaning:'Neela rang (نیلا رنگ)',urdu:'نیلا',romanUrdu:'Pieup'},
    {char:'ㅎ',name:'Hieut',pronunciation:'h',sound_hint:"ہ کی آواز — جیسے 'ہوا' میں",example:'하늘',meaning:'Aasman (آسمان)',urdu:'آسمان',romanUrdu:'Hieut'},
    {char:'ㄲ',name:'Ssang Giyeok',pronunciation:'kk',sound_hint:"گ گ — دوہری سخت آواز",example:'끝',meaning:'Khatam (ختم)',urdu:'ختم',romanUrdu:'Ssang Giyeok'},
    {char:'ㄸ',name:'Ssang Digeut',pronunciation:'tt',sound_hint:"د د — دوہری سخت آواز",example:'땅',meaning:'Zameen (زمین)',urdu:'زمین',romanUrdu:'Ssang Digeut'},
    {char:'ㅃ',name:'Ssang Bieup',pronunciation:'pp',sound_hint:"ب ب — دوہری سخت آواز",example:'빵',meaning:'Roti/Bread (روٹی)',urdu:'روٹی',romanUrdu:'Ssang Bieup'},
    {char:'ㅆ',name:'Ssang Siot',pronunciation:'ss',sound_hint:"س س — دوہری سخت آواز",example:'씨앗',meaning:'Beej (بیج)',urdu:'بیج',romanUrdu:'Ssang Siot'},
    // ── Batch 4: Double Consonant + Basic Vowels ──
    {char:'ㅉ',name:'Ssang Jieut',pronunciation:'jj',sound_hint:"ج ج — دوہری سخت آواز",example:'짜다',meaning:'Khara (کھارا)',urdu:'کھارا',romanUrdu:'Ssang Jieut'},
    {char:'ㅏ',name:'A',pronunciation:'a',sound_hint:"آ کی آواز — جیسے 'آم' میں",example:'아버지',meaning:'Baap (باپ)',urdu:'باپ',romanUrdu:'A'},
    {char:'ㅑ',name:'Ya',pronunciation:'ya',sound_hint:"یا کی آواز — جیسے 'یار' میں",example:'야채',meaning:'Sabzi (سبزی)',urdu:'سبزی',romanUrdu:'Ya'},
    {char:'ㅓ',name:'Eo',pronunciation:'eo',sound_hint:"اَو — منہ کھلا رکھ کر 'او'",example:'어머니',meaning:'Ammi (امی)',urdu:'امی',romanUrdu:'Eo'},
    {char:'ㅕ',name:'Yeo',pronunciation:'yeo',sound_hint:"یَو — 'ی' پھر 'او'",example:'여동생',meaning:'Chhoti behan (چھوٹی بہن)',urdu:'چھوٹی بہن',romanUrdu:'Yeo'},
    {char:'ㅗ',name:'O',pronunciation:'o',sound_hint:"او کی آواز — ہونٹ گول کرو",example:'오리',meaning:'Batakh (بطخ)',urdu:'بطخ',romanUrdu:'O'},
    // ── Batch 5: Basic + Combined Vowels ──
    {char:'ㅛ',name:'Yo',pronunciation:'yo',sound_hint:"یو کی آواز — جیسے 'یورو' میں",example:'요리',meaning:'Khana pakana (کھانا پکانا)',urdu:'کھانا',romanUrdu:'Yo'},
    {char:'ㅜ',name:'U',pronunciation:'u',sound_hint:"اُو کی آواز — ہونٹ آگے کرو",example:'우유',meaning:'Doodh (دودھ)',urdu:'دودھ',romanUrdu:'U'},
    {char:'ㅠ',name:'Yu',pronunciation:'yu',sound_hint:"یو کی آواز — جیسے 'یوکے' میں",example:'유리',meaning:'Shesha (شیشہ)',urdu:'شیشہ',romanUrdu:'Yu'},
    {char:'ㅡ',name:'Eu',pronunciation:'eu',sound_hint:"اُ — منہ flat رکھ کر بولو",example:'그림',meaning:'Tasveer (تصویر)',urdu:'تصویر',romanUrdu:'Eu'},
    {char:'ㅣ',name:'I',pronunciation:'i',sound_hint:"ای کی آواز — جیسے 'ایک' میں",example:'이름',meaning:'Naam (نام)',urdu:'نام',romanUrdu:'I'},
    {char:'ㅐ',name:'Ae',pronunciation:'ae',sound_hint:"ایے — جیسے 'egg' میں انگریزی",example:'개',meaning:'Kutta (کتا)',urdu:'کتا',romanUrdu:'Ae'},
    // ── Batch 6: Combined Vowels ──
    {char:'ㅒ',name:'Yae',pronunciation:'yae',sound_hint:"یے — 'ی' پھر 'ایے'",example:'예쁘다',meaning:'Khubsurat (خوبصورت)',urdu:'خوبصورت',romanUrdu:'Yae'},
    {char:'ㅔ',name:'E',pronunciation:'e',sound_hint:"اے کی آواز — جیسے 'egg' میں",example:'에어컨',meaning:'AC (ایئرکنڈیشنر)',urdu:'ایئر کنڈیشنر',romanUrdu:'E'},
    {char:'ㅖ',name:'Ye',pronunciation:'ye',sound_hint:"یے کی آواز — جیسے 'yes'",example:'예',meaning:'Haan (ہاں)',urdu:'ہاں',romanUrdu:'Ye'},
    {char:'ㅘ',name:'Wa',pronunciation:'wa',sound_hint:"وا کی آواز — جیسے 'واہ'",example:'화가',meaning:'Musawwir (مصور)',urdu:'مصور',romanUrdu:'Wa'},
    {char:'ㅙ',name:'Wae',pronunciation:'wae',sound_hint:"وے — oo + ae milake bolo",example:'왜',meaning:'Kyun (کیوں)',urdu:'کیوں',romanUrdu:'Wae'},
    {char:'ㅚ',name:'Oe',pronunciation:'oe',sound_hint:"وے — oo + e milake bolo",example:'외국',meaning:'Pardesi mulk (پردیسی ملک)',urdu:'پردیسی',romanUrdu:'Oe'},
    // ── Batch 7: Combined Vowels (4 letters) ──
    {char:'ㅝ',name:'Wo',pronunciation:'wo',sound_hint:"وَو — u + eo milake bolo",example:'원숭이',meaning:'Bandar (بندر)',urdu:'بندر',romanUrdu:'Wo'},
    {char:'ㅞ',name:'We',pronunciation:'we',sound_hint:"وے — u + e milake bolo",example:'웨이터',meaning:'Waiter (ویٹر)',urdu:'ویٹر',romanUrdu:'We'},
    {char:'ㅟ',name:'Wi',pronunciation:'wi',sound_hint:"وی — u + i milake bolo",example:'위',meaning:'Upar (اوپر)',urdu:'اوپر',romanUrdu:'Wi'},
    {char:'ㅢ',name:'Ui',pronunciation:'ui',sound_hint:"اُای — eu + i milake bolo",example:'의사',meaning:'Doctor (ڈاکٹر)',urdu:'ڈاکٹر',romanUrdu:'Ui'}
  ],
  ie: [
    // ── Batch 1: Asaan — English jaise (A B C D E F G) ──
    {char:'A',upper:'A',lower:'a',name:'A',pronunciation:'ah',sound_hint:"آ — بالکل اردو 'الف' جیسی سیدھی آواز",example:'Abhainn (Owinn)',meaning:'Darya (دریا)',urdu:'دریا',romanUrdu:'Darya'},
    {char:'B',upper:'B',lower:'b',name:'B',pronunciation:'beh',sound_hint:"ب — ہونٹ ملا کر 'ب' بولو، جیسے اردو 'باپ' میں",example:'Bád (Bawd)',meaning:'Kishti (کشتی)',urdu:'کشتی',romanUrdu:'Kishti'},
    {char:'C',upper:'C',lower:'c',name:'C',pronunciation:'keh',sound_hint:"ک — آئرش میں C ہمیشہ 'ک' کی آواز دیتا ہے، کبھی 'س' نہیں",example:'Cat (Kot)',meaning:'Billi (بلی)',urdu:'بلی',romanUrdu:'Billi'},
    {char:'D',upper:'D',lower:'d',name:'D',pronunciation:'deh',sound_hint:"د — زبان دانتوں کے پیچھے رکھ کر 'د' بولو",example:'Deoch (Dyukh)',meaning:'Peena (پینا)',urdu:'پینا',romanUrdu:'Peena'},
    {char:'E',upper:'E',lower:'e',name:'E',pronunciation:'eh',sound_hint:"اے — منہ کھول کر 'اے' بولو، جیسے 'egg' میں",example:'Ean (An)',meaning:'Parinda (پرندہ)',urdu:'پرندہ',romanUrdu:'Parinda'},
    {char:'F',upper:'F',lower:'f',name:'F',pronunciation:'feh',sound_hint:"ف — اوپری دانت نیچے ہونٹ پر رکھ کر 'ف' بولو",example:'Fear (Far)',meaning:'Aadmi (آدمی)',urdu:'آدمی',romanUrdu:'Aadmi'},
    {char:'G',upper:'G',lower:'g',name:'G',pronunciation:'geh',sound_hint:"گ — اندر سے 'گ' نکالو، جیسے اردو 'گھر' میں",example:'Grian (Gree-an)',meaning:'Suraj (سورج)',urdu:'سورج',romanUrdu:'Suraj'},
    // ── Batch 2: Common (I L M N O P R S T U) ──
    {char:'I',upper:'I',lower:'i',name:'I',pronunciation:'ih',sound_hint:"اِ — چھوٹی 'اِ' کی آواز، جیسے 'it' میں",example:'Iníon (Inneen)',meaning:'Beti (بیٹی)',urdu:'بیٹی',romanUrdu:'Beti'},
    {char:'L',upper:'L',lower:'l',name:'L',pronunciation:'leh',sound_hint:"ل — زبان تالو پر رکھ کر 'ل' بولو، جیسے 'لال' میں",example:'Lámh (Lawv)',meaning:'Haath (ہاتھ)',urdu:'ہاتھ',romanUrdu:'Haath'},
    {char:'M',upper:'M',lower:'m',name:'M',pronunciation:'meh',sound_hint:"م — ہونٹ بند کر کے 'م' بولو، جیسے 'ماں' میں",example:'Máthair (Maw-her)',meaning:'Ammi (امی)',urdu:'امی',romanUrdu:'Ammi'},
    {char:'N',upper:'N',lower:'n',name:'N',pronunciation:'neh',sound_hint:"ن — اردو 'ناک' جیسی 'ن' کی آواز",example:'Nasc (Nask)',meaning:'Link / Rishta (رشتہ)',urdu:'رشتہ',romanUrdu:'Rishta'},
    {char:'O',upper:'O',lower:'o',name:'O',pronunciation:'oh',sound_hint:"او — گول ہونٹوں سے 'او' بولو، جیسے 'اوپر' میں",example:'Ól (Ole)',meaning:'Peena (پینا)',urdu:'پینا',romanUrdu:'Peena'},
    {char:'P',upper:'P',lower:'p',name:'P',pronunciation:'peh',sound_hint:"پ — ہونٹ ملا کر ہوا کے ساتھ 'پ' بولو",example:'Páirc (Pawrk)',meaning:'Park (پارک)',urdu:'پارک',romanUrdu:'Park'},
    {char:'R',upper:'R',lower:'r',name:'R',pronunciation:'reh',sound_hint:"ر — زبان کو ہلا کر 'ر' بولو، لڑھکتا اردو 'ر'",example:'Rún (Roon)',meaning:'Raaz (راز)',urdu:'راز',romanUrdu:'Raaz'},
    {char:'S',upper:'S',lower:'s',name:'S',pronunciation:'seh',sound_hint:"س — سانپ جیسی سیٹی کی آواز، اردو 'سیب' میں",example:'Solas (Sullus)',meaning:'Roshni (روشنی)',urdu:'روشنی',romanUrdu:'Roshni'},
    {char:'T',upper:'T',lower:'t',name:'T',pronunciation:'teh',sound_hint:"ت — زبان دانتوں کے پیچھے رکھ کر 'ت' بولو",example:'Teach (Chakh)',meaning:'Ghar (گھر)',urdu:'گھر',romanUrdu:'Ghar'},
    {char:'U',upper:'U',lower:'u',name:'U',pronunciation:'uh',sound_hint:"اُ — چھوٹی 'اُ' کی آواز، جیسے 'up' میں",example:'Uisce (Ishka)',meaning:'Paani (پانی)',urdu:'پانی',romanUrdu:'Paani'},
    // ── Batch 3: Séimhiú — Lenition (BH CH DH FH GH MH PH SH TH) ──
    {char:'BH',upper:'BH',lower:'bh',name:'BH (beatha)',pronunciation:'w/v',sound_hint:"و — 'بھ' نہیں بلکہ انگریزی 'w' یا 'v' جیسی آواز — جیسے اردو 'وقت' میں",example:'Bhean (Van)',meaning:'Aurat (عورت)',urdu:'عورت',romanUrdu:'Aurat'},
    {char:'CH',upper:'CH',lower:'ch',name:'CH (caol/leathan)',pronunciation:'kh',sound_hint:"خ — اردو 'خدا' جیسی 'خ' کی آواز — گلے کے پیچھے سے نکالو",example:'Cháil (Khawl)',meaning:'Mashoor hona (مشہور)',urdu:'مشہور',romanUrdu:'Mashoor'},
    {char:'DH',upper:'DH',lower:'dh',name:'DH (dath)',pronunciation:'gh/y',sound_hint:"غ — آواز دار 'غ' کی آواز، گلے سے — جیسے اردو 'غریب' میں",example:'Dhún (Ghoon)',meaning:'Band karna (بند کرنا)',urdu:'بند کرنا',romanUrdu:'Band karna'},
    {char:'FH',upper:'FH',lower:'fh',name:'FH (fada)',pronunciation:'(khamosh)',sound_hint:"خاموش — FH کوئی آواز نہیں دیتا! بالکل خاموش رہتا ہے — آئرش کا انوکھا اصول",example:'Fhear (Ar)',meaning:'Aadmi (آدمی)',urdu:'آدمی',romanUrdu:'Aadmi'},
    {char:'GH',upper:'GH',lower:'gh',name:'GH (guth)',pronunciation:'gh/y',sound_hint:"غ — آواز دار 'غ' کی آواز — جیسے DH، گلے سے نکالو",example:'Ghrian (Yree-an)',meaning:'Suraj (سورج)',urdu:'سورج',romanUrdu:'Suraj'},
    {char:'MH',upper:'MH',lower:'mh',name:'MH (maith)',pronunciation:'w/v',sound_hint:"و — BH جیسی آواز — 'مھ' نہیں بلکہ 'و' یا 'و' کی آواز، جیسے اردو 'واپس' میں",example:'Mhaith (Wah)',meaning:'Acha (اچھا)',urdu:'اچھا',romanUrdu:'Acha'},
    {char:'PH',upper:'PH',lower:'ph',name:'PH (poll)',pronunciation:'f',sound_hint:"ف — بالکل 'ف' کی آواز — PH مل کر 'فھ' نہیں 'ف' بولتے ہیں، جیسے 'phone' میں",example:'Phóg (Fogue)',meaning:'Bosa dena (بوسہ دینا)',urdu:'بوسہ دینا',romanUrdu:'Bosa dena'},
    {char:'SH',upper:'SH',lower:'sh',name:'SH (sí)',pronunciation:'h',sound_hint:"ہ — آئرش میں SH صرف 'ہ' کی آواز دیتا ہے — 'ش' نہیں! جیسے اردو 'ہوا' میں",example:'Shín (Heen)',meaning:'Khenchna (کھینچنا)',urdu:'کھینچنا',romanUrdu:'Khenchna'},
    {char:'TH',upper:'TH',lower:'th',name:'TH (tine)',pronunciation:'h',sound_hint:"ہ — آئرش میں TH بھی صرف 'ہ' کی آواز دیتا ہے — نہ 'تھ' نہ 'ذ'، جیسے 'ہاتھ' کا 'ہ'",example:'Tháinig (Hawnig)',meaning:'Aaya (آیا)',urdu:'آیا',romanUrdu:'Aaya'},
    // ── Batch 4: Síne Fada — Long vowels (Á É Í Ó Ú) ──
    {char:'Á',upper:'Á',lower:'á',name:'A fada',pronunciation:'aw',sound_hint:"آاا — لمبی 'آ' کی آواز — عام A سے لمبی، جیسے 'father' میں 'a'",example:'Lámh (Lawv)',meaning:'Haath (ہاتھ)',urdu:'ہاتھ',romanUrdu:'Haath'},
    {char:'É',upper:'É',lower:'é',name:'E fada',pronunciation:'ay',sound_hint:"ایے — لمبی 'ایے' کی آواز — جیسے انگریزی 'say' یا 'they' میں",example:'Féar (Fayr)',meaning:'Ghaas (گھاس)',urdu:'گھاس',romanUrdu:'Ghaas'},
    {char:'Í',upper:'Í',lower:'í',name:'I fada',pronunciation:'ee',sound_hint:"ایی — لمبی 'ایی' کی آواز — جیسے 'feet' میں 'ee'",example:'Síol (Sheel)',meaning:'Beej (بیج)',urdu:'بیج',romanUrdu:'Beej'},
    {char:'Ó',upper:'Ó',lower:'ó',name:'O fada',pronunciation:'oh',sound_hint:"اوو — لمبی 'او' کی آواز — جیسے 'go' یا 'so' میں",example:'Mór (More)',meaning:'Bara (بڑا)',urdu:'بڑا',romanUrdu:'Bara'},
    {char:'Ú',upper:'Ú',lower:'ú',name:'U fada',pronunciation:'oo',sound_hint:"اوو — لمبی 'اوو' کی آواز — جیسے 'moon' یا 'food' میں",example:'Rún (Roon)',meaning:'Raaz (راز)',urdu:'راز',romanUrdu:'Raaz'}
  ]
};

function isPreClassDone(lang){
  if(!lang||PRE_CLASS_LANGS.indexOf(lang)<0) return true;
  try{ return localStorage.getItem(_pcKey(lang))==='done'; }catch(e){ return false; }
}

function markPreClassDone(lang){
  try{ localStorage.setItem(_pcKey(lang),'done'); }catch(e){}
  var uid = window.FB_AUTH && window.FB_AUTH.currentUser ? window.FB_AUTH.currentUser.uid : null;
  var pid = (typeof ACTIVE_PID !== 'undefined' && ACTIVE_PID) ? ACTIVE_PID : null;
  if(uid && pid && !IS_GUEST && window.FIREBASE_READY && window.FB_DB){
    window.FB_SET(window.FB_REF(window.FB_DB,'users/'+uid+'/profiles/'+pid+'/preClass/'+lang),'done').catch(function(){});
  }
}

function openPreClass(lang){
  var nfo = PRE_CLASS_INFO[lang]; if(!nfo) return;
  var done = isPreClassDone(lang);
  var adPc = (typeof AD!=='undefined' && AD && AD.langs && AD.langs[lang]) ? AD.langs[lang].preClass : null;
  var desc = (adPc && adPc.description) ? adPc.description : ('Is pre-class mein ' + nfo.t + ' ke basic characters aur quiz honge.');
  var extra = (adPc && adPc.content) ? '<div style="background:rgba(255,255,255,.04);border-radius:14px;padding:12px;margin-bottom:14px;font-size:12px;color:rgba(255,255,255,.7);line-height:1.8;">' + adPc.content + '</div>' : '';

  var bodyHtml;
  if(done){
    bodyHtml = '<div style="background:rgba(46,229,157,.1);border:1.5px solid rgba(46,229,157,.35);border-radius:16px;padding:14px;text-align:center;margin-bottom:14px;">'
      + '<div style="font-size:28px;margin-bottom:6px;">✅</div>'
      + '<div style="font-family:Fredoka One,sans-serif;font-size:15px;color:#2EE59D;">Pre-Class Mukammal!</div>'
      + '<div style="font-size:11px;color:rgba(255,255,255,.5);margin-top:4px;">Badge: ' + nfo.b + '</div></div>'
      + extra;
  } else {
    bodyHtml = '<div style="background:rgba(199,125,255,.08);border:1px solid rgba(199,125,255,.25);border-radius:14px;padding:14px;margin-bottom:14px;">'
      + '<div style="font-size:12px;color:rgba(255,255,255,.65);line-height:1.6;">' + desc + '</div></div>'
      + extra;
  }

  var ol = document.createElement('div');
  ol.id = 'pcOverlay';
  ol.className = 'pcbadge-overlay';
  var box = document.createElement('div');
  box.className = 'pcbadge-box';
  box.style.cssText = 'max-height:85vh;overflow-y:auto;position:relative;animation:pcPop .35s cubic-bezier(.34,1.56,.64,1);';
  box.innerHTML = '<button id="pcCloseBtn" style="position:absolute;top:10px;right:10px;background:rgba(255,255,255,.1);border:none;border-radius:10px;width:32px;height:32px;cursor:pointer;color:#fff;font-size:16px;">&#x2715;</button>'
    + '<div style="text-align:center;margin-bottom:16px;">'
    + '<div style="font-size:50px;margin-bottom:8px;">' + nfo.i + '</div>'
    + '<div style="font-family:Fredoka One,sans-serif;font-size:20px;color:#C77DFF;margin-bottom:3px;">' + nfo.t + '</div>'
    + '<div style="font-size:12px;color:rgba(255,255,255,.5);">' + nfo.d + '</div></div>'
    + bodyHtml;

  var btnRow = document.createElement('div');
  btnRow.style.cssText = 'display:flex;flex-direction:column;gap:10px;';
  if(!done){
    var cmpBtn = document.createElement('button');
    cmpBtn.style.cssText = 'background:linear-gradient(135deg,#C77DFF,#9B40E8);border:none;border-radius:16px;padding:14px;font-family:Fredoka One,sans-serif;font-size:15px;color:#fff;cursor:pointer;box-shadow:0 4px 18px rgba(199,125,255,.4);width:100%;';
    cmpBtn.innerHTML = '▶️ Pre-Class Shuru Karo!';
    cmpBtn.onclick = function(){ var e=document.getElementById('pcOverlay'); if(e) e.remove(); launchPreClassLesson(lang, false); };
    btnRow.appendChild(cmpBtn);
  } else {
    // ✅ FIX: Dobara practice karne ka button — done hone ke baad bhi
    var repBtn = document.createElement('button');
    repBtn.style.cssText = 'background:linear-gradient(135deg,#5B8DEF,#3a6bd4);border:none;border-radius:16px;padding:14px;font-family:Fredoka One,sans-serif;font-size:15px;color:#fff;cursor:pointer;box-shadow:0 4px 18px rgba(91,141,239,.4);width:100%;';
    repBtn.innerHTML = '🔡 Dobara Practice Karo';
    repBtn.onclick = function(){
      var e=document.getElementById('pcOverlay'); if(e) e.remove();
      // Temporarily mark as not done so content shows
      openPreClassContent(lang);
    };
    btnRow.appendChild(repBtn);
  }
  var backBtn = document.createElement('button');
  backBtn.style.cssText = 'background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:16px;padding:12px;font-family:Fredoka One,sans-serif;font-size:13px;color:rgba(255,255,255,.7);cursor:pointer;width:100%;';
  backBtn.textContent = 'Wapas Jaao';
  backBtn.onclick = function(){ var e=document.getElementById('pcOverlay'); if(e) e.remove(); };
  btnRow.appendChild(backBtn);
  box.appendChild(btnRow);
  ol.appendChild(box);
  document.body.appendChild(ol);
  document.getElementById('pcCloseBtn').onclick = function(){ var e=document.getElementById('pcOverlay'); if(e) e.remove(); };
}

// ══════════════════════════════════════════════════════════
// PRE-CLASS FULL LESSON ENGINE
// Alphabet letters se full interactive lesson chalata hai:
// Letter cards → Pronunciation → Quiz → Match → Speaking
// ══════════════════════════════════════════════════════════

// Pre-class lesson state
var _pcLS = []; // lesson steps array
var _pcSI = 0;  // step index
var _pcLang = ''; // current lang
var _pcIsRevision = false;

function openPreClassContent(lang){
  var e = document.getElementById('pcOverlay'); if(e) e.remove();
  _pcIsRevision = true;
  launchPreClassLesson(lang, true);
}

// ── Score tracking for pre-class ──
var _pcScore = 0;
var _pcTotal = 0;
var _pcWrongLetters = [];

// ── Main entry: Pre-class lesson launch karo ──
function launchPreClassLesson(lang, isRevision){
  var nfo = PRE_CLASS_INFO[lang]; if(!nfo) return;
  var adPc = (typeof AD!=='undefined' && AD && AD.langs && AD.langs[lang]) ? AD.langs[lang].preClass : null;

  // Letters fetch priority: 1) Firebase/Admin  2) PC_ALPHABETS  3) empty → no-data screen
  var letters = [];
  if(adPc && adPc.letters && Array.isArray(adPc.letters) && adPc.letters.length > 0){
    letters = adPc.letters;
  } else if(typeof PC_ALPHABETS !== 'undefined' && PC_ALPHABETS[lang] && PC_ALPHABETS[lang].length > 0){
    letters = PC_ALPHABETS[lang];
  }

  // Score reset
  _pcScore = 0; _pcTotal = 0; _pcWrongLetters = [];

  // ✅ Heart system — free users ke liye ticker start karo
  if(typeof window._startHeartRegenTicker === 'function') window._startHeartRegenTicker();

  // Steps build karo
  _pcLS = buildPreClassSteps(lang, nfo, letters, adPc, isRevision);
  _pcSI = 0;
  _pcLang = lang;
  _pcIsRevision = isRevision || false;

  // Lesson screen kholo
  showScreen('lesson');
  var pb = document.getElementById('lPf'); if(pb) pb.style.width = '0%';
  var ht = document.getElementById('lHt');
  if(ht){
    if(typeof isPro==='function' && (isPro()||(typeof isDemo==='function'&&isDemo()))){
      ht.textContent = '✨ Pre-Class';
    } else {
      ht.textContent = '✨ Pre-Class';
      // Heart bar render karo (free users)
      setTimeout(function(){ if(typeof window._renderHeartBar==='function') window._renderHeartBar(); }, 200);
    }
  }
  setTimeout(function(){ renderPCStep(); }, 160);
}


// ═══════════════════════════════════════════════════════════════
// ✅ NEW: 6-letter BATCH system + Mega Quiz
// ═══════════════════════════════════════════════════════════════
function buildPreClassSteps(lang, nfo, letters, adPc, isRevision){
  var steps = [];
  var desc = (adPc&&adPc.description)?adPc.description:('Is pre-class mein '+nfo.t+' ke basic characters seekhenge.');
  var totalLetters = letters.length;
  var BATCH = 6;

  steps.push({t:'pc_header',nfo:nfo,desc:desc,isRevision:isRevision,totalLetters:totalLetters});
  if(totalLetters===0){
    steps.push({t:'pc_nodata',nfo:nfo,desc:desc});
    steps.push({t:'pc_done',lang:lang,isRevision:isRevision});
    return steps;
  }

  var allBatchLetters=[];
  var batches=[];
  for(var bi=0;bi<totalLetters;bi+=BATCH) batches.push(letters.slice(bi,bi+BATCH));

  batches.forEach(function(batch,bIdx){
    var batchNum=bIdx+1, batchTotal=batches.length;
    allBatchLetters=allBatchLetters.concat(batch);

    // Batch intro
    steps.push({t:'pc_batch_intro',batchNum:batchNum,batchTotal:batchTotal,batch:batch,nfo:nfo});

    // Phase 1: Parhai
    steps.push({t:'pc_phase_banner',phase:1,icon:'BOOK',title:'Parhai — Dekho aur Suno',sub:'Har letter ko dhyan se dekho',batchNum:batchNum});
    batch.forEach(function(l,li){
      steps.push({t:'pc_letter',letter:l,num:li+1,total:batch.length,batchNum:batchNum,allLetterNum:bIdx*BATCH+li+1,totalLetters:totalLetters});
    });

    // Phase 2: Quiz
    if(batch.length>=2){
      var quizCount=Math.min(batch.length,4+Math.floor(Math.random()*3));
      steps.push({t:'pc_phase_banner',phase:2,icon:'QUIZ',title:'Quiz Time — '+quizCount+' Sawaal',sub:'Kya yaad raha? Test karo!',batchNum:batchNum,quizCount:quizCount});
      var qPool=_pcShuffle(batch.slice());
      var qtypes=['pc_example_q','pc_listen','pc_recog','pc_fillblank'];
      for(var qi=0;qi<quizCount;qi++){
        var ql=qPool[qi%qPool.length];
        var qt=qtypes[qi%qtypes.length];
        if(qt==='pc_fillblank'&&(!ql.example||ql.example.length<2)) qt='pc_example_q';
        var pool4=allBatchLetters.length>=4?allBatchLetters:letters;
        var dist=_pcPickDistractors(ql,pool4,3);
        steps.push({t:qt,letter:ql,options:_pcShuffle([ql].concat(dist)),quizNum:qi+1,quizTotal:quizCount});
      }
    }

    // Phase 3: Speaking
    steps.push({t:'pc_phase_banner',phase:3,icon:'MIC',title:'Sunna & Bolna',sub:'Listen then speak into the mic!',batchNum:batchNum});
    batch.forEach(function(l){
      steps.push({t:'pc_speaking',letter:l,batchMode:true});
    });
  });

  // Mega Quiz
  if(totalLetters>=4){
    steps.push({t:'pc_mega_intro',totalLetters:totalLetters});

    var megaQs=[];
    var mPool=_pcShuffle(allBatchLetters.slice());
    var fillL=mPool.filter(function(l){return l.example&&l.example.length>=2;});
    fillL.slice(0,Math.ceil(totalLetters*0.4)).forEach(function(l){
      var d=_pcPickDistractors(l,allBatchLetters,3);
      megaQs.push({qtype:'mega_fill',letter:l,options:_pcShuffle([l].concat(d))});
    });
    var exL=mPool.filter(function(l){return l.example;});
    exL.slice(0,Math.ceil(totalLetters*0.35)).forEach(function(l){
      var d=_pcPickDistractors(l,allBatchLetters,3);
      megaQs.push({qtype:'mega_example',letter:l,options:_pcShuffle([l].concat(d))});
    });
    mPool.slice(0,Math.ceil(totalLetters*0.25)).forEach(function(l){
      var d=_pcPickDistractors(l,allBatchLetters,3);
      megaQs.push({qtype:'mega_listen',letter:l,options:_pcShuffle([l].concat(d))});
    });
    megaQs=_pcShuffle(megaQs);
    var megaTotal=Math.max(26,Math.min(megaQs.length,totalLetters));
    megaQs=megaQs.slice(0,megaTotal);

    // Speaking in mega
    steps.push({t:'pc_mega_speaking_intro'});
    var mSpk=_pcShuffle(allBatchLetters.slice()).slice(0,Math.min(10,totalLetters));
    mSpk.forEach(function(l){ steps.push({t:'pc_speaking',letter:l,megaMode:true}); });

    // Speed quiz
    steps.push({t:'pc_mega_speed_intro',total:megaQs.length});
    steps.push({t:'pc_mega_speed',questions:megaQs,totalQ:megaQs.length});
  }

  steps.push({t:'pc_done',lang:lang,isRevision:isRevision});
  return steps;
}


// ── Helper: Shuffle array ──
function _pcShuffle(arr){
  for(var i=arr.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var tmp=arr[i]; arr[i]=arr[j]; arr[j]=tmp;
  }
  return arr;
}

// ── Helper: Pick N distractor letters (different from correct) ──
function _pcPickDistractors(correct, allLetters, n){
  var pool = allLetters.filter(function(l){ return l.char !== correct.char; });
  _pcShuffle(pool);
  return pool.slice(0, n);
}

// ── Render current pre-class step ──
// ── Render lock — double-click/glitch prevent ──
var _pcRendering = false;
var _pcRenderTimer = null;

function renderPCStep(){
  // Agar pehle se render ho raha hai toh cancel karo
  if(_pcRenderTimer) { clearTimeout(_pcRenderTimer); _pcRenderTimer = null; }
  
  var tot = _pcLS.length;
  var pb = document.getElementById('lPf');
  if(pb) pb.style.width = Math.round((_pcSI/tot)*100) + '%';
  var step = _pcLS[_pcSI];
  var bd = document.getElementById('lBd');
  if(!bd || !step) return;

  _pcRendering = true;
  bd.scrollTop = 0;

  // Step 1: Fade out instantly (no transform — avoids glitch)
  bd.style.transition = 'opacity .12s ease';
  bd.style.opacity = '0';

  _pcRenderTimer = setTimeout(function(){
    _pcRenderTimer = null;
    // Step 2: Render new content while invisible
    bd.style.transform = 'translateX(0)'; // reset any leftover transform
    if(step.t==='pc_header')               renderPCHeader(step, bd);
    else if(step.t==='pc_nodata')           renderPCNoData(step, bd);
    else if(step.t==='pc_batch_intro')      renderPCBatchIntro(step, bd);
    else if(step.t==='pc_phase_banner')     renderPCPhaseBanner(step, bd);
    else if(step.t==='pc_letter')           renderPCLetter(step, bd);
    else if(step.t==='pc_listen')           renderPCListen(step, bd);
    else if(step.t==='pc_recog')            renderPCRecog(step, bd);
    else if(step.t==='pc_example_q')        renderPCExampleQ(step, bd);
    else if(step.t==='pc_fillblank')        renderPCFillBlank(step, bd);
    else if(step.t==='pc_quiz')             renderPCQuiz(step, bd);
    else if(step.t==='pc_speaking_intro')   renderPCSpeakingIntro(bd);
    else if(step.t==='pc_speaking')         renderPCSpeaking(step, bd);
    else if(step.t==='pc_match')            renderPCMatch(step, bd);
    else if(step.t==='pc_example_match')    renderPCExampleMatch(step, bd);
    else if(step.t==='pc_speed')            renderPCSpeed(step, bd);
    else if(step.t==='pc_mega_intro')       renderPCMegaIntro(step, bd);
    else if(step.t==='pc_mega_speaking_intro') renderPCMegaSpeakingIntro(bd);
    else if(step.t==='pc_mega_speed_intro') renderPCMegaSpeedIntro(step, bd);
    else if(step.t==='pc_mega_speed')       renderPCMegaSpeed(step, bd);
    else if(step.t==='pc_done')             renderPCDone(step, bd);
    else { _pcRendering = false; pcNx(); return; }

    // Step 3: Fade in smoothly
    bd.style.transition = 'opacity .25s ease';
    requestAnimationFrame(function(){
      bd.style.opacity = '1';
      setTimeout(function(){
        bd.style.transition = '';
        _pcRendering = false;
      }, 260);
    });
  }, 120);
}

function pcNx(){
  // Rendering lock — double tap se protect karo
  if(_pcRendering) return;
  // Heart check — free users: agar hearts khatam toh aage nahi jana
  if(typeof hasHearts==='function' && !hasHearts()){
    if(typeof showNoHeartsOverlay==='function') showNoHeartsOverlay();
    return;
  }
  _pcSI++;
  if(_pcSI < _pcLS.length) renderPCStep();
}

// ── STEP: Welcome header ──
function renderPCHeader(s, b){
  var revBadge = s.isRevision ? '<div style="background:rgba(91,141,239,.15);border:1px solid rgba(91,141,239,.3);border-radius:20px;padding:5px 14px;display:inline-block;font-size:11px;color:#5B8DEF;margin-bottom:14px;">🔡 Revision Mode</div>' : '';
  var totalL = s.totalLetters || 0;
  b.innerHTML = '<div class="a" style="text-align:center;padding:20px 0 30px;">'
    + '<div style="font-size:72px;margin-bottom:10px;">' + s.nfo.i + '</div>'
    + revBadge
    + '<div style="font-family:Fredoka One,sans-serif;font-size:24px;color:#C77DFF;margin-bottom:8px;">' + s.nfo.t + '</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.6);margin-bottom:12px;line-height:1.6;">' + s.desc + '</div>'
    + (totalL > 0 ? '<div style="display:inline-block;background:rgba(199,125,255,.15);border:1px solid rgba(199,125,255,.35);border-radius:20px;padding:5px 16px;font-size:12px;color:#C77DFF;margin-bottom:16px;">📚 ' + totalL + ' characters seekhenge</div>' : '')
    + '<div style="background:rgba(255,255,255,.05);border-radius:14px;padding:14px;margin-bottom:24px;text-align:left;">'
    + '<div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:8px;font-weight:700;">&#127891; Is class mein:</div>'
    + '<div style="font-size:12px;color:rgba(255,255,255,.7);line-height:2.2;">'
    + '📃 Letter cards<br>🔊 Listening practice<br>❓ Pehchano quiz<br>🎤 Speaking practice<br>📅 Matching exercise<br>⚡ Speed round<br>🎉 Badge + XP!</div>'
    + '</div>'
    + '<button class="bg" onclick="pcNx()" style="width:100%;min-height:52px;font-size:17px;">▶️ Start Now!</button>'
    + '</div>';
}

// ── STEP: No data ──
function renderPCNoData(s, b){
  b.innerHTML = '<div class="a" style="text-align:center;padding:30px 0;">'
    + '<div style="font-size:48px;margin-bottom:12px;">&#9888;️</div>'
    + '<div style="font-family:Fredoka One,sans-serif;font-size:18px;color:#FFD166;margin-bottom:8px;">Content Not Available</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.6);margin-bottom:24px;">' + s.desc + '</div>'
    + '<div style="font-size:12px;color:rgba(255,255,255,.4);margin-bottom:20px;">Add letters in admin panel then try again.</div>'
    + '<button class="bg" onclick="pcNx()" style="width:100%;">Aagey →</button>'
    + '</div>';
}

// ── STEP: Letter card ──
function renderPCLetter(s, b){
  var l = s.letter;
  var char = l.char || l.character || l.letter || '?';
  var name = l.name || l.letterName || char;
  var pron = l.pronunciation || l.sound || l.phonetic || '';
  var example = l.example || l.word || '';
  var meaning = l.meaning || l.translation || '';
  var urduScript = l.urdu || '';
  var upper = l.upper || l.uppercase || '';
  var lower = l.lower || l.lowercase || '';

  // TTS ke liye
  var ttsText = pron || name || char;
  var tid = _storeTTS ? _storeTTS(ttsText, example) : 0;

  b.innerHTML = '<div class="a">'
    + '<div style="text-align:center;margin-bottom:4px;font-size:11px;color:rgba(255,255,255,.4);">'
    + 'Letter ' + s.num + ' / ' + s.total + '</div>'
    + '<div style="background:linear-gradient(135deg,rgba(199,125,255,.15),rgba(199,125,255,.05));border:1.5px solid rgba(199,125,255,.35);border-radius:20px;padding:24px 20px;text-align:center;margin-bottom:16px;">'
    + '<div style="font-size:72px;font-weight:700;color:#C77DFF;margin-bottom:8px;font-family:serif;">' + char + '</div>'
    + (upper||lower ? '<div style="font-size:14px;color:rgba(255,255,255,.5);margin-bottom:6px;">'+(upper?'A: '+upper+' &nbsp;':'')+(lower?'a: '+lower:'')+'</div>' : '')
    + '<div style="font-family:Fredoka One,sans-serif;font-size:18px;color:#fff;margin-bottom:4px;">' + name + '</div>'
    + (pron ? '<div style="font-size:14px;color:rgba(255,255,255,.5);margin-bottom:8px;">/ ' + pron + ' /</div>' : '')
    + '</div>'
    + (example ? '<div style="background:rgba(88,204,2,.1);border:1px solid rgba(88,204,2,.25);border-radius:14px;padding:14px;margin-bottom:14px;">'
      + '<div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:4px;">📚 Misal:</div>'
      + '<div style="font-size:16px;color:#58CC02;font-weight:700;">' + example + '</div>'
      + (urduScript ? '<div style="font-size:16px;color:#fff;font-family:serif;margin-top:6px;direction:rtl;">' + urduScript + '</div>' : '')
      + (meaning ? '<div style="font-size:12px;color:rgba(255,255,255,.45);margin-top:2px;">' + meaning + '</div>' : '')
      + '</div>' : '')
    + '<div class="spk-bar" style="margin-bottom:16px;">'
    + (tid ? '<button class="spk-btn spk-listen" onclick="ttsPlay('+tid+')">🔊 Suno</button>'
           + '<button class="spk-btn spk-slow" onclick="ttsSlow('+tid+')">🐢 Dheere</button>'
           : '<button class="spk-btn spk-listen" onclick="if(window.spk)spk(\''+ttsText+'\')">🔊 Suno</button>')
    + '</div>'
    + '<button class="bg" onclick="pcNx()" style="width:100%;">✓ Got It! →</button>'
    + '</div>';
  // Auto-play pronunciation
  setTimeout(function(){
    if(tid && window.ttsPlay) ttsPlay(tid);
    else if(window.spk) spk(ttsText);
  }, 500);
}

// ── STEP: Recognition quiz ──
function renderPCQuiz(s, b){
  var letters = s.letters;
  if(!letters || letters.length < 2){ pcNx(); return; }
  // Random letter choose karo
  var idx = Math.floor(Math.random() * letters.length);
  var correct = letters[idx];
  var char = correct.char || correct.character || correct.letter || '?';
  var name = correct.name || correct.letterName || char;
  var pron = correct.pronunciation || correct.sound || '';
  var example = correct.example || correct.word || '';
  var meaning = correct.meaning || correct.urdu || '';

  // Options banao (correct + 3 random wrong)
  var pool = letters.filter(function(l, i){ return i !== idx; });
  pool.sort(function(){ return Math.random()-.5; });
  var wrongs = pool.slice(0,3);
  var options = [correct].concat(wrongs).sort(function(){ return Math.random()-.5; });

  var quizId = 'pcquiz_' + _pcSI;
  var question, optionFn;

  if(s.qType === 'meaning'){
    // Char dikhao, name/meaning guess karo
    question = '<div style="font-size:80px;font-weight:700;color:#C77DFF;margin-bottom:8px;font-family:serif;text-align:center;">' + char + '</div>'
      + '<div style="font-size:13px;color:rgba(255,255,255,.5);text-align:center;margin-bottom:4px;">What is the name of this letter?</div>';
    optionFn = function(o){ return (o.name || o.letterName || o.char || '?'); };
    var correctAnswer = name;
    b.innerHTML = '<div class="a">'
      + '<div style="background:rgba(199,125,255,.08);border:1px solid rgba(199,125,255,.2);border-radius:18px;padding:20px;margin-bottom:16px;">'
      + question + '</div>'
      + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;" id="' + quizId + '">'
      + options.map(function(o){
          var ans = optionFn(o);
          return '<button onclick="pcQuizAnswer(this,\'' + ans.replace(/'/g,"\\'") + '\',\'' + correctAnswer.replace(/'/g,"\\'") + '\',\'' + quizId + '\')" '
            + 'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:16px 10px;font-family:Fredoka One,sans-serif;font-size:14px;color:#fff;cursor:pointer;">'
            + ans + '</button>';
        }).join('')
      + '</div></div>';
  } else {
    // Pronunciation suno, char dhundo
    var tid2 = _storeTTS ? _storeTTS(pron || name, '') : 0;
    question = '<div style="text-align:center;margin-bottom:12px;">'
      + '<div style="font-size:13px;color:rgba(255,255,255,.6);margin-bottom:10px;">Which letter makes this sound?</div>'
      + (tid2 ? '<button class="spk-btn spk-listen" onclick="ttsPlay('+tid2+')" style="font-size:14px;padding:10px 20px;">🔊 Awaaz Suno</button>'
              : '<button class="spk-btn spk-listen" onclick="if(window.spk)spk(\''+name+'\')" style="font-size:14px;padding:10px 20px;">🔊 Awaaz Suno</button>')
      + '</div>';
    optionFn = function(o){ return (o.char || o.character || o.letter || '?'); };
    var correctChar = char;
    b.innerHTML = '<div class="a">'
      + '<div style="background:rgba(199,125,255,.08);border:1px solid rgba(199,125,255,.2);border-radius:18px;padding:20px;margin-bottom:16px;">'
      + question + '</div>'
      + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;" id="' + quizId + '">'
      + options.map(function(o){
          var ans = optionFn(o);
          return '<button onclick="pcQuizAnswer(this,\'' + ans.replace(/'/g,"\\'") + '\',\'' + correctChar.replace(/'/g,"\\'") + '\',\'' + quizId + '\')" '
            + 'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:20px 10px;font-family:serif;font-size:32px;color:#fff;cursor:pointer;">'
            + ans + '</button>';
        }).join('')
      + '</div></div>';
    // Auto-play
    setTimeout(function(){
      if(tid2 && window.ttsPlay) ttsPlay(tid2);
      else if(window.spk) spk(name);
    }, 600);
  }
}

function pcQuizAnswer(btn, selected, correct, containerId){
  var container = document.getElementById(containerId);
  if(!container) return;
  // Sab buttons disable karo
  var btns = container.querySelectorAll('button');
  btns.forEach(function(b){ b.disabled = true; });
  var isCorrect = (selected === correct);
  btn.style.background = isCorrect ? 'rgba(88,204,2,.3)' : 'rgba(255,75,75,.3)';
  btn.style.borderColor = isCorrect ? '#58CC02' : '#FF4B4B';
  btn.style.color = isCorrect ? '#58CC02' : '#FF4B4B';
  if(!isCorrect){
    // Sahi jawab highlight karo
    btns.forEach(function(b2){
      if(b2.textContent.trim() === correct){
        b2.style.background = 'rgba(88,204,2,.3)';
        b2.style.borderColor = '#58CC02';
        b2.style.color = '#58CC02';
      }
    });
  }
  // Feedback text add karo
  var fb = document.createElement('div');
  fb.style.cssText = 'text-align:center;padding:12px;font-family:Fredoka One,sans-serif;font-size:16px;color:' + (isCorrect?'#58CC02':'#FF4B4B') + ';';
  fb.textContent = isCorrect ? '✓ Sahi Jawab! Shabaash!' : '✗ Wrong — ' + correct + ' sahi hai';
  fb.innerHTML = isCorrect ? '✓ Sahi Jawab! Shabaash! 🎉' : '✗ Wrong — Sahi: <b>' + correct + '</b>';
  var nextBtn = document.createElement('button');
  nextBtn.className = 'bg';
  nextBtn.style.cssText = 'width:100%;margin-top:10px;';
  nextBtn.textContent = 'Agla \u2192';
  nextBtn.onclick = pcNx;
  container.parentNode.appendChild(fb);
  container.parentNode.appendChild(nextBtn);
}

// ── STEP: Speaking intro ──
function renderPCSpeakingIntro(b){
  b.innerHTML = '<div class="a" style="text-align:center;padding:20px 0 30px;">'
    + '<div style="font-size:56px;margin-bottom:12px;">🎤</div>'
    + '<div style="font-family:Fredoka One,sans-serif;font-size:22px;color:#C77DFF;margin-bottom:8px;">Pronunciation Practice</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.6);margin-bottom:20px;line-height:1.7;">Now speak yourself! Listen to each letter sound, then speak into the mic.</div>'
    + '<div style="background:rgba(255,255,255,.05);border-radius:14px;padding:14px;margin-bottom:20px;">'
    + '<div style="font-size:12px;color:rgba(255,255,255,.5);line-height:2;">🔊 Pehle suno<br>&#127906; Phir tum bolo<br>📚 Score dekho</div>'
    + '</div>'
    + '<button class="bg" onclick="pcNx()" style="width:100%;">&#128062; Shuru Karo</button>'
    + '</div>';
}

// ── STEP: Speaking practice (RAM-style) ──
function renderPCSpeaking(s, b){
  var l = s.letter;
  var char = l.char || l.character || l.letter || '?';
  var name = l.name || l.letterName || char;
  var pron = l.pronunciation || l.sound || name;
  var example = l.example || l.word || '';
  var meaning = l.meaning || '';
  var urduScript = l.urdu || '';

  var tid = _storeTTS ? _storeTTS(pron, example) : 0;
  var micId = 'pcmic_' + _pcSI;
  var resId = 'pcres_' + _pcSI;
  var micSupported = ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  b.innerHTML = '<div class="a">'
    + '<div style="background:linear-gradient(135deg,rgba(199,125,255,.12),rgba(199,125,255,.04));border:1.5px solid rgba(199,125,255,.3);border-radius:20px;padding:20px;text-align:center;margin-bottom:16px;">'
    + '<div style="font-size:64px;font-weight:700;color:#C77DFF;font-family:serif;">' + char + '</div>'
    + '<div style="font-family:Fredoka One,sans-serif;font-size:20px;color:#fff;margin-top:6px;">' + name + '</div>'
    + (pron !== name ? '<div style="font-size:13px;color:rgba(255,255,255,.5);">/ ' + pron + ' /</div>' : '')
    + (example ? '<div style="font-size:14px;color:#58CC02;margin-top:8px;">' + example + (urduScript ? ' — <span style="font-family:serif;font-size:15px;color:#fff;">' + urduScript + '</span>' : '') + (meaning ? ' — <span style="font-size:12px;color:rgba(255,255,255,.5);">' + meaning + '</span>' : '') + '</div>' : '')
    + '</div>'
    + '<div class="spk-bar" style="margin-bottom:14px;">'
    + (tid ? '<button class="spk-btn spk-listen" onclick="ttsPlay('+tid+')">🔊 Suno</button>'
           + '<button class="spk-btn spk-slow" onclick="ttsSlow('+tid+')">🐢 Dheere</button>'
           : '')
    + '</div>'
    + '<div class="sn-mic-wrap" style="margin-bottom:14px;">'
    + (micSupported
        ? '<button class="sn-mic-btn" id="'+micId+'" onclick="pcMicSpeak(\''+micId+'\',\''+resId+'\',\''+char+'\')">🎤 Try Speaking</button>'
          + '<span style="font-size:12px;color:var(--mut);flex:1;">"' + char + '" bolo</span>'
        : '<span style="font-size:12px;color:var(--mut);">🎤 Mic available in Chrome</span>')
    + '</div>'
    + '<div id="' + resId + '" style="margin-bottom:12px;"></div>'
    + '<button class="bg" onclick="pcNx()" style="width:100%;">✓ Next Letter →</button>'
    + '</div>';

  // Auto-play
  setTimeout(function(){
    if(tid && window.ttsPlay) ttsPlay(tid);
    else if(window.spk) spk(pron);
  }, 400);
}

function pcMicSpeak(micId, resId, expected){
  // ── Korean Hangul detect karo ──
  var isKorean = /[\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]/.test(expected);
  // ── Japanese Hiragana/Katakana detect karo ──
  var isJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(expected);
  // ── Chinese Pinyin detect karo — _pcLang se (Pinyin Latin letters hain, Unicode se detect nahi hoga) ──
  var isChinese = (_pcLang === 'zh');
  // ── Russian Cyrillic detect karo ──
  var isRussian = /[\u0400-\u04FF]/.test(expected);
  // ── Turkish Latin script — _pcLang se detect karo ──
  var isTurkish = (_pcLang === 'tr');
  // ── Irish Latin script — _pcLang se detect karo ──
  var isIrish = (_pcLang === 'ie');
  var rawExpected = expected; // Original rakhte hain Korean/Japanese/Chinese/Russian/Turkish/Irish ke liye
  if(!isKorean && !isJapanese && !isChinese && !isRussian && !isTurkish && !isIrish) expected = expected.replace(/[^a-z0-9]/gi,'').toLowerCase();

  var SRClass = window.SpeechRecognition || window.webkitSpeechRecognition;
  var resEl = document.getElementById(resId);
  if(!SRClass){ if(resEl) resEl.innerHTML='<div style="color:var(--mut);font-size:12px;">🎤 Mic not working in this browser.</div>'; return; }
  var btn = document.getElementById(micId);
  if(btn){ btn.textContent='🔴 Sun raha hun...'; btn.style.background='rgba(255,75,75,.3)'; btn.disabled=true; }

  // ── Chinese Pinyin charMap — browser zh-CN mein jo return karta hai ──
  // Pinyin symbols ke liye browser ke possible transcripts mapped hain
  // ü ke liye 'v' bhi accept (Chinese keyboard convention: lv = lü)
  var zhCharMap = {
    'b':  ['b','be','bo','ba','bi','bu','buh','baa','boh'],
    'p':  ['p','pe','po','pa','pi','pu','puh','paa','poh'],
    'm':  ['m','me','mo','ma','mi','mu','em','muh','maa'],
    'f':  ['f','fe','fo','fa','fu','ef','fuh','faa'],
    'd':  ['d','de','do','da','di','du','duh','daa'],
    't':  ['t','te','to','ta','ti','tu','te','tuh','taa'],
    'n':  ['n','ne','no','na','ni','nu','en','nuh','naa'],
    'l':  ['l','le','lo','la','li','lu','el','luh','laa'],
    'g':  ['g','ge','go','ga','gu','gi','guh','gaa'],
    'k':  ['k','ke','ko','ka','ku','ki','kay','kuh','kaa'],
    'h':  ['h','he','ho','ha','hu','hi','huh','haa'],
    'j':  ['j','ji','jia','jie','ju','je','jay','juh'],
    'q':  ['q','qi','qia','qie','qu','chi','chee','cue','queue'],
    'x':  ['x','xi','xia','xie','xu','shi','shee','sh'],
    'zh': ['zh','zhi','ja','jar','jer','jer','juh','zhuh'],
    'ch': ['ch','chi','cha','che','chu','chuh','chaa'],
    'sh': ['sh','shi','sha','she','shu','shuh','shaa'],
    'r':  ['r','ri','ra','re','ru','ar','er','ruh'],
    'z':  ['z','zi','za','ze','zu','ze','zee','zed','zuh'],
    'c':  ['c','ci','ca','ce','cu','tsi','tsee','see','cuh'],
    's':  ['s','si','sa','se','su','es','ess','suh','saa'],
    'a':  ['a','ah','aa','aah','ar','ha'],
    'o':  ['o','oh','ow','oo','awe'],
    'e':  ['e','eh','uh','er','ae'],
    'i':  ['i','ee','yi','yee','ie'],
    'u':  ['u','oo','wu','woo','w'],
    'ü':  ['v','yu','yoo','u','ü','lv','nv','lu','nu'],
    'ai': ['ai','eye','ay','i','aisle'],
    'ei': ['ei','ay','a','eight','ei'],
    'ui': ['ui','way','wei','we'],
    'ao': ['ao','ow','aow','how','cow'],
    'ou': ['ou','oh','ow','ooh'],
    'iu': ['iu','yo','you','yew','iou'],
    'ie': ['ie','yeah','ye','yeh'],
    'üe': ['ve','yue','yeh','vue'],
    'an': ['an','ann','on','en'],
    'en': ['en','un','in','end'],
    'in': ['in','inn','yin','een'],
    'un': ['un','wen','won','one'],
    'ün': ['vn','yun','yoon','yuan'],
    'ang':['ang','ahng','ong','hung'],
    'eng':['eng','ung','hung','ing'],
    'ing':['ing','ying','een','ing'],
    'ong':['ong','oong','wung','wong'],
    'er': ['er','are','ar','err','ur']
  };

  // ── Japanese Hiragana charMap — browser jo return karta hai (ja-JP) ──
  // sr.lang = 'ja-JP' ke saath browser Hiragana/kanji syllables return karta hai
  var jaCharMap = {
    'あ': ['あ','ア','亜','a','ah','aa'],
    'い': ['い','イ','以','i','ee','ii'],
    'う': ['う','ウ','u','oo'],
    'え': ['え','エ','e','eh'],
    'お': ['お','オ','o','oh'],
    'か': ['か','カ','花','香','ka','か'],
    'き': ['き','キ','木','気','ki'],
    'く': ['く','ク','区','ku'],
    'け': ['け','ケ','家','ke'],
    'こ': ['こ','コ','子','ko'],
    'さ': ['さ','サ','sa','差'],
    'し': ['し','シ','shi','四'],
    'す': ['す','ス','su'],
    'せ': ['せ','セ','se'],
    'そ': ['そ','ソ','so'],
    'た': ['た','タ','ta','他'],
    'ち': ['ち','チ','chi'],
    'つ': ['つ','ツ','tsu'],
    'て': ['て','テ','te'],
    'と': ['と','ト','to'],
    'な': ['な','ナ','na'],
    'に': ['に','ニ','ni'],
    'ぬ': ['ぬ','ヌ','nu'],
    'ね': ['ね','ネ','ne'],
    'の': ['の','ノ','no'],
    'は': ['は','ハ','ha'],
    'ひ': ['ひ','ヒ','hi'],
    'ふ': ['ふ','フ','fu'],
    'へ': ['へ','ヘ','he'],
    'ほ': ['ほ','ホ','ho'],
    'ま': ['ま','マ','ma'],
    'み': ['み','ミ','mi'],
    'む': ['む','ム','mu'],
    'め': ['め','メ','me'],
    'も': ['も','モ','mo'],
    'や': ['や','ヤ','ya'],
    'ゆ': ['ゆ','ユ','yu'],
    'よ': ['よ','ヨ','yo'],
    'ら': ['ら','ラ','ra'],
    'り': ['り','リ','ri'],
    'る': ['る','ル','ru'],
    'れ': ['れ','レ','re'],
    'ろ': ['ろ','ロ','ro'],
    'わ': ['わ','ワ','wa'],
    'を': ['を','ヲ','wo','o'],
    'ん': ['ん','ン','n','nn']
  };

  // ── Korean Hangul charMap — browser jo return karta hai ──
  // sr.lang = 'ko-KR' ke saath browser Hangul syllables return karta hai
  // Har Hangul letter ke liye common syllable returns mapped hain
  var koCharMap = {
    'ㄱ': ['가','기','고','구','그','거','게','개','긴','긱','각','곤','금','글','강','공','국','근','건','간','길','기억','기역'],
    'ㄴ': ['나','니','노','누','느','너','네','내','날','남','납','낫','난','님','낮','낸','넣','냐','녀','뇨','뉴','니은'],
    'ㄷ': ['다','디','도','두','드','더','데','대','달','담','닭','당','독','돌','둘','드','뒤','들','디귿'],
    'ㄹ': ['라','리','로','루','르','러','레','래','랄','람','랍','랑','록','롤','룰','를','뤼','리을','리'],
    'ㅁ': ['마','미','모','무','므','머','메','매','말','맘','맙','망','목','몰','뭐','뮤','미음'],
    'ㅂ': ['바','비','보','부','브','버','베','배','발','밤','밥','방','복','볼','불','뷰','비읍'],
    'ㅅ': ['사','시','소','수','스','서','세','새','살','삼','삽','상','속','솔','술','숲','쉬','시옷'],
    'ㅇ': ['아','이','오','우','으','어','에','애','알','암','압','앙','옥','올','울','야','여','요','유','이응'],
    'ㅈ': ['자','지','조','주','즈','저','제','재','잘','잠','잡','장','족','졸','줄','쥐','지읒'],
    'ㅊ': ['차','치','초','추','츠','처','체','채','찰','참','창','촉','총','춤','취','치읓'],
    'ㅋ': ['카','키','코','쿠','크','커','케','캐','칼','캄','캡','캉','콕','콜','쿨','쿼','키읔'],
    'ㅌ': ['타','티','토','투','트','터','테','태','탈','탐','탑','탕','톡','톨','툴','튀','티읕'],
    'ㅍ': ['파','피','포','푸','프','퍼','페','패','팔','팜','팝','팡','폭','폴','풀','퓨','피읖'],
    'ㅎ': ['하','히','호','후','흐','허','헤','해','할','함','합','항','혹','홀','훌','휘','히읗'],
    'ㄲ': ['까','끼','꼬','꾸','끄','꺼','께','깨','깔','깜','깝','깡','꼭','꼴','꿀','꿔','쌍기역'],
    'ㄸ': ['따','띠','또','뚜','뜨','떠','떼','때','딸','땀','땁','땅','똑','똘','뚫','뛰','쌍디귿'],
    'ㅃ': ['빠','삐','뽀','뿌','쁘','뻐','뻬','빼','빨','빰','빱','빵','뽁','뽈','뿔','뾰','쌍비읍'],
    'ㅆ': ['싸','씨','쏘','쑤','쓰','써','쎄','쌔','쌀','쌈','쌉','쌍','쏙','쏠','쑬','쏴','쌍시옷'],
    'ㅉ': ['짜','찌','쪼','쭈','쯔','쩌','쩨','째','짤','짬','짭','짱','쫙','쪽','쭐','쭤','쌍지읒'],
    'ㅏ': ['아','가','나','다','라','마','바','사','자','차','카','타','파','하','아'],
    'ㅑ': ['야','갸','냐','댜','랴','먀','뱌','샤','쟈','챠','캬','탸','퍄','햐','야'],
    'ㅓ': ['어','거','너','더','러','머','버','서','저','처','커','터','퍼','허','어'],
    'ㅕ': ['여','겨','녀','뎌','려','며','벼','셔','져','쳐','켜','텨','펴','혀','여'],
    'ㅗ': ['오','고','노','도','로','모','보','소','조','초','코','토','포','호','오'],
    'ㅛ': ['요','교','뇨','됴','료','묘','뵤','쇼','죠','쵸','쿄','툐','표','효','요'],
    'ㅜ': ['우','구','누','두','루','무','부','수','주','추','쿠','투','푸','후','우'],
    'ㅠ': ['유','규','뉴','듀','류','뮤','뷰','슈','쥬','츄','큐','튜','퓨','휴','유'],
    'ㅡ': ['으','그','느','드','르','므','브','스','즈','츠','크','트','프','흐','으'],
    'ㅣ': ['이','기','니','디','리','미','비','시','지','치','키','티','피','히','이'],
    'ㅐ': ['애','개','내','대','래','매','배','새','재','채','캐','태','패','해','애'],
    'ㅒ': ['얘','걔','냬','댸','럐','몌','볘','섀','쟤','챼','컈','턔','폐','햬','얘'],
    'ㅔ': ['에','게','네','데','레','메','베','세','제','체','케','테','페','헤','에'],
    'ㅖ': ['예','계','녜','뎨','례','몌','볘','셰','졔','쳬','켸','텨','폐','혜','예'],
    'ㅘ': ['와','과','봐','솨','봐','화','봐'],
    'ㅙ': ['왜','괘','봬','쇄','왜','화','봬'],
    'ㅚ': ['외','괴','뇌','되','뢰','뫼','뵈','쇠','죄','최','쾌','퇴','폐','회','외'],
    'ㅝ': ['워','궈','눠','둬','뤄','뭐','붜','숴','줘','춰','쿼','퉈','풔','훠','워'],
    'ㅞ': ['웨','궤','눼','뒈','뤠','뭬','붸','쉐','줴','춰','퀘','퉤','풰','훼','웨'],
    'ㅟ': ['위','귀','뉘','뒤','뤼','뮈','뷔','쉬','쥐','취','퀴','튀','픠','휘','위'],
    'ㅢ': ['의','긔','늬','듸','릐','믜','븨','싀','즤','츼','킈','틔','픠','희','의']
  };

  // ── English charMap (existing) ──
  var enCharMap = {
    'a': ['a','ay','aye','ei','ai','eh','aa','the','ha','i','e','8','ate'],
    'b': ['b','be','bee','bi','bhi','by','bye','bea','v','pb'],
    'c': ['c','see','sea','si','ce','key','ki','she','chi','se','3'],
    'd': ['d','de','dee','di','the','da','dea','te'],
    'e': ['e','ee','he','ea','i','eh','3','eee','yi','ie'],
    'f': ['f','ef','eff','ph','if','off','of','fo'],
    'g': ['g','ge','gee','ji','je','jay','ghee','gi','jee','gay'],
    'h': ['h','aitch','haitch','hey','ha','ach','ah','each','age','8'],
    'i': ['i','eye','ai','aye','hi','ay','ie','ii','1'],
    'j': ['j','jay','je','jae','ja','ge','ji','jee','chai'],
    'k': ['k','kay','ke','ka','gay','cay','que','kea','okay'],
    'l': ['l','el','ell','elle','al','ll','1','ile'],
    'm': ['m','em','mm','am','im','aim','him'],
    'n': ['n','en','in','and','an','inn','ne','any'],
    'o': ['o','oh','ow','owe','eau','ho','oo','0','zero','no','go','oa'],
    'p': ['p','pe','pee','pi','pb','be','3p','pa'],
    'q': ['q','cue','queue','ku','kyu','cute','you','que'],
    'r': ['r','ar','are','err','er','ora','aar','argh'],
    's': ['s','es','ess','ace','yes','as','iz','is','us'],
    't': ['t','te','tee','ti','tea','the','to','2','too'],
    'u': ['u','you','yew','yoo','yu','oo','who','hue','ew'],
    'v': ['v','ve','vee','vi','b','be','3v','vea'],
    'w': ['w','double u','doubleyou','double you','dubya','DoubleU','da'],
    'x': ['x','ex','eks','ecks','hex','next','text','sex'],
    'y': ['y','why','wai','wie','yee','yah','yeah','ya','ye'],
    'z': ['z','zee','zed','ze','said','set','zzz','xed']
  };

  // ── Hanyu (Simplified Chinese Characters) charMap ──
  // Har Hanzi ke liye browser zh-CN ke possible returns mapped hain
  var hanziCharMap = {
    // Batch 1: People & Family
    '人': ['人','rén','ren','ran','run','rn','仁','忍'],
    '女': ['女','nǚ','nu','nü','nv','lv','nyu','女人'],
    '男': ['男','nán','nan','nam','男人','男的'],
    '子': ['子','zǐ','zi','zhi','孩子','子女'],
    '母': ['母','mǔ','mu','moo','母亲','妈妈'],
    '父': ['父','fù','fu','foo','父亲','爸爸'],
    '兄': ['兄','xiōng','xiong','shong','兄弟','兄长'],
    '弟': ['弟','dì','di','dee','弟弟','兄弟'],
    // Batch 2: Body
    '手': ['手','shǒu','shou','show','手机','手心'],
    '口': ['口','kǒu','kou','ko','口水','入口'],
    '目': ['目','mù','mu','moo','目光','目前'],
    '耳': ['耳','ěr','er','are','耳朵','耳机'],
    '心': ['心','xīn','xin','shin','心里','心情'],
    '头': ['头','tóu','tou','toe','头发','头部'],
    '脚': ['脚','jiǎo','jiao','jyao','脚步','手脚'],
    '身': ['身','shēn','shen','shun','身体','身上'],
    // Batch 3: Nature
    '山': ['山','shān','shan','shan','山水','山上'],
    '水': ['水','shuǐ','shui','shway','水果','水里'],
    '火': ['火','huǒ','huo','hwor','火山','火车'],
    '木': ['木','mù','mu','moo','木头','木材'],
    '土': ['土','tǔ','tu','too','土地','泥土'],
    '日': ['日','rì','ri','ree','日出','日本'],
    '月': ['月','yuè','yue','yway','月亮','月份'],
    '风': ['风','fēng','feng','fung','风景','风水'],
    // Batch 4: Animals
    '马': ['马','mǎ','ma','mah','马路','马上'],
    '牛': ['牛','niú','niu','nyo','牛奶','牛肉'],
    '羊': ['羊','yáng','yang','yang','羊肉','绵羊'],
    '鱼': ['鱼','yú','yu','yoo','鱼肉','金鱼'],
    '鸟': ['鸟','niǎo','niao','nyow','小鸟','鸟儿'],
    '猫': ['猫','māo','mao','meow','猫咪','小猫'],
    '狗': ['狗','gǒu','gou','go','小狗','狗狗'],
    '虎': ['虎','hǔ','hu','hoo','老虎','虎虎'],
    // Batch 5: Food & Drink
    '饭': ['饭','fàn','fan','fahn','吃饭','米饭'],
    '茶': ['茶','chá','cha','chah','茶水','喝茶'],
    '果': ['果','guǒ','guo','gwor','水果','果汁'],
    '米': ['米','mǐ','mi','mee','米饭','大米'],
    '面': ['面','miàn','mian','myen','面条','面包'],
    '肉': ['肉','ròu','rou','row','牛肉','肉类'],
    '菜': ['菜','cài','cai','tsai','蔬菜','菜单'],
    // Batch 6: Common Verbs
    '来': ['来','lái','lai','lie','来吧','来去'],
    '去': ['去','qù','qu','choo','去吧','来去'],
    '吃': ['吃','chī','chi','chee','吃饭','吃东西'],
    '喝': ['喝','hē','he','huh','喝水','喝茶'],
    '说': ['说','shuō','shuo','shwor','说话','说什么'],
    '看': ['看','kàn','kan','kahn','看书','看看'],
    '走': ['走','zǒu','zou','dzow','走路','走开'],
    '坐': ['坐','zuò','zuo','dzwor','坐下','坐车'],
    // Batch 7: Numbers & Size
    '一': ['一','yī','yi','ee','一个','一二三','1','one'],
    '二': ['二','èr','er','are','二月','一二','2','two'],
    '三': ['三','sān','san','sahn','三个','三月','3','three'],
    '大': ['大','dà','da','dah','大人','大小'],
    '小': ['小','xiǎo','xiao','shyow','小心','大小'],
    '多': ['多','duō','duo','dwor','多少','很多'],
    '少': ['少','shǎo','shao','show','多少','少少'],
    '好': ['好','hǎo','hao','how','好人','好好'],
    // Batch 8: Place & Direction
    '上': ['上','shàng','shang','shahng','上面','上去'],
    '下': ['下','xià','xia','shyah','下面','下去'],
    '左': ['左','zuǒ','zuo','dzwor','左边','左右'],
    '右': ['右','yòu','you','yo','右边','左右'],
    '前': ['前','qián','qian','chyen','前面','前后'],
    '后': ['后','hòu','hou','hoe','后面','前后'],
    '家': ['家','jiā','jia','jyah','回家','家人'],
    '国': ['国','guó','guo','gwor','中国','国家']
  };

  // ── Russian Cyrillic charMap — browser ru-RU mein jo return karta hai ──
  var ruCharMap = {
    'А': ['а','a','ah','арбуз','а-а'],
    'Б': ['б','b','be','бэ','б-б'],
    'В': ['в','v','ve','вэ','в-в'],
    'Г': ['г','g','ge','гэ','г-г'],
    'Д': ['д','d','de','дэ','д-д'],
    'Е': ['е','ye','е-е','йе'],
    'Ё': ['ё','yo','ё-ё','йо'],
    'Ж': ['ж','zh','же','ж-ж'],
    'З': ['з','z','ze','зэ','з-з'],
    'И': ['и','ee','и-и','ии'],
    'Й': ['й','y','краткая','й-й','ий'],
    'К': ['к','k','ka','ка','к-к'],
    'Л': ['л','l','el','эл','л-л'],
    'М': ['м','m','em','эм','м-м'],
    'Н': ['н','n','en','эн','н-н'],
    'О': ['о','o','oh','о-о'],
    'П': ['п','p','pe','пэ','п-п'],
    'Р': ['р','r','er','эр','р-р'],
    'С': ['с','s','es','эс','с-с'],
    'Т': ['т','t','te','тэ','т-т'],
    'У': ['у','oo','u','у-у'],
    'Ф': ['ф','f','ef','эф','ф-ф'],
    'Х': ['х','kh','ha','ха','х-х'],
    'Ц': ['ц','ts','ce','цэ','ц-ц'],
    'Ч': ['ч','ch','che','чэ','ч-ч'],
    'Ш': ['ш','sh','sha','ша','ш-ш'],
    'Щ': ['щ','shch','shcha','ща','щ-щ'],
    'Ъ': ['ъ','tvyordy','hard sign','ъ-ъ'],
    'Ы': ['ы','y','yeru','ы-ы'],
    'Ь': ['ь','myagky','soft sign','ь-ь'],
    'Э': ['э','e','eh','э-э'],
    'Ю': ['ю','yu','ю-ю','йу'],
    'Я': ['я','ya','ya-ya','я-я','йа']
  };

  // ── Turkish Latin charMap ──
  var trCharMap = {
    'A': ['a','ah','araba','a-a'],
    'B': ['b','be','beh','b-b'],
    'C': ['c','j','je','jeh','c-c'],
    'Ç': ['ç','ch','che','cheh','ç-ç'],
    'D': ['d','de','deh','d-d'],
    'E': ['e','eh','ev','e-e'],
    'F': ['f','fe','feh','f-f'],
    'G': ['g','ge','geh','g-g'],
    'Ğ': ['ğ','yumuşak ge','soft g','yumusak ge','ğ-ğ','daa'],
    'H': ['h','he','heh','h-h'],
    'I': ['ı','uh','dotless i','i-i','ısı'],
    'İ': ['i','ee','dotted i','inek','i-i'],
    'J': ['j','je','jeh','jilet','j-j'],
    'K': ['k','ke','keh','k-k'],
    'L': ['l','le','leh','l-l'],
    'M': ['m','me','meh','m-m'],
    'N': ['n','ne','neh','n-n'],
    'O': ['o','oh','on','o-o'],
    'Ö': ['ö','eu','o umlaut','ö-ö'],
    'P': ['p','pe','peh','p-p'],
    'R': ['r','re','reh','r-r'],
    'S': ['s','se','seh','s-s'],
    'Ş': ['ş','sh','she','sheh','ş-ş'],
    'T': ['t','te','teh','t-t'],
    'U': ['u','oo','un','u-u'],
    'Ü': ['ü','uu','u umlaut','ü-ü','uzum'],
    'V': ['v','ve','veh','v-v'],
    'Y': ['y','ye','yeh','y-y'],
    'Z': ['z','ze','zeh','z-z']
  };

  // ── Irish Latin charMap ──
  var ieCharMap = {
    'A':  ['a','ah','abhainn','a-a'],
    'B':  ['b','be','beh','b-b'],
    'C':  ['c','k','ke','keh','c-c'],
    'D':  ['d','de','deh','d-d'],
    'E':  ['e','eh','ean','e-e'],
    'F':  ['f','fe','feh','f-f'],
    'G':  ['g','ge','geh','g-g'],
    'I':  ['i','ih','ih','i-i'],
    'L':  ['l','le','leh','l-l'],
    'M':  ['m','me','meh','m-m'],
    'N':  ['n','ne','neh','n-n'],
    'O':  ['o','oh','ol','o-o'],
    'P':  ['p','pe','peh','p-p'],
    'R':  ['r','re','reh','r-r'],
    'S':  ['s','se','seh','s-s'],
    'T':  ['t','te','teh','t-t'],
    'U':  ['u','uh','uisce','u-u'],
    'BH': ['bh','w','v','wh','b h','bh-bh'],
    'CH': ['ch','kh','kha','c h','ch-ch'],
    'DH': ['dh','gh','y','d h','dh-dh'],
    'FH': ['fh','h','f h','fh-fh'],
    'GH': ['gh','y','g h','gh-gh'],
    'MH': ['mh','w','v','m h','mh-mh'],
    'PH': ['ph','f','p h','ph-ph'],
    'SH': ['sh','h','s h','sh-sh'],
    'TH': ['th','h','t h','th-th'],
    'Á':  ['á','aw','aa','a fada','á-á'],
    'É':  ['é','ay','ay','e fada','é-é'],
    'Í':  ['í','ee','i fada','í-í'],
    'Ó':  ['ó','oh','ow','o fada','ó-ó'],
    'Ú':  ['ú','oo','u fada','ú-ú']
  };

  // ── Chinese ke liye zhCharMap + hanziCharMap dono merge karo ──
  var mergedZhMap = {};
  if(isChinese){
    // Pehle zhCharMap copy karo
    for(var _k in zhCharMap){ if(zhCharMap.hasOwnProperty(_k)) mergedZhMap[_k] = zhCharMap[_k]; }
    // Phir hanziCharMap add karo
    for(var _hk in hanziCharMap){ if(hanziCharMap.hasOwnProperty(_hk)) mergedZhMap[_hk] = hanziCharMap[_hk]; }
  }

  // Korean, Japanese, Chinese, Russian, ya English — sahi charMap choose karo
  var charMap = isKorean ? koCharMap : (isJapanese ? jaCharMap : (isChinese ? mergedZhMap : (isRussian ? ruCharMap : (isTurkish ? trCharMap : (isIrish ? ieCharMap : enCharMap)))));
  var lookupKey = (isKorean || isJapanese || isChinese || isRussian || isTurkish || isIrish) ? rawExpected : expected;

  var sr = new SRClass();
  sr.lang = isKorean ? 'ko-KR' : (isJapanese ? 'ja-JP' : (isChinese ? 'zh-CN' : (isRussian ? 'ru-RU' : (isTurkish ? 'tr-TR' : (isIrish ? 'ga-IE' : 'en-US')))));
  sr.continuous = true;
  sr.interimResults = true;
  sr.maxAlternatives = 10;

  sr.onresult = function(ev){
    // Sab results (interim + final) check karo
    var allHeard = [];
    for(var ri = 0; ri < ev.results.length; ri++){
      for(var ai = 0; ai < ev.results[ri].length; ai++){
        var raw = ev.results[ri][ai].transcript.trim();
        // Korean/Japanese/Chinese/Russian: spaces trim; English: lowercase + only alphanum
        if(isKorean || isJapanese || isChinese || isRussian || isTurkish || isIrish){
          raw = raw.replace(/\s+/g,' ').trim().toLowerCase();
        } else {
          raw = raw.toLowerCase().replace(/[^a-z0-9 ]/g,'');
        }
        if(raw) allHeard.push(raw);
      }
    }
    // DEBUG: console mein dekho browser kya sun raha hai
    console.log('[SpeakUp] Expected:', lookupKey, '| Korean:', isKorean, '| Japanese:', isJapanese, '| Chinese:', isChinese, '| Russian:', isRussian, '| Browser heard:', JSON.stringify(allHeard));

    var validList = charMap[lookupKey] || [lookupKey];
    var matched = false;
    var exp = (isKorean || isJapanese || isChinese || isRussian || isTurkish || isIrish) ? lookupKey : lookupKey.toLowerCase().replace(/[^a-z0-9]/g,'');

    // Har alternative check karo
    for(var hi = 0; hi < allHeard.length; hi++){
      var heard = allHeard[hi];
      var heardWords = heard.split(' ');
      // Exact full match
      if(heard === exp){ matched = true; break; }
      // charMap mein hai
      if(validList.indexOf(heard) !== -1){ matched = true; break; }
      // Korean/Japanese/Chinese/Russian: heard ke har character ko bhi check karo
      if(isKorean || isJapanese || isChinese || isRussian || isTurkish || isIrish){
        for(var ci = 0; ci < heard.length; ci++){
          if(validList.indexOf(heard[ci]) !== -1){ matched = true; break; }
        }
        if(matched) break;
        // Name-based match (e.g. user ne "기역" ya hiragana syllable bola)
        for(var wi2 = 0; wi2 < heardWords.length; wi2++){
          if(validList.indexOf(heardWords[wi2]) !== -1){ matched = true; break; }
        }
      } else {
        // Koi bhi word charMap mein hai
        for(var wi = 0; wi < heardWords.length; wi++){
          if(validList.indexOf(heardWords[wi]) !== -1){ matched = true; break; }
        }
      }
      if(matched) break;
    }

    if(matched){
      sr.stop();
      // ✅ SAHI — green box + auto next
      if(resEl) resEl.innerHTML=
        '<div style="background:linear-gradient(135deg,rgba(88,204,2,.18),rgba(46,229,157,.08));border:2px solid rgba(88,204,2,.5);border-radius:14px;padding:12px 16px;text-align:center;animation:correctPulse .6s ease;">'
        +'<div style="font-size:28px;margin-bottom:4px;">🎉</div>'
        +'<div style="font-family:Fredoka One,sans-serif;font-size:18px;color:#58CC02;margin-bottom:2px;">Zabardast!</div>'
        +'<div style="font-size:12px;color:rgba(255,255,255,.55);">Perfect! Next letter coming...</div>'
        +'</div>';
      if(btn) btn.style.display='none';
      setTimeout(function(){ if(typeof pcNx==='function') pcNx(); }, 1200);
    } else {
      // ❌ GALAT — retry
      if(resEl) resEl.innerHTML=
        '<div style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,75,75,.3);border-radius:12px;padding:10px;font-size:13px;">'
        +'<div style="color:#FF4B4B;font-weight:700;margin-bottom:4px;">😩 Dobara suno phir bolo</div>'
        +'<div style="color:rgba(255,255,255,.5);">Tumne bola: "<b style="color:#FFD166">'+allHeard.join(', ')+'</b>" — "<b style="color:#fff">'+((isKorean || isJapanese || isChinese || isRussian || isTurkish || isIrish) ? lookupKey : exp.toUpperCase())+'</b>" bolna tha</div>'
        +'</div>';
      if(btn){ btn.textContent='🎤 Dobara Bolo'; btn.style.background=''; btn.disabled=false; }
    }
  };

  sr.onerror = function(){
    if(btn){ btn.textContent='🎤 Try Speaking'; btn.style.background=''; btn.disabled=false; }
  };
  sr.onend = function(){
    if(btn && btn.disabled){ btn.textContent='🎤 Try Speaking'; btn.style.background=''; btn.disabled=false; }
  };
  sr.start();
}

// ── STEP: Match exercise ──
function renderPCMatch(s, b){
  var letters = s.letters.slice(0, 4); // max 4 pairs
  if(letters.length < 2){ pcNx(); return; }

  // Left: chars, Right: names — shuffled
  var leftItems  = letters.map(function(l,i){ return {id:i, text: l.char||l.character||l.letter||'?', type:'char'}; });
  var rightItems = letters.map(function(l,i){ return {id:i, text: l.name||l.letterName||(l.char||'?'), type:'name'}; });
  rightItems.sort(function(){ return Math.random()-.5; });

  var matchId = 'pcmatch_' + _pcSI;
  var _selected = null;
  var _matched = {};

  b.innerHTML = '<div class="a">'
    + '<div style="font-family:Fredoka One,sans-serif;font-size:16px;color:#C77DFF;text-align:center;margin-bottom:6px;">📅 Match</div>'
    + '<div style="font-size:12px;color:rgba(255,255,255,.5);text-align:center;margin-bottom:16px;">Match the letter with its name</div>'
    + '<div id="' + matchId + '" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">'
    + leftItems.map(function(it){
        return '<button id="mcL_'+it.id+'" data-id="'+it.id+'" data-side="L" onclick="pcMatchClick(this,\''+matchId+'\')" '
          + 'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:18px 8px;font-family:serif;font-size:28px;color:#fff;cursor:pointer;">'
          + it.text + '</button>';
      }).join('')
    + rightItems.map(function(it){
        return '<button id="mcR_'+it.id+'" data-id="'+it.id+'" data-side="R" onclick="pcMatchClick(this,\''+matchId+'\')" '
          + 'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:14px 8px;font-family:Fredoka One,sans-serif;font-size:13px;color:#fff;cursor:pointer;">'
          + it.text + '</button>';
      }).join('')
    + '</div>'
    + '<div id="pcMatchFb_'+_pcSI+'" style="text-align:center;min-height:40px;margin-bottom:10px;"></div>'
    + '</div>';

  window._pcMatchState = { selected:null, matched:{}, total:letters.length, done:0, stepI:_pcSI };
}

function pcMatchClick(btn, containerId){
  var state = window._pcMatchState;
  if(!state) return;
  var id   = parseInt(btn.dataset.id);
  var side = btn.dataset.side;
  var key  = side + id;
  if(state.matched[key]) return; // already matched

  if(!state.selected){
    state.selected = {btn:btn, id:id, side:side, key:key};
    btn.style.borderColor = '#C77DFF';
    btn.style.background  = 'rgba(199,125,255,.2)';
  } else {
    var prev = state.selected;
    state.selected = null;
    // Reset previous highlight
    prev.btn.style.borderColor = 'rgba(255,255,255,.15)';
    prev.btn.style.background  = 'rgba(255,255,255,.07)';

    if(prev.side === side){ // same side click — just reselect new
      btn.style.borderColor = '#C77DFF';
      btn.style.background  = 'rgba(199,125,255,.2)';
      state.selected = {btn:btn, id:id, side:side};
      return;
    }
    if(prev.id === id){ // MATCH!
      prev.btn.style.background  = 'rgba(88,204,2,.25)';
      prev.btn.style.borderColor = '#58CC02';
      prev.btn.style.color       = '#58CC02';
      prev.btn.disabled = true;
      btn.style.background  = 'rgba(88,204,2,.25)';
      btn.style.borderColor = '#58CC02';
      btn.style.color       = '#58CC02';
      btn.disabled = true;
      state.matched[prev.key] = true;
      state.matched[side+id]  = true;
      state.done++;
      var fb = document.getElementById('pcMatchFb_'+state.stepI);
      if(fb) fb.innerHTML = '<div style="color:#58CC02;font-family:Fredoka One,sans-serif;">✓ Sahi Match! (' + state.done + '/' + state.total + ')</div>';
      if(state.done >= state.total){
        setTimeout(function(){
          var fb2 = document.getElementById('pcMatchFb_'+state.stepI);
          if(fb2) fb2.innerHTML += '<button class="bg" onclick="pcNx()" style="width:100%;margin-top:10px;">🎉 Aagey →</button>';
        }, 600);
      }
    } else { // WRONG
      prev.btn.style.background = 'rgba(255,75,75,.15)';
      prev.btn.style.borderColor = '#FF4B4B';
      btn.style.background = 'rgba(255,75,75,.15)';
      btn.style.borderColor = '#FF4B4B';
      var fb3 = document.getElementById('pcMatchFb_'+state.stepI);
      if(fb3) fb3.innerHTML = '<div style="color:#FF4B4B;font-size:12px;">✗ Wrong — Try again</div>';
      setTimeout(function(){
        prev.btn.style.background = 'rgba(255,255,255,.07)';
        prev.btn.style.borderColor = 'rgba(255,255,255,.15)';
        btn.style.background = 'rgba(255,255,255,.07)';
        btn.style.borderColor = 'rgba(255,255,255,.15)';
      }, 800);
    }
  }
}

// ── STEP: Done ──
function renderPCDone(s, b){
  var nfo = PRE_CLASS_INFO[s.lang] || {};
  var isRevision = s.isRevision;
  var pct = _pcTotal > 0 ? Math.round((_pcScore/_pcTotal)*100) : 0;
  var col = pct>=80?'#58CC02':pct>=50?'#FFD166':'#FF4B4B';
  var wrongHtml = '';
  if(_pcWrongLetters.length > 0){
    var uniq = [], seen = {};
    _pcWrongLetters.forEach(function(c){ if(!seen[c]){ seen[c]=1; uniq.push(c); } });
    wrongHtml = '<div style="background:rgba(255,75,75,.08);border:1px solid rgba(255,75,75,.2);border-radius:14px;padding:12px;margin-bottom:14px;">'
      + '<div style="font-size:11px;color:rgba(255,75,75,.7);margin-bottom:8px;font-weight:700;">&#128337; Dobara practice karo:</div>'
      + '<div style="display:flex;flex-wrap:wrap;gap:8px;">'
      + uniq.map(function(c){ return '<span style="background:rgba(255,75,75,.15);border:1px solid rgba(255,75,75,.3);border-radius:10px;padding:5px 12px;font-family:serif;font-size:20px;color:#FF4B4B;">'+c+'</span>'; }).join('')
      + '</div></div>';
  }
  var r=36, circ=2*Math.PI*r;
  var dash = circ - (pct/100)*circ;
  var scoreCircle = '<svg width="96" height="96" viewBox="0 0 96 96" style="margin:0 auto 10px;display:block;">'
    + '<circle cx="48" cy="48" r="'+r+'" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="6"/>'
    + '<circle cx="48" cy="48" r="'+r+'" fill="none" stroke="'+col+'" stroke-width="6" stroke-linecap="round"'
    + ' stroke-dasharray="'+circ.toFixed(1)+'" stroke-dashoffset="'+dash.toFixed(1)+'" transform="rotate(-90 48 48)"/>'
    + '<text x="48" y="54" text-anchor="middle" font-family="Fredoka One,sans-serif" font-size="20" fill="'+col+'">'+pct+'%</text>'
    + '</svg>';
  var xpGain = nfo.xp || 50;
  b.innerHTML = '<div class="a" style="text-align:center;padding:16px 0 30px;">'
    + scoreCircle
    + '<div style="font-family:Fredoka One,sans-serif;font-size:24px;color:#C77DFF;margin-bottom:4px;">'
    + (isRevision ? 'Revision Mukammal!' : 'Pre-Class Complete!') + '</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:16px;">'
    + (_pcScore + '/' + _pcTotal + ' sahi jawab') + '</div>'
    + (pct>=80
       ? '<div style="background:rgba(88,204,2,.1);border:1px solid rgba(88,204,2,.25);border-radius:14px;padding:10px;margin-bottom:14px;font-size:13px;color:#58CC02;">🎉 Zabardast performance!</div>'
       : pct>=50
       ? '<div style="background:rgba(255,209,0,.08);border:1px solid rgba(255,209,0,.2);border-radius:14px;padding:10px;margin-bottom:14px;font-size:13px;color:#FFD166;">😃 Good! Practice a bit more</div>'
       : '<div style="background:rgba(255,75,75,.08);border:1px solid rgba(255,75,75,.2);border-radius:14px;padding:10px;margin-bottom:14px;font-size:13px;color:#FF4B4B;">😩 Practice again!</div>')
    + wrongHtml
    + (!isRevision ? '<div style="background:rgba(255,215,0,.1);border:1px solid rgba(255,215,0,.25);border-radius:14px;padding:10px;margin-bottom:16px;font-family:Fredoka One,sans-serif;font-size:15px;color:#FFD166;">⭐ +'+xpGain+' XP milega!</div>' : '')
    + (isRevision
        ? '<button class="bg" onclick="exitLesson()" style="width:100%;min-height:52px;">&#127968; Dashboard Pe Wapas</button>'
        : '<button class="bg" onclick="pcFinishAndComplete(\'' + s.lang + '\')" style="width:100%;margin-bottom:10px;min-height:52px;">&#127941; Badge Lo!</button>'
          + '<button class="bo" onclick="exitLesson()" style="width:100%;min-height:44px;">Baad Mein</button>')
    + '</div>';
  if(!isRevision && typeof launchConfetti === 'function') setTimeout(launchConfetti, 400);
}

// Safe data store for quiz answers — avoids passing special chars through onclick HTML
window._pcQData = {};

// ── STEP: Listening Practice ──
function renderPCListen(s, b){
  var l = s.letter;
  var char = l.char || l.character || l.letter || '?';
  var name = l.name || l.letterName || char;
  var pron = l.pronunciation || l.sound || name;
  var tid = _storeTTS ? _storeTTS(pron, l.example||'') : 0;
  var qId = 'pclisten_'+_pcSI;
  _pcTotal++;
  // Store answer data safely (no HTML encoding issues)
  window._pcQData[qId] = { correct: char, options: s.options };
  var optHtml = s.options.map(function(o, oi){
    var oc = o.char || o.character || o.letter || '?';
    return '<button data-qid="'+qId+'" data-oi="'+oi+'" onclick="pcListenAnswer(this)" '
      + 'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:20px 10px;font-family:serif;font-size:32px;color:#fff;cursor:pointer;min-height:72px;touch-action:manipulation;">'
      + oc + '</button>';
  }).join('');
  b.innerHTML = '<div class="a">'
    + '<div style="text-align:center;background:rgba(199,125,255,.08);border:1px solid rgba(199,125,255,.2);border-radius:18px;padding:20px;margin-bottom:16px;">'
    + '<div style="font-size:13px;color:rgba(255,255,255,.6);margin-bottom:14px;">🔊 Which letter makes this sound?</div>'
    + (tid
      ? '<button class="spk-btn spk-listen" onclick="ttsPlay('+tid+')" style="font-size:15px;padding:12px 24px;min-height:52px;touch-action:manipulation;">🔊 Awaaz Suno</button>'
        + ' <button class="spk-btn spk-slow" onclick="ttsSlow('+tid+')" style="min-height:52px;touch-action:manipulation;">🐢 Dheere</button>'
      : '<button class="spk-btn spk-listen" onclick="pcPlayFallback(\''+_pcSafeId(pron)+'\')" style="min-height:52px;touch-action:manipulation;">🔊 Awaaz Suno</button>')
    + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;" id="'+qId+'">'
    + optHtml + '</div></div>';
  setTimeout(function(){ if(tid && window.ttsPlay) ttsPlay(tid); else if(window.spk) spk(pron); }, 500);
}

function pcListenAnswer(btn){
  var qId = btn.dataset.qid;
  var oi = parseInt(btn.dataset.oi);
  var data = window._pcQData[qId]; if(!data) return;
  var container = document.getElementById(qId); if(!container) return;
  var selected = data.options[oi].char || data.options[oi].character || data.options[oi].letter || '?';
  var correct = data.correct;
  container.querySelectorAll('button').forEach(function(b){ b.disabled=true; });
  var ok = selected === correct;
  if(ok) _pcScore++; else _pcWrongLetters.push(correct);
  _pcApplyFeedback(btn, container, ok, correct, 'char');
  _pcAddNext(container.parentNode);
}

// ── STEP: Recognition Quiz ──
function renderPCRecog(s, b){
  var l = s.letter;
  var char = l.char || l.character || l.letter || '?';
  var name = l.name || l.letterName || char;
  var qId = 'pcrecog_'+_pcSI;
  _pcTotal++;
  window._pcQData[qId] = { correct: name, options: s.options };
  var optHtml = s.options.map(function(o, oi){
    var on = o.name || o.letterName || (o.char||'?');
    var op = o.pronunciation || o.sound || on;
    // Sirf pronunciation dikhao (e.g. "Dee", na "D / dee")
    var display = op.charAt(0).toUpperCase() + op.slice(1).toLowerCase();
    return '<button data-qid="'+qId+'" data-oi="'+oi+'" onclick="pcRecogAnswer(this)" '
      + 'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:14px 8px;font-family:Fredoka One,sans-serif;font-size:16px;color:#fff;cursor:pointer;min-height:60px;line-height:1.4;touch-action:manipulation;">'
      + display + '</button>';
  }).join('');
  var recogQ = 'What is the name of this letter?';
  var recogQAudio = recogQ + ' ' + char;
  b.innerHTML = '<div class="a">'
    + '<div style="text-align:center;background:linear-gradient(135deg,rgba(199,125,255,.15),rgba(199,125,255,.05));border:1.5px solid rgba(199,125,255,.35);border-radius:20px;padding:28px;margin-bottom:16px;">'
    + '<div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:10px;">What is the name of this letter?</div>'
    + '<div style="font-size:72px;font-family:serif;color:#C77DFF;font-weight:700;animation:letterPop .4s cubic-bezier(.34,1.56,.64,1);">'+char+'</div>'
    + '<div style="font-size:20px;color:rgba(255,255,255,.4);margin-top:6px;font-family:Fredoka One,sans-serif;">'+name+'</div>'
    + '</div>'
    + '<button onclick="if(window.spk)window.spk(this.dataset.q)" data-q="'+recogQAudio+'" style="width:100%;margin-bottom:12px;padding:12px;border-radius:14px;border:none;background:rgba(91,141,239,.2);border:1.5px solid rgba(91,141,239,.4);color:#fff;font-family:Fredoka One,sans-serif;font-size:15px;cursor:pointer;">🔊 Sawaal Suno</button>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;" id="'+qId+'">'
    + optHtml + '</div></div>';
}

function pcRecogAnswer(btn){
  var qId = btn.dataset.qid;
  var oi = parseInt(btn.dataset.oi);
  var data = window._pcQData[qId]; if(!data) return;
  var container = document.getElementById(qId); if(!container) return;
  var selected = data.options[oi].name || data.options[oi].letterName || (data.options[oi].char||'?');
  var correct = data.correct;
  container.querySelectorAll('button').forEach(function(b){ b.disabled=true; });
  var ok = selected === correct;
  if(ok) _pcScore++; else { _pcWrongLetters.push(correct); if(typeof loseHeart==='function') loseHeart(); }
  _pcApplyFeedback(btn, container, ok, correct, 'name');
  _pcAddNext(container.parentNode);
}

// ── STEP: Example Word Match ──
function renderPCExampleMatch(s, b){
  var l = s.letter;
  var char = l.char || l.character || l.letter || '?';
  var example = l.example || char;
  var qId = 'pcex_'+_pcSI;
  _pcTotal++;
  window._pcQData[qId] = { correct: char, options: s.options };
  var optHtml = s.options.map(function(o, oi){
    var oc = o.char || o.character || o.letter || '?';
    return '<button data-qid="'+qId+'" data-oi="'+oi+'" onclick="pcExAnswer(this)" '
      + 'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:20px 10px;font-family:serif;font-size:32px;color:#fff;cursor:pointer;min-height:72px;touch-action:manipulation;">'
      + oc + '</button>';
  }).join('');
  var exQ = 'Yeh word kis letter se shuru hota hai? ' + example;
  b.innerHTML = '<div class="a">'
    + '<div style="text-align:center;background:rgba(88,204,2,.08);border:1px solid rgba(88,204,2,.2);border-radius:18px;padding:20px;margin-bottom:16px;">'
    + '<div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:10px;">📚 Which letter does this word start with?</div>'
    + '<div style="font-family:Fredoka One,sans-serif;font-size:26px;color:#58CC02;animation:letterPop .4s cubic-bezier(.34,1.56,.64,1);">'+example+'</div>'
    + (l.urdu ? '<div style="font-size:17px;color:#fff;font-family:serif;margin-top:6px;direction:rtl;">' + l.urdu + '</div>' : '')
    + (l.meaning ? '<div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:2px;">(' + l.meaning + ')</div>' : '')
    + '</div>'
    + '<button onclick="if(window.spk)window.spk(this.dataset.q)" data-q="'+exQ+'" style="width:100%;margin-bottom:12px;padding:12px;border-radius:14px;border:none;background:rgba(88,204,2,.15);border:1.5px solid rgba(88,204,2,.3);color:#fff;font-family:Fredoka One,sans-serif;font-size:15px;cursor:pointer;">🔊 Sawaal Suno</button>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;" id="'+qId+'">'
    + optHtml + '</div></div>';
}

function pcExAnswer(btn){
  var qId = btn.dataset.qid;
  var oi = parseInt(btn.dataset.oi);
  var data = window._pcQData[qId]; if(!data) return;
  var container = document.getElementById(qId); if(!container) return;
  var selected = data.options[oi].char || data.options[oi].character || data.options[oi].letter || '?';
  var correct = data.correct;
  container.querySelectorAll('button').forEach(function(b){ b.disabled=true; });
  var ok = selected === correct;
  if(ok) _pcScore++; else { _pcWrongLetters.push(correct); if(typeof loseHeart==='function') loseHeart(); }
  _pcApplyFeedback(btn, container, ok, correct, 'char');
  _pcAddNext(container.parentNode);
}

// ── STEP: Fill in the Blank ──
function renderPCFillBlank(s, b){
  var l = s.letter;
  var char = l.char || l.character || l.letter || '?';
  var example = l.example || '';
  var qId = 'pcfill_'+_pcSI;
  _pcTotal++;
  window._pcQData[qId] = { correct: char, options: s.options };
  var optHtml = s.options.map(function(o, oi){
    var oc = o.char || o.character || o.letter || '?';
    return '<button data-qid="'+qId+'" data-oi="'+oi+'" onclick="pcFillAnswer(this)" '
      + 'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:20px 10px;font-family:serif;font-size:32px;color:#fff;cursor:pointer;min-height:72px;touch-action:manipulation;">'
      + oc + '</button>';
  }).join('');
  b.innerHTML = '<div class="a">'
    + '<div style="text-align:center;background:rgba(91,141,239,.08);border:1px solid rgba(91,141,239,.2);border-radius:18px;padding:24px;margin-bottom:16px;">'
    + '<div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:12px;">&#9998; Kaunsa letter missing hai?</div>'
    + '<div style="font-family:Fredoka One,sans-serif;font-size:28px;color:#5B8DEF;letter-spacing:4px;">'
    + '<span style="display:inline-block;border-bottom:3px solid #C77DFF;min-width:30px;color:#C77DFF;font-size:28px;animation:blink 1s ease infinite;">?</span>'
    + (example.length > 1 ? example.slice(1) : '')
    + '</div>'
    + (l.urdu ? '<div style="font-size:17px;color:#fff;font-family:serif;margin-top:6px;direction:rtl;">' + l.urdu + '</div>' : '')
    + (l.meaning ? '<div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:2px;">(' + l.meaning + ')</div>' : '')
    + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;" id="'+qId+'">'
    + optHtml + '</div></div>';
}

function pcFillAnswer(btn){
  var qId = btn.dataset.qid;
  var oi = parseInt(btn.dataset.oi);
  var data = window._pcQData[qId]; if(!data) return;
  var container = document.getElementById(qId); if(!container) return;
  var selected = data.options[oi].char || data.options[oi].character || data.options[oi].letter || '?';
  var correct = data.correct;
  container.querySelectorAll('button').forEach(function(b){ b.disabled=true; });
  var ok = selected === correct;
  if(ok) _pcScore++; else _pcWrongLetters.push(correct);
  if(!ok && typeof loseHeart==="function") loseHeart();
  _pcApplyFeedback(btn, container, ok, correct, 'char');
  _pcAddNext(container.parentNode);
}

// ── STEP: Speed Round ──
var _pcSpeedState = null;

function renderPCSpeed(s, b){
  var qs = s.questions;
  if(!qs || !qs.length){ pcNx(); return; }
  _pcSpeedState = { questions:qs, current:0, score:0, total:qs.length, timer:null };
  _pcSpeedRender();
}

function _pcSpeedRender(){
  var bd = document.getElementById('lBd');
  var state = _pcSpeedState;
  if(!state || !bd) return;
  if(state.current >= state.questions.length){ _pcSpeedFinish(bd); return; }
  var q = state.questions[state.current];
  var l = q.letter;
  var char = l.char || l.character || l.letter || '?';
  var name = l.name || l.letterName || char;
  var pron = l.pronunciation || l.sound || name;
  var tid = _storeTTS ? _storeTTS(pron, l.example||'') : 0;
  var qId = 'pcspd_'+state.current;
  // Store data safely
  window._pcQData[qId] = { correct: q.qtype === 'listen' ? char : name, options: q.options, qtype: q.qtype };

  var qHtml, optHtml;
  if(q.qtype === 'listen'){
    qHtml = '<div style="font-size:13px;color:rgba(255,255,255,.6);margin-bottom:12px;">🔊 Awaaz sun ke sahi letter dhundo:</div>'
      + (tid
        ? '<button class="spk-btn spk-listen" onclick="ttsPlay('+tid+')" style="min-height:48px;touch-action:manipulation;">🔊 Awaaz Suno</button>'
        : '');
    optHtml = q.options.map(function(o, oi){
      var oc = o.char || o.character || o.letter || '?';
      return '<button data-qid="'+qId+'" data-oi="'+oi+'" onclick="_pcSpeedAnswer(this)" '
        + 'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:16px 8px;font-family:serif;font-size:28px;color:#fff;cursor:pointer;min-height:64px;touch-action:manipulation;">'
        + oc + '</button>';
    }).join('');
    if(tid) setTimeout(function(){ if(window.ttsPlay) ttsPlay(tid); }, 300);
  } else {
    qHtml = '<div style="font-size:13px;color:rgba(255,255,255,.6);margin-bottom:10px;">What is the name of this letter?</div>'
      + '<div style="font-size:56px;font-family:serif;color:#C77DFF;font-weight:700;animation:letterPop .4s cubic-bezier(.34,1.56,.64,1);">'+char+'</div>';
    optHtml = q.options.map(function(o, oi){
      var on = o.name || o.letterName || (o.char||'?');
      var op = o.pronunciation || o.sound || on;
      var display = on + (op !== on ? ' / '+op : '');
      return '<button data-qid="'+qId+'" data-oi="'+oi+'" onclick="_pcSpeedAnswer(this)" '
        + 'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:12px 6px;font-family:Fredoka One,sans-serif;font-size:11px;color:#fff;cursor:pointer;min-height:56px;line-height:1.4;touch-action:manipulation;">'
        + display + '</button>';
    }).join('');
  }

  bd.innerHTML = '<div class="a">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">'
    + '<div style="font-family:Fredoka One,sans-serif;font-size:13px;color:#FFD166;">⚡ Speed Round</div>'
    + '<div id="pcspeed_timer" style="font-family:Fredoka One,sans-serif;font-size:22px;color:#FF4B4B;min-width:40px;text-align:right;">5</div>'
    + '</div>'
    + '<div style="height:6px;background:rgba(255,255,255,.07);border-radius:6px;overflow:hidden;margin-bottom:12px;">'
    + '<div id="pcspeed_timerbar" style="height:100%;width:100%;border-radius:6px;background:linear-gradient(90deg,#FFD166,#FF4B4B);transition:width 5s linear;"></div>'
    + '</div>'
    + '<div style="font-size:11px;color:rgba(255,255,255,.4);text-align:center;margin-bottom:10px;">Sawaal '+(state.current+1)+'/'+state.total+' | Score: '+state.score+'</div>'
    + '<div style="text-align:center;background:rgba(199,125,255,.08);border:1px solid rgba(199,125,255,.2);border-radius:16px;padding:16px;margin-bottom:14px;">'
    + qHtml + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;" id="'+qId+'">'
    + optHtml + '</div></div>';

  if(state.timer) clearInterval(state.timer);
  var timeLeft = 5;
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    var tb = document.getElementById('pcspeed_timerbar');
    if(tb) tb.style.width = '0%';
  }); });
  state.timer = setInterval(function(){
    timeLeft--;
    var td = document.getElementById('pcspeed_timer');
    if(td) td.textContent = timeLeft;
    if(timeLeft <= 0){
      clearInterval(state.timer); state.timer = null;
      var c2 = document.getElementById(qId);
      if(c2) c2.querySelectorAll('button').forEach(function(b){ b.disabled=true; });
      _pcWrongLetters.push(char); _pcTotal++;
      if(typeof loseHeart==='function') loseHeart();
      state.current++;
      setTimeout(_pcSpeedRender, 600);
    }
  }, 1000);
}

function _pcSpeedAnswer(btn){
  var state = _pcSpeedState; if(!state) return;
  if(state.timer){ clearInterval(state.timer); state.timer=null; }
  var qId = btn.dataset.qid;
  var oi = parseInt(btn.dataset.oi);
  var data = window._pcQData[qId]; if(!data) return;
  var container = document.getElementById(qId); if(!container) return;
  container.querySelectorAll('button').forEach(function(b){ b.disabled=true; });
  var selected, correct = data.correct;
  if(data.qtype === 'listen'){
    selected = data.options[oi].char || data.options[oi].character || data.options[oi].letter || '?';
  } else {
    selected = data.options[oi].name || data.options[oi].letterName || (data.options[oi].char||'?');
  }
  var ok = selected === correct;
  if(ok){ _pcScore++; state.score++; } else { _pcWrongLetters.push(correct); if(typeof loseHeart==='function') loseHeart(); }
  _pcTotal++;
  btn.style.background = ok ? 'rgba(88,204,2,.3)' : 'rgba(255,75,75,.3)';
  btn.style.borderColor = ok ? '#58CC02' : '#FF4B4B';
  btn.style.color = ok ? '#58CC02' : '#FF4B4B';
  var fb = document.createElement('div');
  fb.style.cssText = 'text-align:center;padding:6px;font-family:Fredoka One,sans-serif;font-size:14px;color:'+(ok?'#58CC02':'#FF4B4B')+';';
  fb.textContent = ok ? '\u2713 Sahi!' : '\u2717 Wrong \u2014 '+correct;
  container.parentNode.appendChild(fb);
  state.current++;
  setTimeout(_pcSpeedRender, 700);
}

function _pcSpeedFinish(b){
  var state = _pcSpeedState; if(!state) return;
  var col = state.score >= 8 ? '#58CC02' : state.score >= 5 ? '#FFD166' : '#FF4B4B';
  b.innerHTML = '<div class="a" style="text-align:center;padding:24px 0;">'
    + '<div style="font-size:56px;margin-bottom:10px;animation:heartbeat 1s ease infinite;">⚡</div>'
    + '<div style="font-family:Fredoka One,sans-serif;font-size:22px;color:#FFD166;margin-bottom:6px;">Speed Round Done!</div>'
    + '<div style="font-family:Fredoka One,sans-serif;font-size:48px;color:'+col+';margin-bottom:4px;">'+state.score+'/'+state.total+'</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:20px;">'+(state.score>=8?'Zabardast! Tum champion ho!':state.score>=5?'Acha performance!':'Thodi aur practice karo!')+'</div>'
    + '<button class="bg" onclick="pcNx()" style="width:100%;min-height:52px;touch-action:manipulation;">✅ Results Dekho!</button>'
    + '</div>';
}

// ── Shared helpers ──
function _pcSafeId(text){
  // Store text in a lookup table, return safe numeric ID
  if(!window._pcTextStore) window._pcTextStore = {};
  var id = 'pts_'+Object.keys(window._pcTextStore).length;
  window._pcTextStore[id] = text;
  return id;
}

function pcPlayFallback(safeId){
  var text = window._pcTextStore && window._pcTextStore[safeId];
  if(text && window.spk) spk(text);
}

function _pcApplyFeedback(btn, container, ok, correct, type){
  btn.style.background  = ok ? 'rgba(88,204,2,.3)'  : 'rgba(255,75,75,.3)';
  btn.style.borderColor = ok ? '#58CC02' : '#FF4B4B';
  btn.style.color       = ok ? '#58CC02' : '#FF4B4B';
  if(!ok){
    container.querySelectorAll('button').forEach(function(b2){
      var val = type==='char'
        ? (b2.textContent.trim())
        : (b2.textContent.trim());
      if(val === correct || val.indexOf(correct)===0){
        b2.style.background  = 'rgba(88,204,2,.3)';
        b2.style.borderColor = '#58CC02';
        b2.style.color       = '#58CC02';
      }
    });
  }
}

function _pcAddNext(parent){
  var nx = document.createElement('button');
  nx.className = 'bg';
  nx.style.cssText = 'width:100%;margin-top:12px;min-height:52px;touch-action:manipulation;';
  nx.textContent = 'Next →';
  nx.onclick = function(){
    if(_pcRendering) return; // double tap guard
    nx.disabled = true;      // ek baar click ke baad disable
    pcNx();
  };
  parent.appendChild(nx);
}