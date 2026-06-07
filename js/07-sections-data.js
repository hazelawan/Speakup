// ══════════════════════════════════════════════════
// SpeakUp v8 — 07-sections-data.js
// ALL_SECTIONS per language + Chess + Python data
// ══════════════════════════════════════════════════

// ============================================================
// ALL SECTIONS DATA — per language
// ============================================================
const ALL_SECTIONS = {};
ALL_SECTIONS['en'] = {
  1: {
    title:'Basic English — Buniyaad',
    titleUr:'بنیادی انگریزی',
    icon:'🌱',
    color:'#58CC02',
    colorDark:'#46A300',
    desc:'Pehli baar English bolna seekho — greetings, family, time aur roz ki baatein',
    days:[1,10],
    units:[
      {num:1, title:'Hello & Greetings', icon:'👋', days:[1,5], color:'#58CC02',
       topics:['Hello / Hi / Goodbye','Good morning / evening / night','How are you?','Nice to meet you','My name is...'],
       goal:'5 din mein basic greetings master karo'},
      {num:2, title:'Family & People', icon:'👨‍👩‍👧', days:[6,10], color:'#7CDB3C',
       topics:['Family members','Describing people','Have / Has','Adjectives','Plural nouns'],
       goal:'5 din mein family ke baare mein baat karna seekho'},
    ]
  },
  2: {
    title:'Daily Life',
    titleUr:'روزمرہ کی زندگی',
    icon:'🏡',
    color:'#1CB0F6',
    colorDark:'#0A91D1',
    desc:'Waqt batana, khaana, shopping aur school ki baatein seekho',
    days:[11,20],
    units:[
      {num:3, title:'Time & Daily Routine', icon:'🕐', days:[11,15], color:'#1CB0F6',
       topics:['Clock / Time','Daily routine','Present tense (I go, I eat)','Frequency words','What do you do?'],
       goal:'5 din mein waqt aur routine bayan karna seekho'},
      {num:4, title:'Food & Shopping', icon:'🛒', days:[16,20], color:'#5BCBF5',
       topics:['Food vocabulary','At the restaurant','Shopping phrases','Numbers (1-100)','Prices & money'],
       goal:'5 din mein khaana mangwana aur shopping karna seekho'},
    ]
  },
  3: {
    title:'Out & About — Bahar Ki Duniya',
    titleUr:'باہر کی دنیا',
    icon:'🌍',
    color:'#CE82FF',
    colorDark:'#9400D3',
    desc:'Safar, hospital, school aur office ki zaroorat ki English',
    days:[21,30],
    units:[
      {num:5, title:'Travel & Places', icon:'✈️', days:[21,25], color:'#CE82FF',
       topics:['Directions & places','Transport','At the airport','Hotel & accommodation','Asking for help'],
       goal:'5 din mein safar ki English seekho'},
      {num:6, title:'Work & Education', icon:'💼', days:[26,30], color:'#D9A0FF',
       topics:['Jobs & professions','School & university','Past tense (went, did)','Writing emails','Formal vs informal'],
       goal:'5 din mein kaam aur taleem ki English seekho'},
    ]
  },
  4: {
    title:'Conversations — Guftagoo',
    titleUr:'گفتگو',
    icon:'💬',
    color:'#FF9600',
    colorDark:'#CF7800',
    desc:'Real conversations, emotions, opinions aur advanced sentences',
    days:[31,40],
    units:[
      {num:7, title:'Feelings & Opinions', icon:'🧠', days:[31,35], color:'#FF9600',
       topics:['Emotions vocabulary','Expressing opinions','Agreeing & disagreeing','Because / So / But','Conversation connectors'],
       goal:'5 din mein apni raaye express karna seekho'},
      {num:8, title:'Advanced Talk', icon:'🗣️', days:[36,40], color:'#FFB74D',
       topics:['Future tense (will / going to)','Conditional (if...)','Asking questions naturally','Making plans','Phone conversations'],
       goal:'5 din mein natural conversation karna seekho'},
    ]
  },
  5: {
    title:'Real World — Asli Duniya',
    titleUr:'اصلی دنیا',
    icon:'🌟',
    color:'#FF4B4B',
    colorDark:'#CC0000',
    desc:'News, social media, interviews aur professional English',
    days:[41,50],
    units:[
      {num:9, title:'Media & Technology', icon:'📱', days:[41,45], color:'#FF4B4B',
       topics:['Social media language','News & current events','Internet vocabulary','WhatsApp / email writing','Abbreviations (LOL, FYI)'],
       goal:'5 din mein modern English seekho'},
      {num:10, title:'Professional English', icon:'🤝', days:[46,50], color:'#FF7070',
       topics:['Job interviews','CV / Resume writing','Presentations','Negotiation phrases','Business vocabulary'],
       goal:'5 din mein professional English master karo'},
    ]
  },
  6: {
    title:'Fluency — Roaani',
    titleUr:'روانی',
    icon:'🚀',
    color:'#FFD700',
    colorDark:'#E6A817',
    desc:'Long conversations, idioms, advanced grammar aur fluency practice',
    days:[51,60],
    units:[
      {num:11, title:'Idioms & Phrases', icon:'💡', days:[51,55], color:'#FFD700',
       topics:['Common English idioms','Phrasal verbs','Slang (formal setting mein avoid)','Proverbs','Natural expressions'],
       goal:'5 din mein natural sounding English seekho'},
      {num:12, title:'Fluency Finale', icon:'🎓', days:[56,60], color:'#FFE566',
       topics:['Advanced reading','Debate & discussion','Story telling','Complex sentences','60-day review & practice'],
       goal:'5 din mein fluency ka final touch dena'},
    ]
  },
  7: {
    title:'Mastery Level 1',
    titleUr:'مہارت — سطح ۱',
    icon:'👑',
    color:'#1CB0F6',
    colorDark:'#0A91D1',
    desc:'Deep dive into advanced grammar, writing aur professional communication',
    days:[61,70],
    units:[
      {num:13, title:'Advanced Grammar', icon:'📝', days:[61,65], color:'#1CB0F6',
       topics:['Perfect tenses (have done)','Passive voice','Reported speech','Articles (a/an/the)','Complex clauses'],
       goal:'5 din mein advanced grammar master karo'},
      {num:14, title:'Writing Skills', icon:'✍️', days:[66,70], color:'#5BCBF5',
       topics:['Paragraph writing','Formal letters','Report writing','Argumentative writing','Editing & proofreading'],
       goal:'5 din mein English writing seekho'},
    ]
  },
  8: {
    title:'Mastery Level 2',
    titleUr:'مہارت — سطح ۲',
    icon:'🏆',
    color:'#CE82FF',
    colorDark:'#9400D3',
    desc:'Academic English, literature aur near-native level conversation',
    days:[71,80],
    units:[
      {num:15, title:'Academic English', icon:'🎓', days:[71,75], color:'#CE82FF',
       topics:['Academic vocabulary','Research & citations','Presentations','Critical thinking language','IELTS/TOEFL style'],
       goal:'5 din mein academic English seekho'},
      {num:16, title:'Near-Native Fluency', icon:'🌟', days:[76,80], color:'#D9A0FF',
       topics:['Native speaker patterns','Cultural references','Humor in English','Sarcasm & irony','Natural rhythm & flow'],
       goal:'5 din mein native-level English practice karo'},
    ]
  },
  9: {
    title:'Grand Finale — Part 1',
    titleUr:'آخری مرحلہ — حصہ اول',
    icon:'🎯',
    color:'#FF9600',
    colorDark:'#CF7800',
    desc:'90-day journey ka final review — sab kuch ek baar phir',
    days:[81,90],
    units:[
      {num:17, title:'Total Review — Foundation', icon:'🔄', days:[81,85], color:'#FF9600',
       topics:['Days 1-30 complete review','Grammar revision','Vocabulary mega quiz','Speaking challenges','Conversation marathon'],
       goal:'5 din mein pehle 30 din ka review karo'},
      {num:18, title:'Grand Finale', icon:'🏆', days:[86,90], color:'#FFB74D',
       topics:['Days 31-60 review','Days 61-80 review','Final speaking test','Certificate preparation','Celebration! 🎉'],
       goal:'5 din mein 90-day journey complete karo!'},
    ]
  },
};// end ALL_SECTIONS['en']

// ── FRENCH SECTIONS ──
ALL_SECTIONS['fr'] = {
  1: {
    title:'Bases du Français',
    titleUr:'بنیادی فرانسیسی',
    icon:'🌱',
    color:'#4A90E2',
    colorDark:'#2A6BC2',
    desc:'Bonjour se shuru karo — greetings, family, waqt aur roz ki baatein French mein',
    days:[1,10],
    units:[
      {num:1, title:'Bonjour & Salutations', icon:'👋', days:[1,5], color:'#4A90E2',
       topics:['Bonjour/Bonsoir/Au revoir','Comment vous appelez-vous?','Comment allez-vous?','Enchanté de vous rencontrer','Je suis de...'],
       goal:'5 din mein French greetings master karo'},
      {num:2, title:'La Famille', icon:'👨‍👩‍👧', days:[6,10], color:'#6BAFF5',
       topics:['Father/Mother/Brother/Sister','Avoir (to have)','Articles: Le/La/Les','Adjectives','Ma famille est...'],
       goal:'5 din mein French mein family ke baare mein baat karo'},
    ]
  },
  2: {
    title:'Vie Quotidienne',
    titleUr:'روزمرہ کی زندگی',
    icon:'🏡',
    color:'#27AE60',
    colorDark:'#1E8449',
    desc:'Waqt, khaana, numbers aur roz ka routine French mein',
    days:[11,20],
    units:[
      {num:3, title:'Le Temps & Routine', icon:'🕐', days:[11,15], color:'#27AE60',
       topics:['Quelle heure est-il?','Jours de la semaine','Mois de l\'année','Je vais / Je fais','La routine quotidienne'],
       goal:'5 din mein waqt aur routine French mein seekho'},
      {num:4, title:'Nourriture & Shopping', icon:'🛒', days:[16,20], color:'#52D68A',
       topics:['Les aliments','Au restaurant','Les nombres 1-100','Combien ça coûte?','J\'aimerais...'],
       goal:'5 din mein khaana aur shopping French mein seekho'},
    ]
  },
  3: {
    title:'En Ville',
    titleUr:'شہر میں',
    icon:'🌍',
    color:'#CE82FF',
    colorDark:'#9400D3',
    desc:'Directions, transport, hospital aur office French mein',
    days:[21,30],
    units:[
      {num:5, title:'Voyages & Lieux', icon:'✈️', days:[21,25], color:'#CE82FF',
       topics:['Les directions','Les transports','À l\'aéroport','À l\'hôtel','Excusez-moi, où est...?'],
       goal:'5 din mein safar ki French seekho'},
      {num:6, title:'Travail & École', icon:'💼', days:[26,30], color:'#D9A0FF',
       topics:['Les professions','L\'université','Le passé composé','Écrire un email','Formel vs informel'],
       goal:'5 din mein kaam aur taleem French mein seekho'},
    ]
  },
  4: {
    title:'Conversations',
    titleUr:'گفتگو',
    icon:'💬',
    color:'#FF9600',
    colorDark:'#CF7800',
    desc:'Real French conversations, emotions, opinions',
    days:[31,40],
    units:[
      {num:7, title:'Émotions & Opinions', icon:'🧠', days:[31,35], color:'#FF9600',
       topics:['Les émotions','Exprimer son opinion','Je pense que...','Parce que / Donc','Connecteurs de discours'],
       goal:'5 din mein French mein raaye express karo'},
      {num:8, title:'Conversations Avancées', icon:'🗣️', days:[36,40], color:'#FFB74D',
       topics:['Le futur simple','Le conditionnel','Poser des questions','Faire des projets','Conversations téléphoniques'],
       goal:'5 din mein natural French conversation karo'},
    ]
  },
  5: {
    title:'Monde Réel',
    titleUr:'اصلی دنیا',
    icon:'🌟',
    color:'#FF4B4B',
    colorDark:'#CC0000',
    desc:'Médias, technologie aur professional French',
    days:[41,50],
    units:[
      {num:9, title:'Médias & Technologie', icon:'📱', days:[41,45], color:'#FF4B4B',
       topics:['Réseaux sociaux','Les actualités','Internet en français','WhatsApp / emails','Abréviations françaises'],
       goal:'5 din mein modern French seekho'},
      {num:10, title:'Français Professionnel', icon:'🤝', days:[46,50], color:'#FF7070',
       topics:['Entretiens d\'embauche','CV en français','Présentations','Phrases de négociation','Vocabulaire des affaires'],
       goal:'5 din mein professional French master karo'},
    ]
  },
  6: {
    title:'Fluidité',
    titleUr:'روانی',
    icon:'🚀',
    color:'#FFD700',
    colorDark:'#E6A817',
    desc:'Idiomes, expressions avancées aur French fluency',
    days:[51,60],
    units:[
      {num:11, title:'Idiomes & Expressions', icon:'💡', days:[51,55], color:'#FFD700',
       topics:['Expressions idiomatiques','Verbes à particule','Argot français','Proverbes','Expressions naturelles'],
       goal:'5 din mein natural French seekho'},
      {num:12, title:'Finale de Fluidité', icon:'🎓', days:[56,60], color:'#FFE566',
       topics:['Lecture avancée','Débat & discussion','Narration','Phrases complexes','Révision des 60 jours'],
       goal:'60-day French journey complete karo!'},
    ]
  },
  7: {
    title:'Maîtrise Niveau 1',
    titleUr:'مہارت سطح ۱',
    icon:'👑',
    color:'#1CB0F6',
    colorDark:'#0A91D1',
    desc:'Advanced grammar, writing aur professional French communication',
    days:[61,70],
    units:[
      {num:13, title:'Grammaire Avancée', icon:'📝', days:[61,65], color:'#1CB0F6',
       topics:['Le subjonctif','La voix passive','Le discours indirect','Accords complexes','Clauses relatives'],
       goal:'5 din mein advanced French grammar seekho'},
      {num:14, title:'Compétences Écrites', icon:'✍️', days:[66,70], color:'#5BCBF5',
       topics:['Paragraphes structurés','Lettres formelles','Rédaction de rapports','Argumentation','Révision et correction'],
       goal:'5 din mein French writing skills seekho'},
    ]
  },
  8: {
    title:'Maîtrise Niveau 2',
    titleUr:'مہارت سطح ۲',
    icon:'🏆',
    color:'#CE82FF',
    colorDark:'#9400D3',
    desc:'Littérature française aur near-native level French',
    days:[71,80],
    units:[
      {num:15, title:'Français Académique', icon:'🎓', days:[71,75], color:'#CE82FF',
       topics:['Vocabulaire académique','Citations et références','Exposés','Pensée critique','Style DELF/DALF'],
       goal:'5 din mein academic French seekho'},
      {num:16, title:'Niveau Natif', icon:'🌟', days:[76,80], color:'#D9A0FF',
       topics:['Patterns des natifs','Références culturelles','Humour en français','Ironie et sarcasme','Rythme naturel'],
       goal:'5 din mein native-level French practice karo'},
    ]
  },
  9: {
    title:'Grande Finale',
    titleUr:'آخری مرحلہ',
    icon:'🎯',
    color:'#FF9600',
    colorDark:'#CF7800',
    desc:'90-day French journey ka final review',
    days:[81,90],
    units:[
      {num:17, title:'Révision Totale', icon:'🔄', days:[81,85], color:'#FF9600',
       topics:['Jours 1-30 révision','Révision de grammaire','Quiz vocabulaire','Défis oraux','Marathon de conversation'],
       goal:'5 din mein pehle 30 din ka review karo'},
      {num:18, title:'Grande Finale', icon:'🏆', days:[86,90], color:'#FFB74D',
       topics:['Jours 31-60 révision','Jours 61-80 révision','Test oral final','Préparation du certificat','Félicitations! 🎉'],
       goal:'90-day French journey complete karo!'},
    ]
  },
};// end ALL_SECTIONS['fr']

// ── CHINESE SECTIONS ──
ALL_SECTIONS['zh'] = {
  1: {
    title:'基础中文 — Buniyaadi Chinese',
    titleUr:'بنیادی چینی زبان',
    icon:'🌱',
    color:'#E74C3C',
    colorDark:'#C0392B',
    desc:'Nǐ hǎo se shuru karo — greetings, family, waqt aur roz ki Chinese',
    days:[1,10],
    units:[
      {num:1, title:'你好 — Greetings', icon:'👋', days:[1,5], color:'#E74C3C',
       topics:['你好/您好/再见','你叫什么名字？','你好吗？我很好','很高兴认识你','我是...人'],
       goal:'5 din mein Chinese greetings master karo'},
      {num:2, title:'家庭 — Family', icon:'👨‍👩‍👧', days:[6,10], color:'#F1948A',
       topics:['爸爸/妈妈/哥哥/妹妹','有 (to have)','Numbers 1-10','我有...','家庭介绍'],
       goal:'5 din mein Chinese mein family ke baare mein baat karo'},
    ]
  },
  2: {
    title:'日常生活 — Daily Life',
    titleUr:'روزمرہ کی زندگی',
    icon:'🏡',
    color:'#E67E22',
    colorDark:'#CA6F1E',
    desc:'Waqt, khaana, numbers aur routine Chinese mein',
    days:[11,20],
    units:[
      {num:3, title:'时间 — Time & Routine', icon:'🕐', days:[11,15], color:'#E67E22',
       topics:['几点了？','星期 (days of week)','月份 (months)','我每天...','日常活动'],
       goal:'5 din mein waqt aur routine Chinese mein seekho'},
      {num:4, title:'食物 — Food & Shopping', icon:'🛒', days:[16,20], color:'#F0A25F',
       topics:['食物词汇','在餐厅','Numbers 11-100','多少钱？','我想要...'],
       goal:'5 din mein khaana aur shopping Chinese mein seekho'},
    ]
  },
  3: {
    title:'出行 — Out & About',
    titleUr:'باہر کی دنیا',
    icon:'🌍',
    color:'#27AE60',
    colorDark:'#1E8449',
    desc:'Safar, hospital aur office Chinese mein',
    days:[21,30],
    units:[
      {num:5, title:'旅行 — Travel', icon:'✈️', days:[21,25], color:'#27AE60',
       topics:['方向 (directions)','交通工具','在机场','在酒店','请问，...在哪里？'],
       goal:'5 din mein safar ki Chinese seekho'},
      {num:6, title:'工作 — Work & Study', icon:'💼', days:[26,30], color:'#52D68A',
       topics:['职业 (professions)','大学','过去时','写邮件','正式 vs 非正式'],
       goal:'5 din mein kaam aur taleem Chinese mein seekho'},
    ]
  },
  4: {
    title:'对话 — Conversations',
    titleUr:'گفتگو',
    icon:'💬',
    color:'#8E44AD',
    colorDark:'#7D3C98',
    desc:'Real Chinese conversations, emotions, opinions',
    days:[31,40],
    units:[
      {num:7, title:'情感 — Feelings', icon:'🧠', days:[31,35], color:'#8E44AD',
       topics:['情绪词汇','表达意见','我认为...','因为/所以','对话连接词'],
       goal:'5 din mein Chinese mein raaye express karo'},
      {num:8, title:'高级对话', icon:'🗣️', days:[36,40], color:'#BB8FCE',
       topics:['将来时 (will)','如果... (if)','自然提问','制定计划','电话对话'],
       goal:'5 din mein natural Chinese conversation karo'},
    ]
  },
  5: {
    title:'真实世界 — Real World',
    titleUr:'اصلی دنیا',
    icon:'🌟',
    color:'#E74C3C',
    colorDark:'#C0392B',
    desc:'Media, technology aur professional Chinese',
    days:[41,50],
    units:[
      {num:9, title:'媒体 — Media & Tech', icon:'📱', days:[41,45], color:'#E74C3C',
       topics:['社交媒体','新闻用语','中文互联网','微信/邮件','网络缩写'],
       goal:'5 din mein modern Chinese seekho'},
      {num:10, title:'职场中文', icon:'🤝', days:[46,50], color:'#F1948A',
       topics:['工作面试','中文简历','演讲','谈判用语','商业词汇'],
       goal:'5 din mein professional Chinese master karo'},
    ]
  },
  6: {
    title:'流利 — Fluency',
    titleUr:'روانی',
    icon:'🚀',
    color:'#F39C12',
    colorDark:'#D68910',
    desc:'Chengyu (idioms), advanced expressions aur fluency',
    days:[51,60],
    units:[
      {num:11, title:'成语 — Idioms', icon:'💡', days:[51,55], color:'#F39C12',
       topics:['常用成语','四字成语','歇后语','谚语','自然表达'],
       goal:'5 din mein natural Chinese seekho'},
      {num:12, title:'流利终结篇', icon:'🎓', days:[56,60], color:'#FAD7A0',
       topics:['高级阅读','辩论与讨论','讲故事','复杂句子','60天复习'],
       goal:'60-day Chinese journey complete karo!'},
    ]
  },
  7: {
    title:'精通 — Mastery 1',
    titleUr:'مہارت سطح ۱',
    icon:'👑',
    color:'#1ABC9C',
    colorDark:'#17A589',
    desc:'Advanced grammar, characters aur professional Chinese',
    days:[61,70],
    units:[
      {num:13, title:'高级语法', icon:'📝', days:[61,65], color:'#1ABC9C',
       topics:['把字句','被字句','补语','复合句','高级虚词'],
       goal:'5 din mein advanced Chinese grammar seekho'},
      {num:14, title:'写作技巧', icon:'✍️', days:[66,70], color:'#76D7C4',
       topics:['段落写作','正式信件','报告写作','议论文','编辑与修改'],
       goal:'5 din mein Chinese writing skills seekho'},
    ]
  },
  8: {
    title:'精通 — Mastery 2',
    titleUr:'مہارت سطح ۲',
    icon:'🏆',
    color:'#2980B9',
    colorDark:'#2471A3',
    desc:'Chinese literature aur near-native level Chinese',
    days:[71,80],
    units:[
      {num:15, title:'学术中文', icon:'🎓', days:[71,75], color:'#2980B9',
       topics:['学术词汇','引用与参考','演讲','批判性思维','HSK风格'],
       goal:'5 din mein academic Chinese seekho'},
      {num:16, title:'接近母语', icon:'🌟', days:[76,80], color:'#5DADE2',
       topics:['母语者模式','文化参考','中文幽默','语气与讽刺','自然节奏'],
       goal:'5 din mein native-level Chinese practice karo'},
    ]
  },
  9: {
    title:'大结局 — Grand Finale',
    titleUr:'آخری مرحلہ',
    icon:'🎯',
    color:'#E74C3C',
    colorDark:'#C0392B',
    desc:'90-day Chinese journey ka final review',
    days:[81,90],
    units:[
      {num:17, title:'全面复习', icon:'🔄', days:[81,85], color:'#E74C3C',
       topics:['第1-30天复习','语法复习','词汇大测验','口语挑战','对话马拉松'],
       goal:'5 din mein pehle 30 din ka review karo'},
      {num:18, title:'大结局', icon:'🏆', days:[86,90], color:'#F1948A',
       topics:['第31-60天复习','第61-80天复习','最终口语测试','证书准备','恭喜！🎉'],
       goal:'90-day Chinese journey complete karo!'},
    ]
  },
};// end ALL_SECTIONS['zh']

// ── ARABIC SECTIONS ──
ALL_SECTIONS['ar'] = {
  1: {
    title:'أساسيات العربية — Buniyaadi Arabic',
    titleUr:'بنیادی عربی زبان',
    icon:'🌱',
    color:'#9B59B6',
    colorDark:'#7D3C98',
    desc:'As-Salamu Alaikum se shuru karo — greetings, family aur roz ki Arabic',
    days:[1,10],
    units:[
      {num:1, title:'السلام عليكم — Greetings', icon:'👋', days:[1,5], color:'#9B59B6',
       topics:['السلام عليكم / وعليكم السلام','اسمي... / ما اسمك؟','كيف حالك؟ / بخير الحمد لله','أهلاً وسهلاً','مع السلامة / إلى اللقاء'],
       goal:'5 din mein Arabic greetings master karo'},
      {num:2, title:'العائلة — Family', icon:'👨‍👩‍👧', days:[6,10], color:'#BB8FCE',
       topics:['الأب/الأم/الأخ/الأخت','لدي / ليس لدي','المثنى (dual form)','صفات العائلة','عائلتي...'],
       goal:'5 din mein Arabic mein family ke baare mein baat karo'},
    ]
  },
  2: {
    title:'الحياة اليومية — Daily Life',
    titleUr:'روزمرہ کی زندگی',
    icon:'🏡',
    color:'#2ECC71',
    colorDark:'#27AE60',
    desc:'Waqt, khaana, numbers aur routine Arabic mein',
    days:[11,20],
    units:[
      {num:3, title:'الوقت — Time & Routine', icon:'🕐', days:[11,15], color:'#2ECC71',
       topics:['كم الساعة؟','أيام الأسبوع','أشهر السنة','أنا أذهب / آكل','روتيني اليومي'],
       goal:'5 din mein waqt aur routine Arabic mein seekho'},
      {num:4, title:'الطعام — Food & Shopping', icon:'🛒', days:[16,20], color:'#82E0AA',
       topics:['المفردات الغذائية','في المطعم','الأرقام 1-100','كم الثمن؟','أريد...'],
       goal:'5 din mein khaana aur shopping Arabic mein seekho'},
    ]
  },
  3: {
    title:'في المدينة — Out & About',
    titleUr:'باہر کی دنیا',
    icon:'🌍',
    color:'#3498DB',
    colorDark:'#2980B9',
    desc:'Safar, hospital aur office Arabic mein',
    days:[21,30],
    units:[
      {num:5, title:'السفر — Travel', icon:'✈️', days:[21,25], color:'#3498DB',
       topics:['الاتجاهات','وسائل المواصلات','في المطار','في الفندق','أين يوجد...؟'],
       goal:'5 din mein safar ki Arabic seekho'},
      {num:6, title:'العمل — Work & Study', icon:'💼', days:[26,30], color:'#7FB3D3',
       topics:['المهن','الجامعة','الفعل الماضي','كتابة الإيميل','الرسمي vs غير الرسمي'],
       goal:'5 din mein kaam aur taleem Arabic mein seekho'},
    ]
  },
  4: {
    title:'المحادثات — Conversations',
    titleUr:'گفتگو',
    icon:'💬',
    color:'#E74C3C',
    colorDark:'#C0392B',
    desc:'Real Arabic conversations, emotions, opinions',
    days:[31,40],
    units:[
      {num:7, title:'المشاعر — Feelings', icon:'🧠', days:[31,35], color:'#E74C3C',
       topics:['مفردات المشاعر','التعبير عن الرأي','أعتقد أن...','لأن / لذلك','روابط الخطاب'],
       goal:'5 din mein Arabic mein raaye express karo'},
      {num:8, title:'محادثات متقدمة', icon:'🗣️', days:[36,40], color:'#F1948A',
       topics:['المستقبل (سوف/سـ)','لو... (if)','طرح الأسئلة','وضع الخطط','المحادثات الهاتفية'],
       goal:'5 din mein natural Arabic conversation karo'},
    ]
  },
  5: {
    title:'العالم الحقيقي — Real World',
    titleUr:'اصلی دنیا',
    icon:'🌟',
    color:'#F39C12',
    colorDark:'#D68910',
    desc:'Media, technology aur professional Arabic',
    days:[41,50],
    units:[
      {num:9, title:'الإعلام — Media & Tech', icon:'📱', days:[41,45], color:'#F39C12',
       topics:['وسائل التواصل الاجتماعي','الأخبار بالعربية','الإنترنت بالعربية','واتساب / إيميل','الاختصارات العربية'],
       goal:'5 din mein modern Arabic seekho'},
      {num:10, title:'العربية المهنية', icon:'🤝', days:[46,50], color:'#FAD7A0',
       topics:['مقابلات العمل','السيرة الذاتية','العروض التقديمية','عبارات التفاوض','مفردات الأعمال'],
       goal:'5 din mein professional Arabic master karo'},
    ]
  },
  6: {
    title:'الطلاقة — Fluency',
    titleUr:'روانی',
    icon:'🚀',
    color:'#1ABC9C',
    colorDark:'#17A589',
    desc:'Amthal (proverbs), idioms aur Arabic fluency',
    days:[51,60],
    units:[
      {num:11, title:'الأمثال — Proverbs & Idioms', icon:'💡', days:[51,55], color:'#1ABC9C',
       topics:['الأمثال العربية','التعبيرات الاصطلاحية','الأمثال الدينية','التعابير الطبيعية','الأسلوب العربي'],
       goal:'5 din mein natural Arabic seekho'},
      {num:12, title:'نهاية الطلاقة', icon:'🎓', days:[56,60], color:'#76D7C4',
       topics:['القراءة المتقدمة','النقاش والحوار','سرد القصص','الجمل المعقدة','مراجعة الـ 60 يوم'],
       goal:'60-day Arabic journey complete karo!'},
    ]
  },
  7: {
    title:'الإتقان — Mastery 1',
    titleUr:'مہارت سطح ۱',
    icon:'👑',
    color:'#8E44AD',
    colorDark:'#7D3C98',
    desc:'Advanced grammar, writing aur professional Arabic',
    days:[61,70],
    units:[
      {num:13, title:'القواعد المتقدمة', icon:'📝', days:[61,65], color:'#8E44AD',
       topics:['الإعراب','المبني للمجهول','الأسلوب غير المباشر','التوافق','الجمل الاعتراضية'],
       goal:'5 din mein advanced Arabic grammar seekho'},
      {num:14, title:'مهارات الكتابة', icon:'✍️', days:[66,70], color:'#BB8FCE',
       topics:['الفقرات المنظمة','الرسائل الرسمية','كتابة التقارير','الكتابة الإقناعية','المراجعة والتصحيح'],
       goal:'5 din mein Arabic writing skills seekho'},
    ]
  },
  8: {
    title:'الإتقان — Mastery 2',
    titleUr:'مہارت سطح ۲',
    icon:'🏆',
    color:'#E74C3C',
    colorDark:'#C0392B',
    desc:'Quranic Arabic aur near-native level Arabic',
    days:[71,80],
    units:[
      {num:15, title:'العربية الأكاديمية', icon:'🎓', days:[71,75], color:'#E74C3C',
       topics:['المفردات الأكاديمية','الاقتباس والمراجع','العروض التقديمية','التفكير النقدي','النمط الأكاديمي'],
       goal:'5 din mein academic Arabic seekho'},
      {num:16, title:'مستوى شبه الناطق', icon:'🌟', days:[76,80], color:'#F1948A',
       topics:['أنماط الناطقين الأصليين','المراجع الثقافية','الفكاهة بالعربية','التهكم والسخرية','الإيقاع الطبيعي'],
       goal:'5 din mein native-level Arabic practice karo'},
    ]
  },
  9: {
    title:'الختام الكبير — Grand Finale',
    titleUr:'آخری مرحلہ',
    icon:'🎯',
    color:'#9B59B6',
    colorDark:'#7D3C98',
    desc:'90-day Arabic journey ka final review',
    days:[81,90],
    units:[
      {num:17, title:'المراجعة الكاملة', icon:'🔄', days:[81,85], color:'#9B59B6',
       topics:['مراجعة الأيام 1-30','مراجعة القواعد','اختبار المفردات','تحديات التحدث','ماراثون المحادثة'],
       goal:'5 din mein pehle 30 din ka review karo'},
      {num:18, title:'الختام الكبير', icon:'🏆', days:[86,90], color:'#BB8FCE',
       topics:['مراجعة الأيام 31-60','مراجعة الأيام 61-80','الاختبار الشفوي النهائي','التحضير للشهادة','تهانينا! 🎉'],
       goal:'90-day Arabic journey complete karo!'},
    ]
  },
};// end ALL_SECTIONS['ar']

// ── CHESS SECTIONS — 7 Day Complete Course ──
ALL_SECTIONS['chess'] = {
  1: {
    title:'Chess Mastery — 7 Day Journey',
    titleUr:'شطرنج مہارت — ۷ دن',
    icon:'♟️',
    color:'#2ECC71',
    colorDark:'#1A9E55',
    desc:'Puri chess knowledge — beginner se tournament player tak sirf 7 din mein!',
    days:[1,7],
    units:[
      {num:1, title:'Chess Foundations', icon:'🎯', days:[1,3], color:'#2ECC71',
       topics:['Pieces & Rules','Opening Principles','Tactics & Combinations'],
       goal:'3 din mein chess ke bunyadi aur tactics seekho'},
      {num:2, title:'Advanced Chess', icon:'👑', days:[4,7], color:'#27AE60',
       topics:['Middlegame Strategy','Endgame Techniques','Tournament Prep','Mastery & Road Ahead'],
       goal:'4 din mein advanced chess, tournament aur aage ka safar!'},
    ]
  },
};// end ALL_SECTIONS['chess']

// ── KOREAN SECTIONS (Coming Soon) ──
// Array format use karo (same as English) — {} se crash hota tha
ALL_DAYS['ko'] = [];

// Korean Day 1 — Buniyadi lessons (Admin se aur add ho sakte hain)
ALL_DAYS['ko'][1] = {
  theme:'بنیادی کورین سلام',
  themeEn:'Basic Korean Greetings',
  emoji:'🇰🇷',
  color:'#FF6B9D',
  vocab:[
    { w:'안녕하세요', u:'ہیلو (فارمل)', p:'An-nyeong-ha-se-yo', ex:'"안녕하세요! Hello!"', tip:'Sab se zaroori Korean greeting — har umar ke log use karte hain',
      visual:{emoji:'👋',scene:'Korean class mein teacher ko salaam',memoryTrick:'Annyeong = Acha hona chahte hain aapko',color:'#FF6B9D'},
      situations:[{emoji:'🏫',place:'School',example:'"안녕하세요 선생님!"'},{emoji:'💼',place:'Office',example:'"안녕하세요!"'},{emoji:'🏠',place:'Ghar',example:'"안녕하세요 아주머니!"'}],
      mistake:'⚠️ Galti: Sirf doston ko 안녕 (annyeong) — badon ko hamesha 안녕하세요', level:1 },
    { w:'감사합니다', u:'شکریہ (فارمل)', p:'Gam-sa-ham-ni-da', ex:'"감사합니다! Thank you!"', tip:'Formal shukriya — dukandaar, ustad, bado ke liye',
      visual:{emoji:'🙏',scene:'Dono haath jor kar shukriya',memoryTrick:'Gamsa = Ehsan',color:'#FF6B9D'},
      situations:[{emoji:'🏪',place:'Dukan',example:'"감사합니다!"'},{emoji:'🏫',place:'School',example:'"감사합니다 선생님!"'},{emoji:'🍽️',place:'Restaurant',example:'"감사합니다!"'}],
      mistake:'⚠️ Galti: Informal mein 고마워 (gomawo) use karo — yeh zyada heavy hai', level:1 },
    { w:'안녕히 가세요', u:'خدا حافظ (جانے والے کو)', p:'An-nyeong-hi ga-se-yo', ex:'"안녕히 가세요!"', tip:'Jab koi jaa raha ho — aap ruk rahe ho',
      visual:{emoji:'👋',scene:'Dukaan se nikalne wale ko alvida',memoryTrick:'Ga = Jaana — jao salaamat',color:'#FF6B9D'},
      situations:[{emoji:'🏪',place:'Dukan',example:'"안녕히 가세요!"'},{emoji:'🏠',place:'Ghar',example:'"안녕히 가세요!"'},{emoji:'💼',place:'Office',example:'"안녕히 가세요!"'}],
      mistake:'⚠️ Galti: Jab aap khud ja rahe ho toh 안녕히 계세요 kehna chahiye', level:1 },
    { w:'네', u:'ہاں', p:'Ne', ex:'"네, 맞아요. Yes, correct."', tip:'Har jagah — simple aur clear "haan"',
      visual:{emoji:'✅',scene:'Sir hila kar haan kehna',memoryTrick:'Ne = "Nein" nahi, "Nay" jaisi aawaz = Haan!',color:'#FF6B9D'},
      situations:[{emoji:'🏫',place:'School',example:'"네, 선생님!"'},{emoji:'💼',place:'Office',example:'"네, 알겠습니다!"'},{emoji:'📱',place:'Phone',example:'"네?"'}],
      mistake:'⚠️ Galti: Ne zyada soft bolta hai — clear bolein', level:1 },
    { w:'아니요', u:'نہیں', p:'A-ni-yo', ex:'"아니요. No."', tip:'Polite inkar — formal settings mein use karo',
      visual:{emoji:'❌',scene:'Haath se na ka ishaara',memoryTrick:'Aniyo = "Ain-ee-yo" = Na',color:'#FF6B9D'},
      situations:[{emoji:'🍽️',place:'Khaana',example:'"아니요, 괜찮아요."'},{emoji:'🏪',place:'Dukan',example:'"아니요, 감사합니다."'},{emoji:'💼',place:'Office',example:'"아니요."'}],
      mistake:'⚠️ Galti: Doston ke saath 아니 (ani) kaafi hai — aaniyo formal hai', level:1 },
  ],
  sentences:[
    {en:'안녕하세요! 저는 Ahmed입니다.',ur:'ہیلو! میں Ahmed ہوں۔',words:[{e:'안녕하세요',u:'ہیلو'},{e:'저는',u:'میں'},{e:'Ahmed입니다',u:'Ahmed ہوں'}],reply:'반갑습니다!',visual:{emoji:'🙋',scene:'Apna taaruf karana',tip:'저는 + naam + 입니다 = Main [naam] hoon'},context:'Introduction',bodyLang:'Thoda jhuk kar milna',level:1},
    {en:'감사합니다!',ur:'شکریہ!',words:[{e:'감사합니다',u:'شکریہ'}],reply:'아니에요!',visual:{emoji:'🙏',scene:'Shukriya karna',tip:'감사합니다 har jagah use kar sakte ho'},context:'Gratitude',bodyLang:'Sar jhukana',level:1},
  ],
  grammar:[
    {title:'저는 [Naam]입니다',visualTable:{headers:['Korean','Urdu','Example'],rows:[['저는','میں','저는 Ahmed'],['입니다','ہوں','입니다']],color:'#FF6B9D'},
     rules:[{formula:'저는 + [Naam] + 입니다',examples:[{en:'저는 Sara입니다.',ur:'Main Sara hoon.'}]}],
     memoryTrick:'저는 = Jeo-neun = Jee haan main',tip:'Formal introduction ka formula — interview ya class mein use karo'},
  ],
  quizzes:[
    {type:'meaning',emoji:'🤔',q:'"안녕하세요" ka matlab?',hint:'Pehla word',o:['Khuda Hafiz','Hello/Salaam','Shukriya','Maafi'],a:1,explain:'안녕하세요 = Hello — sabse common Korean greeting'},
    {type:'meaning',emoji:'🤔',q:'"감사합니다" kab bolte hain?',hint:'Shukriya',o:['Maafi mangne par','Khana khate waqt','Shukriya kehne par','Milte waqt'],a:2,explain:'감사합니다 = Thank you — formal shukriya'},
    {type:'fill',emoji:'✏️',q:'저는 Ahmed___.',hint:'Hoon ke liye',o:['입니다','감사합니다','안녕','아니요'],a:0,explain:'저는 [naam] 입니다 = Main [naam] hoon'},
    {type:'situation',emoji:'🎭',q:'Teacher aaya — kya kahoge?',hint:'Formal greeting',o:['안녕','네','안녕하세요','아니요'],a:2,explain:'Teacher ko hamesha 안녕하세요 — formal greeting use karo'},
    {type:'situation',emoji:'🎭',q:'Dukan se nikal rahe ho — kya kahoge?',hint:'Jaane wale ko',o:['감사합니다','안녕히 가세요','네','저는'],a:1,explain:'안녕히 가세요 — jab koi aur ja raha ho aur aap ruk rahe ho'},
  ]
};
ALL_SECTIONS['ko'] = {
  1: {
    title:'기초 한국어 — Basic Korean',
    titleUr:'بنیادی کورین',
    icon:'🌱',
    color:'#FF6B9D',
    colorDark:'#CC4477',
    desc:'Annyeonghaseyo se shuru karo — greetings, family aur roz ki Korean',
    days:[1,10],
    units:[
      {num:1, title:'인사말 — Greetings', icon:'👋', days:[1,5], color:'#FF6B9D',
       topics:['Annyeonghaseyo','Bangapseumnida','Jal jinaesseoyo','Gamsahamnida','Annyeong'],
       goal:'5 din mein basic Korean greetings seekho'},
      {num:2, title:'숫자와 가족 — Numbers & Family', icon:'👨‍👩‍👧', days:[6,10], color:'#FF9DC4',
       topics:['Eomma/Appa','Oppa/Unni','Hana dull set','Nayi/Sarang','Jib/Hakgyo'],
       goal:'5 din mein Korean numbers aur family seekho'},
    ]
  },
};// end ALL_SECTIONS['ko']

// ── JAPANESE SECTIONS (Coming Soon) ──
// Array format use karo (same as English) — {} se crash hota tha
ALL_DAYS['ja'] = [];

// Japanese Day 1 — Buniyadi lessons (Admin se aur add ho sakte hain)
ALL_DAYS['ja'][1] = {
  theme:'بنیادی جاپانی سلام',
  themeEn:'Basic Japanese Greetings',
  emoji:'🇯🇵',
  color:'#FF8C42',
  vocab:[
    { w:'こんにちは', u:'ہیلو (دوپہر)', p:'Kon-ni-chi-wa', ex:'"こんにちは! Hello!"', tip:'Din ke waqt ka greeting — subah nahi, raat nahi',
      visual:{emoji:'☀️',scene:'Dopehar mein milna',memoryTrick:'Konnichiwa = Good Day (dopehar)',color:'#FF8C42'},
      situations:[{emoji:'🏫',place:'School',example:'"こんにちは先生!"'},{emoji:'🏪',place:'Dukan',example:'"こんにちは!"'},{emoji:'🌆',place:'Bahar',example:'"こんにちは!"'}],
      mistake:'⚠️ Galti: Subah mein おはよう (ohayou) aur raat mein こんばんは (konbanwa) bolte hain', level:1 },
    { w:'ありがとう', u:'شکریہ (انفارمل)', p:'A-ri-ga-tou', ex:'"ありがとう! Thank you!"', tip:'Doston ke saath — formal ke liye ありがとうございます',
      visual:{emoji:'🙏',scene:'Dost ka shukriya',memoryTrick:'Arigatou = Aree-ga-toh = "Are yaar shukriya!"',color:'#FF8C42'},
      situations:[{emoji:'🏫',place:'School',example:'"ありがとう!"'},{emoji:'🏠',place:'Ghar',example:'"ありがとう!"'},{emoji:'🎁',place:'Gift',example:'"ありがとう!"'}],
      mistake:'⚠️ Galti: Teacher ko ありがとうございます (arigatou gozaimasu) bolein', level:1 },
    { w:'はい', u:'ہاں', p:'Hai', ex:'"はい、わかりました. Yes, understood."', tip:'Haan ya samajh gaya — dono ke liye',
      visual:{emoji:'✅',scene:'Sar hilana',memoryTrick:'Hai = "Hye" jaisi aawaz = Haan',color:'#FF8C42'},
      situations:[{emoji:'🏫',place:'School',example:'"はい、先生!"'},{emoji:'💼',place:'Office',example:'"はい、わかりました!"'},{emoji:'📱',place:'Phone',example:'"はい?"'}],
      mistake:'⚠️ Galti: はい shuruaat mein bhi use hota hai — "Hello?" ki tarha phone pe', level:1 },
    { w:'いいえ', u:'نہیں', p:'I-i-e', ex:'"いいえ、違います. No, that is wrong."', tip:'Polite inkar',
      visual:{emoji:'❌',scene:'Haath hilana na ke liye',memoryTrick:'Iie = "Ee-eh" = Nahi',color:'#FF8C42'},
      situations:[{emoji:'🍽️',place:'Khaana',example:'"いいえ、結構です."'},{emoji:'🏪',place:'Dukan',example:'"いいえ、大丈夫です."'},{emoji:'🏫',place:'School',example:'"いいえ."'}],
      mistake:'⚠️ Galti: いいえ bohot formal hai — doston mein いや (iya) ya ううん (uun) chalata hai', level:1 },
    { w:'すみません', u:'معاف کیجیے / excuse me', p:'Su-mi-ma-sen', ex:'"すみません! Excuse me!"', tip:'Maafi ya attention lene ke liye — bohot zaroori word',
      visual:{emoji:'🙇',scene:'Kisi se raasta poochna',memoryTrick:'Sumimasen = "Soo-me-ma-sen" = Maaf kijiye',color:'#FF8C42'},
      situations:[{emoji:'🗺️',place:'Raasta',example:'"すみません、駅はどこですか?"'},{emoji:'🍽️',place:'Restaurant',example:'"すみません!"'},{emoji:'🏪',place:'Dukan',example:'"すみません!"'}],
      mistake:'⚠️ Galti: すみません sirf maafi nahi — attention attract karne ke liye bhi use hota hai', level:1 },
  ],
  sentences:[
    {en:'こんにちは！私はAhmedです。',ur:'ہیلو! میں Ahmed ہوں۔',words:[{e:'こんにちは',u:'ہیلو'},{e:'私は',u:'میں'},{e:'Ahmedです',u:'Ahmed ہوں'}],reply:'はじめまして！',visual:{emoji:'🙋',scene:'Apna taaruf',tip:'私は + naam + です = Main [naam] hoon'},context:'Introduction',bodyLang:'Thoda jhuk kar milna (bow)',level:1},
    {en:'ありがとうございます！',ur:'بہت شکریہ!',words:[{e:'ありがとう',u:'شکریہ'},{e:'ございます',u:'بہت (فارمل)'}],reply:'どういたしまして！',visual:{emoji:'🙏',scene:'Formal shukriya',tip:'ございます lagane se formal ho jata hai'},context:'Gratitude',bodyLang:'Hafif bow',level:1},
  ],
  grammar:[
    {title:'私は [Naam]です',visualTable:{headers:['Japanese','Urdu','Example'],rows:[['私は','میں','私は Ahmed'],['です','ہوں','です']],color:'#FF8C42'},
     rules:[{formula:'私は + [Naam] + です',examples:[{en:'私はSaraです。',ur:'Main Sara hoon.'}]}],
     memoryTrick:'私は (Watashi wa) = Watashi = Main',tip:'Japanese mein verb sentence ke aakhir mein aata hai'},
  ],
  quizzes:[
    {type:'meaning',emoji:'🤔',q:'"こんにちは" kab bolte hain?',hint:'Din ka waqt',o:['Subah ko','Raat ko','Dopehar mein','Sone se pehle'],a:2,explain:'こんにちは = Good afternoon/Hello — din ke waqt'},
    {type:'meaning',emoji:'🤔',q:'"すみません" ka use?',hint:'Do kaam karta hai',o:['Sirf maafi','Sirf greeting','Maafi aur attention','Sirf shukriya'],a:2,explain:'すみません = Excuse me aur Maafi dono ke liye'},
    {type:'fill',emoji:'✏️',q:'私は Ahmed___。',hint:'"Hoon" ke liye',o:['です','はい','ありがとう','いいえ'],a:0,explain:'私は [naam] です = Main [naam] hoon'},
    {type:'situation',emoji:'🎭',q:'Restaurant mein waiter bulana hai — kya kahoge?',hint:'Attention attract karo',o:['ありがとう','こんにちは','すみません','いいえ'],a:2,explain:'すみません — waiter ya kisi ka attention lene ke liye best word'},
    {type:'situation',emoji:'🎭',q:'Dost ne gift diya — kya kahoge?',hint:'Informal shukriya',o:['すみません','いいえ','はい','ありがとう'],a:3,explain:'ありがとう — doston ko informal shukriya'},
  ]
};
ALL_SECTIONS['ja'] = {
  1: {
    title:'基礎日本語 — Basic Japanese',
    titleUr:'بنیادی جاپانی',
    icon:'🌱',
    color:'#FF8C42',
    colorDark:'#CC6622',
    desc:'Konnichiwa se shuru karo — greetings, hiragana aur roz ki Japanese',
    days:[1,10],
    units:[
      {num:1, title:'挨拶 — Greetings', icon:'🙏', days:[1,5], color:'#FF8C42',
       topics:['Konnichiwa','Hajimemashite','Yoroshiku','Arigatou','Sayonara'],
       goal:'5 din mein basic Japanese greetings seekho'},
      {num:2, title:'数字と家族 — Numbers & Family', icon:'👨‍👩‍👧', days:[6,10], color:'#FFAA7A',
       topics:['Okaa-san/Otou-san','Ichi ni san','Watashi/Anata','Ie/Gakkou','Suki/Kirai'],
       goal:'5 din mein Japanese numbers aur family seekho'},
    ]
  },
};// end ALL_SECTIONS['ja']

// -- TURKISH (Coming Soon) --
ALL_DAYS['tr'] = []; // Array fix — {} se crash hota tha
ALL_DAYS['tr'][1] = {
  theme: 'پہلی ملاقات',
  themeEn: 'İlk Buluşma',
  emoji: '👋',
  color: '#E84142',

  vocab: [
    {w:'Merhaba',u:'ہیلو / سلام',p:'mer-HA-ba',ex:'"Merhaba! Nasılsın?"',tip:'Din ke kisi bhi waqt use karo!'},
    {w:'Günaydın',u:'صبح بخیر',p:'goo-NAY-dun',ex:'"Günaydın! Nasıl geçti dünün?"',tip:'Subah ka greeting'},
    {w:'İyi akşamlar',u:'شب بخیر / شام بخیر',p:'ee-YEE ak-SHAM-lar',ex:'"İyi akşamlar! Hoş geldiniz."',tip:'Shaam ke liye'},
    {w:'Teşekkür ederim',u:'شکریہ',p:'te-shek-KOOR ed-er-IM',ex:'"Çok teşekkür ederim!"',tip:'"Çok" = bohot'},
    {w:'Hoşça kal',u:'خدا حافظ',p:'HOSH-cha kal',ex:'"Görüşürüz! Hoşça kal."',tip:'Jate waqt kehte hain'},
    {w:'Evet',u:'ہاں',p:'ev-ET',ex:'"Evet, anlıyorum."',tip:'Seedha "yes"'},
    {w:'Hayır',u:'نہیں',p:'HA-yur',ex:'"Hayır, teşekkürler."',tip:'Seedha "no"'},
    {w:'Lütfen',u:'براہ کرم',p:'LOOT-fen',ex:'"Su, lütfen."',tip:'"Please" — bohot zaroori!'},
    {w:'Adım...',u:'میرا نام ہے...',p:'ah-DUM',ex:'"Benim adım Ahmed."',tip:'"Benim adım" = mera naam'},
    {w:'Nasılsın?',u:'آپ کیسے ہیں؟',p:'na-SIL-sun',ex:'"Merhaba! Nasılsın?"',tip:'Informal — dost ke saath'},
  ],

  sentences: [
    {en:'Merhaba! Benim adım Ahmed.',ur:'Hello! Mera naam Ahmed hai.',words:[{e:'Merhaba',u:'hello'},{e:'Benim adım',u:'mera naam'}],reply:'Merhaba Ahmed! Ben Sara.'},
    {en:'Nasılsın?',ur:'Aap kaise hain?',words:[{e:'Nasılsın',u:'kaise ho'}],reply:'İyiyim, teşekkür ederim!'},
    {en:'Günaydın! İyi günler.',ur:'Subah bakhair! Achha din guzaro.',words:[{e:'Günaydın',u:'subah bakhair'},{e:'İyi günler',u:'achha din'}],reply:'Günaydın! Size de!'},
    {en:'Teşekkür ederim!',ur:'Shukriya!',words:[{e:'Teşekkür ederim',u:'shukriya'}],reply:'Rica ederim!'},
    {en:'Hoşça kal!',ur:'Khuda hafiz!',words:[{e:'Hoşça kal',u:'khuda hafiz'}],reply:'Güle güle!'},
  ],

  grammar: [
    {title:'Ben — Main (I am)',rules:[
      {formula:'Ben + noun/adj',examples:[{en:'Ben Ahmed.',ur:'Main Ahmed hoon.'},{en:'Ben öğrenciyim.',ur:'Main student hoon.'},{en:'Ben iyiyim.',ur:'Main theek hoon.'}]},
    ],tip:'💡 Turkish mein "hoon" = "-im/-yim" suffix lagta hai noun ya adjective ke aakhir mein!'},
    {title:'Soru — Sawal (Questions)',rules:[
      {formula:'Verb + mı/mi/mu/mü?',examples:[{en:'Türk müsün?',ur:'Kya tum Turkish ho?'},{en:'Öğrenci misin?',ur:'Kya tum student ho?'}]},
    ],tip:'💡 Turkish mein question mark + "mi" suffix — vowel harmony ke saath badle!'},
  ],

  story: {
    title:"Ahmed Ki Pehli Turkish Class",
    paragraphs:[
      {line:'Bugün Ahmed\'in ilk Türkçe dersi.',ur:'Aaj Ahmed ki pehli Turkish class hai.',words:['ilk','ders']},
      {line:'Öğretmen diyor: "Merhaba! Hoş geldiniz!"',ur:'Ustaad kehte hain: "Hello! Khush amdeed!"',words:['Hoş geldiniz']},
      {line:'Ahmed cevap veriyor: "Merhaba! Teşekkür ederim."',ur:'Ahmed jawab deta hai: "Hello! Shukriya."',words:['cevap','teşekkür']},
      {line:'Ahmed düşünüyor: "Türkçe öğrenebilirim!"',ur:'Ahmed sochta hai: "Main Turkish seekh sakta hoon!"',words:['öğrenebilirim']},
    ]
  },

  quizzes: [
    {q:'Turkish mein "Hello" kya hai?',o:['Günaydın','Merhaba','Teşekkür','Hayır'],a:1},
    {q:'Turkish mein "Shukriya" kaise kehte hain?',o:['Lütfen','Evet','Teşekkür ederim','Hoşça kal'],a:2},
    {q:'"Hayır" ka matlab kya hai?',o:['Haan','Shukriya','Please','Nahi'],a:3},
    {q:'Turkish mein "subah bakhair" kya hai?',o:['İyi akşamlar','Merhaba','Günaydın','Hoşça kal'],a:2},
    {q:'"Nasılsın?" ka Urdu mein matlab?',o:['Aap ka naam?','Aap kahan se hain?','Aap kaise hain?','Khuda hafiz'],a:2},
  ],
};// end ALL_DAYS['tr'][1]

ALL_SECTIONS['tr'] = {
  1: {
    title:'Temel Turkce - Basic Turkish',
    titleUr:'Buniyadi Turki',
    icon:'🌱',
    color:'#E84142',
    colorDark:'#B52020',
    desc:'Merhaba se shuru karo - greetings, family aur roz ki Turkish',
    days:[1,10],
    units:[
      {num:1, title:'Selamlasma - Greetings', icon:'🌙', days:[1,5], color:'#E84142',
       topics:['Merhaba','Gunaydin','Iyi aksamlar','Tesekkur ederim','Hosca kal'],
       goal:'5 din mein basic Turkish greetings seekho'},
      {num:2, title:'Sayilar ve Aile - Numbers & Family', icon:'👨‍👩‍👧', days:[6,10], color:'#FF7070',
       topics:['Anne/Baba','Bir iki uc','Kardes/Abla','Ev/Okul','Evet/Hayir'],
       goal:'5 din mein Turkish numbers aur family seekho'},
    ]
  },
};// end ALL_SECTIONS['tr']

// -- IRISH (Coming Soon) --
ALL_DAYS['ie'] = []; // Array fix — {} se crash hota tha
ALL_DAYS['ie'][1] = {
  theme: 'پہلی ملاقات',
  themeEn: 'An Chéad Chruinniú',
  emoji: '🍀',
  color: '#169B62',

  vocab: [
    {w:'Dia dhuit',u:'ہیلو / سلام',p:'DEE-ah gwitch',ex:'"Dia dhuit! Conas atá tú?"',tip:'Literally "God be with you" — Irish greeting!'},
    {w:'Maidin mhaith',u:'صبح بخیر',p:'MAH-jin wah',ex:'"Maidin mhaith! Conas atá tú?"',tip:'Subah ka greeting'},
    {w:'Go raibh maith agat',u:'شکریہ',p:'guh REV mah AH-gut',ex:'"Go raibh maith agat!"',tip:'Most important Irish phrase!'},
    {w:'Slán',u:'خدا حافظ',p:'slawn',ex:'"Slán! Go n-éirí leat."',tip:'Goodbye — slaan bolo'},
    {w:'Conas atá tú?',u:'آپ کیسے ہیں؟',p:'KUN-as ah-TAW too',ex:'"Conas atá tú inniu?"',tip:'Informal "how are you"'},
    {w:'Táim go maith',u:'میں ٹھیک ہوں',p:'tawm guh mah',ex:'"Táim go maith, go raibh maith agat."',tip:'"Táim" = I am'},
    {w:'Sea',u:'ہاں',p:'shah',ex:'"Sea, is mise Ahmed."',tip:'"Yes" in Irish — "shah" sound'},
    {w:'Ní hea',u:'نہیں',p:'nee hah',ex:'"Ní hea, níl mé as Baile Átha Cliath."',tip:'"No" in Irish'},
    {w:'Le do thoil',u:'براہ کرم',p:'leh duh hull',ex:'"Uisce, le do thoil."',tip:'"Please" — formal polite form'},
    {w:'Is mise...',u:'میں ہوں...',p:'iss MISH-uh',ex:'"Is mise Ahmed."',tip:'"Is mise" = I am (for names)'},
  ],

  sentences: [
    {en:'Dia dhuit! Is mise Ahmed.',ur:'Hello! Main Ahmed hoon.',words:[{e:'Dia dhuit',u:'hello'},{e:'Is mise',u:'main hoon'}],reply:'Dia is Muire dhuit! Is mise Sara.'},
    {en:'Conas atá tú?',ur:'Tum kaise ho?',words:[{e:'Conas atá tú',u:'tum kaise ho'}],reply:'Táim go maith! Go raibh maith agat.'},
    {en:'Maidin mhaith!',ur:'Subah bakhair!',words:[{e:'Maidin mhaith',u:'subah bakhair'}],reply:'Maidin mhaith duit!'},
    {en:'Go raibh maith agat!',ur:'Shukriya!',words:[{e:'Go raibh maith agat',u:'shukriya'}],reply:'Tá fáilte romhat!'},
    {en:'Slán!',ur:'Khuda hafiz!',words:[{e:'Slán',u:'khuda hafiz'}],reply:'Slán leat! Slán abhaile!'},
  ],

  grammar: [
    {title:'Is mise — Main hoon (I am)',rules:[
      {formula:'Is mise + naam',examples:[{en:'Is mise Ahmed.',ur:'Main Ahmed hoon.'},{en:'Is mise Sara.',ur:'Main Sara hoon.'}]},
      {formula:'Táim = I am (state mein)',examples:[{en:'Táim go maith.',ur:'Main theek hoon.'},{en:'Táim tuirseach.',ur:'Main thaka hua hoon.'}]},
    ],tip:'💡 Irish mein naam ke liye "Is mise", haal ke liye "Táim" use karo!'},
    {title:'Séimhiú — Soft Mutation',rules:[
      {formula:'Maith → mhaith (after maidin)',examples:[{en:'Maidin mhaith',ur:'Subah bakhair'},{en:'Oíche mhaith',ur:'Raat bakhair'}]},
    ],tip:'💡 Irish mein words change hote hain context mein — "mh" = "w" sound!'},
  ],

  story: {
    title:"Ahmed Ki Pehli Irish Class",
    paragraphs:[
      {line:'Inniu tá rang Gaeilge ag Ahmed.',ur:'Aaj Ahmed ki Irish class hai.',words:['inniu','rang']},
      {line:'An múinteoir a deir: "Dia dhuit! Fáilte!"',ur:'Ustaad kehte hain: "Hello! Khush amdeed!"',words:['múinteoir','Fáilte']},
      {line:'Ahmed a fhreagairt: "Dia dhuit! Go raibh maith agat."',ur:'Ahmed jawab deta hai: "Hello! Shukriya."',words:['fhreagairt']},
      {line:'Ahmed ag smaoineamh: "Is féidir liom Gaeilge a fhoghlaim!"',ur:'Ahmed sochta hai: "Main Irish seekh sakta hoon!"',words:['Is féidir liom']},
    ]
  },

  quizzes: [
    {q:'Irish mein "Hello" kya hai?',o:['Slán','Go raibh maith agat','Dia dhuit','Sea'],a:2},
    {q:'Irish mein "Shukriya" kaise kehte hain?',o:['Le do thoil','Slán','Go raibh maith agat','Ní hea'],a:2},
    {q:'"Sea" ka matlab kya hai?',o:['Nahi','Haan','Shukriya','Hello'],a:1},
    {q:'"Maidin mhaith" ka matlab?',o:['Shab bakhair','Khuda hafiz','Subah bakhair','Theek hoon'],a:2},
    {q:'Irish mein "I am Ahmed" kaise kehte?',o:['Táim Ahmed','Go Ahmed','Is mise Ahmed','Dia Ahmed'],a:2},
  ],
};// end ALL_DAYS['ie'][1]

ALL_SECTIONS['ie'] = {
  1: {
    title:'Gaeilge Bhunusach - Basic Irish',
    titleUr:'Buniyadi Irish',
    icon:'🍀',
    color:'#169B62',
    colorDark:'#0D6B43',
    desc:'Dia dhuit se shuru karo - greetings, family aur roz ki Irish Gaelic',
    days:[1,10],
    units:[
      {num:1, title:'Beannachtai - Greetings', icon:'🐍', days:[1,5], color:'#169B62',
       topics:['Dia dhuit','Maidin mhaith','Go raibh maith agat','Slan','Conas ata tu?'],
       goal:'5 din mein basic Irish greetings seekho'},
      {num:2, title:'Uimhreacha agus Teaghlach - Numbers & Family', icon:'👨‍👩‍👧', days:[6,10], color:'#3DC28A',
       topics:['Mathair/Athair','A haon a do a tri','Dearthair/Deirfiur','Teach/Scoil','Sea/Ni hea'],
       goal:'5 din mein Irish numbers aur family seekho'},
    ]
  },
};// end ALL_SECTIONS['ie']

// ══════════════════════════════════════════════
// RUSSIAN — Structure only (lessons baad mein)
// ══════════════════════════════════════════════
ALL_DAYS['ru'] = [];

ALL_DAYS['ru'][1] = {
  theme: 'پہلی ملاقات',
  themeEn: 'Первая встреча',
  emoji: '👋',
  color: '#E53935',
  vocab: [],
  sentences: [],
  grammar: [],
  story: { title:'День 1', level:'⭐ День 1', paragraphs:[] },
  quizzes: []
};

ALL_SECTIONS['ru'] = {
  1: {
    title:'Russki Yazyk - Basic Russian',
    titleUr:'Buniyadi Russian',
    icon:'🌱',
    color:'#E53935',
    colorDark:'#B71C1C',
    desc:'Privyet se shuru karo — greetings, family aur roz ki Russian',
    days:[1,10],
    units:[
      {num:1, title:'Privetstvie - Greetings', icon:'🐻', days:[1,5], color:'#E53935',
       topics:['Привет','Здравствуйте','Спасибо','Пожалуйста','До свидания'],
       goal:'5 din mein basic Russian greetings seekho'},
      {num:2, title:'Semya - Family & Numbers', icon:'👨‍👩‍👧', days:[6,10], color:'#FF6B6B',
       topics:['Мама/Папа','Один два три','Брат/Сестра','Дом/Школа','Да/Нет'],
       goal:'5 din mein Russian family aur numbers seekho'},
    ]
  },
  2: {
    title:'Povsednevnaya Zhizn - Daily Life',
    titleUr:'Daily Ka Daily Russian',
    icon:'🌿',
    color:'#E53935',
    colorDark:'#B71C1C',
    desc:'Ghar, khaana, kaam aur roz ki zindagi Russian mein',
    days:[11,20],
    units:[
      {num:3, title:'Yeda i Pokupki - Food & Shopping', icon:'🍽️', days:[11,15], color:'#E53935',
       topics:['Хлеб','Магазин','Деньги','Обед','Вкусно'],
       goal:'5 din mein Russian food aur shopping vocabulary'},
      {num:4, title:'Rabota i Uchyoba - Work & Study', icon:'💼', days:[16,20], color:'#FF6B6B',
       topics:['Работа','Школа','Университет','Коллеги','Расписание'],
       goal:'5 din mein Russian work aur education language'},
    ]
  },
  3: {
    title:'Puteshestvie i Kultura - Travel & Culture',
    titleUr:'Safar aur Saqafat',
    icon:'🌟',
    color:'#E53935',
    colorDark:'#B71C1C',
    desc:'Safar, Russian culture aur advanced grammar',
    days:[21,30],
    units:[
      {num:5, title:'Puteshestvie - Travel', icon:'✈️', days:[21,25], color:'#E53935',
       topics:['Аэропорт','Гостиница','Метро','Карта','Помогите!'],
       goal:'5 din mein Russian travel vocabulary seekho'},
      {num:6, title:'Kultura - Culture & Review', icon:'🪆', days:[26,30], color:'#FF6B6B',
       topics:['Матрёшка','Балет','Борщ','Москва','Россия'],
       goal:'5 din mein Russian culture aur review karo'},
    ]
  },
};// end ALL_SECTIONS['ru']


// ══════════════════════════════════════════════════════
// PYTHON LEVELS DATA — 60 Levels, Programming Structure
// ══════════════════════════════════════════════════════
const PYTHON_LEVELS = [
  // MODULE 1: Basics (Levels 1-10)
  { level:1,  title:'Python Kya Hai?',       icon:'🐍', color:'#3776AB', module:1, topic:'Intro & Setup',        desc:'Python install karo, print() likho, apna pehla program chalao',      xp:50  },
  { level:2,  title:'Variables & Data',       icon:'📦', color:'#3776AB', module:1, topic:'Variables',            desc:'Variables banao — string, int, float, bool samjho',                  xp:60  },
  { level:3,  title:'String Magic',           icon:'✍️', color:'#3776AB', module:1, topic:'Strings',              desc:'String methods — upper(), lower(), len(), f-strings',               xp:60  },
  { level:4,  title:'Numbers & Math',         icon:'🔢', color:'#3776AB', module:1, topic:'Numbers',              desc:'Arithmetic operators, math module, input() se numbers lo',           xp:70  },
  { level:5,  title:'Input & Output',         icon:'⌨️', color:'#3776AB', module:1, topic:'I/O',                 desc:'input() function, type casting, user se data lo',                   xp:70  },
  { level:6,  title:'If/Else Decisions',      icon:'🤔', color:'#2E86AB', module:1, topic:'Conditionals',        desc:'if, elif, else — conditions aur comparisons',                       xp:80  },
  { level:7,  title:'Logical Operators',      icon:'🧠', color:'#2E86AB', module:1, topic:'Logic',               desc:'and, or, not — complex conditions banana',                          xp:80  },
  { level:8,  title:'While Loops',            icon:'🔄', color:'#2E86AB', module:1, topic:'Loops',               desc:'while loop — jab tak condition true ho chalata raho',               xp:90  },
  { level:9,  title:'For Loops',              icon:'🔁', color:'#2E86AB', module:1, topic:'Loops',               desc:'for loop, range(), enumerate() — list pe iterate karo',             xp:90  },
  { level:10, title:'Module 1 Boss 🏆',       icon:'👑', color:'#FFD700', module:1, topic:'Review',              desc:'Pehle 9 levels ka mega quiz — kya tum ready ho?',                   xp:150 },

  // MODULE 2: Data Structures (Levels 11-20)
  { level:11, title:'Lists — Listy Duniya',   icon:'📋', color:'#1A936F', module:2, topic:'Lists',               desc:'List banao, access karo, append/remove — Python ki taaqat!',        xp:90  },
  { level:12, title:'List Methods',           icon:'🛠️', color:'#1A936F', module:2, topic:'Lists',               desc:'sort(), reverse(), index(), count() — list manipulate karo',        xp:100 },
  { level:13, title:'Tuples — Locked Lists',  icon:'🔒', color:'#1A936F', module:2, topic:'Tuples',              desc:'Tuple kya hai — immutable data, packing/unpacking',                 xp:90  },
  { level:14, title:'Dictionaries',           icon:'📚', color:'#1A936F', module:2, topic:'Dicts',               desc:'Key-value pairs — dict banao, access karo, update karo',            xp:100 },
  { level:15, title:'Dict Methods',           icon:'🔍', color:'#114B5F', module:2, topic:'Dicts',               desc:'keys(), values(), items(), get() — dict ka poora arsenal',          xp:110 },
  { level:16, title:'Sets',                   icon:'🎯', color:'#114B5F', module:2, topic:'Sets',                desc:'Unique elements — set operations, union, intersection',              xp:100 },
  { level:17, title:'Nested Structures',      icon:'🪆', color:'#114B5F', module:2, topic:'Nesting',             desc:'List of dicts, dict of lists — complex data shapes',                xp:110 },
  { level:18, title:'List Comprehension',     icon:'⚡', color:'#114B5F', module:2, topic:'Comprehension',       desc:'Ek line mein list banao — Pythonic style!',                         xp:120 },
  { level:19, title:'Slicing & Indexing',     icon:'✂️', color:'#114B5F', module:2, topic:'Slicing',             desc:'list[1:4], negative indexing, step slicing',                        xp:110 },
  { level:20, title:'Module 2 Boss 🏆',       icon:'👑', color:'#FFD700', module:2, topic:'Review',              desc:'Data structures ka mega challenge — lists, dicts, sets!',           xp:200 },

  // MODULE 3: Functions (Levels 21-30)
  { level:21, title:'Functions Basics',       icon:'🎪', color:'#C73E1D', module:3, topic:'Functions',           desc:'def keyword, function banao, call karo, return value',              xp:120 },
  { level:22, title:'Parameters & Args',      icon:'📨', color:'#C73E1D', module:3, topic:'Functions',           desc:'Positional, keyword, default arguments — poori flexibility',        xp:130 },
  { level:23, title:'*args & **kwargs',       icon:'🌟', color:'#C73E1D', module:3, topic:'Functions',           desc:'Variable arguments — any number of inputs handle karo',             xp:140 },
  { level:24, title:'Scope & Variables',      icon:'🌍', color:'#C73E1D', module:3, topic:'Scope',               desc:'Local vs global scope — variable visibility samjho',                xp:130 },
  { level:25, title:'Lambda Functions',       icon:'λ',  color:'#8B1A1A', module:3, topic:'Lambda',              desc:'Anonymous functions — ek line mein chota function',                xp:140 },
  { level:26, title:'Map, Filter, Reduce',    icon:'🗺️', color:'#8B1A1A', module:3, topic:'Functional',          desc:'Functional programming ka pehla qadam',                            xp:150 },
  { level:27, title:'Recursion',              icon:'🪞', color:'#8B1A1A', module:3, topic:'Recursion',           desc:'Function jo khud ko call kare — factorial, fibonacci',              xp:160 },
  { level:28, title:'Decorators Intro',       icon:'🎀', color:'#8B1A1A', module:3, topic:'Decorators',          desc:'@decorator syntax — functions ko wrap karo',                       xp:160 },
  { level:29, title:'Higher Order Funcs',     icon:'🚀', color:'#8B1A1A', module:3, topic:'Functions',           desc:'Functions as arguments, closures — advanced patterns',              xp:170 },
  { level:30, title:'Module 3 Boss 🏆',       icon:'👑', color:'#FFD700', module:3, topic:'Review',              desc:'Functions ka ultimate test — 30 levels ka pehla milestone!',       xp:250 },

  // MODULE 4: OOP (Levels 31-40)
  { level:31, title:'Classes & Objects',      icon:'🏗️', color:'#6B2D8B', module:4, topic:'OOP',                desc:'class keyword, __init__, objects banao — OOP ki shuruat',           xp:170 },
  { level:32, title:'Methods & self',         icon:'👤', color:'#6B2D8B', module:4, topic:'OOP',                desc:'Instance methods, self keyword — object ka behavior define karo',   xp:170 },
  { level:33, title:'Inheritance',            icon:'🧬', color:'#6B2D8B', module:4, topic:'OOP',                desc:'Parent/child classes — code reuse ka master trick',                 xp:180 },
  { level:34, title:'Polymorphism',           icon:'🎭', color:'#6B2D8B', module:4, topic:'OOP',                desc:'Same method, alag behavior — override aur overload',                xp:180 },
  { level:35, title:'Encapsulation',          icon:'🛡️', color:'#4A1060', module:4, topic:'OOP',                desc:'Private variables, getters/setters — data protection',              xp:190 },
  { level:36, title:'Class vs Instance',      icon:'⚖️', color:'#4A1060', module:4, topic:'OOP',                desc:'Class methods, static methods, class variables',                   xp:190 },
  { level:37, title:'Magic Methods',          icon:'✨', color:'#4A1060', module:4, topic:'OOP',                desc:'__str__, __len__, __add__ — dunder methods ka jadoo',                xp:200 },
  { level:38, title:'Abstract Classes',       icon:'🎨', color:'#4A1060', module:4, topic:'OOP',                desc:'ABC module, abstract methods — interface define karo',              xp:200 },
  { level:39, title:'OOP Project',            icon:'🏆', color:'#4A1060', module:4, topic:'Project',            desc:'Bank account ya student management system banao',                   xp:220 },
  { level:40, title:'Module 4 Boss 🏆',       icon:'👑', color:'#FFD700', module:4, topic:'Review',              desc:'OOP ka mega challenge — classes, inheritance, polymorphism!',      xp:300 },

  // MODULE 5: Files & Errors (Levels 41-50)
  { level:41, title:'File Reading',           icon:'📖', color:'#0D6E6E', module:5, topic:'Files',               desc:'open(), read(), readlines() — files se data lao',                  xp:200 },
  { level:42, title:'File Writing',           icon:'✏️', color:'#0D6E6E', module:5, topic:'Files',               desc:'write(), writelines(), append mode — files mein data likho',       xp:200 },
  { level:43, title:'With Statement',         icon:'🤝', color:'#0D6E6E', module:5, topic:'Files',               desc:'context manager — safe file handling ka sahi tarika',              xp:210 },
  { level:44, title:'JSON Files',             icon:'📄', color:'#0D6E6E', module:5, topic:'JSON',                desc:'json.load(), json.dump() — data store aur read karo',              xp:220 },
  { level:45, title:'CSV Files',              icon:'📊', color:'#0A5050', module:5, topic:'CSV',                 desc:'csv module — spreadsheet data handle karo',                        xp:220 },
  { level:46, title:'Exception Handling',     icon:'🚨', color:'#0A5050', module:5, topic:'Errors',              desc:'try/except/finally — errors gracefully handle karo',               xp:230 },
  { level:47, title:'Custom Exceptions',      icon:'⚠️', color:'#0A5050', module:5, topic:'Errors',              desc:'Apni custom exception classes banao',                              xp:230 },
  { level:48, title:'OS & Path Module',       icon:'🗂️', color:'#0A5050', module:5, topic:'Modules',             desc:'os, pathlib — folders aur files system se kaam karo',              xp:240 },
  { level:49, title:'Regular Expressions',    icon:'🔎', color:'#0A5050', module:5, topic:'Regex',               desc:'re module — pattern matching, text search karo',                  xp:250 },
  { level:50, title:'Module 5 Boss 🏆',       icon:'👑', color:'#FFD700', module:5, topic:'Review',              desc:'Files aur errors ka mega test — halfway champion!',                xp:350 },

  // MODULE 6: Advanced Python (Levels 51-60)
  { level:51, title:'Modules & Packages',     icon:'📦', color:'#1B4332', module:6, topic:'Modules',             desc:'import, from, __init__.py — code organize karo',                   xp:250 },
  { level:52, title:'Virtual Env & pip',      icon:'🌱', color:'#1B4332', module:6, topic:'Environment',         desc:'venv, pip install — project environment setup karo',               xp:250 },
  { level:53, title:'Iterators & Generators', icon:'⚙️', color:'#1B4332', module:6, topic:'Iterators',           desc:'__iter__, yield keyword — lazy evaluation ka jadoo',               xp:270 },
  { level:54, title:'Context Managers',       icon:'🎛️', color:'#1B4332', module:6, topic:'Context',             desc:'__enter__, __exit__ — custom with statements banao',               xp:270 },
  { level:55, title:'Threading Basics',       icon:'🧵', color:'#0D2B1F', module:6, topic:'Concurrency',         desc:'threading module — parallel tasks chalao',                         xp:290 },
  { level:56, title:'Async/Await',            icon:'⚡', color:'#0D2B1F', module:6, topic:'Async',               desc:'asyncio — non-blocking code likhna seekho',                        xp:300 },
  { level:57, title:'APIs with Requests',     icon:'🌐', color:'#0D2B1F', module:6, topic:'APIs',                desc:'requests library — web APIs se data fetch karo',                  xp:300 },
  { level:58, title:'Data with Pandas',       icon:'🐼', color:'#0D2B1F', module:6, topic:'Data Science',        desc:'pandas DataFrame — data analysis ka pehla qadam',                  xp:320 },
  { level:59, title:'Final Project',          icon:'🚀', color:'#0D2B1F', module:6, topic:'Project',             desc:'Apna Python project banao — todo app, API fetcher, ya data tool!', xp:350 },
  { level:60, title:'Python Master 👑',       icon:'🎓', color:'#FFD700', module:6, topic:'Graduation',          desc:'60 levels complete! Tum ab Python developer ho! Certificate lo!', xp:500 },
];

const PYTHON_MODULES = [
  { num:1, title:'Python Buniyaad',      titleEn:'Basics',           icon:'🌱', color:'#3776AB', levels:[1,10],  desc:'Variables, loops, conditions — Python ki neev' },
  { num:2, title:'Data Structures',      titleEn:'Data Structures',  icon:'📊', color:'#1A936F', levels:[11,20], desc:'Lists, dicts, sets — data organize karna seekho' },
  { num:3, title:'Functions',            titleEn:'Functions',        icon:'🎪', color:'#C73E1D', levels:[21,30], desc:'Reusable code blocks — functions ki taaqat' },
  { num:4, title:'Object Oriented',      titleEn:'OOP',              icon:'🏗️', color:'#6B2D8B', levels:[31,40], desc:'Classes aur objects — real world programming' },
  { num:5, title:'Files & Errors',       titleEn:'Files & Errors',   icon:'📂', color:'#0D6E6E', levels:[41,50], desc:'File handling aur error management' },
  { num:6, title:'Advanced Python',      titleEn:'Advanced',         icon:'🚀', color:'#1B4332', levels:[51,60], desc:'Pro level — async, APIs, data science!' },
];

// ── Python-specific dashboard renderer ──
function isPythonLang(lang){ return typeof PROG_LANGS !== 'undefined' && PROG_LANGS.some(p => p.code === lang); }

function renderDashPython(lang, cs, c){
  const pl = PROG_LANGS.find(p => p.code === lang) || {name:'Python',icon:'🐍',color:'#3776AB'};
  const LEVELS = lang === 'python' ? PYTHON_LEVELS : PYTHON_LEVELS; // Future: per-lang levels
  const currentLevel = cs.day || 1;
  const doneLevels = cs.done || [];

  // ── Top bar updates ──
  const tlf = document.getElementById('topLangFlag');
  if(tlf) tlf.textContent = pl.icon;
  const cl = document.getElementById('topCourseLabel');
  if(cl) cl.textContent = pl.icon + ' 60 Levels';
  const pct = Math.round((doneLevels.length / 60) * 100);
  const pb = document.getElementById('topProgressBar');
  const pt = document.getElementById('topPct');
  if(pb) pb.style.width = pct + '%';
  if(pt) pt.textContent = pct + '%';

  // ── Section Banner — current level info ──
  const lvlData = LEVELS[currentLevel - 1] || LEVELS[0];
  const modData = PYTHON_MODULES.find(m => currentLevel >= m.levels[0] && currentLevel <= m.levels[1]) || PYTHON_MODULES[0];
  const sl = document.getElementById('sectionLabel');
  const st2 = document.getElementById('sectionTitle');
  const sectionBanner = document.getElementById('sectionBanner');
  const mainBtn = document.getElementById('mainBtn');
  if(sl) sl.textContent = 'MODULE ' + modData.num + ' — ' + modData.titleEn.toUpperCase();
  if(st2) st2.textContent = 'Level ' + currentLevel + ': ' + lvlData.title;
  if(sectionBanner) {
    sectionBanner.style.background = 'linear-gradient(135deg,' + modData.color + ',' + modData.color + 'AA)';
    sectionBanner.style.boxShadow = '0 4px 16px ' + modData.color + '44';
  }
  if(mainBtn){
    if(doneLevels.length >= 60){
      mainBtn.textContent = '🏆 Certificate Dekho!';
      mainBtn.style.background = 'linear-gradient(135deg,var(--y),var(--o))';
      mainBtn.style.color = '#000';
      mainBtn.onclick = showCert;
    } else {
      mainBtn.textContent = '▶ Level ' + currentLevel + ' Shuru Karo';
      mainBtn.style.background = pl.color;
      mainBtn.style.color = '#fff';
      mainBtn.onclick = goPythonLesson;
    }
  }

  // ── Render Python path ──
  renderPythonPath(lang, cs, LEVELS, pl);
  setTimeout(animateStats, 100);
}

function goPythonLesson(){
  const cs = CS();
  const lang = S.activeLang || 'python';
  const pl = PROG_LANGS.find(p => p.code === lang) || {name:'Python',icon:'🐍',color:'#3776AB'};
  const LEVELS = PYTHON_LEVELS;
  const lvl = LEVELS[(cs.day || 1) - 1] || LEVELS[0];
  // Build Python lesson steps
  hl = getAdminMaxHearts(); qcor = 0; qtot = 0; wrongQs = []; _ramScores = []; _ramId = 0;
  si = 0;
  LS = buildPythonSteps(cs.day || 1, lvl, pl);
  showScreen('lesson');
  setTimeout(() => renderStep(), 160);
}

function buildPythonSteps(levelNum, lvl, pl){
  const steps = [];
  // Lesson header
  steps.push({
    t:'sh', ic: lvl.icon, cl: pl.color,
    ti: 'Level ' + levelNum + ': ' + lvl.title,
    su: lvl.desc + ' • ' + lvl.xp + ' XP',
    isFirst: true
  });

  // Concept cards — topic explanation
  steps.push({
    t:'vc',
    items: getPythonConcepts(levelNum, lvl)
  });

  // Code examples as sentences
  const codeExamples = getPythonCodeExamples(levelNum, lvl);
  if(codeExamples.length > 0){
    steps.push({ t:'sn', pairs: codeExamples });
  }

  // Quiz questions
  const quizzes = getPythonQuizzes(levelNum, lvl);
  if(quizzes.length > 0){
    quizzes.slice(0, 3).forEach(q => steps.push({ t:'qz', ...q }));
  }

  // Done
  steps.push({ t:'done' });
  return steps;
}

function getPythonConcepts(levelNum, lvl){
  // Generic concept cards based on level topic
  const conceptMap = {
    1:  [{w:'print()',    m:'Screen pe text dikhao — Python ka sabse pehla command!'},
         {w:'# Comment', m:'Sharps ke baad code explain karo — run nahi hota'},
         {w:'Python',    m:'Easy, powerful language — AI, web, automation sab possible!'}],
    2:  [{w:'x = 5',     m:'Variable banao — x mein 5 store ho gaya'},
         {w:'name = "Ali"', m:'String variable — quotes mein text'},
         {w:'is_ready = True', m:'Boolean — sirf True ya False'}],
    3:  [{w:'"hello".upper()', m:'HELLO — string ko uppercase karo'},
         {w:'f"Mera naam {name}"', m:'f-string — variable seedha string mein dalo'},
         {w:'len("SpeakUp")', m:'7 — string ki length nikalo'}],
    4:  [{w:'10 + 3',    m:'13 — addition'},
         {w:'10 ** 2',   m:'100 — power/exponent'},
         {w:'10 % 3',    m:'1 — modulo, remainder nikalta hai'}],
    5:  [{w:'input("Naam?")', m:'User se text lo — keyboard se'},
         {w:'int(input())', m:'User ka input number mein convert karo'},
         {w:'print(f"Hi {name}!")', m:'User ka naam screen pe dikhao'}],
    6:  [{w:'if x > 5:', m:'Condition check karo — agar x 5 se zyada hai to'},
         {w:'elif x == 5:', m:'Warna agar — alternative condition'},
         {w:'else:', m:'Warna — jab koi bhi condition match na ho'}],
    7:  [{w:'and',       m:'Dono conditions true honi chahiye'},
         {w:'or',        m:'Ek bhi condition true ho to kafi hai'},
         {w:'not True',  m:'False — ulta kar deta hai'}],
    8:  [{w:'while x < 10:', m:'Jab tak x 10 se kam ho, loop chalta rahe'},
         {w:'break',     m:'Loop turant band karo'},
         {w:'continue',  m:'Is iteration skip karo, agla shuru karo'}],
    9:  [{w:'for i in range(5):', m:'0 se 4 tak — 5 baar loop'},
         {w:'for item in list:', m:'List ki har cheez pe loop'},
         {w:'enumerate(list)', m:'Index aur value dono ek saath lo'}],
    10: [{w:'Quiz Time!', m:'Pehle 9 levels ka test — kya aap ready ho?'},
         {w:'Review',    m:'Variables, strings, loops, conditions — sab yaad karo!'},
         {w:'Boss Level',m:'Yeh seedha nahi hoga — tayyar ho jao! 💪'}],
  };
  const concepts = conceptMap[levelNum] || [
    {w: lvl.topic,    m: lvl.desc},
    {w: 'Level ' + levelNum, m: 'Naya concept seekho — practice karo!'},
    {w: 'Python',     m: 'Har level pe ek nai skill — building blocks!'},
  ];
  return concepts;
}

function getPythonCodeExamples(levelNum, lvl){
  const exMap = {
    1:  [{a:'print("Hello World!")',  b:'Hello World! — Screen pe text aaya!'},
         {a:'print("Mera naam Ali")', b:'Mera naam Ali — apna naam print karo'}],
    2:  [{a:'age = 20\nprint(age)',   b:'20 — variable store hua aur print hua'},
         {a:'name = "Sara"\nprint("Hi", name)', b:'Hi Sara — string variable use hua'}],
    3:  [{a:'"speakup".upper()',       b:'SPEAKUP — sab capital letters'},
         {a:'x = "Python"\nprint(f"I love {x}")', b:'I love Python — f-string ne x ki value dali'}],
    4:  [{a:'print(5 + 3)',            b:'8 — addition'},
         {a:'print(2 ** 10)',          b:'1024 — 2 ki power 10'}],
    5:  [{a:'name = input("Naam: ")\nprint("Hello", name)', b:'User naam type karta hai, hello milta hai'},
         {a:'num = int(input("Number: "))\nprint(num * 2)',  b:'User ka number double ho ke aata hai'}],
    6:  [{a:'x = 10\nif x > 5:\n    print("Zyada")',        b:'Zyada — condition true thi'},
         {a:'if x>10:\n    print("Bara")\nelse:\n    print("Chota")', b:'Chota — x 10 se zyada nahi tha'}],
    7:  [{a:'x=5\nif x>0 and x<10:\n    print("Range mein")', b:'Range mein — dono conditions true theen'},
         {a:'if not False:\n    print("Haan!")',              b:'Haan! — not ne False ko True banaya'}],
    8:  [{a:'i=0\nwhile i<3:\n    print(i)\n    i+=1',        b:'0, 1, 2 — teen baar print hua'},
         {a:'while True:\n    x=input("q to quit: ")\n    if x=="q": break', b:'Jab q likho tab loop band hoga'}],
    9:  [{a:'for i in range(3):\n    print(i)',               b:'0, 1, 2 — range ne 3 numbers diye'},
         {a:'fruits=["apple","mango"]\nfor f in fruits:\n    print(f)', b:'apple, mango — list pe loop'}],
  };
  return exMap[levelNum] || [{a:'# Level ' + levelNum + ' code', b: lvl.topic + ' ka example dekhao'}];
}

function getPythonQuizzes(levelNum, lvl){
  const quizMap = {
    1:  [{q:'Python mein screen pe text print karne ka command kya hai?',
          opts:['print()','show()','display()','write()'], ans:0},
         {q:'"#" sign Python mein kya hota hai?',
          opts:['Error','Comment','Variable','Loop'], ans:1},
         {q:'Python kaise chalate hain?',
          opts:['Browser mein','Terminal/Command mein','Notepad mein','Calculator mein'], ans:1}],
    2:  [{q:'x = 5 mein kya ho raha hai?',
          opts:['x aur 5 compare ho rahe','5 ki value x mein store ho rahi','x print ho raha','Error aa raha'], ans:1},
         {q:'String variable kaise banate hain?',
          opts:['x = 5','x = True','x = "Ali"','x = 3.14'], ans:2},
         {q:'Boolean ki possible values kya hain?',
          opts:['Yes/No','1/0','True/False','On/Off'], ans:2}],
    3:  [{q:'"hello".upper() ka result kya hoga?',
          opts:['hello','HELLO','Hello','hELLO'], ans:1},
         {q:'f"Mera naam {name}" mein {name} kya karega?',
          opts:['Sirf text show karega','{name} literally print hoga','Variable ki value daal dega','Error dega'], ans:2},
         {q:'len("Python") ka result kya hai?',
          opts:['5','6','7','8'], ans:1}],
    4:  [{q:'Python mein 10 ** 3 ka kya matlab hai?',
          opts:['10 + 3 = 13','10 x 3 = 30','10 ki power 3 = 1000','10 divided by 3'], ans:2},
         {q:'10 % 3 ka result kya hai?',
          opts:['3','1','0','10'], ans:1},
         {q:'Math operations ki precedence mein pehle kya hota hai?',
          opts:['+ aur -','* aur /','( ) brackets','** power'], ans:2}],
    5:  [{q:'input() function kya return karta hai?',
          opts:['Integer','Float','String','Boolean'], ans:2},
         {q:'User se number lene ke liye kya likhte hain?',
          opts:['num = input()','num = int(input())','num = number()','num = getint()'], ans:1},
         {q:'print() mein multiple values kaise dikhate hain?',
          opts:['print(a,b)','print(a+b)','print(a;b)','print(a|b)'], ans:0}],
    6:  [{q:'if ke baad kya aata hai?',
          opts:['( )','{ }','condition aur :',';'], ans:2},
         {q:'elif ka matlab kya hai?',
          opts:['Else If — alternative condition','Error If','End Loop','Execute Immediately'], ans:0},
         {q:'x = 7 pe if x > 10: block chalega?',
          opts:['Haan — 7 > 10 true hai','Nahi — 7 > 10 false hai','Error aayega','Depends'], ans:1}],
    7:  [{q:'"and" operator kab True deta hai?',
          opts:['Jab koi ek condition true ho','Jab dono conditions true hon','Hamesha','Kabhi nahi'], ans:1},
         {q:'"not True" ka result kya hai?',
          opts:['True','False','None','Error'], ans:1},
         {q:'"or" kab True deta hai?',
          opts:['Sirf dono true hon to','Koi ek bhi true ho to','Sirf pehli true ho to','Kabhi nahi'], ans:1}],
    8:  [{q:'while loop kab band hota hai?',
          opts:['Jab condition False ho','Jab condition True ho','Hamesha chalta hai','10 baar ke baad'], ans:0},
         {q:'"break" ka kaam kya hai?',
          opts:['Loop aage badhata hai','Turant loop band karta hai','Variable delete karta hai','Next loop shuru karta hai'], ans:1},
         {q:'"continue" kya karta hai?',
          opts:['Loop band karta hai','Is iteration skip kar ke agla shuru karta hai','Variable reset karta hai','Function call karta hai'], ans:1}],
    9:  [{q:'range(5) kya generate karta hai?',
          opts:['1,2,3,4,5','0,1,2,3,4','0,1,2,3,4,5','1,2,3,4'], ans:1},
         {q:'for loop English ki list ke elements pe kaise chalate hain?',
          opts:['for i in list:','for list:','foreach list:','loop list:'], ans:0},
         {q:'enumerate() kya extra deta hai?',
          opts:['Sirf values','Index aur value dono','Sirf index','Dictionary'], ans:1}],
  };
  return quizMap[levelNum] || [
    {q: lvl.topic + ' ke baare mein — Python mein yeh concept kyun important hai?',
     opts:['Code organize karta hai','Sirf debugging ke liye','Performance ke liye','Optional hai'], ans:0},
    {q:'Level ' + levelNum + ' ka main concept kya hai?',
     opts:[lvl.topic, 'Variables', 'Loops', 'Classes'], ans:0},
    {q:'Python seekhne ka sabse acha tarika kya hai?',
     opts:['Sirf padhna','Practice aur coding','YouTube dekhna','Kitabein yaad karna'], ans:1},
  ];
}

function renderPythonPath(lang, cs, LEVELS, pl){
  const g = document.getElementById('dG');
  g.innerHTML = '';
  const doneLevels = cs.done || [];
  const currentLevel = cs.day || 1;
  const positions = ['flex-start','center','flex-end','center'];
  let html = '';

  PYTHON_MODULES.forEach((mod) => {
    // Module header
    const modDone = doneLevels.filter(d => d >= mod.levels[0] && d <= mod.levels[1]).length;
    const modTotal = mod.levels[1] - mod.levels[0] + 1;
    const modPct = Math.round(modDone / modTotal * 100);
    html += `<div style="width:100%;margin:${mod.num===1?'0':'24px'} 0 10px;padding:0 2px;">
      <div style="background:linear-gradient(135deg,${mod.color}28,${mod.color}14);border:2px solid ${mod.color}66;border-radius:22px;padding:16px 18px;box-shadow:0 4px 20px ${mod.color}22;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
          <div style="width:50px;height:50px;border-radius:16px;background:${mod.color}33;border:2px solid ${mod.color}55;display:flex;align-items:center;justify-content:center;font-size:26px;box-shadow:0 0 14px ${mod.color}44;">${mod.icon}</div>
          <div style="flex:1;">
            <div style="font-size:9px;color:${mod.color};font-weight:800;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">MODULE ${mod.num}</div>
            <div style="font-family:'Fredoka One',sans-serif;font-size:16px;color:${mod.color};text-shadow:0 0 12px ${mod.color}66;">${mod.title}</div>
            <div style="font-size:10px;color:var(--mut);margin-top:2px;">${mod.desc}</div>
          </div>
          <div style="background:${mod.color}22;border:1px solid ${mod.color}55;border-radius:20px;padding:4px 10px;font-size:12px;color:${mod.color};font-weight:800;">${modPct}%</div>
        </div>
        <div style="height:8px;background:rgba(255,255,255,.06);border-radius:8px;overflow:hidden;border:1px solid ${mod.color}22;">
          <div style="height:100%;width:${modPct}%;background:linear-gradient(90deg,${mod.color},${mod.color}CC);border-radius:8px;transition:width .8s ease;box-shadow:0 0 8px ${mod.color}66;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:10px;color:${mod.color}88;font-weight:700;">
          <span>${modDone} levels complete</span><span>${modTotal - modDone} levels baaki</span>
        </div>
      </div>
    </div>`;

    // Level nodes inside this module
    for(let lvlNum = mod.levels[0]; lvlNum <= mod.levels[1]; lvlNum++){
      const lvl = LEVELS[lvlNum - 1];
      const isDone = doneLevels.includes(lvlNum);
      const isToday = lvlNum === currentLevel;
      const isBoss = lvl.topic === 'Review' || lvl.topic === 'Graduation';
      const pos = positions[(lvlNum - 1) % 4];
      const margin = pos === 'center' ? '0 auto' : pos === 'flex-end' ? '0 24px 0 auto' : '0 auto 0 24px';
      const nodeSize = isBoss ? '66px' : '58px';
      const nodeBg = isDone
        ? (isBoss ? 'linear-gradient(135deg,#FFD166,#FF9A3C)' : 'linear-gradient(135deg,' + lvl.color + ',' + lvl.color + 'AA)')
        : isToday ? 'linear-gradient(135deg,#FF9A3C,#FFD166)'
        : 'linear-gradient(135deg,#1E1C38,#2A2748)';

      // Owl — you are here
      if(isToday){
        html += `<div class="owl-pos" style="margin:10px 0;">
          <div class="owl-pos-inner">
            <div class="owl-bubble" style="font-size:13px;padding:8px 18px;border-radius:22px;">📍 Tum yahaan ho!</div>
            <div style="font-size:36px;filter:drop-shadow(0 6px 14px rgba(255,154,60,.6));animation:owlFloat 2s ease infinite;margin-top:2px;">🦉</div>
          </div>
        </div>`;
      }

      // Boss reward before boss level
      if(isBoss && lvlNum > 1){
        const bossUnlocked = doneLevels.length >= lvlNum - 1;
        html += `<div class="path-row" style="justify-content:center;margin:6px 0;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
            <div style="font-size:44px;filter:${bossUnlocked?'drop-shadow(0 6px 16px rgba(255,209,102,.65))':'grayscale(1)'};opacity:${bossUnlocked?1:.4};animation:${bossUnlocked?'bounceBig 2s ease infinite':'none'};">👑</div>
            <div style="font-family:'Fredoka One',sans-serif;font-size:10px;color:${bossUnlocked?'var(--y)':'var(--mut)'};text-align:center;">${bossUnlocked?'Module Complete! 🎉':'Locked 🔒'}</div>
          </div>
        </div>`;
      }

      html += `<div class="path-row" style="justify-content:${pos};margin:6px 0;">
        <div onclick="${isToday?'goPythonLesson()':isDone?'showToast(\'Level '+lvlNum+' complete! ✅\',\''+lvl.color+'\')':'showToast(\'Pehle Level '+(lvlNum-1)+' complete karo! 🔒\',\'#666\')'}"
          style="width:${nodeSize};height:${nodeSize};border-radius:${isBoss?'22px':'50%'};background:${nodeBg};display:flex;align-items:center;justify-content:center;font-size:${isBoss?'26px':'22px'};margin:${margin};cursor:pointer;box-shadow:${isToday?'0 0 0 6px rgba(255,154,60,.35),0 6px 20px rgba(255,154,60,.5)':isDone?'0 4px 12px rgba(0,0,0,.3)':'0 2px 8px rgba(0,0,0,.2)'};border:${isToday?'3px solid #FF9A3C':isBoss&&isDone?'3px solid #FFD166':'2px solid rgba(255,255,255,.1)'};transition:transform .15s;"
          onmousedown="this.style.transform='scale(.9)'" onmouseup="this.style.transform=''" ontouchstart="this.style.transform='scale(.9)'" ontouchend="this.style.transform=''">
          ${isDone ? '✅' : isToday ? lvl.icon : isBoss ? '🔒' : '<span style="font-size:10px;color:var(--mut);font-weight:700;">' + lvlNum + '</span>'}
        </div>
      </div>
      <div style="font-size:9px;color:${isToday?'var(--o)':isDone?'var(--g)':'var(--mut)'};text-align:${pos==='flex-start'?'left':pos==='flex-end'?'right':'center'};margin:0 ${pos==='center'?'auto':'28px'} 2px;font-weight:700;max-width:80px;">
        ${isDone?'✓ ':isToday?'▶ ':''}${lvl.title.length>14?lvl.title.slice(0,13)+'…':lvl.title}
      </div>`;

      // Connector line between nodes
      if(lvlNum < mod.levels[1]){
        html += `<div class="path-row" style="justify-content:center;">
          <div style="width:4px;height:16px;border-radius:4px;background:${isDone?'var(--g)':'var(--bdr)'};margin:0 auto;"></div>
        </div>`;
      }
    }
  });

  g.innerHTML = html;
}


function getDaySection(day){
  const lang=S.activeLang||'en';
  const sd=ALL_SECTIONS[lang]||ALL_SECTIONS['en'];
  for(const [sNum, sdata] of Object.entries(sd)){
    if(day>=sdata.days[0] && day<=sdata.days[1]) return {sNum:parseInt(sNum), ...sdata};
  }
  return null;
}
// Helper: which unit is this day in?
function getDayUnit(day){
  const lang=S.activeLang||'en';
  const sd=ALL_SECTIONS[lang]||ALL_SECTIONS['en'];
  for(const sdata of Object.values(sd)){
    for(const u of sdata.units){
      if(day>=u.days[0] && day<=u.days[1]) return u;
    }
  }
  return null;
}
// Helper to get section data obj for template that uses Object.keys(SECTION_DATA)
function getSectionData(){
  const lang=S.activeLang||'en';
  return ALL_SECTIONS[lang]||ALL_SECTIONS['en'];
}

// ── SHOW SECTION / UNIT INFO MODAL ──
function showDayInfo(){
  const cs=CS();
  const day=cs.day;
  const sec=getDaySection(day);
  const unit=getDayUnit(day);
  if(!sec||!unit) return;

  // Build modal HTML
  const sectionDone=cs.done.filter(d=>d>=sec.days[0]&&d<=sec.days[1]).length;
  const sectionTotal=sec.days[1]-sec.days[0]+1;
  const unitDone=cs.done.filter(d=>d>=unit.days[0]&&d<=unit.days[1]).length;
  const unitTotal=unit.days[1]-unit.days[0]+1;

  const modal=document.getElementById('sectionInfoModal');
  const body=document.getElementById('sectionInfoBody');
  if(!modal||!body) return;

  body.innerHTML=`
    <!-- Section card -->
    <div style="background:linear-gradient(135deg,${sec.color}22,${sec.color}11);border:2px solid ${sec.color}55;border-radius:20px;padding:18px;margin-bottom:16px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <div style="font-size:40px;">${sec.icon}</div>
        <div style="flex:1;">
          <div style="font-size:10px;color:${sec.color};font-weight:800;text-transform:uppercase;letter-spacing:.6px;margin-bottom:2px;">SECTION ${Object.keys(getSectionData()).find(k=>getSectionData()[k]===sec)||sec.sNum||'?'}</div>
          <div style="font-family:'Fredoka One',sans-serif;font-size:18px;color:${sec.color};">${sec.title}</div>
          <div style="font-size:12px;color:var(--mut);">${sec.titleUr} • Days ${sec.days[0]}–${sec.days[1]}</div>
        </div>
      </div>
      <div style="font-size:12px;color:rgba(255,255,255,.6);margin-bottom:10px;line-height:1.5;">${sec.desc}</div>
      <div style="height:8px;background:rgba(255,255,255,.08);border-radius:8px;overflow:hidden;margin-bottom:6px;">
        <div style="height:100%;width:${Math.round(sectionDone/sectionTotal*100)}%;background:${sec.color};border-radius:8px;transition:width .5s;"></div>
      </div>
      <div style="font-size:11px;color:${sec.color};font-weight:700;">${sectionDone}/${sectionTotal} din complete • ${Math.round(sectionDone/sectionTotal*100)}%</div>
    </div>

    <!-- All Units in this section -->
    <div style="font-size:11px;color:var(--mut);font-weight:800;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px;">📦 Is Section Ke Units</div>
    ${sec.units.map(u=>{
      const uDone=cs.done.filter(d=>d>=u.days[0]&&d<=u.days[1]).length;
      const uTotal=u.days[1]-u.days[0]+1;
      const isCurrentUnit=day>=u.days[0]&&day<=u.days[1];
      const isCompleted=uDone>=uTotal;
      return `<div style="background:var(--card);border-radius:16px;padding:14px 16px;margin-bottom:10px;border:2px solid ${isCurrentUnit?u.color:'var(--bdr)'};position:relative;overflow:hidden;">
        ${isCurrentUnit?`<div style="position:absolute;top:8px;right:10px;background:${u.color};color:#000;font-size:9px;font-weight:800;padding:2px 8px;border-radius:10px;">YOU ARE HERE 📍</div>`:''}
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
          <div style="font-size:28px;">${isCompleted?'✅':u.icon}</div>
          <div style="flex:1;">
            <div style="font-family:'Fredoka One',sans-serif;font-size:15px;color:${u.color};">Unit ${u.num}: ${u.title}</div>
            <div style="font-size:11px;color:var(--mut);">Days ${u.days[0]}–${u.days[1]} • ${u.goal}</div>
          </div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px;">
          ${u.topics.map(t=>`<span style="background:${u.color}22;color:${u.color};font-size:10px;font-weight:700;padding:3px 8px;border-radius:8px;">${t}</span>`).join('')}
        </div>
        <div style="height:6px;background:rgba(255,255,255,.08);border-radius:6px;overflow:hidden;margin-bottom:4px;">
          <div style="height:100%;width:${Math.round(uDone/uTotal*100)}%;background:${u.color};border-radius:6px;transition:width .5s;"></div>
        </div>
        <div style="font-size:10px;color:var(--mut);">${uDone}/${uTotal} din complete</div>
      </div>`;
    }).join('')}

    <!-- Today's lesson info -->
    <div style="font-size:11px;color:var(--mut);font-weight:800;text-transform:uppercase;letter-spacing:.5px;margin:14px 0 10px;">📅 Aaj Ka Din — Day ${day}</div>
    ${(()=>{
      const lang3=S.activeLang||'en';
      const langDays3=ALL_DAYS[lang3]||ALL_DAYS['en'];
      const dd=langDays3[day];
      if(!dd) return `<div style="background:var(--card);border-radius:14px;padding:14px;border:1px solid var(--bdr);font-size:13px;color:var(--mut);">🔒 This lesson is not available yet — coming soon!</div>`;
      return `<div style="background:var(--card);border-radius:16px;padding:16px;border:2px solid ${dd.color||'var(--g)'};">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
          <div style="font-size:32px;">${dd.emoji}</div>
          <div>
            <div style="font-family:'Fredoka One',sans-serif;font-size:16px;color:${dd.color||'var(--g)'};">${dd.themeEn}</div>
            <div style="font-size:12px;color:var(--mut);">${dd.theme}</div>
          </div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <span style="background:rgba(88,204,2,.15);color:var(--g);font-size:10px;font-weight:700;padding:3px 8px;border-radius:8px;">📖 ${dd.vocab.length} Words</span>
          <span style="background:rgba(28,176,246,.15);color:var(--b);font-size:10px;font-weight:700;padding:3px 8px;border-radius:8px;">🗣️ ${dd.sentences.length} Sentences</span>
          <span style="background:rgba(255,150,0,.15);color:var(--o);font-size:10px;font-weight:700;padding:3px 8px;border-radius:8px;">✏️ ${dd.grammar.length} Grammar Rules</span>
          <span style="background:rgba(206,130,255,.15);color:var(--p);font-size:10px;font-weight:700;padding:3px 8px;border-radius:8px;">📚 1 Story</span>
          <span style="background:rgba(255,215,0,.15);color:var(--y);font-size:10px;font-weight:700;padding:3px 8px;border-radius:8px;">❓ ${dd.quizzes.length} Quizzes</span>
        </div>
      </div>`;
    })()}

    <button onclick="document.getElementById('sectionInfoModal').style.display='none';goLesson();"
      style="width:100%;padding:16px;border-radius:16px;border:none;background:var(--g);color:#fff;font-family:'Fredoka One',sans-serif;font-size:18px;cursor:pointer;box-shadow:0 5px 0 var(--g2);margin-top:16px;">
      ▶ Lesson Shuru Karo
    </button>
  `;

  modal.style.display='flex';
}

// ============================================================
// BUILD LESSON from DAYS data
// ============================================================
// buildSteps — 30/60/90 day course division
//
// 30 lessons total. App divides them:
//   30-day course → Day N = Lesson N (full)
//   60-day course → Day N = Lesson ceil(N/2), portion = N%2===1 ? first half : second half
//   90-day course → Day N = Lesson ceil(N/3), portion = N%3 (0=first, 1=second, 2=third)
// ============================================================
function buildSteps(course){
  const cs=CS();
  const dayNum=cs.day;
  const lang=S.activeLang||'en';
  const langDays = ALL_DAYS[lang]||{};

  // ── Calculate which lesson and which portion ──
  let lessonNum, portion; // portion: 0=full/first, 1=second, 2=third

  if(course===30 || course===7){
    // 30-day: Day 1=Lesson 1 full, Day 2=Lesson 2 full...
    lessonNum = dayNum;
    portion = 0; // full
  } else if(course===60){
    // 60-day: Day 1=Lesson 1 first half, Day 2=Lesson 1 second half,
    //         Day 3=Lesson 2 first half, Day 4=Lesson 2 second half...
    lessonNum = Math.ceil(dayNum/2);
    portion = (dayNum%2===1) ? 0 : 1; // 0=first half, 1=second half
  } else {
    // 90-day: Day 1=Lesson 1 part1, Day 2=Lesson 1 part2, Day 3=Lesson 1 part3,
    //         Day 4=Lesson 2 part1...
    lessonNum = Math.ceil(dayNum/3);
    const rem = dayNum%3;
    portion = rem===1 ? 0 : rem===2 ? 1 : 2; // 0=first third, 1=second third, 2=last third
  }

  const dayData = langDays[lessonNum] || (() => {
    // ALL_DAYS mein nahi hai — Firebase/admin data se check karo
    try {
      const adData = (typeof AD !== 'undefined' && AD) ? AD : JSON.parse(localStorage.getItem('speakup_admin') || '{}');
      const adminDay = adData.langs && adData.langs[lang] && adData.langs[lang].days && adData.langs[lang].days[lessonNum];
      if (adminDay && adminDay.lessonContent) return adminDay.lessonContent;
    } catch(e){}