
/* =====================================================================
   MODIFIEZ UNIQUEMENT CET OBJET : tout le site se génère à partir de lui.
   ===================================================================== */
const DATA = {
  name: "Abderrahim El Ouardi",
  role: "Data Scientist",
  available: "Disponible pour un stage de fin d'études de 6 mois",
  lead: "Je conçois des solutions de Machine Learning, de LLM et de RAG, du prototype jusqu'au déploiement.",
  about: "Étudiant en double diplôme Master 2 EID2 (Université Sorbonne Paris Nord) et Master WISD (Faculté des Sciences de Fès). Solide en mathématiques appliquées et en Data Science, je combine théorie et pratique : Machine Learning, traitement du signal (filtre de Kalman), modélisation statistique, Large Language Models et RAG.",
  photo: "./assets/photo.png",   // data URI ou chemin ; si l'image est introuvable, le monogramme s'affiche
  suggestions: ["Quels sont ses meilleurs projets ?", "Quelles technologies maîtrise-t-il ?", "Est-il disponible pour un stage ?", "Comment le contacter ?"],
  botNotes: "",
  cvUrl: "",
  links: { email: "elouardiabderrahim06@gmail.com", phone: "+212 676881260",
    linkedin: "https://linkedin.com/in/abderrahimelouardi/", github: "https://github.com/abderrahim-elouardi" },
  experience: [{
    title: "Stagiaire Data et IA / Développeur IA", org: "Ibhar Network", date: "juin 2026 – août 2026",
    points: ["Intégration de modèles d'IA de vérification d'images et optimisation de la scalabilité du système.",
      "Design patterns : gestion de workers, réplication de bases de données, reverse proxy.",
      "Base vectorielle compatible avec une base relationnelle pour un pipeline RAG générant des plans personnalisés."]
  }],
  projects: [
    {
  title: "Mini-GPT et évaluation de LLM quantifiés",
  cat: "LLM & RAG",
  featured: true,
  url: "https://github.com/abderrahim-elouardi/small-agentic-rag-benchmark",
  desc: "Mini-GPT avec RoPE, GQA et attention causale ; RAG agentique à recherche hybride ; benchmark FP16/NF4 sur NVIDIA T4.",
  more: [
    "Implémentation d'un Mini-GPT avec RoPE, GQA et attention causale en PyTorch.",
    "Développement d'un RAG agentique avec recherche hybride, reclassement et outils Python.",
    "Benchmark FP16/NF4 sur NVIDIA T4 : réduction de 53,1 % de la mémoire GPU, au prix d'une baisse de 31,1 % du débit de génération."
  ],
  tags: ["Python", "PyTorch", "Hugging Face", "CUDA", "BitsAndBytes"]
},

    { title: "Système multi-agents ETICS et RAG avancé", cat: "LLM & RAG", featured: true, url: "https://github.com/BDA-EID2/ETICS",
      desc: "Agents d'extraction de contrats vers PostgreSQL et d'analyse de toxicité ; RAG sécurisé sur Qdrant, API authentifiée, CI/CD.",
      more: ["Deux agents : extraction structurée de contrats de travail vers PostgreSQL, et analyse de toxicité avec scores contextuels.",
        "Pipeline RAG sur Qdrant : chunking, embedding et interrogation ciblée.",
        "API FastAPI authentifiée qui limite les réponses aux documents autorisés de l'utilisateur.",
        "Conteneurisation Docker et CI/CD avec tests unitaires et d'intégration."],
      tags: ["Qdrant", "FastAPI", "PostgreSQL", "Docker", "Pytest"] },
    { title: "Analyse tactique de matchs de football", cat: "Vision", featured: true, url: "https://github.com/abderrahim-elouardi/Analyse-Tactique-du-Football-par-Vision-par-Ordinateur",
      desc: "Détection YOLO et suivi DeepSORT, filtre de Kalman et algorithme hongrois, descripteurs CNN contre les occlusions.",
      more: ["Pipeline de bout en bout : YOLO pour la détection, DeepSORT pour le suivi multi-objets.",
        "Filtre de Kalman et algorithme hongrois pour garder des identifiants stables dans le temps.",
        "CNN pré-entraînés pour les descripteurs d'apparence ; similarité cosinus pour gérer les occlusions."],
      tags: ["YOLO", "DeepSORT", "Kalman", "CNN"] },
    { title: "Système MLOps d'estimation des prix immobiliers", cat: "Data & MLOps", url: "https://github.com/abderrahim-elouardi/Systeme_MLOps_d_estimation_des_prix_immobiliers",
      desc: "Versionnage DVC, suivi MLflow, tests en CI et déploiement continu via une API FastAPI.",
      tags: ["DVC", "MLflow", "FastAPI", "CI/CD"] },
    { title: "Recommandation et génération d'itinéraires par LLM", cat: "LLM & RAG", url: "",
      desc: "Base vectorielle synchronisée, recherche par similarité pondérée et synthèse d'un plan sur mesure par LLM.",
      tags: ["Vector DB", "LLM", "Backend"] },
    { title: "Système RAG expert pour l'écosystème Spring", cat: "LLM & RAG", url: "https://github.com/abderrahim-elouardi/spring-bot-RAG-",
      desc: "Application React Native et backend FastAPI ; indexation de la documentation dans ChromaDB, LLM DeepSeek via OpenRouter.",
      tags: ["React Native", "FastAPI", "ChromaDB", "MiniLM"] },
    { title: "Pipeline de Data Engineering – marché de l'emploi", cat: "Data & MLOps", url: "https://github.com/abderrahim-elouardi/job-skills-data-analysis-pipeline",
      desc: "Collecte Indeed, Glassdoor et RemoteOK, orchestration Airflow sous Docker, traitement NLP (TF-IDF).",
      tags: ["Airflow", "Docker", "PostgreSQL", "NLTK"] },
    { title: "Classification de chiffres manuscrits", cat: "Vision", url: "https://github.com/abderrahim-elouardi/digit-vision-pytorch",
      desc: "CNN PyTorch avec Dropout, checkpointing sur la Val Loss et rapports de classification complets.",
      tags: ["PyTorch", "CNN", "Dropout"] },
    { title: "Analyse de sentiment par réseau LSTM", cat: "LLM & RAG", url: "",
      desc: "Critiques de films AlloCiné (Hugging Face), prétraitement spaCy et LSTM PyTorch pour prédire la polarité.",
      tags: ["LSTM", "spaCy", "Hugging Face"] },
    { title: "Comportement des cartes de crédit : ACP et clustering", cat: "Machine Learning", url: "",
      desc: "Tests KMO et Bartlett, ACP avec FactoMineR et segmentation K-Means sous R.",
      tags: ["R", "ACP", "K-Means"] }
  ],
  skills: {
    "Machine Learning": ["Scikit-Learn", "XGBoost", "Random Forest", "SVM", "K-Means", "ACP", "Séries temporelles", "Reinforcement learning"],
    "Deep Learning": ["PyTorch", "TensorFlow", "CNN", "ResNet", "RNN / LSTM", "ViT"],
    "Vision par ordinateur": ["OpenCV", "YOLO", "DeepSORT", "Faster / Mask R-CNN"],
    "NLP et Agentic AI": ["LangChain", "LangGraph", "RAG", "MCP", "LoRA / QLoRA", "PEFT", "Hugging Face", "spaCy"],
    "Langages": ["Python", "R", "SQL", "Java", "TypeScript", "JavaScript", "PHP", "C / C++"],
    "Data Engineering": ["PostgreSQL", "MySQL", "Oracle", "Redis", "Airflow", "Kafka", "ETL/ELT", "Web scraping"],
    "MLOps et DevOps": ["MLflow", "DVC", "Docker", "Kubernetes", "CI/CD", "FastAPI", "Git", "Linux"],
    "Outils et méthodes": ["Streamlit", "Power BI", "Scrum", "Jira"]
  },
  /* current: true → badge « En cours » ; points : puces facultatives */
  education: [
    { title: "Master EID2 – Exploration Informatique des Données et Décisionnel", school: "Université Sorbonne Paris Nord", place: "France", date: "2026 – 2027", current: true,
      points: ["Double diplôme, en parallèle du Master WISD"] },
    { title: "Master WISD – Web Intelligence et Data Science", school: "Faculté des Sciences Dhar El Mahraz", place: "Fès", date: "2025 – 2027", current: true,
      points: ["Machine Learning, LLM, RAG et Data Science"] },
    { title: "Licence en Mathématiques et Informatique (SMI)", school: "Faculté des Sciences Dhar El Mahraz", place: "Fès", date: "2024 – 2025" },
    { title: "DEUG en Mathématiques et Informatique (SMI)", school: "Faculté des Sciences Dhar El Mahraz", place: "Fès", date: "2022 – 2024" }
  ],
  extra: "Langues : arabe (natif), français et anglais (courants) · Certification : Python for Data Science (LinkedIn)"
};

/* ------------------ Traductions ------------------ */
const UI = {
  fr: { menu: ["Projets", "Expérience", "Compétences", "Formation", "Contact", "Questions"], viewP: "Voir mes projets", contactMe: "Me contacter", cv: "Télécharger mon CV",
    about: "À propos", exp: "Expérience", proj: "Projets", skills: "Compétences", edu: "Formation", work: "Travaillons ensemble",
    contactText: "Je recherche un stage de fin d'études de 6 mois en Data Science et IA. Écrivez-moi, je réponds rapidement.",
    ask: "Posez vos questions", ph: "Votre question…", send: "Envoyer", note: "Les réponses sont générées à partir des informations de ce portfolio. Pour tout le reste, écrivez directement par email.",
    all: "Tous", detail: "Voir le détail", code: "Voir le code", st: ["projets réalisés", "outils et technologies", "masters en parallèle", "stage recherché"], months: "6 mois",
    now: "En cours", copy: "Copier l'email", copied: "Email copié", noisy: "Mesures bruitées", est: "Estimation (filtre de Kalman)",
    sig: "Animation : un filtre de Kalman lisse un signal bruité", theme: "Changer de thème", close: "Fermer", back: "Retour en haut", lang: "Français", pron: "Portrait de ",
    hello: n => `Bonjour ! Je réponds à vos questions sur le parcours, les projets et la disponibilité de ${n}.`,
    sugg: ["Quels sont ses meilleurs projets ?", "Quelles technologies maîtrise-t-il ?", "Est-il disponible pour un stage ?", "Comment le contacter ?"],
    contactA: (e, p) => `Email : ${e} · Téléphone : ${p}. LinkedIn et GitHub sont dans la section Contact.`, availA: e => `Écrivez à ${e}.`,
    rel: "Projets liés : ", knows: "Il maîtrise : ", seeP: "Voir la section Projets : ", nodata: e => `Je n'ai pas cette information. Le mieux est d'écrire à ${e}.`, at: " chez ", botLang: "français" },
  en: { menu: ["Projects", "Experience", "Skills", "Education", "Contact", "Questions"], viewP: "View my projects", contactMe: "Contact me", cv: "Download my CV",
    about: "About", exp: "Experience", proj: "Projects", skills: "Skills", edu: "Education", work: "Let's work together",
    contactText: "I'm looking for a 6-month end-of-studies internship in Data Science and AI. Write to me, I reply quickly.",
    ask: "Ask your questions", ph: "Your question…", send: "Send", note: "Answers are generated from the information in this portfolio. For anything else, please email directly.",
    all: "All", detail: "View details", code: "View code", st: ["projects completed", "tools and technologies", "master's degrees in parallel", "internship sought"], months: "6 months",
    now: "In progress", copy: "Copy email", copied: "Email copied", noisy: "Noisy measurements", est: "Estimate (Kalman filter)",
    sig: "Animation: a Kalman filter smooths a noisy signal", theme: "Toggle theme", close: "Close", back: "Back to top", lang: "English", pron: "Portrait of ",
    hello: n => `Hello! I can answer questions about ${n}'s background, projects and availability.`,
    sugg: ["What are his best projects?", "Which technologies does he master?", "Is he available for an internship?", "How can I contact him?"],
    contactA: (e, p) => `Email: ${e} · Phone: ${p}. LinkedIn and GitHub are in the Contact section.`, availA: e => `Write to ${e}.`,
    rel: "Related projects: ", knows: "He masters: ", seeP: "See the Projects section: ", nodata: e => `I don't have that information. The best way is to email ${e}.`, at: " at ", botLang: "English" },
  ar: { menu: ["المشاريع", "الخبرة", "المهارات", "التكوين", "تواصل", "أسئلة"], viewP: "اطّلع على مشاريعي", contactMe: "تواصل معي", cv: "تحميل سيرتي الذاتية",
    about: "نبذة عني", exp: "الخبرة", proj: "المشاريع", skills: "المهارات", edu: "التكوين الأكاديمي", work: "لنعمل معًا",
    contactText: "أبحث عن تدريب نهاية الدراسة لمدة 6 أشهر في علم البيانات والذكاء الاصطناعي. راسلني، وسأردّ بسرعة.",
    ask: "اطرح أسئلتك", ph: "اكتب سؤالك…", send: "إرسال", note: "تُولَّد الأجوبة انطلاقًا من معلومات هذا الموقع. لأي شيء آخر، راسلني مباشرة عبر البريد الإلكتروني.",
    all: "الكل", detail: "عرض التفاصيل", code: "عرض الكود", st: ["مشروعًا منجزًا", "أداة وتقنية", "ماستر بالتوازي", "تدريب مطلوب"], months: "6 أشهر",
    now: "جارٍ", copy: "نسخ البريد", copied: "تم نسخ البريد", noisy: "قياسات مشوشة", est: "التقدير (مرشح كالمان)",
    sig: "رسم متحرك: مرشح كالمان يُنعّم إشارة مشوشة", theme: "تغيير المظهر", close: "إغلاق", back: "العودة إلى الأعلى", lang: "العربية", pron: "صورة ",
    hello: n => `مرحبًا! يمكنني الإجابة عن أسئلتك حول مسار ${n} ومشاريعه ومدى توفره.`,
    sugg: ["ما هي أفضل مشاريعه؟", "ما التقنيات التي يتقنها؟", "هل هو متاح لتدريب؟", "كيف يمكن التواصل معه؟"],
    contactA: (e, p) => `البريد: ${e} · الهاتف: ${p}. حساباه على LinkedIn وGitHub في قسم التواصل.`, availA: e => `راسله على ${e}.`,
    rel: "مشاريع ذات صلة: ", knows: "يتقن: ", seeP: "راجع قسم المشاريع: ", nodata: e => `لا أملك هذه المعلومة. الأفضل مراسلته على ${e}.`, at: " لدى ", botLang: "العربية" }
};
const CATS = {
  en: { "LLM & RAG": "LLM & RAG", "Vision": "Computer Vision", "Data & MLOps": "Data & MLOps", "Machine Learning": "Machine Learning" },
  ar: { "LLM & RAG": "النماذج اللغوية وRAG", "Vision": "الرؤية الحاسوبية", "Data & MLOps": "البيانات وMLOps", "Machine Learning": "التعلم الآلي" }
};
const TR = {
  en: {
    role: "Data Scientist",

    available: "Available for a 6-month end-of-studies internship",
    lead: "I design Machine Learning, LLM and RAG solutions, from prototype to deployment.",
    about: "Dual-degree student: Master 2 EID2 (Sorbonne Paris Nord University) and Master WISD (Faculty of Sciences, Fez). Strong in applied mathematics and Data Science, I combine theory and practice: Machine Learning, signal processing (Kalman filter), statistical modelling, Large Language Models and RAG.",
    exp: [{ title: "Data & AI Intern / AI Developer", org: "Ibhar Network", date: "June 2026 – August 2026",
      points: ["Integrated image-verification AI models and improved system scalability.", "Design patterns: worker management, database replication, reverse proxy.", "Vector database coupled with a relational database for a RAG pipeline generating personalised plans."] }],
    p: [
      ["Small-Agentic-RAG and quantized model benchmark", "GQA, RoPE and KV-Cache in native PyTorch; hybrid RAG agent (dense + BM25, Cross-Encoder); AWQ/QLoRA with vLLM: −40% VRAM.",
        ["Native PyTorch implementation of Grouped-Query Attention, RoPE and a KV-Cache manager.", "RAG agent: hybrid dense + BM25 retrieval, Cross-Encoder re-ranking, Python tool execution.", "Mistral-7B and Llama-3-8B quantized (AWQ/QLoRA) and served with vLLM, using 40% less VRAM.", "Automated benchmark (latency, VRAM, LLM-as-a-Judge) and Gradio demo."]],
      ["ETICS multi-agent system and advanced RAG", "Agents extracting contracts into PostgreSQL and analysing toxicity; secured RAG on Qdrant, authenticated API, CI/CD.",
        ["Two agents: structured extraction of employment contracts into PostgreSQL, and toxicity analysis with contextual scores.", "RAG pipeline on Qdrant: chunking, embedding and targeted querying.", "Authenticated FastAPI API restricting answers to the user's authorised documents.", "Docker containerisation and CI/CD with unit and integration tests."]],
      ["Tactical analysis of football matches", "YOLO detection and DeepSORT tracking, Kalman filter and Hungarian algorithm, CNN descriptors against occlusions.",
        ["End-to-end pipeline: YOLO for detection, DeepSORT for multi-object tracking.", "Kalman filter and Hungarian algorithm to keep identities stable over time.", "Pre-trained CNNs for appearance descriptors; cosine similarity to handle occlusions."]],
      ["MLOps system for real-estate price estimation", "DVC versioning, MLflow tracking, CI tests and continuous deployment through a FastAPI API."],
      ["LLM-based itinerary recommendation and generation", "Synchronised vector database, weighted similarity search and LLM synthesis of a tailor-made plan."],
      ["Expert RAG system for the Spring ecosystem", "React Native app and FastAPI backend; documentation indexed in ChromaDB, DeepSeek LLM via OpenRouter."],
      ["Data Engineering pipeline – job market", "Collection from Indeed, Glassdoor and RemoteOK, Airflow orchestration on Docker, NLP processing (TF-IDF)."],
      ["Data job market analysis", "Most requested skills, median salaries, remote work; visualisations and Power BI dashboard."],
      ["Bank fraud detection", "Highly imbalanced data: resampling, Random Forest and logistic regression, evaluated with recall, F1 and AUC-ROC."],
      ["Life expectancy prediction", "Full EDA of the WHO dataset, regression comparison, regularisation and cross-validation."],
      ["Handwritten digit classification", "PyTorch CNN with Dropout, checkpointing on validation loss and full classification reports."],
      ["Sentiment analysis with an LSTM network", "AlloCiné movie reviews (Hugging Face), spaCy preprocessing and a PyTorch LSTM to predict polarity."],
      ["Credit card behaviour: PCA and clustering", "KMO and Bartlett tests, PCA with FactoMineR and K-Means segmentation in R."]
    ],
    sk: { "Machine Learning": "Machine Learning", "Deep Learning": "Deep Learning", "Vision par ordinateur": "Computer Vision", "NLP et Agentic AI": "NLP & Agentic AI", "Langages": "Languages", "Data Engineering": "Data Engineering", "MLOps et DevOps": "MLOps & DevOps", "Outils et méthodes": "Tools & methods" },
    edu: [["Master EID2 – Computer Science Data Exploration and Decision Support", "Sorbonne Paris Nord University", "France", ["Dual degree, alongside the WISD Master"]],
      ["Master WISD – Web Intelligence and Data Science", "Faculty of Sciences Dhar El Mahraz", "Fez", ["Machine Learning, LLM, RAG and Data Science"]],
      ["Bachelor's in Mathematics and Computer Science (SMI)", "Faculty of Sciences Dhar El Mahraz", "Fez"],
      ["DEUG in Mathematics and Computer Science (SMI)", "Faculty of Sciences Dhar El Mahraz", "Fez"]],
    extra: "Languages: Arabic (native), French and English (fluent) · Certification: Python for Data Science (LinkedIn)"
  },
  ar: {
    role: "عالم بيانات ومهندس ذكاء اصطناعي",
    available: "متاح لتدريب نهاية الدراسة لمدة 6 أشهر",
    lead: "أصمّم حلولًا في التعلم الآلي والنماذج اللغوية الكبيرة وRAG، من النموذج الأولي إلى النشر.",
    about: "طالب بشهادتين: ماستر 2 EID2 (جامعة السوربون باريس الشمالية) وماستر WISD (كلية العلوم بفاس). متمكن من الرياضيات التطبيقية وعلم البيانات، أجمع بين النظرية والتطبيق: التعلم الآلي، معالجة الإشارة (مرشح كالمان)، النمذجة الإحصائية، النماذج اللغوية الكبيرة وRAG.",
    exp: [{ title: "متدرب في البيانات والذكاء الاصطناعي / مطوّر ذكاء اصطناعي", org: "Ibhar Network", date: "يونيو 2026 – غشت 2026",
      points: ["دمج نماذج ذكاء اصطناعي للتحقق من الصور وتحسين قابلية توسّع النظام.", "أنماط التصميم: إدارة العمّال (workers)، تكرار قواعد البيانات، الوكيل العكسي.", "قاعدة بيانات متجهية متوافقة مع قاعدة علائقية لخط RAG يولّد خططًا مخصصة."] }],
    p: [
      ["Small-Agentic-RAG ومنصة تقييم النماذج المكمّمة", "GQA وRoPE وKV-Cache بـPyTorch الأصلي؛ وكيل RAG هجين (كثيف + BM25 وCross-Encoder)؛ AWQ/QLoRA مع vLLM: ‏−40٪ من VRAM.",
        ["تنفيذ Grouped-Query Attention وRoPE ومدير KV-Cache بـPyTorch الأصلي.", "وكيل RAG: بحث هجين (كثيف + BM25)، إعادة ترتيب بـCross-Encoder، تنفيذ أدوات Python.", "تكميم Mistral-7B وLlama-3-8B (AWQ/QLoRA) وتشغيلهما بـvLLM مع استهلاك أقل بـ40٪ من VRAM.", "اختبار آلي (زمن الاستجابة، VRAM، LLM-as-a-Judge) وعرض توضيحي بـGradio."]],
      ["نظام ETICS متعدد الوكلاء وRAG متقدم", "وكلاء لاستخراج العقود إلى PostgreSQL وتحليل السمية؛ RAG آمن على Qdrant وواجهة API موثَّقة وCI/CD.",
        ["وكيلان: استخراج منظّم لعقود الشغل إلى PostgreSQL، وتحليل السمية بدرجات سياقية.", "خط RAG على Qdrant: التقطيع والتضمين والاستعلام الموجَّه.", "واجهة FastAPI موثَّقة تقصر الأجوبة على المستندات المسموح بها للمستخدم.", "حاويات Docker وCI/CD مع اختبارات الوحدة والتكامل."]],
      ["التحليل التكتيكي لمباريات كرة القدم", "كشف بـYOLO وتتبع بـDeepSORT، مرشح كالمان والخوارزمية المجرية، وواصفات CNN لمعالجة الحجب.",
        ["خط متكامل: YOLO للكشف وDeepSORT لتتبع الأجسام المتعددة.", "مرشح كالمان والخوارزمية المجرية للحفاظ على ثبات المعرّفات عبر الزمن.", "شبكات CNN مدرَّبة مسبقًا لواصفات المظهر؛ وتشابه جيب التمام لمعالجة الحجب."]],
      ["نظام MLOps لتقدير أسعار العقارات", "إدارة الإصدارات بـDVC وتتبع بـMLflow واختبارات CI ونشر مستمر عبر واجهة FastAPI."],
      ["توصية وتوليد مسارات سفر بالنماذج اللغوية", "قاعدة بيانات متجهية متزامنة، بحث بتشابه مرجَّح، وتوليد خطة مخصصة بواسطة نموذج لغوي."],
      ["نظام RAG خبير لمنظومة Spring", "تطبيق React Native وخادم FastAPI؛ فهرسة التوثيق في ChromaDB ونموذج DeepSeek عبر OpenRouter."],
      ["خط هندسة بيانات – سوق الشغل", "جمع من Indeed وGlassdoor وRemoteOK، وتنسيق بـAirflow على Docker، ومعالجة لغوية (TF-IDF)."],
      ["تحليل سوق الشغل في مجال البيانات", "المهارات الأكثر طلبًا، الأجور الوسيطة، العمل عن بُعد؛ تصورات ولوحة قيادة Power BI."],
      ["كشف الاحتيال المصرفي", "بيانات شديدة اللاتوازن: إعادة توازن، Random Forest وانحدار لوجستي، وتقييم بـrecall وF1 وAUC-ROC."],
      ["التنبؤ بمتوسط العمر المتوقع", "تحليل استكشافي كامل لبيانات منظمة الصحة العالمية، مقارنة نماذج الانحدار، التنظيم والتحقق المتقاطع."],
      ["تصنيف الأرقام المكتوبة بخط اليد", "شبكة CNN بـPyTorch مع Dropout وحفظ نقاط التحقق حسب خسارة التحقق وتقارير تصنيف كاملة."],
      ["تحليل المشاعر بشبكة LSTM", "مراجعات أفلام AlloCiné (Hugging Face)، معالجة مسبقة بـspaCy وشبكة LSTM بـPyTorch للتنبؤ بالقطبية."],
      ["سلوك بطاقات الائتمان: ACP والتجميع", "اختبارا KMO وBartlett، تحليل المركبات الرئيسية بـFactoMineR وتجزئة K-Means بلغة R."]
    ],
    sk: { "Machine Learning": "التعلم الآلي", "Deep Learning": "التعلم العميق", "Vision par ordinateur": "الرؤية الحاسوبية", "NLP et Agentic AI": "معالجة اللغة والذكاء الوكيلي", "Langages": "لغات البرمجة", "Data Engineering": "هندسة البيانات", "MLOps et DevOps": "MLOps وDevOps", "Outils et méthodes": "أدوات ومنهجيات" },
    edu: [["ماستر EID2 – استكشاف المعطيات المعلوماتية ودعم القرار", "جامعة السوربون باريس الشمالية", "فرنسا", ["شهادة مزدوجة بالتوازي مع ماستر WISD"]],
      ["ماستر WISD – ذكاء الويب وعلم البيانات", "كلية العلوم ظهر المهراز", "فاس", ["التعلم الآلي، النماذج اللغوية، RAG وعلم البيانات"]],
      ["الإجازة في الرياضيات والمعلوميات (SMI)", "كلية العلوم ظهر المهراز", "فاس"],
      ["الدراسات الجامعية العامة في الرياضيات والمعلوميات (SMI)", "كلية العلوم ظهر المهراز", "فاس"]],
    extra: "اللغات: العربية (لغة الأم)، الفرنسية والإنجليزية (بطلاقة) · شهادة: Python for Data Science (LinkedIn)"
  }
};
function build(l) {
  const d = JSON.parse(JSON.stringify(DATA)); if (l === "fr") return d; const T = TR[l];
  Object.assign(d, { role: T.role, available: T.available, lead: T.lead, about: T.about, extra: T.extra });
  d.experience = T.exp;
  d.projects.forEach((p, i) => { p.title = T.p[i][0]; p.desc = T.p[i][1]; if (T.p[i][2]) p.more = T.p[i][2]; });
  d.skills = Object.fromEntries(Object.entries(d.skills).map(([k, v]) => [T.sk[k] || k, v]));
  d.education.forEach((e, i) => { const t = T.edu[i]; e.title = t[0]; e.school = t[1]; e.place = t[2]; if (t[3]) e.points = t[3]; });
  return d;
}

/* ------------------ Rendu ------------------ */
const $ = id => document.getElementById(id);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const L = DATA.links, root = document.documentElement;
let D, lang, curCat = "Tous";
const catName = c => c === "Tous" ? UI[lang].all : ((CATS[lang] || {})[c] || c);
const tags = a => `<div class="tags">${a.map(t => `<span>${esc(t)}</span>`).join("")}</div>`;

function drawProjects() {
  $("projects").replaceChildren(...D.projects.filter(p => curCat === "Tous" || p.cat === curCat).map(p =>
    el("article", "card" + (p.featured ? " feat" : ""),
      `<h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>${tags(p.tags)}<button class="more" data-i="${D.projects.indexOf(p)}">${esc(UI[lang].detail)}</button>`)));
}
function render() {
  const u = UI[lang];
  root.lang = lang; root.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = `${D.name} – ${D.role}`;
  $("brand").textContent = D.name; $("name").textContent = D.name; $("role").textContent = D.role;
  $("lead").textContent = D.lead; $("avail").textContent = D.available; $("about").textContent = D.about;
  [["apropos", u.about], ["experience", u.exp], ["projets", u.proj], ["competences", u.skills], ["formation", u.edu], ["assistant", u.ask]].forEach(([id, t]) => document.querySelector(`#${id} h2`).textContent = t);
  document.querySelector("#contact h2").textContent = u.work; $("contactText").textContent = u.contactText;
  $("menu").innerHTML = ["projets", "experience", "competences", "formation", "contact", "assistant"].map((h, i) => `<a href="#${h}">${u.menu[i]}</a>`).join("");
  $("heroBtns").innerHTML = `<a class="btn primary" href="#projets">${u.viewP}</a>` +
    (D.cvUrl ? `<a class="btn ghost" href="${esc(D.cvUrl)}" download>${u.cv}</a>` : `<a class="btn ghost" href="#contact">${u.contactMe}</a>`);
  document.querySelector(".signal figcaption").innerHTML = `<span><b style="background:var(--muted)"></b>${u.noisy}</span><span><b style="background:var(--accent)"></b>${u.est}</span>`;
  $("sig").setAttribute("aria-label", u.sig);
  $("theme").setAttribute("aria-label", u.theme); $("theme").title = u.theme; $("dX").setAttribute("aria-label", u.close); $("topBtn").setAttribute("aria-label", u.back);
  $("q").placeholder = u.ph; $("q").setAttribute("aria-label", u.ph); document.querySelector("#chatForm button").textContent = u.send;
  document.querySelector("#assistant .note").textContent = u.note;
  [...$("lang").children].forEach(b => b.setAttribute("aria-pressed", b.dataset.l === lang));

  $("exp").replaceChildren(...D.experience.map(x => el("div", "item",
    `<h3>${esc(x.title)} – ${esc(x.org)}</h3><div class="meta">${esc(x.date)}</div><ul>${x.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`)));

  const cats = ["Tous", ...new Set(D.projects.map(p => p.cat))];
  $("filters").replaceChildren(...cats.map(c => {
    const b = el("button", "chip", esc(catName(c))); b.setAttribute("aria-pressed", c === curCat);
    b.onclick = () => { curCat = c; [...$("filters").children].forEach(x => x.setAttribute("aria-pressed", x === b)); drawProjects(); };
    return b;
  }));
  drawProjects();

  $("skills").replaceChildren(...Object.entries(D.skills).map(([k, v]) => el("div", "", `<h3>${esc(k)}</h3>${tags(v)}`)));
  $("edu").replaceChildren(...D.education.map(e => el("article", "edu-card" + (e.current ? " now" : ""),
    `<div class="edu-top"><span class="edu-date">${esc(e.date)}</span>${e.current ? `<span class="pill">${u.now}</span>` : ""}</div><h3>${esc(e.title)}</h3><div class="school">${esc(e.school)} · ${esc(e.place)}</div>` +
    (e.points ? `<ul>${e.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : ""))));
  $("extra").textContent = D.extra;

  $("contactBtns").innerHTML = `<a class="btn" dir="ltr" href="mailto:${esc(L.email)}">${esc(L.email)}</a><a class="btn" href="${esc(L.linkedin)}" target="_blank" rel="noopener">LinkedIn</a><a class="btn" href="${esc(L.github)}" target="_blank" rel="noopener">GitHub</a><a class="btn" dir="ltr" href="tel:${esc(L.phone.replace(/\s/g, ""))}">${esc(L.phone)}</a>`;
  const cp = el("button", "btn copy", u.copy);
  cp.onclick = () => { (navigator.clipboard ? navigator.clipboard.writeText(L.email) : Promise.reject()).then(() => cp.textContent = u.copied, () => cp.textContent = L.email); setTimeout(() => cp.textContent = u.copy, 2200); };
  $("contactBtns").append(cp);
  $("foot").textContent = `© ${new Date().getFullYear()} ${DATA.name}`;

  const nSkills = Object.values(D.skills).flat().length, nMasters = DATA.education.filter(e => e.title.startsWith("Master")).length;
  $("stats").innerHTML = [[D.projects.length, u.st[0]], [nSkills, u.st[1]], [nMasters, u.st[2]], [u.months, u.st[3]]].map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join("");

  setPhoto();
  log.replaceChildren(); hist.length = 0; addMsg("bot", u.hello(D.name.split(" ")[0]));
  $("sugg").replaceChildren(...u.sugg.map(s => { const b = el("button", "chip", esc(s)); b.type = "button"; b.onclick = () => ask(s); return b; }));
  reveal();
}
function setLang(l) {
  lang = l; D = build(l);
  try { localStorage.setItem("lang", l); } catch (e) {}
  render();
}

/* Fenêtre de détail d'un projet */
const dlg = $("dlg");
$("projects").addEventListener("click", e => {
  const b = e.target.closest(".more"); if (!b) return;
  const p = D.projects[b.dataset.i];
  $("dB").innerHTML = `<h3 id="dT">${esc(p.title)}</h3><div class="meta">${esc(catName(p.cat))}</div>` +
    (p.more ? `<ul>${p.more.map(m => `<li>${esc(m)}</li>`).join("")}</ul>` : `<p style="color:var(--muted)">${esc(p.desc)}</p>`) +
    tags(p.tags) + (p.url ? `<p><a class="btn primary" href="${esc(p.url)}" target="_blank" rel="noopener">${UI[lang].code}</a></p>` : "");
  dlg.showModal();
});
$("dX").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });

/* Sélecteur de langue */
[["fr", "FR"], ["en", "EN"], ["ar", "عربي"]].forEach(([l, t]) => { const b = el("button", "", t); b.type = "button"; b.dataset.l = l; b.onclick = () => setLang(l); $("lang").append(b); });

/* Section active dans le menu */
const spy = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) document.querySelectorAll("#menu a").forEach(a => a.toggleAttribute("aria-current", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
["projets", "experience", "competences", "formation", "contact", "assistant"].forEach(id => spy.observe($(id)));

/* Données structurées */
const ld = el("script"); ld.type = "application/ld+json";
ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: DATA.name, jobTitle: DATA.role, email: L.email, sameAs: [L.linkedin, L.github] });
document.head.append(ld);

/* Photo personnelle (ou monogramme si absente / introuvable) */
function mono() { $("avatar").textContent = DATA.name.split(" ").filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join("").toUpperCase(); $("avatar").setAttribute("aria-hidden", "true"); }
function setPhoto() {
  $("avatar").replaceChildren();
  if (DATA.photo) { const im = el("img"); im.alt = UI[lang].pron + DATA.name; im.onerror = () => { im.remove(); mono(); }; im.src = DATA.photo; $("avatar").append(im); }
  else mono();
}

/* Assistant : réponses par Claude si disponible, sinon réponses locales */
const hist = [], log = $("log");
function context() {
  return `Tu es l'assistant du portfolio de ${D.name} (${D.role}). Réponds en ${UI[lang].botLang}, en 120 mots maximum, à la troisième personne, uniquement d'après les informations ci-dessous. Si l'information manque, dis-le et propose de le contacter par email. N'invente rien.\nINFOS: ` +
    JSON.stringify({ disponibilite: D.available, apropos: D.about, experience: D.experience, projets: D.projects.map(({ title, desc, more, tags }) => ({ title, desc, more, tags })),
      competences: D.skills, formation: D.education, divers: D.extra, notes: D.botNotes, contact: { email: L.email, linkedin: L.linkedin, github: L.github } });
}
function addMsg(role, text) { const m = el("div", "msg " + role); m.textContent = text; log.append(m); log.scrollTop = log.scrollHeight; return m; }
function local(q) {
  const u = UI[lang], n = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""), t = n(q), has = (...k) => k.some(w => t.includes(w));
  if (has("contact", "mail", "joindre", "telephone", "linkedin", "github", "phone", "reach", "تواصل", "اتصل", "بريد", "هاتف")) return u.contactA(L.email, L.phone);
  if (has("dispon", "stage", "recherche", "availab", "internship", "intern", "متاح", "تدريب", "توفر")) return `${D.available}. ${u.availA(L.email)}`;
  if (has("formation", "etude", "master", "diplome", "universite", "educat", "degree", "study", "universit", "تكوين", "دراسة", "ماستر", "جامعة", "شهادة")) return D.education.map(e => `${e.title} (${e.date})`).join(" ; ");
  if (has("experience", "ibhar", "خبرة", "تجربة")) return D.experience.map(x => `${x.title}${u.at}${x.org} (${x.date}) : ${x.points.join(" ")}`).join(" ");
  if (has("langue", "parle", "language", "speak", "لغ", "تتحدث")) return D.extra;
  const p = D.projects.filter(p => p.tags.concat(p.title.split(" ")).some(w => w.length > 3 && t.includes(n(w))));
  if (p.length) return u.rel + p.slice(0, 3).map(x => `${x.title} – ${x.desc}`).join(" • ");
  const sk = Object.values(D.skills).flat().filter(w => w.length > 2 && t.includes(n(w)));
  if (sk.length) return u.knows + sk.join(", ") + ".";
  if (has("competence", "techno", "outil", "skill", "tool", "stack", "مهار", "تقنيات", "أدوات")) return Object.entries(D.skills).map(([k, v]) => `${k} : ${v.join(", ")}`).join(" | ");
  if (has("projet", "realis", "project", "مشروع", "مشاريع")) return u.seeP + D.projects.slice(0, 3).map(x => x.title).join(", ") + "…";
  return u.nodata(L.email);
}
async function ask(q) {
  addMsg("user", q); hist.push({ role: "user", content: q });
  const out = addMsg("bot", "…"); let ans;
  try {
    const sample = window.claude ? await claude.use("sample") : null; if (!sample) throw 0;
    const m = hist.slice(-6).map(x => ({ ...x })); while (m[0].role !== "user") m.shift();
    m[0].content = context() + "\n\nQUESTION : " + m[0].content;
    ans = (await sample(m, { modelTier: "quick", cache: false, onText: ({ text }) => { out.textContent = text; log.scrollTop = log.scrollHeight; } })).text;
  } catch (e) { ans = local(q); }
  out.textContent = ans || local(q); hist.push({ role: "assistant", content: out.textContent });
  log.scrollTop = log.scrollHeight;
}
$("chatForm").addEventListener("submit", e => { e.preventDefault(); const v = $("q").value.trim(); if (v) { $("q").value = ""; ask(v); } });

/* Thème clair / sombre */
try { const s = localStorage.getItem("theme"); if (s) root.dataset.theme = s; } catch (e) {}
$("theme").onclick = () => {
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
};

/* Scroll : progression, bouton retour en haut, apparition au défilement */
const bar = $("progress"), tb = $("topBtn"); let tick = false;
addEventListener("scroll", () => {
  if (tick) return; tick = true;
  requestAnimationFrame(() => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    tb.classList.toggle("show", scrollY > 600); tick = false;
  });
}, { passive: true });
tb.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
}), { threshold: .12 });
function reveal() {
  document.querySelectorAll("section h2, .stats, .tl .item, .card, .edu-card, .skills > div, .chat").forEach((n, i) => {
    if (n.classList.contains("reveal")) return;
    n.classList.add("reveal"); n.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms"; io.observe(n);
  });
}

/* Langue initiale : choix mémorisé, sinon langue du navigateur */
let first = "fr";
try { first = localStorage.getItem("lang") || ((navigator.language || "fr").slice(0, 2)); } catch (e) {}
setLang(UI[first] ? first : "fr");

/* Signal : filtre de Kalman 1D en direct */
(function () {
  const cv = $("sig"), c2 = cv.getContext("2d"), N = 110, truth = [], meas = [], est = [];
  let t = 0, x = 0, p = 1; const Q = 0.01, R = 0.35;
  const f = s => Math.sin(s) + 0.4 * Math.sin(2.3 * s);
  function step() {
    t += 0.07; const z = f(t) + (Math.random() - .5) * 1.4;
    p += Q; const k = p / (p + R); x += k * (z - x); p *= (1 - k);
    truth.push(f(t)); meas.push(z); est.push(x);
    if (truth.length > N) { truth.shift(); meas.shift(); est.shift(); }
  }
  function draw() {
    const dpr = devicePixelRatio || 1, w = cv.clientWidth, h = cv.clientHeight;
    if (cv.width !== w * dpr) { cv.width = w * dpr; cv.height = h * dpr; }
    c2.setTransform(dpr, 0, 0, dpr, 0, 0); c2.clearRect(0, 0, w, h);
    const cs = getComputedStyle(root), X = i => i / (N - 1) * w, Y = v => h / 2 - v * h / 4.2;
    c2.fillStyle = cs.getPropertyValue("--muted");
    meas.forEach((v, i) => { c2.globalAlpha = .55; c2.beginPath(); c2.arc(X(i), Y(v), 2.4, 0, 6.3); c2.fill(); });
    c2.globalAlpha = 1; c2.strokeStyle = cs.getPropertyValue("--accent"); c2.lineWidth = 2.6; c2.lineJoin = "round"; c2.beginPath();
    est.forEach((v, i) => i ? c2.lineTo(X(i), Y(v)) : c2.moveTo(X(i), Y(v))); c2.stroke();
  }
  for (let i = 0; i < N; i++) step();
  draw();
  if (!matchMedia("(prefers-reduced-motion:reduce)").matches) {
    let last = 0; (function loop(ts) { if (ts - last > 45) { step(); draw(); last = ts; } requestAnimationFrame(loop); })(0);
  }
  addEventListener("resize", draw);
})();