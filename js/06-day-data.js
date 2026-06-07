// ══════════════════════════════════════════════════
// SpeakUp v8 — 06-day-data.js
// ALL_DAYS — lesson content per day (vocab, sentences, quizzes)
// ══════════════════════════════════════════════════

// ============================================================
// DAY DATA — Each day has: theme, vocab, sentences, grammar, story, quizzes
// 30day = full data per day (2hr)
// 60day = half data per day (1hr) — picks first half of each array
// 90day = quarter data per day (30min) — picks first quarter
// ============================================================

// ============================================================
// ALL DAYS DATA — per language
// ALL_DAYS['en'] = English days, ALL_DAYS['fr'] = French days, etc.
// ============================================================
const ALL_DAYS = {};

// ── ENGLISH ──
// Array format: ALL_DAYS['en'][1] = Lesson 1, [2] = Lesson 2 ... [30] = Lesson 30
// App automatically divides for 30/60/90 day courses in buildSteps()
ALL_DAYS['en'] = [];

ALL_DAYS['en'][1] = {
theme: 'بنیادی تعارف',
themeEn: 'Basic Introductions',
emoji: '👋',
color: '#2EE59D',
scene: {
emoji: '🏫',
title: 'Pehla Din School Mein',
desc: 'Ahmed naya student hai.',
bg: 'linear-gradient(135deg, #1a3a28, #0f2d20)',
characters: [
{emoji: '👦', name: 'Ahmed', role: 'Tum (Student)'},
{emoji: '👧', name: 'Sara', role: 'Nayi Dost'},
{emoji: '👨\u200d🏫', name: 'Mr. Ali', role: 'Teacher'}
]
},
vocab: [
{ w: 'Hello', u: 'ہیلو / سلام', p: 'HEL-oh', ex: '"Hello! My name is Ahmed!"', tip: 'Dost aur anjaan dono ko bol sakte ho — din ke kisi bhi waqt', visual: { emoji: '👋', scene: 'Ahmed class mein haath hilata hai aur muskurata hai', memoryTrick: 'HELLO = H se Haath Hilana', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Hello sir!"'}, {emoji:'💼', place:'Office', example:'"Hello everyone!"'}, {emoji:'📱', place:'Phone', example:'"Hello? Ahmed speaking!"'} ], mistake: '⚠️ Galti: "Helo" mat kaho — Hello kaho, L double hai!', level: 1 },
{ w: 'My', u: 'میرا', p: 'MY', ex: '"My name is Sara."', tip: 'Jab koi cheez aapki ho', visual: { emoji: '🙋\u200d♂️', scene: 'Apne aap ki taraf ishara', memoryTrick: 'My = Mera', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"My bag is here."'}, {emoji:'💼', place:'Office', example:'"My desk."'}, {emoji:'🏠', place:'Ghar', example:'"My room."'} ], mistake: '⚠️ Galti: "Me name" ghalat hai.', level: 1 },
{ w: 'Name', u: 'نام', p: 'NAYM', ex: '"My name is Ali."', tip: 'Pehchan batane ke liye', visual: { emoji: '🏷️', scene: 'Name tag dikhana', memoryTrick: 'Name = Naam', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"What is your name?"'}, {emoji:'💼', place:'Office', example:'"Sign your name."'}, {emoji:'📱', place:'Phone', example:'"Name please?"'} ], mistake: '⚠️ Galti: "Nam" nahi, "Name" kaho.', level: 1 },
{ w: 'Is', u: 'ہے', p: 'IZ', ex: '"He is a boy."', tip: 'Ek shakhs ya cheez ke liye', visual: { emoji: '👇', scene: 'Ek cheez ki taraf ishara', memoryTrick: 'Is = Hai (Single)', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"It is a book."'}, {emoji:'💼', place:'Office', example:'"He is boss."'}, {emoji:'🏠', place:'Ghar', example:'"She is mom."'} ], mistake: '⚠️ Galti: I ke sath Is nahi lagta.', level: 1 },
{ w: 'I', u: 'میں', p: 'EYE', ex: '"I am happy."', tip: 'Apne bare mein baat karte waqt', visual: { emoji: '👤', scene: 'Khud ko point karna', memoryTrick: 'I = Eye (Aankh) jaisi aawaz', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"I am early."'}, {emoji:'💼', place:'Office', example:'"I am ready."'}, {emoji:'🏠', place:'Ghar', example:'"I am here."'} ], mistake: '⚠️ Galti: "i" hamesha capital likha jata hai.', level: 1 },
{ w: 'Am', u: 'ہوں', p: 'AM', ex: '"I am a student."', tip: 'Sirf I ke sath lagta hai', visual: { emoji: '🤝', scene: 'I aur Am hamesha sath hain', memoryTrick: 'I AM best friends', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"I am Ahmed."'}, {emoji:'💼', place:'Office', example:'"I am tired."'}, {emoji:'🏠', place:'Ghar', example:'"I am eating."'} ], mistake: '⚠️ Galti: He am nahi hota.', level: 1 },
{ w: 'A', u: 'ایک', p: 'UH', ex: '"I am a teacher."', tip: 'Jab kisi ek cheez ka zikr ho', visual: { emoji: '1️⃣', scene: 'Ek ungli dikhana', memoryTrick: 'A = 1', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"A pen."'}, {emoji:'💼', place:'Office', example:'"A file."'}, {emoji:'🏠', place:'Ghar', example:'"A cup."'} ], mistake: '⚠️ Galti: Vowels se pehle An lagta hai, A nahi.', level: 1 },
{ w: 'Student', u: 'طالب علم', p: 'STOO-dent', ex: '"I am a student."', tip: 'Parhne wala', visual: { emoji: '🎒', scene: 'Bag pehne hue', memoryTrick: 'Study karne wala Student', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Good student."'}, {emoji:'💼', place:'Office', example:'"Intern student."'}, {emoji:'🏠', place:'Ghar', example:'"I am a student."'} ], mistake: '⚠️ Galti: "S-tudent" ko alag mat toro.', level: 1 },
{ w: 'Teacher', u: 'استاد', p: 'TEE-cher', ex: '"He is a teacher."', tip: 'Parhane wala', visual: { emoji: '👨\u200d🏫', scene: 'Board pe likhta hua', memoryTrick: 'Teach karne wala Teacher', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Listen to the teacher."'}, {emoji:'💼', place:'Office', example:'"Training teacher."'}, {emoji:'🏠', place:'Ghar', example:'"My dad is a teacher."'} ], mistake: '⚠️ Galti: "Techar" spelling ghalat hai.', level: 1 },
{ w: 'Doctor', u: 'ڈاکٹر', p: 'DOK-ter', ex: '"She is a doctor."', tip: 'Ilaaj karne wala', visual: { emoji: '🩺', scene: 'Stethoscope pehne hue', memoryTrick: 'Doc-tor', color: '#2EE59D' }, situations: [ {emoji:'🏥', place:'Hospital', example:'"Doctor is busy."'}, {emoji:'💼', place:'Office', example:'"Company doctor."'}, {emoji:'🏠', place:'Ghar', example:'"Call the doctor."'} ], mistake: '⚠️ Galti: Dactor nahi hota.', level: 1 },
{ w: 'Engineer', u: 'انجینئر', p: 'en-ji-NEER', ex: '"He is an engineer."', tip: 'Building/machine banane wala', visual: { emoji: '👷\u200d♂️', scene: 'Yellow helmet pehne hue', memoryTrick: 'Engine ka master', color: '#2EE59D' }, situations: [ {emoji:'🏗️', place:'Site', example:'"Site engineer."'}, {emoji:'💼', place:'Office', example:'"Software engineer."'}, {emoji:'🏠', place:'Ghar', example:'"Engineer brother."'} ], mistake: '⚠️ Galti: Engineer se pehle "An" lagta hai.', level: 1 },
{ w: 'Businessman', u: 'کاروباری آدمی', p: 'BIZ-nis-man', ex: '"I am a businessman."', tip: 'Business karne wala', visual: { emoji: '💼', scene: 'Suit pehne hue', memoryTrick: 'Business + Man', color: '#2EE59D' }, situations: [ {emoji:'🏢', place:'Company', example:'"Rich businessman."'}, {emoji:'💼', place:'Office', example:'"He is a businessman."'}, {emoji:'📱', place:'Phone', example:'"Businessman talk."'} ], mistake: '⚠️ Galti: Businesswoman aurat ke liye hai.', level: 1 },
{ w: 'From', u: 'سے', p: 'FRUM', ex: '"I am from Karachi."', tip: 'Jagah batane ke liye', visual: { emoji: '📍', scene: 'Map pe pin', memoryTrick: 'From = Yahan se', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"From my bag."'}, {emoji:'✈️', place:'Travel', example:'"From Lahore."'}, {emoji:'🏠', place:'Ghar', example:'"From shop."'} ], mistake: '⚠️ Galti: I am from in Karachi ghalat hai.', level: 1 },
{ w: 'Karachi', u: 'کراچی', p: 'Ka-RAH-chee', ex: '"I am from Karachi."', tip: 'Pakistan ka sab se bara shehar', visual: { emoji: '🌊', scene: 'Sea view', memoryTrick: 'K se Karachi', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Karachi school."'}, {emoji:'💼', place:'Office', example:'"Karachi branch."'}, {emoji:'✈️', place:'Travel', example:'"Going to Karachi."'} ], mistake: '⚠️ Galti: Karaci nahi.', level: 1 },
{ w: 'Lahore', u: 'لاہور', p: 'La-HORE', ex: '"He is from Lahore."', tip: 'Punjab ka shehar', visual: { emoji: '🕌', scene: 'Badshahi mosque', memoryTrick: 'L se Lahore', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Lahore uni."'}, {emoji:'💼', place:'Office', example:'"Lahore trip."'}, {emoji:'✈️', place:'Travel', example:'"In Lahore."'} ], mistake: '⚠️ Galti: Lahor spelling mein e aata hai.', level: 1 },
{ w: 'Islamabad', u: 'اسلام آباد', p: 'Is-LAHM-a-bahd', ex: '"She is from Islamabad."', tip: 'Capital of Pakistan', visual: { emoji: '⛰️', scene: 'Margalla hills', memoryTrick: 'Islam + Abad', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Islamabad college."'}, {emoji:'💼', place:'Office', example:'"Islamabad office."'}, {emoji:'✈️', place:'Travel', example:'"Visit Islamabad."'} ], mistake: '⚠️ Galti: Islamabd nahi.', level: 1 },
{ w: 'Nice', u: 'اچھا / خوشگوار', p: 'NYS', ex: '"Nice to meet you."', tip: 'Kisi achhi cheez ya ehsaas ke liye', visual: { emoji: '👍', scene: 'Thumbs up', memoryTrick: 'Nice = Acha', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Nice pen."'}, {emoji:'💼', place:'Office', example:'"Nice work."'}, {emoji:'🏠', place:'Ghar', example:'"Nice day."'} ], mistake: '⚠️ Galti: Nice ke sath "to" lagana zaroori hota hai jab verb ho.', level: 1 },
{ w: 'To', u: 'سے / کو', p: 'TOO', ex: '"Nice to meet you."', tip: 'Action se jorna', visual: { emoji: '➡️', scene: 'Direction arrow', memoryTrick: 'To = Taraf', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Go to school."'}, {emoji:'💼', place:'Office', example:'"Talk to him."'}, {emoji:'🏠', place:'Ghar', example:'"Give to me."'} ], mistake: '⚠️ Galti: Too (bhi) alag hai.', level: 1 },
{ w: 'Meet', u: 'ملنا', p: 'MEET', ex: '"Nice to meet you."', tip: 'Kisi se milna', visual: { emoji: '🤝', scene: 'Handshake', memoryTrick: 'M aur M mil gaye', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Meet my friend."'}, {emoji:'💼', place:'Office', example:'"Meet the boss."'}, {emoji:'🏠', place:'Ghar', example:'"Meet my mom."'} ], mistake: '⚠️ Galti: Meat (gosht) spelling alag hai.', level: 1 },
{ w: 'You', u: 'تم / آپ', p: 'YOO', ex: '"How are you?"', tip: 'Samne wale se mukhatib hona', visual: { emoji: '👉', scene: 'Samne ishara', memoryTrick: 'You = Tum', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Are you ok?"'}, {emoji:'💼', place:'Office', example:'"You can go."'}, {emoji:'🏠', place:'Ghar', example:'"I saw you."'} ], mistake: '⚠️ Galti: You ke sath hamesha Are lagta hai.', level: 1 },
{ w: 'What', u: 'کیا', p: 'WUT', ex: '"What is your name?"', tip: 'Sawal poochne ke liye', visual: { emoji: '❓', scene: 'Question mark', memoryTrick: 'What = Kya', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"What is this?"'}, {emoji:'💼', place:'Office', example:'"What to do?"'}, {emoji:'🏠', place:'Ghar', example:'"What happened?"'} ], mistake: '⚠️ Galti: Wat nahi, What hota hai.', level: 1 },
{ w: 'Do', u: 'کرنا', p: 'DOO', ex: '"What do you do?"', tip: 'Koi kaam karna ya help verb', visual: { emoji: '⚙️', scene: 'Gears turning', memoryTrick: 'Do it!', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Do your work."'}, {emoji:'💼', place:'Office', example:'"I do my job."'}, {emoji:'🏠', place:'Ghar', example:'"Do the dishes."'} ], mistake: '⚠️ Galti: He/She ke sath Does lagta hai, Do nahi.', level: 1 },
{ w: 'How', u: 'کیسے / کتنا', p: 'HOW', ex: '"How old are you?"', tip: 'Tariqa ya miqdar', visual: { emoji: '🤷\u200d♂️', scene: 'Confused pose', memoryTrick: 'How = Kaise', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"How are you?"'}, {emoji:'💼', place:'Office', example:'"How to fix?"'}, {emoji:'🏠', place:'Ghar', example:'"How much?"'} ], mistake: '⚠️ Galti: How ke baad verb pehle aata hai sawal mein.', level: 1 },
{ w: 'Old', u: 'عمر / پرانا', p: 'OHLD', ex: '"How old are you?"', tip: 'Umar ya qadeem', visual: { emoji: '🎂', scene: 'Birthday cake', memoryTrick: 'Old = Umar', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Old book."'}, {emoji:'💼', place:'Office', example:'"Old file."'}, {emoji:'🏠', place:'Ghar', example:'"10 years old."'} ], mistake: '⚠️ Galti: Umar batane ke liye "I have 10 years" ghalat hai, "I am 10" hota hai.', level: 1 },
{ w: 'Are', u: 'ہو / ہیں', p: 'AR', ex: '"Where are you from?"', tip: 'You, We, They ke sath lagta hai', visual: { emoji: '👥', scene: 'Do log', memoryTrick: 'Are for Many', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"You are smart."'}, {emoji:'💼', place:'Office', example:'"We are ready."'}, {emoji:'🏠', place:'Ghar', example:'"They are here."'} ], mistake: '⚠️ Galti: I are ghalat hai.', level: 1 },
{ w: 'Where', u: 'کہاں', p: 'WAIR', ex: '"Where are you from?"', tip: 'Jagah poochne ke liye', visual: { emoji: '🗺️', scene: 'Map dekhna', memoryTrick: 'Where = Kahan', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Where is class?"'}, {emoji:'💼', place:'Office', example:'"Where is pen?"'}, {emoji:'🏠', place:'Ghar', example:'"Where are you?"'} ], mistake: '⚠️ Galti: Were aur Where alag hain.', level: 1 },
{ w: 'He', u: 'وہ (لڑکا)', p: 'HEE', ex: '"He is Ahmed."', tip: 'Mard ke liye', visual: { emoji: '👨', scene: 'Boy face', memoryTrick: 'He = Boy', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"He is my friend."'}, {emoji:'💼', place:'Office', example:'"He is boss."'}, {emoji:'🏠', place:'Ghar', example:'"He is dad."'} ], mistake: '⚠️ Galti: Larki ke liye He nahi lagta.', level: 1 },
{ w: 'She', u: 'وہ (لڑکی)', p: 'SHEE', ex: '"She is Sara."', tip: 'Aurat ke liye', visual: { emoji: '👩', scene: 'Girl face', memoryTrick: 'She = Girl', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"She is smart."'}, {emoji:'💼', place:'Office', example:'"She is manager."'}, {emoji:'🏠', place:'Ghar', example:'"She is mom."'} ], mistake: '⚠️ Galti: Larke ke liye She mat use karein.', level: 1 },
{ w: 'We', u: 'ہم', p: 'WEE', ex: '"We are students."', tip: 'Jab khud ko aur doosron ko shamil karein', visual: { emoji: '👫', scene: 'Group of people', memoryTrick: 'We = Hum', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"We study."'}, {emoji:'💼', place:'Office', example:'"We work."'}, {emoji:'🏠', place:'Ghar', example:'"We eat."'} ], mistake: '⚠️ Galti: We is ghalat hai, We are hota hai.', level: 1 },
{ w: 'They', u: 'وہ (جمع)', p: 'THAY', ex: '"They are friends."', tip: 'Doosre logon ka group', visual: { emoji: '👨\u200d👩\u200d👧\u200d👦', scene: 'Door khare log', memoryTrick: 'They = Wo sab', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"They play."'}, {emoji:'💼', place:'Office', example:'"They are busy."'}, {emoji:'🏠', place:'Ghar', example:'"They sleep."'} ], mistake: '⚠️ Galti: They is nahi hota.', level: 1 },
{ w: 'Friend', u: 'دوست', p: 'FREND', ex: '"He is my friend."', tip: 'Saathi', visual: { emoji: '👯\u200d♂️', scene: 'Sath chalte log', memoryTrick: 'Friend = Dost', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"School friend."'}, {emoji:'💼', place:'Office', example:'"Work friend."'}, {emoji:'🏠', place:'Ghar', example:'"Old friend."'} ], mistake: '⚠️ Galti: Freind spelling ghalat hai.', level: 1 },
{ w: 'Classmate', u: 'ہم جماعت', p: 'KLAS-mayt', ex: '"Bilal is my classmate."', tip: 'Class mein sath parhne wala', visual: { emoji: '📚', scene: 'Books share karte hue', memoryTrick: 'Class + Mate (Sathi)', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"New classmate."'}, {emoji:'🏫', place:'Uni', example:'"Old classmate."'}, {emoji:'💻', place:'Online', example:'"Online classmate."'} ], mistake: '⚠️ Galti: Classmate ek lafz hai.', level: 1 },
{ w: 'Mother', u: 'ماں', p: 'MUH-ther', ex: '"My mother is here."', tip: 'Ammi', visual: { emoji: '👩\u200d👧', scene: 'Mom and child', memoryTrick: 'Mother = Ammi', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Mother called."'}, {emoji:'💼', place:'Office', example:'"Mother is busy."'}, {emoji:'🏠', place:'Ghar', example:'"Love my mother."'} ], mistake: '⚠️ Galti: Mather nahi.', level: 1 },
{ w: 'School', u: 'سکول', p: 'SKOOL', ex: '"I am at school."', tip: 'Parhne ki jagah', visual: { emoji: '🏫', scene: 'School building', memoryTrick: 'S-C-H-O-O-L', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Big school."'}, {emoji:'🚌', place:'Bus', example:'"School bus."'}, {emoji:'🏠', place:'Ghar', example:'"School work."'} ], mistake: '⚠️ Galti: Skool ghalat spelling hai.', level: 1 },
{ w: 'Office', u: 'دفتر', p: 'OF-is', ex: '"He is in office."', tip: 'Kaam ki jagah', visual: { emoji: '🏢', scene: 'Building', memoryTrick: 'Office = Daftar', color: '#2EE59D' }, situations: [ {emoji:'💼', place:'Office', example:'"Go to office."'}, {emoji:'💻', place:'Laptop', example:'"Office email."'}, {emoji:'🏠', place:'Ghar', example:'"Office time."'} ], mistake: '⚠️ Galti: Ofice nahi.', level: 1 },
{ w: 'Yes', u: 'ہاں', p: 'YES', ex: '"Yes, I am Ahmed."', tip: 'Iqrar ke liye', visual: { emoji: '✔️', scene: 'Tick mark', memoryTrick: 'Yes = Haan', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Yes sir."'}, {emoji:'💼', place:'Office', example:'"Yes I can."'}, {emoji:'🏠', place:'Ghar', example:'"Yes mom."'} ], mistake: '⚠️ Galti: Yas nahi.', level: 1 },
{ w: 'No', u: 'نہیں', p: 'NO', ex: '"No, I am not Sara."', tip: 'Inkaar ke liye', visual: { emoji: '❌', scene: 'Cross mark', memoryTrick: 'No = Nahi', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"No sir."'}, {emoji:'💼', place:'Office', example:'"No problem."'}, {emoji:'🏠', place:'Ghar', example:'"No way."'} ], mistake: '⚠️ Galti: Know alag hai.', level: 1 },
{ w: 'Not', u: 'نہیں (جملے میں)', p: 'NOT', ex: '"I am not a doctor."', tip: 'Negative sentence banane ke liye', visual: { emoji: '🚫', scene: 'Stop sign', memoryTrick: 'Not = Action cancel', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Not present."'}, {emoji:'💼', place:'Office', example:'"Not ready."'}, {emoji:'🏠', place:'Ghar', example:'"Not hungry."'} ], mistake: '⚠️ Galti: I not am ghalat hai, I am not hota hai.', level: 1 },
{ w: 'And', u: 'اور', p: 'AND', ex: '"Sara and Bilal."', tip: 'Do cheezon ko jorne ke liye', visual: { emoji: '➕', scene: 'Plus sign', memoryTrick: 'And = +', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Pen and pencil."'}, {emoji:'💼', place:'Office', example:'"File and laptop."'}, {emoji:'🏠', place:'Ghar', example:'"Tea and cake."'} ], mistake: '⚠️ Galti: End alag hai (khatam).', level: 1 },
{ w: 'But', u: 'لیکن', p: 'BUT', ex: '"I am a student, but he is a teacher."', tip: 'Mukhalif baat karne ke liye', visual: { emoji: '⚖️', scene: 'Balance scale', memoryTrick: 'But = Lekin', color: '#2EE59D' }, situations: [ {emoji:'🏫', place:'School', example:'"Hard but good."'}, {emoji:'💼', place:'Office', example:'"Late but here."'}, {emoji:'🏠', place:'Ghar', example:'"Tired but happy."'} ], mistake: '⚠️ Galti: Bat (ball) alag hai.', level: 1 }
],
sentences: [
{ en: 'Hello! My name is Ahmed.', ur: 'ہیلو! میرا نام احمد ہے۔', words: [{e:'Hello', u:'ہیلو'}, {e:'My name', u:'میرا نام'}, {e:'is', u:'ہے'}], reply: 'Hello Ahmed! Nice to meet you!', visual: { emoji: '🤝👦', scene: 'Pehli baar milne pe haath milana', tip: 'Smile karo, seedha dekho' }, context: 'Introduction', bodyLang: '😊 Haath milao aur muskurao', level: 1 },
{ en: 'Hi, I am Sara.', ur: 'ہائے، میں سارا ہوں۔', words: [{e:'Hi', u:'ہائے'}, {e:'I am', u:'میں ہوں'}], reply: 'Hi Sara!', visual: { emoji: '👋👧', scene: 'Wave karna', tip: 'Friendly smile' }, context: 'Informal Intro', bodyLang: 'Wave hand', level: 1 },
{ en: 'What is your name?', ur: 'تمہارا نام کیا ہے؟', words: [{e:'What', u:'کیا'}, {e:'your', u:'تمہارا'}, {e:'name', u:'نام'}], reply: 'My name is Bilal.', visual: { emoji: '❓🤔', scene: 'Sawal poochna', tip: 'Aankhon mein dekhein' }, context: 'Asking name', bodyLang: 'Questioning expression', level: 1 },
{ en: 'Nice to meet you.', ur: 'آپ سے مل کر خوشی ہوئی۔', words: [{e:'Nice', u:'اچھا'}, {e:'to meet', u:'ملنا'}, {e:'you', u:'آپ'}], reply: 'Nice to meet you too.', visual: { emoji: '😊🤝', scene: 'Khushi ka izhar', tip: 'Garam joshi se bolein' }, context: 'Meeting someone', bodyLang: 'Slight nod and smile', level: 1 },
{ en: 'Where are you from?', ur: 'آپ کہاں سے ہیں؟', words: [{e:'Where', u:'کہاں'}, {e:'are', u:'ہیں'}, {e:'you from', u:'آپ سے'}], reply: 'I am from Karachi.', visual: { emoji: '📍❓', scene: 'Jagah ka poochna', tip: 'Curious tone' }, context: 'Asking origin', bodyLang: 'Relaxed posture', level: 1 },
{ en: 'I am from Karachi.', ur: 'میں کراچی سے ہوں۔', words: [{e:'I am', u:'میں ہوں'}, {e:'from', u:'سے'}, {e:'Karachi', u:'کراچی'}], reply: 'Oh, Karachi is a big city!', visual: { emoji: '🏙️', scene: 'Apne shehar ka batana', tip: 'Proud se batayen' }, context: 'Telling origin', bodyLang: 'Hand on chest slightly', level: 1 },
{ en: 'He is from Lahore.', ur: 'وہ لاہور سے ہے۔', words: [{e:'He is', u:'وہ ہے'}, {e:'from', u:'سے'}, {e:'Lahore', u:'لاہور'}], reply: 'Nice!', visual: { emoji: '👉🕌', scene: 'Dost ke bare mein batana', tip: 'Dost ki taraf ishara karein' }, context: 'Third person origin', bodyLang: 'Point slightly', level: 1 },
{ en: 'She is from Islamabad.', ur: 'وہ اسلام آباد سے ہے۔', words: [{e:'She is', u:'وہ ہے'}, {e:'from', u:'سے'}, {e:'Islamabad', u:'اسلام آباد'}], reply: 'Beautiful city.', visual: { emoji: '👉⛰️', scene: 'Larki ke bare mein batana', tip: 'Respectful point' }, context: 'Third person origin', bodyLang: 'Open hand gesture', level: 1 },
{ en: 'How old are you?', ur: 'تمہاری عمر کتنی ہے؟', words: [{e:'How old', u:'کتنی عمر'}, {e:'are you', u:'تمہاری ہے'}], reply: 'I am twenty years old.', visual: { emoji: '🎂❓', scene: 'Umar poochna', tip: 'Polite tone' }, context: 'Asking age', bodyLang: 'Curious look', level: 1 },
{ en: 'I am twenty years old.', ur: 'میں بیس سال کا ہوں۔', words: [{e:'I am', u:'میں ہوں'}, {e:'years old', u:'سال کا'}], reply: 'You are young!', visual: { emoji: '👦', scene: 'Umar batana', tip: 'Normal tone' }, context: 'Telling age', bodyLang: 'Normal posture', level: 1 },
{ en: 'What do you do?', ur: 'آپ کیا کرتے ہیں؟', words: [{e:'What', u:'کیا'}, {e:'do', u:'کرتے'}, {e:'you do', u:'آپ'}], reply: 'I am a student.', visual: { emoji: '💼❓', scene: 'Profession poochna', tip: 'Interested lagna' }, context: 'Asking profession', bodyLang: 'Slight lean forward', level: 1 },
{ en: 'I am a student.', ur: 'میں طالب علم ہوں۔', words: [{e:'I am', u:'میں ہوں'}, {e:'a student', u:'ایک طالب علم'}], reply: 'Which school?', visual: { emoji: '🎒', scene: 'Khud ko student batana', tip: 'Confident bolein' }, context: 'Telling profession', bodyLang: 'Stand straight', level: 1 },
{ en: 'He is a teacher.', ur: 'وہ استاد ہیں۔', words: [{e:'He is', u:'وہ ہے'}, {e:'a teacher', u:'ایک استاد'}], reply: 'Oh, respectful job.', visual: { emoji: '👨\u200d🏫', scene: 'Teacher ka batana', tip: 'Respectful tone' }, context: 'Telling others profession', bodyLang: 'Point with open palm', level: 1 },
{ en: 'She is a doctor.', ur: 'وہ ڈاکٹر ہیں۔', words: [{e:'She is', u:'وہ ہے'}, {e:'a doctor', u:'ایک ڈاکٹر'}], reply: 'Great profession.', visual: { emoji: '🩺', scene: 'Doctor ka batana', tip: 'Appreciating tone' }, context: 'Telling others profession', bodyLang: 'Nodding', level: 1 },
{ en: 'I am an engineer.', ur: 'میں انجینئر ہوں۔', words: [{e:'I am', u:'میں ہوں'}, {e:'an engineer', u:'ایک انجینئر'}], reply: 'That is tough!', visual: { emoji: '👷\u200d♂️', scene: 'Engineer ka batana', tip: 'Proud tone' }, context: 'Telling profession', bodyLang: 'Confident stance', level: 1 },
{ en: 'He is a businessman.', ur: 'وہ کاروباری آدمی ہے۔', words: [{e:'He is', u:'وہ ہے'}, {e:'a businessman', u:'ایک کاروباری'}], reply: 'Good business?', visual: { emoji: '💼', scene: 'Business ka batana', tip: 'Professional tone' }, context: 'Telling others profession', bodyLang: 'Firm look', level: 1 },
{ en: 'This is my friend.', ur: 'یہ میرا دوست ہے۔', words: [{e:'This is', u:'یہ ہے'}, {e:'my friend', u:'میرا دوست'}], reply: 'Hello friend!', visual: { emoji: '👫', scene: 'Dost se milwana', tip: 'Dost ki taraf haath se ishara' }, context: 'Introducing friend', bodyLang: 'Gesture towards friend', level: 1 },
{ en: 'His name is Bilal.', ur: 'اس کا نام بلال ہے۔', words: [{e:'His name', u:'اس کا نام'}, {e:'is', u:'ہے'}], reply: 'Nice to meet you, Bilal.', visual: { emoji: '👦', scene: 'Larke ka naam batana', tip: 'Clear voice' }, context: 'Introducing male friend', bodyLang: 'Look at Bilal', level: 1 },
{ en: 'Her name is Sara.', ur: 'اس کا نام سارا ہے۔', words: [{e:'Her name', u:'اس کا نام'}, {e:'is', u:'ہے'}], reply: 'Hello Sara.', visual: { emoji: '👧', scene: 'Larki ka naam batana', tip: 'Clear voice' }, context: 'Introducing female friend', bodyLang: 'Look at Sara', level: 1 },
{ en: 'We are students.', ur: 'ہم طالب علم ہیں۔', words: [{e:'We are', u:'ہم ہیں'}, {e:'students', u:'طالب علم'}], reply: 'Study hard!', visual: { emoji: '👨\u200d🎓👩\u200d🎓', scene: 'Group ka batana', tip: 'Inclusive gesture' }, context: 'Group profession', bodyLang: 'Circle gesture with hand', level: 1 },
{ en: 'They are my friends.', ur: 'وہ میرے دوست ہیں۔', words: [{e:'They are', u:'وہ ہیں'}, {e:'my friends', u:'میرے دوست'}], reply: 'You have good friends.', visual: { emoji: '👬', scene: 'Door khare doston ka batana', tip: 'Point far away' }, context: 'Introducing group', bodyLang: 'Point at group', level: 1 },
{ en: 'Are you a student?', ur: 'کیا تم طالب علم ہو؟', words: [{e:'Are you', u:'کیا تم ہو'}, {e:'a student', u:'ایک طالب علم'}], reply: 'Yes, I am.', visual: { emoji: '🎒❓', scene: 'Sawal', tip: 'Voice raise at end' }, context: 'Asking yes/no', bodyLang: 'Eyebrows slightly up', level: 1 },
{ en: 'Yes, I am.', ur: 'ہاں، میں ہوں۔', words: [{e:'Yes', u:'ہاں'}, {e:'I am', u:'میں ہوں'}], reply: 'Good.', visual: { emoji: '✔️', scene: 'Answer', tip: 'Nod yes' }, context: 'Answering yes', bodyLang: 'Nodding head', level: 1 },
{ en: 'No, I am not.', ur: 'نہیں، میں نہیں ہوں۔', words: [{e:'No', u:'نہیں'}, {e:'I am not', u:'میں نہیں ہوں'}], reply: 'Oh, sorry.', visual: { emoji: '❌', scene: 'Answer', tip: 'Shake head' }, context: 'Answering no', bodyLang: 'Shaking head', level: 1 },
{ en: 'I am not a doctor.', ur: 'میں ڈاکٹر نہیں ہوں۔', words: [{e:'I am not', u:'میں نہیں ہوں'}, {e:'a doctor', u:'ڈاکٹر'}], reply: 'What are you then?', visual: { emoji: '🚫🩺', scene: 'Correction', tip: 'Clear denial' }, context: 'Correcting info', bodyLang: 'Hand waving no', level: 1 },
{ en: 'Are you from Lahore?', ur: 'کیا تم لاہور سے ہو؟', words: [{e:'Are you', u:'کیا تم ہو'}, {e:'from Lahore', u:'لاہور سے'}], reply: 'No, from Karachi.', visual: { emoji: '🕌❓', scene: 'Asking origin', tip: 'Curious tone' }, context: 'Guessing origin', bodyLang: 'Looking closely', level: 1 },
{ en: 'Is he your friend?', ur: 'کیا وہ تمہارا دوست ہے؟', words: [{e:'Is he', u:'کیا وہ ہے'}, {e:'your friend', u:'تمہارا دوست'}], reply: 'Yes, he is.', visual: { emoji: '👦❓', scene: 'Confirming friend', tip: 'Point at him' }, context: 'Confirming relationship', bodyLang: 'Pointing', level: 1 },
{ en: 'Is she a teacher?', ur: 'کیا وہ استانی ہیں؟', words: [{e:'Is she', u:'کیا وہ ہے'}, {e:'a teacher', u:'ایک استانی'}], reply: 'Yes, she is Mr. Ali.', visual: { emoji: '👩\u200d🏫❓', scene: 'Confirming job', tip: 'Respectful ask' }, context: 'Confirming profession', bodyLang: 'Look at teacher', level: 1 },
{ en: 'Good morning.', ur: 'صبح بخیر۔', words: [{e:'Good', u:'اچھی'}, {e:'morning', u:'صبح'}], reply: 'Good morning!', visual: { emoji: '🌅', scene: 'Greeting', tip: 'Bright tone' }, context: 'Morning greeting', bodyLang: 'Smile wide', level: 1 },
{ en: 'Good afternoon.', ur: 'سہ پہر بخیر۔', words: [{e:'Good', u:'اچھی'}, {e:'afternoon', u:'سہ پہر'}], reply: 'Good afternoon.', visual: { emoji: '☀️', scene: 'Greeting', tip: 'Polite tone' }, context: 'Day greeting', bodyLang: 'Professional nod', level: 1 },
{ en: 'Good evening.', ur: 'شام بخیر۔', words: [{e:'Good', u:'اچھی'}, {e:'evening', u:'شام'}], reply: 'Good evening.', visual: { emoji: '🌇', scene: 'Greeting', tip: 'Soft tone' }, context: 'Evening greeting', bodyLang: 'Relaxed posture', level: 1 },
{ en: 'I am fine.', ur: 'میں ٹھیک ہوں۔', words: [{e:'I am', u:'میں ہوں'}, {e:'fine', u:'ٹھیک'}], reply: 'Good to hear.', visual: { emoji: '👍', scene: 'Health update', tip: 'Positive tone' }, context: 'Telling status', bodyLang: 'Thumbs up', level: 1 },
{ en: 'And you?', ur: 'اور تم؟', words: [{e:'And', u:'اور'}, {e:'you', u:'تم'}], reply: 'I am fine too.', visual: { emoji: '🔄', scene: 'Return question', tip: 'Slight pause before' }, context: 'Returning question', bodyLang: 'Point back', level: 1 },
{ en: 'I am a student and he is a teacher.', ur: 'میں طالب علم ہوں اور وہ استاد ہے۔', words: [{e:'and', u:'اور'}], reply: 'Nice combo.', visual: { emoji: '🎒➕👨\u200d🏫', scene: 'Joining ideas', tip: 'Smooth flow' }, context: 'Compound sentence', bodyLang: 'Hands balancing', level: 1 },
{ en: 'I am from Karachi, but he is from Lahore.', ur: 'میں کراچی سے ہوں، لیکن وہ لاہور سے ہے۔', words: [{e:'but', u:'لیکن'}], reply: 'Two different cities.', visual: { emoji: '🌊⚖️🕌', scene: 'Contrast', tip: 'Stress "but"' }, context: 'Contrasting ideas', bodyLang: 'One hand up, then other', level: 1 },
{ en: 'Mr. Ali is my teacher.', ur: 'مسٹر علی میرے استاد ہیں۔', words: [{e:'is my', u:'میرے ہیں'}, {e:'teacher', u:'استاد'}], reply: 'He is strict.', visual: { emoji: '👨\u200d🏫', scene: 'Teacher intro', tip: 'Respectful' }, context: 'School intro', bodyLang: 'Straight posture', level: 1 },
{ en: 'My mother is a doctor.', ur: 'میری ماں ڈاکٹر ہیں۔', words: [{e:'My mother', u:'میری ماں'}, {e:'is', u:'ہیں'}], reply: 'Wow, that is great.', visual: { emoji: '👩\u200d⚕️', scene: 'Family intro', tip: 'Proudly' }, context: 'Family profession', bodyLang: 'Warm smile', level: 1 },
{ en: 'We are in school.', ur: 'ہم سکول میں ہیں۔', words: [{e:'We are', u:'ہم ہیں'}, {e:'in school', u:'سکول میں'}], reply: 'Class is starting.', visual: { emoji: '🏫', scene: 'Location', tip: 'Informative' }, context: 'Telling location', bodyLang: 'Look around', level: 1 },
{ en: 'They are in office.', ur: 'وہ دفتر میں ہیں۔', words: [{e:'They are', u:'وہ ہیں'}, {e:'in office', u:'دفتر میں'}], reply: 'Okay, let them work.', visual: { emoji: '🏢', scene: 'Location', tip: 'Informative' }, context: 'Telling location', bodyLang: 'Point away', level: 1 },
{ en: 'I am not old.', ur: 'میں بوڑھا نہیں ہوں۔', words: [{e:'I am not', u:'میں نہیں ہوں'}, {e:'old', u:'بوڑھا'}], reply: 'Yes, you are young.', visual: { emoji: '🙅\u200d♂️', scene: 'Age denial', tip: 'Laugh slightly' }, context: 'Joking about age', bodyLang: 'Wave hands', level: 1 },
{ en: 'You are my classmate.', ur: 'تم میرے ہم جماعت ہو۔', words: [{e:'You are', u:'تم ہو'}, {e:'my classmate', u:'میرے ہم جماعت'}], reply: 'Yes, nice to meet you.', visual: { emoji: '📚', scene: 'Recognizing someone', tip: 'Friendly' }, context: 'School meeting', bodyLang: 'Point gently', level: 1 },
{ en: 'What is this?', ur: 'یہ کیا ہے؟', words: [{e:'What is', u:'کیا ہے'}, {e:'this', u:'یہ'}], reply: 'It is a book.', visual: { emoji: '❓📦', scene: 'Asking object', tip: 'Point at object' }, context: 'Asking about things', bodyLang: 'Look at object', level: 1 },
{ en: 'Where is he?', ur: 'وہ کہاں ہے؟', words: [{e:'Where is', u:'کہاں ہے'}, {e:'he', u:'وہ'}], reply: 'He is at home.', visual: { emoji: '🤷\u200d♂️', scene: 'Asking location', tip: 'Look around' }, context: 'Looking for someone', bodyLang: 'Looking left and right', level: 1 },
{ en: 'She is not my friend.', ur: 'وہ میری دوست نہیں ہے۔', words: [{e:'She is not', u:'وہ نہیں ہے'}, {e:'my friend', u:'میری دوست'}], reply: 'Oh, okay.', visual: { emoji: '🙅\u200d♀️', scene: 'Clarifying', tip: 'Firm voice' }, context: 'Correcting assumption', bodyLang: 'Shake head', level: 1 },
{ en: 'I am ready!', ur: 'میں تیار ہوں!', words: [{e:'I am', u:'میں ہوں'}, {e:'ready', u:'تیار'}], reply: 'Let us go!', visual: { emoji: '🚀', scene: 'Excitement', tip: 'Loud and clear' }, context: 'Start of day', bodyLang: 'Stand up straight', level: 1 }
],
grammar: [
{ title: 'I am — Main hoon', visualTable: { headers: ['English','Urdu','Example'], rows: [['I am','Main hoon','I am Ahmed'],['You are','Tum ho','You are Sara'],['He is','Wo hai','He is doctor'],['She is','Wo hai','She is teacher'],['We are','Hum hain','We are students'],['They are','Wo hain','They are friends']], color: '#2EE59D' }, rules: [ { formula: 'I am + [naam/job/feeling]', examples: [ {en:'I am Ahmed.', ur:'Main Ahmed hoon.'}, {en:'I am a student.', ur:'Main student hoon.'}, {en:'I am from Karachi.', ur:'Main Karachi se hoon.'}, {en:'I am happy.', ur:'Main khush hoon.'} ] } ], memoryTrick: '🧠 AM sirf I ke saath — I AM always special!', tip: '💡 Apni baat karne ke liye hamesha I am lagayen.' },
{ title: 'I am + job', visualTable: { headers: ['English','Urdu','Example'], rows: [['I am a student','Main student hoon','I am a student'],['He is a doctor','Wo doctor hai','He is a doctor']], color: '#2EE59D' }, rules: [ { formula: 'I am + a/an + [job]', examples: [ {en:'I am a teacher.', ur:'Main ustad hoon.'}, {en:'I am an engineer.', ur:'Main engineer hoon.'} ] } ], memoryTrick: 'Job batane se pehle a/an zaroor lagta hai.', tip: 'English mein profession akela nahi aata, a/an lagta hai.' },
{ title: 'I am + age', visualTable: { headers: ['English','Urdu','Example'], rows: [['I am 20','Main 20 ka hoon','I am 20 years old']], color: '#2EE59D' }, rules: [ { formula: 'I am + [number] + years old', examples: [ {en:'I am ten years old.', ur:'Main 10 sal ka hoon.'} ] } ], memoryTrick: 'Umar "rakhte" nahi, umar "hote" hain (I am).', tip: 'Umar batane ke liye I have nahi bolna, I am bolna hai.' },
{ title: 'I am + feeling', visualTable: { headers: ['English','Urdu','Example'], rows: [['I am fine','Main theek hoon','I am fine']], color: '#2EE59D' }, rules: [ { formula: 'I am + [feeling word]', examples: [ {en:'I am happy.', ur:'Main khush hoon.'} ] } ], memoryTrick: 'Ehsaas direct I am ke baad.', tip: 'No "a" before feeling. I am fine, NOT I am a fine.' },
{ title: 'I am NOT (negative)', visualTable: { headers: ['English','Urdu','Example'], rows: [['I am not','Main nahi hoon','I am not Sara']], color: '#2EE59D' }, rules: [ { formula: 'I am + NOT + [cheez]', examples: [ {en:'I am not a teacher.', ur:'Main teacher nahi hoon.'}, {en:'I am not from Lahore.', ur:'Main Lahore se nahi hoon.'} ] } ], memoryTrick: 'NOT hamesha helper (am/is/are) ke baad aata hai.', tip: '💡 Negative = I am NOT — bas NOT add karo' },
{ title: 'You are / He is / She is', visualTable: { headers: ['Pronoun','Verb','Example'], rows: [['You','are','You are big'],['He/She','is','He is tall']], color: '#2EE59D' }, rules: [ { formula: 'Pronoun + is/are', examples: [ {en:'You are my friend.', ur:'Tum mere dost ho.'}, {en:'She is a doctor.', ur:'Wo doctor hai.'} ] } ], memoryTrick: 'Singular (He/She/It) = Is, Plural/You = Are', tip: 'You ke sath hamesha Are lagta hai, chahe ek banda ho.' },
{ title: 'We are / They are', visualTable: { headers: ['Pronoun','Verb','Example'], rows: [['We','are','We are here'],['They','are','They are far']], color: '#2EE59D' }, rules: [ { formula: 'We/They + are', examples: [ {en:'We are students.', ur:'Hum students hain.'}, {en:'They are teachers.', ur:'Wo teachers hain.'} ] } ], memoryTrick: 'We = Hum (main shamil), They = Wo (main nahi).', tip: 'Donon ke sath "are" aata hai kyunke ye jama (plural) hain.' },
{ title: 'My / Your / His / Her', visualTable: { headers: ['Word','Urdu','Example'], rows: [['My','Mera','My book'],['Your','Tumhara','Your bag'],['His','Uska (Larka)','His pen'],['Her','Uski (Larki)','Her car']], color: '#2EE59D' }, rules: [ { formula: 'Possessive + Noun', examples: [ {en:'My name is Ahmed.', ur:'Mera naam Ahmed hai.'}, {en:'Her name is Sara.', ur:'Uska naam Sara hai.'} ] } ], memoryTrick: 'His = He-is (Larke ka), Her = Larki.', tip: 'Milkiyat batane ke liye use hote hain.' },
{ title: 'What is your name?', visualTable: { headers: ['English','Urdu','Example'], rows: [['What','Kya','What is this?']], color: '#2EE59D' }, rules: [ { formula: 'What is + [possessive] + name?', examples: [ {en:'What is his name?', ur:'Uska naam kya hai?'} ] } ], memoryTrick: 'What hamesha shuru mein aata hai sawal mein.', tip: 'Jawab mein "My name is..." kehte hain.' },
{ title: 'Where are you from?', visualTable: { headers: ['English','Urdu','Example'], rows: [['Where','Kahan','Where are you?']], color: '#2EE59D' }, rules: [ { formula: 'Where + are/is + [person] + from?', examples: [ {en:'Where is he from?', ur:'Wo kahan se hai?'} ] } ], memoryTrick: 'Where poocha toh jagah batani hai.', tip: 'From aakhir mein lagta hai.' },
{ title: 'How old are you?', visualTable: { headers: ['English','Urdu','Example'], rows: [['How old','Kitni umar','How old is he?']], color: '#2EE59D' }, rules: [ { formula: 'How old + are/is + [person]?', examples: [ {en:'How old is Sara?', ur:'Sara ki umar kya hai?'} ] } ], memoryTrick: 'How old sath mil kar sawal banate hain.', tip: 'Jawab number + years old hota hai.' },
{ title: 'What do you do?', visualTable: { headers: ['English','Urdu','Example'], rows: [['What do you do','Tum kya karte ho','I am a student']], color: '#2EE59D' }, rules: [ { formula: 'What do/does + [person] + do?', examples: [ {en:'What does he do?', ur:'Wo kya karta hai?'} ] } ], memoryTrick: 'Pehla DO helper hai, doosra DO action hai.', tip: 'Iska matlab job poochna hai, ye nahi ke abhi kya kar rahe ho.' },
{ title: 'Are you...? (yes/no)', visualTable: { headers: ['Sawal','Jawab','Example'], rows: [['Are you...?','Yes/No','Are you Ahmed?']], color: '#2EE59D' }, rules: [ { formula: 'Am/Is/Are + [person] + [noun]?', examples: [ {en:'Are you a student?', ur:'Kya tum student ho?'}, {en:'Is he a doctor?', ur:'Kya wo doctor hai?'} ] } ], memoryTrick: 'Helper verb (am/is/are) ko shuru mein le aao toh sawal ban jata hai.', tip: 'Jawab hamesha Yes ya No se shuru hota hai.' },
{ title: 'This is my friend', visualTable: { headers: ['English','Urdu','Example'], rows: [['This is','Ye hai','This is my pen']], color: '#2EE59D' }, rules: [ { formula: 'This is + [person/thing]', examples: [ {en:'This is Sara.', ur:'Ye Sara hai.'} ] } ], memoryTrick: 'Qareeb ki cheez/insaan ke liye This.', tip: 'Taaruf karwane ka best tariqa.' },
{ title: 'His name is / Her name is', visualTable: { headers: ['His','Her','Example'], rows: [['Larka','Larki','His name is Ali']], color: '#2EE59D' }, rules: [ { formula: 'His/Her + name is + [naam]', examples: [ {en:'His name is Bilal.', ur:'Uska naam Bilal hai.'} ] } ], memoryTrick: 'His for Him, Her for She.', tip: 'Doosre logon ka naam batane ke liye.' },
{ title: 'I am from + city', visualTable: { headers: ['English','Urdu','Example'], rows: [['From','Se','From Karachi']], color: '#2EE59D' }, rules: [ { formula: 'I am from + [city/country]', examples: [ {en:'I am from Lahore.', ur:'Main Lahore se hoon.'} ] } ], memoryTrick: 'From = Origin/Jagah.', tip: 'City se pehle in mat lagao, seedha city name bolo.' },
{ title: 'A / An (articles)', visualTable: { headers: ['A','An','Example'], rows: [['Consonant','Vowel (a,e,i,o,u)','A doctor, An engineer']], color: '#2EE59D' }, rules: [ { formula: 'A + [consonant sound], An + [vowel sound]', examples: [ {en:'A teacher.', ur:'Ek ustad.'}, {en:'An apple.', ur:'Ek saib.'} ] } ], memoryTrick: 'Vowels se pehle hamesha An.', tip: 'Sirf single cheezon ke sath lagta hai.' },
{ title: 'And — joining sentences', visualTable: { headers: ['English','Urdu','Example'], rows: [['And','Aur','Ali and Sara']], color: '#2EE59D' }, rules: [ { formula: '[Sentence 1] + and + [Sentence 2]', examples: [ {en:'I am Ahmed and he is Bilal.', ur:'Main Ahmed hoon aur wo Bilal hai.'} ] } ], memoryTrick: 'And do baton ko jorta hai.', tip: 'Baar baar naya jumla banane se bachata hai.' },
{ title: 'But — contrast', visualTable: { headers: ['English','Urdu','Example'], rows: [['But','Lekin','Old but good']], color: '#2EE59D' }, rules: [ { formula: '[Positive] + but + [Negative/Different]', examples: [ {en:'I am from Karachi, but he is from Lahore.', ur:'Main Karachi se hoon lekin wo Lahore se hai.'} ] } ], memoryTrick: 'But = Ulta result ya farq.', tip: 'Mukhalif (opposite) ideas jorne ke liye.' },
{ title: 'Question word order', visualTable: { headers: ['Question Word','Verb','Subject'], rows: [['What','is','your name?'],['Where','are','you from?']], color: '#2EE59D' }, rules: [ { formula: 'Wh-word + am/is/are + subject?', examples: [ {en:'How old are you?', ur:'Tumhari umar kya hai?'} ] } ], memoryTrick: 'Sawal mein Wh-word hamesha boss hota hai, sabse pehle aata hai.', tip: 'Wh-word ke foran baad action/helper verb (is/are) lagana mat bhoolo.' }
],
story: {
title: 'Ahmed Ka Pehla Din',
level: '⭐ Day 1 — Beginner',
setting: { emoji: '🏫', place: 'City School, Karachi', time: 'Subah 8:00 baje', weather: '☀️ Sunny subah' },
paragraphs: [
{ line: 'Good morning! My name is Ahmed.', ur: 'صبح بخیر! میرا نام احمد ہے۔', words: ['Good','morning','My name','is','Ahmed'], visual: { emoji: '🌅', mood: 'Fresh', tip: 'Din ka aaghaz' } },
{ line: 'I am from Karachi.', ur: 'میں کراچی سے ہوں۔', words: ['I am','from','Karachi'], visual: { emoji: '🏙️', mood: 'Proud', tip: 'Apna shehar' } },
{ line: 'I am a student.', ur: 'میں طالب علم ہوں۔', words: ['I am','a','student'], visual: { emoji: '🎒', mood: 'Ready', tip: 'School bag' } },
{ line: 'My mother is a doctor.', ur: 'میری ماں ایک ڈاکٹر ہیں۔', words: ['My','mother','is','a','doctor'], visual: { emoji: '👩\u200d⚕️', mood: 'Happy', tip: 'Family' } },
{ line: 'Yes, I am ready for school.', ur: 'ہاں، میں سکول کے لیے تیار ہوں۔', words: ['Yes','I am','school'], visual: { emoji: '👍', mood: 'Excited', tip: 'Ready' } },
{ line: 'Ahmed enters the school.', ur: 'احمد سکول میں داخل ہوتا ہے۔', words: ['school'], visual: { emoji: '🏫', mood: 'Nervous', tip: 'Pehla din' } },
{ line: 'He is in class.', ur: 'وہ کلاس میں ہے۔', words: ['He','is'], visual: { emoji: '🚪', mood: 'Quiet', tip: 'Entering' } },
{ line: 'It is a nice class.', ur: 'یہ ایک اچھی کلاس ہے۔', words: ['is','a','nice'], visual: { emoji: '✨', mood: 'Impressed', tip: 'Looking around' } },
{ line: 'Hello! Are you a new student?', ur: 'ہیلو! کیا تم نئے طالب علم ہو؟', words: ['Hello','Are','you','a','student'], visual: { emoji: '👋', mood: 'Friendly', tip: 'Voice from behind' } },
{ line: 'Yes, I am.', ur: 'ہاں، میں ہوں۔', words: ['Yes','I am'], visual: { emoji: '✔️', mood: 'Polite', tip: 'Turning around' } },
{ line: 'Nice to meet you.', ur: 'تم سے مل کر اچھا لگا۔', words: ['Nice','to','meet','you'], visual: { emoji: '🤝', mood: 'Happy', tip: 'Shaking hands' } },
{ line: 'My name is Sara.', ur: 'میرا نام سارا ہے۔', words: ['My name','is'], visual: { emoji: '👧', mood: 'Smiling', tip: 'Girl intro' } },
{ line: 'I am from Islamabad.', ur: 'میں اسلام آباد سے ہوں۔', words: ['I am','from','Islamabad'], visual: { emoji: '⛰️', mood: 'Chatty', tip: 'Telling origin' } },
{ line: 'And this is my friend, Bilal.', ur: 'اور یہ میرا دوست، بلال ہے۔', words: ['And','is','my','friend'], visual: { emoji: '👦', mood: 'Introducing', tip: 'Pointing' } },
{ line: 'He is from Lahore.', ur: 'وہ لاہور سے ہے۔', words: ['He','is','from','Lahore'], visual: { emoji: '🕌', mood: 'Informative', tip: 'Bilal intro' } },
{ line: 'We are classmates.', ur: 'ہم ہم جماعت ہیں۔', words: ['We','are','classmate'], visual: { emoji: '📚', mood: 'Together', tip: 'Group feeling' } },
{ line: 'Mr. Ali comes in the office.', ur: 'مسٹر علی دفتر میں آتے ہیں۔', words: ['office'], visual: { emoji: '👨\u200d🏫', mood: 'Strict', tip: 'Teacher enters' } },
{ line: 'Good morning, students!', ur: 'صبح بخیر، طلباء!', words: ['Good','morning','student'], visual: { emoji: '☀️', mood: 'Loud', tip: 'Greeting class' } },
{ line: 'I am Mr. Ali, your teacher.', ur: 'میں مسٹر علی ہوں، تمہارا استاد۔', words: ['I am','teacher'], visual: { emoji: '📖', mood: 'Commanding', tip: 'Teacher intro' } },
{ line: 'Are you an engineer?', ur: 'کیا آپ انجینئر ہیں؟', words: ['Are','you','engineer'], visual: { emoji: '👷\u200d♂️', mood: 'Joke', tip: 'Student asks' } },
{ line: 'No, I am not.', ur: 'نہیں، میں نہیں ہوں۔', words: ['No','I am','not'], visual: { emoji: '❌', mood: 'Laughs', tip: 'Teacher corrects' } },
{ line: 'What is your name, boy?', ur: 'تمہارا نام کیا ہے، لڑکے؟', words: ['What','is','your','name'], visual: { emoji: '❓', mood: 'Curious', tip: 'Asking Ahmed' } },
{ line: 'My name is Ahmed.', ur: 'میرا نام احمد ہے۔', words: ['My name','is'], visual: { emoji: '👦', mood: 'Confident', tip: 'Ahmed replies' } },
{ line: 'How old are you?', ur: 'تمہاری عمر کتنی ہے؟', words: ['How','old','are','you'], visual: { emoji: '🎂', mood: 'Normal', tip: 'Asking age' } },
{ line: 'I am young, but smart.', ur: 'میں جوان ہوں، لیکن ہوشیار ہوں۔', words: ['I am','but'], visual: { emoji: '🧠', mood: 'Clever', tip: 'Good answer' } },
{ line: 'Where do you live?', ur: 'تم کہاں رہتے ہو؟', words: ['Where','do','you'], visual: { emoji: '🏠', mood: 'Questioning', tip: 'Asking location' } },
{ line: 'They are happy in class.', ur: 'وہ کلاس میں خوش ہیں۔', words: ['They','are'], visual: { emoji: '😊', mood: 'Joyful', tip: 'Class ends' } },
{ line: 'My father is a businessman.', ur: 'میرے والد ایک کاروباری آدمی ہیں۔', words: ['My','is','a','businessman'], visual: { emoji: '💼', mood: 'Proud', tip: 'Going home' } },
{ line: 'He asks, What do you do today?', ur: 'وہ پوچھتے ہیں، آج تم نے کیا کیا؟', words: ['What','do','you','do'], visual: { emoji: '🗣️', mood: 'Chatty', tip: 'Dad asks' } },
{ line: 'I say, I meet a nice friend.', ur: 'میں کہتا ہوں، میں ایک اچھے دوست سے ملا۔', words: ['I','meet','a','nice','friend'], visual: { emoji: '👫', mood: 'Happy', tip: 'Day ends well' } }
],
moral: '✨ Pehli baar bolna mushkil lagta hai — lekin Ahmed ne kiya, tum bhi kar sakte ho!'
},
summary: {
emoji: '🎯',
wordsLearned: 40,
sentencesLearned: 45,
grammarRules: 20,
studyTime: '2 hours',
nextDay: 'Daily Greetings and Farewells',
achievement: '🏆 First Step Champion!',
realLifeTask: '📋 Aaj kisi ko English mein apna introduction do!'
}
};


ALL_DAYS['en'][2] = {
theme: 'روزانہ کی ملاقاتیں',
themeEn: 'Daily Greetings & Farewells',
emoji: '🌅',
color: '#FF9600',
scene: {
emoji: '🏫',
title: 'نئے دن کی شروعات',
desc: 'احمد کے دن کا آغاز اور ملاقاتیں۔',
bg: 'linear-gradient(135deg, #2a1a0a, #1a0f00)',
characters: [
{emoji: '👦', name: 'Ahmed', role: 'Tum (Student)'},
{emoji: '👧', name: 'Sara', role: 'Classmate'},
{emoji: '👨\u200d🏫', name: 'Mr. Ali', role: 'Teacher'},
{emoji: '👩\u200d👧', name: 'Ammi', role: 'Maa'},
{emoji: '👦', name: 'Bilal', role: 'Dost'}
]
},
vocab: [
{ w: 'Morning', u: 'صبح', p: 'MOR-ning', ex: '"Good morning, Ammi!"', tip: 'Subah uthne se dopehar 12 baje tak', visual: { emoji: '🌅', scene: 'Suraj nikal raha hai', memoryTrick: 'Morning = Subah', color: '#FF9600' }, situations: [ {emoji:'🏠', place:'Ghar mein', example:'"Morning Ammi!"'}, {emoji:'🏫', place:'School mein', example:'"Good morning sir!"'}, {emoji:'💼', place:'Office mein', example:'"Morning everyone!"'} ], mistake: '⚠️ Galti: Dopehar mein morning mat bolein.', level: 1 },
{ w: 'Afternoon', u: 'دوپہر / سہ پہر', p: 'AF-ter-noon', ex: '"Good afternoon, sir."', tip: 'Dopehar 12 baje se sham 5 baje tak', visual: { emoji: '☀️', scene: 'Suraj asman ke beecho beech', memoryTrick: 'After (Baad) + Noon (12 baje)', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Good afternoon class."'}, {emoji:'💼', place:'Office mein', example:'"Afternoon meeting."'}, {emoji:'🏠', place:'Ghar mein', example:'"Afternoon tea."'} ], mistake: '⚠️ Galti: Subah 11 baje afternoon na bolein.', level: 1 },
{ w: 'Evening', u: 'شام', p: 'EEV-ning', ex: '"Good evening, Bilal."', tip: 'Sham 5 baje se raat sone tak', visual: { emoji: '🌇', scene: 'Suraj dhal raha hai', memoryTrick: 'Evening = Sham', color: '#FF9600' }, situations: [ {emoji:'🏠', place:'Ghar mein', example:'"Evening walk."'}, {emoji:'🏫', place:'School', example:'"Evening class."'}, {emoji:'💼', place:'Office', example:'"Good evening boss."'} ], mistake: '⚠️ Galti: Milte waqt Good night nahi, Good evening bolein.', level: 1 },
{ w: 'Night', u: 'رات', p: 'NITE', ex: '"Good night, Ammi."', tip: 'Sirf sone jate waqt ya rukhsat hote waqt', visual: { emoji: '🌙', scene: 'Chand aur sitare', memoryTrick: 'Night = Raat', color: '#FF9600' }, situations: [ {emoji:'🏠', place:'Ghar mein', example:'"Good night, sleep well."'}, {emoji:'📱', place:'Phone pe', example:'"Good night, bye."'}, {emoji:'🚗', place:'Safar', example:'"Night travel."'} ], mistake: '⚠️ Galti: Raat ko kisi se milte waqt Good night na bolein.', level: 1 },
{ w: 'Goodbye', u: 'خدا حافظ', p: 'GUD-by', ex: '"Goodbye, see you tomorrow."', tip: 'Formal tareeqe se jane ka kehna', visual: { emoji: '👋', scene: 'Hath hilate hue jana', memoryTrick: 'Good + Bye', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Goodbye sir."'}, {emoji:'💼', place:'Office', example:'"Goodbye everyone."'}, {emoji:'✈️', place:'Travel', example:'"Goodbye Karachi."'} ], mistake: '⚠️ Galti: Milte waqt goodbye na bolein.', level: 1 },
{ w: 'Bye', u: 'الوداع (غیر رسمی)', p: 'BY', ex: '"Bye Bilal!"', tip: 'Doston aur ghar walon ke sath (Informal)', visual: { emoji: '✌️', scene: 'Muskurate hue hath hilana', memoryTrick: 'Bye = Chota Goodbye', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Bye Sara!"'}, {emoji:'📱', place:'Phone', example:'"Okay, bye."'}, {emoji:'🏠', place:'Ghar', example:'"Bye Ammi."'} ], mistake: '⚠️ Galti: Boss ya principal ko sirf bye na bolein.', level: 1 },
{ w: 'See', u: 'دیکھنا / ملنا', p: 'SEE', ex: '"See you later."', tip: 'Dobara milne ka ishara', visual: { emoji: '👀', scene: 'Aankhon ka ishara', memoryTrick: 'See = Dekhna', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"See you."'}, {emoji:'💼', place:'Office', example:'"See this."'}, {emoji:'🏠', place:'Ghar', example:'"I see it."'} ], mistake: '⚠️ Galti: Sea (samundar) aur See ki aawaz same hai, spelling alag.', level: 1 },
{ w: 'Later', u: 'بعد میں', p: 'LAY-ter', ex: '"See you later."', tip: 'Kuch waqt baad', visual: { emoji: '⏳', scene: 'Waqt guzarne ka ishara', memoryTrick: 'Late = Dair, Later = Baad mein', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Talk later."'}, {emoji:'💼', place:'Office', example:'"Do it later."'}, {emoji:'🏠', place:'Ghar', example:'"Eat later."'} ], mistake: '⚠️ Galti: Letter (Khat) aur Later mein farq hai.', level: 1 },
{ w: 'Tomorrow', u: 'آنے والا کل', p: 'tu-MOR-oh', ex: '"See you tomorrow."', tip: 'Agle din ki baat', visual: { emoji: '📅', scene: 'Calendar ka agla din', memoryTrick: 'Tomorrow = Agla kal', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Test tomorrow."'}, {emoji:'💼', place:'Office', example:'"Meeting tomorrow."'}, {emoji:'🏠', place:'Ghar', example:'"Holiday tomorrow."'} ], mistake: '⚠️ Galti: Guzre hue kal ke liye tomorrow nahi lagta.', level: 1 },
{ w: 'Today', u: 'آج', p: 'tu-DAY', ex: '"How are you today?"', tip: 'Maujooda din', visual: { emoji: '📍', scene: 'Calendar pe aaj ki date', memoryTrick: 'To + Day', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Busy today."'}, {emoji:'💼', place:'Office', example:'"Work today."'}, {emoji:'🏠', place:'Ghar', example:'"Free today."'} ], mistake: '⚠️ Galti: To day alag alag nahi likhte.', level: 1 },
{ w: 'Please', u: 'براہ کرم', p: 'PLEEZ', ex: '"Please sit down."', tip: 'Adab se kuch mangna ya kehna', visual: { emoji: '🙏', scene: 'Hath jore hue', memoryTrick: 'Please = Guzarish', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Help me, please."'}, {emoji:'💼', place:'Office', example:'"Please sign here."'}, {emoji:'🏠', place:'Ghar', example:'"Water, please."'} ], mistake: '⚠️ Galti: Guzarish karte waqt Please zaroor lagayen.', level: 1 },
{ w: 'Sorry', u: 'معافی', p: 'SOR-ee', ex: '"I am sorry."', tip: 'Galti par maafi mangna', visual: { emoji: '😔', scene: 'Pareshaan chehra', memoryTrick: 'Sorry = Maafi', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Sorry I am late."'}, {emoji:'💼', place:'Office', example:'"Sorry for mistake."'}, {emoji:'🏠', place:'Ghar', example:'"Sorry Ammi."'} ], mistake: '⚠️ Galti: I sorry ghalat hai, I am sorry hota hai.', level: 1 },
{ w: 'Thanks', u: 'شکریہ', p: 'THANKS', ex: '"Thanks for help."', tip: 'Informal shukriya', visual: { emoji: '🙌', scene: 'Khushi ka izhar', memoryTrick: 'Thanks = Shukriya', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Thanks Bilal."'}, {emoji:'💼', place:'Office', example:'"Thanks team."'}, {emoji:'🏠', place:'Ghar', example:'"Thanks Ammi."'} ], mistake: '⚠️ Galti: Formal jagah Thank you bolein.', level: 1 },
{ w: 'Welcome', u: 'خوش آمدید', p: 'WEL-kum', ex: '"You are welcome."', tip: 'Shukriya ka jawab ya kisi ko bulana', visual: { emoji: '🤗', scene: 'Khule hath', memoryTrick: 'Well + Come', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Welcome to class."'}, {emoji:'💼', place:'Office', example:'"Welcome back."'}, {emoji:'🏠', place:'Ghar', example:'"You are welcome."'} ], mistake: '⚠️ Galti: Wellcome (double l) spelling ghalat hai.', level: 1 },
{ w: 'Excuse', u: 'معاف کرنا / اجازت لینا', p: 'eks-KYOOZ', ex: '"Excuse me, sir."', tip: 'Tawajjo hasil karne ke liye', visual: { emoji: '☝️', scene: 'Ungli uthana', memoryTrick: 'Excuse = Rasta do', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Excuse me, teacher."'}, {emoji:'🏪', place:'Market', example:'"Excuse me, please move."'}, {emoji:'💼', place:'Office', example:'"Excuse me, a question."'} ], mistake: '⚠️ Galti: Sneeze (chheenknay) par Excuse me bolein.', level: 1 },
{ w: 'Sir', u: 'جناب', p: 'SER', ex: '"Good morning, sir."', tip: 'Mard ke liye izzat ka lafz', visual: { emoji: '👨\u200d💼', scene: 'Respectful mard', memoryTrick: 'Sir = Janab', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Yes sir."'}, {emoji:'💼', place:'Office', example:'"No sir."'}, {emoji:'🛣️', place:'Rasta', example:'"Excuse me, sir."'} ], mistake: '⚠️ Galti: Aurat ko sir na bolein.', level: 1 },
{ w: 'Madam', u: 'محترمہ', p: 'MAD-am', ex: '"Thank you, madam."', tip: 'Aurat ke liye izzat ka lafz', visual: { emoji: '👩\u200d💼', scene: 'Respectful aurat', memoryTrick: 'Madam = Mohtarma', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Yes madam."'}, {emoji:'💼', place:'Office', example:'"Please madam."'}, {emoji:'🛍️', place:'Dukan', example:'"Here madam."'} ], mistake: '⚠️ Galti: Madam sirf auraton ke liye hai.', level: 1 },
{ w: 'Miss', u: 'مس (غیر شادی شدہ)', p: 'MIS', ex: '"Good morning, Miss Sara."', tip: 'Aurat teacher ya jawan larki ke liye', visual: { emoji: '👩\u200d🏫', scene: 'Teacher', memoryTrick: 'Miss = Teacher', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Miss is coming."'}, {emoji:'💼', place:'Office', example:'"Miss Sara."'}, {emoji:'🏠', place:'Ghar', example:'"Call Miss."'} ], mistake: '⚠️ Galti: Miss ke baad aam taur pe naam lagta hai.', level: 1 },
{ w: 'Mister', u: 'مسٹر', p: 'MIS-ter', ex: '"Mister Ali is here."', tip: 'Mard ke naam se pehle (Mr.)', visual: { emoji: '👨', scene: 'Shakhs', memoryTrick: 'Mr. = Mister', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Mr. Ali."'}, {emoji:'💼', place:'Office', example:'"Mr. boss."'}, {emoji:'🏠', place:'Ghar', example:'"Mr. Ahmed."'} ], mistake: '⚠️ Galti: Mister ko likhte waqt Mr. likha jata hai.', level: 1 },
{ w: 'Doing', u: 'کر رہا / حال', p: 'DOO-ing', ex: '"How are you doing?"', tip: 'Haal chaal poochne ka tareeqa', visual: { emoji: '🚶', scene: 'Chalte hue poochna', memoryTrick: 'Do + ing', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"How are you doing?"'}, {emoji:'💼', place:'Office', example:'"What are you doing?"'}, {emoji:'🏠', place:'Ghar', example:'"Doing well."'} ], mistake: '⚠️ Galti: I am doing ka matlab mein kar raha hoon bhi hai.', level: 1 },
{ w: 'Great', u: 'زبردست', p: 'GRAYT', ex: '"I am great!"', tip: 'Bohat acha feel karna', visual: { emoji: '🌟', scene: 'Chamaktar', memoryTrick: 'Great = Bara/Acha', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Great job."'}, {emoji:'💼', place:'Office', example:'"Great idea."'}, {emoji:'🏠', place:'Ghar', example:'"I feel great."'} ], mistake: '⚠️ Galti: Greet (milna) aur Great alag hain.', level: 1 },
{ w: 'Bad', u: 'برا', p: 'BAD', ex: '"Not bad."', tip: 'Kharab ya bura', visual: { emoji: '👎', scene: 'Thumbs down', memoryTrick: 'Bad = Bura', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Bad marks."'}, {emoji:'💼', place:'Office', example:'"Bad day."'}, {emoji:'🏠', place:'Ghar', example:'"Not bad."'} ], mistake: '⚠️ Galti: Bed (bistar) alag cheez hai.', level: 1 },
{ w: 'Okay', u: 'ٹھیک ہے', p: 'oh-KAY', ex: '"I am okay."', tip: 'Darmiyana haal', visual: { emoji: '👌', scene: 'Okay sign', memoryTrick: 'OK', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Okay sir."'}, {emoji:'💼', place:'Office', example:'"Is it okay?"'}, {emoji:'🏠', place:'Ghar', example:'"I am okay."'} ], mistake: '⚠️ Galti: Okey spelling ghalat hai.', level: 1 },
{ w: 'Well', u: 'اچھا / بہتر', p: 'WEL', ex: '"I am doing well."', tip: 'Sehat ya haal acha hona', visual: { emoji: '💪', scene: 'Mazboot', memoryTrick: 'Well = Acha', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Well done."'}, {emoji:'💼', place:'Office', example:'"Doing well."'}, {emoji:'🏠', place:'Ghar', example:'"Sleep well."'} ], mistake: '⚠️ Galti: Good aur Well dono acha kehte hain, par well halat ke liye hai.', level: 1 },
{ w: 'Sleep', u: 'سونا', p: 'SLEEP', ex: '"Go to sleep."', tip: 'Neend aana ya sona', visual: { emoji: '😴', scene: 'Sota hua', memoryTrick: 'Sleep = Sona', color: '#FF9600' }, situations: [ {emoji:'🏠', place:'Ghar', example:'"Time to sleep."'}, {emoji:'✈️', place:'Travel', example:'"Sleep on bus."'}, {emoji:'🏥', place:'Hospital', example:'"Need sleep."'} ], mistake: '⚠️ Galti: Slip (phisalna) alag hai.', level: 1 },
{ w: 'Wake', u: 'جاگنا', p: 'WAYK', ex: '"Wake up early."', tip: 'Neend se uthna', visual: { emoji: '🥱', scene: 'Angrayi lena', memoryTrick: 'Wake up', color: '#FF9600' }, situations: [ {emoji:'🏠', place:'Ghar', example:'"Wake up Ahmed."'}, {emoji:'⏰', place:'Alarm', example:'"Wake me at 7."'}, {emoji:'🏫', place:'School', example:'"Stay awake."'} ], mistake: '⚠️ Galti: Wake ke sath aksar up lagta hai (Wake up).', level: 1 },
{ w: 'Early', u: 'جلدی / وقت سے پہلے', p: 'ER-lee', ex: '"Wake up early."', tip: 'Waqt se pehle aana', visual: { emoji: '🌅', scene: 'Subah sawere', memoryTrick: 'Early = Jaldi', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Come early."'}, {emoji:'💼', place:'Office', example:'"Early meeting."'}, {emoji:'🏠', place:'Ghar', example:'"Sleep early."'} ], mistake: '⚠️ Galti: Fast ka matlab bhi jaldi hota hai par wo speed ke liye hai.', level: 1 },
{ w: 'Late', u: 'دیر', p: 'LAYT', ex: '"Sorry I am late."', tip: 'Waqt ke baad aana', visual: { emoji: '🏃', scene: 'Bhagte hue aana', memoryTrick: 'Late = Dair', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Do not be late."'}, {emoji:'💼', place:'Office', example:'"Late for work."'}, {emoji:'🏠', place:'Ghar', example:'"Late night."'} ], mistake: '⚠️ Galti: Let (ijazat dena) alag hai.', level: 1 },
{ w: 'Time', u: 'وقت', p: 'TYME', ex: '"What is the time?"', tip: 'Waqt poochna ya batana', visual: { emoji: '⌚', scene: 'Ghadi dekhna', memoryTrick: 'Time = Waqt', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"School time."'}, {emoji:'💼', place:'Office', example:'"Time to go."'}, {emoji:'🏠', place:'Ghar', example:'"Dinner time."'} ], mistake: '⚠️ Galti: Taim spelling ghalat hai.', level: 1 },
{ w: 'Now', u: 'ابھی', p: 'NOW', ex: '"See you now."', tip: 'Isi waqt', visual: { emoji: '⚡', scene: 'Foran action', memoryTrick: 'Now = Ab', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Do it now."'}, {emoji:'💼', place:'Office', example:'"Call now."'}, {emoji:'🏠', place:'Ghar', example:'"Eat now."'} ], mistake: '⚠️ Galti: Know (janna) ki aawaz alag hai.', level: 1 },
{ w: 'Soon', u: 'جلد', p: 'SOON', ex: '"See you soon."', tip: 'Thori dair mein', visual: { emoji: '🔜', scene: 'Jaldi aane wala', memoryTrick: 'Soon = Jaldi', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Class starts soon."'}, {emoji:'💼', place:'Office', example:'"Coming soon."'}, {emoji:'🏠', place:'Ghar', example:'"See you soon."'} ], mistake: '⚠️ Galti: Son (beta) alag hai.', level: 1 },
{ w: 'Again', u: 'دوبارہ', p: 'u-GEN', ex: '"See you again."', tip: 'Ek aur baar', visual: { emoji: '🔄', scene: 'Chakar', memoryTrick: 'Again = Phir se', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Read again."'}, {emoji:'💼', place:'Office', example:'"Try again."'}, {emoji:'🏠', place:'Ghar', example:'"Come again."'} ], mistake: '⚠️ Galti: Agen nahi hota.', level: 1 },
{ w: 'Care', u: 'خیال / پرواہ', p: 'KAIR', ex: '"Take care."', tip: 'Dhyan rakhna', visual: { emoji: '❤️', scene: 'Dil', memoryTrick: 'Care = Khayal', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Care for books."'}, {emoji:'🏥', place:'Hospital', example:'"Patient care."'}, {emoji:'🏠', place:'Ghar', example:'"Take care Ammi."'} ], mistake: '⚠️ Galti: Car (gari) alag hai.', level: 1 },
{ w: 'Take', u: 'لینا', p: 'TAYK', ex: '"Take care."', tip: 'Kisi cheez ko hasil karna ya pakarna', visual: { emoji: '🤲', scene: 'Hath mein lena', memoryTrick: 'Take = Lena', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Take your pen."'}, {emoji:'💼', place:'Office', example:'"Take a break."'}, {emoji:'🏠', place:'Ghar', example:'"Take this."'} ], mistake: '⚠️ Galti: Take care mein take ka matlab khayal "rakhna" ban jata hai.', level: 1 },
{ w: 'Day', u: 'دن', p: 'DAY', ex: '"Have a good day."', tip: 'Subah se sham tak ka waqt', visual: { emoji: '☀️', scene: 'Suraj', memoryTrick: 'Day = Din', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"First day."'}, {emoji:'💼', place:'Office', example:'"Busy day."'}, {emoji:'🏠', place:'Ghar', example:'"Nice day."'} ], mistake: '⚠️ Galti: They (wo) alag hai.', level: 1 },
{ w: 'Going', u: 'جا رہا', p: 'GO-ing', ex: '"How is it going?"', tip: 'Kaisa chal raha hai?', visual: { emoji: '🚶', scene: 'Chalta hua', memoryTrick: 'Go + ing', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"I am going."'}, {emoji:'💼', place:'Office', example:'"How is it going?"'}, {emoji:'🏠', place:'Ghar', example:'"Going out."'} ], mistake: '⚠️ Galti: Going ka matlab sirf chalna nahi, haal poochna bhi hai.', level: 1 },
{ w: 'About', u: 'بارے میں', p: 'u-BOWT', ex: '"How about you?"', tip: 'Kisi ke mutaliq poochna', visual: { emoji: '💭', scene: 'Soch', memoryTrick: 'About = Mutaliq', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Talk about it."'}, {emoji:'💼', place:'Office', example:'"What about work?"'}, {emoji:'🏠', place:'Ghar', example:'"How about you?"'} ], mistake: '⚠️ Galti: Abot spelling ghalat hai.', level: 1 },
{ w: 'Have', u: 'رکھنا / گزارنا', p: 'HAV', ex: '"Have a good day."', tip: 'Dua dena ya paas hona', visual: { emoji: '🎁', scene: 'Gift dena', memoryTrick: 'Have = Rakhna', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"I have a pen."'}, {emoji:'💼', place:'Office', example:'"Have a seat."'}, {emoji:'🏠', place:'Ghar', example:'"Have fun."'} ], mistake: '⚠️ Galti: I has ghalat hai, I have hota hai.', level: 1 },
{ w: 'Awesome', u: 'بہترین / شاندار', p: 'AW-sum', ex: '"You are awesome!"', tip: 'Bohat hi zabardast', visual: { emoji: '😎', scene: 'Cool', memoryTrick: 'Awesome = Shandaar', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"Awesome work."'}, {emoji:'💼', place:'Office', example:'"Awesome idea."'}, {emoji:'🏠', place:'Ghar', example:'"Awesome day."'} ], mistake: '⚠️ Galti: Osam spelling ghalat hai.', level: 1 },
{ w: 'Fine', u: 'ٹھیک / عمدہ', p: 'FYN', ex: '"I am fine."', tip: 'Acha haal hona', visual: { emoji: '👍', scene: 'Thumbs up', memoryTrick: 'Fine = Theek', color: '#FF9600' }, situations: [ {emoji:'🏫', place:'School', example:'"I am fine."'}, {emoji:'💼', place:'Office', example:'"Works fine."'}, {emoji:'🏠', place:'Ghar', example:'"Fine morning."'} ], mistake: '⚠️ Galti: Jurmana (fine) ki spelling bhi same hai.', level: 1 }
],
sentences: [
{ en: 'Good morning, Ammi.', ur: 'صبح بخیر امی۔', words: [{e:'Good morning', u:'صبح بخیر'}], reply: 'Good morning, Ahmed.', visual: { emoji: '🌅👩\u200d👦', scene: 'Uth kar salam karna', tip: 'Khushi se bolein' }, context: 'Ghar mein subah', bodyLang: 'Smile karein', level: 1 },
{ en: 'Good morning, sir.', ur: 'صبح بخیر جناب۔', words: [{e:'Good morning', u:'صبح بخیر'}, {e:'sir', u:'جناب'}], reply: 'Morning, please sit down.', visual: { emoji: '👨\u200d🏫', scene: 'Teacher ko dekh kar', tip: 'Respect se bolein' }, context: 'School / Office', bodyLang: 'Seedha kharay hon', level: 1 },
{ en: 'How are you today?', ur: 'آج تم کیسے ہو؟', words: [{e:'How are you', u:'کیسے ہو'}, {e:'today', u:'آج'}], reply: 'I am fine, thanks.', visual: { emoji: '❓😊', scene: 'Haal poochna', tip: 'Eye contact' }, context: 'Mulaqat par', bodyLang: 'Halka sa aage jhukein', level: 1 },
{ en: 'I am doing well.', ur: 'میں ٹھیک چل رہا ہوں۔', words: [{e:'I am doing', u:'میں کر رہا ہوں'}, {e:'well', u:'بہتر'}], reply: 'That is great.', visual: { emoji: '👍', scene: 'Jawab dena', tip: 'Pur-etmad bolein' }, context: 'Jawab', bodyLang: 'Thumbs up', level: 1 },
{ en: 'How is it going?', ur: 'کیسا چل رہا ہے؟', words: [{e:'How is', u:'کیسا ہے'}, {e:'it going', u:'چل رہا'}], reply: 'Not bad.', visual: { emoji: '🚶\u200d♂️❓', scene: 'Dost se milna', tip: 'Informal hai' }, context: 'Doston ke sath', bodyLang: 'Relaxed kharay hon', level: 1 },
{ en: 'Not bad, thank you.', ur: 'برا نہیں، شکریہ۔', words: [{e:'Not bad', u:'برا نہیں'}, {e:'thank you', u:'شکریہ'}], reply: 'Good to hear.', visual: { emoji: '👌', scene: 'Theek hone ka ishara', tip: 'Normal tone' }, context: 'Jawab', bodyLang: 'Kandhe hilaein', level: 1 },
{ en: 'How about you?', ur: 'اور تمہارا کیا حال ہے؟', words: [{e:'How about', u:'کیا خیال ہے'}, {e:'you', u:'تمہارا'}], reply: 'I am great!', visual: { emoji: '🔄', scene: 'Wapas poochna', tip: 'Dhyan se sunein' }, context: 'Bat cheet', bodyLang: 'Dost ki taraf ishara', level: 1 },
{ en: 'Good afternoon, Miss Sara.', ur: 'سہ پہر بخیر مس سارا۔', words: [{e:'Good afternoon', u:'سہ پہر بخیر'}], reply: 'Good afternoon.', visual: { emoji: '☀️👩', scene: 'Dopehar ka waqt', tip: '12 baje ke baad' }, context: 'Dopehar mein', bodyLang: 'Polite smile', level: 1 },
{ en: 'Good evening, Bilal.', ur: 'شام بخیر بلال۔', words: [{e:'Good evening', u:'شام بخیر'}], reply: 'Evening Ahmed!', visual: { emoji: '🌇👦', scene: 'Sham ka waqt', tip: 'Suraj dhalne ke baad' }, context: 'Sham mein', bodyLang: 'Hath hilayein', level: 1 },
{ en: 'Goodbye, see you tomorrow.', ur: 'خدا حافظ، کل ملتے ہیں۔', words: [{e:'Goodbye', u:'خدا حافظ'}, {e:'see you', u:'ملتے ہیں'}, {e:'tomorrow', u:'کل'}], reply: 'Bye, take care.', visual: { emoji: '👋📅', scene: 'Ghar wapsi', tip: 'Jate waqt' }, context: 'Rukhsat', bodyLang: 'Hath hilayein', level: 1 },
{ en: 'See you later.', ur: 'بعد میں ملتے ہیں۔', words: [{e:'See you', u:'ملتے ہیں'}, {e:'later', u:'بعد میں'}], reply: 'Okay, bye.', visual: { emoji: '👀⏳', scene: 'Kuch dair ke liye jana', tip: 'Informal' }, context: 'Thori dair mein wapsi', bodyLang: 'Muskurayein', level: 1 },
{ en: 'See you soon.', ur: 'جلد ملتے ہیں۔', words: [{e:'See you', u:'ملتے ہیں'}, {e:'soon', u:'جلد'}], reply: 'Yes, sure.', visual: { emoji: '🔜', scene: 'Jaldi wapsi', tip: 'Doston ke sath' }, context: 'Waqti rukhsati', bodyLang: 'Nod karein', level: 1 },
{ en: 'Take care of yourself.', ur: 'اپنا خیال رکھنا۔', words: [{e:'Take care', u:'خیال رکھنا'}, {e:'of yourself', u:'اپنا'}], reply: 'You too.', visual: { emoji: '❤️', scene: 'Khuloos se kehna', tip: 'Dua jaisa' }, context: 'Rukhsat', bodyLang: 'Garam joshi se bolein', level: 1 },
{ en: 'Have a good day!', ur: 'آپ کا دن اچھا گزرے!', words: [{e:'Have a', u:'گزرے'}, {e:'good day', u:'اچھا دن'}], reply: 'Thanks, you too.', visual: { emoji: '☀️😊', scene: 'Subah jate waqt', tip: 'Positive energy' }, context: 'Jate waqt', bodyLang: 'Khushdili se', level: 1 },
{ en: 'Have a great time.', ur: 'آپ کا وقت شاندار گزرے۔', words: [{e:'Have a', u:'گزرے'}, {e:'great time', u:'شاندار وقت'}], reply: 'Thank you.', visual: { emoji: '🌟⌚', scene: 'Party ya trip par', tip: 'Khushi se' }, context: 'Kisi ko bhejte waqt', bodyLang: 'Wave', level: 1 },
{ en: 'Good night, sleep well.', ur: 'شب بخیر، اچھی طرح سونا۔', words: [{e:'Good night', u:'شب بخیر'}, {e:'sleep well', u:'اچھی طرح سونا'}], reply: 'Good night.', visual: { emoji: '🌙😴', scene: 'Bistar par', tip: 'Sirf sone se pehle' }, context: 'Raat', bodyLang: 'Aankhein band karne ka ishara', level: 1 },
{ en: 'Excuse me, sir.', ur: 'معاف کیجئے گا جناب۔', words: [{e:'Excuse me', u:'معاف کیجئے گا'}], reply: 'Yes?', visual: { emoji: '☝️', scene: 'Bat katna ya bulana', tip: 'Polite tone' }, context: 'Tawajjo ke liye', bodyLang: 'Hath halka sa aage', level: 1 },
{ en: 'I am sorry, I am late.', ur: 'مجھے معاف کریں، مجھے دیر ہو گئی۔', words: [{e:'I am sorry', u:'مجھے معاف کریں'}, {e:'I am late', u:'مجھے دیر ہو گئی'}], reply: 'It is okay, sit down.', visual: { emoji: '😔⏰', scene: 'Class mein late', tip: 'Sharmindagi se' }, context: 'Galti par', bodyLang: 'Sar jhuka kar', level: 1 },
{ en: 'Please open the door.', ur: 'براہ کرم دروازہ کھولیں۔', words: [{e:'Please', u:'براہ کرم'}, {e:'open', u:'کھولیں'}, {e:'the door', u:'دروازہ'}], reply: 'Sure.', visual: { emoji: '🚪🙏', scene: 'Request karna', tip: 'Adab se' }, context: 'Guzarish', bodyLang: 'Hath ka ishara', level: 1 },
{ en: 'Thank you very much.', ur: 'آپ کا بہت بہت شکریہ۔', words: [{e:'Thank you', u:'شکریہ'}, {e:'very much', u:'بہت بہت'}], reply: 'You are welcome.', visual: { emoji: '🙌', scene: 'Help ke baad', tip: 'Dil se bolein' }, context: 'Shukriya ada karna', bodyLang: 'Smile aur nod', level: 1 },
{ en: 'You are welcome.', ur: 'خوش آمدید (کوئی بات نہیں)۔', words: [{e:'You are welcome', u:'خوش آمدید'}], reply: '😊', visual: { emoji: '🤗', scene: 'Shukriya ke jawab mein', tip: 'Acha lagna' }, context: 'Jawab (Thanks ka)', bodyLang: 'Muskurayein', level: 1 },
{ en: 'Nice to see you again.', ur: 'آپ کو دوبارہ دیکھ کر اچھا لگا۔', words: [{e:'Nice', u:'اچھا'}, {e:'to see you', u:'آپ کو دیکھ کر'}, {e:'again', u:'دوبارہ'}], reply: 'Nice to see you too.', visual: { emoji: '👀🔄', scene: 'Purane dost se milna', tip: 'Khushi se' }, context: 'Dobara mulaqat', bodyLang: 'Hath milana', level: 1 },
{ en: 'Are you okay?', ur: 'کیا تم ٹھیک ہو؟', words: [{e:'Are you', u:'کیا تم ہو'}, {e:'okay', u:'ٹھیک'}], reply: 'Yes, I am fine.', visual: { emoji: '😟❓', scene: 'Fikar mand hona', tip: 'Fikar se' }, context: 'Haal janna', bodyLang: 'Aage jhuk kar', level: 1 },
{ en: 'Yes, I am fine.', ur: 'ہاں، میں ٹھیک ہوں۔', words: [{e:'Yes', u:'ہاں'}, {e:'I am fine', u:'میں ٹھیک ہوں'}], reply: 'Good.', visual: { emoji: '👍', scene: 'Tasalli dena', tip: 'Relaxed tone' }, context: 'Tasalli', bodyLang: 'Thumbs up', level: 1 },
{ en: 'I have to go now.', ur: 'مجھے اب جانا ہے۔', words: [{e:'I have to', u:'مجھے ہے'}, {e:'go now', u:'اب جانا'}], reply: 'Okay, bye.', visual: { emoji: '🚶\u200d♂️⏰', scene: 'Jaldi mein', tip: 'Waqt kam ho' }, context: 'Jane se pehle', bodyLang: 'Ghadi dekhna', level: 1 },
{ en: 'See you on Monday.', ur: 'پیر کو ملتے ہیں۔', words: [{e:'See you', u:'ملتے ہیں'}, {e:'on Monday', u:'پیر کو'}], reply: 'Sure.', visual: { emoji: '📅', scene: 'Din tay karna', tip: 'Clear aawaz' }, context: 'Mulaqat ka waqt', bodyLang: 'Ishara karna', level: 1 },
{ en: 'It is time for class.', ur: 'یہ کلاس کا وقت ہے۔', words: [{e:'It is time', u:'یہ وقت ہے'}, {e:'for class', u:'کلاس کے لیے'}], reply: 'Let us go.', visual: { emoji: '🏫⏰', scene: 'Baghna', tip: 'Jaldi bolein' }, context: 'Waqt yaad dilana', bodyLang: 'School ki taraf ishara', level: 1 },
{ en: 'Wake up, Ahmed!', ur: 'جاگ جاؤ، احمد!', words: [{e:'Wake up', u:'جاگ جاؤ'}], reply: 'Five more minutes...', visual: { emoji: '🥱', scene: 'Subah Ammi ki aawaz', tip: 'Buland aawaz' }, context: 'Uthana', bodyLang: 'Kandhe hilana', level: 1 },
{ en: 'You are early today.', ur: 'تم آج جلدی آ گئے۔', words: [{e:'You are', u:'تم ہو'}, {e:'early today', u:'آج جلدی'}], reply: 'Yes, no traffic.', visual: { emoji: '🌅', scene: 'Hairat', tip: 'Appreciate karna' }, context: 'Waqt se pehle', bodyLang: 'Hairat ka izhar', level: 1 },
{ en: 'Do not be late tomorrow.', ur: 'کل دیر مت کرنا۔', words: [{e:'Do not be', u:'مت کرنا'}, {e:'late tomorrow', u:'کل دیر'}], reply: 'I will be on time.', visual: { emoji: '⚠️⏰', scene: 'Warning', tip: 'Strict tone' }, context: 'Hidayat', bodyLang: 'Ungli uthana', level: 1 },
{ en: 'Please come in.', ur: 'براہ کرم اندر آ جائیں۔', words: [{e:'Please', u:'براہ کرم'}, {e:'come in', u:'اندر آئیں'}], reply: 'Thank you.', visual: { emoji: '🚪🤗', scene: 'Ijazat dena', tip: 'Khush-amdeed kehna' }, context: 'Andar bulana', bodyLang: 'Darwaza kholna', level: 1 },
{ en: 'Have a seat, please.', ur: 'براہ کرم تشریف رکھیں۔', words: [{e:'Have a seat', u:'تشریف رکھیں'}, {e:'please', u:'براہ کرم'}], reply: 'Thanks.', visual: { emoji: '🪑', scene: 'Bithana', tip: 'Polite' }, context: 'Mehman nawazi', bodyLang: 'Kursi ki taraf ishara', level: 1 },
{ en: 'Good to see you.', ur: 'آپ کو دیکھ کر اچھا لگا۔', words: [{e:'Good', u:'اچھا'}, {e:'to see you', u:'آپ کو دیکھ کر'}], reply: 'Same here.', visual: { emoji: '😊', scene: 'Mulaqat', tip: 'Garam joshi' }, context: 'Formal / Informal mulaqat', bodyLang: 'Muskurana', level: 1 },
{ en: 'I am doing great!', ur: 'میں زبردست ہوں!', words: [{e:'I am doing', u:'میں ہوں'}, {e:'great', u:'زبردست'}], reply: 'Awesome!', visual: { emoji: '🌟', scene: 'Bohat khush', tip: 'Energy ke sath' }, context: 'Khushi', bodyLang: 'Hath hawa mein', level: 1 },
{ en: 'What about you?', ur: 'تمہارا کیا خیال ہے؟', words: [{e:'What about', u:'کیا خیال ہے'}, {e:'you', u:'تمہارا'}], reply: 'I am good.', visual: { emoji: '🤔', scene: 'Sawal wapas karna', tip: 'Dhyan se' }, context: 'Jawab ke baad', bodyLang: 'Sawal ka ishara', level: 1 },
{ en: 'It is a nice day.', ur: 'یہ ایک اچھا دن ہے۔', words: [{e:'It is', u:'یہ ہے'}, {e:'a nice day', u:'ایک اچھا دن'}], reply: 'Yes, it is.', visual: { emoji: '☀️', scene: 'Mausam ki baat', tip: 'Relaxed' }, context: 'Small talk', bodyLang: 'Bahar dekhna', level: 1 },
{ en: 'Good night, everyone.', ur: 'شب بخیر، سب کو۔', words: [{e:'Good night', u:'شب بخیر'}, {e:'everyone', u:'سب کو'}], reply: 'Night!', visual: { emoji: '🌙👥', scene: 'Sone se pehle', tip: 'Sab ke samne' }, context: 'Ghar walon ko', bodyLang: 'Hath hilana', level: 1 },
{ en: 'Bye Ammi, I am going.', ur: 'خدا حافظ امی، میں جا رہا ہوں۔', words: [{e:'Bye', u:'خدا حافظ'}, {e:'I am going', u:'میں جا رہا ہوں'}], reply: 'Allah Hafiz, take care.', visual: { emoji: '👋🏃', scene: 'School jate waqt', tip: 'Jaldi' }, context: 'Ghar se nikalna', bodyLang: 'Bhagte hue', level: 1 },
{ en: 'Is everything okay?', ur: 'کیا سب ٹھیک ہے؟', words: [{e:'Is everything', u:'کیا سب'}, {e:'okay', u:'ٹھیک ہے'}], reply: 'Yes, absolutely.', visual: { emoji: '❓👌', scene: 'Fikar', tip: 'Naram aawaz' }, context: 'Check karna', bodyLang: 'Tawajjo dena', level: 1 },
{ en: 'Thank you, sir.', ur: 'شکریہ جناب۔', words: [{e:'Thank you', u:'شکریہ'}, {e:'sir', u:'جناب'}], reply: 'Welcome.', visual: { emoji: '👨\u200d🏫🙌', scene: 'Teacher se', tip: 'Respect' }, context: 'Maddad ke baad', bodyLang: 'Slight bow', level: 1 },
{ en: 'Excuse me, Miss.', ur: 'معاف کیجئے گا مس۔', words: [{e:'Excuse me', u:'معاف کیجئے گا'}, {e:'Miss', u:'مس'}], reply: 'Yes, Ahmed?', visual: { emoji: '☝️👩\u200d🏫', scene: 'Sawal poochna', tip: 'Polite' }, context: 'Tawajjo', bodyLang: 'Hath uthana', level: 1 },
{ en: 'I am okay today.', ur: 'میں آج ٹھیک ہوں۔', words: [{e:'I am okay', u:'میں ٹھیک ہوں'}, {e:'today', u:'آج'}], reply: 'Good.', visual: { emoji: '👍📅', scene: 'Bemari ke baad', tip: 'Tasalli' }, context: 'Haal', bodyLang: 'Nod', level: 1 },
{ en: 'See you again.', ur: 'پھر ملیں گے۔', words: [{e:'See you', u:'ملیں گے'}, {e:'again', u:'دوبارہ'}], reply: 'Sure.', visual: { emoji: '🔄', scene: 'Jane se pehle', tip: 'Umeed' }, context: 'Rukhsat', bodyLang: 'Wave', level: 1 },
{ en: 'Have an awesome day!', ur: 'تمہارا دن شاندار گزرے!', words: [{e:'Have an', u:'گزرے'}, {e:'awesome day', u:'شاندار دن'}], reply: 'Thanks!', visual: { emoji: '🌟☀️', scene: 'Dost ko kehna', tip: 'Excited' }, context: 'Rukhsat', bodyLang: 'Thumbs up', level: 1 },
{ en: 'Hello and welcome!', ur: 'ہیلو اور خوش آمدید!', words: [{e:'Hello', u:'ہیلو'}, {e:'and welcome', u:'اور خوش آمدید'}], reply: 'Thank you.', visual: { emoji: '🤗', scene: 'Mehman ka aana', tip: 'Khushi se' }, context: 'Greeting', bodyLang: 'Khule hath', level: 1 }
],
grammar: [
{ title: 'Time Greetings', visualTable: { headers: ['Time','English','Urdu'], rows: [['Subah','Good morning','Subah Bakhair'],['Dopehar','Good afternoon','Seh Pehar Bakhair'],['Sham','Good evening','Sham Bakhair']], color: '#FF9600' }, rules: [ { formula: 'Good + [waqt]', examples: [ {en:'Good morning.', ur:'Subah bakhair.'} ] } ], memoryTrick: '🧠 Suraj ke hisab se waqt badalta hai.', tip: '💡 12 baje se pehle morning, uske baad afternoon.' },
{ title: 'Farewells', visualTable: { headers: ['Word','Formal/Informal','Example'], rows: [['Goodbye','Formal','Goodbye sir'],['Bye','Informal','Bye Bilal']], color: '#FF9600' }, rules: [ { formula: '[Greeting] + [Naam/Title]', examples: [ {en:'Goodbye, Mr. Ali.', ur:'Khuda Hafiz, Mr. Ali.'}, {en:'Bye, Sara.', ur:'Khuda Hafiz, Sara.'} ] } ], memoryTrick: '🧠 BARA lafz = BARE log. CHOTA lafz = Dost.', tip: '💡 Teacher ko sirf Bye mat kahein.' },
{ title: 'How are you?', visualTable: { headers: ['English','Urdu','Reply'], rows: [['How are you?','Aap kaise hain?','I am fine'],['How is it going?','Kaisa chal raha hai?','Great / Not bad']], color: '#FF9600' }, rules: [ { formula: 'How + is/are + [subject]?', examples: [ {en:'How are you today?', ur:'Aaj aap kaise hain?'} ] } ], memoryTrick: '🧠 How ke baad helper verb aata hai.', tip: '💡 Informal mein How is it going zyada natural lagta hai.' },
{ title: 'Replies (I am fine)', visualTable: { headers: ['Feeling','English','Urdu'], rows: [['Acha','I am fine / Great','Main theek hoon'],['Darmiyana','Not bad / Okay','Theek thaak'],['Bura','Bad','Bura']], color: '#FF9600' }, rules: [ { formula: 'I am + [feeling]', examples: [ {en:'I am doing well.', ur:'Main theek chal raha hoon.'} ] } ], memoryTrick: '🧠 Doing well aur fine dono positive hain.', tip: '💡 Sirf I am fine ke bajaye I am great bhi try karein.' },
{ title: 'Please, Thanks, Welcome', visualTable: { headers: ['Situation','Word','Urdu'], rows: [['Kuch mangna','Please','Brah-e-karam'],['Shukriya','Thank you / Thanks','Shukriya'],['Jawab','Welcome','Khush aamdeed']], color: '#FF9600' }, rules: [ { formula: '[Polite word] + [Sentence]', examples: [ {en:'Please open it.', ur:'Brah-e-karam isay kholein.'}, {en:'Thank you very much.', ur:'Bohat shukriya.'} ] } ], memoryTrick: '🧠 Mangte waqt P, Milne ke baad T, Jawab mein W.', tip: '💡 Thanks doston ke liye, Thank you badon ke liye.' },
{ title: 'Apologizing', visualTable: { headers: ['Situation','Word','Example'], rows: [['Galti hona','Sorry','I am sorry'],['Tawajjo lena','Excuse me','Excuse me, sir']], color: '#FF9600' }, rules: [ { formula: '[Sorry/Excuse me] + [Reason]', examples: [ {en:'Sorry, I am late.', ur:'Maaf karein, mujhe dair ho gayi.'} ] } ], memoryTrick: '🧠 Galti = Sorry. Rasta/Tawajjo = Excuse me.', tip: '💡 Khastey waqt Excuse me bolein.' },
{ title: 'Titles (Sir/Madam/Mr/Miss)', visualTable: { headers: ['Word','Kiske liye?','Example'], rows: [['Sir','Mard','Yes sir'],['Madam','Aurat','Yes madam'],['Mr.','Mard ka naam','Mr. Ali'],['Miss','Aurat teacher','Miss Sara']], color: '#FF9600' }, rules: [ { formula: '[Title] + [Name]', examples: [ {en:'Mr. Ahmed is here.', ur:'Mr. Ahmed yahan hain.'} ] } ], memoryTrick: '🧠 Mr. ke sath naam lagana zaroori hai.', tip: '💡 Teacher ko Teacher bulane ke bajaye Sir/Madam bolein.' },
{ title: 'Time words', visualTable: { headers: ['English','Urdu','Time'], rows: [['Today','Aaj','Present'],['Tomorrow','Aanewala kal','Future'],['Later','Baad mein','Soon']], color: '#FF9600' }, rules: [ { formula: '[Sentence] + [Time word]', examples: [ {en:'I am fine today.', ur:'Main aaj theek hoon.'}, {en:'See you tomorrow.', ur:'Kal milte hain.'} ] } ], memoryTrick: '🧠 Time words aam taur par jumlay ke aakhir mein.', tip: '💡 See you today nahi bolte, See you later behtar hai.' },
{ title: 'See you + [time]', visualTable: { headers: ['English','Urdu','Example'], rows: [['See you later','Baad mein','See you later'],['See you soon','Jaldi','See you soon'],['See you tomorrow','Kal','See you tomorrow']], color: '#FF9600' }, rules: [ { formula: 'See you + [time word]', examples: [ {en:'See you on Monday.', ur:'Peer ko milte hain.'} ] } ], memoryTrick: '🧠 See you ka matlab Milna bhi hota hai.', tip: '💡 Yeh informal farewells hain.' },
{ title: 'Have a good day', visualTable: { headers: ['English','Urdu','Example'], rows: [['Good','Acha','Have a good day'],['Great','Shandar','Have a great day'],['Nice','Umdah','Have a nice day']], color: '#FF9600' }, rules: [ { formula: 'Have a + [good/great/nice] + [day/time]', examples: [ {en:'Have an awesome day.', ur:'Tumhara din shandar guzray.'} ] } ], memoryTrick: '🧠 Kisi ko rukhsat karte waqt dua dena.', tip: '💡 Subah ya dopehar ko Have a good day zaroor bolein.' },
{ title: 'Take care', visualTable: { headers: ['English','Urdu','Example'], rows: [['Take care','Apna khayal rakhna','Take care Ammi']], color: '#FF9600' }, rules: [ { formula: 'Take care + [of yourself]', examples: [ {en:'Take care of yourself.', ur:'Apna khayal rakhna.'} ] } ], memoryTrick: '🧠 Care = Khayal. Take = Rakhna.', tip: '💡 Akhri alfaaz ke taur par zabardast hai.' },
{ title: 'Good night', visualTable: { headers: ['English','Urdu','Rule'], rows: [['Good night','Shab bakhair','Sirf sone se pehle']], color: '#FF9600' }, rules: [ { formula: 'Good night + [person]', examples: [ {en:'Good night, sleep well.', ur:'Shab bakhair, achi tarah sona.'} ] } ], memoryTrick: '🧠 Night ka matlab din khatam, sone ki tayari.', tip: '💡 Milte waqt raat mein Good evening kahein, Good night nahi.' },
{ title: 'Informal vs Formal', visualTable: { headers: ['Type','Greeting','Farewell'], rows: [['Formal','Good morning','Goodbye'],['Informal','Hi / Hello','Bye / See you']], color: '#FF9600' }, rules: [ { formula: 'Situation ke mutabiq lafz chunein.', examples: [ {en:'Hi Bilal! (Informal)', ur:'Hi Bilal!'}, {en:'Good morning sir. (Formal)', ur:'Subah bakhair janab.'} ] } ], memoryTrick: '🧠 Boss/Teacher = Formal. Dost/Ammi = Informal.', tip: '💡 Dost ko Good morning sir kehna mazaqiya lagta hai.' },
{ title: 'And you? / How about you?', visualTable: { headers: ['English','Urdu','Example'], rows: [['And you?','Aur tum?','I am fine, and you?'],['How about you?','Tumhara kya haal hai?','How about you?']], color: '#FF9600' }, rules: [ { formula: '[My answer], + [And you / How about you?]', examples: [ {en:'I am good. How about you?', ur:'Main theek hoon. Aur tum?'} ] } ], memoryTrick: '🧠 Pura sawal dobara poochne ke bajaye short trick.', tip: '💡 Bat cheet ko jari rakhne ke liye zaroori hai.' },
{ title: 'Prepositions with time', visualTable: { headers: ['Preposition','Time','Example'], rows: [['In the','Morning/Afternoon/Evening','In the morning'],['At','Night','At night']], color: '#FF9600' }, rules: [ { formula: 'In the + [morning/evening], At + night', examples: [ {en:'I sleep at night.', ur:'Main raat ko sota hoon.'}, {en:'I wake up in the morning.', ur:'Main subah uthta hoon.'} ] } ], memoryTrick: '🧠 Night hamesha At leta hai.', tip: '💡 In the night aam taur par ghalat samjha jata hai.' },
{ title: 'I am doing vs I do', visualTable: { headers: ['English','Meaning','Example'], rows: [['I am doing (well)','Mera haal ab','I am doing great'],['I do','Main karta hoon','I do my work']], color: '#FF9600' }, rules: [ { formula: 'I am doing + [adjective]', examples: [ {en:'I am doing well.', ur:'Mera haal acha hai.'} ] } ], memoryTrick: '🧠 Doing well haal batata hai.', tip: '💡 How are you doing ka jawab I am doing well hota hai.' },
{ title: 'Nice to see you', visualTable: { headers: ['Phrase','Kab?','Example'], rows: [['Nice to meet you','Pehli baar','Nice to meet you'],['Nice to see you','Dobara','Nice to see you again']], color: '#FF9600' }, rules: [ { formula: 'Nice to + see/meet + you', examples: [ {en:'Good to see you, Bilal.', ur:'Bilal, tumhein dekh kar acha laga.'} ] } ], memoryTrick: '🧠 Meet = Pehli mulaqat, See = Purani mulaqat.', tip: '💡 Dost ko Nice to meet you mat kahein.' },
{ title: 'You are welcome', visualTable: { headers: ['Situation','English','Urdu'], rows: [['Jab koi Thanks kahe','You are welcome','Koi baat nahi'],['Jab koi aaye','Welcome','Khush aamdeed']], color: '#FF9600' }, rules: [ { formula: 'You are + welcome', examples: [ {en:'Thank you. - You are welcome.', ur:'Shukriya. - Koi baat nahi.'} ] } ], memoryTrick: '🧠 Welcome ke 2 matlab hain.', tip: '💡 Sirf Welcome ke bajaye You are welcome zyada acha hai.' },
{ title: 'Wake up vs Sleep', visualTable: { headers: ['English','Urdu','Action'], rows: [['Wake up','Jaagna','Uthna'],['Sleep','Sona','Let jana']], color: '#FF9600' }, rules: [ { formula: 'Wake up (Subah) / Sleep (Raat)', examples: [ {en:'Wake up early.', ur:'Jaldi utho.'}, {en:'Sleep well.', ur:'Achi tarah sona.'} ] } ], memoryTrick: '🧠 UP = Upar uthna (Jaagna).', tip: '💡 Wake ke baad aksar up lagta hai.' },
{ title: 'Early vs Late', visualTable: { headers: ['English','Urdu','Meaning'], rows: [['Early','Jaldi','Waqt se pehle'],['Late','Dair','Waqt ke baad']], color: '#FF9600' }, rules: [ { formula: 'Be + early/late', examples: [ {en:'I am late.', ur:'Mujhe dair ho gayi.'}, {en:'You are early.', ur:'Tum jaldi aa gaye.'} ] } ], memoryTrick: '🧠 Early hamesha acha, Late bura.', tip: '💡 Late hone par hamesha Sorry bolein.' }
],
story: {
title: 'Ahmed Ka Din',
level: '⭐ Day 2 — Beginner',
setting: { emoji: '🌅', place: 'Karachi, Ghar aur School', time: 'Subah se Raat', weather: '☀️ Khubsoorat din' },
paragraphs: [
{ line: 'It is morning in Karachi.', ur: 'کراچی میں صبح کا وقت ہے۔', words: ['morning'], visual: { emoji: '🌅', mood: 'Fresh', tip: 'Subah' } },
{ line: 'Ahmed wakes up early.', ur: 'احمد جلدی جاگتا ہے۔', words: ['early'], visual: { emoji: '🥱', mood: 'Active', tip: 'Jaldi uthna' } },
{ line: 'Good morning, Ammi!', ur: 'صبح بخیر امی!', words: ['Good morning'], visual: { emoji: '😊', mood: 'Respect', tip: 'Greeting' } },
{ line: 'Good morning, Ahmed. How are you today?', ur: 'صبح بخیر احمد۔ آج تم کیسے ہو؟', words: ['How','are','you','today'], visual: { emoji: '👩\u200d👦', mood: 'Loving', tip: 'Ammi ka sawal' } },
{ line: 'I am doing well, thanks.', ur: 'میں ٹھیک ہوں، شکریہ۔', words: ['doing','well','thanks'], visual: { emoji: '👍', mood: 'Fine', tip: 'Jawab' } },
{ line: 'Ahmed goes to school.', ur: 'احمد سکول جاتا ہے۔', words: ['school'], visual: { emoji: '🎒', mood: 'Ready', tip: 'School jana' } },
{ line: 'Good morning, sir.', ur: 'صبح بخیر جناب۔', words: ['sir'], visual: { emoji: '👨\u200d💼', mood: 'Polite', tip: 'Formal greeting' } },
{ line: 'Good morning, Ahmed. You are early.', ur: 'صبح بخیر احمد۔ تم جلدی آ گئے۔', words: ['early'], visual: { emoji: '⏰', mood: 'Impressed', tip: 'Waqt par' } },
{ line: 'Hi Bilal! How is it going?', ur: 'ہائے بلال! کیسا چل رہا ہے؟', words: ['How','going'], visual: { emoji: '👋', mood: 'Casual', tip: 'Informal' } },
{ line: 'Not bad, Ahmed. How about you?', ur: 'برا نہیں، احمد۔ تمہارا کیا حال ہے؟', words: ['Not','bad','about'], visual: { emoji: '🤷\u200d♂️', mood: 'Chill', tip: 'Wapas poochna' } },
{ line: 'I am great!', ur: 'میں زبردست ہوں!', words: ['great'], visual: { emoji: '🌟', mood: 'Excited', tip: 'Khush' } },
{ line: 'Excuse me, Miss Sara.', ur: 'معاف کیجئے گا، مس سارا۔', words: ['Excuse me','Miss'], visual: { emoji: '☝️', mood: 'Polite', tip: 'Tawajjo' } },
{ line: 'Thank you. You are welcome.', ur: 'شکریہ۔ کوئی بات نہیں۔', words: ['welcome'], visual: { emoji: '🤗', mood: 'Friendly', tip: 'Maddad' } },
{ line: 'Goodbye, sir.', ur: 'خدا حافظ جناب۔', words: ['Goodbye'], visual: { emoji: '👋', mood: 'Respect', tip: 'Formal farewell' } },
{ line: 'See you tomorrow, Bilal.', ur: 'کل ملتے ہیں بلال۔', words: ['See you','tomorrow'], visual: { emoji: '📅', mood: 'Happy', tip: 'Dost se wida' } },
{ line: 'Good evening, Ammi.', ur: 'شام بخیر امی۔', words: ['Good','evening'], visual: { emoji: '🌇', mood: 'Relaxed', tip: 'Sham' } },
{ line: 'Good night, Ammi.', ur: 'شب بخیر امی۔', words: ['Good night'], visual: { emoji: '😴', mood: 'Calm', tip: 'Sone se pehle' } },
{ line: 'Sleep well, my son.', ur: 'اچھی طرح سونا، میرے بیٹے!', words: ['Sleep','well'], visual: { emoji: '❤️', mood: 'Loving', tip: 'Maa ki dua' } }
],
moral: '✨ Adab se baat karna aur waqt par salam karna achay akhlaq ki nishani hai!'
},
summary: {
emoji: '🌅',
wordsLearned: 40,
sentencesLearned: 45,
grammarRules: 20,
studyTime: '2 hours',
nextDay: 'Numbers and Time',
achievement: '🏆 Greeting Champion!',
realLifeTask: '📋 Aaj subah se raat tak sahi waqt ke mutabiq greeting use karo!'
}
};

ALL_DAYS['en'][3] = {
theme: 'نمبر اور وقت',
themeEn: 'Numbers & Time',
emoji: '🔢',
color: '#FF9500',
scene: {
emoji: '🏫',
title: 'Ahmed Ka Time Table',
desc: 'Ahmed numbers aur waqt seekh raha hai.',
bg: 'linear-gradient(135deg, #1a2a1a, #0f1d0f)',
characters: [
{emoji: '👦', name: 'Ahmed', role: 'Tum (Student)'},
{emoji: '👧', name: 'Sara', role: 'Classmate'},
{emoji: '👨‍🏫', name: 'Mr. Ali', role: 'Teacher'}
]
},
vocab: [
{ w: 'One', u: 'ایک', p: 'WUN', ex: '"I have one book."', tip: 'Sabse pehla number', visual: { emoji: '1️⃣', scene: 'Ek ungli uthana', memoryTrick: 'One = Wahid (ek)', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"One student."'}, {emoji:'💼', place:'Office mein', example:'"One meeting."'}, {emoji:'🏠', place:'Ghar mein', example:'"One cup."'} ], mistake: '⚠️ Galti: Won aur One ki aawaz same hai, matlab alag hai.', level: 1 },
{ w: 'Two', u: 'دو', p: 'TOO', ex: '"I have two pens."', tip: 'Do cheezein batane ke liye', visual: { emoji: '2️⃣', scene: 'Do ungliyan', memoryTrick: 'Two = Do', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Two books."'}, {emoji:'💼', place:'Office mein', example:'"Two meetings."'}, {emoji:'🏠', place:'Ghar mein', example:'"Two cups."'} ], mistake: '⚠️ Galti: To (ke liye) aur Too (bhi) aur Two (2) alag alag hain.', level: 1 },
{ w: 'Three', u: 'تین', p: 'THREE', ex: '"Three students."', tip: 'Teen cheezein', visual: { emoji: '3️⃣', scene: 'Teen ungliyan', memoryTrick: 'Three = Teen', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Three days."'}, {emoji:'💼', place:'Office mein', example:'"Three files."'}, {emoji:'🏠', place:'Ghar mein', example:'"Three rooms."'} ], mistake: '⚠️ Galti: Th ki aawaz T nahi, "th" bolein.', level: 1 },
{ w: 'Four', u: 'چار', p: 'FOR', ex: '"Four chairs."', tip: 'Char cheezein', visual: { emoji: '4️⃣', scene: 'Char ungliyan', memoryTrick: 'Four = Char', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Four classes."'}, {emoji:'💼', place:'Office mein', example:'"Four people."'}, {emoji:'🏠', place:'Ghar mein', example:'"Four walls."'} ], mistake: '⚠️ Galti: For (ke liye) aur Four (4) ki spelling alag hai.', level: 1 },
{ w: 'Five', u: 'پانچ', p: 'FYVE', ex: '"Five minutes please."', tip: 'Paanch cheezein', visual: { emoji: '5️⃣', scene: 'Poori haath ki ungliyan', memoryTrick: 'Five = Paanch', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Five questions."'}, {emoji:'💼', place:'Office mein', example:'"Five minutes."'}, {emoji:'🏠', place:'Ghar mein', example:'"Five rupees."'} ], mistake: '⚠️ Galti: Fife nahi, Five hota hai.', level: 1 },
{ w: 'Six', u: 'چھ', p: 'SIKS', ex: '"Six oclock."', tip: 'Chhay cheezein', visual: { emoji: '6️⃣', scene: 'Chhay ungliyan', memoryTrick: 'Six = Chhay', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Six students."'}, {emoji:'💼', place:'Office mein', example:'"Six floors."'}, {emoji:'🏠', place:'Ghar mein', example:'"Six eggs."'} ], mistake: '⚠️ Galti: Siks nahi likhna, Six likhna hai.', level: 1 },
{ w: 'Seven', u: 'سات', p: 'SEV-en', ex: '"Seven days in a week."', tip: 'Saat cheezein', visual: { emoji: '7️⃣', scene: 'Saat ungliyan', memoryTrick: 'Seven = Saat', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Seven periods."'}, {emoji:'💼', place:'Office mein', example:'"Seven days."'}, {emoji:'🏠', place:'Ghar mein', example:'"Seven o clock."'} ], mistake: '⚠️ Galti: Saven nahi, Seven hota hai.', level: 1 },
{ w: 'Eight', u: 'آٹھ', p: 'AYT', ex: '"School starts at eight."', tip: 'Aath cheezein', visual: { emoji: '8️⃣', scene: 'Aath ungliyan', memoryTrick: 'Eight = Aath', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Eight AM."'}, {emoji:'💼', place:'Office mein', example:'"Eight hours."'}, {emoji:'🏠', place:'Ghar mein', example:'"Eight rupees."'} ], mistake: '⚠️ Galti: Eit nahi, Eight likhna hai (gh silent hai).', level: 1 },
{ w: 'Nine', u: 'نو', p: 'NYN', ex: '"Nine students in class."', tip: 'Nau cheezein', visual: { emoji: '9️⃣', scene: 'Nau ungliyan', memoryTrick: 'Nine = Nau', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Nine books."'}, {emoji:'💼', place:'Office mein', example:'"Nine AM."'}, {emoji:'🏠', place:'Ghar mein', example:'"Nine rupees."'} ], mistake: '⚠️ Galti: Nain (aankhein) aur Nine alag hain.', level: 1 },
{ w: 'Ten', u: 'دس', p: 'TEN', ex: '"Ten minutes left."', tip: 'Das cheezein', visual: { emoji: '🔟', scene: 'Das ungliyan dono haath', memoryTrick: 'Ten = Das', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Ten questions."'}, {emoji:'💼', place:'Office mein', example:'"Ten minutes."'}, {emoji:'🏠', place:'Ghar mein', example:'"Ten rupees."'} ], mistake: '⚠️ Galti: Ten sahi hai, Tin ghalat hai.', level: 1 },
{ w: 'Eleven', u: 'گیارہ', p: 'ih-LEV-en', ex: '"Eleven oclock."', tip: 'Gyarah - das ke baad', visual: { emoji: '1️⃣1️⃣', scene: 'Gyarah', memoryTrick: 'Eleven = Gyarah', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Eleven AM."'}, {emoji:'💼', place:'Office mein', example:'"Eleven people."'}, {emoji:'🏠', place:'Ghar mein', example:'"Eleven oclock."'} ], mistake: '⚠️ Galti: Elevan nahi, Eleven hota hai.', level: 1 },
{ w: 'Twelve', u: 'بارہ', p: 'TWELV', ex: '"Twelve months in a year."', tip: 'Barah - saal ke mahine', visual: { emoji: '1️⃣2️⃣', scene: 'Barah baj rahe hain', memoryTrick: 'Twelve = Barah', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Twelve noon."'}, {emoji:'💼', place:'Office mein', example:'"Twelve months."'}, {emoji:'🏠', place:'Ghar mein', example:'"Twelve oclock."'} ], mistake: '⚠️ Galti: Twelv ke aakhir mein e hota hai.', level: 1 },
{ w: 'Twenty', u: 'بیس', p: 'TWEN-tee', ex: '"Twenty students."', tip: 'Bees - das ka double', visual: { emoji: '2️⃣0️⃣', scene: 'Bees ka number', memoryTrick: 'Twenty = Bees', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Twenty questions."'}, {emoji:'💼', place:'Office mein', example:'"Twenty days."'}, {emoji:'🏠', place:'Ghar mein', example:'"Twenty rupees."'} ], mistake: '⚠️ Galti: Twinty nahi, Twenty hota hai.', level: 1 },
{ w: 'Thirty', u: 'تیس', p: 'THUR-tee', ex: '"Thirty minutes."', tip: 'Tees - adha ghanta', visual: { emoji: '3️⃣0️⃣', scene: 'Tees minute', memoryTrick: 'Thirty = Tees', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Thirty students."'}, {emoji:'💼', place:'Office mein', example:'"Thirty minutes."'}, {emoji:'🏠', place:'Ghar mein', example:'"Thirty rupees."'} ], mistake: '⚠️ Galti: Th sahi ada karein - "Thirty" bolein.', level: 1 },
{ w: 'Forty', u: 'چالیس', p: 'FOR-tee', ex: '"Forty questions."', tip: 'Chalis - mazboot number', visual: { emoji: '4️⃣0️⃣', scene: 'Chalis ka number', memoryTrick: 'Forty = Chalis', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Forty marks."'}, {emoji:'💼', place:'Office mein', example:'"Forty people."'}, {emoji:'🏠', place:'Ghar mein', example:'"Forty rupees."'} ], mistake: '⚠️ Galti: Fourty ghalat hai, Forty sahi spelling hai.', level: 1 },
{ w: 'Fifty', u: 'پچاس', p: 'FIF-tee', ex: '"Fifty percent."', tip: 'Pachas - adha sau', visual: { emoji: '5️⃣0️⃣', scene: 'Adha sau', memoryTrick: 'Fifty = Pachas', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Fifty marks."'}, {emoji:'💼', place:'Office mein', example:'"Fifty percent."'}, {emoji:'🏠', place:'Ghar mein', example:'"Fifty rupees."'} ], mistake: '⚠️ Galti: Fifthy nahi, Fifty hota hai.', level: 1 },
{ w: 'Hundred', u: 'سو', p: 'HUN-dred', ex: '"One hundred rupees."', tip: 'Sau - pura sau', visual: { emoji: '💯', scene: 'Ek sau percent', memoryTrick: 'Hundred = Sau', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Hundred marks."'}, {emoji:'💼', place:'Office mein', example:'"Hundred people."'}, {emoji:'🏠', place:'Ghar mein', example:'"Hundred rupees."'} ], mistake: '⚠️ Galti: Hunderd nahi, Hundred sahi spelling hai.', level: 1 },
{ w: 'Time', u: 'وقت', p: 'TYME', ex: '"What is the time?"', tip: 'Waqt poochna', visual: { emoji: '⏰', scene: 'Ghadi dekhna', memoryTrick: 'Time = Waqt', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Class time."'}, {emoji:'💼', place:'Office mein', example:'"Meeting time."'}, {emoji:'🏠', place:'Ghar mein', example:'"Dinner time."'} ], mistake: '⚠️ Galti: Taim spelling ghalat hai.', level: 1 },
{ w: 'Clock', u: 'گھڑی / گھنٹہ', p: 'KLOK', ex: '"The clock says eight."', tip: 'Deewar ki ghadi ya waqt', visual: { emoji: '🕗', scene: 'Deewar par ghadi', memoryTrick: 'Clock = Ghadi', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Wall clock."'}, {emoji:'💼', place:'Office mein', example:'"Office clock."'}, {emoji:'🏠', place:'Ghar mein', example:'"Kitchen clock."'} ], mistake: '⚠️ Galti: Watch (haath ki ghadi) aur Clock (deewar ki ghadi) alag hain.', level: 1 },
{ w: 'Hour', u: 'گھنٹہ', p: 'OW-er', ex: '"One hour of study."', tip: 'Saath minute ka ek ghanta', visual: { emoji: '🕐', scene: 'Ek ghante ki suiyan', memoryTrick: 'Hour = Ghanta', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"One hour class."'}, {emoji:'💼', place:'Office mein', example:'"Two hour meeting."'}, {emoji:'🏠', place:'Ghar mein', example:'"Hour of sleep."'} ], mistake: '⚠️ Galti: H silent hai - "Ow-er" bolo, "How-er" nahi.', level: 1 },
{ w: 'Minute', u: 'منٹ', p: 'MIN-it', ex: '"Five minutes please."', tip: 'Saath second ka ek minute', visual: { emoji: '⏱️', scene: 'Ek minute ki suie', memoryTrick: 'Minute = Minit', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Ten minutes break."'}, {emoji:'💼', place:'Office mein', example:'"Five minute call."'}, {emoji:'🏠', place:'Ghar mein', example:'"One minute."'} ], mistake: '⚠️ Galti: Minoot nahi, Minute = MIN-it bola jata hai.', level: 1 },
{ w: 'Second', u: 'سیکنڈ', p: 'SEK-und', ex: '"Wait one second."', tip: 'Ek minute mein saath second', visual: { emoji: '⏱️', scene: 'Bahut thoda waqt', memoryTrick: 'Second = Sekand', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Ten seconds."'}, {emoji:'💼', place:'Office mein', example:'"One second."'}, {emoji:'🏠', place:'Ghar mein', example:'"Wait a second."'} ], mistake: '⚠️ Galti: Second ka matlab "doosra" bhi hota hai - context samjho.', level: 1 },
{ w: 'Half', u: 'آدھا', p: 'HAF', ex: '"Half past eight."', tip: 'Adha - 30 minutes', visual: { emoji: '🕣', scene: 'Ghadi par aadha', memoryTrick: 'Half = Adha', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Half day."'}, {emoji:'💼', place:'Office mein', example:'"Half hour."'}, {emoji:'🏠', place:'Ghar mein', example:'"Half glass."'} ], mistake: '⚠️ Galti: Haf nahi, Half hota hai.', level: 1 },
{ w: 'Quarter', u: 'پاؤ / پندرہ منٹ', p: 'KWOR-ter', ex: '"Quarter past nine."', tip: 'Chautha hissa - 15 minute', visual: { emoji: '🕧', scene: 'Ghadi par chautha hissa', memoryTrick: 'Quarter = Pao (1/4)', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Quarter to ten."'}, {emoji:'💼', place:'Office mein', example:'"Quarter hour."'}, {emoji:'🏠', place:'Ghar mein', example:'"Quarter kg."'} ], mistake: '⚠️ Galti: Kwarter nahi, Quarter hota hai.', level: 1 },
{ w: 'Past', u: 'بعد / گزرا ہوا', p: 'PAST', ex: '"Ten past eight."', tip: 'Ghante ke baad minute batana', visual: { emoji: '➡️', scene: 'Waqt guzarna', memoryTrick: 'Past = Baad (time mein)', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Half past eight."'}, {emoji:'💼', place:'Office mein', example:'"Ten past two."'}, {emoji:'🏠', place:'Ghar mein', example:'"Five past six."'} ], mistake: '⚠️ Galti: Past guzre waqt ke liye bhi aata hai - context dekho.', level: 1 },
{ w: 'Morning', u: 'صبح', p: 'MOR-ning', ex: '"Eight in the morning."', tip: 'Subah ka waqt - AM', visual: { emoji: '🌅', scene: 'Subah ka suraj', memoryTrick: 'Morning = Subah', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Morning class."'}, {emoji:'💼', place:'Office mein', example:'"Morning meeting."'}, {emoji:'🏠', place:'Ghar mein', example:'"Morning tea."'} ], mistake: '⚠️ Galti: Dopehar mein morning mat kaho.', level: 1 },
{ w: 'Afternoon', u: 'دوپہر', p: 'AF-ter-noon', ex: '"School ends in the afternoon."', tip: 'Baarah baje ke baad', visual: { emoji: '☀️', scene: 'Dopehar ka suraj', memoryTrick: 'After + Noon = Dopehar', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Afternoon break."'}, {emoji:'💼', place:'Office mein', example:'"Afternoon meeting."'}, {emoji:'🏠', place:'Ghar mein', example:'"Afternoon nap."'} ], mistake: '⚠️ Galti: Subah ko afternoon mat kaho.', level: 1 },
{ w: 'Evening', u: 'شام', p: 'EEV-ning', ex: '"Study in the evening."', tip: 'Sham paanch baje ke baad', visual: { emoji: '🌇', scene: 'Sham ka suraj', memoryTrick: 'Evening = Sham', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Evening class."'}, {emoji:'💼', place:'Office mein', example:'"Evening shift."'}, {emoji:'🏠', place:'Ghar mein', example:'"Evening walk."'} ], mistake: '⚠️ Galti: Sone waqt Evening nahi, Good night kaho.', level: 1 },
{ w: 'Midnight', u: 'آدھی رات', p: 'MID-nyt', ex: '"It is midnight."', tip: 'Raat ke baarah baje', visual: { emoji: '🌙', scene: 'Andhere mein baarah baj rahe hain', memoryTrick: 'Mid + Night = Adhi Raat', color: '#FF9500' }, situations: [ {emoji:'📱', place:'Phone par', example:'"Call at midnight."'}, {emoji:'💼', place:'Office mein', example:'"Midnight deadline."'}, {emoji:'🏠', place:'Ghar mein', example:'"Wake at midnight."'} ], mistake: '⚠️ Galti: Midnight sirf 12:00 AM ke liye hota hai.', level: 1 },
{ w: 'Yesterday', u: 'گزرا ہوا کل', p: 'YES-ter-day', ex: '"Yesterday was Monday."', tip: 'Guzra hua kal - pichla din', visual: { emoji: '◀️', scene: 'Pichle din ki taraf', memoryTrick: 'Yesterday = Beeta hua kal', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Yesterday test."'}, {emoji:'💼', place:'Office mein', example:'"Yesterday meeting."'}, {emoji:'🏠', place:'Ghar mein', example:'"Yesterday food."'} ], mistake: '⚠️ Galti: Guzre din ke liye Yesterday, aane wale ke liye Tomorrow.', level: 1 },
{ w: 'Today', u: 'آج', p: 'too-DAY', ex: '"Today is Tuesday."', tip: 'Aaj ka din', visual: { emoji: '📅', scene: 'Aaj ki date', memoryTrick: 'Today = Aaj', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Today homework."'}, {emoji:'💼', place:'Office mein', example:'"Today deadline."'}, {emoji:'🏠', place:'Ghar mein', example:'"Today dinner."'} ], mistake: '⚠️ Galti: To-day alag alag nahi likhte.', level: 1 },
{ w: 'Tomorrow', u: 'آنے والا کل', p: 'too-MOR-oh', ex: '"Tomorrow is Wednesday."', tip: 'Aane wala kal', visual: { emoji: '▶️', scene: 'Agle din ki taraf', memoryTrick: 'Tomorrow = Agla kal', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Tomorrow test."'}, {emoji:'💼', place:'Office mein', example:'"Tomorrow meeting."'}, {emoji:'🏠', place:'Ghar mein', example:'"Tomorrow holiday."'} ], mistake: '⚠️ Galti: Guzre kal ke liye Tomorrow nahi, Yesterday hota hai.', level: 1 },
{ w: 'Week', u: 'ہفتہ', p: 'WEEK', ex: '"Seven days in a week."', tip: 'Saat dinon ka hafta', visual: { emoji: '📆', scene: 'Saat dinon ka calendar', memoryTrick: 'Week = Hafta', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"This week exam."'}, {emoji:'💼', place:'Office mein', example:'"Next week meeting."'}, {emoji:'🏠', place:'Ghar mein', example:'"Last week trip."'} ], mistake: '⚠️ Galti: Weak (kamzor) aur Week (hafta) ki aawaz same hai.', level: 1 },
{ w: 'Month', u: 'مہینہ', p: 'MUNTH', ex: '"Twelve months in a year."', tip: 'Tees din ka mahina', visual: { emoji: '🗓️', scene: 'Mahine ka calendar', memoryTrick: 'Month = Mahina', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"This month exam."'}, {emoji:'💼', place:'Office mein', example:'"Monthly salary."'}, {emoji:'🏠', place:'Ghar mein', example:'"Next month."'} ], mistake: '⚠️ Galti: Munth nahi, Month hota hai (th sound).', level: 1 },
{ w: 'Year', u: 'سال', p: 'YEER', ex: '"Twelve months in a year."', tip: 'Barah mahinon ka saal', visual: { emoji: '🎆', scene: 'Naya saal', memoryTrick: 'Year = Saal', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"This year result."'}, {emoji:'💼', place:'Office mein', example:'"Yearly bonus."'}, {emoji:'🏠', place:'Ghar mein', example:'"Happy new year."'} ], mistake: '⚠️ Galti: Yaar (dost) aur Year (saal) ki spelling alag hai.', level: 1 },
{ w: 'Schedule', u: 'شیڈول / وقت کا جدول', p: 'SKEJ-ool', ex: '"What is your schedule today?"', tip: 'Kaam ka waqt ka jadwal', visual: { emoji: '📋', scene: 'Time table dekhna', memoryTrick: 'Schedule = Jadwal', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"School schedule."'}, {emoji:'💼', place:'Office mein', example:'"Work schedule."'}, {emoji:'🏠', place:'Ghar mein', example:'"Daily schedule."'} ], mistake: '⚠️ Galti: Skedule ya Shedjool dono chalte hain, Schedule sahi spelling.', level: 1 },
{ w: 'First', u: 'پہلا', p: 'FURST', ex: '"First period is English."', tip: 'Tartib mein pehla', visual: { emoji: '🥇', scene: 'Pehla number', memoryTrick: 'First = Pehla', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"First class."'}, {emoji:'💼', place:'Office mein', example:'"First floor."'}, {emoji:'🏠', place:'Ghar mein', example:'"First time."'} ], mistake: '⚠️ Galti: One aur First alag hain - One ginti, First tartib.', level: 1 },
{ w: 'Last', u: 'آخری', p: 'LAST', ex: '"Last period is sports."', tip: 'Tartib mein aakhri', visual: { emoji: '🏁', scene: 'Aakhri ghanta', memoryTrick: 'Last = Aakhri', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Last class."'}, {emoji:'💼', place:'Office mein', example:'"Last meeting."'}, {emoji:'🏠', place:'Ghar mein', example:'"Last night."'} ], mistake: '⚠️ Galti: Past (guzra) aur Last (aakhri) alag hain.', level: 1 },
{ w: 'Next', u: 'اگلا', p: 'NEKST', ex: '"Next class is Maths."', tip: 'Baad wala - agla', visual: { emoji: '⏭️', scene: 'Agla number', memoryTrick: 'Next = Agla', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Next period."'}, {emoji:'💼', place:'Office mein', example:'"Next week."'}, {emoji:'🏠', place:'Ghar mein', example:'"Next time."'} ], mistake: '⚠️ Galti: Nekst nahi, Next hota hai.', level: 1 },
{ w: 'AM', u: 'صبح (دوپہر سے پہلے)', p: 'AY-EM', ex: '"School starts at eight AM."', tip: 'Raat 12 baje se dopehar 12 baje tak', visual: { emoji: '🌅', scene: 'Subah ka waqt', memoryTrick: 'AM = Ante Meridiem = Pehle Dopehar', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Eight AM class."'}, {emoji:'💼', place:'Office mein', example:'"Nine AM meeting."'}, {emoji:'🏠', place:'Ghar mein', example:'"Six AM wake up."'} ], mistake: '⚠️ Galti: Subah ke waqt AM, sham ke waqt PM lagao.', level: 1 },
{ w: 'PM', u: 'سہ پہر / شام (دوپہر کے بعد)', p: 'PEE-EM', ex: '"School ends at two PM."', tip: 'Dopehar 12 baje se raat 12 baje tak', visual: { emoji: '🌆', scene: 'Sham ka waqt', memoryTrick: 'PM = Post Meridiem = Baad Dopehar', color: '#FF9500' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Two PM dismissal."'}, {emoji:'💼', place:'Office mein', example:'"Five PM close."'}, {emoji:'🏠', place:'Ghar mein', example:'"Eight PM dinner."'} ], mistake: '⚠️ Galti: Sham mein PM, subah mein AM - confuse mat karo.', level: 1 }
],
sentences: [
{ en: 'What time is it?', ur: 'کیا وقت ہوا ہے؟', words: [{e:'What time', u:'کیا وقت'}, {e:'is it', u:'ہوا ہے'}], reply: 'It is eight o clock.', visual: {emoji:'⏰❓', scene:'Ghadi dekhna', tip:'Waqt poochne ka tareeqa'}, context:'Waqt poochna', bodyLang:'Ghadi ki taraf dekho', level: 1 },
{ en: 'It is eight o clock.', ur: 'آٹھ بج گئے ہیں۔', words: [{e:'It is', u:'یہ ہے'}, {e:'eight', u:'آٹھ'}, {e:'o clock', u:'بجے'}], reply: 'Time to go to school!', visual: {emoji:'🕗', scene:'Aath baj rahe hain', tip:'Waqt batana'}, context:'Waqt batana', bodyLang:'Ghadi ki taraf ishara karo', level: 1 },
{ en: 'School starts at eight AM.', ur: 'سکول آٹھ بجے صبح شروع ہوتا ہے۔', words: [{e:'starts at', u:'شروع ہوتا ہے'}, {e:'eight AM', u:'آٹھ بجے صبح'}], reply: 'I need to hurry!', visual: {emoji:'🏫⏰', scene:'School ka waqt', tip:'Schedule batana'}, context:'Schedule batana', bodyLang:'Jaldi karo ishara', level: 1 },
{ en: 'It is half past eight.', ur: 'آٹھ بج کر تیس منٹ ہوئے ہیں۔', words: [{e:'half past', u:'بج کر تیس منٹ'}, {e:'eight', u:'آٹھ'}], reply: 'You are late!', visual: {emoji:'🕣', scene:'Aadha ghanta guzar gaya', tip:'Half past'}, context:'Waqt batana', bodyLang:'Tez chalo', level: 1 },
{ en: 'It is quarter past nine.', ur: 'نو بج کر پندرہ منٹ ہوئے ہیں۔', words: [{e:'quarter past', u:'پندرہ منٹ بعد'}, {e:'nine', u:'نو'}], reply: 'Class has started.', visual: {emoji:'🕤', scene:'Pandrah minute guzar gaye', tip:'Quarter past'}, context:'Waqt batana', bodyLang:'Normal tone', level: 1 },
{ en: 'It is quarter to ten.', ur: 'دس بجنے میں پندرہ منٹ ہیں۔', words: [{e:'quarter to', u:'پندرہ منٹ باقی'}, {e:'ten', u:'دس'}], reply: 'Almost time for break.', visual: {emoji:'🕥', scene:'Pandrah minute baaki hain', tip:'Quarter to'}, context:'Waqt batana', bodyLang:'Normal', level: 1 },
{ en: 'What day is today?', ur: 'آج کون سا دن ہے؟', words: [{e:'What day', u:'کون سا دن'}, {e:'is today', u:'آج ہے'}], reply: 'Today is Monday.', visual: {emoji:'📅❓', scene:'Calendar dekhna', tip:'Din poochna'}, context:'Din poochna', bodyLang:'Sawal jaisi shakal', level: 1 },
{ en: 'Today is Monday.', ur: 'آج پیر ہے۔', words: [{e:'Today is', u:'آج ہے'}, {e:'Monday', u:'پیر'}], reply: 'School week starts!', visual: {emoji:'📅', scene:'Hafta shuru', tip:'Din batana'}, context:'Din batana', bodyLang:'Normal', level: 1 },
{ en: 'Yesterday was Sunday.', ur: 'کل اتوار تھا۔', words: [{e:'Yesterday was', u:'کل تھا'}, {e:'Sunday', u:'اتوار'}], reply: 'I rested all day.', visual: {emoji:'◀️📅', scene:'Guzra hua kal', tip:'Guzra din batana'}, context:'Guzra din batana', bodyLang:'Past ki taraf ishara', level: 1 },
{ en: 'Tomorrow is Tuesday.', ur: 'کل منگل ہوگا۔', words: [{e:'Tomorrow is', u:'کل ہوگا'}, {e:'Tuesday', u:'منگل'}], reply: 'We have a test!', visual: {emoji:'▶️📅', scene:'Agla din', tip:'Agla din batana'}, context:'Agla din batana', bodyLang:'Agge ki taraf ishara', level: 1 },
{ en: 'How many students are there?', ur: 'کتنے طالب علم ہیں؟', words: [{e:'How many', u:'کتنے'}, {e:'students', u:'طالب علم'}], reply: 'There are thirty students.', visual: {emoji:'👥❓', scene:'Students ginna', tip:'Ginti poochna'}, context:'Ginti poochna', bodyLang:'Haath se ishara karo', level: 1 },
{ en: 'There are thirty students in the class.', ur: 'کلاس میں تیس طالب علم ہیں۔', words: [{e:'There are', u:'ہیں'}, {e:'thirty', u:'تیس'}], reply: 'That is a big class!', visual: {emoji:'👥3️⃣0️⃣', scene:'Bari class', tip:'Ginti batana'}, context:'Ginti batana', bodyLang:'Haath phailao', level: 1 },
{ en: 'I wake up at six in the morning.', ur: 'میں صبح چھ بجے اٹھتا ہوں۔', words: [{e:'wake up at', u:'اٹھتا ہوں'}, {e:'six', u:'چھ'}, {e:'morning', u:'صبح'}], reply: 'You are very disciplined!', visual: {emoji:'🌅⏰', scene:'Subah jaldi uthna', tip:'Routine batana'}, context:'Routine batana', bodyLang:'Tasalli se bolein', level: 1 },
{ en: 'My first class is at eight AM.', ur: 'میری پہلی کلاس آٹھ بجے صبح ہے۔', words: [{e:'first class', u:'پہلی کلاس'}, {e:'eight AM', u:'آٹھ بجے صبح'}], reply: 'Which subject?', visual: {emoji:'📚🕗', scene:'Pehli class', tip:'Schedule batana'}, context:'Schedule batana', bodyLang:'Normal', level: 1 },
{ en: 'The last class ends at two PM.', ur: 'آخری کلاس دو بجے دوپہر ختم ہوتی ہے۔', words: [{e:'last class', u:'آخری کلاس'}, {e:'two PM', u:'دو بجے دوپہر'}], reply: 'Then we go home.', visual: {emoji:'🏁🕑', scene:'Aakhri class', tip:'Schedule batana'}, context:'Schedule batana', bodyLang:'Relieved expression', level: 1 },
{ en: 'I study for two hours every day.', ur: 'میں روزانہ دو گھنٹے پڑھتا ہوں۔', words: [{e:'study for', u:'پڑھتا ہوں'}, {e:'two hours', u:'دو گھنٹے'}], reply: 'That is very good!', visual: {emoji:'📖⏱️', scene:'Padhna', tip:'Duration batana'}, context:'Duration batana', bodyLang:'Proud', level: 1 },
{ en: 'Wait five minutes please.', ur: 'پانچ منٹ انتظار کریں۔', words: [{e:'Wait', u:'انتظار کریں'}, {e:'five minutes', u:'پانچ منٹ'}], reply: 'Okay, no problem.', visual: {emoji:'✋5️⃣', scene:'Thoda intezaar', tip:'Waqt maangna'}, context:'Waqt maangna', bodyLang:'Hath uthao', level: 1 },
{ en: 'There are twelve months in a year.', ur: 'ایک سال میں بارہ مہینے ہوتے ہیں۔', words: [{e:'twelve months', u:'بارہ مہینے'}, {e:'in a year', u:'ایک سال میں'}], reply: 'Yes, that is correct.', visual: {emoji:'🗓️1️⃣2️⃣', scene:'Saal ke mahine', tip:'Fact batana'}, context:'Fact batana', bodyLang:'Confident', level: 1 },
{ en: 'There are seven days in a week.', ur: 'ایک ہفتے میں سات دن ہوتے ہیں۔', words: [{e:'seven days', u:'سات دن'}, {e:'in a week', u:'ایک ہفتے میں'}], reply: 'Monday to Sunday.', visual: {emoji:'📆7️⃣', scene:'Hafta', tip:'Fact batana'}, context:'Fact batana', bodyLang:'Normal', level: 1 },
{ en: 'I am twenty years old.', ur: 'میں بیس سال کا ہوں۔', words: [{e:'twenty', u:'بیس'}, {e:'years old', u:'سال کا'}], reply: 'You are young!', visual: {emoji:'🎂2️⃣0️⃣', scene:'Umar batana', tip:'Umar batana'}, context:'Umar batana', bodyLang:'Normal', level: 1 },
{ en: 'My phone number is zero three zero zero.', ur: 'میرا فون نمبر صفر تین صفر صفر ہے۔', words: [{e:'phone number', u:'فون نمبر'}, {e:'is', u:'ہے'}], reply: 'Let me save it.', visual: {emoji:'📱🔢', scene:'Number dena', tip:'Number batana'}, context:'Number dena', bodyLang:'Phone dikhao', level: 1 },
{ en: 'The price is fifty rupees.', ur: 'قیمت پچاس روپے ہے۔', words: [{e:'price is', u:'قیمت ہے'}, {e:'fifty', u:'پچاس'}], reply: 'That is cheap!', visual: {emoji:'💰5️⃣0️⃣', scene:'Daam batana', tip:'Daam batana'}, context:'Khareedari', bodyLang:'Normal', level: 1 },
{ en: 'I scored one hundred marks.', ur: 'میں نے سو نمبر لیے۔', words: [{e:'one hundred', u:'ایک سو'}, {e:'marks', u:'نمبر'}], reply: 'Excellent! Well done!', visual: {emoji:'💯🎉', scene:'Sau number', tip:'Achievement'}, context:'Result batana', bodyLang:'Proud smile', level: 1 },
{ en: 'It is midnight.', ur: 'آدھی رات ہوگئی ہے۔', words: [{e:'It is', u:'یہ ہے'}, {e:'midnight', u:'آدھی رات'}], reply: 'Go to sleep now!', visual: {emoji:'🌙12️⃣', scene:'Adhi raat', tip:'Raat ka waqt'}, context:'Raat ka waqt', bodyLang:'Neend bhari aawaz', level: 1 },
{ en: 'Class starts in ten minutes.', ur: 'دس منٹ میں کلاس شروع ہوگی۔', words: [{e:'starts in', u:'میں شروع'}, {e:'ten minutes', u:'دس منٹ'}], reply: 'Let us hurry!', visual: {emoji:'⏱️🏫', scene:'Class shuru hone wali', tip:'Jaldi'}, context:'Warning dena', bodyLang:'Jaldi ka ishara', level: 1 },
{ en: 'What is your schedule for today?', ur: 'آج آپ کا شیڈول کیا ہے؟', words: [{e:'schedule', u:'شیڈول'}, {e:'for today', u:'آج کے لیے'}], reply: 'I have five classes.', visual: {emoji:'📋❓', scene:'Jadwal poochna', tip:'Jadwal poochna'}, context:'Jadwal poochna', bodyLang:'Curious', level: 1 },
{ en: 'I have five classes today.', ur: 'آج میری پانچ کلاسیں ہیں۔', words: [{e:'five classes', u:'پانچ کلاسیں'}, {e:'today', u:'آج'}], reply: 'That is a busy day.', visual: {emoji:'📚5️⃣', scene:'Paanch class', tip:'Schedule batana'}, context:'Schedule batana', bodyLang:'Normal', level: 1 },
{ en: 'The next class is at ten AM.', ur: 'اگلی کلاس دس بجے صبح ہے۔', words: [{e:'next class', u:'اگلی کلاس'}, {e:'ten AM', u:'دس بجے صبح'}], reply: 'We have thirty minutes.', visual: {emoji:'⏭️📚', scene:'Agla period', tip:'Agla waqt'}, context:'Schedule batana', bodyLang:'Normal', level: 1 },
{ en: 'I sleep at eleven PM.', ur: 'میں گیارہ بجے رات کو سوتا ہوں۔', words: [{e:'sleep at', u:'سوتا ہوں'}, {e:'eleven PM', u:'گیارہ بجے رات'}], reply: 'That is late!', visual: {emoji:'😴1️⃣1️⃣', scene:'Sone ka waqt', tip:'Raat ki routine'}, context:'Routine batana', bodyLang:'Thaka hua', level: 1 },
{ en: 'January is the first month.', ur: 'جنوری پہلا مہینہ ہے۔', words: [{e:'January', u:'جنوری'}, {e:'first month', u:'پہلا مہینہ'}], reply: 'And December is the last.', visual: {emoji:'📅1️⃣', scene:'Pehla mahina', tip:'Month batana'}, context:'Mahina batana', bodyLang:'Normal', level: 1 },
{ en: 'My birthday is on the fifth of March.', ur: 'میری سالگرہ پانچ مارچ کو ہے۔', words: [{e:'birthday', u:'سالگرہ'}, {e:'fifth of March', u:'پانچ مارچ'}], reply: 'Happy birthday in advance!', visual: {emoji:'🎂📅', scene:'Salgira ki date', tip:'Tarikh batana'}, context:'Tarikh batana', bodyLang:'Happy', level: 1 },
{ en: 'The test has forty questions.', ur: 'ٹیسٹ میں چالیس سوال ہیں۔', words: [{e:'forty', u:'چالیس'}, {e:'questions', u:'سوال'}], reply: 'That is a lot!', visual: {emoji:'📝4️⃣0️⃣', scene:'Test ka paper', tip:'Number batana'}, context:'Test ke baare mein', bodyLang:'Nervous', level: 1 },
{ en: 'I pass with seventy marks.', ur: 'میں ستر نمبر سے پاس ہوتا ہوں۔', words: [{e:'pass with', u:'سے پاس'}, {e:'seventy', u:'ستر'}], reply: 'Good enough!', visual: {emoji:'✅7️⃣0️⃣', scene:'Passing marks', tip:'Number batana'}, context:'Result batana', bodyLang:'Normal', level: 1 },
{ en: 'It takes thirty minutes to reach school.', ur: 'سکول پہنچنے میں تیس منٹ لگتے ہیں۔', words: [{e:'takes thirty minutes', u:'تیس منٹ لگتے ہیں'}, {e:'to reach', u:'پہنچنے میں'}], reply: 'You should leave early.', visual: {emoji:'🚌⏱️', scene:'School ja raha hai', tip:'Time lagta hai'}, context:'Safar ka waqt', bodyLang:'Normal', level: 1 },
{ en: 'We have a break at twelve PM.', ur: 'دوپہر بارہ بجے ہماری چھٹی ہوتی ہے۔', words: [{e:'break at', u:'چھٹی ہوتی ہے'}, {e:'twelve PM', u:'بارہ بجے دوپہر'}], reply: 'Lunch time!', visual: {emoji:'🍱1️⃣2️⃣', scene:'Lunch break', tip:'Break time'}, context:'Schedule batana', bodyLang:'Khush', level: 1 },
{ en: 'Today is the third of April.', ur: 'آج تین اپریل ہے۔', words: [{e:'third of April', u:'تین اپریل'}], reply: 'So next week is exams!', visual: {emoji:'📅3️⃣', scene:'Tarikh batana', tip:'Date'}, context:'Date batana', bodyLang:'Normal', level: 1 },
{ en: 'Ahmed reads for one hour every night.', ur: 'احمد ہر رات ایک گھنٹہ پڑھتا ہے۔', words: [{e:'one hour', u:'ایک گھنٹہ'}, {e:'every night', u:'ہر رات'}], reply: 'That is a good habit.', visual: {emoji:'📖🌙', scene:'Raat ko padhna', tip:'Routine'}, context:'Routine batana', bodyLang:'Normal', level: 1 },
{ en: 'The year has three hundred and sixty five days.', ur: 'سال میں تین سو پینسٹھ دن ہوتے ہیں۔', words: [{e:'three hundred', u:'تین سو'}, {e:'sixty five', u:'پینسٹھ'}], reply: 'Yes, except leap year!', visual: {emoji:'📆🔢', scene:'Saal ke din', tip:'Fact'}, context:'Fact batana', bodyLang:'Informative', level: 1 },
{ en: 'How many minutes are in one hour?', ur: 'ایک گھنٹے میں کتنے منٹ ہوتے ہیں؟', words: [{e:'how many minutes', u:'کتنے منٹ'}, {e:'in one hour', u:'ایک گھنٹے میں'}], reply: 'Sixty minutes!', visual: {emoji:'⏰❓', scene:'Waqt ka sawal', tip:'Math'}, context:'Sawal poochna', bodyLang:'Curious', level: 1 },
{ en: 'Good morning! What time did you wake up?', ur: 'صبح بخیر! آج تم کتنے بجے اٹھے؟', words: [{e:'what time', u:'کتنے بجے'}, {e:'wake up', u:'اٹھے'}], reply: 'I woke up at six AM.', visual: {emoji:'🌅⏰', scene:'Subah ka sawal', tip:'Waqt poochna'}, context:'Subah ki baat', bodyLang:'Friendly', level: 1 },
{ en: 'The exam is next Monday.', ur: 'امتحان اگلے پیر کو ہے۔', words: [{e:'exam is', u:'امتحان ہے'}, {e:'next Monday', u:'اگلے پیر'}], reply: 'I need to study hard!', visual: {emoji:'📝📅', scene:'Exam ki date', tip:'Date batana'}, context:'Exam schedule', bodyLang:'Serious', level: 1 },
{ en: 'See you tomorrow at nine AM.', ur: 'کل نو بجے صبح ملتے ہیں۔', words: [{e:'see you tomorrow', u:'کل ملتے ہیں'}, {e:'nine AM', u:'نو بجے صبح'}], reply: 'Okay, I will be there!', visual: {emoji:'👋📅', scene:'Mulaqat tay karna', tip:'Waqt tay karna'}, context:'Plan banana', bodyLang:'Wave', level: 1 }
],
grammar: [
{ title: 'Numbers 1-10', visualTable: { headers: ['Number','English','Urdu'], rows: [['1','One','ایک'],['2','Two','دو'],['3','Three','تین'],['4','Four','چار'],['5','Five','پانچ'],['6','Six','چھ'],['7','Seven','سات'],['8','Eight','آٹھ'],['9','Nine','نو'],['10','Ten','دس']], color: '#FF9500' }, rules: [ { formula: 'Number + [cheez]', examples: [ {en:'One book.', ur:'ایک کتاب۔'}, {en:'Five students.', ur:'پانچ طالب علم۔'}, {en:'Three pens.', ur:'تین قلم۔'}, {en:'Eight chairs.', ur:'آٹھ کرسیاں۔'} ] } ], memoryTrick: '🧠 Haath ki ungliyan gino - One se Ten tak!', tip: '💡 Pakistani log aksar Three ko "Three" ki jagah "Taree" bolte hain - Three sahi ada karo.' },
{ title: 'Numbers 11-20', visualTable: { headers: ['Number','English','Urdu'], rows: [['11','Eleven','گیارہ'],['12','Twelve','بارہ'],['13','Thirteen','تیرہ'],['14','Fourteen','چودہ'],['15','Fifteen','پندرہ'],['16','Sixteen','سولہ'],['17','Seventeen','سترہ'],['18','Eighteen','اٹھارہ'],['19','Nineteen','انیس'],['20','Twenty','بیس']], color: '#FF9500' }, rules: [ { formula: '[Base] + teen (13-19)', examples: [ {en:'Thirteen students.', ur:'تیرہ طالب علم۔'}, {en:'Fifteen minutes.', ur:'پندرہ منٹ۔'}, {en:'Seventeen rupees.', ur:'سترہ روپے۔'}, {en:'Nineteen books.', ur:'انیس کتابیں۔'} ] } ], memoryTrick: '🧠 13 se 19 tak teen lagta hai - ThirTEEN, FourTEEN, FifTEEN!', tip: '💡 Eleven aur Twelve irregular hain - yaad karo.' },
{ title: 'Tens (20-100)', visualTable: { headers: ['Number','English','Urdu'], rows: [['20','Twenty','بیس'],['30','Thirty','تیس'],['40','Forty','چالیس'],['50','Fifty','پچاس'],['60','Sixty','ساٹھ'],['70','Seventy','ستر'],['80','Eighty','اسی'],['90','Ninety','نوے'],['100','Hundred','سو']], color: '#FF9500' }, rules: [ { formula: 'Tens + Units = Combined', examples: [ {en:'Twenty one.', ur:'اکیس۔'}, {en:'Thirty five.', ur:'پینتیس۔'}, {en:'Forty two.', ur:'بیالیس۔'}, {en:'Ninety nine.', ur:'ننانوے۔'} ] } ], memoryTrick: '🧠 Forty mein U nahi aata - Four mein aata hai par Forty mein nahi!', tip: '💡 Sab se badi galti: Fourty likhna - Forty sahi hai.' },
{ title: 'What time is it?', visualTable: { headers: ['English','Urdu','Example'], rows: [['What time is it?','کیا وقت ہوا ہے؟','What time is it?'],['It is + time','یہ وقت ہے','It is eight.'],['O clock','بجے','Eight o clock']], color: '#FF9500' }, rules: [ { formula: 'What time is it? → It is + [number] + o clock', examples: [ {en:'What time is it? It is nine o clock.', ur:'کیا وقت ہوا ہے؟ نو بج گئے ہیں۔'}, {en:'It is three o clock.', ur:'تین بج گئے ہیں۔'}, {en:'What time does school start? It is eight.', ur:'سکول کتنے بجے شروع ہوتا ہے؟ آٹھ بجے۔'}, {en:'It is twelve noon.', ur:'دوپہر کے بارہ بج گئے ہیں۔'} ] } ], memoryTrick: '🧠 Waqt poochna = What time is it? Jawab = It is + number.', tip: '💡 O clock sirf pure ghante ke liye - 8:00 pe, 8:30 pe nahi.' },
{ title: 'AM aur PM', visualTable: { headers: ['Time','AM/PM','Matlab'], rows: [['12:00 Raat se 11:59 Subah','AM','Subah'],['12:00 Dopehar se 11:59 Raat','PM','Dopehar/Sham/Raat']], color: '#FF9500' }, rules: [ { formula: 'Time + AM (subah) / PM (sham)', examples: [ {en:'School starts at eight AM.', ur:'سکول آٹھ بجے صبح شروع ہوتا ہے۔'}, {en:'School ends at two PM.', ur:'سکول دو بجے دوپہر ختم ہوتا ہے۔'}, {en:'I sleep at eleven PM.', ur:'میں گیارہ بجے رات سوتا ہوں۔'}, {en:'I wake up at six AM.', ur:'میں چھ بجے صبح اٹھتا ہوں۔'} ] } ], memoryTrick: '🧠 AM = Ante Meridiem = Pehle Dopehar. PM = Post Meridiem = Baad Dopehar.', tip: '💡 12 PM = Dopehar, 12 AM = Adhi Raat.' },
{ title: 'Half past', visualTable: { headers: ['English','Urdu','Matlab'], rows: [['Half past eight','آٹھ بج کر تیس','8:30'],['Half past two','دو بج کر تیس','2:30'],['Half past twelve','بارہ بج کر تیس','12:30']], color: '#FF9500' }, rules: [ { formula: 'Half past + [hour] = [hour]:30', examples: [ {en:'It is half past nine.', ur:'نو بج کر تیس منٹ ہوئے ہیں۔'}, {en:'School starts at half past seven.', ur:'سکول ساڑھے سات بجے شروع ہوتا ہے۔'}, {en:'It is half past three.', ur:'تین بج کر تیس منٹ ہوئے ہیں۔'}, {en:'Half past ten is break time.', ur:'ساڑھے دس بجے وقفہ ہوتا ہے۔'} ] } ], memoryTrick: '🧠 Half = Adha = 30 minutes. Half past 8 = 8:30.', tip: '💡 Urdu mein Saadhe aath baje bolte hain.' },
{ title: 'Quarter to / Quarter past', visualTable: { headers: ['English','Urdu','Matlab'], rows: [['Quarter past eight','آٹھ بج کر پندرہ','8:15'],['Quarter to nine','نو بجنے میں پندرہ','8:45']], color: '#FF9500' }, rules: [ { formula: 'Quarter past = :15 / Quarter to = :45', examples: [ {en:'It is quarter past ten.', ur:'دس بج کر پندرہ منٹ ہوئے ہیں۔'}, {en:'It is quarter to eleven.', ur:'گیارہ بجنے میں پندرہ منٹ ہیں۔'}, {en:'Quarter past eight is assembly time.', ur:'آٹھ بج کر پندرہ منٹ پر اسمبلی ہوتی ہے۔'}, {en:'Quarter to three is dismissal.', ur:'تین بجنے میں پندرہ منٹ پر چھٹی ہوتی ہے۔'} ] } ], memoryTrick: '🧠 Quarter = 15 minute. Past = Guzar gaye. To = Baaki hain.', tip: '💡 Quarter to 9 = 8:45 - 9 baj-ne mein 15 minute baaki hain.' },
{ title: 'Days of the Week', visualTable: { headers: ['English','Urdu','Number'], rows: [['Monday','پیر','1'],['Tuesday','منگل','2'],['Wednesday','بدھ','3'],['Thursday','جمعرات','4'],['Friday','جمعہ','5'],['Saturday','ہفتہ','6'],['Sunday','اتوار','7']], color: '#FF9500' }, rules: [ { formula: 'On + [day] = Us din', examples: [ {en:'School is on Monday.', ur:'سکول پیر کو ہے۔'}, {en:'Test is on Thursday.', ur:'ٹیسٹ جمعرات کو ہے۔'}, {en:'Holiday on Friday.', ur:'جمعہ کو چھٹی ہے۔'}, {en:'I rest on Sunday.', ur:'اتوار کو آرام کرتا ہوں۔'} ] } ], memoryTrick: '🧠 Monday se Sunday tak saat din - Mon, Tue, Wed, Thu, Fri, Sat, Sun.', tip: '💡 Pakistan mein Friday weekend hai, Western mein Saturday-Sunday.' },
{ title: 'Months of the Year', visualTable: { headers: ['Month','Urdu','Number'], rows: [['January','جنوری','1'],['February','فروری','2'],['March','مارچ','3'],['April','اپریل','4'],['May','مئی','5'],['June','جون','6'],['July','جولائی','7'],['August','اگست','8'],['September','ستمبر','9'],['October','اکتوبر','10'],['November','نومبر','11'],['December','دسمبر','12']], color: '#FF9500' }, rules: [ { formula: 'In + [month] = Us mahine mein', examples: [ {en:'Exams are in March.', ur:'امتحانات مارچ میں ہوتے ہیں۔'}, {en:'Eid is in April.', ur:'عید اپریل میں ہے۔'}, {en:'Summer in June.', ur:'جون میں گرمی ہوتی ہے۔'}, {en:'School starts in September.', ur:'سکول ستمبر میں شروع ہوتا ہے۔'} ] } ], memoryTrick: '🧠 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec - yaad karo!', tip: '💡 Har mahine ka naam capital letter se shuru hota hai.' },
{ title: 'How many? (Ginti poochna)', visualTable: { headers: ['English','Urdu','Example'], rows: [['How many','کتنے','How many books?'],['There are','ہیں','There are ten.']], color: '#FF9500' }, rules: [ { formula: 'How many + [plural noun]? → There are + [number]', examples: [ {en:'How many students? There are thirty.', ur:'کتنے طالب علم؟ تیس ہیں۔'}, {en:'How many months? Twelve.', ur:'کتنے مہینے؟ بارہ۔'}, {en:'How many days in a week? Seven.', ur:'ہفتے میں کتنے دن؟ سات۔'}, {en:'How many hours? Twenty four.', ur:'کتنے گھنٹے؟ چوبیس۔'} ] } ], memoryTrick: '🧠 How many = Ginti poochna. How much = Miqdar poochna.', tip: '💡 How many ke sath plural noun lagta hai - books nahi book.' },
{ title: 'Ordinal Numbers', visualTable: { headers: ['Number','Ordinal','Urdu'], rows: [['1','First','پہلا'],['2','Second','دوسرا'],['3','Third','تیسرا'],['4','Fourth','چوتھا'],['5','Fifth','پانچواں']], color: '#FF9500' }, rules: [ { formula: 'Ginti (1,2,3) vs Tartib (First, Second, Third)', examples: [ {en:'First class is English.', ur:'پہلی کلاس انگریزی ہے۔'}, {en:'Second period is Maths.', ur:'دوسرا پیریڈ ریاضی ہے۔'}, {en:'Third floor has the lab.', ur:'تیسری منزل پر لیب ہے۔'}, {en:'Today is the fifth of March.', ur:'آج پانچ مارچ ہے۔'} ] } ], memoryTrick: '🧠 1st, 2nd, 3rd, 4th - ek, do, teen ke baad tartib aata hai.', tip: '💡 First/Second/Third irregular hain, baaki mein th lagata hai - Fourth, Fifth.' },
{ title: 'Time Prepositions (At/In/On)', visualTable: { headers: ['Preposition','Kab lagta hai?','Example'], rows: [['At','Waqt ke sath','At eight AM'],['In','Month/Year ke sath','In March'],['On','Din ke sath','On Monday']], color: '#FF9500' }, rules: [ { formula: 'At + time, In + month/year, On + day', examples: [ {en:'School starts at eight.', ur:'سکول آٹھ بجے شروع ہوتا ہے۔'}, {en:'Exams in March.', ur:'مارچ میں امتحانات ہیں۔'}, {en:'Holiday on Friday.', ur:'جمعہ کو چھٹی ہے۔'}, {en:'We study in the morning.', ur:'ہم صبح میں پڑھتے ہیں۔'} ] } ], memoryTrick: '🧠 At = waqt. In = mahina/mausam. On = din. Simple!', tip: '💡 In the morning/afternoon/evening - lekin At night (In nahi).' },
{ title: 'Telling Age with Numbers', visualTable: { headers: ['English','Urdu','Example'], rows: [['I am + number + years old','Main ... saal ka hoon','I am fifteen.'],['He/She is + number','Wo ... saal ka/ki hai','She is twelve.']], color: '#FF9500' }, rules: [ { formula: 'I am + [number] + years old', examples: [ {en:'I am fifteen years old.', ur:'میں پندرہ سال کا ہوں۔'}, {en:'She is twelve years old.', ur:'وہ بارہ سال کی ہے۔'}, {en:'Ahmed is seventeen.', ur:'احمد سترہ سال کا ہے۔'}, {en:'How old are you? I am twenty.', ur:'تمہاری عمر کیا ہے؟ میں بیس سال کا ہوں۔'} ] } ], memoryTrick: '🧠 I am (number) - umar ke liye Have nahi, Am lagta hai!', tip: '💡 Years old optional hai - I am fifteen bhi sahi hai.' },
{ title: 'Prices in English', visualTable: { headers: ['English','Urdu','Example'], rows: [['How much?','کتنے کا ہے؟','How much is it?'],['It is + price','قیمت ہے','It is fifty rupees.']], color: '#FF9500' }, rules: [ { formula: 'How much is it? → It is + [amount]', examples: [ {en:'How much is this pen?', ur:'یہ قلم کتنے کا ہے؟'}, {en:'It is twenty rupees.', ur:'یہ بیس روپے کا ہے۔'}, {en:'The book costs one hundred rupees.', ur:'کتاب ایک سو روپے کی ہے۔'}, {en:'That is fifty percent off.', ur:'وہ پچاس فیصد چھوٹ ہے۔'} ] } ], memoryTrick: '🧠 How much = daam poochna. How many = ginti poochna.', tip: '💡 Rupees ke baad "of" nahi lagta - fifty rupees, not fifty of rupees.' },
{ title: 'Phone Numbers', visualTable: { headers: ['Tareeqa','Example','Urdu'], rows: [['Number by number','Zero three zero zero','صفر تین صفر صفر'],['In groups','Zero three, double zero','صفر تین، دوہرا صفر']], color: '#FF9500' }, rules: [ { formula: 'Phone number = har digit alag alag', examples: [ {en:'My number is zero three two one.', ur:'میرا نمبر صفر تین دو ایک ہے۔'}, {en:'Call me on zero three zero zero.', ur:'صفر تین صفر صفر پر call karo.'}, {en:'What is your number?', ur:'تمہارا نمبر کیا ہے؟'}, {en:'My number starts with zero three.', ur:'میرا نمبر صفر تین سے شروع ہوتا ہے۔'} ] } ], memoryTrick: '🧠 Phone number mein 0 = Zero bolte hain, Oh nahi.', tip: '💡 Pakistani number zero three se shuru hota hai.' },
{ title: 'Dates (Day Month Year)', visualTable: { headers: ['Format','Example','Urdu'], rows: [['The [ordinal] of [month]','The fifth of March','پانچ مارچ'],['Month + [number]','March fifth','مارچ پانچ']], color: '#FF9500' }, rules: [ { formula: 'The + [ordinal] + of + [month] + [year]', examples: [ {en:'Today is the third of April.', ur:'آج تین اپریل ہے۔'}, {en:'My birthday is the first of January.', ur:'میری سالگرہ یکم جنوری کو ہے۔'}, {en:'Exams start on the fifth of March.', ur:'امتحانات پانچ مارچ کو شروع ہوتے ہیں۔'}, {en:'Independence Day is the fourteenth of August.', ur:'یوم آزادی چودہ اگست کو ہے۔'} ] } ], memoryTrick: '🧠 Tarikh = Ordinal + Month. 14 August = Fourteenth of August.', tip: '💡 Pakistan mein DD/MM/YYYY format use hota hai.' },
{ title: 'Duration (How long?)', visualTable: { headers: ['English','Urdu','Example'], rows: [['For + time','... ke liye','For two hours'],['In + time','... mein','In ten minutes']], color: '#FF9500' }, rules: [ { formula: 'For + [duration] / In + [duration]', examples: [ {en:'I study for two hours.', ur:'میں دو گھنٹے پڑھتا ہوں۔'}, {en:'Class starts in five minutes.', ur:'پانچ منٹ میں کلاس شروع ہوگی۔'}, {en:'It takes thirty minutes.', ur:'تیس منٹ لگتے ہیں۔'}, {en:'I sleep for eight hours.', ur:'میں آٹھ گھنٹے سوتا ہوں۔'} ] } ], memoryTrick: '🧠 For = kitni dair tak. In = kitni dair mein.', tip: '💡 For three hours (2 hours parhna) - puri duration ke liye.' },
{ title: 'Frequency Words', visualTable: { headers: ['English','Urdu','Example'], rows: [['Once','ایک بار','Once a day'],['Twice','دو بار','Twice a week'],['Three times','تین بار','Three times a month']], color: '#FF9500' }, rules: [ { formula: '[Frequency] + a + [time period]', examples: [ {en:'I eat once a day.', ur:'میں دن میں ایک بار کھاتا ہوں۔'}, {en:'We have Maths twice a week.', ur:'ہمیں ہفتے میں دو بار ریاضی ہوتی ہے۔'}, {en:'Test three times a month.', ur:'مہینے میں تین بار ٹیسٹ ہوتا ہے۔'}, {en:'Once a year we go on a trip.', ur:'سال میں ایک بار ہم سیر کو جاتے ہیں۔'} ] } ], memoryTrick: '🧠 Once = Ek baar. Twice = Do baar. Three times = Teen baar.', tip: '💡 Once/Twice ke baad a + time period aata hai.' },
{ title: 'Seasons', visualTable: { headers: ['Season','Urdu','Months'], rows: [['Spring','بہار','March-May'],['Summer','گرمی','June-August'],['Autumn','خزاں','September-November'],['Winter','سردی','December-February']], color: '#FF9500' }, rules: [ { formula: 'In + [season]', examples: [ {en:'Exams are in summer.', ur:'گرمیوں میں امتحانات ہوتے ہیں۔'}, {en:'I love winter.', ur:'مجھے سردی پسند ہے۔'}, {en:'Flowers bloom in spring.', ur:'بہار میں پھول کھلتے ہیں۔'}, {en:'Leaves fall in autumn.', ur:'خزاں میں پتے گرتے ہیں۔'} ] } ], memoryTrick: '🧠 Pakistan mein mostly 2 mausam: Garmi aur Sardi.', tip: '💡 Season ke sath In lagta hai - In summer, In winter.' },
{ title: 'Yesterday / Today / Tomorrow', visualTable: { headers: ['English','Urdu','Time'], rows: [['Yesterday','گزرا ہوا کل','Pichla din'],['Today','آج','Maujooda din'],['Tomorrow','آنے والا کل','Agla din']], color: '#FF9500' }, rules: [ { formula: 'Yesterday + [past], Today + [present], Tomorrow + [future]', examples: [ {en:'Yesterday was Monday.', ur:'کل پیر تھا۔'}, {en:'Today is Tuesday.', ur:'آج منگل ہے۔'}, {en:'Tomorrow is Wednesday.', ur:'کل بدھ ہوگا۔'}, {en:'Yesterday I studied for two hours.', ur:'کل میں نے دو گھنٹے پڑھا۔'} ] } ], memoryTrick: '🧠 Yesterday (pichhe), Today (yahan), Tomorrow (aage).', tip: '💡 Yesterday ke sath was/were lagta hai, Tomorrow ke sath will.' }
],
story: {
title: 'Ahmed Ka Time Table',
level: '⭐ Day 3 — Beginner',
setting: {emoji:'🏫', place:'Karachi, School aur Ghar', time:'Subah se Sham', weather:'☀️ Sunny din'},
paragraphs: [
{ line: 'Ahmed wakes up at six AM.', ur: 'Ahmed chhe baje subah uthta hai.', words: ['six','AM','wakes'], visual: {emoji:'🌅⏰', mood:'Fresh', tip:'Subah uthna'} },
{ line: 'It is Monday morning.', ur: 'Peer ka subah hai.', words: ['Monday','morning'], visual: {emoji:'📅🌅', mood:'New day', tip:'Hafte ka pehla din'} },
{ line: 'He looks at the clock.', ur: 'Wo ghadi dekhta hai.', words: ['clock'], visual: {emoji:'🕕', mood:'Alert', tip:'Waqt dekhna'} },
{ line: 'It is six o clock.', ur: 'Chhay baj gaye hain.', words: ['six','o clock'], visual: {emoji:'🕕', mood:'On time', tip:'Waqt batana'} },
{ line: 'Ahmed has a schedule for today.', ur: 'Ahmed ke paas aaj ka schedule hai.', words: ['schedule','today'], visual: {emoji:'📋', mood:'Ready', tip:'Jadwal'} },
{ line: 'His first class is at eight AM.', ur: 'Uski pehli class aath baje subah hai.', words: ['first','eight','AM'], visual: {emoji:'1️⃣🏫', mood:'Start', tip:'Pehla period'} },
{ line: 'Ammi calls, Wake up Ahmed!', ur: 'Ammi bulate hain, Jago Ahmed!', words: ['wake'], visual: {emoji:'👩', mood:'Loving', tip:'Ammi ki aawaz'} },
{ line: 'I am awake Ammi. It is morning.', ur: 'Jag gaya hoon Ammi. Subah ho gayi hai.', words: ['morning'], visual: {emoji:'☀️', mood:'Awake', tip:'Subah'} },
{ line: 'He has thirty minutes to get ready.', ur: 'Uske paas tayyar hone ke liye tees minute hain.', words: ['thirty','minutes'], visual: {emoji:'⏱️3️⃣0️⃣', mood:'Hurry', tip:'Waqt kam hai'} },
{ line: 'Ahmed reaches school at half past seven.', ur: 'Ahmed saadhe saat baje school pahunchta hai.', words: ['half','seven'], visual: {emoji:'🚌🕢', mood:'On time', tip:'Half past'} },
{ line: 'Good morning sir! What time is it?', ur: 'Subah bakhair janab! Kya waqt hua hai?', words: ['morning','time'], visual: {emoji:'👨‍🏫⏰', mood:'Polite', tip:'Waqt poochna'} },
{ line: 'It is quarter past eight, says Mr. Ali.', ur: 'Aath baj kar pandrah minute ho gaye hain, Mr. Ali kehte hain.', words: ['quarter','eight'], visual: {emoji:'🕗', mood:'Teaching', tip:'Quarter past'} },
{ line: 'There are thirty students in the class.', ur: 'Class mein tees talba hain.', words: ['thirty','students'], visual: {emoji:'👥3️⃣0️⃣', mood:'Busy', tip:'Ginti'} },
{ line: 'Today we study for two hours.', ur: 'Aaj hum do ghante padhte hain.', words: ['two','hours','today'], visual: {emoji:'📚⏱️', mood:'Focus', tip:'Duration'} },
{ line: 'The second period starts at nine AM.', ur: 'Doosra period nau baje subah shuru hota hai.', words: ['second','nine','AM'], visual: {emoji:'2️⃣📚', mood:'Continue', tip:'Schedule'} },
{ line: 'We have a break at half past ten.', ur: 'Hamare paas saadhe das baje waqfa hai.', words: ['half','ten'], visual: {emoji:'☕🕙', mood:'Relax', tip:'Break time'} },
{ line: 'Ahmed and Bilal eat lunch.', ur: 'Ahmed aur Bilal lunch khaate hain.', words: ['lunch'], visual: {emoji:'🍱👦', mood:'Happy', tip:'Khana'} },
{ line: 'What is the time Bilal?', ur: 'Bilal, kya waqt hua hai?', words: ['time'], visual: {emoji:'❓⏰', mood:'Curious', tip:'Waqt poochna'} },
{ line: 'It is twelve noon, afternoon now.', ur: 'Baarah baj gaye hain, ab dopehar ho gayi.', words: ['twelve','afternoon'], visual: {emoji:'☀️1️⃣2️⃣', mood:'Midday', tip:'Dopehar'} },
{ line: 'We have fifty minutes of Maths.', ur: 'Hamare paas Maths ke pachaas minute hain.', words: ['fifty','minutes'], visual: {emoji:'📐5️⃣0️⃣', mood:'Focus', tip:'Duration'} },
{ line: 'The last class ends at quarter to three.', ur: 'Aakhri class teen baj ne mein pandrah minute par khatam hoti hai.', words: ['last','quarter'], visual: {emoji:'🏁⏰', mood:'Almost done', tip:'Quarter to'} },
{ line: 'School is over! It is two forty five PM.', ur: 'School khatam! Do baj kar paintalis minute ho gaye hain PM.', words: ['PM'], visual: {emoji:'🎉🏫', mood:'Relief', tip:'School khatam'} },
{ line: 'Ahmed walks home in twenty minutes.', ur: 'Ahmed bees minute mein ghar chalta hai.', words: ['twenty','minutes'], visual: {emoji:'🚶2️⃣0️⃣', mood:'Tired', tip:'Ghar jana'} },
{ line: 'Yesterday I had forty questions in the test.', ur: 'Kal test mein mujhe chalis sawal the.', words: ['yesterday','forty'], visual: {emoji:'📝4️⃣0️⃣', mood:'Memory', tip:'Past ki baat'} },
{ line: 'Tomorrow is Tuesday, no Maths class.', ur: 'Kal Mangal hai, Maths class nahi.', words: ['tomorrow','Tuesday'], visual: {emoji:'😊📅', mood:'Happy', tip:'Agla din'} },
{ line: 'Ammi asks, How many classes today?', ur: 'Ammi poochti hain, Aaj kitni classes thin?', words: ['how many'], visual: {emoji:'👩❓', mood:'Caring', tip:'Ginti poochna'} },
{ line: 'I had five classes and one hundred marks in test!', ur: 'Mere paas paanch classes thin aur test mein sau number aaye!', words: ['five','hundred'], visual: {emoji:'💯🎉', mood:'Proud', tip:'Achievement'} },
{ line: 'Ahmed studies for one hour in the evening.', ur: 'Ahmed sham mein ek ghante padhta hai.', words: ['one','hour','evening'], visual: {emoji:'📖🌆', mood:'Studious', tip:'Evening routine'} },
{ line: 'He sleeps at ten PM every night.', ur: 'Wo har raat das baje PM sota hai.', words: ['ten','PM','night'], visual: {emoji:'😴🌙', mood:'Sleepy', tip:'Sone ka waqt'} },
{ line: 'Good schedule makes a good student!', ur: 'Acha jadwal achha talb ilm banata hai!', words: ['schedule'], visual: {emoji:'⭐📋', mood:'Motivated', tip:'Sabak'} }
],
moral: '✨ Waqt ki qadar karo - ek minute bhi important hai!'
},
quizzes: [
{type:'meaning', emoji:'🤔', q:'"One" ka matlab?', hint:'Sabse pehla number.', o:['Ek','Do','Teen','Char'], a:0, explain:'One = Ek.'},
{type:'meaning', emoji:'🤔', q:'"Five" ka matlab?', hint:'Haath ki ek haath ungliyan.', o:['Char','Paanch','Chhay','Saat'], a:1, explain:'Five = Paanch.'},
{type:'meaning', emoji:'🤔', q:'"Ten" ka matlab?', hint:'Dono haath ki ungliyan.', o:['Aath','Nau','Das','Gyarah'], a:2, explain:'Ten = Das.'},
{type:'meaning', emoji:'🤔', q:'"Twenty" ka matlab?', hint:'Das ka double.', o:['Pandrah','Bees','Tees','Chalis'], a:1, explain:'Twenty = Bees.'},
{type:'meaning', emoji:'🤔', q:'"Hundred" ka matlab?', hint:'Pura sau.', o:['Das','Pachas','Sau','Hazaar'], a:2, explain:'Hundred = Sau.'},
{type:'meaning', emoji:'🤔', q:'"Morning" ka matlab?', hint:'Subah ka waqt.', o:['Raat','Dopehar','Subah','Sham'], a:2, explain:'Morning = Subah.'},
{type:'meaning', emoji:'🤔', q:'"Clock" ka matlab?', hint:'Deewar par waqt batane wali cheez.', o:['Kitab','Ghadi','Table','Kursi'], a:1, explain:'Clock = Ghadi.'},
{type:'meaning', emoji:'🤔', q:'"Yesterday" ka matlab?', hint:'Guzra hua kal.', o:['Aaj','Kal (aane wala)','Beeta hua kal','Parson'], a:2, explain:'Yesterday = Guzra hua kal.'},
{type:'meaning', emoji:'🤔', q:'"Tomorrow" ka matlab?', hint:'Aane wala din.', o:['Aaj','Kal (aane wala)','Beeta hua kal','Is waqt'], a:1, explain:'Tomorrow = Aane wala kal.'},
{type:'meaning', emoji:'🤔', q:'"Week" ka matlab?', hint:'Saat din.', o:['Mahina','Hafta','Saal','Din'], a:1, explain:'Week = Hafta.'},
{type:'meaning', emoji:'🤔', q:'"Hour" ka matlab?', hint:'Saath minute.', o:['Second','Minute','Ghanta','Din'], a:2, explain:'Hour = Ghanta.'},
{type:'meaning', emoji:'🤔', q:'"Half" ka matlab?', hint:'Adha.', o:['Poora','Adha','Chautha hissa','Teesra'], a:1, explain:'Half = Adha.'},
{type:'meaning', emoji:'🤔', q:'"Schedule" ka matlab?', hint:'Kaam ka jadwal.', o:['Shukriya','Jadwal','Ghar','Dost'], a:1, explain:'Schedule = Jadwal / time table.'},
{type:'meaning', emoji:'🤔', q:'"Midnight" ka matlab?', hint:'Raat ke baarah baje.', o:['Dopehar','Subah','Adhi Raat','Sham'], a:2, explain:'Midnight = Adhi Raat (12 AM).'},
{type:'meaning', emoji:'🤔', q:'"Minute" ka matlab?', hint:'Saath second.', o:['Ghanta','Minit','Saal','Hafta'], a:1, explain:'Minute = Minit (60 seconds).'},
{type:'meaning', emoji:'🤔', q:'"First" ka matlab?', hint:'Tartib mein sabse aage.', o:['Aakhri','Doosra','Pehla','Teesra'], a:2, explain:'First = Pehla.'},
{type:'fill', emoji:'✏️', q:'It is ___ o clock. (Aath baje)', hint:'8 = ?', o:['six','seven','eight','nine'], a:2, explain:'Aath = Eight.'},
{type:'fill', emoji:'✏️', q:'School starts at eight ___. (Subah)', hint:'Subah ka time marker.', o:['PM','AM','night','noon'], a:1, explain:'Subah ke waqt AM lagta hai.'},
{type:'fill', emoji:'✏️', q:'What ___ is it? (Waqt poochna)', hint:'Waqt ke liye.', o:['day','date','time','hour'], a:2, explain:'What TIME is it? - waqt poochne ka sahi tareeqa.'},
{type:'fill', emoji:'✏️', q:'It is ___ past eight. (8:30)', hint:'Adha ghanta = ?', o:['quarter','half','full','twice'], a:1, explain:'8:30 = Half past eight.'},
{type:'fill', emoji:'✏️', q:'There are ___ days in a week.', hint:'Hafte ke din gino.', o:['five','six','seven','eight'], a:2, explain:'Hafte mein saat din hote hain.'},
{type:'fill', emoji:'✏️', q:'Today is Monday, ___ is Tuesday.', hint:'Agla din.', o:['yesterday','today','tomorrow','next'], a:2, explain:'Tomorrow = Aane wala kal.'},
{type:'fill', emoji:'✏️', q:'There are ___ months in a year.', hint:'Saal ke mahine.', o:['ten','eleven','twelve','thirteen'], a:2, explain:'Saal mein baarah mahine hote hain.'},
{type:'fill', emoji:'✏️', q:'I study for two ___. (Do ghante)', hint:'Waqt ki miqdar.', o:['minutes','seconds','hours','days'], a:2, explain:'Do ghante = Two hours.'},
{type:'fill', emoji:'✏️', q:'The ___ class is English. (Pehli)', hint:'Tartib mein pehli.', o:['one','first','next','last'], a:1, explain:'Pehla = First. One se alag hai.'},
{type:'fill', emoji:'✏️', q:'It is ___ to nine. (8:45)', hint:'15 minute baaki hain.', o:['half','quarter','five','ten'], a:1, explain:'8:45 = Quarter to nine.'},
{type:'fill', emoji:'✏️', q:'I wake up ___ six in the morning.', hint:'Waqt ke saath preposition.', o:['in','on','at','for'], a:2, explain:'Waqt ke saath At lagta hai.'},
{type:'fill', emoji:'✏️', q:'___ is the first month.', hint:'Pehla mahina.', o:['December','February','March','January'], a:3, explain:'January = Pehla mahina hai.'},
{type:'fill', emoji:'✏️', q:'School is ___ Monday. (Din ke saath)', hint:'Din ke liye preposition.', o:['at','in','on','for'], a:2, explain:'Din ke saath On lagta hai.'},
{type:'fill', emoji:'✏️', q:'Exams are ___ March. (Mahine ke saath)', hint:'Mahine ke liye preposition.', o:['at','in','on','for'], a:1, explain:'Mahine ke saath In lagta hai.'},
{type:'fill', emoji:'✏️', q:'I eat ___ a day. (Ek baar)', hint:'Ek baar = ?', o:['once','twice','three times','four times'], a:0, explain:'Once = Ek baar.'},
{type:'correct', emoji:'✅', q:'Sahi sentence kaun sa hai?', hint:'Waqt ka sahi format.', o:['It eight o clock is.','Eight it is o clock.','It is eight o clock.','Is it eight o clock.'], a:2, explain:'It IS eight o clock - subject + verb + time sahi order hai.'},
{type:'correct', emoji:'✅', q:'Sahi spelling kaun si hai?', hint:'Chalis ki sahi spelling.', o:['Fourty','Forty','Forti','Forety'], a:1, explain:'Forty sahi spelling hai - Four mein U hai par Forty mein nahi.'},
{type:'correct', emoji:'✅', q:'Umar batane ka sahi tareeqa:', hint:'I am ya I have?', o:['I have fifteen years.','I am fifteen years old.','I is fifteen years.','I fifteen years old.'], a:1, explain:'Umar ke liye I AM (number) years old hota hai, I have nahi.'},
{type:'correct', emoji:'✅', q:'Sahi preposition kaun si hai?', hint:'Waqt ke saath.', o:['School starts in eight.','School starts on eight.','School starts at eight.','School starts for eight.'], a:2, explain:'Waqt (time) ke saath At lagta hai.'},
{type:'correct', emoji:'✅', q:'Monday pehla din hai - sahi?', hint:'Hafta kahan se shuru.', o:['Monday is the one day.','Monday is the first day.','Monday is the firstly day.','Monday first day is.'], a:1, explain:'Monday IS THE FIRST day - ordinal number use hota hai.'},
{type:'correct', emoji:'✅', q:'Sahi jumla 8:30 ke liye:', hint:'Half past ya Quarter past?', o:['It is half to eight.','It is quarter past eight.','It is half past eight.','It is eight and half.'], a:2, explain:'8:30 = Half past eight.'},
{type:'correct', emoji:'✅', q:'Sahi jumla guzre kal ke liye:', hint:'Beeta hua kal = ?', o:['Today was Monday.','Tomorrow was Monday.','Yesterday was Monday.','Last was Monday.'], a:2, explain:'Guzra kal = Yesterday.'},
{type:'correct', emoji:'✅', q:'Sahi number spelling:', hint:'Barah ki sahi spelling.', o:['Twelv','Twelve','Twelf','Twele'], a:1, explain:'Twelve sahi spelling hai.'},
{type:'correct', emoji:'✅', q:'Dopehar ke liye sahi:', hint:'12 baje ke baad.', o:['School ends at two AM.','School ends at two PM.','School ends in two PM.','School ends on two PM.'], a:1, explain:'Dopehar ke baad PM lagta hai. Aur waqt ke saath At lagta hai.'},
{type:'correct', emoji:'✅', q:'Hafte mein kitne din - sahi?', hint:'Seven ya Eight?', o:['There is seven days in a week.','There are eight days in a week.','There are seven days in a week.','There are seven day in a week.'], a:2, explain:'Seven days (plural) mein There ARE hota hai.'},
{type:'correct', emoji:'✅', q:'"How many" ka sahi use:', hint:'Ginti poochne ke liye.', o:['How many student is there?','How many students is there?','How many students are there?','How many students there are?'], a:2, explain:'How many students ARE there? - plural ke saath are.'},
{type:'correct', emoji:'✅', q:'Sahi mahina batana:', hint:'Mahine ke saath In.', o:['Exams at March.','Exams on March.','Exams in March.','Exams for March.'], a:2, explain:'Mahine ke saath In lagta hai.'},
{type:'correct', emoji:'✅', q:'Ginti vs Tartib - sahi:', hint:'First ya One?', o:['One class is English.','The first class is English.','First one class English.','The one class is English.'], a:1, explain:'Tartib ke liye ordinal (First) lagta hai.'},
{type:'correct', emoji:'✅', q:'Sahi sentence (Quarter to):', hint:'8:45 ke liye.', o:['It is quarter past nine.','It is quarter to nine.','It is quarter of nine.','It is quarter at nine.'], a:1, explain:'8:45 = Quarter TO nine (9 baj-ne mein 15 minute baaki).'},
{type:'correct', emoji:'✅', q:'Sahi sentence phone number ke liye:', hint:'Number kaise batate hain.', o:['My number are zero three.','My number is zero three.','My number be zero three.','My number zero three.'], a:1, explain:'My number IS (singular) - number ek hota hai.'},
{type:'correct', emoji:'✅', q:'Frequency ka sahi use:', hint:'Ek baar din mein.', o:['I eat one a day.','I eat once a day.','I eat one time daily.','I eat once daily day.'], a:1, explain:'Once a day = Din mein ek baar. Sahi phrase.'},
{type:'translate', emoji:'🔄', q:'"آج پیر ہے" English mein?', hint:'Aaj + Peer.', o:['Yesterday is Monday.','Tomorrow is Monday.','Today is Monday.','Today was Monday.'], a:2, explain:'Aaj = Today. Peer = Monday. Today IS Monday.'},
{type:'translate', emoji:'🔄', q:'"آٹھ بجے صبح" English mein?', hint:'8 AM.', o:['Eight PM','Eight AM','Eight o clock','Eight morning'], a:1, explain:'Subah ke waqt = AM. Aath baje subah = Eight AM.'},
{type:'translate', emoji:'🔄', q:'"کتنے بجے ہیں؟" English mein?', hint:'Waqt poochna.', o:['What day is it?','What time is it?','How much is the time?','When is the time?'], a:1, explain:'Waqt poochna = What TIME is it?'},
{type:'translate', emoji:'🔄', q:'"تیس طالب علم ہیں" English mein?', hint:'Thirty + students.', o:['There is thirty students.','There are thirty students.','There thirty students are.','Thirty students is there.'], a:1, explain:'Plural ke saath ARE. There ARE thirty students.'},
{type:'translate', emoji:'🔄', q:'"ساڑھے آٹھ بجے" English mein?', hint:'8:30 = ?', o:['Quarter past eight','Half past eight','Eight fifteen','Quarter to nine'], a:1, explain:'Saadhe aath = Half past eight = 8:30.'},
{type:'translate', emoji:'🔄', q:'"میں بیس سال کا ہوں" English mein?', hint:'Bees saal.', o:['I have twenty years.','I am twenty years old.','I is twenty years.','I twenty years old.'], a:1, explain:'Umar ke liye I AM (number) years old.'},
{type:'translate', emoji:'🔄', q:'"گزرا ہوا کل اتوار تھا" English mein?', hint:'Beeta hua kal = Yesterday.', o:['Today was Sunday.','Tomorrow is Sunday.','Yesterday was Sunday.','Last Sunday was.'], a:2, explain:'Guzra kal = Yesterday. Tha = was. Yesterday WAS Sunday.'},
{type:'translate', emoji:'🔄', q:'"دو گھنٹے پڑھتا ہوں" English mein?', hint:'Do ghante.', o:['I study for two hours.','I study in two hours.','I study two hours.','I study at two hours.'], a:0, explain:'Duration ke liye FOR lagta hai. Study FOR two hours.'},
{type:'translate', emoji:'🔄', q:'"پیر کو سکول ہے" English mein?', hint:'Din ke saath On.', o:['School is in Monday.','School is at Monday.','School is on Monday.','School is for Monday.'], a:2, explain:'Din (day) ke saath ON lagta hai. On Monday.'},
{type:'translate', emoji:'🔄', q:'"اگلی کلاس نو بجے ہے" English mein?', hint:'Next class + nine.', o:['Next class is at nine.','Next class is in nine.','Next class is on nine.','Next class nine is.'], a:0, explain:'Waqt ke saath AT. Next class IS AT nine.'},
{type:'translate', emoji:'🔄', q:'"جنوری پہلا مہینہ ہے" English mein?', hint:'January = pehla mahina.', o:['January is one month.','January is a first month.','January is the first month.','January first month is.'], a:2, explain:'January is THE FIRST month. Ordinal (First) aur THE dono lagta hai.'},
{type:'translate', emoji:'🔄', q:'"ہفتے میں سات دن" English mein?', hint:'Week mein saat din.', o:['Seven days in a week.','There are seven days in a week.','Dono sahi hain.','Koi nahi'], a:2, explain:'Dono sahi hain! Seven days in a week ya There are seven days in a week.'},
{type:'translate', emoji:'🔄', q:'"پانچ منٹ انتظار کریں" English mein?', hint:'Five + minutes.', o:['Wait for five minute.','Wait five minutes please.','Please five minutes wait.','Wait to five minutes.'], a:1, explain:'Wait five minutes please - natural aur sahi English.'},
{type:'translate', emoji:'🔄', q:'"گرمی میں امتحانات ہوتے ہیں" English mein?', hint:'Summer mein.', o:['Exams are at summer.','Exams are on summer.','Exams are in summer.','Exams are for summer.'], a:2, explain:'Season ke saath IN lagta hai. In summer.'},
{type:'translate', emoji:'🔄', q:'"رات کے بارہ بجے" English mein?', hint:'12 AM.', o:['Twelve PM','Noon','Midnight','Twelve night'], a:2, explain:'Raat ke baarah baje = Midnight.'},
{type:'translate', emoji:'🔄', q:'"ہر روز ایک بار" English mein?', hint:'Ek baar + har din.', o:['One time a day','Once a day','Every day one','Once every day'], a:1, explain:'Once a day = Har roz ek baar. Sabse natural expression.'},
{type:'situation', emoji:'🎭', q:'Koi poocha "What time is it?" - ghadi mein 8:00 dikh raha hai.', hint:'Aath baje.', o:['It is eight AM.','It is eight o clock.','Eight is the time.','The time eight is.'], a:1, explain:'Pure ghante ke liye "It is eight o clock" sahi hai.'},
{type:'situation', emoji:'🎭', q:'Teacher ne poocha "What day is tomorrow?" - aaj Monday hai.', hint:'Monday ke baad.', o:['Tomorrow is Monday.','Tomorrow is Sunday.','Tomorrow is Tuesday.','Tomorrow is Wednesday.'], a:2, explain:'Monday ke baad Tuesday aata hai.'},
{type:'situation', emoji:'🎭', q:'Dost ne poocha apni umar - tum 16 saal ke ho.', hint:'Umar batao.', o:['I have sixteen years.','I am sixteen years old.','My age is sixteen years.','I sixteen years old.'], a:1, explain:'I AM sixteen years old - umar ke liye hamesha "am" use karo.'},
{type:'situation', emoji:'🎭', q:'Shop mein kisi cheez ki qeemat poochni hai.', hint:'Daam poochna.', o:['How many is this?','How much is this?','What is this price?','How much this costs?'], a:1, explain:'Qeemat ke liye "How much is this?" - standard tareeqa.'},
{type:'situation', emoji:'🎭', q:'Class mein teacher poocha "How many students are absent?"', hint:'Ginti batana.', o:['There is five absent.','There are five absent.','Five students is absent.','Five is absent.'], a:1, explain:'Five students (plural) ke saath "There ARE" lagta hai.'},
{type:'situation', emoji:'🎭', q:'Phone pe apna number dena hai.', hint:'Ek ek number bolo.', o:['My number are zero three.','My phone number zero three.','My number is zero three.','Zero three my number.'], a:2, explain:'"My number IS" - number singular hai isliye is lagta hai.'},
{type:'situation', emoji:'🎭', q:'Exam ki date batani hai - 14 August.', hint:'Chaudah August.', o:['Exam is on fourteen of August.','Exam is in the fourteenth August.','Exam is on the fourteenth of August.','Exam fourteenth August is.'], a:2, explain:'"On the fourteenth of August" - ON (date ke liye) + THE + ordinal + of + month.'},
{type:'situation', emoji:'🎭', q:'Friend poocha "Kab milein ge?" - agli Jumerat ko.', hint:'Next Thursday.', o:['We meet at Thursday.','We meet in next Thursday.','We meet on next Thursday.','We meet for Thursday.'], a:2, explain:'Din ke saath ON. "On next Thursday" - sahi preposition.'},
{type:'situation', emoji:'🎭', q:'Teacher ne poocha "What is the schedule today?"', hint:'Jadwal batao.', o:['I have five class today.','I have five classes today.','I am five classes today.','There is five classes today.'], a:1, explain:'Five classes (plural) - I HAVE five classes. Plural ke liye s lagao.'},
{type:'situation', emoji:'🎭', q:'Ammi ne poocha school kab khatam hota hai.', hint:'Dopehar mein.', o:['School ends at two AM.','School ends in two PM.','School ends at two PM.','School ends on two PM.'], a:2, explain:'Dopehar = PM. Waqt ke saath AT. "At two PM" sahi hai.'},
{type:'situation', emoji:'🎭', q:'Yaar ne poocha kal test tha, kya question tha?', hint:'Guzra hua.', o:['Tomorrow I have test.','Yesterday I had a test.','Today I have test.','Yesterday I have test.'], a:1, explain:'Guzra kal = Yesterday. Guzre waqt ke saath HAD (had = past tense of have).'},
{type:'situation', emoji:'🎭', q:'Maths class mein kitne minute baaki hain - 15.', hint:'Pandrah minute.', o:['Fifteen minutes left.','Fifteen minute left.','There is fifteen minutes.','There fifteen minutes left.'], a:0, explain:'"Fifteen minutes left" - simple aur sahi. Minutes plural.'},
{type:'situation', emoji:'🎭', q:'Kisi ne poocha "How often do you study?"', hint:'Kitni baar?', o:['I study one time a day.','I study once a day.','I study every once day.','I study one daily.'], a:1, explain:'"Once a day" - sabse natural aur sahi expression.'},
{type:'situation', emoji:'🎭', q:'December ka mahina number batana hai.', hint:'Saal ka aakhri mahina.', o:['December is the tenth month.','December is the eleventh month.','December is the twelfth month.','December is the last month.'], a:2, explain:'December = Baarhwan mahina = Twelfth month.'},
{type:'situation', emoji:'🎭', q:'Waqt 8:15 hai - kisi ko batana hai.', hint:'Quarter past ya Quarter to?', o:['It is quarter to eight.','It is quarter past eight.','It is eight quarter.','It is half past eight.'], a:1, explain:'8:15 = Quarter PAST eight (15 minute guzar gaye hain).'},
{type:'situation', emoji:'🎭', q:'Next year ke liye plan batana hai.', hint:'Agla saal.', o:['Next year I study hard.','Next year I will study hard.','Next year I am study hard.','Next year study I hard.'], a:1, explain:'"Will" future ke liye use hota hai. Next year I WILL study hard.'}
],
flashcards: [
{front:'1️⃣ One', back:'ایک', example:'"I have one book."', color:'#FF9500'},
{front:'2️⃣ Two', back:'دو', example:'"Two pens please."', color:'#FF9500'},
{front:'3️⃣ Three', back:'تین', example:'"Three students."', color:'#FF9500'},
{front:'4️⃣ Four', back:'چار', example:'"Four chairs."', color:'#FF9500'},
{front:'5️⃣ Five', back:'پانچ', example:'"Five minutes."', color:'#FF9500'},
{front:'6️⃣ Six', back:'چھ', example:'"Six o clock."', color:'#FF9500'},
{front:'7️⃣ Seven', back:'سات', example:'"Seven days."', color:'#FF9500'},
{front:'8️⃣ Eight', back:'آٹھ', example:'"Eight AM."', color:'#FF9500'},
{front:'9️⃣ Nine', back:'نو', example:'"Nine students."', color:'#FF9500'},
{front:'🔟 Ten', back:'دس', example:'"Ten minutes."', color:'#FF9500'},
{front:'1️⃣1️⃣ Eleven', back:'گیارہ', example:'"Eleven o clock."', color:'#FF9500'},
{front:'1️⃣2️⃣ Twelve', back:'بارہ', example:'"Twelve months."', color:'#FF9500'},
{front:'2️⃣0️⃣ Twenty', back:'بیس', example:'"Twenty students."', color:'#FF9500'},
{front:'3️⃣0️⃣ Thirty', back:'تیس', example:'"Thirty minutes."', color:'#FF9500'},
{front:'4️⃣0️⃣ Forty', back:'چالیس', example:'"Forty questions."', color:'#FF9500'},
{front:'5️⃣0️⃣ Fifty', back:'پچاس', example:'"Fifty rupees."', color:'#FF9500'},
{front:'💯 Hundred', back:'سو', example:'"One hundred marks."', color:'#FF9500'},
{front:'⏰ Time', back:'وقت', example:'"What is the time?"', color:'#FF9500'},
{front:'🕗 Clock', back:'گھڑی', example:'"The clock says eight."', color:'#FF9500'},
{front:'🕐 Hour', back:'گھنٹہ', example:'"One hour of study."', color:'#FF9500'},
{front:'⏱️ Minute', back:'منٹ', example:'"Five minutes please."', color:'#FF9500'},
{front:'⚡ Second', back:'سیکنڈ', example:'"Wait one second."', color:'#FF9500'},
{front:'🕣 Half', back:'آدھا', example:'"Half past eight."', color:'#FF9500'},
{front:'🕧 Quarter', back:'پاؤ / پندرہ منٹ', example:'"Quarter past nine."', color:'#FF9500'},
{front:'➡️ Past', back:'بعد / گزرا ہوا', example:'"Ten past eight."', color:'#FF9500'},
{front:'🌅 Morning', back:'صبح', example:'"Eight in the morning."', color:'#FF9500'},
{front:'☀️ Afternoon', back:'دوپہر', example:'"School ends in afternoon."', color:'#FF9500'},
{front:'🌇 Evening', back:'شام', example:'"Study in evening."', color:'#FF9500'},
{front:'🌙 Midnight', back:'آدھی رات', example:'"It is midnight."', color:'#FF9500'},
{front:'◀️ Yesterday', back:'گزرا ہوا کل', example:'"Yesterday was Monday."', color:'#FF9500'},
{front:'📍 Today', back:'آج', example:'"Today is Tuesday."', color:'#FF9500'},
{front:'▶️ Tomorrow', back:'آنے والا کل', example:'"Tomorrow is Wednesday."', color:'#FF9500'},
{front:'📆 Week', back:'ہفتہ', example:'"Seven days in a week."', color:'#FF9500'},
{front:'🗓️ Month', back:'مہینہ', example:'"Twelve months in a year."', color:'#FF9500'},
{front:'🎆 Year', back:'سال', example:'"Happy New Year!"', color:'#FF9500'},
{front:'📋 Schedule', back:'شیڈول', example:'"What is your schedule?"', color:'#FF9500'},
{front:'🥇 First', back:'پہلا', example:'"First class is English."', color:'#FF9500'},
{front:'🏁 Last', back:'آخری', example:'"Last class at two PM."', color:'#FF9500'},
{front:'⏭️ Next', back:'اگلا', example:'"Next class is Maths."', color:'#FF9500'},
{front:'🌅 AM', back:'صبح', example:'"Eight AM school."', color:'#FF9500'},
{front:'🌆 PM', back:'سہ پہر / شام', example:'"Two PM school ends."', color:'#FF9500'}
],
summary: {
emoji: '🎯',
wordsLearned: 40,
sentencesLearned: 45,
grammarRules: 20,
studyTime: '2 hours',
nextDay: 'Daily Routine',
achievement: '🏆 Number Master!',
realLifeTask: '📋 Aaj apne ghar mein ghadi dekho aur English mein waqt bolo!'
}
};


// ── FRENCH ──
ALL_DAYS['fr'] = {};
ALL_DAYS['fr'][1] = {
theme: 'بنیادی تعارف',
themeEn: 'Basic Introductions — Présentations de base',
emoji: '👋',
color: '#0055A4',
scene: {
emoji: '🏫',
title: 'French Class Ka Pehla Din',
desc: 'Ahmed French class mein pehli baar jaata hai.',
bg: 'linear-gradient(135deg, #001a4a, #0055A4)',
characters: [
{emoji: '👦', name: 'Ahmed', role: 'Tum (Student)'},
{emoji: '👧', name: 'Sara', role: 'Nayi Dost'},
{emoji: '👨‍🏫', name: 'Mr. Ali', role: 'Teacher'}
]
},
vocab: [
{ w: 'Bonjour', u: 'ہیلو / سلام (صبح)', p: 'bon-ZHOOR', ex: '"Bonjour! Je m\'appelle Ahmed."', tip: 'Din ke kisi bhi waqt use ho sakta hai - subah se dopehar tak', visual: { emoji: '👋', scene: 'Subah milne par hath hilana', memoryTrick: 'Bon = Acha, Jour = Din = Acha Din', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Bonjour monsieur!"'}, {emoji:'💼', place:'Office mein', example:'"Bonjour tout le monde!"'}, {emoji:'🏠', place:'Ghar mein', example:'"Bonjour maman!"'} ], mistake: '⚠️ Galti: Bonjour sirf subah nahi, dopehar tak use hota hai. Sham ko Bonsoir bolein.', level: 1 },
{ w: 'Bonsoir', u: 'شام بخیر', p: 'bon-SWAAR', ex: '"Bonsoir madame!"', tip: 'Sham ko milne ya rukhsat hote waqt', visual: { emoji: '🌆', scene: 'Sham ko milna', memoryTrick: 'Bon = Acha, Soir = Sham', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Bonsoir professeur!"'}, {emoji:'💼', place:'Office mein', example:'"Bonsoir à tous!"'}, {emoji:'🏠', place:'Ghar mein', example:'"Bonsoir papa!"'} ], mistake: '⚠️ Galti: Subah Bonsoir mat kaho, Bonjour kaho.', level: 1 },
{ w: 'Au revoir', u: 'خدا حافظ', p: 'oh ruh-VWAAR', ex: '"Au revoir! À bientôt!"', tip: 'Jane waqt kehna - formal aur informal dono ke liye', visual: { emoji: '👋', scene: 'Jane waqt hath hilana', memoryTrick: 'Au revoir = Dobara dekhne tak', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Au revoir monsieur!"'}, {emoji:'💼', place:'Office mein', example:'"Au revoir tout le monde!"'}, {emoji:'🏠', place:'Ghar mein', example:'"Au revoir maman!"'} ], mistake: '⚠️ Galti: Salut informal hai - teacher ko Salut mat kaho, Au revoir kaho.', level: 1 },
{ w: 'Merci', u: 'شکریہ', p: 'mair-SEE', ex: '"Merci beaucoup!"', tip: 'Shukriya ada karna - beaucoup (bohot) ke sath zyada impact', visual: { emoji: '🙏', scene: 'Shukriya ka gesture', memoryTrick: 'Merci = Meherbani', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Merci professeur!"'}, {emoji:'💼', place:'Office mein', example:'"Merci beaucoup!"'}, {emoji:'🏠', place:'Ghar mein', example:'"Merci maman!"'} ], mistake: '⚠️ Galti: Merci ke baad de rien (koi baat nahi) kehte hain, welcome nahi.', level: 1 },
{ w: 'De rien', u: 'کوئی بات نہیں', p: 'duh RYAN', ex: '"De rien! Avec plaisir!"', tip: 'Merci ka jawab - koi baat nahi', visual: { emoji: '😊', scene: 'Khushi se jawab dena', memoryTrick: 'De rien = Kisi cheez ki baat nahi', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"De rien!"'}, {emoji:'💼', place:'Office mein', example:'"De rien, avec plaisir."'}, {emoji:'🏠', place:'Ghar mein', example:'"De rien maman."'} ], mistake: '⚠️ Galti: Welcome ya No problem French mein nahi chalta - De rien kaho.', level: 1 },
{ w: 'S\'il vous plaît', u: 'براہ کرم (باادب)', p: 'seel voo PLAY', ex: '"Un café, s\'il vous plaît."', tip: 'Formal please - strangers, teachers, bade logon ke liye', visual: { emoji: '🙏', scene: 'Adab se kuch mangna', memoryTrick: 'S\'il vous plaît = Agar aap chahein to please', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Répétez, s\'il vous plaît."'}, {emoji:'💼', place:'Office mein', example:'"Entrez, s\'il vous plaît."'}, {emoji:'🏠', place:'Ghar mein', example:'"L\'eau, s\'il vous plaît."'} ], mistake: '⚠️ Galti: Doston ke liye s\'il te plaît use karo, vous wala formal hai.', level: 1 },
{ w: 'S\'il te plaît', u: 'براہ کرم (دوستوں میں)', p: 'seel tuh PLAY', ex: '"Aide-moi, s\'il te plaît!"', tip: 'Informal please - doston aur family ke liye', visual: { emoji: '😊', scene: 'Dost se kuch mangna', memoryTrick: 'Te = Tu (tum) - doston ke liye', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Aide-moi, s\'il te plaît!"'}, {emoji:'📱', place:'Phone par', example:'"Appelle-moi, s\'il te plaît!"'}, {emoji:'🏠', place:'Ghar mein', example:'"Viens, s\'il te plaît!"'} ], mistake: '⚠️ Galti: Teacher ko s\'il te plaît mat kaho - s\'il vous plaît formal hai.', level: 1 },
{ w: 'Pardon', u: 'معاف کیجئے', p: 'par-DOHN', ex: '"Pardon, je ne comprends pas."', tip: 'Maafi maangna ya dobara poochne ke liye', visual: { emoji: '😔', scene: 'Maafi ka gesture', memoryTrick: 'Pardon = Maafi maango (Urdu mein bhi pardon bola jata hai)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Pardon monsieur!"'}, {emoji:'💼', place:'Office mein', example:'"Pardon, je suis en retard."'}, {emoji:'🏠', place:'Ghar mein', example:'"Pardon maman!"'} ], mistake: '⚠️ Galti: Pardon ek baar bolein - dobara bolne par Excusez-moi behtar hai.', level: 1 },
{ w: 'Excusez-moi', u: 'معاف کریں / سنئے', p: 'ek-skoo-ZAY mwah', ex: '"Excusez-moi, où est la classe?"', tip: 'Tawajjo hasil karna ya rasta maangna', visual: { emoji: '☝️', scene: 'Kisi ko rokna ya dhyan dilana', memoryTrick: 'Excuse + moi (mujhe) = Mujhe maaf karein', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Excusez-moi professeur!"'}, {emoji:'💼', place:'Office mein', example:'"Excusez-moi, je peux entrer?"'}, {emoji:'🏠', place:'Ghar mein', example:'"Excusez-moi, s\'il vous plaît."'} ], mistake: '⚠️ Galti: Pardon chhoti galti ke liye, Excusez-moi tawajjo hasil karne ke liye.', level: 1 },
{ w: 'Je m\'appelle', u: 'میرا نام ہے', p: 'zhuh ma-PEL', ex: '"Je m\'appelle Ahmed."', tip: 'Apna naam batane ka sahi tareeqa - Je suis + naam nahi', visual: { emoji: '🏷️', scene: 'Naam batana - haath sine par', memoryTrick: 'Je m\'appelle = Main apne aap ko bulaata hoon', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Je m\'appelle Ahmed."'}, {emoji:'💼', place:'Office mein', example:'"Je m\'appelle Bilal."'}, {emoji:'🏠', place:'Ghar mein', example:'"Je m\'appelle Sara."'} ], mistake: '⚠️ Galti: "Je suis Ahmed" naam ke liye ghalat hai - "Je m\'appelle Ahmed" sahi hai.', level: 1 },
{ w: 'Enchanté(e)', u: 'آپ سے مل کر خوشی ہوئی', p: 'on-shon-TAY', ex: '"Enchanté de vous rencontrer!"', tip: 'Pehli mulaqat par - mard Enchanté, aurat Enchantée (e ziyada)', visual: { emoji: '🤝', scene: 'Pehli baar milna', memoryTrick: 'Enchanté = Khush hua + Jadoo (enchanted)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Enchanté, je m\'appelle Ahmed."'}, {emoji:'💼', place:'Office mein', example:'"Enchanté de vous rencontrer."'}, {emoji:'🏠', place:'Ghar mein', example:'"Enchanté!"'} ], mistake: '⚠️ Galti: Aurat Enchantée likhti hai (e ke sath), mard Enchanté.', level: 1 },
{ w: 'Ravi(e) de vous rencontrer', u: 'آپ سے ملنا خوشی کی بات ہے', p: 'ra-VEE duh voo ron-kon-TRAY', ex: '"Ravi de vous rencontrer madame."', tip: 'Formal pehli mulaqat - Enchanté se zyada formal', visual: { emoji: '😊', scene: 'Formal mulaqat mein khushi', memoryTrick: 'Ravi = Khush + rencontrer = milna', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Ravi de vous rencontrer."'}, {emoji:'💼', place:'Office mein', example:'"Ravi de vous rencontrer monsieur."'}, {emoji:'🏠', place:'Ghar mein', example:'"Ravi de te rencontrer."'} ], mistake: '⚠️ Galti: Formal mein "vous", friends mein "te rencontrer".', level: 1 },
{ w: 'Je suis', u: 'میں ہوں', p: 'zhuh SWEE', ex: '"Je suis étudiant."', tip: 'Main hoon - profession, nationality batane ke liye', visual: { emoji: '👤', scene: 'Apne aap ki taraf ishara', memoryTrick: 'Je = Main, Suis = Hoon', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Je suis étudiant."'}, {emoji:'💼', place:'Office mein', example:'"Je suis professeur."'}, {emoji:'🏠', place:'Ghar mein', example:'"Je suis fatigué."'} ], mistake: '⚠️ Galti: Naam ke liye Je suis nahi - profession ke liye Je suis sahi hai.', level: 1 },
{ w: 'Tu es', u: 'تم ہو (غیر رسمی)', p: 'too AY', ex: '"Tu es étudiant?"', tip: 'Dosto aur family se baat karte waqt - informal you', visual: { emoji: '👉', scene: 'Dost ko samjhana', memoryTrick: 'Tu = Tum (familiar), Es = Ho', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Tu es nouveau?"'}, {emoji:'📱', place:'Phone par', example:'"Tu es là?"'}, {emoji:'🏠', place:'Ghar mein', example:'"Tu es fatigué?"'} ], mistake: '⚠️ Galti: Teacher ya stranger ko Tu mat kaho - Vous êtes formal hai.', level: 1 },
{ w: 'Vous êtes', u: 'آپ ہیں (باادب)', p: 'voo ZET', ex: '"Vous êtes professeur?"', tip: 'Formal you - teachers, strangers, bade logon ke liye', visual: { emoji: '🎓', scene: 'Teacher se baat karna', memoryTrick: 'Vous = Aap (formal), Êtes = Hain', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Vous êtes Monsieur Ali?"'}, {emoji:'💼', place:'Office mein', example:'"Vous êtes directeur?"'}, {emoji:'🏠', place:'Ghar mein', example:'"Vous êtes le père d\'Ahmed?"'} ], mistake: '⚠️ Galti: Stranger ko Tu mat kaho - Vous êtes respect ka tareeqa hai.', level: 1 },
{ w: 'Il est', u: 'وہ ہے (لڑکا)', p: 'eel AY', ex: '"Il est étudiant."', tip: 'Mard ke liye - he is', visual: { emoji: '👨', scene: 'Kisi mard ke baare mein batana', memoryTrick: 'Il = He (mard), Est = Hai', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Il est mon ami."'}, {emoji:'💼', place:'Office mein', example:'"Il est directeur."'}, {emoji:'🏠', place:'Ghar mein', example:'"Il est mon père."'} ], mistake: '⚠️ Galti: Aurat ke liye Il nahi - Elle est hota hai.', level: 1 },
{ w: 'Elle est', u: 'وہ ہے (لڑکی)', p: 'el AY', ex: '"Elle est professeur."', tip: 'Aurat ke liye - she is', visual: { emoji: '👩', scene: 'Kisi aurat ke baare mein batana', memoryTrick: 'Elle = She (aurat), Est = Hai', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Elle est mon amie."'}, {emoji:'💼', place:'Office mein', example:'"Elle est directrice."'}, {emoji:'🏠', place:'Ghar mein', example:'"Elle est ma mère."'} ], mistake: '⚠️ Galti: Mard ke liye Elle nahi - Il est hota hai.', level: 1 },
{ w: 'Nous sommes', u: 'ہم ہیں', p: 'noo SOM', ex: '"Nous sommes étudiants."', tip: 'Hum hain - group ke liye', visual: { emoji: '👫', scene: 'Group ko include karna', memoryTrick: 'Nous = Hum, Sommes = Hain', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Nous sommes étudiants."'}, {emoji:'💼', place:'Office mein', example:'"Nous sommes collègues."'}, {emoji:'🏠', place:'Ghar mein', example:'"Nous sommes amis."'} ], mistake: '⚠️ Galti: Nous sommes ke baad profession mein article nahi lagta.', level: 1 },
{ w: 'Comment vous appelez-vous?', u: 'آپ کا نام کیا ہے؟', p: 'koh-MAHN voo za-play-VOO', ex: '"Comment vous appelez-vous, madame?"', tip: 'Formal naam poochna - strangers aur bade logon ke liye', visual: { emoji: '❓', scene: 'Kisi ka naam poochna formal tareeqa', memoryTrick: 'Comment = Kaise, vous appelez-vous = aap apne aap ko bulaate hain', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Comment vous appelez-vous?"'}, {emoji:'💼', place:'Office mein', example:'"Comment vous appelez-vous monsieur?"'}, {emoji:'🏠', place:'Ghar mein', example:'"Comment vous appelez-vous?"'} ], mistake: '⚠️ Galti: Dost se Comment t\'appelles-tu? pucho, yeh formal hai.', level: 1 },
{ w: 'Comment t\'appelles-tu?', u: 'تمہارا نام کیا ہے؟', p: 'koh-MAHN ta-pel TOO', ex: '"Comment t\'appelles-tu, ami?"', tip: 'Informal naam poochna - doston ke liye', visual: { emoji: '❓', scene: 'Dost ka naam poochna', memoryTrick: 'T\'appelles-tu = Tu apne aap ko kaise bulate ho?', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Comment t\'appelles-tu?"'}, {emoji:'📱', place:'Phone par', example:'"Comment t\'appelles-tu?"'}, {emoji:'🏠', place:'Ghar mein', example:'"Comment t\'appelles-tu?"'} ], mistake: '⚠️ Galti: Teacher ko Comment t\'appelles-tu mat pucho - formal version use karo.', level: 1 },
{ w: 'Comment allez-vous?', u: 'آپ کیسے ہیں؟ (باادب)', p: 'koh-MAHN ta-lay-VOO', ex: '"Bonjour! Comment allez-vous?"', tip: 'Formal haal poochna - teacher ya bade ke sath', visual: { emoji: '🤝', scene: 'Formal andaaz mein haal poochna', memoryTrick: 'Comment = Kaise, allez-vous = aap ja rahe hain (matlab: kya haal hai)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Comment allez-vous monsieur?"'}, {emoji:'💼', place:'Office mein', example:'"Comment allez-vous madame?"'}, {emoji:'🏠', place:'Ghar mein', example:'"Comment allez-vous?"'} ], mistake: '⚠️ Galti: Dost se Comment vas-tu? pucho, yeh formal hai.', level: 1 },
{ w: 'Comment vas-tu?', u: 'تم کیسے ہو؟ (غیر رسمی)', p: 'koh-MAHN va TOO', ex: '"Salut! Comment vas-tu?"', tip: 'Informal haal poochna - doston ke sath', visual: { emoji: '😊', scene: 'Dost se haal poochna', memoryTrick: 'Comment = Kaise, vas-tu = tum ja rahe ho (matlab: kya haal hai)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Comment vas-tu Ahmed?"'}, {emoji:'📱', place:'Phone par', example:'"Salut! Comment vas-tu?"'}, {emoji:'🏠', place:'Ghar mein', example:'"Comment vas-tu?"'} ], mistake: '⚠️ Galti: Teacher ko Comment vas-tu mat pucho - Comment allez-vous sahi hai.', level: 1 },
{ w: 'Très bien', u: 'بہت اچھا', p: 'tray byaN', ex: '"Très bien, merci!"', tip: 'Haal poochne ka jawab - bohot acha', visual: { emoji: '😁', scene: 'Khushi se jawab dena', memoryTrick: 'Très = Bohot, Bien = Acha', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Très bien, merci!"'}, {emoji:'💼', place:'Office mein', example:'"Très bien, et vous?"'}, {emoji:'🏠', place:'Ghar mein', example:'"Très bien!"'} ], mistake: '⚠️ Galti: Très bien ke baad "et vous?" ya "et toi?" zaroor pucho -礼貌 ke liye.', level: 1 },
{ w: 'Bien', u: 'اچھا / ٹھیک', p: 'byaN', ex: '"Je vais bien."', tip: 'Theek haal batana', visual: { emoji: '👍', scene: 'Theek hone ka ishara', memoryTrick: 'Bien = Acha (Urdu mein "bhala" jaisa)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Je vais bien."'}, {emoji:'💼', place:'Office mein', example:'"Ça va bien."'}, {emoji:'🏠', place:'Ghar mein', example:'"Bien, merci."'} ], mistake: '⚠️ Galti: Bien aur Bon alag hain - Bien = acha haal, Bon = acha cheez.', level: 1 },
{ w: 'Ça va', u: 'ٹھیک ہے / کیسا چل رہا ہے', p: 'sa VA', ex: '"Ça va? Oui, ça va bien!"', tip: 'Casual greeting aur jawab dono ke liye', visual: { emoji: '🤷', scene: 'Casual andaaz mein poochna', memoryTrick: 'Ça va = Chal raha hai (dono sawal aur jawab)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Ça va?"'}, {emoji:'📱', place:'Phone par', example:'"Ça va, et toi?"'}, {emoji:'🏠', place:'Ghar mein', example:'"Ça va?"'} ], mistake: '⚠️ Galti: Ça va sirf informal hai - teacher ko mat kaho.', level: 1 },
{ w: 'Oui', u: 'ہاں', p: 'WEE', ex: '"Oui, je comprends."', tip: 'Haan - sabse simple jawab', visual: { emoji: '✔️', scene: 'Haan mein sar hilana', memoryTrick: 'Oui = Wee (taraf) jaisi aawaz = Haan', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Oui monsieur!"'}, {emoji:'💼', place:'Office mein', example:'"Oui, d\'accord."'}, {emoji:'🏠', place:'Ghar mein', example:'"Oui maman!"'} ], mistake: '⚠️ Galti: Wee nahi likhte - Oui likhte hain.', level: 1 },
{ w: 'Non', u: 'نہیں', p: 'NOHN', ex: '"Non, je ne comprends pas."', tip: 'Nahi - inkaar ke liye', visual: { emoji: '❌', scene: 'Nahi mein sar hilana', memoryTrick: 'Non = Nahi (bahut milti julti aawaz)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Non monsieur."'}, {emoji:'💼', place:'Office mein', example:'"Non, merci."'}, {emoji:'🏠', place:'Ghar mein', example:'"Non maman!"'} ], mistake: '⚠️ Galti: Non ke baad aksar pas lagta hai negative mein.', level: 1 },
{ w: 'Je comprends', u: 'میں سمجھ گیا', p: 'zhuh kon-PRAHN', ex: '"Oui, je comprends."', tip: 'Samajhne ka expression', visual: { emoji: '💡', scene: 'Samajh gaye ka expression', memoryTrick: 'Je comprends = Main comprehend karta hoon', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Je comprends maintenant."'}, {emoji:'💼', place:'Office mein', example:'"Je comprends, merci."'}, {emoji:'🏠', place:'Ghar mein', example:'"Je comprends."'} ], mistake: '⚠️ Galti: Ne...pas lagao negative ke liye: Je ne comprends pas.', level: 1 },
{ w: 'Je ne comprends pas', u: 'میں نہیں سمجھا', p: 'zhuh nuh kon-PRAHN PAH', ex: '"Pardon, je ne comprends pas."', tip: 'Samajh na aaya - class mein zaroori', visual: { emoji: '😕', scene: 'Confuse hone ka expression', memoryTrick: 'Ne...pas = nahi - Je NE comprends PAS', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Je ne comprends pas, s\'il vous plaît répétez."'}, {emoji:'💼', place:'Office mein', example:'"Je ne comprends pas."'}, {emoji:'🏠', place:'Ghar mein', example:'"Je ne comprends pas."'} ], mistake: '⚠️ Galti: Sirf "Je comprends pas" chalega lekin ne ke sath grammatically sahi hai.', level: 1 },
{ w: 'Répétez, s\'il vous plaît', u: 'براہ کرم دوبارہ کہیں', p: 'ray-pay-TAY seel voo PLAY', ex: '"Répétez, s\'il vous plaît monsieur."', tip: 'Dobara poochna - class mein useful', visual: { emoji: '🔁', scene: 'Dobara sunne ki request', memoryTrick: 'Répétez = Repeat karo please', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Répétez, s\'il vous plaît!"'}, {emoji:'💼', place:'Office mein', example:'"Répétez, s\'il vous plaît."'}, {emoji:'🏠', place:'Ghar mein', example:'"Répétez s\'il te plaît!"'} ], mistake: '⚠️ Galti: Dost se Répétez, s\'il te plaît kaho, vous wala formal hai.', level: 1 },
{ w: 'le nom', u: 'نام (مذکر)', p: 'luh NOHM', ex: '"Quel est votre nom?"', tip: 'Naam - masculine word hai', visual: { emoji: '🏷️', scene: 'Name tag dekhna', memoryTrick: 'Nom = Naam (dono se milta julta)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Mon nom est Ahmed."'}, {emoji:'💼', place:'Office mein', example:'"Votre nom s\'il vous plaît."'}, {emoji:'🏠', place:'Ghar mein', example:'"Le nom du chat."'} ], mistake: '⚠️ Galti: Nom masculine hai isliye "le nom" aur "mon nom" hota hai.', level: 1 },
{ w: 'l\'ami / l\'amie', u: 'دوست (لڑکا / لڑکی)', p: 'la-MEE', ex: '"C\'est mon ami Ahmed."', tip: 'Dost - ami (mard), amie (aurat)', visual: { emoji: '👫', scene: 'Dost se milwana', memoryTrick: 'Ami = Friend (English se milta julta)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"C\'est mon ami."'}, {emoji:'💼', place:'Office mein', example:'"C\'est mon amie Sara."'}, {emoji:'🏠', place:'Ghar mein', example:'"Mon meilleur ami."'} ], mistake: '⚠️ Galti: Aurat ke liye amie (e lagao), mard ke liye ami.', level: 1 },
{ w: 'le professeur', u: 'استاد', p: 'luh pro-feh-SUR', ex: '"Le professeur s\'appelle M. Ali."', tip: 'Ustad ya teacher - dono mard aur aurat ke liye', visual: { emoji: '👨‍🏫', scene: 'Teacher class mein', memoryTrick: 'Professeur = Professor (English se milta julta)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Le professeur est là."'}, {emoji:'💼', place:'Office mein', example:'"Le professeur de français."'}, {emoji:'🏠', place:'Ghar mein', example:'"Mon professeur s\'appelle Ali."'} ], mistake: '⚠️ Galti: Professeur mard aur aurat dono ke liye use hota hai French mein.', level: 1 },
{ w: 'l\'étudiant / l\'étudiante', u: 'طالب علم', p: 'lay-too-DYAHN', ex: '"Je suis étudiant."', tip: 'Student - mard: étudiant, aurat: étudiante', visual: { emoji: '🎒', scene: 'Student class mein', memoryTrick: 'Étudiant = Study karne wala', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Je suis étudiant."'}, {emoji:'💼', place:'Office mein', example:'"Il est étudiant."'}, {emoji:'🏠', place:'Ghar mein', example:'"Mon frère est étudiant."'} ], mistake: '⚠️ Galti: Aurat étudiante (e lagao), mard étudiant.', level: 1 },
{ w: 'Monsieur', u: 'جناب / مسٹر', p: 'muh-SYUH', ex: '"Bonjour monsieur!"', tip: 'Mard ke liye respect ka lafz - M. likha jata hai', visual: { emoji: '🎩', scene: 'Mard ko respectfully bulaana', memoryTrick: 'Monsieur = Mister (English jaisa)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Bonjour monsieur Ali."'}, {emoji:'💼', place:'Office mein', example:'"Bonjour monsieur."'}, {emoji:'🏠', place:'Ghar mein', example:'"Monsieur, s\'il vous plaît."'} ], mistake: '⚠️ Galti: Aurat ko Monsieur mat kaho - Madame kaho.', level: 1 },
{ w: 'Madame', u: 'محترمہ', p: 'ma-DAM', ex: '"Bonjour madame!"', tip: 'Aurat ke liye respect ka lafz - Mme. likha jata hai', visual: { emoji: '👒', scene: 'Aurat ko respectfully bulaana', memoryTrick: 'Madame = Madam (Urdu mein bhi use hota hai)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Merci madame."'}, {emoji:'💼', place:'Office mein', example:'"Bonjour madame."'}, {emoji:'🏠', place:'Ghar mein', example:'"Madame, s\'il vous plaît."'} ], mistake: '⚠️ Galti: Mard ko Madame mat kaho - Monsieur kaho.', level: 1 },
{ w: 'Mademoiselle', u: 'کنواری لڑکی', p: 'mad-mwa-ZEL', ex: '"Bonjour mademoiselle!"', tip: 'Jawan aurat ya kanya ke liye - Mlle. likha jata hai', visual: { emoji: '👧', scene: 'Jawan larki ko bulaana', memoryTrick: 'Mademoiselle = Miss (English jaisa)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Bonjour mademoiselle Sara."'}, {emoji:'💼', place:'Office mein', example:'"Mademoiselle s\'il vous plaît."'}, {emoji:'🏠', place:'Ghar mein', example:'"Bonjour mademoiselle."'} ], mistake: '⚠️ Galti: Aaj kal aksar Madame hi use hota hai - Mademoiselle purana hai.', level: 1 },
{ w: 'Salut', u: 'ہائے / ہیلو (غیر رسمی)', p: 'sa-LOO', ex: '"Salut Ahmed! Ça va?"', tip: 'Informal hello aur bye - sirf doston ke sath', visual: { emoji: '✌️', scene: 'Dost ko casual greeting', memoryTrick: 'Salut = Salute (English) = Casual hi', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Salut Bilal!"'}, {emoji:'📱', place:'Phone par', example:'"Salut, ça va?"'}, {emoji:'🏠', place:'Ghar mein', example:'"Salut!"'} ], mistake: '⚠️ Galti: Teacher ya stranger ko Salut mat kaho - Bonjour/Au revoir formal hai.', level: 1 },
{ w: 'À bientôt', u: 'جلد ملیں گے', p: 'ah byaN-TOH', ex: '"Au revoir! À bientôt!"', tip: 'See you soon - informal farewell', visual: { emoji: '👋', scene: 'Jaldi milne ki umeed ke sath wida', memoryTrick: 'Bientôt = Jald (soon), À = Tak', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"À bientôt!"'}, {emoji:'💼', place:'Office mein', example:'"À bientôt monsieur."'}, {emoji:'🏠', place:'Ghar mein', example:'"À bientôt!"'} ], mistake: '⚠️ Galti: À bientôt ke beech space mat bhoolein - accent hat gaya to matlab badal sakta hai.', level: 1 },
{ w: 'À demain', u: 'کل ملیں گے', p: 'ah duh-MaN', ex: '"Au revoir! À demain!"', tip: 'See you tomorrow - school mein useful', visual: { emoji: '📅', scene: 'Kal milne ka wada', memoryTrick: 'Demain = Tomorrow, À = Till', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"À demain!"'}, {emoji:'💼', place:'Office mein', example:'"À demain monsieur."'}, {emoji:'🏠', place:'Ghar mein', example:'"À demain!"'} ], mistake: '⚠️ Galti: Demain = tomorrow, Hier = yesterday - confuse mat karo.', level: 1 },
{ w: 'de', u: 'سے / کا', p: 'duh', ex: '"Je suis de Karachi."', tip: 'From/of - jagah batane ke liye', visual: { emoji: '📍', scene: 'Jagah batana', memoryTrick: 'De = Se (origin batana)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Je suis de Lahore."'}, {emoji:'💼', place:'Office mein', example:'"Je suis de Karachi."'}, {emoji:'🏠', place:'Ghar mein', example:'"Je suis de Pakistan."'} ], mistake: '⚠️ Galti: Shehar se pehle de, mulk se pehle du/de la lagta hai.', level: 1 },
{ w: 'et', u: 'اور', p: 'ay', ex: '"Ahmed et Sara sont amis."', tip: 'Aur - do cheezon ko jorna', visual: { emoji: '➕', scene: 'Do cheezein milana', memoryTrick: 'Et = And (French mein)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Ahmed et Bilal sont amis."'}, {emoji:'💼', place:'Office mein', example:'"Monsieur et Madame."'}, {emoji:'🏠', place:'Ghar mein', example:'"Maman et papa."'} ], mistake: '⚠️ Galti: Et ke baad "t" silent hai jab consonant aata hai.', level: 1 },
{ w: 'aussi', u: 'بھی', p: 'oh-SEE', ex: '"Je suis étudiant aussi."', tip: 'Bhi - same bat dohrana', visual: { emoji: '🔄', scene: 'Same bat ke liye bhi', memoryTrick: 'Aussi = Also (English jaisa)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Moi aussi!"'}, {emoji:'💼', place:'Office mein', example:'"Je parle français aussi."'}, {emoji:'🏠', place:'Ghar mein', example:'"Moi aussi, j\'aime ça."'} ], mistake: '⚠️ Galti: Aussi aam tor par jumle ke aakhir mein aata hai.', level: 1 },
{ w: 'et vous? / et toi?', u: 'اور آپ؟ / اور تم؟', p: 'ay VOO / ay TWAH', ex: '"Très bien, et vous?"', tip: 'Wapas poochna - formal et vous, informal et toi', visual: { emoji: '🔄', scene: 'Dost ya teacher se wapas poochna', memoryTrick: 'Et vous = And you (formal), Et toi = And you (friendly)', color: '#0055A4' }, situations: [ {emoji:'🏫', place:'School mein', example:'"Très bien, et vous monsieur?"'}, {emoji:'💼', place:'Office mein', example:'"Et vous madame?"'}, {emoji:'🏠', place:'Ghar mein', example:'"Bien, et toi?"'} ], mistake: '⚠️ Galti: Teacher ko "et toi" mat kaho - "et vous" formal hai.', level: 1 }
],
sentences: [
{ en: 'Bonjour! Je m\'appelle Ahmed.', ur: 'ہیلو! میرا نام احمد ہے۔', words: [{e:'Bonjour', u:'ہیلو'}, {e:'Je m\'appelle', u:'میرا نام ہے'}], reply: 'Bonjour Ahmed! Enchanté!', visual: {emoji:'👋😊', scene:'Pehli baar milna', tip:'Smile karo, seedha dekho'}, context:'Pehli mulaqat par', bodyLang:'Haath milao aur muskurao', level: 1 },
{ en: 'Je m\'appelle Sara. Enchantée!', ur: 'میرا نام سارا ہے۔ آپ سے مل کر خوشی ہوئی!', words: [{e:'Je m\'appelle', u:'میرا نام ہے'}, {e:'Enchantée', u:'خوشی ہوئی'}], reply: 'Enchanté Sara! Je suis Ahmed.', visual: {emoji:'👧🤝', scene:'Sara ka taaruf', tip:'Enchantée aurat ke liye, Enchanté mard ke liye'}, context:'Apna naam batana', bodyLang:'Slightly nod karein', level: 1 },
{ en: 'Comment vous appelez-vous?', ur: 'آپ کا نام کیا ہے؟', words: [{e:'Comment', u:'کیسے'}, {e:'vous appelez-vous', u:'آپ اپنے آپ کو بلاتے ہیں'}], reply: 'Je m\'appelle Monsieur Ali.', visual: {emoji:'❓🎓', scene:'Formal naam poochna', tip:'Teacher ya stranger ke liye'}, context:'Formal naam poochna', bodyLang:'Respectful posture', level: 1 },
{ en: 'Bonjour monsieur! Comment allez-vous?', ur: 'صبح بخیر جناب! آپ کیسے ہیں؟', words: [{e:'Bonjour monsieur', u:'صبح بخیر جناب'}, {e:'Comment allez-vous', u:'آپ کیسے ہیں'}], reply: 'Très bien, merci! Et vous?', visual: {emoji:'👨‍🏫😊', scene:'Teacher ko formal greeting', tip:'Formal tone zaroor rakhein'}, context:'Teacher ya ustad ko greeting', bodyLang:'Seedha khade ho, respectful', level: 1 },
{ en: 'Très bien, merci! Et vous?', ur: 'بہت اچھا، شکریہ! اور آپ؟', words: [{e:'Très bien', u:'بہت اچھا'}, {e:'merci', u:'شکریہ'}, {e:'et vous', u:'اور آپ'}], reply: 'Très bien aussi, merci!', visual: {emoji:'😁🔄', scene:'Jawab dena aur wapas poochna', tip:'Et vous zaroor lagao -礼貌 hai'}, context:'Haal poochne ka jawab', bodyLang:'Thumbs up gesture', level: 1 },
{ en: 'Je suis étudiant.', ur: 'میں طالب علم ہوں۔', words: [{e:'Je suis', u:'میں ہوں'}, {e:'étudiant', u:'طالب علم'}], reply: 'Ah, dans quelle école?', visual: {emoji:'🎒', scene:'Apna profession batana', tip:'Aurat étudiante kahegi'}, context:'Apna profession batana', bodyLang:'Confident tone', level: 1 },
{ en: 'Il est professeur.', ur: 'وہ استاد ہیں۔', words: [{e:'Il est', u:'وہ ہے'}, {e:'professeur', u:'استاد'}], reply: 'Ah, il enseigne quoi?', visual: {emoji:'👨‍🏫', scene:'Teacher ke baare mein batana', tip:'Il mard ke liye'}, context:'Kisi ke profession ke baare mein batana', bodyLang:'Respectful tone', level: 1 },
{ en: 'Elle est mon amie.', ur: 'وہ میری دوست ہے۔', words: [{e:'Elle est', u:'وہ ہے'}, {e:'mon amie', u:'میری دوست'}], reply: 'Ah oui? Comment s\'appelle-t-elle?', visual: {emoji:'👧👫', scene:'Dost ka taaruf', tip:'Elle aurat ke liye, mon amie aurat ke liye'}, context:'Kisi ki dost ka taaruf', bodyLang:'Friendly gesture', level: 1 },
{ en: 'Nous sommes étudiants.', ur: 'ہم طالب علم ہیں۔', words: [{e:'Nous sommes', u:'ہم ہیں'}, {e:'étudiants', u:'طالب علم'}], reply: 'Dans quelle classe?', visual: {emoji:'👥🎒', scene:'Group ka taaruf', tip:'Nous sommes ke baad article nahi lagta'}, context:'Group ke baare mein batana', bodyLang:'Inclusive gesture', level: 1 },
{ en: 'Je suis de Karachi.', ur: 'میں کراچی سے ہوں۔', words: [{e:'Je suis', u:'میں ہوں'}, {e:'de', u:'سے'}, {e:'Karachi', u:'کراچی'}], reply: 'Ah, le Pakistan! Magnifique!', visual: {emoji:'📍🏙️', scene:'Apne shehar ka naam batana', tip:'De + shehar ka naam'}, context:'Apna shehar batana', bodyLang:'Proud expression', level: 1 },
{ en: 'Je suis pakistanais.', ur: 'میں پاکستانی ہوں۔', words: [{e:'Je suis', u:'میں ہوں'}, {e:'pakistanais', u:'پاکستانی'}], reply: 'Ah, le Pakistan! Très bien!', visual: {emoji:'🇵🇰', scene:'Nationality batana', tip:'Aurat pakistanaise kahegi'}, context:'Apni nationality batana', bodyLang:'Normal', level: 1 },
{ en: 'Comment t\'appelles-tu?', ur: 'تمہارا نام کیا ہے؟', words: [{e:'Comment', u:'کیسے'}, {e:'t\'appelles-tu', u:'تم اپنے آپ کو بلاتے ہو'}], reply: 'Je m\'appelle Bilal!', visual: {emoji:'❓😊', scene:'Dost ka naam poochna', tip:'Informal - sirf doston ke liye'}, context:'Dost ka naam poochna', bodyLang:'Friendly smile', level: 1 },
{ en: 'Comment vas-tu Bilal?', ur: 'بلال، تم کیسے ہو؟', words: [{e:'Comment vas-tu', u:'تم کیسے ہو'}, {e:'Bilal', u:'بلال'}], reply: 'Ça va bien, et toi?', visual: {emoji:'😊❓', scene:'Dost ka haal poochna', tip:'Informal - sirf doston ke liye'}, context:'Dost ka haal poochna', bodyLang:'Casual posture', level: 1 },
{ en: 'Ça va bien, merci!', ur: 'ٹھیک ہوں، شکریہ!', words: [{e:'Ça va bien', u:'ٹھیک ہوں'}, {e:'merci', u:'شکریہ'}], reply: 'Super! Moi aussi!', visual: {emoji:'👍😊', scene:'Jawab dena', tip:'Casual answer'}, context:'Casual haal ka jawab', bodyLang:'Thumbs up', level: 1 },
{ en: 'Pardon, je ne comprends pas.', ur: 'معاف کیجئے، میں نہیں سمجھا۔', words: [{e:'Pardon', u:'معاف کیجئے'}, {e:'je ne comprends pas', u:'میں نہیں سمجھا'}], reply: 'Pas de problème, je répète.', visual: {emoji:'😕🔁', scene:'Samjhne mein mushkil', tip:'Class mein zaroori phrase'}, context:'Class mein na samajhne par', bodyLang:'Confused expression', level: 1 },
{ en: 'Répétez, s\'il vous plaît!', ur: 'براہ کرم دوبارہ کہیں!', words: [{e:'Répétez', u:'دوبارہ کہیں'}, {e:'s\'il vous plaît', u:'براہ کرم'}], reply: 'Bien sûr! Je répète.', visual: {emoji:'🔁🙏', scene:'Dobara sunne ki request', tip:'Teacher se formal poochna'}, context:'Teacher se dobara kahne ki request', bodyLang:'Polite gesture', level: 1 },
{ en: 'Merci beaucoup monsieur!', ur: 'بہت بہت شکریہ جناب!', words: [{e:'Merci beaucoup', u:'بہت شکریہ'}, {e:'monsieur', u:'جناب'}], reply: 'De rien! Avec plaisir!', visual: {emoji:'🙏😊', scene:'Teacher ka shukriya ada karna', tip:'Beaucoup = bohot zyada'}, context:'Shukriya ada karna', bodyLang:'Nod karein', level: 1 },
{ en: 'De rien, avec plaisir!', ur: 'کوئی بات نہیں، خوشی سے!', words: [{e:'De rien', u:'کوئی بات نہیں'}, {e:'avec plaisir', u:'خوشی سے'}], reply: 'Merci encore!', visual: {emoji:'😊🤗', scene:'Shukriye ka jawab dena', tip:'Avec plaisir = with pleasure'}, context:'Merci ka jawab', bodyLang:'Warm smile', level: 1 },
{ en: 'Excusez-moi, où est la classe?', ur: 'معاف کریں، کلاس کہاں ہے؟', words: [{e:'Excusez-moi', u:'معاف کریں'}, {e:'où est', u:'کہاں ہے'}, {e:'la classe', u:'کلاس'}], reply: 'La classe est là-bas.', visual: {emoji:'☝️🏫', scene:'Rasta poochna', tip:'Excusez-moi tawajjo ke liye'}, context:'Rasta ya jagah poochna', bodyLang:'Point gesture', level: 1 },
{ en: 'S\'il vous plaît, répétez plus lentement.', ur: 'براہ کرم آہستہ آہستہ بولیں۔', words: [{e:'S\'il vous plaît', u:'براہ کرم'}, {e:'plus lentement', u:'آہستہ آہستہ'}], reply: 'Bien sûr! Je parle plus lentement.', visual: {emoji:'🐢🙏', scene:'Slow bolne ki request', tip:'Lentement = slowly'}, context:'Aahista bolne ki request', bodyLang:'Slow down hand gesture', level: 1 },
{ en: 'Oui, je comprends maintenant.', ur: 'ہاں، اب میں سمجھ گیا۔', words: [{e:'Oui', u:'ہاں'}, {e:'je comprends', u:'میں سمجھ گیا'}, {e:'maintenant', u:'اب'}], reply: 'Parfait! Très bien!', visual: {emoji:'💡✔️', scene:'Samajhne par khushi', tip:'Maintenant = ab/abhi'}, context:'Samajhne par', bodyLang:'Nod yes', level: 1 },
{ en: 'Je suis ravi de vous rencontrer.', ur: 'آپ سے مل کر بہت خوشی ہوئی۔', words: [{e:'Je suis ravi', u:'مجھے خوشی ہے'}, {e:'de vous rencontrer', u:'آپ سے ملنا'}], reply: 'Moi aussi, ravi de vous rencontrer!', visual: {emoji:'🤝😊', scene:'Formal pehli mulaqat', tip:'Aurat ravie kahegi'}, context:'Formal pehli mulaqat', bodyLang:'Firm handshake', level: 1 },
{ en: 'Au revoir! À bientôt!', ur: 'خدا حافظ! جلد ملیں گے!', words: [{e:'Au revoir', u:'خدا حافظ'}, {e:'À bientôt', u:'جلد ملیں گے'}], reply: 'Au revoir! Bonne journée!', visual: {emoji:'👋😊', scene:'Jane waqt rukhsat', tip:'Bonne journée = acha din ho'}, context:'Jane waqt kehna', bodyLang:'Wave hand', level: 1 },
{ en: 'Bonne journée!', ur: 'آپ کا دن اچھا گزرے!', words: [{e:'Bonne', u:'اچھی'}, {e:'journée', u:'دن'}], reply: 'Merci! Vous aussi!', visual: {emoji:'☀️😊', scene:'Din ki dua dena', tip:'Journée = pura din'}, context:'Jane waqt dua dena', bodyLang:'Smile', level: 1 },
{ en: 'À demain!', ur: 'کل ملیں گے!', words: [{e:'À demain', u:'کل ملیں گے'}], reply: 'À demain! Bonne soirée!', visual: {emoji:'📅👋', scene:'Kal milne ka wada', tip:'Demain = kal'}, context:'Kal milne par', bodyLang:'Wave', level: 1 },
{ en: 'Vous êtes professeur?', ur: 'کیا آپ استاد ہیں؟', words: [{e:'Vous êtes', u:'آپ ہیں'}, {e:'professeur', u:'استاد'}], reply: 'Oui, je suis professeur de français.', visual: {emoji:'❓👨‍🏫', scene:'Profession poochna', tip:'Vous êtes formal - sir ke liye'}, context:'Kisi ka profession poochna', bodyLang:'Curious expression', level: 1 },
{ en: 'Tu es nouveau ici?', ur: 'کیا تم یہاں نئے ہو؟', words: [{e:'Tu es', u:'تم ہو'}, {e:'nouveau ici', u:'یہاں نئے'}], reply: 'Oui, c\'est mon premier jour!', visual: {emoji:'❓😊', scene:'New student se milna', tip:'Nouveau mard ke liye, nouvelle aurat ke liye'}, context:'New student se milna', bodyLang:'Friendly', level: 1 },
{ en: 'C\'est mon premier jour ici.', ur: 'یہاں میرا پہلا دن ہے۔', words: [{e:'C\'est', u:'یہ ہے'}, {e:'mon premier jour', u:'میرا پہلا دن'}], reply: 'Bienvenue! Je suis Sara.', visual: {emoji:'1️⃣🏫', scene:'Pehle din ka excitement', tip:'Premier = pehla'}, context:'Pehle din ke baare mein batana', bodyLang:'Excited expression', level: 1 },
{ en: 'Bienvenue dans notre classe!', ur: 'ہماری کلاس میں خوش آمدید!', words: [{e:'Bienvenue', u:'خوش آمدید'}, {e:'dans notre classe', u:'ہماری کلاس میں'}], reply: 'Merci beaucoup!', visual: {emoji:'🤗🏫', scene:'Welcome dena', tip:'Bienvenue = welcome'}, context:'Kisi ko welcome karna', bodyLang:'Open arms gesture', level: 1 },
{ en: 'Moi aussi, je suis nouveau.', ur: 'میں بھی نیا ہوں۔', words: [{e:'Moi aussi', u:'میں بھی'}, {e:'je suis nouveau', u:'نیا ہوں'}], reply: 'Super! On peut être amis!', visual: {emoji:'🙋‍♂️', scene:'Bhi batana', tip:'Moi aussi = me too/main bhi'}, context:'Same condition share karna', bodyLang:'Point to self', level: 1 },
{ en: 'Je parle un peu français.', ur: 'میں تھوڑی سی فرانسیسی بولتا ہوں۔', words: [{e:'Je parle', u:'میں بولتا ہوں'}, {e:'un peu', u:'تھوڑا'}, {e:'français', u:'فرانسیسی'}], reply: 'Très bien! C\'est un bon début!', visual: {emoji:'🗣️🇫🇷', scene:'Thoda French bolna', tip:'Un peu = thoda'}, context:'Apni French ability batana', bodyLang:'Humble gesture', level: 1 },
{ en: 'Je suis heureux d\'être ici.', ur: 'میں یہاں ہو کر خوش ہوں۔', words: [{e:'Je suis heureux', u:'میں خوش ہوں'}, {e:'d\'être ici', u:'یہاں ہونے پر'}], reply: 'Nous sommes heureux aussi!', visual: {emoji:'😊🏫', scene:'Class mein khush hona', tip:'Heureux mard ke liye, heureuse aurat ke liye'}, context:'Khushi ka izhar', bodyLang:'Warm smile', level: 1 },
{ en: 'Est-ce que vous parlez anglais?', ur: 'کیا آپ انگریزی بولتے ہیں؟', words: [{e:'Est-ce que', u:'کیا'}, {e:'vous parlez', u:'آپ بولتے ہیں'}, {e:'anglais', u:'انگریزی'}], reply: 'Oui, un peu. Et vous?', visual: {emoji:'❓🇬🇧', scene:'Language poochna', tip:'Est-ce que = kya (sawal banane ke liye)'}, context:'Kisi ki language ability poochna', bodyLang:'Questioning look', level: 1 },
{ en: 'Enchanté! Je suis Ahmed de Karachi.', ur: 'آپ سے مل کر خوشی ہوئی! میں کراچی سے احمد ہوں۔', words: [{e:'Enchanté', u:'آپ سے مل کر خوشی'}, {e:'de Karachi', u:'کراچی سے'}], reply: 'Enchanté Ahmed! Je suis Sara.', visual: {emoji:'🤝🏙️', scene:'Apna poora taaruf', tip:'Naam + jagah ek saath'}, context:'Pura taaruf dena', bodyLang:'Confident handshake', level: 1 },
{ en: 'Il s\'appelle Bilal et il est mon ami.', ur: 'اس کا نام بلال ہے اور وہ میرا دوست ہے۔', words: [{e:'Il s\'appelle', u:'اس کا نام ہے'}, {e:'et il est', u:'اور وہ ہے'}, {e:'mon ami', u:'میرا دوست'}], reply: 'Enchanté Bilal!', visual: {emoji:'👦👫', scene:'Dost ka taaruf', tip:'Il s\'appelle = uska naam hai'}, context:'Kisi ka taaruf dena', bodyLang:'Point to friend', level: 1 },
{ en: 'Salut! Comment t\'appelles-tu?', ur: 'ہائے! تمہارا نام کیا ہے؟', words: [{e:'Salut', u:'ہائے'}, {e:'Comment t\'appelles-tu', u:'تمہارا نام کیا ہے'}], reply: 'Salut! Je m\'appelle Sara!', visual: {emoji:'✌️😊', scene:'Dost se casual milna', tip:'Salut informal hai - sirf doston ke liye'}, context:'Dost se casual milna', bodyLang:'Casual wave', level: 1 },
{ en: 'Très bien! Merci pour votre aide.', ur: 'بہت اچھا! آپ کی مدد کا شکریہ۔', words: [{e:'Très bien', u:'بہت اچھا'}, {e:'merci pour', u:'شکریہ'}, {e:'votre aide', u:'آپ کی مدد'}], reply: 'De rien! C\'est mon plaisir!', visual: {emoji:'😊🤝', scene:'Maddad ka shukriya', tip:'Pour = ke liye, aide = madad'}, context:'Madad ke baad shukriya', bodyLang:'Grateful expression', level: 1 },
{ en: 'Je ne parle pas bien français.', ur: 'میں فرانسیسی اچھی طرح نہیں بولتا۔', words: [{e:'Je ne parle pas', u:'میں نہیں بولتا'}, {e:'bien français', u:'اچھی فرانسیسی'}], reply: 'Ne t\'inquiète pas! Tu apprends bien!', visual: {emoji:'🗣️😕', scene:'Apni limitation batana', tip:'Ne...pas = negative banana'}, context:'Apni limitation batana', bodyLang:'Humble', level: 1 },
{ en: 'Voilà! C\'est tout pour aujourd\'hui.', ur: 'بس! آج کے لیے اتنا کافی ہے۔', words: [{e:'Voilà', u:'یہ رہا'}, {e:'C\'est tout', u:'بس اتنا'}, {e:'aujourd\'hui', u:'آج'}], reply: 'Merci professeur! À demain!', visual: {emoji:'✅📚', scene:'Class khatam hona', tip:'Voilà = yeh raha / yahi hai'}, context:'Class khatam karte waqt', bodyLang:'Hands together', level: 1 },
{ en: 'Bonsoir! À demain monsieur.', ur: 'شام بخیر! کل ملیں گے جناب۔', words: [{e:'Bonsoir', u:'شام بخیر'}, {e:'À demain', u:'کل ملیں گے'}, {e:'monsieur', u:'جناب'}], reply: 'Bonsoir Ahmed! À demain!', visual: {emoji:'🌆👋', scene:'Sham mein rukhsat', tip:'Bonsoir sham ke baad'}, context:'Sham ko rukhsat', bodyLang:'Respectful bow', level: 1 },
{ en: 'Oui monsieur, je comprends maintenant!', ur: 'ہاں جناب، اب میں سمجھ گیا!', words: [{e:'Oui monsieur', u:'ہاں جناب'}, {e:'je comprends', u:'میں سمجھ گیا'}, {e:'maintenant', u:'اب'}], reply: 'Parfait! Très bien Ahmed!', visual: {emoji:'💡✅', scene:'Samajhne par khushi', tip:'Parfait = perfect'}, context:'Samajhne par batana', bodyLang:'Confident nod', level: 1 }
],
grammar: [
{ title: 'Je m\'appelle vs Je suis (naam vs profession)', visualTable: { headers: ['Situation','French (Français)','Urdu'], rows: [['Naam batana','Je m\'appelle Ahmed','میرا نام احمد ہے'],['Profession batana','Je suis étudiant','میں طالب علم ہوں'],['Nationality batana','Je suis pakistanais','میں پاکستانی ہوں']], color: '#0055A4' }, rules: [ { formula: 'Je m\'appelle + [naam] / Je suis + [profession/nationality]', examples: [ {en:'Je m\'appelle Sara.', ur:'میرا نام سارا ہے۔'}, {en:'Je suis étudiante.', ur:'میں طالب علم ہوں۔'}, {en:'Je m\'appelle Ahmed et je suis pakistanais.', ur:'میرا نام احمد ہے اور میں پاکستانی ہوں۔'}, {en:'Je suis professeur de français.', ur:'میں فرانسیسی کا استاد ہوں۔'} ] } ], memoryTrick: '🧠 Naam ke liye m\'appelle, profession ke liye suis - dono yaad karo!', tip: '💡 "Je suis Ahmed" ghalat hai naam ke liye - "Je m\'appelle Ahmed" hamesha sahi hai.' },
{ title: 'Être (hona) Conjugation — Present Tense', visualTable: { headers: ['Pronoun','French (Français)','Urdu'], rows: [['Je (Main)','suis','ہوں'],['Tu (Tum)','es','ہو'],['Il/Elle (Woh)','est','ہے'],['Nous (Hum)','sommes','ہیں'],['Vous (Aap)','êtes','ہیں'],['Ils/Elles (Wo Sab)','sont','ہیں']], color: '#0055A4' }, rules: [ { formula: 'Subject + être verb', examples: [ {en:'Je suis étudiant.', ur:'میں طالب علم ہوں۔'}, {en:'Tu es mon ami.', ur:'تم میرے دوست ہو۔'}, {en:'Il est professeur.', ur:'وہ استاد ہے۔'}, {en:'Nous sommes étudiants.', ur:'ہم طالب علم ہیں۔'} ] } ], memoryTrick: '🧠 Être = To be. Suis/Es/Est = Hoon/Ho/Hai. Sommes/Êtes/Sont = Hain.', tip: '💡 Être French ka sabse zaroori verb hai - pehle yahi yaad karo!' },
{ title: 'Tu vs Vous (Formal/Informal)', visualTable: { headers: ['Situation','French (Français)','Urdu'], rows: [['Friends/Family','Tu (informal)','تم'],['Teacher/Stranger','Vous (formal)','آپ'],['Group ke liye','Vous','آپ سب']], color: '#0055A4' }, rules: [ { formula: 'Tu = informal you, Vous = formal you or plural you', examples: [ {en:'Tu es mon ami? (Dost ke liye)', ur:'کیا تم میرے دوست ہو؟'}, {en:'Vous êtes monsieur Ali? (Teacher ke liye)', ur:'کیا آپ مسٹر علی ہیں؟'}, {en:'Comment vas-tu? (Dost ke liye)', ur:'تم کیسے ہو؟'}, {en:'Comment allez-vous? (Teacher ke liye)', ur:'آپ کیسے ہیں؟'} ] } ], memoryTrick: '🧠 Tu = Tum (dost). Vous = Aap (respect). Pakistan jaisa - chhote ke sath tum, bade ke sath aap!', tip: '💡 Galti se teacher ko Tu mat kaho - bahut beadabi lagti hai France mein.' },
{ title: 'Negative Sentences (Ne...Pas)', visualTable: { headers: ['Positive','Negative','Urdu'], rows: [['Je comprends','Je ne comprends pas','میں نہیں سمجھا'],['Je parle français','Je ne parle pas français','میں فرانسیسی نہیں بولتا'],['Il est là','Il n\'est pas là','وہ یہاں نہیں ہے']], color: '#0055A4' }, rules: [ { formula: 'Subject + ne + verb + pas', examples: [ {en:'Je ne comprends pas.', ur:'میں نہیں سمجھا۔'}, {en:'Je ne suis pas professeur.', ur:'میں استاد نہیں ہوں۔'}, {en:'Il ne parle pas anglais.', ur:'وہ انگریزی نہیں بولتا۔'}, {en:'Nous ne sommes pas de Paris.', ur:'ہم پیرس سے نہیں ہیں۔'} ] } ], memoryTrick: '🧠 NE verb PAS - verb ko sandwich ki tarah ne...pas ke beech mein dabao!', tip: '💡 Vowel se pehle ne ki jagah n\' lagta hai: il n\'est pas, je n\'ai pas.' },
{ title: 'Gender — Le/La/Un/Une', visualTable: { headers: ['Gender','Definite Article','Indefinite Article'], rows: [['Masculine (Muzakkar)','le (the)','un (a/an)'],['Feminine (Muannas)','la (the)','une (a/an)'],['Plural','les (the)','des (some)']], color: '#0055A4' }, rules: [ { formula: 'Article + Noun (gender agree karna chahiye)', examples: [ {en:'le professeur (m) — un professeur', ur:'استاد (مذکر)'}, {en:'la classe (f) — une classe', ur:'کلاس (مؤنث)'}, {en:'le nom (m) — un nom', ur:'نام (مذکر)'}, {en:'l\'amie (f) — une amie', ur:'دوست (مؤنث، vowel se shuru)'}  ] } ], memoryTrick: '🧠 French mein har cheez ka gender hota hai - le ya la yaad karo!', tip: '💡 Vowel se shuru hone wale words ke sath le/la ki jagah l\' lagta hai.' },
{ title: 'Questions — Est-ce que', visualTable: { headers: ['Statement','Question','Urdu'], rows: [['Vous êtes professeur.','Est-ce que vous êtes professeur?','کیا آپ استاد ہیں؟'],['Tu parles français.','Est-ce que tu parles français?','کیا تم فرانسیسی بولتے ہو?']], color: '#0055A4' }, rules: [ { formula: 'Est-ce que + statement = question', examples: [ {en:'Est-ce que vous comprenez?', ur:'کیا آپ سمجھتے ہیں؟'}, {en:'Est-ce que tu es étudiant?', ur:'کیا تم طالب علم ہو؟'}, {en:'Est-ce que vous parlez anglais?', ur:'کیا آپ انگریزی بولتے ہیں؟'}, {en:'Est-ce que c\'est votre classe?', ur:'کیا یہ آپ کی کلاس ہے؟'} ] } ], memoryTrick: '🧠 Est-ce que = Kya - statement se pehle lagao aur sawal ban jata hai!', tip: '💡 Est-ce que ka use easy hai - bina verb inversion ke sawal ban jata hai.' },
{ title: 'Possessives — Mon/Ma/Mes', visualTable: { headers: ['Type','Masculine','Feminine','Plural'], rows: [['My (Mera/Meri)','mon','ma','mes'],['Your (Tumhara/Tera)','ton','ta','tes'],['His/Her (Uska/Uski)','son','sa','ses']], color: '#0055A4' }, rules: [ { formula: 'Possessive + noun (noun ki gender ke hisab se)', examples: [ {en:'Mon nom est Ahmed. (nom = masculine)', ur:'میرا نام احمد ہے۔'}, {en:'Ma classe est grande. (classe = feminine)', ur:'میری کلاس بڑی ہے۔'}, {en:'Mon amie s\'appelle Sara. (amie = feminine but mon because vowel)', ur:'میری دوست کا نام سارا ہے۔'}, {en:'Mes amis sont ici. (plural)', ur:'میرے دوست یہاں ہیں۔'} ] } ], memoryTrick: '🧠 Mon/Ma yaad rakhne ka trick: Masculine = Mon, Feminine = Ma. Vowel se pehle hamesha Mon!', tip: '💡 Vowel se shuru hone wali feminine noun ke sath bhi mon lagta hai (mon amie, mon école).' },
{ title: 'Liaison aur Elision', visualTable: { headers: ['Original','Liaison/Elision','Example'], rows: [['le + école','l\'école','L\'école est là.'],['je + ai','j\'ai','J\'ai un livre.'],['ne + est','n\'est','Il n\'est pas là.']], color: '#0055A4' }, rules: [ { formula: 'Vowel se pehle le/la → l\' aur je → j\'', examples: [ {en:'L\'école est grande. (le + école)', ur:'اسکول بڑا ہے۔'}, {en:'J\'ai un ami. (je + ai)', ur:'میرے پاس ایک دوست ہے۔'}, {en:'C\'est mon ami. (ce + est)', ur:'یہ میرا دوست ہے۔'}, {en:'L\'ami de Sara. (le + ami)', ur:'سارا کا دوست۔'} ] } ], memoryTrick: '🧠 Vowel se pehle e/a hata do - le → l\', je → j\', ce → c\'.', tip: '💡 Yeh automatic hai French mein - aadat ban jati hai.' },
{ title: 'S\'appeler Verb Conjugation', visualTable: { headers: ['Pronoun','S\'appeler','Urdu'], rows: [['Je','m\'appelle','میرا نام ہے'],['Tu','t\'appelles','تمہارا نام ہے'],['Il/Elle','s\'appelle','اس کا نام ہے'],['Nous','nous appelons','ہمارا نام ہے'],['Vous','vous appelez','آپ کا نام ہے'],['Ils/Elles','s\'appellent','ان کا نام ہے']], color: '#0055A4' }, rules: [ { formula: 'S\'appeler = reflexive verb (apna naam lena)', examples: [ {en:'Je m\'appelle Ahmed.', ur:'میرا نام احمد ہے۔'}, {en:'Tu t\'appelles Sara?', ur:'کیا تمہارا نام سارا ہے؟'}, {en:'Il s\'appelle Bilal.', ur:'اس کا نام بلال ہے۔'}, {en:'Comment vous appelez-vous?', ur:'آپ کا نام کیا ہے؟'} ] } ], memoryTrick: '🧠 S\'appeler = Apne aap ko bulaana. Har pronoun ke sath alag form.', tip: '💡 S\'appelle (ll double) yaad rakhein - ek L galat hai.' },
{ title: 'Greeting Timing (Bonjour/Bonsoir/Salut)', visualTable: { headers: ['Greeting','Waqt','Context'], rows: [['Bonjour','Subah se dopehar','Formal aur Informal'],['Bonsoir','Sham se raat','Formal aur Informal'],['Salut','Kabhi bhi','Sirf Informal (doston ke liye)']], color: '#0055A4' }, rules: [ { formula: 'Bonjour (day) / Bonsoir (evening) / Salut (casual)', examples: [ {en:'Bonjour monsieur! (Subah)', ur:'صبح بخیر جناب!'}, {en:'Bonsoir madame! (Sham)', ur:'شام بخیر محترمہ!'}, {en:'Salut Ahmed! (Informal dost)', ur:'ہائے احمد!'}, {en:'Bonjour tout le monde! (Sab ko)', ur:'سب کو سلام!'} ] } ], memoryTrick: '🧠 Bonjour = Din, Bonsoir = Sham. Salut sirf dost ke liye!', tip: '💡 France mein greeting bahut zaroori hai - hamesha Bonjour se shuru karo!' },
{ title: 'Farewell Expressions', visualTable: { headers: ['Expression','Urdu','When to Use'], rows: [['Au revoir','خدا حافظ','Formal/Informal'],['Salut','ہائے (bye bhi)','Sirf informal'],['À bientôt','جلد ملیں گے','See you soon'],['À demain','کل ملیں گے','See you tomorrow'],['Bonne journée','اچھا دن','Din ko rukhsat']], color: '#0055A4' }, rules: [ { formula: 'Au revoir + [À bientôt/À demain] = complete farewell', examples: [ {en:'Au revoir! À bientôt!', ur:'خدا حافظ! جلد ملیں گے!'}, {en:'Au revoir! À demain!', ur:'خدا حافظ! کل ملیں گے!'}, {en:'Bonne journée monsieur!', ur:'اچھا دن ہو جناب!'}, {en:'Salut! À bientôt!', ur:'ہائے! جلد ملیں گے!'} ] } ], memoryTrick: '🧠 Au revoir = Khuda hafiz + À demain/À bientôt lagao complete farewell ke liye.', tip: '💡 Bonne journée din mein, Bonne soirée sham mein, Bonne nuit raat mein.' },
{ title: 'Politeness — S\'il vous plaît vs S\'il te plaît', visualTable: { headers: ['Context','French (Français)','Urdu'], rows: [['Formal (teacher/stranger)','S\'il vous plaît','براہ کرم (باادب)'],['Informal (friends/family)','S\'il te plaît','براہ کرم (دوستوں میں)']], color: '#0055A4' }, rules: [ { formula: 'S\'il vous plaît = formal please / S\'il te plaît = informal please', examples: [ {en:'Répétez, s\'il vous plaît. (Teacher ko)', ur:'براہ کرم دوبارہ کہیں۔'}, {en:'Aide-moi, s\'il te plaît. (Dost ko)', ur:'میری مدد کرو، please۔'}, {en:'Un café, s\'il vous plaît. (Waiter ko)', ur:'ایک کافی، براہ کرم۔'}, {en:'Viens, s\'il te plaît. (Dost ko)', ur:'آؤ، please۔'} ] } ], memoryTrick: '🧠 Vous = Aap (formal). Te = Tum (informal). Please bhi formal/informal hota hai French mein!', tip: '💡 Bakwas mistakes se bachna: teacher ko s\'il te plaît = beadabi.' },
{ title: 'Nationalities aur Gender', visualTable: { headers: ['Nationality','Masculine','Feminine'], rows: [['Pakistani','pakistanais','pakistanaise'],['French','français','française'],['English','anglais','anglaise'],['American','américain','américaine']], color: '#0055A4' }, rules: [ { formula: 'Masculine nationality + e = Feminine nationality', examples: [ {en:'Je suis pakistanais. (Mard)', ur:'میں پاکستانی ہوں۔'}, {en:'Je suis pakistanaise. (Aurat)', ur:'میں پاکستانی ہوں۔'}, {en:'Il est français.', ur:'وہ فرانسیسی ہے۔'}, {en:'Elle est française.', ur:'وہ فرانسیسی ہے۔'} ] } ], memoryTrick: '🧠 Aurat ke liye zyada tar nationalities mein e lagao!', tip: '💡 Nationality ke baad capital letter nahi lagta French mein.' },
{ title: 'Parler (bolna) Verb Conjugation', visualTable: { headers: ['Pronoun','Parler','Urdu'], rows: [['Je','parle','بولتا/بولتی ہوں'],['Tu','parles','بولتا/بولتی ہو'],['Il/Elle','parle','بولتا/بولتی ہے'],['Nous','parlons','بولتے ہیں'],['Vous','parlez','بولتے ہیں'],['Ils/Elles','parlent','بولتے ہیں']], color: '#0055A4' }, rules: [ { formula: 'Je parle + [language/subject]', examples: [ {en:'Je parle français.', ur:'میں فرانسیسی بولتا ہوں۔'}, {en:'Tu parles anglais?', ur:'کیا تم انگریزی بولتے ہو؟'}, {en:'Il parle très bien.', ur:'وہ بہت اچھا بولتا ہے۔'}, {en:'Nous parlons urdu.', ur:'ہم اردو بولتے ہیں۔'} ] } ], memoryTrick: '🧠 Parler regular -er verb hai. Je parle, tu parles - silent s.', tip: '💡 -er verbs French ka sabse common group hai - yeh pattern yaad karo!' },
{ title: 'C\'est vs Il est / Elle est', visualTable: { headers: ['French (Français)','Usage','Example'], rows: [['C\'est','Cheez ya insaan identify karna','C\'est mon ami.'],['Il est','Mard ka description','Il est étudiant.'],['Elle est','Aurat ka description','Elle est professeur.']], color: '#0055A4' }, rules: [ { formula: 'C\'est = This is / He is / She is (identifying)', examples: [ {en:'C\'est mon professeur. (yeh hai)', ur:'یہ میرے استاد ہیں۔'}, {en:'Il est professeur. (description)', ur:'وہ استاد ہیں۔'}, {en:'C\'est Sara, mon amie.', ur:'یہ سارا ہے، میری دوست۔'}, {en:'Elle est très sympa.', ur:'وہ بہت اچھی ہے۔'} ] } ], memoryTrick: '🧠 C\'est = Yeh hai (pointing). Il/Elle est = Description ya profession.', tip: '💡 C\'est mon ami (sahi) - Il est mon ami (thora anokha lagta hai).' },
{ title: 'Très / Aussi / Un peu (Degree Words)', visualTable: { headers: ['Word','Meaning','Example'], rows: [['Très','بہت','Très bien!'],['Aussi','بھی','Moi aussi!'],['Un peu','تھوڑا','Un peu français.'],['Beaucoup','بہت زیادہ','Merci beaucoup!']], color: '#0055A4' }, rules: [ { formula: 'Très/Beaucoup/Un peu + adjective/verb', examples: [ {en:'Je parle un peu français.', ur:'میں تھوڑا فرانسیسی بولتا ہوں۔'}, {en:'Très bien, merci!', ur:'بہت اچھا، شکریہ!'}, {en:'Merci beaucoup!', ur:'بہت بہت شکریہ!'}, {en:'Moi aussi, je comprends.', ur:'میں بھی سمجھتا ہوں۔'} ] } ], memoryTrick: '🧠 Très = Very, Beaucoup = A lot, Un peu = A little. Easy yaad karo!', tip: '💡 Très beaucoup GHALAT hai - sirf Très bien ya Merci beaucoup kaho.' },
{ title: 'Quel/Quelle (Which/What) Questions', visualTable: { headers: ['Type','French (Français)','Example'], rows: [['Masculine','Quel','Quel est votre nom?'],['Feminine','Quelle','Quelle est votre classe?']], color: '#0055A4' }, rules: [ { formula: 'Quel (m) / Quelle (f) + est + noun?', examples: [ {en:'Quel est votre nom?', ur:'آپ کا نام کیا ہے؟'}, {en:'Quelle est votre nationalité?', ur:'آپ کی قومیت کیا ہے؟'}, {en:'Quel est son prénom?', ur:'اس کا پہلا نام کیا ہے؟'}, {en:'Quelle est votre profession?', ur:'آپ کا پیشہ کیا ہے؟'} ] } ], memoryTrick: '🧠 Quel = Kaunsa/Kya (masculine). Quelle = Kaunsi/Kya (feminine).', tip: '💡 Quel est votre nom = Comment vous appelez-vous - dono naam poochne ke liye sahi.' },
{ title: 'Où (Where) Questions', visualTable: { headers: ['French (Français)','Urdu','Example'], rows: [['Où est...?','کہاں ہے؟','Où est la classe?'],['D\'où êtes-vous?','آپ کہاں سے ہیں؟','D\'où êtes-vous?']], color: '#0055A4' }, rules: [ { formula: 'Où est + noun? / D\'où + être?', examples: [ {en:'Où est la classe de français?', ur:'فرانسیسی کی کلاس کہاں ہے؟'}, {en:'D\'où êtes-vous?', ur:'آپ کہاں سے ہیں؟'}, {en:'Je suis de Karachi.', ur:'میں کراچی سے ہوں۔'}, {en:'Où est monsieur Ali?', ur:'مسٹر علی کہاں ہیں؟'} ] } ], memoryTrick: '🧠 Où = Kahan. D\'où = Kahan se (origin). O accent = Wo kaun sa.', tip: '💡 Où aur ou (or) different hain - accent zaroori hai!' },
{ title: 'Pronunciation — R aur nasals', visualTable: { headers: ['Sound','Example','Urdu Hint'], rows: [['R (Gale se)','Bonjour, merci','Gale ki aawaz'],['an/en (nasal)','enchanté, comprends','Naak se "aaN"'],['on (nasal)','bonjour, pardon','Naak se "oN"'],['in (nasal)','bien, ravi','Naak se "aN"']], color: '#0055A4' }, rules: [ { formula: 'French R = Gale ki kharkharahat + Nasal vowels', examples: [ {en:'Bonjour (bon-ZHOOR)', ur:'بوں ژور - R gale se!'}, {en:'Enchanté (on-shon-TAY)', ur:'آں شوں تے - on nasal hai!'}, {en:'Bien (byaN)', ur:'بیاں - en nasal hai!'}, {en:'Ravi (ra-VEE)', ur:'راوی - R gale se!'} ] } ], memoryTrick: '🧠 French R = Urdu خ (kharkharahat). Nasal = "n" sirf naak se, actually zabaan se nahi.', tip: '💡 Pronunciation perfect nahi hogi pehle din - practice karte raho!' },
{ title: 'Accents in French', visualTable: { headers: ['Accent','Example','Effect'], rows: [['é (aigu)','étudiant, enchanté','Ay sound'],['è/ê (grave/circ)','père, être','Open e sound'],['à/â','à, âge','A/Ah sound'],['ç (cedille)','ça, français','S sound (not k)']], color: '#0055A4' }, rules: [ { formula: 'Accent = pronunciation change karta hai', examples: [ {en:'é = ay (étudiant = ay-too-DYAHN)', ur:'ے کی aawaz - étudiant'}, {en:'è = open e (très = TRAY)', ur:'کھuli e - très'}, {en:'ç = s sound (français = frahn-SAY)', ur:'S ki aawaz - français'}, {en:'à = jagah batane ke liye bhi (à Paris)', ur:'Paris mein / Paris tak'} ] } ], memoryTrick: '🧠 Accent bhoolna = Spelling ghalat! é, è, ê, à, â, ù, û, î, ô, ç - sab yaad karo.', tip: '💡 Ç hamesha S ki aawaz deta hai - Français = Fran-SAY, Fran-KAY nahi!' }
],
story: {
title: 'Ahmed Le Premier Jour — Ahmed ki French class mein pehla din',
level: '⭐ Day 1 — Beginner',
setting: {emoji:'🏫', place:'Karachi, French Language School', time:'Subah 9 baje', weather:'☀️ Sunny din'},
paragraphs: [
{ line: 'Bonjour! C\'est le premier jour d\'Ahmed en classe de français.', ur: 'Bonjour! Yeh Ahmed ka French class mein pehla din hai.', words: ['Bonjour','premier'], visual: {emoji:'🌅🏫', mood:'Excited', tip:'Premier = pehla'} },
{ line: 'Ahmed arrive à l\'école à neuf heures du matin.', ur: 'Ahmed subah nau baje school pahunchta hai.', words: ['école'], visual: {emoji:'🚶🏫', mood:'Nervous', tip:'École = school (e se shuru, l\'école)'} },
{ line: 'Il entre dans la classe et dit: Bonjour tout le monde!', ur: 'Woh class mein daakhil hota hai aur kehta hai: Sab ko salam!', words: ['Bonjour','classe'], visual: {emoji:'👦🚪', mood:'Brave', tip:'Tout le monde = sab log'} },
{ line: 'Le professeur s\'appelle Monsieur Ali.', ur: 'Teacher ka naam Mister Ali hai.', words: ['professeur','s\'appelle','Monsieur'], visual: {emoji:'👨‍🏫', mood:'Respectful', tip:'S\'appelle = naam hai'} },
{ line: 'Monsieur Ali dit: Bonjour! Je m\'appelle Monsieur Ali. Enchanté!', ur: 'Mister Ali kehte hain: Bonjour! Mera naam Mister Ali hai. Khushi hua!', words: ['Bonjour','Je m\'appelle','Enchanté'], visual: {emoji:'👨‍🏫😊', mood:'Welcoming', tip:'Enchanté = pehli baar milna'} },
{ line: 'Ahmed répond: Bonjour monsieur! Je m\'appelle Ahmed. Enchanté!', ur: 'Ahmed jawab deta hai: Bonjour janab! Mera naam Ahmed hai. Khushi hua!', words: ['Bonjour','monsieur','Je m\'appelle'], visual: {emoji:'👦😊', mood:'Polite', tip:'Monsieur = janab'} },
{ line: 'Monsieur Ali demande: Comment allez-vous Ahmed?', ur: 'Mister Ali poochte hain: Ahmed, aap kaise hain?', words: ['Comment allez-vous'], visual: {emoji:'❓', mood:'Friendly', tip:'Comment allez-vous = formal haal poochna'} },
{ line: 'Ahmed dit: Très bien, merci monsieur! Et vous?', ur: 'Ahmed kehta hai: Bohot acha, shukriya janab! Aur aap?', words: ['Très bien','merci','Et vous'], visual: {emoji:'👍🔄', mood:'Polite', tip:'Et vous = aur aap (wapas poochna)'} },
{ line: 'Une jeune fille entre. Elle s\'appelle Sara.', ur: 'Ek ladki aati hai. Uska naam Sara hai.', words: ['Elle s\'appelle'], visual: {emoji:'👧', mood:'Curious', tip:'Elle s\'appelle = uska naam hai (aurat ke liye)'} },
{ line: 'Sara dit: Bonjour! Je m\'appelle Sara. Comment t\'appelles-tu?', ur: 'Sara kehti hai: Bonjour! Mera naam Sara hai. Tumhara naam kya hai?', words: ['Je m\'appelle','Comment t\'appelles-tu'], visual: {emoji:'👧😊', mood:'Friendly', tip:'Comment t\'appelles-tu = informal naam poochna'} },
{ line: 'Ahmed répond: Je m\'appelle Ahmed! Enchanté Sara!', ur: 'Ahmed jawab deta hai: Mera naam Ahmed hai! Sara se milke khushi hua!', words: ['Je m\'appelle','Enchanté'], visual: {emoji:'🤝', mood:'Happy', tip:'Enchanté = first meeting pe'} },
{ line: 'Sara dit: Enchantée Ahmed! Tu es nouveau ici?', ur: 'Sara kehti hai: Khushi hui Ahmed! Kya tum yahan naye ho?', words: ['Enchantée','Tu es','nouveau'], visual: {emoji:'❓👦', mood:'Curious', tip:'Enchantée (e) aurat ke liye'} },
{ line: 'Ahmed dit: Oui, c\'est mon premier jour! Et toi?', ur: 'Ahmed kehta hai: Haan, yeh mera pehla din hai! Aur tum?', words: ['Oui','premier'], visual: {emoji:'1️⃣😊', mood:'Excited', tip:'Oui = haan, premier = pehla'} },
{ line: 'Sara dit: Moi aussi, je suis nouvelle ici!', ur: 'Sara kehti hai: Main bhi yahan nayi hoon!', words: ['Moi aussi'], visual: {emoji:'👧😊', mood:'Happy', tip:'Moi aussi = main bhi'} },
{ line: 'Ahmed demande: Tu es de Karachi aussi?', ur: 'Ahmed poochta hai: Kya tum bhi Karachi se ho?', words: ['aussi'], visual: {emoji:'📍❓', mood:'Curious', tip:'Aussi = bhi'} },
{ line: 'Sara répond: Non, je suis de Lahore. Et toi?', ur: 'Sara jawab deti hai: Nahi, main Lahore se hoon. Aur tum?', words: ['Non','de'], visual: {emoji:'🏙️', mood:'Informative', tip:'Non = nahi, de = se'} },
{ line: 'Ahmed dit: Je suis de Karachi! Ravi de te rencontrer Sara!', ur: 'Ahmed kehta hai: Main Karachi se hoon! Sara se milke khushi hua!', words: ['Ravi de te rencontrer'], visual: {emoji:'🏙️🤝', mood:'Happy', tip:'Ravi = khush'} },
{ line: 'Un autre élève arrive. Il s\'appelle Bilal. Il est de Islamabad.', ur: 'Aik aur student aata hai. Uska naam Bilal hai. Woh Islamabad se hai.', words: ['Il s\'appelle','Il est','de'], visual: {emoji:'👦📍', mood:'Introducing', tip:'Il = woh (mard ke liye)'} },
{ line: 'Monsieur Ali dit: Bienvenue dans notre classe de français!', ur: 'Mister Ali kehte hain: Hamari French class mein khush aamdeed!', words: ['Bienvenue'], visual: {emoji:'🤗🏫', mood:'Welcoming', tip:'Bienvenue = khush aamdeed'} },
{ line: 'Ahmed demande: Excusez-moi monsieur, parlez-vous anglais?', ur: 'Ahmed poochta hai: Maf karein janab, kya aap angrezi bolte hain?', words: ['Excusez-moi','Parlez-vous'], visual: {emoji:'☝️❓', mood:'Curious', tip:'Excusez-moi = maaf karein'} },
{ line: 'Monsieur Ali dit: Un peu! Mais en classe, nous parlons français.', ur: 'Mister Ali kehte hain: Thoda! Lekin class mein hum French bolte hain.', words: ['Un peu','nous parlons'], visual: {emoji:'🗣️🇫🇷', mood:'Strict', tip:'Un peu = thoda'} },
{ line: 'Ahmed ne comprend pas un mot. Il dit: Pardon, je ne comprends pas!', ur: 'Ahmed ek baat nahi samajhta. Woh kehta hai: Maaf, main nahi samjha!', words: ['Pardon','je ne comprends pas'], visual: {emoji:'😕🔁', mood:'Confused', tip:'Je ne comprends pas = nahi samjha'} },
{ line: 'Monsieur Ali dit: Répétez après moi, s\'il vous plaît.', ur: 'Mister Ali kehte hain: Mere baad dohrao, brah-e-karam.', words: ['Répétez','s\'il vous plaît'], visual: {emoji:'🔁👄', mood:'Teaching', tip:'Répétez = dohrao'} },
{ line: 'La classe répète: Bonjour! Merci! Au revoir!', ur: 'Class dohrati hai: Bonjour! Merci! Au revoir!', words: ['Bonjour','Merci','Au revoir'], visual: {emoji:'👥🗣️', mood:'Together', tip:'Sab milkar bolna'} },
{ line: 'Ahmed dit à Sara: Tu comprends?', ur: 'Ahmed Sara se poochta hai: Kya tum samajhti ho?', words: ['Tu comprends'], visual: {emoji:'❓👧', mood:'Checking', tip:'Tu comprends = tum samajhte ho?'} },
{ line: 'Sara dit: Oui, je comprends maintenant! Et toi?', ur: 'Sara kehti hai: Haan, main ab samajhti hoon! Aur tum?', words: ['Oui','je comprends','maintenant'], visual: {emoji:'💡😊', mood:'Confident', tip:'Maintenant = ab'} },
{ line: 'Ahmed dit: Moi aussi! Un peu mais ça va!', ur: 'Ahmed kehta hai: Main bhi! Thoda lekin theek hai!', words: ['Moi aussi','Un peu','Ça va'], visual: {emoji:'👍😄', mood:'Happy', tip:'Ça va = theek hai'} },
{ line: 'Monsieur Ali dit: Très bien! Bonne journée à tous!', ur: 'Mister Ali kehte hain: Bohot acha! Sab ka din acha guzre!', words: ['Très bien','Bonne journée'], visual: {emoji:'☀️😊', mood:'Positive', tip:'Bonne journée = acha din ho'} },
{ line: 'Ahmed dit: Merci monsieur! Au revoir! À demain!', ur: 'Ahmed kehta hai: Shukriya janab! Khuda hafiz! Kal milenge!', words: ['Merci','Au revoir','À demain'], visual: {emoji:'👋😊', mood:'Happy', tip:'À demain = kal milna'} },
{ line: 'Ahmed pense: Le français, c\'est difficile mais sympa!', ur: 'Ahmed sochta hai: French mushkil hai lekin maza aa raha hai!', words: ['français'], visual: {emoji:'🤔💭', mood:'Motivated', tip:'Sympa = acha/friendly'} }
],
moral: '✨ Mushkil nahi hai - Bonjour se shuru karo, aur duniya ka sabse khoobsoorat zaban seekhte jao!'
},
quizzes: [
{type:'meaning', emoji:'🤔', q:'"Bonjour" ka matlab?', hint:'Din ka universal French greeting.', o:['Shab bakhair','Salam / Hello','Khuda hafiz','Shukriya'], a:1, explain:'Bonjour = Salam ya Hello. Subah se dopehar tak use hota hai.'},
{type:'meaning', emoji:'🤔', q:'"Merci" ka matlab?', hint:'Shukriya ka French word.', o:['Maaf kijiye','Shukriya','Koi baat nahi','Please'], a:1, explain:'Merci = Shukriya. Merci beaucoup = bohot shukriya.'},
{type:'meaning', emoji:'🤔', q:'"Au revoir" ka matlab?', hint:'Jane waqt kehte hain.', o:['Hello','Shukriya','Khuda hafiz','Acha din ho'], a:2, explain:'Au revoir = Khuda hafiz. Jane waqt kehte hain.'},
{type:'meaning', emoji:'🤔', q:'"Enchanté" ka matlab?', hint:'Pehli baar milne par.', o:['Bohot acha','Khuda hafiz','Aap se milke khushi','Shukriya'], a:2, explain:'Enchanté = Aap se milke khushi. Pehli mulaqat par kehte hain.'},
{type:'meaning', emoji:'🤔', q:'"De rien" ka matlab?', hint:'Merci ke jawab mein.', o:['Shukriya','Koi baat nahi','Please','Maaf kijiye'], a:1, explain:'De rien = Koi baat nahi. Merci ke jawab mein kehte hain.'},
{type:'meaning', emoji:'🤔', q:'"Je m\'appelle" ka matlab?', hint:'Apna naam batana.', o:['Main hoon','Mera naam hai','Main samjhta hoon','Main bolta hoon'], a:1, explain:'Je m\'appelle = Mera naam hai. Naam batane ka sahi tareeqa.'},
{type:'meaning', emoji:'🤔', q:'"Oui" ka matlab?', hint:'Iqrar ke liye.', o:['Nahi','Haan','Shayad','Theek hai'], a:1, explain:'Oui = Haan. Non = Nahi.'},
{type:'meaning', emoji:'🤔', q:'"Pardon" ka matlab?', hint:'Maafi maangna.', o:['Shukriya','Khuda hafiz','Maaf kijiye','Theek hai'], a:2, explain:'Pardon = Maaf kijiye. Galti par ya dobara poochne ke liye.'},
{type:'meaning', emoji:'🤔', q:'"Très bien" ka matlab?', hint:'Haal ka jawab.', o:['Thoda theek','Bohot acha','Bilkul nahi','Maaf kijiye'], a:1, explain:'Très bien = Bohot acha. Très = bohot, Bien = acha.'},
{type:'meaning', emoji:'🤔', q:'"Je comprends" ka matlab?', hint:'Samajhne ka expression.', o:['Main bolta hoon','Main samajhta hoon','Main sunta hoon','Main likhta hoon'], a:1, explain:'Je comprends = Main samajhta hoon. Je ne comprends pas = nahi samjha.'},
{type:'meaning', emoji:'🤔', q:'"Salut" ka matlab?', hint:'Casual greeting.', o:['Formal Bonjour','Hi/Bye (casual)','Shukriya','Maaf kijiye'], a:1, explain:'Salut = Hi ya Bye (casual). Sirf doston ke liye.'},
{type:'meaning', emoji:'🤔', q:'"À bientôt" ka matlab?', hint:'Jaldi milne ki umeed.', o:['Khuda hafiz','Jald milenge','Kal milenge','Acha din'], a:1, explain:'À bientôt = Jald milenge. See you soon.'},
{type:'meaning', emoji:'🤔', q:'"Nous sommes" ka matlab?', hint:'Hum hain.', o:['Main hoon','Tum ho','Hum hain','Woh hain'], a:2, explain:'Nous sommes = Hum hain. Être verb ka nous form.'},
{type:'meaning', emoji:'🤔', q:'"Excusez-moi" ka matlab?', hint:'Tawajjo ya rasta maangna.', o:['Shukriya','Maaf karein/Suniye','Acha din','Khuda hafiz'], a:1, explain:'Excusez-moi = Maaf karein ya Suniye. Tawajjo hasil karne ke liye.'},
{type:'meaning', emoji:'🤔', q:'"Ça va" ka matlab?', hint:'Casual haal poochna ya jawab dena.', o:['Theek hai / Kaise ho?','Khuda hafiz','Shukriya','Maaf kijiye'], a:0, explain:'Ça va = Theek hai ya Kaise ho? Dono sawal aur jawab ke liye.'},
{type:'meaning', emoji:'🤔', q:'"Bienvenue" ka matlab?', hint:'Welcome karna.', o:['Khuda hafiz','Khush aamdeed','Shukriya','Bohot acha'], a:1, explain:'Bienvenue = Khush aamdeed / Welcome.'},
{type:'fill', emoji:'✏️', q:'Je ___ Ahmed. (Naam batana)', hint:'Naam ke liye sahi verb.', o:['suis','m\'appelle','parle','comprends'], a:1, explain:'Naam ke liye hamesha "Je m\'appelle" - "Je suis Ahmed" ghalat hai.'},
{type:'fill', emoji:'✏️', q:'Bonjour ___! Comment allez-vous? (Teacher ko)', hint:'Mard teacher ke liye.', o:['madame','mademoiselle','monsieur','professeur'], a:2, explain:'Mard teacher ko Monsieur kaho - Madame aurat ke liye hai.'},
{type:'fill', emoji:'✏️', q:'Je ne comprends ___. (Nahi samjha)', hint:'Negative banana.', o:['oui','bien','pas','aussi'], a:2, explain:'Ne...pas = nahi. Je ne comprends PAS.'},
{type:'fill', emoji:'✏️', q:'___ bien, merci! (Haal ka jawab)', hint:'Bohot acha.', o:['Oui','Très','Bien','Non'], a:1, explain:'Très bien = bohot acha. Très = bohot.'},
{type:'fill', emoji:'✏️', q:'Au revoir! À ___ ! (Kal milenge)', hint:'Kal = ?', o:['bientôt','demain','revoir','soir'], a:1, explain:'À demain = Kal milenge. Demain = tomorrow.'},
{type:'fill', emoji:'✏️', q:'Merci madame! - De ___, avec plaisir! (Jawab)', hint:'Koi baat nahi ka jawab.', o:['rien','bien','vous','moi'], a:0, explain:'De rien = koi baat nahi. Merci ka standard jawab.'},
{type:'fill', emoji:'✏️', q:'Il ___ professeur. (Woh hai - mard)', hint:'Être ka woh form.', o:['suis','es','est','sont'], a:2, explain:'Il est = woh hai (mard). Être ka third person singular.'},
{type:'fill', emoji:'✏️', q:'Nous ___ étudiants. (Hum hain)', hint:'Être ka hum form.', o:['suis','sommes','êtes','sont'], a:1, explain:'Nous sommes = hum hain. Être ka nous form.'},
{type:'fill', emoji:'✏️', q:'___ vous plaît, répétez. (Formal please)', hint:'Teacher se request.', o:['S\'il te','S\'il vous','Très','Aussi'], a:1, explain:'S\'il vous plaît = formal please. Vous formal, te informal.'},
{type:'fill', emoji:'✏️', q:'Je suis de ___. (Karachi se)', hint:'Shehar ka naam.', o:['à Karachi','de Karachi','en Karachi','Karachi'], a:1, explain:'Je suis de Karachi = Main Karachi se hoon. De = se.'},
{type:'fill', emoji:'✏️', q:'L\' ___ est grande. (School ka)', hint:'École vowel se shuru hoti hai.', o:['le école','la école','l\'école','les école'], a:2, explain:'Vowel se pehle le/la ki jagah l\' lagta hai. L\'école sahi hai.'},
{type:'fill', emoji:'✏️', q:'Elle est ___ amie. (Meri - aurat)', hint:'Mon ya Ma?', o:['mon','ma','mes','ton'], a:0, explain:'Mon amie - amie vowel (a) se shuru hoti hai isliye mon lagta hai chahe feminine ho.'},
{type:'fill', emoji:'✏️', q:'___ que vous parlez anglais? (Kya aap...)', hint:'Sawal banana.', o:['Est-ce','Comment','Où','Quel'], a:0, explain:'Est-ce que = Kya - statement ko sawal banata hai.'},
{type:'fill', emoji:'✏️', q:'Moi ___! Je comprends aussi. (Main bhi)', hint:'Bhi = ?', o:['très','aussi','bien','peu'], a:1, explain:'Aussi = bhi/also. Moi aussi = main bhi.'},
{type:'fill', emoji:'✏️', q:'Je parle un ___ français. (Thoda)', hint:'Thoda = ?', o:['très','beaucoup','peu','bien'], a:2, explain:'Un peu = thoda. Je parle un peu français = thodi French aati hai.'},
{type:'correct', emoji:'✅', q:'Naam batane ka sahi tareeqa:', hint:'Je m\'appelle ya Je suis?', o:['Je suis Ahmed.','Je m\'appelle Ahmed.','Mon Ahmed est.','Appelle Ahmed je.'], a:1, explain:'Naam ke liye hamesha "Je m\'appelle Ahmed" - "Je suis Ahmed" naam ke liye ghalat hai.'},
{type:'correct', emoji:'✅', q:'Teacher ko greeting ka sahi tareeqa:', hint:'Formal ya Informal?', o:['Salut monsieur!','Ça va monsieur?','Bonjour monsieur!','Hey professeur!'], a:2, explain:'Teacher ko formal greeting = Bonjour monsieur! Salut sirf doston ke liye.'},
{type:'correct', emoji:'✅', q:'Merci ke jawab mein kya kehte hain?', hint:'French mein welcome nahi.', o:['Welcome!','You\'re welcome!','De rien!','Merci aussi!'], a:2, explain:'French mein "De rien!" ya "Avec plaisir!" kehte hain, "Welcome" nahi.'},
{type:'correct', emoji:'✅', q:'Formal haal poochne ka sahi tareeqa:', hint:'Teacher ke liye.', o:['Comment vas-tu?','Ça va?','Comment allez-vous?','Salut, ça va?'], a:2, explain:'Teacher ya bade ke sath "Comment allez-vous?" - formal. Dost ke sath "Comment vas-tu?"'},
{type:'correct', emoji:'✅', q:'Aurat ke liye sahi expression:', hint:'Enchant-é ya Enchant-ée?', o:['Enchanté!','Enchantée!','Enchanté(e)!','Enchantée vous!'], a:1, explain:'Aurat kehti hai "Enchantée" (e ke sath). Mard kehta hai "Enchanté".'},
{type:'correct', emoji:'✅', q:'Sahi negative sentence:', hint:'Ne...pas pattern.', o:['Je comprends ne pas.','Je ne comprends pas.','Je pas comprends.','Ne je comprends pas.'], a:1, explain:'Ne...pas = sandwich. Je NE comprends PAS. Verb ke irdgird.'},
{type:'correct', emoji:'✅', q:'L\'école ya Le école - kaunsa sahi?', hint:'Vowel se pehle.', o:['Le école','La école','L\'école','Les école'], a:2, explain:'Vowel (é) se pehle le/la → l\'. L\'école sahi hai.'},
{type:'correct', emoji:'✅', q:'Sahi possessive (dost aurat ke liye):', hint:'Mon ya Ma?', o:['Ma amie Sara.','Mon amie Sara.','Mes amie Sara.','Ton amie Sara.'], a:1, explain:'Amie vowel se shuru hoti hai isliye MA nahi MON amie - vowel rule!'},
{type:'correct', emoji:'✅', q:'Dost ka haal poochne ka sahi tareeqa:', hint:'Informal.', o:['Comment allez-vous?','Comment vas-tu?','Comment vous allez?','Ça va vous?'], a:1, explain:'Dost ke sath informal: "Comment vas-tu?" Teacher ke sath "Comment allez-vous?"'},
{type:'correct', emoji:'✅', q:'Sahi article (étudiant ke sath):', hint:'Étudiant masculine.', o:['la étudiant','une étudiant','un étudiant','le étudiant'], a:2, explain:'Étudiant masculine aur vowel se shuru hota hai isliye "un étudiant" (un = un indefinite masculine).'},
{type:'correct', emoji:'✅', q:'Je suis ka sahi use:', hint:'Profession batana.', o:['Je suis Ahmed.','Je suis mon ami.','Je suis étudiant.','Je suis bonjour.'], a:2, explain:'Je suis = profession ke liye. "Je suis étudiant" sahi hai. Naam ke liye Je m\'appelle.'},
{type:'correct', emoji:'✅', q:'Sham ko greeting:', hint:'Bonsoir ya Bonjour?', o:['Bonjour bonsoir!','Bonsoir!','Salut et bonsoir!','Bonne nuit!'], a:1, explain:'Sham ko "Bonsoir!" Bonjour din mein hota hai. Bonne nuit sirf sone ke waqt.'},
{type:'correct', emoji:'✅', q:'Sahi farewell (school se jane waqt):', hint:'Kal milenge + Khuda hafiz.', o:['Salut à demain!','Au revoir! À demain!','Bonsoir demain!','À demain revoir!'], a:1, explain:'"Au revoir! À demain!" - pura farewell. Salut informal hai lekin Au revoir sahi hai.'},
{type:'correct', emoji:'✅', q:'Sahi sentence (hum hain):', hint:'Nous sommes.', o:['Nous sont étudiants.','Nous êtes étudiants.','Nous sommes étudiants.','Nous suis étudiants.'], a:2, explain:'Nous = sommes. Être conjugation: je suis, tu es, il est, nous SOMMES.'},
{type:'correct', emoji:'✅', q:'Teacher se dobara bolne ki request:', hint:'Formal please.', o:['Répétez s\'il te plaît!','Répète s\'il vous plaît!','Répétez s\'il vous plaît!','Répète s\'il te plaît!'], a:2, explain:'Teacher = formal. Répétez (vous ke liye), s\'il vous plaît (formal). Yeh dono formal hain.'},
{type:'correct', emoji:'✅', q:'Français ki sahi pronunciation hint:', hint:'Ç ki aawaz.', o:['fran-KAY','fran-SAY','fran-ZAY','fran-NAY'], a:1, explain:'Ç hamesha S ki aawaz deta hai. Français = fran-SAY, fran-KAY bilkul ghalat.'},
{type:'translate', emoji:'🔄', q:'"Mera naam Sara hai" French mein?', hint:'Je m\'appelle.', o:['Je suis Sara.','Je m\'appelle Sara.','Mon nom Sara est.','S\'appelle Sara je.'], a:1, explain:'"Je m\'appelle Sara" = Mera naam Sara hai. Je suis naam ke liye ghalat.'},
{type:'translate', emoji:'🔄', q:'"Aap se milke khushi" French mein?', hint:'Pehli mulaqat.', o:['Au revoir!','Merci!','Enchanté!','Très bien!'], a:2, explain:'"Enchanté!" = Aap se milke khushi. Pehli mulaqat par.'},
{type:'translate', emoji:'🔄', q:'"Main samajhta hoon" French mein?', hint:'Comprendre verb.', o:['Je parle.','Je comprends.','Je suis.','Je m\'appelle.'], a:1, explain:'"Je comprends" = Main samajhta hoon. Comprendre = samajhna.'},
{type:'translate', emoji:'🔄', q:'"Bohot shukriya" French mein?', hint:'Merci + bohot.', o:['Merci monsieur.','Merci beaucoup!','Très merci!','Merci très!'], a:1, explain:'"Merci beaucoup!" = Bohot shukriya. Beaucoup = bohot zyada.'},
{type:'translate', emoji:'🔄', q:'"Koi baat nahi" French mein?', hint:'Merci ka jawab.', o:['Au revoir.','Très bien.','De rien.','Aussi.'], a:2, explain:'"De rien" = Koi baat nahi. Merci ke jawab mein.'},
{type:'translate', emoji:'🔄', q:'"Woh استاد ہے" (mard) French mein?', hint:'Il est.', o:['Elle est professeur.','Il est professeur.','Je suis professeur.','Tu es professeur.'], a:1, explain:'"Il est professeur" = Woh (mard) استاد ہے. Il = mard.'},
{type:'translate', emoji:'🔄', q:'"Kya aap angrezi bolte hain?" French mein?', hint:'Est-ce que + vous.', o:['Tu parles anglais?','Comment allez-vous?','Est-ce que vous parlez anglais?','Où êtes-vous?'], a:2, explain:'"Est-ce que vous parlez anglais?" - formal question. Est-ce que = kya.'},
{type:'translate', emoji:'🔄', q:'"Main Karachi se hoon" French mein?', hint:'Je suis de.', o:['Je suis à Karachi.','Je suis en Karachi.','Je suis de Karachi.','Je de Karachi.'], a:2, explain:'"Je suis de Karachi" = Main Karachi se hoon. De = se (origin).'},
{type:'translate', emoji:'🔄', q:'"Kal milenge" French mein?', hint:'Demain.', o:['À bientôt!','Au revoir!','À demain!','Bonsoir!'], a:2, explain:'"À demain!" = Kal milenge. Demain = tomorrow.'},
{type:'translate', emoji:'🔄', q:'"Hum طالب علم ہیں" French mein?', hint:'Nous sommes.', o:['Nous suis étudiants.','Nous sont étudiants.','Nous sommes étudiants.','Nous êtes étudiants.'], a:2, explain:'"Nous sommes étudiants" = Hum طالب علم ہیں. Nous + sommes.'},
{type:'translate', emoji:'🔄', q:'"Main nہیں سمجھا" French mein?', hint:'Ne...pas.', o:['Je comprends.','Je ne comprends pas.','Je pas comprends.','Je comprends non.'], a:1, explain:'"Je ne comprends pas" = Main nہیں سمجھا. Ne...pas sandwich.'},
{type:'translate', emoji:'🔄', q:'"Khush aamdeed hamari class mein!" French mein?', hint:'Bienvenue.', o:['Merci dans notre classe!','Bonjour dans notre classe!','Bienvenue dans notre classe!','Enchanté dans notre classe!'], a:2, explain:'"Bienvenue dans notre classe!" = Khush aamdeed hamari class mein!'},
{type:'translate', emoji:'🔄', q:'"Dobara bolein please" (teacher ko) French mein?', hint:'Formal please.', o:['Répète s\'il te plaît!','Répétez s\'il vous plaît!','Parle encore!','Répétez s\'il te plaît!'], a:1, explain:'"Répétez s\'il vous plaît!" - Teacher ko formal. Répétez (vous form) + s\'il vous plaît.'},
{type:'translate', emoji:'🔄', q:'"Tumhara naam kya hai?" (dost se) French mein?', hint:'Informal.', o:['Comment vous appelez-vous?','Quel est votre nom?','Comment t\'appelles-tu?','Votre nom s\'il vous plaît?'], a:2, explain:'"Comment t\'appelles-tu?" = Dost se informal naam poochna. Vous wala formal.'},
{type:'translate', emoji:'🔄', q:'"Aaj ka din acha guzre" French mein?', hint:'Journée.', o:['Bonne nuit!','Bonne soirée!','Bonne journée!','Bonsoir!'], a:2, explain:'"Bonne journée!" = Aaj ka din acha guzre. Din mein kehte hain.'},
{type:'translate', emoji:'🔄', q:'"Main thoda French bolta hoon" French mein?', hint:'Un peu.', o:['Je ne parle pas français.','Je parle très français.','Je parle un peu français.','Je parle beaucoup français.'], a:2, explain:'"Je parle un peu français" = Main thoda French bolta hoon. Un peu = thoda.'},
{type:'situation', emoji:'🎭', q:'French class mein pehli baar teacher se milte ho. Kya kaho ge?', hint:'Formal greeting + taaruf.', o:['Salut! Je m\'appelle Ahmed!','Bonjour monsieur! Je m\'appelle Ahmed. Enchanté!','Hey! I am Ahmed!','Ça va? Je suis Ahmed.'], a:1, explain:'Teacher ke sath formal: Bonjour monsieur + Je m\'appelle + Enchanté. Perfect first impression!'},
{type:'situation', emoji:'🎭', q:'Teacher ne poocha "Comment allez-vous?" - kya jawab do ge?', hint:'Formal jawab + wapas poochna.', o:['Ça va!','Salut!','Très bien, merci monsieur! Et vous?','Je m\'appelle Ahmed.'], a:2, explain:'"Très bien, merci! Et vous?" - perfect jawab. Haal batao + wapas poochna礼貌.'},
{type:'situation', emoji:'🎭', q:'Class mein samajh nahi aaya, teacher se kya kaho ge?', hint:'Dobara poochna.', o:['Non merci!','Pardon, je ne comprends pas. Répétez s\'il vous plaît!','Ça va!','Au revoir!'], a:1, explain:'"Pardon + je ne comprends pas + Répétez s\'il vous plaît" - class mein zaroori phrase!'},
{type:'situation', emoji:'🎭', q:'Naye Pakistani dost se French mein milte ho. Kya kaho ge?', hint:'Informal dono ke liye.', o:['Bonjour monsieur!','Salut! Comment t\'appelles-tu? Je m\'appelle Ahmed.','Comment allez-vous?','Vous êtes étudiant?'], a:1, explain:'Naye dost ke sath informal: Salut + Comment t\'appelles-tu + Je m\'appelle. Casual aur friendly!'},
{type:'situation', emoji:'🎭', q:'Dost ne kaha "Merci beaucoup!" - kya jawab do ge?', hint:'Shukriye ka jawab.', o:['Oui, merci!','De rien! Avec plaisir!','Très bien!','Bonjour!'], a:1, explain:'"De rien! Avec plaisir!" = Koi baat nahi! Khushi se! French mein welcome nahi kehte.'},
{type:'situation', emoji:'🎭', q:'Sham ko French class khatam hoti hai, teacher se vidai:', hint:'Sham + kal milenge.', o:['Bonjour monsieur!','Salut!','Bonsoir monsieur! Au revoir! À demain!','Bonne journée!'], a:2, explain:'Sham ko Bonsoir + Au revoir + À demain - mukammal aur polite farewell!'},
{type:'situation', emoji:'🎭', q:'Kisi ajnabi se uska naam poochna hai:', hint:'Formal ya informal?', o:['Comment t\'appelles-tu?','Salut, ton nom?','Comment vous appelez-vous?','Tu es qui?'], a:2, explain:'Ajnabi = formal. "Comment vous appelez-vous?" - sahi aur polite. Informal sirf doston ke liye.'},
{type:'situation', emoji:'🎭', q:'Class mein apna taaruf dena hai - kya kaho ge?', hint:'Naam + jagah + profession.', o:['Je suis Ahmed de Karachi.','Bonjour! Je m\'appelle Ahmed. Je suis de Karachi. Je suis étudiant.','Ahmed je m\'appelle.','Bonjour Ahmed!'], a:1, explain:'Mukammal taaruf: Bonjour + Je m\'appelle + Je suis de + Je suis étudiant. Sab kuch include karo.'},
{type:'situation', emoji:'🎭', q:'French mein nationality batani hai (mard):', hint:'Pakistanais ya pakistanaise?', o:['Je suis pakistanaise.','Je suis pakistanais.','Je suis du Pakistan.','Je suis Pakistan.'], a:1, explain:'Mard: "Je suis pakistanais" (bina e ke). Aurat: "Je suis pakistanaise" (e ke sath).'},
{type:'situation', emoji:'🎭', q:'French class mein teacher ne poocha, kya tum samjhe? Haan mein jawab do.', hint:'Oui + samajhna.', o:['Non, je ne comprends pas.','Oui monsieur, je comprends maintenant!','De rien!','Très bien professeur!'], a:1, explain:'"Oui monsieur, je comprends maintenant!" - Haan + respect + samajhna. Perfect jawab!'},
{type:'situation', emoji:'🎭', q:'Tum bhi naye ho ye batana hai:', hint:'Moi aussi.', o:['Je suis vieux.','Moi aussi, je suis nouveau!','Je comprends.','De rien!'], a:1, explain:'"Moi aussi, je suis nouveau!" = Main bhi naya hoon! Moi aussi = me too.'},
{type:'situation', emoji:'🎭', q:'Dost se farewell - jald milenge:', hint:'Informal see you soon.', o:['Au revoir monsieur!','Salut! À bientôt!','Bonsoir!','De rien!'], a:1, explain:'Dost ke sath informal: "Salut! À bientôt!" - casual aur friendly farewell.'},
{type:'situation', emoji:'🎭', q:'Thoda French aata hai ye batana hai:', hint:'Un peu.', o:['Je ne parle pas français.','Je parle très bien français.','Je parle un peu français.','Je ne comprends pas français.'], a:2, explain:'"Je parle un peu français" = Thoda French aata hai. Honest aur humble expression!'},
{type:'situation', emoji:'🎭', q:'Stranger ko roka - suniye kehna hai:', hint:'Tawajjo ke liye.', o:['Pardon!','Salut!','Excusez-moi, s\'il vous plaît!','Merci!'], a:2, explain:'"Excusez-moi, s\'il vous plaît!" - Stranger ko politely rokna. Pardon chhoti galti ke liye.'},
{type:'situation', emoji:'🎭', q:'Pehli class ke baad dost se milo - kya kaho ge?', hint:'Ça va?', o:['Comment allez-vous?','Ça va? C\'était bien la classe?','Bonsoir professeur!','De rien!'], a:1, explain:'"Ça va?" dost ke sath casual greeting. Comment allez-vous formal hai teacher ke liye.'},
{type:'situation', emoji:'🎭', q:'Teacher ne class khatam ki - kya kaho ge?', hint:'Shukriya + kal.', o:['Salut professeur!','Merci monsieur! Au revoir! À demain!','De rien monsieur!','Bonjour!'], a:1, explain:'"Merci monsieur! Au revoir! À demain!" - Shukriya + Khuda hafiz + Kal milenge. Perfect end!'}
],
flashcards: [
{front:'👋 Bonjour', back:'ہیلو / سلام', example:'"Bonjour monsieur!"', color:'#0055A4'},
{front:'🌆 Bonsoir', back:'شام بخیر', example:'"Bonsoir madame!"', color:'#0055A4'},
{front:'👋 Au revoir', back:'خدا حافظ', example:'"Au revoir! À bientôt!"', color:'#0055A4'},
{front:'🙏 Merci', back:'شکریہ', example:'"Merci beaucoup!"', color:'#0055A4'},
{front:'😊 De rien', back:'کوئی بات نہیں', example:'"De rien! Avec plaisir!"', color:'#0055A4'},
{front:'🙏 S\'il vous plaît', back:'براہ کرم (باادب)', example:'"Répétez, s\'il vous plaît."', color:'#0055A4'},
{front:'😊 S\'il te plaît', back:'براہ کرم (دوستوں میں)', example:'"Aide-moi, s\'il te plaît!"', color:'#0055A4'},
{front:'😔 Pardon', back:'معاف کیجئے', example:'"Pardon, je ne comprends pas."', color:'#0055A4'},
{front:'☝️ Excusez-moi', back:'معاف کریں / سنئے', example:'"Excusez-moi, où est la classe?"', color:'#0055A4'},
{front:'🏷️ Je m\'appelle', back:'میرا نام ہے', example:'"Je m\'appelle Ahmed."', color:'#0055A4'},
{front:'🤝 Enchanté(e)', back:'آپ سے مل کر خوشی', example:'"Enchanté de vous rencontrer!"', color:'#0055A4'},
{front:'😊 Ravi de vous rencontrer', back:'آپ سے ملنا خوشی', example:'"Ravi de vous rencontrer."', color:'#0055A4'},
{front:'👤 Je suis', back:'میں ہوں', example:'"Je suis étudiant."', color:'#0055A4'},
{front:'👉 Tu es', back:'تم ہو (غیر رسمی)', example:'"Tu es étudiant?"', color:'#0055A4'},
{front:'🎓 Vous êtes', back:'آپ ہیں (باادب)', example:'"Vous êtes professeur?"', color:'#0055A4'},
{front:'👨 Il est', back:'وہ ہے (لڑکا)', example:'"Il est étudiant."', color:'#0055A4'},
{front:'👩 Elle est', back:'وہ ہے (لڑکی)', example:'"Elle est professeur."', color:'#0055A4'},
{front:'👫 Nous sommes', back:'ہم ہیں', example:'"Nous sommes étudiants."', color:'#0055A4'},
{front:'❓ Comment vous appelez-vous?', back:'آپ کا نام کیا ہے؟', example:'"Comment vous appelez-vous madame?"', color:'#0055A4'},
{front:'❓ Comment t\'appelles-tu?', back:'تمہارا نام کیا ہے؟', example:'"Comment t\'appelles-tu ami?"', color:'#0055A4'},
{front:'🤝 Comment allez-vous?', back:'آپ کیسے ہیں؟ (باادب)', example:'"Bonjour! Comment allez-vous?"', color:'#0055A4'},
{front:'😊 Comment vas-tu?', back:'تم کیسے ہو؟ (غیر رسمی)', example:'"Salut! Comment vas-tu?"', color:'#0055A4'},
{front:'😁 Très bien', back:'بہت اچھا', example:'"Très bien, merci!"', color:'#0055A4'},
{front:'👍 Bien', back:'اچھا / ٹھیک', example:'"Je vais bien."', color:'#0055A4'},
{front:'🤷 Ça va', back:'ٹھیک ہے / کیسا چل رہا ہے', example:'"Ça va? Oui, ça va!"', color:'#0055A4'},
{front:'✔️ Oui', back:'ہاں', example:'"Oui, je comprends."', color:'#0055A4'},
{front:'❌ Non', back:'نہیں', example:'"Non, je ne comprends pas."', color:'#0055A4'},
{front:'💡 Je comprends', back:'میں سمجھ گیا', example:'"Oui, je comprends."', color:'#0055A4'},
{front:'😕 Je ne comprends pas', back:'میں نہیں سمجھا', example:'"Pardon, je ne comprends pas."', color:'#0055A4'},
{front:'🔁 Répétez, s\'il vous plaît', back:'براہ کرم دوبارہ کہیں', example:'"Répétez s\'il vous plaît!"', color:'#0055A4'},
{front:'🏷️ le nom', back:'نام (مذکر)', example:'"Quel est votre nom?"', color:'#0055A4'},
{front:'👫 l\'ami / l\'amie', back:'دوست', example:'"C\'est mon ami Ahmed."', color:'#0055A4'},
{front:'👨‍🏫 le professeur', back:'استاد', example:'"Le professeur s\'appelle M. Ali."', color:'#0055A4'},
{front:'🎒 l\'étudiant/e', back:'طالب علم', example:'"Je suis étudiant."', color:'#0055A4'},
{front:'🎩 Monsieur', back:'جناب / مسٹر', example:'"Bonjour monsieur Ali."', color:'#0055A4'},
{front:'👒 Madame', back:'محترمہ', example:'"Bonjour madame!"', color:'#0055A4'},
{front:'👧 Mademoiselle', back:'کنواری لڑکی', example:'"Bonjour mademoiselle Sara."', color:'#0055A4'},
{front:'✌️ Salut', back:'ہائے / ہیلو (غیر رسمی)', example:'"Salut Ahmed! Ça va?"', color:'#0055A4'},
{front:'👋 À bientôt', back:'جلد ملیں گے', example:'"Au revoir! À bientôt!"', color:'#0055A4'},
{front:'📅 À demain', back:'کل ملیں گے', example:'"Au revoir! À demain!"', color:'#0055A4'}
],
summary: {
emoji: '🎯',
wordsLearned: 40,
sentencesLearned: 45,
grammarRules: 20,
studyTime: '2 hours',
nextDay: 'Daily Greetings — Salutations quotidiennes',
achievement: '🏆 French Day 1 Champion!',
realLifeTask: '📋 Aaj kisi ko French mein apna taaruf do: Bonjour! Je m\'appelle... Je suis de...'
}
};// end ALL_DAYS['fr'][1]


// ── SPANISH ──
ALL_DAYS['es'] = {

// ══════════════════════════════════════════════
// DAY 1 — THEME: First Meeting & Greetings
// ══════════════════════════════════════════════
1: {
  theme: 'پہلی ملاقات',
  themeEn: 'Primera Reunión',
  emoji: '👋',
  color: '#F5A623',

  vocab: [
    {w:'Hola',u:'ہیلو / سلام',p:'OH-lah',ex:'"¡Hola! ¿Cómo estás?"',tip:'Din ke kisi bhi waqt use karo — universal greeting!'},
    {w:'Buenos días',u:'صبح بخیر',p:'BWEH-nos DEE-as',ex:'"¡Buenos días señor!"',tip:'Subah se dopahar tak'},
    {w:'Buenas tardes',u:'دوپہر بخیر',p:'BWEH-nas TAR-des',ex:'"¡Buenas tardes! ¿Cómo estuvo el día?"',tip:'Dopahar se shaam tak'},
    {w:'Buenas noches',u:'شب بخیر',p:'BWEH-nas NO-ches',ex:'"¡Buenas noches! Hasta mañana."',tip:'Raat ko — sonay se pehle bhi'},
    {w:'Adiós',u:'خدا حافظ',p:'ah-DYOS',ex:'"¡Adiós! ¡Hasta luego!"',tip:'Formal goodbye — "bye" informal bhi chalta'},
    {w:'Por favor',u:'براہ کرم',p:'por fa-VOR',ex:'"Un café, por favor."',tip:'Please — bohot zaroori!'},
    {w:'Gracias',u:'شکریہ',p:'GRAH-syahs',ex:'"¡Muchas gracias!"',tip:'"Muchas gracias" = bohot shukriya'},
    {w:'De nada',u:'کوئی بات نہیں',p:'de NAH-da',ex:'"Gracias! — ¡De nada!"',tip:'"You\'re welcome" ka jawab'},
    {w:'Me llamo',u:'میرا نام ہے',p:'me YAH-mo',ex:'"Me llamo Ahmed. ¿Y tú?"',tip:'Naam batane ka tarika'},
    {w:'¿Cómo te llamas?',u:'آپ کا نام کیا ہے؟',p:'KO-mo te YAH-mas',ex:'"¡Hola! ¿Cómo te llamas?"',tip:'Naam poochna — informal'},
    {w:'¿Cómo estás?',u:'آپ کیسے ہیں؟',p:'KO-mo es-TAS',ex:'"¡Hola! ¿Cómo estás?"',tip:'Informal "how are you"'},
    {w:'Mucho gusto',u:'آپ سے مل کر خوشی ہوئی',p:'MOO-cho GOOS-to',ex:'"¡Mucho gusto en conocerte!"',tip:'Pehli mulaqat par'},
  ],

  sentences: [
    {en:'¡Hola! Me llamo Ahmed.',ur:'¡Hola! Mera naam Ahmed hai.',words:[{e:'Hola',u:'hello'},{e:'Me llamo',u:'mera naam hai'},{e:'Ahmed',u:'Ahmed'}],reply:'¡Mucho gusto, Ahmed! Me llamo Sara.'},
    {en:'¿De dónde eres?',ur:'Aap kahan se hain?',words:[{e:'¿De dónde',u:'kahan se'},{e:'eres',u:'ho'}],reply:'Soy de Lahore, Pakistán. ¿Y tú?'},
    {en:'¿Cómo estás hoy?',ur:'Aap aaj kaise hain?',words:[{e:'¿Cómo estás',u:'kaise ho'},{e:'hoy',u:'aaj'}],reply:'¡Muy bien, gracias! ¿Y tú?'},
    {en:'¡Mucho gusto!',ur:'Aapse milke khushi hui!',words:[{e:'Mucho gusto',u:'milke khushi hui'}],reply:'¡El gusto es mío!'},
    {en:'¿Puedes hablar más despacio?',ur:'Kya aap dheere bol sakte hain?',words:[{e:'¿Puedes',u:'kya aap'},{e:'hablar',u:'bolein'},{e:'despacio',u:'dheere'}],reply:'¡Claro que sí!'},
    {en:'No entiendo. Por favor, repite.',ur:'Main samjha nahi. Dobara bolein.',words:[{e:'No entiendo',u:'main samjha nahi'},{e:'repite',u:'dobara bolo'}],reply:'¡Sin problema! Lo repito.'},
  ],

  grammar: [
    {title:'Ser — Hona (To Be — permanent)',rules:[
      {formula:'Yo soy (Main hoon)',examples:[{en:'Yo soy Ahmed.',ur:'Main Ahmed hoon.'},{en:'Yo soy estudiante.',ur:'Main student hoon.'},{en:'Yo soy de Pakistán.',ur:'Main Pakistan se hoon.'}]},
      {formula:'Él/Ella es (Woh hai)',examples:[{en:'Ella es mi hermana.',ur:'Woh meri behan hai.'},{en:'Él es médico.',ur:'Woh doctor hai.'}]},
      {formula:'Tú eres / Usted es (Aap ho / hain)',examples:[{en:'Tú eres muy amable.',ur:'Tum bohot achhe ho.'},{en:'Usted es el profesor.',ur:'Aap teacher hain.'}]},
    ],tip:'💡 Spanish mein 2 "to be" verbs hain: SER (permanent) aur ESTAR (temporary). Aaj SER seekho!'},
    {title:'Question Words — Palabras Interrogativas',rules:[
      {formula:'¿Qué? = Kya?',examples:[{en:'¿Qué es esto?',ur:'Yeh kya hai?'},{en:'¿Qué haces?',ur:'Kya karte ho?'}]},
      {formula:'¿Dónde? = Kahan?',examples:[{en:'¿Dónde vives?',ur:'Kahan rehte ho?'},{en:'¿De dónde eres?',ur:'Kahan se ho?'}]},
      {formula:'¿Cómo? = Kaise?',examples:[{en:'¿Cómo estás?',ur:'Kaise ho?'},{en:'¿Cómo te llamas?',ur:'Naam kya hai?'}]},
    ],tip:'💡 Spanish question marks ¿ start mein aur ? end mein — dono lagte hain!'},
    {title:'Negación — Nahi Kehna',rules:[
      {formula:'No + verb',examples:[{en:'No soy de Madrid.',ur:'Main Madrid se nahi hoon.'},{en:'No entiendo.',ur:'Main samjha nahi.'},{en:'No habla español.',ur:'Woh Spanish nahi bolta.'}]},
    ],tip:'💡 Sirf "No" lagao verb se pehle — bohot aasaan!'},
  ],

  story: {
    title:"Ali's First Spanish Class",
    level:'⭐ Día 1 — Muy Fácil',
    paragraphs:[
      {line:'Me llamo Ali. Tengo veinte años.',ur:'Mera naam Ali hai. Main bees saal ka hoon.',words:['llamo','veinte']},
      {line:'Hoy es mi primera clase de español. ¡Estoy emocionado!',ur:'Aaj meri pehli Spanish class hai. Main excited hoon!',words:['primera','emocionado']},
      {line:'La profesora dice: "¡Buenos días! Me llamo señorita Sara."',ur:'Teacher kehti hain: "Buenos días! Mera naam Miss Sara hai."',words:['profesora','Buenos días']},
      {line:'"¿De dónde eres, Ali?" pregunta. "Soy de Lahore," digo.',ur:'"Kahan se ho, Ali?" Woh poochti hain. "Main Lahore se hoon," main kehta hoon.',words:['pregunta','Lahore']},
      {line:'Ella sonríe: "¡Mucho gusto, Ali! ¡Bienvenido a la clase!"',ur:'Woh muskurati hain: "Khushi hui, Ali! Class mein khush aamdeed!"',words:['sonríe','Bienvenido']},
      {line:'Pienso: "¡Puedo hacerlo! ¡Voy a hablar español!"',ur:'Main sochta hoon: "Main yeh kar sakta hoon! Main Spanish bolunga!"',words:['Puedo','hablar']},
    ]
  },

  quizzes: [
    {q:'Subah Spanish mein greeting?',o:['Buenas noches','Buenas tardes','Buenos días','Adiós'],a:2},
    {q:'"Gracias" ka matlab?',o:['Please','Hello','Thank you','Goodbye'],a:2},
    {q:'"Yo soy" ka matlab?',o:['Aap hain','Main hoon','Woh hai','Hum hain'],a:1},
    {q:'Spanish mein "nahi" kaise kehte?',o:['Non','No','Nein','Pas'],a:1},
    {q:'"Mucho gusto" kab kehte hain?',o:['Farewell pe','Khaane pe','Pehli mulaqat pe','Raat ko'],a:2},
    {q:'"¿De dónde eres?" ka matlab?',o:['Tum kya karte ho','Tum kahan se ho','Tumhara naam kya hai','Tum kaise ho'],a:1},
    {q:'Story mein Ali kahan se tha?',o:['Karachi','Madrid','Lahore','Barcelona'],a:2},
    {q:'"Por favor" ka matlab?',o:['Shukriya','Maafi','Khuda hafiz','Kripya / Please'],a:3},
  ]
},

// ══════════════════════════════════════════════
// DAY 2 — THEME: Family & People
// ══════════════════════════════════════════════
2: {
  theme: 'خاندان',
  themeEn: 'La Familia',
  emoji: '👨‍👩‍👧‍👦',
  color: '#F5A623',

  vocab: [
    {w:'El padre',u:'والد / ابا',p:'el PAH-dre',ex:'"Mi padre es médico."',tip:'"Mi padre" = mera walid — formal'},
    {w:'La madre',u:'والدہ / اماں',p:'la MAH-dre',ex:'"Mi madre cocina muy bien."',tip:'"Mamá" = informal ammi'},
    {w:'El hermano',u:'بھائی',p:'el er-MAH-no',ex:'"Tengo dos hermanos."',tip:'Hermanos = brothers (or siblings mixed)'},
    {w:'La hermana',u:'بہن',p:'la er-MAH-na',ex:'"Mi hermana es profesora."',tip:'Hermanas = sisters'},
    {w:'El hijo',u:'بیٹا',p:'el EE-ho',ex:'"Tiene un hijo."',tip:'Son'},
    {w:'La hija',u:'بیٹی',p:'la EE-ha',ex:'"Su hija estudia en la universidad."',tip:'Daughter'},
    {w:'El abuelo',u:'دادا / نانا',p:'el a-BWEH-lo',ex:'"Mi abuelo tiene ochenta años."',tip:'Grandfather'},
    {w:'La abuela',u:'دادی / نانی',p:'la a-BWEH-la',ex:'"Mi abuela hace la mejor comida."',tip:'Grandmother'},
    {w:'El esposo',u:'شوہر',p:'el es-PO-so',ex:'"Su esposo trabaja en Islamabad."',tip:'Husband — also "el marido"'},
    {w:'La esposa',u:'بیوی',p:'la es-PO-sa',ex:'"Su esposa es enfermera."',tip:'Wife — also "la mujer"'},
  ],

  sentences: [
    {en:'Tengo una familia grande.',ur:'Mera bara khandan hai.',words:[{e:'Tengo',u:'mere paas hai'},{e:'familia grande',u:'bara khandan'}],reply:'¿Cuántas personas?'},
    {en:'Mi padre es muy trabajador.',ur:'Mere walid bohot mehnat karne wale hain.',words:[{e:'Mi padre',u:'mere walid'},{e:'trabajador',u:'mehnatki'}],reply:'¡Qué bueno!'},
    {en:'Tengo dos hermanos y una hermana.',ur:'Mere do bhai aur ek behan hai.',words:[{e:'Tengo',u:'mere hain'},{e:'dos hermanos',u:'do bhai'},{e:'una hermana',u:'ek behan'}],reply:'¡Familia grande!'},
    {en:'Mi madre es la mejor cocinera del mundo.',ur:'Meri ammi duniya ki sabse achi cook hain.',words:[{e:'Mi madre',u:'meri ammi'},{e:'mejor',u:'sabse achi'},{e:'cocinera',u:'cook'}],reply:'¡Lo creo!'},
    {en:'Somos una familia feliz.',ur:'Hum ek khush khandan hain.',words:[{e:'Somos',u:'hum hain'},{e:'feliz',u:'khush'}],reply:'¡Qué bonito!'},
  ],

  grammar: [
    {title:'Tener — Paas Hona (To Have)',rules:[
      {formula:'Yo tengo (Mere paas hai)',examples:[{en:'Tengo dos hermanas.',ur:'Mere do behnein hain.'},{en:'Tengo un perro.',ur:'Mere paas kutta hai.'}]},
      {formula:'Él/Ella tiene (Uske paas hai)',examples:[{en:'Ella tiene una voz bonita.',ur:'Uski achi awaaz hai.'},{en:'Él tiene tres hermanos.',ur:'Uske teen bhai hain.'}]},
    ],tip:'💡 Tener = HAVE — Yo tengo / Tú tienes / Él tiene / Nosotros tenemos'},
    {title:'Adjectives — Género (Gender)',rules:[
      {formula:'Masculine -o, Feminine -a',examples:[{en:'Mi padre es alto. (tall)',ur:'Mere walid lambe hain.'},{en:'Mi madre es alta.',ur:'Meri ammi lambi hain.'}]},
      {formula:'Same for both ending in -e',examples:[{en:'Mi hermano es inteligente.',ur:'Mera bhai hoshiyar hai.'},{en:'Mi hermana es inteligente.',ur:'Meri behan hoshiyar hai.'}]},
    ],tip:'💡 Spanish adjectives gender match karte hain noun se — o=male, a=female!'},
    {title:'Plural — Zyada',rules:[
      {formula:'Vowel ending + s',examples:[{en:'hermano → hermanos',ur:'bhai → bhai log'},{en:'madre → madres',ur:'ammian'}]},
      {formula:'Consonant ending + es',examples:[{en:'profesor → profesores',ur:'teacher log'},{en:'ciudad → ciudades',ur:'shehron'}]},
    ],tip:'💡 Spanish plural bohot aasaan — mostly sirf "s" lagao!'},
  ],

  story: {
    title:"Sara's Spanish Family",
    level:'⭐ Día 2 — Fácil',
    paragraphs:[
      {line:'Me llamo Sara. Soy de una ciudad pequeña llamada Multan.',ur:'Mera naam Sara hai. Main Multan naam ke chote shehar se hoon.',words:['pequeña','llamada']},
      {line:'Tengo una familia maravillosa. Somos cinco personas.',ur:'Mera khandan kamaal ka hai. Hum paanch log hain.',words:['maravillosa','personas']},
      {line:'Mi padre es maestro. Es muy paciente y amable.',ur:'Mere walid teacher hain. Woh bohot sabr wale aur mehrbaan hain.',words:['maestro','paciente']},
      {line:'Mi madre es una gran cocinera. ¡Hace el mejor biryani!',ur:'Meri ammi zabardast pakane wali hain. Woh sabse achi biryani banati hain!',words:['cocinera','biryani']},
      {line:'Tengo un hermano mayor y una hermana menor.',ur:'Mera ek bara bhai aur ek choti behan hai.',words:['mayor','menor']},
    ]
  },

  quizzes: [
    {q:'"Tengo" ka matlab?',o:['Main hoon','Mere paas hai','Aap ke paas hai','Woh hai'],a:1},
    {q:'"La madre" ka matlab?',o:['Bhai','Walid','Ammi','Behan'],a:2},
    {q:'"Mi padre es alto" — "alta" kab hoga?',o:['Koi change nahi','Jab subject female ho','Jab plural ho','Jab question ho'],a:1},
    {q:'"Somos" ka matlab?',o:['Main hoon','Aap hain','Hum hain','Woh hain'],a:2},
    {q:'Spanish mein "hermanos" ka matlab?',o:['Sirf behnen','Sirf bhai','Bhai ya siblings','Waldain'],a:2},
  ]
},

};// end ALL_DAYS['es']

// ── GERMAN ──
ALL_DAYS['de'] = {

// ══════════════════════════════════════════════
// DAY 1 — THEME: First Meeting & Greetings
// ══════════════════════════════════════════════
1: {
  theme: 'پہلی ملاقات',
  themeEn: 'Erste Begegnung',
  emoji: '👋',
  color: '#5B9BD5',

  vocab: [
    {w:'Hallo',u:'ہیلو / سلام',p:'HA-lo',ex:'"Hallo! Wie geht es Ihnen?"',tip:'Universal German greeting!'},
    {w:'Guten Morgen',u:'صبح بخیر',p:'GOO-ten MOR-gen',ex:'"Guten Morgen Herr Ahmed!"',tip:'Subah se dopahar tak'},
    {w:'Guten Tag',u:'دوپہر بخیر / ہیلو',p:'GOO-ten TAHK',ex:'"Guten Tag! Schön Sie zu sehen."',tip:'Daytime formal greeting'},
    {w:'Guten Abend',u:'شام بخیر',p:'GOO-ten AH-bent',ex:'"Guten Abend! Willkommen!"',tip:'Evening greeting'},
    {w:'Gute Nacht',u:'شب بخیر',p:'GOO-te NAKHT',ex:'"Gute Nacht! Schlaf gut."',tip:'Raat ko — sonay se pehle'},
    {w:'Auf Wiedersehen',u:'خدا حافظ',p:'owf VEE-der-zayn',ex:'"Auf Wiedersehen! Bis morgen!"',tip:'Formal goodbye'},
    {w:'Tschüs',u:'بائے / خدا حافظ',p:'CHOOS',ex:'"Tschüs! Bis bald!"',tip:'Informal bye — friends ke liye'},
    {w:'Bitte',u:'براہ کرم',p:'BIT-te',ex:'"Einen Kaffee, bitte."',tip:'Please — bohot zaroori!'},
    {w:'Danke',u:'شکریہ',p:'DANK-e',ex:'"Vielen Dank!"',tip:'"Vielen Dank" = bohot shukriya'},
    {w:'Bitte sehr',u:'کوئی بات نہیں',p:'BIT-te ZAYR',ex:'"Danke! — Bitte sehr!"',tip:'"You\'re welcome"'},
    {w:'Ich heiße',u:'میرا نام ہے',p:'ikh HY-se',ex:'"Ich heiße Ahmed."',tip:'Naam batane ka tarika'},
    {w:'Wie heißen Sie?',u:'آپ کا نام کیا ہے؟',p:'vee HY-sen zee',ex:'"Wie heißen Sie?"',tip:'Formal naam poochna'},
    {w:'Wie geht es Ihnen?',u:'آپ کیسے ہیں؟',p:'vee gayt es EE-nen',ex:'"Wie geht es Ihnen?"',tip:'Formal how are you'},
    {w:'Angenehm',u:'آپ سے مل کر خوشی ہوئی',p:'an-ge-NAYM',ex:'"Angenehm, Sie kennenzulernen!"',tip:'Nice to meet you!'},
  ],

  sentences: [
    {en:'Hallo! Ich heiße Ahmed.',ur:'Hallo! Mera naam Ahmed hai.',words:[{e:'Hallo',u:'hello'},{e:'Ich heiße',u:'mera naam hai'}],reply:'Angenehm, Ahmed! Ich heiße Sara.'},
    {en:'Woher kommen Sie?',ur:'Aap kahan se hain?',words:[{e:'Woher',u:'kahan se'},{e:'kommen',u:'aate hain'},{e:'Sie',u:'aap'}],reply:'Ich komme aus Lahore, Pakistan. Und Sie?'},
    {en:'Wie geht es Ihnen?',ur:'Aap kaise hain?',words:[{e:'Wie geht',u:'kaise hai'},{e:'Ihnen',u:'aapko'}],reply:'Sehr gut, danke! Und Ihnen?'},
    {en:'Angenehm, Sie kennenzulernen!',ur:'Aapse milke khushi hui!',words:[{e:'Angenehm',u:'khushi hui'},{e:'kennenzulernen',u:'aapse milke'}],reply:'Ganz meinerseits!'},
    {en:'Können Sie bitte langsamer sprechen?',ur:'Kya aap dheere bol sakte hain?',words:[{e:'langsamer',u:'dheere'},{e:'sprechen',u:'bolein'}],reply:'Natürlich! Gerne.'},
    {en:'Ich verstehe nicht. Bitte wiederholen.',ur:'Main samjha nahi. Dobara bolein.',words:[{e:'verstehe nicht',u:'samjha nahi'},{e:'wiederholen',u:'dobara bolein'}],reply:'Kein Problem! Ich wiederhole es.'},
  ],

  grammar: [
    {title:'Sein — Hona (To Be)',rules:[
      {formula:'Ich bin (Main hoon)',examples:[{en:'Ich bin Ahmed.',ur:'Main Ahmed hoon.'},{en:'Ich bin Student.',ur:'Main student hoon.'},{en:'Ich bin aus Pakistan.',ur:'Main Pakistan se hoon.'}]},
      {formula:'Er/Sie ist (Woh hai)',examples:[{en:'Sie ist meine Schwester.',ur:'Woh meri behan hai.'},{en:'Er ist Arzt.',ur:'Woh doctor hai.'}]},
      {formula:'Sie sind / Du bist (Aap hain / Tum ho)',examples:[{en:'Sie sind sehr freundlich.',ur:'Aap bohot friendly hain.'},{en:'Du bist nett.',ur:'Tum achhe ho.'}]},
    ],tip:'💡 Sein = AM/IS/ARE — Ich bin / Du bist / Er ist / Sie sind yaad karo!'},
    {title:'Question Words — Fragewörter',rules:[
      {formula:'Was? = Kya?',examples:[{en:'Was ist das?',ur:'Yeh kya hai?'},{en:'Was machst du?',ur:'Kya karte ho?'}]},
      {formula:'Wo? = Kahan?',examples:[{en:'Wo wohnst du?',ur:'Kahan rehte ho?'},{en:'Woher kommst du?',ur:'Kahan se ho?'}]},
      {formula:'Wie? = Kaise?',examples:[{en:'Wie geht es dir?',ur:'Kaise ho?'},{en:'Wie heißt du?',ur:'Naam kya hai?'}]},
    ],tip:'💡 German mein "Sie" = formal "you", "du" = informal — hamesha Sir/Madam ke liye "Sie" use karo!'},
    {title:'Verneinung — Nahi Kehna',rules:[
      {formula:'nicht (after verb)',examples:[{en:'Ich verstehe nicht.',ur:'Main samjha nahi.'},{en:'Er ist nicht hier.',ur:'Woh yahan nahi hai.'}]},
      {formula:'kein/keine (before noun)',examples:[{en:'Ich bin kein Arzt.',ur:'Main doctor nahi hoon.'},{en:'Ich habe keine Zeit.',ur:'Mere paas waqt nahi.'}]},
    ],tip:'💡 "nicht" = not (verb ke liye), "kein/keine" = no/not a (noun ke liye)'},
  ],

  story: {
    title:"Alis erster Deutschkurs",
    level:'⭐ Tag 1 — Sehr Einfach',
    paragraphs:[
      {line:'Ich heiße Ali. Ich bin zwanzig Jahre alt.',ur:'Mera naam Ali hai. Main bees saal ka hoon.',words:['heiße','zwanzig']},
      {line:'Heute ist mein erster Deutschkurs. Ich bin aufgeregt!',ur:'Aaj mera pehla German course hai. Main excited hoon!',words:['erster','aufgeregt']},
      {line:'Die Lehrerin sagt: "Guten Tag! Ich heiße Frau Sara."',ur:'Teacher kehti hain: "Guten Tag! Mera naam Frau Sara hai."',words:['Lehrerin','Frau']},
      {line:'"Woher kommen Sie, Ali?" fragt sie. "Ich komme aus Lahore," sage ich.',ur:'"Kahan se ho, Ali?" Woh poochti hain. "Main Lahore se hoon," main kehta hoon.',words:['komme','Lahore']},
      {line:'Sie lächelt: "Angenehm, Ali! Willkommen im Kurs!"',ur:'Woh muskurati hain: "Khushi hui, Ali! Course mein khush aamdeed!"',words:['lächelt','Willkommen']},
      {line:'Ich denke: "Ich kann das! Ich werde Deutsch sprechen!"',ur:'Main sochta hoon: "Main yeh kar sakta hoon! Main German bolunga!"',words:['kann','sprechen']},
    ]
  },

  quizzes: [
    {q:'German mein formal goodbye kya hai?',o:['Tschüs','Hallo','Auf Wiedersehen','Danke'],a:2},
    {q:'"Danke" ka matlab?',o:['Please','Hello','Thank you','Goodbye'],a:2},
    {q:'"Ich bin" ka matlab?',o:['Aap hain','Main hoon','Woh hai','Hum hain'],a:1},
    {q:'German mein formal "you" kya hai?',o:['du','ihr','man','Sie'],a:3},
    {q:'"Angenehm" kab kehte hain?',o:['Farewell pe','Khaane pe','Pehli mulaqat pe','Raat ko'],a:2},
    {q:'"Woher kommen Sie?" ka matlab?',o:['Aap kya karte ho','Aap kahan se ho','Aapka naam kya hai','Aap kaise ho'],a:1},
    {q:'Story mein Ali kahan se tha?',o:['Berlin','Hamburg','Lahore','München'],a:2},
    {q:'"Bitte" ka matlab?',o:['Shukriya','Maafi','Khuda hafiz','Kripya / Please'],a:3},
  ]
},

// ══════════════════════════════════════════════
// DAY 2 — THEME: Family & People
// ══════════════════════════════════════════════
2: {
  theme: 'خاندان',
  themeEn: 'Die Familie',
  emoji: '👨‍👩‍👧‍👦',
  color: '#5B9BD5',

  vocab: [
    {w:'Der Vater',u:'والد / ابا',p:'der FAH-ter',ex:'"Mein Vater ist Arzt."',tip:'"Mein Vater" = mera walid'},
    {w:'Die Mutter',u:'والدہ / اماں',p:'dee MU-ter',ex:'"Meine Mutter kocht sehr gut."',tip:'"Mama" = informal'},
    {w:'Der Bruder',u:'بھائی',p:'der BROO-der',ex:'"Ich habe zwei Brüder."',tip:'Plural: Brüder (umlaut!)'},
    {w:'Die Schwester',u:'بہن',p:'dee SHVES-ter',ex:'"Meine Schwester ist Lehrerin."',tip:'Plural: Schwestern'},
    {w:'Der Sohn',u:'بیٹا',p:'der ZOHN',ex:'"Er hat einen Sohn."',tip:'Son'},
    {w:'Die Tochter',u:'بیٹی',p:'dee TOKH-ter',ex:'"Seine Tochter studiert."',tip:'Daughter'},
    {w:'Der Großvater',u:'دادا / نانا',p:'der GROHS-fah-ter',ex:'"Mein Großvater ist achtzig Jahre alt."',tip:'Also "Opa" informal'},
    {w:'Die Großmutter',u:'دادی / نانی',p:'dee GROHS-mu-ter',ex:'"Meine Großmutter kocht am besten!"',tip:'Also "Oma" informal'},
    {w:'Der Ehemann',u:'شوہر',p:'der EH-e-man',ex:'"Ihr Ehemann arbeitet in Islamabad."',tip:'Husband'},
    {w:'Die Ehefrau',u:'بیوی',p:'dee EH-e-frow',ex:'"Seine Ehefrau ist Krankenschwester."',tip:'Wife'},
  ],

  sentences: [
    {en:'Ich habe eine große Familie.',ur:'Mera bara khandan hai.',words:[{e:'Ich habe',u:'mere paas hai'},{e:'große Familie',u:'bara khandan'}],reply:'Wie viele Personen?'},
    {en:'Mein Vater ist sehr fleißig.',ur:'Mere walid bohot mehnat karne wale hain.',words:[{e:'Mein Vater',u:'mere walid'},{e:'fleißig',u:'mehnatki'}],reply:'Das ist toll!'},
    {en:'Ich habe zwei Brüder und eine Schwester.',ur:'Mere do bhai aur ek behan hai.',words:[{e:'Ich habe',u:'mere hain'},{e:'zwei Brüder',u:'do bhai'},{e:'eine Schwester',u:'ek behan'}],reply:'Große Familie!'},
    {en:'Meine Mutter ist die beste Köchin der Welt.',ur:'Meri ammi duniya ki sabse achi cook hain.',words:[{e:'Meine Mutter',u:'meri ammi'},{e:'beste',u:'sabse achi'},{e:'Köchin',u:'cook'}],reply:'Das glaube ich!'},
    {en:'Wir sind eine glückliche Familie.',ur:'Hum ek khush khandan hain.',words:[{e:'Wir sind',u:'hum hain'},{e:'glückliche',u:'khush'}],reply:'Das ist schön!'},
  ],

  grammar: [
    {title:'Haben — Paas Hona (To Have)',rules:[
      {formula:'Ich habe (Mere paas hai)',examples:[{en:'Ich habe zwei Schwestern.',ur:'Mere do behnein hain.'},{en:'Ich habe einen Hund.',ur:'Mere paas kutta hai.'}]},
      {formula:'Er/Sie hat (Uske paas hai)',examples:[{en:'Sie hat eine schöne Stimme.',ur:'Uski achi awaaz hai.'},{en:'Er hat drei Brüder.',ur:'Uske teen bhai hain.'}]},
    ],tip:'💡 Haben = HAVE — Ich habe / Du hast / Er hat / Wir haben / Sie haben'},
    {title:'Gender — Der/Die/Das',rules:[
      {formula:'Der (masculine)',examples:[{en:'Der Vater',ur:'Walid'},{en:'Der Bruder',ur:'Bhai'}]},
      {formula:'Die (feminine)',examples:[{en:'Die Mutter',ur:'Ammi'},{en:'Die Schwester',ur:'Behan'}]},
      {formula:'Das (neuter)',examples:[{en:'Das Kind',ur:'Bacha'},{en:'Das Haus',ur:'Ghar'}]},
    ],tip:'💡 German mein 3 genders hain: Der(m), Die(f), Das(n) — yeh yaad karna padega!'},
    {title:'Plural — Mehrzahl',rules:[
      {formula:'Various forms — memorize!',examples:[{en:'Bruder → Brüder (umlaut)',ur:'bhai → bhai log'},{en:'Schwester → Schwestern (+n)',ur:'behan → behnein'},{en:'Kind → Kinder (+er)',ur:'bacha → bachay'}]},
    ],tip:'💡 German plural ke koi ek rule nahi — har noun ka alag plural yaad karo!'},
  ],

  story: {
    title:"Saras deutsche Familie",
    level:'⭐ Tag 2 — Einfach',
    paragraphs:[
      {line:'Ich heiße Sara. Ich komme aus einer kleinen Stadt namens Multan.',ur:'Mera naam Sara hai. Main Multan naam ke chote shehar se hoon.',words:['kleinen','namens']},
      {line:'Ich habe eine wunderbare Familie. Wir sind fünf Personen.',ur:'Mera khandan kamaal ka hai. Hum paanch log hain.',words:['wunderbare','Personen']},
      {line:'Mein Vater ist Lehrer. Er ist sehr geduldig und freundlich.',ur:'Mere walid teacher hain. Woh bohot sabr wale aur mehrbaan hain.',words:['Lehrer','geduldig']},
      {line:'Meine Mutter ist eine tolle Köchin. Sie macht das beste Biryani!',ur:'Meri ammi zabardast pakane wali hain. Woh sabse achi biryani banati hain!',words:['tolle','Biryani']},
      {line:'Ich habe einen älteren Bruder und eine jüngere Schwester.',ur:'Mera ek bara bhai aur ek choti behan hai.',words:['älteren','jüngere']},
    ]
  },

  quizzes: [
    {q:'"Ich habe" ka matlab?',o:['Main hoon','Mere paas hai','Aap ke paas hai','Woh hai'],a:1},
    {q:'"Die Mutter" ka matlab?',o:['Bhai','Walid','Ammi','Behan'],a:2},
    {q:'German mein masculine article kaunsa?',o:['Die','Das','Der','Den'],a:2},
    {q:'"Wir sind" ka matlab?',o:['Main hoon','Aap hain','Hum hain','Woh hain'],a:2},
    {q:'"Bruder" ka plural kya hai?',o:['Bruders','Bruderen','Brüder','Brudernen'],a:2},
  ]
},

};// end ALL_DAYS['de']

// ══════════════════════════════════════════════
// CHESS — 7 DAY COMPLETE COURSE
// ══════════════════════════════════════════════
ALL_DAYS['chess'] = {

1: {
  theme: 'شطرنج کا تعارف',
  themeEn: 'Introduction to Chess',
  emoji: '♟️',
  color: '#2ECC71',
  vocab: [
    {w:'Chess / Shatranj', u:'شطرنج', p:'chezz', ex:'"Chess duniya ka sabse qadeem board game hai!"', tip:'2 players, 64 squares, 16 pieces each'},
    {w:'Board / Bисяд', u:'شطرنج کی بساط', p:'bord', ex:'"Chess board pe 64 khane hote hain."', tip:'8×8 = 64 squares, alternating dark and light'},
    {w:'King ♔', u:'بادشاہ', p:'king', ex:'"King sabse zaroori piece hai — iski hifazat karo!"', tip:'Ek baar mein sirf 1 step koi bhi direction mein'},
    {w:'Queen ♛', u:'وزیر', p:'kween', ex:'"Queen sabse powerful piece hai!"', tip:'Har direction mein jitna chahe utna chal sakti hai'},
    {w:'Rook ♜', u:'ہاتھی / قلعہ', p:'rook', ex:'"Rook straight lines pe chalta hai."', tip:'Horizontal ya vertical — unlimited squares'},
    {w:'Bishop ♝', u:'اونٹ / فیل', p:'BIH-shup', ex:'"Bishop diagonally chalta hai."', tip:'Har baar ek hi color pe rehta hai'},
    {w:'Knight ♞', u:'گھوڑا', p:'nyt', ex:'"Knight L-shape mein chalta hai — bohot unique!"', tip:'L-shape: 2+1 squares — pieces ko jump kar sakta hai!'},
    {w:'Pawn ♟', u:'پیادہ', p:'pawn', ex:'"Pawn sirf aage chalta hai, tirhay se maarta hai."', tip:'Promotion: agar last rank pe pahunche toh Queen ban sakta hai!'},
    {w:'Check ✓', u:'چیک / شاہ', p:'chek', ex:'"Check! Tumhara king danger mein hai!"', tip:'Opponent ka king directly attack ho — defend karo'},
    {w:'Checkmate ✗', u:'شہ مات', p:'CHEK-mayt', ex:'"Checkmate! Game over — tum jeet gaye!"', tip:'King ka koi safe square nahi — game khatam'},
    {w:'Stalemate', u:'بے حرکت (Draw)', p:'STAYL-mayt', ex:'"Stalemate — yeh draw hai!"', tip:'King ka koi legal move nahi but check mein bhi nahi — draw!'},
    {w:'Resign', u:'ہار ماننا', p:'rih-ZYN', ex:'"Usne resign kar diya — haalat bohot kharaab thi."', tip:'Game chhod dena jab haalat bohot kharaab ho'},
  ],
  sentences: [
    {en:'The King moves one square in any direction.',ur:'Badshah har direction mein ek step chalta hai.',words:[{e:'King',u:'Badshah'},{e:'moves',u:'chalta hai'},{e:'one square',u:'ek step'}],reply:'Sahi! King ko hamesha protect karo.'},
    {en:'The Queen is the most powerful piece.',ur:'Wazeer sabse powerful piece hai.',words:[{e:'Queen',u:'Wazeer'},{e:'most powerful',u:'sabse taqatwar'}],reply:'Bilkul! Queen ko sochsamajh ke use karo.'},
    {en:'Checkmate means the King cannot escape.',ur:'Shah mat ka matlab hai badshah bachne ke qaabil nahi.',words:[{e:'Checkmate',u:'Shah mat'},{e:'cannot escape',u:'nahi bach sakta'}],reply:'Game over! Tum jeet gaye!'},
    {en:'The Knight jumps over other pieces.',ur:'Ghora doosre pieces ke upar se kood sakta hai.',words:[{e:'Knight',u:'Ghora'},{e:'jumps over',u:'kood sakta hai'}],reply:'Haan! Knight chess ka sabse unique piece hai.'},
    {en:'A pawn can become a Queen after reaching the last rank.',ur:'Piada last rank pe pahunchne ke baad Queen ban sakta hai.',words:[{e:'pawn',u:'piada'},{e:'become a Queen',u:'Queen ban sakta hai'},{e:'last rank',u:'aakhri saaf'}],reply:'Is ko Promotion kehte hain — bohot important!'},
  ],
  grammar: [
    {title:'Chess Board — Squares & Coordinates',rules:[
      {formula:'Files: a–h (columns left to right)',examples:[{en:'a1 = bottom-left corner (White Rook)',ur:'a1 = neeche bayan kona — safed hathi'},{en:'h8 = top-right corner (Black Rook)',ur:'h8 = upar seedha kona — kaala hathi'}]},
      {formula:'Ranks: 1–8 (rows bottom to top)',examples:[{en:'Rank 1 = White pieces starting row',ur:'Rank 1 = safed pieces ki shuru wali line'},{en:'Rank 8 = Black pieces starting row',ur:'Rank 8 = kaale pieces ki shuru wali line'}]},
    ],tip:'💡 Board setup: White pieces on ranks 1-2, Black pieces on ranks 7-8. White always plays first!'},
    {title:'Piece Values — Kaunsa Piece Kitna Qeemti?',rules:[
      {formula:'Pawn = 1 point',examples:[{en:'Pawn: weakest but promotion possible',ur:'Piada: sabse kamzor magar promotion se Queen ban sakta hai'},{en:'Exchange 3 pawns for 1 Bishop? Bad trade!',ur:'3 piade deke 1 uunt lo? Nuksan wali deal!'}]},
      {formula:'Knight = Bishop = 3 points, Rook = 5, Queen = 9',examples:[{en:'Knight & Bishop: equal value (3 each)',ur:'Ghora & Uunt: barabar qeemat (3 each)'},{en:'Queen (9) = Rook + Bishop + Pawn',ur:'Wazeer (9) = Hathi + Uunt + Piada ke barabar'}]},
    ],tip:'💡 King has infinite value — never trade King! Aur: 2 Rooks (10) > Queen (9) usually.'},
    {title:'Special Moves — Khaas Moves',rules:[
      {formula:'Castling: King 2 steps, Rook jumps over',examples:[{en:'Kingside castling: King e1→g1, Rook h1→f1',ur:'Daainay taraf qalabaazi: Badshah e1→g1, Hathi h1→f1'},{en:'Only if neither piece has moved & no pieces in between',ur:'Sirf tab jab dono pieces pehle nahi hile aur beech mein koi nahi'}]},
      {formula:'En Passant: Special pawn capture',examples:[{en:'If enemy pawn moves 2 squares past your pawn — capture it as if it moved 1',ur:'Agar dushman ka piada 2 steps mein aapke piada ke paas guzra — use le lo jaise wo 1 step chala tha'}]},
    ],tip:'💡 Castling is your King\'s safest escape — karo jaldi! En passant sirf agle hi tur pe kar sakte hain.'},
  ],
  story: {
    title:'Ahmed Ka Pehla Chess Game',
    level:'⭐ Day 1 — Bilkul Shuru',
    paragraphs:[
      {line:'Ahmed ne pehli baar chess board khola. 64 khane, kuch safed, kuch kaale.',ur:'Ahmed opened a chessboard for the first time. 64 squares, some white, some black.',words:['chess','64']},
      {line:'Uske dost Sara ne kaha: "Yeh badshah hai — iski hifazat karna sabse zaroori kaam hai!"',ur:'His friend Sara said: "This is the King — protecting him is the most important task!"',words:['badshah','hifazat']},
      {line:'Ahmed ne ghora uthaya: "Yeh L-shape mein kyon chalta hai?"',ur:'Ahmed picked up the Knight: "Why does this one move in an L-shape?"',words:['ghora','L-shape']},
      {line:'Sara muskurai: "Chess mein har piece ka apna andaz hota hai — yahi is game ki khubsurati hai!"',ur:'Sara smiled: "In chess every piece has its own style — that\'s the beauty of this game!"',words:['piece','khubsurati']},
      {line:'Ahmed ne faisla kiya: "Main 7 din mein poora chess seekhunga!"',ur:'Ahmed decided: "I will learn complete chess in 7 days!"',words:['7 din','seekhunga']},
    ]
  },
  quizzes: [
    {q:'Chess board pe kitne squares hote hain?',o:['32','48','64','72'],a:2},
    {q:'Kaunsa piece L-shape mein chalta hai?',o:['Bishop','Rook','Queen','Knight'],a:3},
    {q:'Queen kitne points ki hoti hai?',o:['3','5','7','9'],a:3},
    {q:'"Checkmate" ka kya matlab hai?',o:['Draw game','King bach nahi sakta','Pawn promotion','Castling'],a:1},
    {q:'Pawn last rank pe pahunchne ke baad kya ban sakta hai?',o:['King','Knight only','Any piece except King','Rook only'],a:2},
    {q:'Castling mein kaun se 2 pieces involved hote hain?',o:['Queen + Rook','King + Rook','King + Bishop','Queen + Knight'],a:1},
    {q:'Stalemate ka kya natija hota hai?',o:['White jeet jata','Black jeet jata','Draw','Game continue'],a:2},
    {q:'Rook kaise chalta hai?',o:['Diagonal','L-shape','Horizontal ya Vertical','Koi bhi direction 1 step'],a:2},
  ],
  puzzles: [
    {
      id:'d1p1',
      title:'Knight Fork — Beginner',
      desc:'White ke paas ek acha Knight Fork hai! Woh move dhundho jo ek saath Black ke King aur Rook dono ko attack kare.',
      difficulty:1,
      fen:'8/8/8/3k4/8/8/8/3NKR2',
      whiteToMove:true,
      solution:'d1f2',
      solutionDesc:'Nf2! — Knight e4 pe nahi, f2 pe! Actually Nc3! Knight c3 pe jaata hai jo d5 King aur... Sahi move: Ne3+ — King aur Rook dono attack!',
      hint:'Knight ko aise square pe rakho jahaan woh dono important pieces ko ek saath attack kare!',
      xpBonus:30,
      board:{
        pieces:{
          e1:'K', f1:'R', d1:'N',
          d5:'k', h8:'r'
        }
      }
    }
  ]
},

2: {
  theme: 'ابتدائی اصول',
  themeEn: 'Opening Principles',
  emoji: '🏁',
  color: '#27AE60',
  vocab: [
    {w:'Opening', u:'شروعاتی چالیں', p:'OH-puh-ning', ex:'"Acha opening future ke liye stage set karta hai."', tip:'Pehle 10-15 moves — foundation banao'},
    {w:'Center Control', u:'مرکز پر قبضہ', p:'SEN-ter kun-TROHL', ex:'"e4, d4, e5, d5 — center squares sabse important hain!"', tip:'e4, d4, e5, d5 squares pe control = advantage'},
    {w:'Development', u:'پیش قدمی / ترقی', p:'deh-VEL-up-ment', ex:'"Har move pe ek naya piece develop karo."', tip:'Pieces ko starting squares se active positions pe lao'},
    {w:'e4 Opening', u:'پہلی چال e4', p:'ee-FOR', ex:'"1.e4 — sabse popular opening move!"', tip:'King\'s Pawn Opening — center pe qabza + Bishop aur Queen ka raasta khulta hai'},
    {w:'d4 Opening', u:'پہلی چال d4', p:'dee-FOR', ex:'"1.d4 — Queens Pawn — solid aur strong."', tip:'Queen\'s Pawn Opening — quiet but powerful positional play'},
    {w:'Tempo', u:'وقت / موقع', p:'TEM-poh', ex:'"Ek extra tempo bohot bada fayda deta hai."', tip:'Ek move ka faida — har tur qeemti hai'},
    {w:'Gambit', u:'قربانی', p:'GAM-bit', ex:'"Queens Gambit mein white ek pawn qurban karta hai."', tip:'Piece ya pawn dena takay positional/attack faida mile'},
    {w:'Fianchetto', u:'بشپ کا خاص راستہ', p:'fee-an-KET-oh', ex:'"Fianchetto mein bishop corner pe aata hai."', tip:'g3+Bg2 ya b3+Bb2 — Bishop ko long diagonal pe rakho'},
  ],
  sentences: [
    {en:'Control the center with your pawns first.',ur:'Pehle apne piadon se center pe qabza karo.',words:[{e:'Control',u:'qabza'},{e:'center',u:'darmiyaan'},{e:'pawns',u:'piadon'}],reply:'Sahi! e4 ya d4 se shuru karo.'},
    {en:'Develop your pieces before attacking.',ur:'Hamla karne se pehle apne pieces develop karo.',words:[{e:'Develop',u:'aage lao'},{e:'pieces',u:'pieces'},{e:'attacking',u:'hamla'}],reply:'Bilkul! Pehle develop, baad mein attack.'},
    {en:'Castle early to protect your King.',ur:'Jaldi castling karo taake apna Badshah mehfooz ho.',words:[{e:'Castle',u:'qalabaazi karo'},{e:'early',u:'jaldi'},{e:'protect',u:'mehfooz karo'}],reply:'King safety sabse pehle!'},
    {en:'Do not move the same piece twice in the opening.',ur:'Opening mein ek hi piece ko baar baar mat hilao.',words:[{e:'same piece',u:'ek hi piece'},{e:'twice',u:'baar baar'}],reply:'Har move ek naye piece ko develop karna chahiye!'},
    {en:'Connect your Rooks after castling.',ur:'Castling ke baad apne Haathiyon ko connect karo.',words:[{e:'Connect',u:'connect karo'},{e:'Rooks',u:'Haathiyon'},{e:'after castling',u:'castling ke baad'}],reply:'Connected Rooks bohot powerful hote hain!'},
  ],
  grammar: [
    {title:'3 Golden Opening Rules',rules:[
      {formula:'Rule 1: Control the center (e4/d4/e5/d5)',examples:[{en:'1.e4 e5 2.Nf3 — attack center & develop',ur:'1.e4 e5 2.Nf3 — center attack aur development'},{en:'1.d4 d5 — solid center control',ur:'1.d4 d5 — mazboot center control'}]},
      {formula:'Rule 2: Develop pieces (Knights before Bishops)',examples:[{en:'Move each piece once before moving any piece twice',ur:'Pehle har piece ko ek baar hilao, dobara hilane se pehle'},{en:'Knights → Bishops → Castle → Rooks → Queen',ur:'Ghore → Uunt → Qalabaazi → Hathi → Wazeer'}]},
      {formula:'Rule 3: Castle early — King safety!',examples:[{en:'Castle within first 10 moves if possible',ur:'Mumkin ho toh pehle 10 moves mein castling karo'},{en:'Rooks connect after castling — double power!',ur:'Castling ke baad Hathi connect ho jaate hain — double power!'}]},
    ],tip:'💡 Never break these rules without a very good reason! In 3 rules se 90% games jeet sakte ho.'},
    {title:'Famous Openings — Mashhoor Shuruwaat',rules:[
      {formula:'Italian Game: 1.e4 e5 2.Nf3 Nc6 3.Bc4',examples:[{en:'Targets f7 — King\'s weakest point!',ur:'f7 pe nazar — Badshah ka kamzor point!'},{en:'Best for beginners — clear plans',ur:'Beginners ke liye best — saaf plan'}]},
      {formula:"Queen's Gambit: 1.d4 d5 2.c4",examples:[{en:'Offer c4 pawn to gain center control',ur:'c4 piada dete hain center control ke liye'},{en:'Accept (dxc4) or Decline (e6) — both good',ur:'Lo (dxc4) ya thukrao (e6) — dono theek'}]},
    ],tip:'💡 Italian Game — beginners ke liye perfect! Queen\'s Gambit — agar positional game pasand ho.'},
  ],
  story: {
    title:'Sara Ka Italian Game',
    level:'⭐⭐ Day 2 — Asaan',
    paragraphs:[
      {line:'Sara ne Ahmed ko Italian Game sikhaya: "1.e4 e5 2.Nf3 Nc6 3.Bc4 — yeh opening 500 saal purani hai!"',ur:'Sara taught Ahmed the Italian Game: "This opening is 500 years old!"',words:['Italian Game','e4','Bc4']},
      {line:'Ahmed ne poochha: "Center control kyun zaroori hai?"',ur:'Ahmed asked: "Why is center control important?"',words:['Center control']},
      {line:'Sara ne samjhaya: "Center se pieces har jagah jaldi pahunch sakti hain — jaise highway pe gaadi!"',ur:'Sara explained: "From the center pieces reach anywhere fast — like a car on a highway!"',words:['Center','highway']},
      {line:'"Aur castling? Kab karna chahiye?"',ur:'"And castling? When should we do it?"',words:['castling']},
      {line:'"Jitna jaldi ho sake! Badshah khulle mein bahut khatarnaak hota hai!"',ur:'"As soon as possible! A King in the open is very dangerous!"',words:['Badshah','khatarnaak']},
    ]
  },
  quizzes: [
    {q:'Opening mein sabse pehle kya karna chahiye?',o:['Queen ko nikalo','Center pe piadon se qabza karo','Ek hi piece ko baar baar hilao','Castling chhor do'],a:1},
    {q:'Italian Game ki pehli move kya hai?',o:['d4','Nf3','e4','c4'],a:2},
    {q:'Castling kab karna chahiye?',o:['Game ke aakhir mein','Jitna late mumkin ho','Jitna jaldi mumkin ho','Kabhi nahi'],a:2},
    {q:'Opening mein pieces kis order mein develop karo?',o:['Queen pehle','Rooks pehle','Knights pehle, phir Bishops','Koi order nahi'],a:2},
    {q:"Queen's Gambit mein white kya karta hai?",o:['Knight attack karta hai','c4 pawn offer karta hai','Castling karta hai','Bishop develop karta hai'],a:1},
    {q:'Tempo ka matlab?',o:['Board position','Ek move ka faida','Piece value','Time control'],a:1},
  ],
  puzzles: [
    {
      id:'d2p1',
      title:'Opening Blunder — Castle Ya Nahi?',
      desc:'Black ne opening mein ghalta move khela aur apna center chhod diya. White ke liye best move kya hai — develop karo ya castle?',
      difficulty:1,
      hint:'Bishop ko active square pe lao jahaan woh maximum squares cover kare!',
      xpBonus:35,
      board:{
        pieces:{
          e1:'K', d1:'Q', a1:'R', h1:'R', c1:'B', f1:'B', g1:'N',
          a2:'P', b2:'P', c2:'P', d2:'P', f2:'P', g2:'P', h2:'P', e4:'P',
          e8:'k', d8:'q', a8:'r', h8:'r', c8:'b', f8:'b',
          a7:'p', b7:'p', c7:'p', d7:'p', f7:'p', g7:'p', h7:'p', e5:'p',
          c6:'n', f6:'n'
        }
      },
      choices:[
        {label:'Bc4 — Active Bishop!', correct:true, resp:'✅ Sahi! Bc4 — Bishop f7 pe attack karta hai aur center control deta hai!'},
        {label:'O-O — Castle karo', correct:false, resp:'❌ Castle baad mein! Pehle pieces develop karo — Bc4 best move hai!'},
        {label:'d4 — Pawn push', correct:false, resp:'❌ d4 e5 pe pawn attack karta hai but Bc4 zyada active aur threatening hai!'}
      ]
    }
  ]
},

3: {
  theme: 'چالوں کی حکمت عملی',
  themeEn: 'Tactics & Combinations',
  emoji: '⚡',
  color: '#F39C12',
  vocab: [
    {w:'Fork', u:'دوہرا حملہ', p:'fork', ex:'"Knight fork se ek saath King aur Queen par hamla!"', tip:'Ek piece ek saath 2 enemy pieces attack kare'},
    {w:'Pin', u:'باندھنا', p:'pin', ex:'"Bishop ne Rook ko pin kar diya — woh hilne nahin deta!"', tip:'Piece ko hilne se rokna kyunke peche valuable piece ho'},
    {w:'Skewer', u:'کیل', p:'SKYOO-er', ex:'"Skewer mein pehle valuable piece attack, peche wali milti hai!"', tip:'Pin ka ulta — valuable piece peeche wali pe se hati toh doosri milti hai'},
    {w:'Discovered Attack', u:'چھپا ہوا حملہ', p:'dis-KUV-erd', ex:'"Ek piece hati, peche wali ne hamla kar diya!"', tip:'Ek piece hile toh doosri piece reveal ho aur attack kare'},
    {w:'Double Check', u:'دہرا چیک', p:'DUB-ul chek', ex:'"Double check — dono pieces ek saath check de rahi hain!"', tip:'2 pieces ek saath check — sirf King ko hilana parta hai'},
    {w:'Sacrifice', u:'قربانی', p:'SAK-rih-fys', ex:'"Rook qurban karke checkmate mila!"', tip:'Piece dena takay bada faida mile — positional ya checkmate'},
    {w:'Combination', u:'ملی جلی چالیں', p:'kom-bin-AY-shun', ex:'"3 move ki combination se checkmate!"', tip:'Multiple forced moves ki sequence jo faida de'},
    {w:'Zwischenzug', u:'درمیانی چال', p:'ZVISH-un-tsoog', ex:'"Pehle check de, phir exchange karo — yeh Zwischenzug hai!"', tip:'Beech mein surprise move jab opponent kuch expect kar raha ho'},
  ],
  sentences: [
    {en:'A Knight fork attacks two pieces at once.',ur:'Knight fork ek saath do pieces pe hamla karta hai.',words:[{e:'Knight fork',u:'ghore ka dohra hamla'},{e:'two pieces',u:'do pieces'}],reply:'Fork game ka sabse khaas tactic hai!'},
    {en:'A pin prevents a piece from moving safely.',ur:'Pin ek piece ko mehfooz tarike se hilne se rokta hai.',words:[{e:'pin',u:'rokna'},{e:'prevents',u:'rokta hai'},{e:'moving safely',u:'mehfooz chalana'}],reply:'Haan! Pin se opponent ki piece useless ho jati hai.'},
    {en:'Always look for a fork before making your move.',ur:'Har move se pehle fork ka mauqa dhundo.',words:[{e:'look for',u:'dhundo'},{e:'fork',u:'dohra hamla'},{e:'before',u:'pehle'}],reply:'Yeh achi aadat hai — tactics pehle check karo!'},
    {en:'Sacrifice a piece to get checkmate.',ur:'Checkmate ke liye piece qurban karo.',words:[{e:'Sacrifice',u:'qurban karo'},{e:'checkmate',u:'shah mat'}],reply:'Brilliant! Material se position zyada important ho sakti hai.'},
    {en:'A discovered attack can win material.',ur:'Chhupi hui attack se material milta hai.',words:[{e:'discovered attack',u:'chhupi attack'},{e:'win material',u:'piece milna'}],reply:'Discovered attacks bahut powerful hoti hain!'},
  ],
  grammar: [
    {title:'Top 5 Tactics — Seekhna Zaroori',rules:[
      {formula:'1. Fork: 1 piece → 2 attacks simultaneously',examples:[{en:'Knight on c7: attacks King on e8 + Rook on a8',ur:'Ghora c7 pe: ek saath Badshah e8 + Hathi a8 pe hamla'},{en:'Queen fork: attacks King + unprotected piece',ur:'Wazeer fork: Badshah + bina hifazat ka piece'}]},
      {formula:'2. Pin: Attack piece hiding more valuable one',examples:[{en:'Bishop pins Knight to Queen: Knight cant move',ur:'Uunt ne Ghore ko Wazeer ke aage pin kiya: Ghora nahi hil sakta'},{en:'Rook pins Rook to King on same file',ur:'Hathi ne Hathi ko Badshah ke saath ek file pe pin kiya'}]},
      {formula:'3. Skewer: Attack valuable, win the one behind',examples:[{en:'Rook attacks King — King moves — win Queen!',ur:'Hathi Badshah pe: Badshah hila — Wazeer mila!'},{en:'Bishop attacks Queen — Queen moves — win Rook!',ur:'Uunt Wazeer pe: Wazeer hili — Hathi mila!'}]},
    ],tip:'💡 In 3 tactics seekh lo toh 80% tactical puzzles solve ho jayenge! Har game mein dhundo.'},
    {title:'Tactics Dhoondhne Ka Tarika',rules:[
      {formula:'STOP before every move — scan for tactics',examples:[{en:'1. Check if any piece is unprotected',ur:'1. Koi piece bina hifazat ke hai?'},{en:'2. Can I create a fork / pin / skewer?',ur:'2. Kya main fork/pin/skewer bana sakta hoon?'}]},
      {formula:'Forcing moves first: Check → Capture → Threat',examples:[{en:'Always calculate checks first — they force responses',ur:'Pehle checks calculate karo — opponent ko jawab dena parta hai'},{en:'If check leads to tactics — play it!',ur:'Agar check se tactics milte hain — khelo!'}]},
    ],tip:'💡 "Checks, Captures, Threats" — har position mein yeh 3 cheezein dekho. Yahi chess mastery ka secret hai!'},
  ],
  story: {
    title:'Ahmed Ka Pehla Fork',
    level:'⭐⭐⭐ Day 3 — Munasib',
    paragraphs:[
      {line:'Ahmed tournament practice mein Sara se khel raha tha. Uski position tight thi.',ur:'Ahmed was playing Sara in tournament practice. His position was tight.',words:['tournament','position']},
      {line:'Achanak Ahmed ne dekha: "Ghora c5 pe le jao — King aur Rook dono attack hote hain!"',ur:'Suddenly Ahmed saw: "Move Knight to c5 — attacks both King and Rook!"',words:['Ghora','Fork']},
      {line:'Sara ne "Oh!" kaha aur Rook khone ke baad resign kar liya.',ur:'Sara said "Oh!" and resigned after losing the Rook.',words:['Rook','resign']},
      {line:'Ahmed ne khushi se kaha: "Mera pehla fork! Zaroor 7 din mein champion banunga!"',ur:'Ahmed happily said: "My first fork! I will definitely become champion in 7 days!"',words:['fork','champion']},
      {line:'Sara muskurai: "Tactics practice se aate hain — roz 10 puzzles solve karo!"',ur:'Sara smiled: "Tactics come from practice — solve 10 puzzles daily!"',words:['Tactics','puzzles']},
    ]
  },
  quizzes: [
    {q:'Fork ka kya matlab hai?',o:['Ek piece par hamla','Ek saath 2 pieces par hamla','Piece ko rokna','Piece qurban karna'],a:1},
    {q:'Pin mein kya hota hai?',o:['Piece aage ki valuable piece ki wajah se hilne se ruk jati hai','Ek saath 2 checks','Piece qurban','Discovered attack'],a:0},
    {q:'Skewer aur Pin mein farq?',o:['Koi farq nahi','Skewer mein pehle valuable piece attack hoti hai','Pin mein sirf Queen','Skewer sirf Rooks pe'],a:1},
    {q:'Tactics dhoondhne ka order?',o:['Threats → Captures → Checks','Checks → Captures → Threats','Captures → Threats → Checks','Koi order nahi'],a:1},
    {q:'Double check mein opponent kya kar sakta hai?',o:['Koi bhi piece block kar sakta hai','Koi bhi piece capture kar sakta hai','Sirf King ko hila sakta hai','Dono mein se koi bhi'],a:2},
    {q:'Discovered attack mein kya hota hai?',o:['Ek piece dusri piece ke liye raasta khol deti hai','Ek piece 2 par hamla kare','Piece pin ho jaye','Time control'],a:0},
  ],
  puzzles: [
    {
      id:'d3p1',
      title:'Knight Fork! (★★)',
      desc:'White ka Knight ek aisi jagah ja sakta hai jahaan woh Black ke King aur Queen dono pe fork karega! Woh move dhundo!',
      difficulty:2,
      hint:'Knight ka L-shape sochho — konsa square hai jahaan woh ek saath King aur Queen attack kare?',
      xpBonus:40,
      board:{
        pieces:{
          e1:'K', g2:'N', a1:'R',
          e8:'k', c7:'q', g8:'r',
          e4:'P', d3:'P'
        }
      },
      choices:[
        {label:'Nf4 — Knight f4 pe', correct:false, resp:'❌ Nf4 fork nahi hai — King aur Queen dono pe attack nahi!'},
        {label:'Ne3 — Knight e3 pe', correct:false, resp:'❌ Ne3 koi khaas threat nahi banta!'},
        {label:'Nd4+ — Knight d4 pe check!', correct:true, resp:'✅ Shabash! Nd4+ — King check mein aur c7 Queen bhi attack — perfect fork!'}
      ]
    },
    {
      id:'d3p2',
      title:'Pin Ka Faida! (★★)',
      desc:'White ka Bishop ek powerful pin laga sakta hai! Kaun sa move Black ke Knight ko Queen ke saamne pin kar dega?',
      difficulty:2,
      hint:'Bishop diagonally chalta hai — usse kisi diagonal pe le jao jahaan dushman ka Knight uski Queen ke saamne aa jaye!',
      xpBonus:40,
      board:{
        pieces:{
          e1:'K', c1:'B', h1:'R',
          e8:'k', d8:'q', f6:'n', g7:'p', h7:'p', f7:'p'
        }
      },
      choices:[
        {label:'Bb2 — Pin Diagonal!', correct:false, resp:'❌ Bb2 f6 Knight ko pin nahi karta!'},
        {label:'Bg5 — Pin on g5!', correct:true, resp:'✅ Bg5! — g5 pe Bishop f6 Knight ko d8 Queen ke saamne pin kar deta hai! Knight hilega toh Queen jaayegi!'},
        {label:'Be3 — Active position', correct:false, resp:'❌ Be3 koi pin nahi banata — Bg5 sahi jawab hai!'}
      ]
    },
    {
      id:'d3p3',
      title:'Skewer Attack! (★★★)',
      desc:'White ki Rook ek skewer chaal khal sakti hai! Yaad raho: Skewer mein pehle valuable piece attack hoti hai, peche wali milti hai!',
      difficulty:3,
      hint:'Rook ko kisi open file ya rank pe le jao jahaan woh pehle King pe attack kare — King hatega toh peche Rook milegi!',
      xpBonus:50,
      board:{
        pieces:{
          g1:'K', h2:'R',
          e8:'k', e4:'r', e7:'p', d7:'p'
        }
      },
      choices:[
        {label:'Re2 — Rook e2 pe', correct:false, resp:'❌ Re2 koi immediate skewer nahi — king check mein nahi!'},
        {label:'Rh8+ — Check aur Skewer!', correct:true, resp:'✅ Rh8+! — King check mein! King hatega toh e4 Rook milegi — perfect skewer!'},
        {label:'Rd2 — d-file pe', correct:false, resp:'❌ Rd2 koi direct king attack nahi — Rh8+ skewer hai!'}
      ]
    }
  ]
},

4: {
  theme: 'مڈل گیم حکمت عملی',
  themeEn: 'Middlegame Strategy',
  emoji: '🎯',
  color: '#8E44AD',
  vocab: [
    {w:'Outpost', u:'مضبوط مقام', p:'OWT-pohst', ex:'"Knight on d5 — perfect outpost!"', tip:'Ek square jahan tumhari piece hai aur opponent piada se attack nahi kar sakta'},
    {w:'Open File', u:'کھلی لائن', p:'OH-pen fyl', ex:'"Rook on open e-file — bohot powerful!"', tip:'Woh column jis pe koi pawn nahi — Rooks ka ghar'},
    {w:'Weak Squares', u:'کمزور خانے', p:'week skwayrz', ex:'"f6 weak hai — Knight perfect wahan jaega!"', tip:'Wo squares jo tumhare piyadon se defend nahi ho sakte'},
    {w:'Pawn Structure', u:'پیادوں کی بناوٹ', p:'pawn STRUK-chur', ex:'"Pawn structure ki wajah se plan banta hai."', tip:'Piyadon ki arrangement — game ki backbone'},
    {w:'Isolated Pawn', u:'تنہا پیادہ', p:'EYE-so-lay-ted', ex:'"Isolated d-pawn — weak target!"', tip:'Jis piyaday ke aage peche dono taraf koi piada na ho — weakness'},
    {w:'Doubled Pawns', u:'دوہرے پیادے', p:'DUB-uld', ex:'"Doubled pawns on c-file — structural weakness."', tip:'Ek hi file pe 2 piaday — generally weakness'},
    {w:'Passed Pawn', u:'آزاد پیادہ', p:'past pawn', ex:'"Passed pawn on e6 — future Queen!"', tip:'Jis piyaday ko opponent ka piada rok nahi sakta — very powerful!'},
    {w:'Endgame', u:'آخری مرحلہ', p:'END-gaym', ex:'"Endgame mein King active ho jaata hai."', tip:'Jab zyada tar pieces board se hat jayen — King important ho jata hai'},
  ],
  sentences: [
    {en:'Place your Knight on an outpost in the center.',ur:'Apna Ghora center mein outpost pe rakho.',words:[{e:'Knight',u:'Ghora'},{e:'outpost',u:'mazboot maqam'},{e:'center',u:'darmiyaan'}],reply:'Strong Knight is often better than a Bishop!'},
    {en:'Use open files to activate your Rooks.',ur:'Khuli files se apne Haathiyon ko active karo.',words:[{e:'open files',u:'khuli lines'},{e:'activate',u:'active karo'},{e:'Rooks',u:'Haathiyon'}],reply:'Rooks bohot powerful hote hain open files pe!'},
    {en:'A passed pawn is a future Queen.',ur:'Aazad piada mustaqbil ki Wazeer hai.',words:[{e:'passed pawn',u:'aazad piada'},{e:'future Queen',u:'mustaqbil ki Wazeer'}],reply:'Push that passed pawn!'},
    {en:'Identify and attack your opponent\'s weak squares.',ur:'Dushman ke kamzor khanon ko pehchano aur hamla karo.',words:[{e:'Identify',u:'pehchano'},{e:'weak squares',u:'kamzor khanay'}],reply:'Yahi middlegame strategy ka core hai!'},
    {en:'Coordinate your pieces to work together.',ur:'Apne pieces ko milkaar kaam karne do.',words:[{e:'Coordinate',u:'milkaar kaam karo'},{e:'pieces',u:'pieces'},{e:'together',u:'saath mein'}],reply:'Ek powerful piece se zyada acchi team hoti hai!'},
  ],
  grammar: [
    {title:'Positional Principles — Position Samajhna',rules:[
      {formula:'Bishop pair (2 Bishops) = long-term advantage',examples:[{en:'Open position: Bishop pair > 2 Knights',ur:'Khuli position mein: 2 Uunt > 2 Ghore'},{en:'Closed position: Knights better (jumping ability)',ur:'Bandi position mein: Ghore behtar (koodne ki salahiyat)'}]},
      {formula:'Rooks belong on open/semi-open files',examples:[{en:'Doubled Rooks on open file = massive pressure',ur:'Open file pe 2 Hathi = zabardast pressure'},{en:'Rook on 7th rank = very strong',ur:'Saatvein rank pe Hathi = bohot mazboot'}]},
    ],tip:'💡 Chess mein plan banana zaroori hai — position dekho, plan banao, phir tactics dhundo!'},
    {title:'How to Make a Plan',rules:[
      {formula:'Step 1: Assess the position',examples:[{en:'Who has more space? Better pawn structure?',ur:'Kiske paas zyada space hai? Behtar piada structure?'},{en:'Which pieces are active/passive?',ur:'Kon se pieces active/passive hain?'}]},
      {formula:'Step 2: Find a concrete plan',examples:[{en:'Attack weakness, improve worst piece, create passed pawn',ur:'Kamzori pe hamla karo, kamzor piece improve karo, aazad piada banao'},{en:'King attack if opponent\'s King is unsafe',ur:'Agar dushman ka Badshah unsafe hai toh king attack karo'}]},
    ],tip:'💡 "Every chess master was once a beginner" — Mikhail Tal. Plan-based play separates average from strong players!'},
  ],
  story: {
    title:'Plan Banao, Game Jeet Lo',
    level:'⭐⭐⭐⭐ Day 4 — Mushkil',
    paragraphs:[
      {line:'Ahmed ka d5 square pe Knight bohot mazboot tha — Sara ka koi piada usse attack nahi kar sakta tha.',ur:'Ahmed\'s Knight on d5 was very strong — Sara\'s pawns could not attack it.',words:['Knight','d5','outpost']},
      {line:'Ahmed ne plan banaya: "Mera Hathi f-file pe le jata hoon — wahan koi piada nahi!"',ur:'Ahmed made a plan: "I\'ll put my Rook on the f-file — no pawns there!"',words:['Hathi','f-file','open file']},
      {line:'Sara ki position kamzor hoti gayi — uska c5 piada akaila tha.',ur:'Sara\'s position kept weakening — her c5 pawn was isolated.',words:['isolated pawn','kamzor']},
      {line:'Ahmed ne woh piada liya aur phir passed pawn banaya.',ur:'Ahmed captured that pawn and then created a passed pawn.',words:['passed pawn']},
      {line:'"Yeh piada Queen banega!" — Sara ne sochha aur resign kar diya.',ur:'"This pawn will become a Queen!" — Sara thought and resigned.',words:['Queen','resign']},
    ]
  },
  quizzes: [
    {q:'Outpost kya hota hai?',o:['Koi bhi center square','Woh square jahan piece ko opponent piada attack nahi kar sakta','King ki position','Open file'],a:1},
    {q:'Rooks kahan best hote hain?',o:['Corners mein','Closed files pe','Open ya semi-open files pe','Starting position pe'],a:2},
    {q:'Isolated pawn kya hota hai?',o:['Dono taraf piyadon ke bina piada','Double piaday','Passed pawn','Center pawn'],a:0},
    {q:'Bishop pair kab zyada powerful hota hai?',o:['Closed position mein','Open position mein','Endgame mein sirf','Opening mein sirf'],a:1},
    {q:'Passed pawn kyun important hai?',o:['Zyada qeemat ka hota hai','Queen ban sakta hai','More squares control karta hai','King ko protect karta hai'],a:1},
    {q:'Middlegame mein plan banana kyun zaroori hai?',o:['Sirf tactics kafi hain','Random moves better hain','Plan se piece coordination aur goals clear hote hain','Time waste hota hai'],a:2},
  ],
  puzzles: [
    {
      id:'d4p1',
      title:'Middlegame Combination! (★★★)',
      desc:'Yeh middlegame position hai. White ke paas ek 2-move combination hai jo Black ka material le lega. Pehla move kya hai?',
      difficulty:3,
      hint:'Apne pieces ki coordination dekho — koi piece kisi line pe attack kar rahi hai aur doosri piece use support kar sakti hai!',
      xpBonus:50,
      board:{
        pieces:{
          e1:'K', d1:'R', g2:'B', f3:'N', a2:'P', b2:'P', h2:'P', g3:'P',
          e8:'k', d8:'r', b7:'b', f6:'n', a7:'p', b6:'p', h7:'p', g6:'p', e5:'p'
        }
      },
      choices:[
        {label:'Nd4 — Knight d4 pe!', correct:false, resp:'❌ Nd4 koi immediate win nahi — position complex rehti hai!'},
        {label:'Bh3 — Bishop h3!', correct:false, resp:'❌ Bh3 achi move hai but best combination nahi!'},
        {label:'Ng5 — Knight g5 pe attack!', correct:true, resp:'✅ Ng5! — Knight g5 pe f7 pe attack, Bxf7+ threat bhi hai! Double threat jo black defend nahi kar sakta!'}
      ]
    }
  ]
},

5: {
  theme: 'اینڈ گیم کی تکنیک',
  themeEn: 'Endgame Techniques',
  emoji: '👑',
  color: '#E74C3C',
  vocab: [
    {w:'King Activity', u:'بادشاہ کی سرگرمی', p:'king ak-TIV-ih-tee', ex:'"Endgame mein King aage aao — tumhari strongest piece ban jata hai!"', tip:'Endgame mein King ek powerful fighting piece hai'},
    {w:'Opposition', u:'مقابلہ', p:'op-uh-ZISH-un', ex:'"Direct opposition mein dono Kings ek doosre ke saamne hain."', tip:'2 Kings ek odd number squares pe — direct opposition'},
    {w:'Zugzwang', u:'چلنے کی مجبوری', p:'TSOOG-tsvang', ex:'"Zugzwang! Har move nuksaan deta hai."', tip:'Jab koi bhi move tumhe nuqsan pahunchaye — chalna hi kharaab'},
    {w:'Triangulation', u:'مثلث چال', p:'try-ang-gyuh-LAY-shun', ex:'"King 3 moves mein wapas same square — opponent ki baari shift!"', tip:'King 3 moves wasteful karke opponent ko zugzwang mein dalo'},
    {w:'Lucena Position', u:'لوسینا پوزیشن', p:'loo-SAY-nah', ex:'"Lucena position — Rook endgame jeet ka blueprint!"', tip:'Winning technique in Rook+Pawn vs Rook endgames'},
    {w:'Philidor Position', u:'فلیڈور پوزیشن', p:'FIL-ih-dor', ex:'"Philidor — drawing technique in Rook endgames."', tip:'Defensive technique — draw rakhne ka tarika Rook endgames mein'},
    {w:'Promotion', u:'پیادے کی ترقی', p:'pruh-MOH-shun', ex:'"Piada 8th rank pe — Queen bana!"', tip:'Pawn last rank pe = Queen (ya koi bhi piece) — usually Queen banao'},
    {w:'Stalemate Trick', u:'بے حرکتی کی چال', p:'STAYL-mayt trik', ex:'"Rook qurban kiya stalemate ke liye — draw ban gaya!"', tip:'Haarne ki jagah stalemate trick se draw — kaminey ki chaal!'},
  ],
  sentences: [
    {en:'In the endgame, activate your King immediately.',ur:'Endgame mein fauran apna Badshah active karo.',words:[{e:'endgame',u:'aakhri marhala'},{e:'activate',u:'active karo'},{e:'King',u:'Badshah'}],reply:'Endgame mein King hero ban jata hai!'},
    {en:'Push your passed pawn towards promotion.',ur:'Apna aazad piada promotion ki taraf dhakelo.',words:[{e:'Push',u:'dhakelo'},{e:'passed pawn',u:'aazad piada'},{e:'promotion',u:'taraqqi'}],reply:'Har endgame mein passed pawn = potential win!'},
    {en:'Use opposition to control key squares.',ur:'Key squares control karne ke liye opposition use karo.',words:[{e:'opposition',u:'muqabla'},{e:'control',u:'control karo'},{e:'key squares',u:'aham khanay'}],reply:'King opposition seekhna sabse zaroori endgame skill hai!'},
    {en:'Know when to trade pieces and reach the endgame.',ur:'Jaano kab pieces exchange karke endgame mein jaana hai.',words:[{e:'trade pieces',u:'pieces exchange karo'},{e:'reach endgame',u:'endgame mein jao'}],reply:'Agar advantage ho toh simplify karo!'},
    {en:'A Rook and King can force checkmate.',ur:'Hathi aur Badshah milkar checkmate force kar sakte hain.',words:[{e:'Rook and King',u:'Hathi aur Badshah'},{e:'force checkmate',u:'checkmate force karna'}],reply:'Rook + King endgame seekhna must hai!'},
  ],
  grammar: [
    {title:'King + Pawn Endgame — Sabse Zaroori',rules:[
      {formula:'Opposition: Odd squares between Kings',examples:[{en:'White King e4, Black King e6: Direct Opposition',ur:'Safed Badshah e4, Kaala Badshah e6: seedha muqabla'},{en:'Having opposition = ability to push opponent back',ur:'Opposition rakhna = dushman ko peeche dhakela ja sakta hai'}]},
      {formula:'Rule of the Square: Can King catch the pawn?',examples:[{en:'Draw a diagonal square from pawn to promotion',ur:'Piyaday se promotion tak diagonal square banao'},{en:'If enemy King inside: catches pawn = draw',ur:'Agar dushman Badshah andar hai: piada pakad le = draw'}]},
    ],tip:'💡 King + Pawn endgame = chess ka alphabet. Yeh seekhe bina endgame nahi aata!'},
    {title:'Rook Endgame — Lucena & Philidor',rules:[
      {formula:'Lucena: Rook + Pawn ahead — Build a Bridge!',examples:[{en:'Step 1: Advance King in front of pawn',ur:'Step 1: Badshah piyaday ke aage karo'},{en:'Step 2: Cut off enemy King with Rook',ur:'Step 2: Rook se dushman Badshah ko cut off karo'},{en:'Step 3: "Bridge" — Rook shields King from checks',ur:'Step 3: "Bridge" — Rook Badshah ko checks se bachata hai'}]},
      {formula:'Philidor: Rook + Pawn vs Rook — Draw!',examples:[{en:'Keep Rook on 6th rank until pawn advances',ur:'Jab tak piada aage na aaye Rook 6th rank pe rakho'},{en:'Switch to back rank checking when pawn advances',ur:'Jab piada aage aaye toh peeche se check dete raho'}]},
    ],tip:'💡 Rook endgames chess ke 50% endgames hain! Lucena + Philidor = win ya draw rakhna.'},
  ],
  story: {
    title:'Badshah Ki Wapassi',
    level:'⭐⭐⭐⭐⭐ Day 5 — Expert',
    paragraphs:[
      {line:'Game ka endgame shuru hua — sirf King, Rook aur kuch piaday bache the.',ur:'The endgame began — only King, Rook and some pawns remained.',words:['endgame','Rook','piaday']},
      {line:'Ahmed ka Badshah jo abhi tak peeche chhupta raha tha, ab aage aaya!',ur:'Ahmed\'s King who had been hiding, now stepped forward!',words:['Badshah','active']},
      {line:'"e-pawn passed hai — isko promote karo!" Ahmed ne socha.',ur:'"The e-pawn is passed — promote it!" Ahmed thought.',words:['passed pawn','promote']},
      {line:'Sara ne Philidor defense try kiya magar Ahmed Lucena position pe pahunch gaya.',ur:'Sara tried Philidor defense but Ahmed reached the Lucena position.',words:['Philidor','Lucena']},
      {line:'Bridge bana, piada Queen bana, aur Ahmed ne jeet li!',ur:'Built the bridge, pawn became Queen, and Ahmed won!',words:['Bridge','Queen','jeet']},
    ]
  },
  quizzes: [
    {q:'Endgame mein King kya karta hai?',o:['Chhupta rehta hai','Active fighting piece ban jata hai','Castling karta hai','Check deta hai sirf'],a:1},
    {q:'Opposition ka matlab?',o:['Kings ek hi square pe','Kings diagonal pe','Kings odd squares apart ek line mein','Kings corner mein'],a:2},
    {q:'Zugzwang mein kya hota hai?',o:['Extra tempo milta hai','Koi bhi move nuqsan deta hai','Stalemate hota hai','Draw hota hai'],a:1},
    {q:'Rule of the Square kya batata hai?',o:['Piada kahan jata hai','Aya Badshah pawn pakad sakta hai ya nahi','King opposition','Rook position'],a:1},
    {q:'Lucena position kya hai?',o:['Drawing technique','Rook endgame jeetne ki technique','King corner mein','Stalemate trick'],a:1},
    {q:'Philidor position kya hai?',o:['Rook endgame draw technique','Attack technique','Pawn promotion','Double check'],a:0},
  ],
  puzzles: [
    {
      id:'d5p1',
      title:'King + Pawn Endgame! (★★★★)',
      desc:'White ke paas King aur ek passed pawn hai. Black ka King us pawn ko rokne ki koshish kar raha hai. White kaise jeete ga?',
      difficulty:4,
      hint:'Apna King pawn ke saamne rakho — "opposition" use karo Black King ko hatane ke liye!',
      xpBonus:60,
      board:{
        pieces:{
          d5:'K', e5:'P',
          e7:'k'
        }
      },
      choices:[
        {label:'e6 — Pawn push!', correct:false, resp:'❌ e6 ke baad Ke8 — stalemate ya draw! Pehle King ko aage karo!'},
        {label:'Kd6 — King aage opposition!', correct:true, resp:'✅ Kd6! Opposition lelo! Ab Kf8 ke baad Ke6, Ke8 ke baad e7, aur pawn Queen banega!'},
        {label:'Ke6 — King e6 pe', correct:false, resp:'❌ Ke6 ke baad Black King d8 ya f8 — pawn ke saamne nahi aa sakta but stalemate danger!'}
      ]
    }
  ]
},

6: {
  theme: 'ٹورنامنٹ کی تیاری',
  themeEn: 'Tournament Preparation',
  emoji: '🏆',
  color: '#3498DB',
  vocab: [
    {w:'Time Control', u:'وقت کی حد', p:'tym kun-TROHL', ex:'"Blitz: 3+2, Rapid: 15+10, Classical: 90+30"', tip:'Har player ko itna waqt milta hai puri game ke liye'},
    {w:'Blitz Chess', u:'تیز شطرنج', p:'blits chezz', ex:'"Blitz 5 minute game — har second qeemti!"', tip:'3 ya 5 minute per player — fast aur exciting'},
    {w:'Notation', u:'نوٹیشن / چالوں کا اندراج', p:'noh-TAY-shun', ex:'"1.e4 e5 2.Nf3 Nc6 3.Bb5 — Ruy Lopez notation."', tip:'Chess moves likhne ka tarika — har competitive game mein zaroori'},
    {w:'Rating / ELO', u:'ریٹنگ / درجہ', p:'RAY-ting / EE-loh', ex:'"1200 ELO beginner, 1800 club player, 2000+ expert."', tip:'International rating system — Magnus Carlsen ~2830'},
    {w:'Resign', u:'ہار ماننا', p:'rih-ZYN', ex:'"Pro players resign jab position hopeless ho jaaye."', tip:'Handshake ya "I resign" — sportsmanship dikhaao'},
    {w:'Draw Offer', u:'برابری کی پیشکش', p:'draw OFF-ur', ex:'"Draw offer — kya dono agree karte hain?"', tip:'Kisi bhi turn pe draw offer kar sakte hain — opponent reject bhi kar sakta hai'},
    {w:'Chess Clock', u:'شطرنج کی گھڑی', p:'chezz klok', ex:'"Apna move karo, phir clock dabaao!"', tip:'Move ke baad apna clock dabao — opponent ka time shuru hoga'},
    {w:'Algebraic Notation', u:'معیاری نوٹیشن', p:'al-jih-BRAY-ik', ex:'"Nf3, Bb5, O-O, e4 — standard notation symbols."', tip:'N=Knight, B=Bishop, R=Rook, Q=Queen, K=King, O-O=Castling'},
  ],
  sentences: [
    {en:'Always write down your moves in tournament games.',ur:'Tournament games mein hamesha apni chalein likho.',words:[{e:'write down',u:'likho'},{e:'moves',u:'chalein'},{e:'tournament',u:'musabqat'}],reply:'Notation zaroori hai — analysis ke liye!'},
    {en:'Manage your time wisely during the game.',ur:'Game mein apna waqt samajhdari se manage karo.',words:[{e:'Manage',u:'manage karo'},{e:'time wisely',u:'waqt samajhdari se'}],reply:'Time trouble mein blunders hote hain — clock ko dekhte raho!'},
    {en:'Study your opponent\'s games before a match.',ur:'Match se pehle dushman ki games study karo.',words:[{e:'Study',u:'study karo'},{e:'opponent\'s games',u:'dushman ki games'},{e:'before',u:'pehle'}],reply:'Preparation = 50% win!'},
    {en:'Stay calm when you are in a difficult position.',ur:'Mushkil position mein bhi calm raho.',words:[{e:'Stay calm',u:'calm raho'},{e:'difficult position',u:'mushkil position'}],reply:'Ghabrao mat — chess mein position hamesha badal sakti hai!'},
    {en:'Review your games after every match.',ur:'Har match ke baad apni games review karo.',words:[{e:'Review',u:'review karo'},{e:'every match',u:'har match ke baad'}],reply:'Analysis se sabse zyada seekhte hain!'},
  ],
  grammar: [
    {title:'Algebraic Notation — Chalein Likhna',rules:[
      {formula:'Piece abbreviations: K Q R B N (no letter=pawn)',examples:[{en:'e4 = pawn moves to e4',ur:'e4 = piada e4 pe jata hai'},{en:'Nf3 = Knight moves to f3',ur:'Nf3 = Ghora f3 pe jata hai'},{en:'O-O = Kingside castle; O-O-O = Queenside castle',ur:'O-O = daainay castling; O-O-O = baainay castling'}]},
      {formula:'Symbols: x=capture, +=check, #=checkmate, !=good, ?=mistake',examples:[{en:'Bxf7+ = Bishop captures f7 giving check',ur:'Bxf7+ = Uunt ne f7 liya aur check diya'},{en:'Qh5# = Queen to h5 — checkmate!',ur:'Qh5# = Wazeer h5 pe — checkmate!'}]},
    ],tip:'💡 Notation seekhna = chess ke sabse bade coaches ki games parh sakte ho! Magnus, Kasparov, Fischer — sab ki games available hain.'},
    {title:'Tournament Etiquette — Adab',rules:[
      {formula:'Shake hands before & after game',examples:[{en:'Before: "Good luck!" / Baad: "Good game!"',ur:'Pehle: "Best of luck!" / Baad: "Acha khela!"'},{en:'Never speak during game unless to offer draw or resign',ur:'Game mein bolna mana hai — sirf draw offer ya resign'}]},
      {formula:'Touch move rule: Jo chuao, wo chalao',examples:[{en:'If you touch a piece, you must move it',ur:'Agar piece chuai, toh wahi chalana hoga'},{en:'"J\'adoube" (I adjust) — say before straightening pieces',ur:'"J\'adoube" bolkar piece seedhi karo — move count nahi hoga'}]},
    ],tip:'💡 Chess mein respect zaroori hai — jeet ho ya haar. Magnus Carlsen bhi resign ke baad handshake karta hai!'},
  ],
  story: {
    title:'Ahmed Ka Pehla Tournament',
    level:'🏆 Day 6 — Tournament Level',
    paragraphs:[
      {line:'Ahmed ka pehla blitz tournament tha — 16 players, 5 rounds.',ur:'Ahmed\'s first blitz tournament — 16 players, 5 rounds.',words:['tournament','blitz','rounds']},
      {line:'Usne sara notation likha, time manage kiya, aur Italian Game khela.',ur:'He wrote all notation, managed time, and played Italian Game.',words:['notation','time','Italian Game']},
      {line:'Round 4 mein uski position mushkil thi magar woh calm raha aur fork nikala!',ur:'In round 4 his position was difficult but he stayed calm and found a fork!',words:['calm','fork']},
      {line:'Final round mein draw offer accept kiya — 3.5/5 points — 2nd place!',ur:'In the final round he accepted a draw offer — 3.5/5 points — 2nd place!',words:['draw','2nd place']},
      {line:'"Meri pehli rating milegi!" Ahmed ne khushi se kaha. "ELO shuru ho raha hai!"',ur:'"I will get my first rating!" Ahmed said happily. "ELO is starting!"',words:['rating','ELO']},
    ]
  },
  quizzes: [
    {q:'Blitz chess mein kitna waqt hota hai per player?',o:['30 minutess','60 minutes','3-5 minutes','1 hour'],a:2},
    {q:'Notation mein "O-O" ka matlab?',o:['Check','Checkmate','Kingside castling','Queenside castling'],a:2},
    {q:'Touch move rule kya hai?',o:['Piece touch karne se move count nahi','Piece touch karo toh hila chahiye','Sirf pawn pe lagta hai','Clock touch karo toh move'],a:1},
    {q:'ELO rating mein 1800 ka matlab?',o:['Beginner','Club player','World class','Child player'],a:1},
    {q:'"Bxf7+" mein "x" ka matlab?',o:['Check','Good move','Capture','Bad move'],a:2},
    {q:'Tournament mein game ke baad kya karna chahiye?',o:['Jaldi bhaag jao','Analyze game aur review karo','Dobara match maango','Clock reset karo'],a:1},
  ],
  puzzles: [
    {
      id:'d6p1',
      title:'2-Move Checkmate! (★★★★)',
      desc:'White sirf 2 chaalon mein checkmate de sakta hai! Yeh famous "Scholar\'s Mate" variation hai. Pehla move kya hai?',
      difficulty:4,
      hint:'Queen aur Bishop milkar f7 pe attack karte hain — yeh Black ka sabse kamzor square hai!',
      xpBonus:70,
      board:{
        pieces:{
          e1:'K', d1:'Q', f1:'B', g1:'N', h1:'R', a1:'R',
          e4:'P', c2:'P', d2:'P', b2:'P', a2:'P', g2:'P', h2:'P',
          e8:'k', d8:'q', a8:'r', h8:'r', c8:'b',
          e5:'p', d7:'p', c7:'p', b7:'p', a7:'p', g7:'p', h7:'p', f7:'p',
          f6:'n', c6:'n'
        }
      },
      choices:[
        {label:'Bc4 — Bishop c4 pe tayyar!', correct:true, resp:'✅ Bc4! — Bishop f7 pe nazar rakhe, aur agli chaal Qh5# — check aur f7 attack ek saath! 2 move mein game over!'},
        {label:'Qh5 — Queen attack!', correct:false, resp:'❌ Abhi Qh5 jaldi hai! Pehle Bc4 se f7 ko target karo, phir Qh5 overwhelming hoga!'},
        {label:'Nf3 — Develop karo', correct:false, resp:'❌ Nf3 achi developing move hai but yahan 2-move checkmate ka mauka hai — Bc4 pehle!'}
      ]
    }
  ]
},

7: {
  theme: 'ماسٹری اور آگے کا سفر',
  themeEn: 'Mastery & The Road Ahead',
  emoji: '🎓',
  color: '#9B59B6',
  vocab: [
    {w:'Magnus Carlsen', u:'مگنس کارلسن', p:'MAG-nus KARL-sun', ex:'"Magnus Carlsen — world champion aur sabse bada chess player!"', tip:'Norwegian genius — peak rating 2882 (highest ever)'},
    {w:'Garry Kasparov', u:'گیری کاسپاروف', p:'GAR-ee kas-PAR-off', ex:'"Kasparov ne 1997 mein Deep Blue se khela!"', tip:'Greatest player of 20th century — aggressive style'},
    {w:'Bobby Fischer', u:'بابی فشر', p:'BOB-ee FISH-ur', ex:'"Fischer 1972 World Championship — iconic!"', tip:'American legend — genius but controversial'},
    {w:'Puzzles / Tactics Training', u:'پزل پریکٹس', p:'PUZ-ulz', ex:'"Daily 10-20 puzzles — 1 saal mein 200+ ELO gain!"', tip:'Chess.com ya Lichess pe free puzzles — sabse fast improvement'},
    {w:'Stockfish', u:'اسٹاک فش', p:'STOK-fish', ex:'"Stockfish chess engine — super human analysis!"', tip:'World\'s strongest chess engine — free, open source'},
    {w:'Lichess', u:'لائی چیس', p:'lee-CHESS', ex:'"Lichess.org — free chess platform with puzzles & analysis."', tip:'100% free, open source, no ads — best free chess site'},
    {w:'Analyze', u:'تجزیہ کرنا', p:'AN-uh-lyz', ex:'"Har game ke baad analyze karo — mistakes dhundo!"', tip:'Post-game analysis = fastest improvement path'},
    {w:'Grandmaster (GM)', u:'گرینڈ ماسٹر', p:'GRAND-mas-ter', ex:'"GM title — chess ka sabse bada khitab!"', tip:'2500+ ELO rating required — only ~1700 GMs in the world'},
  ],
  sentences: [
    {en:'Solve chess puzzles every day to improve your tactics.',ur:'Tactics behtar karne ke liye roz chess puzzles solve karo.',words:[{e:'Solve puzzles',u:'puzzles solve karo'},{e:'every day',u:'roz'},{e:'improve tactics',u:'tactics behtar karo'}],reply:'Consistency hi success ka secret hai!'},
    {en:'Analyze your games to find your mistakes.',ur:'Apni galtiyan dhundhne ke liye games analyze karo.',words:[{e:'Analyze',u:'tajziya karo'},{e:'games',u:'games'},{e:'mistakes',u:'galtiyan'}],reply:'Blunders se seekhna fastest improvement hai!'},
    {en:'Study classic games by Kasparov and Fischer.',ur:'Kasparov aur Fischer ki classic games study karo.',words:[{e:'Study',u:'parho'},{e:'classic games',u:'mashhoor games'},{e:'Kasparov',u:'Kasparov'}],reply:'Master ki khel se bahut kuch seekhte hain!'},
    {en:'Play regularly and never stop learning.',ur:'Regularly khelo aur seekhna kabhi mat chhhoro.',words:[{e:'Play regularly',u:'regularly khelo'},{e:'never stop',u:'kabhi mat chhhoro'},{e:'learning',u:'seekhna'}],reply:'Chess journey kabhi khatam nahi hoti!'},
    {en:'You have completed the 7-day chess course. Congratulations!',ur:'Aap ne 7 din ka chess course mukammal kar liya. Mubarak ho!',words:[{e:'completed',u:'mukammal kiya'},{e:'7-day course',u:'7 din ka course'},{e:'Congratulations',u:'Mubarak ho'}],reply:'Ab tum real player ho! Chess.com ya Lichess pe shuru karo!'},
  ],
  grammar: [
    {title:'Improvement Roadmap — Aage Ka Safar',rules:[
      {formula:'Beginner (0-1000): Learn rules, basic tactics, simple endgames',examples:[{en:'Focus: Tactics puzzles + 3 opening systems',ur:'Focus: Tactics puzzles + 3 openings — Italian, Queens Gambit, King\'s Indian'},{en:'Tool: Lichess.org (free) — play & analyze',ur:'Tool: Lichess.org (free) — khelo aur analyze karo'}]},
      {formula:'Intermediate (1000-1500): Middlegame plans, endgame theory',examples:[{en:'Study 1 complete opening deeply (both sides)',ur:'Ek puri opening deeply seekho (dono tarfein)'},{en:'Solve 20+ tactics puzzles daily',ur:'Daily 20+ tactics puzzles solve karo'}]},
          {formula:'Advanced (1500+): Deep analysis, openings repertoire',examples:[{en:'Build a complete opening repertoire with 1.e4 or 1.d4',ur:'1.e4 ya 1.d4 se puri opening repertoire banao'},{en:'Study master games + use Stockfish analysis',ur:'Master games parho + Stockfish se analyze karo'}]},
    ],tip:'💡 1 saal mein 500+ ELO improve ho sakti hai agar: roz 20 puzzles + 2 games + 1 analyzed game!'},
    {title:'Resources — Yeh Use Karo',rules:[
      {formula:'Lichess.org — FREE, best for learning',examples:[{en:'Free puzzles, analysis, lessons, tournaments',ur:'Free puzzles, analysis, lessons, tournaments'},{en:'No ads, no paywall — everything free forever',ur:'Koi ad nahi, koi paywall nahi — sab hamesha free'}]},
      {formula:'Chess.com — Popular, lots of content',examples:[{en:'Puzzles, lessons, Play Magnus feature',ur:'Puzzles, lessons, Magnus se khelo feature'},{en:'Free basic, Premium for more content',ur:'Basic free, zyada content ke liye premium'}]},
    ],tip:'💡 Start on Lichess — it\'s 100% free. Magnus Carlsen khud Lichess pe anonymous account se khelta hai!'},
  ],
  story: {
    title:'Ahmed — 7 Din Baad',
    level:'🎓 Day 7 — Grand Finale',
    paragraphs:[
      {line:'7 din ho gaye. Ahmed ne pieces, rules, openings, tactics, endgame, tournament sab seekh liya.',ur:'7 days passed. Ahmed had learned pieces, rules, openings, tactics, endgame, tournament — everything.',words:['7 din','pieces','rules','openings','tactics']},
      {line:'"Kya main ab chess player hoon?" usne Sara se poochha.',ur:'"Am I a chess player now?" he asked Sara.',words:['chess player']},
      {line:'Sara muskurai: "Haan! Magar yeh sirf shuruwat hai — chess zindagi bhar seekhte rehte hain!"',ur:'Sara smiled: "Yes! But this is just the beginning — chess is a lifelong journey!"',words:['shuruwat','lifelong']},
      {line:'Ahmed ne Lichess pe account banaya, pehla rated game khela, aur rating 800 se shuru hui.',ur:'Ahmed created a Lichess account, played his first rated game, and rating started from 800.',words:['Lichess','rated','800']},
      {line:'"1 saal baad main 1500 hounga!" usne socha. "Aur shayad Grand Master bhi...!" — Chess ka safar shuru ho gaya!',ur:'"In 1 year I will be 1500!" he thought. "And maybe Grandmaster too...!" — The chess journey had begun!',words:['1500','Grandmaster','safar']},
    ]
  },
  quizzes: [
    {q:'Magnus Carlsen ka peak ELO rating?',o:['2700','2750','2800','2882'],a:3},
    {q:'Lichess.org kyun best hai beginners ke liye?',o:['Subscription zaroori','100% free aur open source','Sirf Magnus khelta hai','Mobile nahi chalta'],a:1},
    {q:'Fastest improvement ke liye roz kya karna chahiye?',o:['Sirf games khelo','Sirf books parho','Puzzles + Games + Analysis','TV dekhte dekhte khelo'],a:2},
    {q:'Grandmaster (GM) ke liye minimum rating?',o:['1800','2000','2300','2500'],a:3},
    {q:'Post-game analysis kyun karna chahiye?',o:['Points ke liye','Galtiyan dhundo aur seekho','Time waste','Rating ke liye'],a:1},
    {q:'Stockfish kya hai?',o:['Chess player','Chess tournament','Chess engine/computer','Chess book'],a:2},
    {q:'7 din mein chess course main kya seekha?',o:['Sirf rules','Rules, tactics, openings aur endgame sab','Sirf openings','Sirf endgame'],a:1},
    {q:'Chess ki lifelong journey ke liye sabse zaroori cheez?',o:['Expensive training','Consistency aur practice','Natural talent sirf','Expensive software'],a:1},
  ],
  puzzles: [
    {
      id:'d7p1',
      title:'🏆 Final Challenge — Checkmate in 3! (★★★★★)',
      desc:'Yeh tumhara FINAL chess puzzle hai! White 3 chaalon mein checkmate de sakta hai. Pehli aur sabse powerful move kya hai? Sochho — Queen, Bishop coordination use karo!',
      difficulty:5,
      hint:'Queen ko h5 pe le jao — check dena aur Black ko force karna hai ek specific corner mein! Phir Bishop aur Queen milkar corner mein checkmate denge!',
      xpBonus:100,
      board:{
        pieces:{
          g1:'K', h2:'R', g2:'P', h3:'P',
          g8:'k', g7:'p', h7:'p', f7:'p',
          d3:'Q', c4:'B'
        }
      },
      choices:[
        {label:'Qd8+ — Queen d8 check!', correct:false, resp:'❌ Qd8+ ke baad Black King f-file pe jata hai — checkmate in 3 mushkil ho jaata hai!'},
        {label:'Qh7+! — Queen h7 check!', correct:true, resp:'✅ BRILLIANT! Qh7+! Kxh7 ke baad Rh2+ Kg8 aur phir Rh8# — ya Kf8 pe Qh8# — Checkmate in 3! 🏆 7-Day Chess Journey Complete!'},
        {label:'Bxf7+ — Bishop sacrifice!', correct:false, resp:'❌ Bxf7+ check hai but 3-move checkmate nahi — Qh7+ pehle sabse precise hai!'}
      ]
    }
  ]
},

};// end ALL_DAYS['chess']

ALL_DAYS['zh'] = {
1: {
  theme: 'پہلی ملاقات',
  themeEn: '第一次见面 (First Meeting)',
  emoji: '🇨🇳',
  color: '#E74C3C',
  vocab: [
    {w:'你好 (Nǐ hǎo)',u:'ہیلو / ہائے',p:'nee HOW',ex:'"你好！我叫Ahmed。"',tip:'Sabse common Chinese greeting!'},
    {w:'您好 (Nín hǎo)',u:'آداب / ادب سے ہیلو',p:'neen HOW',ex:'"您好！很高兴认识您。"',tip:'Formal version — elders/strangers ke liye'},
    {w:'再见 (Zàijiàn)',u:'خدا حافظ',p:'dzye-JYEN',ex:'"再见！明天见！"',tip:'Formal goodbye'},
    {w:'谢谢 (Xièxiè)',u:'شکریہ',p:'shyeh-SHYEH',ex:'"谢谢你的帮助！"',tip:'Double xie = extra thanks!'},
    {w:'不客气 (Bù kèqì)',u:'کوئی بات نہیں',p:'boo kuh-CHEE',ex:'"谢谢！— 不客气！"',tip:'"You\'re welcome" ka jawab'},
    {w:'对不起 (Duìbuqǐ)',u:'معاف کیجیے',p:'dway-boo-CHEE',ex:'"对不起，我来晚了。"',tip:'Sorry — bohot zaroori'},
    {w:'没关系 (Méiguānxi)',u:'کوئی بات نہیں',p:'may-gwaan-SHEE',ex:'"没关系，没问题！"',tip:'It\'s okay — reassurance ke liye'},
    {w:'我叫… (Wǒ jiào)',u:'میرا نام ہے',p:'waw JYOW',ex:'"我叫Ahmed，你叫什么？"',tip:'Naam batane ka tarika'},
    {w:'你叫什么名字？',u:'آپ کا نام کیا ہے؟',p:'nee JYOW shum-muh ming-dzuh',ex:'"你好！你叫什么名字？"',tip:'Naam poochna'},
    {w:'很高兴认识你',u:'آپ سے مل کر خوشی ہوئی',p:'hun gow-shing run-shih nee',ex:'"很高兴认识你！"',tip:'Nice to meet you!'},
    {w:'你好吗？(Nǐ hǎo ma?)',u:'آپ کیسے ہیں؟',p:'nee how ma',ex:'"你好吗？— 我很好！"',tip:'"Ma" makes it a question!'},
    {w:'我很好 (Wǒ hěn hǎo)',u:'میں ٹھیک ہوں',p:'waw hun how',ex:'"你好吗？— 我很好，谢谢！"',tip:'"Hěn" = very'},
  ],
  sentences: [
    {en:'你好！我叫Ahmed。',ur:'Nǐ hǎo! Wǒ jiào Ahmed.',words:[{e:'你好',u:'nee how'},{e:'我叫',u:'mera naam hai'}],reply:'你好Ahmed！我叫Sara。很高兴认识你！'},
    {en:'你是哪里人？',ur:'Aap kahan se hain?',words:[{e:'你是',u:'aap hain'},{e:'哪里人',u:'kahan ke'}],reply:'我是巴基斯坦人。你呢？'},
    {en:'你好吗？',ur:'Aap kaise hain?',words:[{e:'你好吗',u:'aap kaise hain'}],reply:'我很好，谢谢！你呢？'},
    {en:'很高兴认识你！',ur:'Aapse milke khushi hui!',words:[{e:'很高兴',u:'khushi hui'},{e:'认识你',u:'aapse milke'}],reply:'我也很高兴认识你！'},
    {en:'对不起，请再说一遍。',ur:'Maaf kijiye, dobara bolein.',words:[{e:'对不起',u:'maaf kijiye'},{e:'再说一遍',u:'dobara bolein'}],reply:'没关系！我再说一遍。'},
    {en:'谢谢你！',ur:'Shukriya!',words:[{e:'谢谢',u:'shukriya'},{e:'你',u:'aap'}],reply:'不客气！'},
  ],
  grammar: [
    {title:'Chinese Basic Sentence — Subject + Verb + Object',rules:[
      {formula:'我 + 是 + noun (Main + hoon + noun)',examples:[{en:'我是学生。',ur:'Main student hoon.'},{en:'我是巴基斯坦人。',ur:'Main Pakistani hoon.'},{en:'我是Ahmed。',ur:'Main Ahmed hoon.'}]},
      {formula:'你 + 是 + ? (Aap + hain + ?)',examples:[{en:'你是老师吗？',ur:'Kya aap teacher hain?'},{en:'你是哪里人？',ur:'Aap kahan se hain?'}]},
    ],tip:'💡 Chinese mein verb conjugation nahi hoti! 我是/你是/他是 — same "是" sab ke liye!'},
    {title:'吗 (ma) — Question Particle',rules:[
      {formula:'Statement + 吗 = Question',examples:[{en:'你好。→ 你好吗？',ur:'You are well → Are you well?'},{en:'你是学生。→ 你是学生吗？',ur:'Statement → Question'}]},
    ],tip:'💡 Sirf "吗" lagao sentence ke end mein — question ban jaata hai! Bohot aasaan!'},
    {title:'Tones — Swar (Very Important!)',rules:[
      {formula:'1st Tone (ā) — flat & high',examples:[{en:'mā (妈) = Mother',ur:'Flat, high tone rakho'},{en:'bā (八) = Eight',ur:'Oopar se flat'}]},
      {formula:'2nd Tone (á) — rising',examples:[{en:'má (麻) = Numb',ur:'Upar jaana jaise "huh?"'},{en:'bá (拔) = Pull',ur:'Rising tone'}]},
    ],tip:'💡 Chinese mein 4 tones hain — galat tone galat meaning! Practice karo!'},
  ],
  story: {
    title:"Ahmad Meets His Chinese Friend",
    level:'⭐ 第1天 — Bilkul Aasaan',
    paragraphs:[
      {line:'我叫Ahmad。我是巴基斯坦人。',ur:'Main Ahmad hoon. Main Pakistani hoon.',words:['巴基斯坦','叫']},
      {line:'今天，我见到了我的新朋友王明。',ur:'Aaj mein apne naye dost Wang Ming se mila.',words:['今天','朋友']},
      {line:'"你好！我叫王明。很高兴认识你！"',ur:'"Nǐ hǎo! Main Wang Ming hoon. Tumse milke khushi hui!"',words:['高兴','认识']},
      {line:'"你好！我也很高兴认识你！你是哪里人？"',ur:'"Nǐ hǎo! Mujhe bhi khushi hui! Aap kahan se hain?"',words:['哪里','也']},
      {line:'"我是中国人，来自北京。"',ur:'"Main Chinese hoon, Beijing se."',words:['中国','北京']},
      {line:'"太好了！我想学中文！"说Ahmad。',ur:'"Zabardast! Main Chinese seekhna chahta hoon!" Ahmad ne kaha.',words:['太好了','想学']},
    ]
  },
  quizzes: [
    {q:'"你好" ka matlab?',o:['Goodbye','Thank you','Hello','Sorry'],a:2},
    {q:'"谢谢" ka jawab kya hai?',o:['你好','不客气','再见','对不起'],a:1},
    {q:'Chinese mein question kaise banate hain?',o:['Word order badlo','? lagao','吗 lagao end mein','Tone badlo'],a:2},
    {q:'"我叫" ka matlab?',o:['Main chahta hoon','Mere paas hai','Mera naam hai','Main hoon'],a:2},
    {q:'"没关系" kab kehte hain?',o:['Kuch maangna ho','Sorry ke jawab mein','Goodbye pe','Khaana khate waqt'],a:1},
    {q:'Chinese mein verb conjugation?',o:['Har pronoun ke liye alag','Same rehta hai','Tense se badalta hai','Subject se badalta hai'],a:1},
  ]
},
2: {
  theme: 'خاندان',
  themeEn: '家庭 (Family)',
  emoji: '👨‍👩‍👧‍👦',
  color: '#E74C3C',
  vocab: [
    {w:'爸爸 (Bàba)',u:'ابا / والد',p:'baa-BAA',ex:'"我爸爸是医生。"',tip:'Informal "dad"'},
    {w:'妈妈 (Māma)',u:'اماں / والدہ',p:'maa-MAA',ex:'"我妈妈做饭很好吃。"',tip:'Informal "mom"'},
    {w:'哥哥 (Gēgē)',u:'بڑا بھائی',p:'guh-GUH',ex:'"我哥哥很聪明。"',tip:'Elder brother'},
    {w:'弟弟 (Dìdi)',u:'چھوٹا بھائی',p:'dee-DEE',ex:'"我弟弟五岁了。"',tip:'Younger brother'},
    {w:'姐姐 (Jiějiě)',u:'بڑی بہن',p:'jyeh-JYEH',ex:'"我姐姐是老师。"',tip:'Elder sister'},
    {w:'妹妹 (Mèimei)',u:'چھوٹی بہن',p:'may-MAY',ex:'"我妹妹很可爱。"',tip:'Younger sister'},
    {w:'爷爷 (Yéye)',u:'دادا',p:'yeh-YEH',ex:'"我爷爷八十岁了。"',tip:'Paternal grandfather'},
    {w:'奶奶 (Nǎinai)',u:'دادی',p:'nigh-NIGH',ex:'"我奶奶做的饺子最好吃！"',tip:'Paternal grandmother'},
  ],
  sentences: [
    {en:'我有一个大家庭。',ur:'Mera bara khandan hai.',words:[{e:'我有',u:'mere paas hai'},{e:'大家庭',u:'bara khandan'}],reply:'你家有几口人？'},
    {en:'我有两个哥哥和一个妹妹。',ur:'Mere do bare bhai aur ek choti behan hai.',words:[{e:'两个哥哥',u:'do bare bhai'},{e:'一个妹妹',u:'ek choti behan'}],reply:'哇，大家庭！'},
    {en:'我爸爸是老师。',ur:'Mere walid teacher hain.',words:[{e:'爸爸',u:'walid'},{e:'是老师',u:'teacher hain'}],reply:'很好！你妈妈呢？'},
    {en:'我爱我的家人。',ur:'Main apne khandan se pyaar karta hoon.',words:[{e:'我爱',u:'main pyaar karta hoon'},{e:'家人',u:'khandan'}],reply:'家人是最重要的！'},
  ],
  grammar: [
    {title:'有 (yǒu) — Paas Hona / Hona',rules:[
      {formula:'Subject + 有 + Object',examples:[{en:'我有一个哥哥。',ur:'Mera ek bara bhai hai.'},{en:'他有两个孩子。',ur:'Uske do bachay hain.'},{en:'我没有宠物。',ur:'Mere paas koi pet nahi.'}]},
    ],tip:'💡 有 = have, 没有 = don\'t have — bohot zaroori!'},
    {title:'Numbers 1-10 — 数字',rules:[
      {formula:'一二三四五 (1-5)',examples:[{en:'一(yī)=1, 二(èr)=2, 三(sān)=3',ur:'Pehle teen yaad karo'},{en:'四(sì)=4, 五(wǔ)=5',ur:'Practice karo!'}]},
      {formula:'六七八九十 (6-10)',examples:[{en:'六(liù)=6, 七(qī)=7, 八(bā)=8',ur:'Agle teen'},{en:'九(jiǔ)=9, 十(shí)=10',ur:'Ek se das!'}]},
    ],tip:'💡 Chinese numbers bohot aasaan hain — sirf 10 yaad karo, phir sab ban jaate hain!'},
  ],
  story: {
    title:"Ahmad's Big Family",
    level:'⭐ 第2天 — Aasaan',
    paragraphs:[
      {line:'我叫Ahmad，我有一个大家庭。',ur:'Main Ahmad hoon, mera bara khandan hai.',words:['大家庭']},
      {line:'我有爸爸、妈妈、两个哥哥和一个妹妹。',ur:'Mere walid, ammi, do bare bhai aur ek choti behan hain.',words:['两个','妹妹']},
      {line:'我爸爸是老师，我妈妈做饭很好吃！',ur:'Mere walid teacher hain, meri ammi ka khaana zabardast hai!',words:['好吃']},
      {line:'我爱我的家人，他们是我的全部。',ur:'Main apne khandan se pyaar karta hoon, woh meri poori duniya hain.',words:['全部']},
    ]
  },
  quizzes: [
    {q:'"爸爸" ka matlab?',o:['Ammi','Walid','Bhai','Behan'],a:1},
    {q:'"有" ka matlab?',o:['Chahna','Hona/Paas hona','Jaana','Ana'],a:1},
    {q:'Younger sister Chinese mein?',o:['姐姐','妹妹','哥哥','弟弟'],a:1},
    {q:'"我没有" ka matlab?',o:['Mere paas hai','Main chahta hoon','Mere paas nahi','Main nahi hoon'],a:2},
  ]
},
};// end ALL_DAYS['zh']

// ── ARABIC ──
ALL_DAYS['ar'] = {
1: {
  theme: 'پہلی ملاقات',
  themeEn: 'أول لقاء (First Meeting)',
  emoji: '🇸🇦',
  color: '#9B59B6',
  vocab: [
    {w:'السلام عليكم',u:'السلام علیکم',p:'as-sa-LAA-mu a-LAY-kum',ex:'"السلام عليكم! كيف حالك؟"',tip:'Sab se aham Islamic greeting — 1.8 billion Muslims!'},
    {w:'وعليكم السلام',u:'وعلیکم السلام',p:'wa-a-LAY-kum as-sa-LAAM',ex:'"السلام عليكم — وعليكم السلام!"',tip:'Salam ka jawab — zaroori hai dena!'},
    {w:'مرحبا',u:'ہیلو / مرحبا',p:'mar-ha-BAA',ex:'"مرحبا! اسمي أحمد."',tip:'Informal hello — har jagah chalata hai'},
    {w:'شكراً',u:'شکریہ',p:'SHUK-ran',ex:'"شكراً جزيلاً!"',tip:'"Shukran jazelan" = bohot shukriya'},
    {w:'عفواً',u:'معاف کیجیے / کوئی بات نہیں',p:'AFF-wan',ex:'"عفواً، لم أفهم."',tip:'Sorry bhi, you\'re welcome bhi'},
    {w:'اسمي…',u:'میرا نام ہے',p:'IS-mee',ex:'"اسمي أحمد. ما اسمك؟"',tip:'"Ismee" = my name is'},
    {w:'ما اسمك؟',u:'آپ کا نام کیا ہے؟',p:'ma IS-mak',ex:'"مرحبا! ما اسمك؟"',tip:'"Ma" = what, "ismak" = your name'},
    {w:'كيف حالك؟',u:'آپ کیسے ہیں؟',p:'KAY-fa HAA-lak',ex:'"السلام عليكم! كيف حالك؟"',tip:'Common greeting after salam'},
    {w:'بخير، الحمد لله',u:'ٹھیک ہوں، الحمد للہ',p:'bi-KHAYR al-HUM-du-lil-LAH',ex:'"كيف حالك؟ — بخير، الحمد لله!"',tip:'Hamesha "Alhamdulillah" kehna sunnah hai'},
    {w:'أهلاً وسهلاً',u:'خوش آمدید',p:'AH-lan wa-SAH-lan',ex:'"أهلاً وسهلاً بك في باكستان!"',tip:'Welcome — mehman nawazi ka alfaz'},
    {w:'مع السلامة',u:'خدا حافظ',p:'ma-as-sa-LAA-ma',ex:'"مع السلامة! إلى اللقاء!"',tip:'Formal goodbye in Arabic'},
    {w:'إلى اللقاء',u:'پھر ملیں گے',p:'i-lal-li-QAA',ex:'"مع السلامة! إلى اللقاء!"',tip:'See you again'},
  ],
  sentences: [
    {en:'السلام عليكم! اسمي أحمد.',ur:'As-Salamu Alaikum! Mera naam Ahmad hai.',words:[{e:'السلام عليكم',u:'as-salamu alaikum'},{e:'اسمي',u:'mera naam hai'}],reply:'وعليكم السلام! اسمي سارة. أهلاً وسهلاً!'},
    {en:'كيف حالك؟',ur:'Aap kaise hain?',words:[{e:'كيف',u:'kaise'},{e:'حالك',u:'aap ka haal'}],reply:'بخير، الحمد لله! وأنت؟'},
    {en:'من أين أنت؟',ur:'Aap kahan se hain?',words:[{e:'من أين',u:'kahan se'},{e:'أنت',u:'aap'}],reply:'أنا من باكستان. وأنت؟'},
    {en:'شكراً جزيلاً!',ur:'Bohot bohot shukriya!',words:[{e:'شكراً',u:'shukriya'},{e:'جزيلاً',u:'bohot zyada'}],reply:'عفواً! لا شكر على واجب!'},
    {en:'تشرفنا بمعرفتك.',ur:'Aapse milkar khushi hui.',words:[{e:'تشرفنا',u:'sharaf hua'},{e:'بمعرفتك',u:'aapse milke'}],reply:'الشرف لي! أنا سعيد بلقائك أيضاً.'},
    {en:'عفواً، هل تتكلم الأردية؟',ur:'Maaf kijiye, kya aap Urdu bolte hain?',words:[{e:'عفواً',u:'maaf kijiye'},{e:'الأردية',u:'Urdu'}],reply:'نعم، أتكلم قليلاً! أنا أتعلم.'},
  ],
  grammar: [
    {title:'أنا / أنت / هو / هي — Zameer',rules:[
      {formula:'أنا = Main (I)',examples:[{en:'أنا أحمد.',ur:'Main Ahmad hoon.'},{en:'أنا من باكستان.',ur:'Main Pakistan se hoon.'}]},
      {formula:'أنت = Aap/Tu (You masc.)',examples:[{en:'أنت طالب؟',ur:'Kya aap student hain?'},{en:'من أين أنت؟',ur:'Aap kahan se hain?'}]},
      {formula:'هو/هي = Woh (He/She)',examples:[{en:'هو مدرّس.',ur:'Woh teacher hain.'},{en:'هي طبيبة.',ur:'Woh doctor hain.'}]},
    ],tip:'💡 Arabic mein "is/am/are" nahi likhte — sirf "أنا أحمد" = I Ahmed (means I am Ahmed)!'},
    {title:'مذكر و مؤنث — Masculine & Feminine',rules:[
      {formula:'مذكر (Masculine) — no ending',examples:[{en:'طالب = male student',ur:'Larka student'},{en:'مدرّس = male teacher',ur:'Mard teacher'}]},
      {formula:'مؤنث (Feminine) — add ة',examples:[{en:'طالبة = female student',ur:'Larki student'},{en:'مدرّسة = female teacher',ur:'Aurat teacher'}]},
    ],tip:'💡 ة (ta marbuta) lagao — female ban jaata hai! Urdu mein bhi yahi hota hai!'},
    {title:'نعم و لا — Haan aur Nahi',rules:[
      {formula:'نعم (naam) = Haan',examples:[{en:'هل أنت طالب؟ نعم!',ur:'Kya aap student hain? Haan!'},{en:'نعم، أنا من باكستان.',ur:'Haan, main Pakistan se hoon.'}]},
      {formula:'لا (laa) = Nahi',examples:[{en:'لا، أنا لست من مصر.',ur:'Nahi, main Egypt se nahi hoon.'},{en:'لا شكر على واجب!',ur:'Koi shukriya nahi (you\'re welcome)!'}]},
    ],tip:'💡 نعم/لا = haan/nahi — Arabic aur Urdu mein bohot similar alfaz milenge!'},
  ],
  story: {
    title:"Ahmad Ka Pehla Arabi Safar",
    level:'⭐ اليوم الأول — Bilkul Aasaan',
    paragraphs:[
      {line:'اسمي أحمد. أنا من باكستان.',ur:'Mera naam Ahmad hai. Main Pakistan se hoon.',words:['باكستان','اسمي']},
      {line:'اليوم، أتعلم اللغة العربية لأول مرة!',ur:'Aaj main pehli baar Arabic seekh raha hoon!',words:['اليوم','اللغة العربية']},
      {line:'مدرّستي تقول: "السلام عليكم يا طلاب!"',ur:'Meri ustaadni kehti hain: "As-Salamu Alaikum talaba!"',words:['مدرّستي','طلاب']},
      {line:'"وعليكم السلام!" نقول جميعاً.',ur:'"Wa Alaikum Assalam!" hum sab kehte hain.',words:['جميعاً']},
      {line:'"كيف حالكم؟" تسألنا. "بخير، الحمد لله!"',ur:'"Aap sab kaise hain?" Woh poochti hain. "Theek hain, Alhamdulillah!"',words:['تسألنا']},
      {line:'أفكر: "اللغة العربية جميلة! سأتعلمها!"',ur:'Main sochta hoon: "Arabic kitni khoobsurat hai! Main zaroor seekhunga!"',words:['جميلة','سأتعلمها']},
    ]
  },
  quizzes: [
    {q:'Muslim greeting kya hai?',o:['مرحبا','السلام عليكم','شكراً','مع السلامة'],a:1},
    {q:'"شكراً" ka jawab?',o:['السلام عليكم','كيف حالك','عفواً','نعم'],a:2},
    {q:'Arabic mein "is/am/are" kaise likhte hain?',o:['است','ہے','Nahi likhte','هو'],a:2},
    {q:'Female noun banane ke liye kya lagate hain?',o:['ال','ة','و','ی'],a:1},
    {q:'"بخير، الحمد لله" kab kehte hain?',o:['Khaana khate waqt','Kaise hain? ke jawab mein','Milne pe','Alvida pe'],a:1},
    {q:'"اسمي" ka matlab?',o:['Mera naam hai','Main hoon','Mere paas hai','Main chahta hoon'],a:0},
  ]
},
2: {
  theme: 'خاندان',
  themeEn: 'العائلة (Family)',
  emoji: '👨‍👩‍👧‍👦',
  color: '#9B59B6',
  vocab: [
    {w:'الأب',u:'والد / ابا',p:'al-AB',ex:'"أبي طبيب."',tip:'"أبي" = my father'},
    {w:'الأم',u:'والدہ / اماں',p:'al-UMM',ex:'"أمي تطبخ جيداً."',tip:'"أمي" = my mother'},
    {w:'الأخ',u:'بھائی',p:'al-UKHT',ex:'"أخي يدرس في الجامعة."',tip:'"أخي" = my brother'},
    {w:'الأخت',u:'بہن',p:'al-UKHT',ex:'"أختي معلمة."',tip:'"أختي" = my sister'},
    {w:'الابن',u:'بیٹا',p:'al-IBN',ex:'"ابني عمره خمس سنوات."',tip:'Son'},
    {w:'البنت',u:'بیٹی',p:'al-BINT',ex:'"بنتي تدرس في المدرسة."',tip:'Daughter/Girl'},
    {w:'الجد',u:'دادا / نانا',p:'al-JADD',ex:'"جدي في الرياض."',tip:'Grandfather'},
    {w:'الجدة',u:'دادی / نانی',p:'al-JAD-da',ex:'"جدتي تصنع أحلى الطعام!"',tip:'Grandmother'},
  ],
  sentences: [
    {en:'عائلتي كبيرة وسعيدة.',ur:'Mera khandan bara aur khush hai.',words:[{e:'عائلتي',u:'mera khandan'},{e:'كبيرة',u:'bara'},{e:'سعيدة',u:'khush'}],reply:'ما شاء الله! كم عدد أفراد عائلتك؟'},
    {en:'لدي أخان وأخت.',ur:'Mere do bhai aur ek behan hai.',words:[{e:'لدي',u:'mere paas hai'},{e:'أخان',u:'do bhai'},{e:'أخت',u:'ek behan'}],reply:'ما شاء الله، عائلة كبيرة!'},
    {en:'أبي طبيب وأمي معلمة.',ur:'Mere walid doctor aur ammi teacher hain.',words:[{e:'أبي طبيب',u:'walid doctor'},{e:'أمي معلمة',u:'ammi teacher'}],reply:'ما شاء الله! عائلة متعلمة!'},
    {en:'أحب عائلتي كثيراً.',ur:'Main apne khandan se bohot pyaar karta hoon.',words:[{e:'أحب',u:'pyaar karta hoon'},{e:'عائلتي',u:'mera khandan'},{e:'كثيراً',u:'bohot zyada'}],reply:'ما شاء الله! العائلة هي كل شيء!'},
  ],
  grammar: [
    {title:'لدي / عندي — Mere Paas Hai',rules:[
      {formula:'لدي + noun (Mere paas + cheez)',examples:[{en:'لدي أخ.',ur:'Mera ek bhai hai.'},{en:'لدي ثلاثة أبناء.',ur:'Mere teen bete hain.'}]},
      {formula:'ليس لدي (Mere paas nahi)',examples:[{en:'ليس لدي أخت.',ur:'Meri behan nahi.'},{en:'ليس لدي حيوان أليف.',ur:'Mere paas pet nahi.'}]},
    ],tip:'💡 "لدي" = I have, "ليس لدي" = I don\'t have — Urdu "mere paas" jaise!'},
    {title:'المثنى — Do Ki Ginti (Dual)',rules:[
      {formula:'Singular + ان = Two',examples:[{en:'أخ (one brother) → أخان (two brothers)',ur:'Ek bhai → do bhai'},{en:'بنت (one girl) → بنتان (two girls)',ur:'Ek larki → do larkian'}]},
    ],tip:'💡 Arabic mein "do" ke liye special form hoti hai — Urdu mein nahi hoti!'},
  ],
  story: {
    title:"Ahmad Ki Pyaari Family",
    level:'⭐ اليوم الثاني — Aasaan',
    paragraphs:[
      {line:'اسمي أحمد، ولدي عائلة رائعة.',ur:'Mera naam Ahmad hai, mere paas ek shandar khandan hai.',words:['رائعة']},
      {line:'أبي طبيب صبور ومحبوب.',ur:'Mere walid sabr wale aur mehboob doctor hain.',words:['صبور','محبوب']},
      {line:'أمي تطبخ أفضل البرياني في العالم!',ur:'Meri ammi duniya ki sabse achi biryani banati hain!',words:['أفضل','البرياني']},
      {line:'لدي أخ كبير وأخت صغيرة.',ur:'Mera ek bara bhai aur ek choti behan hai.',words:['أخ كبير','أخت صغيرة']},
      {line:'أحب عائلتي جداً. هم عالمي كله!',ur:'Main apne khandan se bohot pyaar karta hoon. Woh meri poori duniya hain!',words:['أحب','عالمي']},
    ]
  },
  quizzes: [
    {q:'"الأم" ka matlab?',o:['Walid','Ammi','Bhai','Behan'],a:1},
    {q:'"لدي" ka matlab?',o:['Main chahta hoon','Mere paas hai','Mera naam hai','Main jata hoon'],a:1},
    {q:'Arabic mein "do bhai" kaise kehte hain?',o:['أخان','أخ','أخوان','إخوة'],a:0},
    {q:'"ليس لدي" ka matlab?',o:['Mere paas hai','Main chahta hoon','Mere paas nahi','Main jata hoon'],a:2},
    {q:'"ما شاء الله" kab kehte hain?',o:['Kuch bura sune','Kuch acha sune','Alvida pe','Khaana khate waqt'],a:1},
  ]
},
};// end ALL_DAYS['ar']