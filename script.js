const translations = {
  en: {
    navHome:"Home",navAbout:"About",navSkills:"Skills",navEducation:"Education",navProjects:"Projects",navServices:"Services",navContact:"Contact",
    heroEyebrow:"WELCOME TO MY PORTFOLIO",heroTitle:'Hello, I\'m <span class="name-live">THEARA THAT</span>',heroRole:"Information Technology Student Web Developer",
    heroText:"I create responsive websites, useful digital experiences, and beginner-friendly technology projects while growing my skills every day.",
    viewWork:"View My Work",contactMe:"Contact Me",statProjects:"Projects",statSkills:"Core Skills",statPassion:"Passion",
    aboutEyebrow:"WHO I AM",aboutTitle:"About <span>Me</span>",aboutLead:"A curious IT student who enjoys turning ideas into clean, practical digital experiences.",
    aboutP1:"I'm THEARA, a first-year Information Technology student at Passerelles Numériques Cambodia. I enjoy learning web development, programming, UI/UX, and databases.",
    aboutP2:"My goal is to keep building real projects, improve my problem-solving skills, and create technology that is simple and useful for people.",
    locationLabel:"Location",studyLabel:"Study",focusLabel:"Focus",
    skillsEyebrow:"WHAT I USE",skillsTitle:"My <span>Skills</span>",skillsLead:"Core technologies I practice through school work and personal projects.",
    htmlDesc:"Semantic structure and accessible page layouts.",cssDesc:"Responsive layouts, animation, and modern styling.",jsDesc:"Interactive UI, DOM logic, and form validation.",pythonDesc:"Beginner programming and small practical projects.",sqlDesc:"Database basics, tables, queries, and CRUD practice.",
    eduEyebrow:"MY JOURNEY",eduTitle:"Education & <span>Growth</span>",eduPnc:"Information Technology student. Learning web development, programming, databases, communication, and professional skills.",
    now:"Now",selfTitle:"Self-Learning & Projects",selfP:"Practicing by building websites, Python applications, UI/UX concepts, and small JavaScript projects.",
    projectsEyebrow:"SELECTED WORK",projectsTitle:"Featured <span>Projects</span>",project1:"A modern clothing website concept with products, promotions, contact information, and social links.",
    project2:"A functional calculator project focused on DOM events, calculations, and clean interface design.",
    project3:"A browser game that practices JavaScript logic, state changes, winning conditions, and interaction.",
    project4:"A Python/OpenCV practice project for camera capture and video recording workflows.",projectLink:"Discuss project ↗",
    servicesEyebrow:"WHAT I CAN DO",servicesTitle:"My <span>Services</span>",service1Title:"Web Design",service1:"Clean, responsive website layouts designed for desktop and mobile.",
    service2Title:"UI / UX Concepts",service2:"Simple user flows, wireframe ideas, and interfaces centered on usability.",
    service3Title:"Frontend Development",service3:"Interactive pages using semantic HTML, pure CSS, and Vanilla JavaScript.",
    service4Title:"Learning Projects",service4:"Small practical applications that turn classroom concepts into working products.",
    contactEyebrow:"LET'S CONNECT",contactTitle:"Have an idea? <span>Let's build it.</span>",contactLead:"Send me a message. This demo form validates your information on the browser and shows a success message without a backend.",
    portfolioLink:"Personal Portfolio",nameLabel:"Name",emailLabel:"Email",subjectLabel:"Subject",messageLabel:"Message",sendMessage:"Send Message",footerText:"Built with HTML, CSS & Vanilla JavaScript.",backTop:"Back to top ↑"
  },
  km: {
    navHome:"ទំព័រដើម",navAbout:"អំពីខ្ញុំ",navSkills:"ជំនាញ",navEducation:"ការសិក្សា",navProjects:"គម្រោង",navServices:"សេវាកម្ម",navContact:"ទំនាក់ទំនង",
    heroEyebrow:"សូមស្វាគមន៍មកកាន់ PORTFOLIO របស់ខ្ញុំ",heroTitle:'សួស្តី ខ្ញុំឈ្មោះ <span class="name-live">ថាត ធារ៉ា</span>',heroRole:"និស្សិតព័ត៌មានវិទ្យា និងអ្នកអភិវឌ្ឍន៍វេបសាយ",
    heroText:"ខ្ញុំបង្កើតវេបសាយដែល Responsive បទពិសោធន៍ឌីជីថលដែលមានប្រយោជន៍ និងគម្រោងបច្ចេកវិទ្យាសម្រាប់ការរៀនសូត្រ ខណៈពេលកំពុងអភិវឌ្ឍជំនាញរាល់ថ្ងៃ។",
    viewWork:"មើលគម្រោង",contactMe:"ទាក់ទងខ្ញុំ",statProjects:"គម្រោង",statSkills:"ជំនាញសំខាន់",statPassion:"ចំណង់ចំណូលចិត្ត",available:"បើកចំហសម្រាប់ការរៀន និងឱកាសថ្មីៗ",
    aboutEyebrow:"អំពីខ្ញុំ",aboutTitle:"អំពី <span>ខ្ញុំ</span>",aboutLead:"និស្សិត IT ដែលចូលចិត្តបម្លែងគំនិតទៅជាបទពិសោធន៍ឌីជីថលស្អាត និងមានប្រយោជន៍។",
    aboutP1:"ខ្ញុំឈ្មោះ THEARA ជានិស្សិតព័ត៌មានវិទ្យាឆ្នាំទី១ នៅ Passerelles Numériques Cambodia។ ខ្ញុំចូលចិត្តរៀន Web Development, Programming, UI/UX និង Database។",
    aboutP2:"គោលដៅរបស់ខ្ញុំគឺបន្តបង្កើតគម្រោងពិតៗ បង្កើនសមត្ថភាពដោះស្រាយបញ្ហា និងបង្កើតបច្ចេកវិទ្យាដែលសាមញ្ញ និងមានប្រយោជន៍សម្រាប់មនុស្ស។",
    locationLabel:"ទីតាំង",studyLabel:"ការសិក្សា",focusLabel:"ផ្តោតលើ",
    skillsEyebrow:"បច្ចេកវិទ្យាដែលខ្ញុំប្រើ",skillsTitle:"ជំនាញ <span>របស់ខ្ញុំ</span>",skillsLead:"បច្ចេកវិទ្យាសំខាន់ៗដែលខ្ញុំអនុវត្តតាមការសិក្សា និងគម្រោងផ្ទាល់ខ្លួន។",
    htmlDesc:"រចនាសម្ព័ន្ធ Semantic និង Layout ដែលងាយស្រួលប្រើ។",cssDesc:"Responsive Layout, Animation និងការរចនាទំនើប។",jsDesc:"UI អន្តរកម្ម DOM Logic និង Form Validation។",pythonDesc:"ការសរសេរកម្មវិធីកម្រិតដំបូង និងគម្រោងអនុវត្តតូចៗ។",sqlDesc:"មូលដ្ឋាន Database, Tables, Queries និង CRUD។",
    eduEyebrow:"ដំណើររបស់ខ្ញុំ",eduTitle:"ការសិក្សា និង <span>ការរីកចម្រើន</span>",eduPnc:"និស្សិតព័ត៌មានវិទ្យា។ កំពុងរៀន Web Development, Programming, Database, Communication និងជំនាញវិជ្ជាជីវៈ។",
    now:"បច្ចុប្បន្ន",selfTitle:"ការរៀនដោយខ្លួនឯង និងគម្រោង",selfP:"អនុវត្តតាមរយៈការបង្កើតវេបសាយ កម្មវិធី Python គំនិត UI/UX និងគម្រោង JavaScript តូចៗ។",
    projectsEyebrow:"ស្នាដៃដែលបានជ្រើសរើស",projectsTitle:"គម្រោង <span>សំខាន់ៗ</span>",project1:"គំនិតវេបសាយសម្លៀកបំពាក់ទំនើប មានផលិតផល ប្រូម៉ូសិន ទំនាក់ទំនង និងបណ្តាញសង្គម។",
    project2:"គម្រោង Calculator ដែលអាចប្រើបាន ដើម្បីអនុវត្ត DOM Events ការគណនា និងការរចនា Interface។",
    project3:"ហ្គេមក្នុង Browser ដើម្បីអនុវត្ត JavaScript Logic, State, លក្ខខណ្ឌឈ្នះ និង Interaction។",
    project4:"គម្រោង Python/OpenCV សម្រាប់អនុវត្ត Camera Capture និង Video Recording។",projectLink:"ពិភាក្សាអំពីគម្រោង ↗",
    servicesEyebrow:"អ្វីដែលខ្ញុំអាចធ្វើបាន",servicesTitle:"សេវាកម្ម <span>របស់ខ្ញុំ</span>",service1Title:"Web Design",service1:"រចនា Website ស្អាត និង Responsive សម្រាប់ Desktop និង Mobile។",
    service2Title:"UI / UX Concepts",service2:"User Flow សាមញ្ញ គំនិត Wireframe និង Interface ដែលផ្តោតលើភាពងាយស្រួលប្រើ។",
    service3Title:"Frontend Development",service3:"បង្កើតទំព័រអន្តរកម្មដោយ HTML Semantic, Pure CSS និង Vanilla JavaScript។",
    service4Title:"Learning Projects",service4:"កម្មវិធីអនុវត្តតូចៗដែលបម្លែងមេរៀនក្នុងថ្នាក់ទៅជាផលិតផលដែលអាចដំណើរការ។",
    contactEyebrow:"តោះភ្ជាប់ទំនាក់ទំនង",contactTitle:"មានគំនិតមែនទេ? <span>តោះបង្កើតវា។</span>",contactLead:"ផ្ញើសារមកខ្ញុំ។ Form នេះពិនិត្យព័ត៌មាននៅក្នុង Browser និងបង្ហាញសារជោគជ័យដោយមិនត្រូវការ Backend។",
    portfolioLink:"Portfolio ផ្ទាល់ខ្លួន",nameLabel:"ឈ្មោះ",emailLabel:"អ៊ីមែល",subjectLabel:"ប្រធានបទ",messageLabel:"សារ",sendMessage:"ផ្ញើសារ",footerText:"បង្កើតដោយ HTML, CSS និង Vanilla JavaScript។",backTop:"ត្រឡប់ទៅលើ ↑"
  }
};

const root = document.documentElement;
const body = document.body;
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const langBtn = document.querySelector(".lang-btn");
const backTop = document.querySelector("#backTop");
const toast = document.querySelector("#toast");
const form = document.querySelector("#contactForm");
let lang = localStorage.getItem("portfolio-lang") || "en";

function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  langBtn.textContent = lang === "en" ? "KH" : "EN";
  document.querySelector("#name").placeholder = lang === "en" ? "Your name" : "ឈ្មោះរបស់អ្នក";
  document.querySelector("#email").placeholder = lang === "en" ? "you@example.com" : "you@example.com";
  document.querySelector("#subject").placeholder = lang === "en" ? "Project idea" : "គំនិតគម្រោង";
  document.querySelector("#message").placeholder = lang === "en" ? "Tell me about your idea..." : "ប្រាប់ខ្ញុំអំពីគំនិតរបស់អ្នក...";
}
langBtn.addEventListener("click", () => {
  lang = lang === "en" ? "km" : "en";
  localStorage.setItem("portfolio-lang", lang);
  applyLanguage();
});

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}
setTheme(localStorage.getItem("portfolio-theme") || "dark");
themeToggle.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.textContent = open ? "✕" : "☰";
});
document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

const sections = [...document.querySelectorAll("main section[id]")];
const navItems = [...document.querySelectorAll(".nav-link")];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { rootMargin:"-35% 0px -55% 0px", threshold:0 });
sections.forEach(section => observer.observe(section));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold:.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

function scrollUI() {
  header.classList.toggle("scrolled", window.scrollY > 20);
  backTop.classList.toggle("show", window.scrollY > 500);
}
window.addEventListener("scroll", scrollUI, { passive:true });
scrollUI();
backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function setError(input, message) {
  const small = input.parentElement.querySelector(".error");
  input.classList.toggle("invalid", Boolean(message));
  small.textContent = message || "";
}
function validate() {
  let valid = true;
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const subject = document.querySelector("#subject");
  const message = document.querySelector("#message");
  const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  const required = [
    [name, lang === "en" ? "Please enter your name." : "សូមបញ្ចូលឈ្មោះរបស់អ្នក។"],
    [email, email.value.trim() ? (emailOK ? "" : (lang === "en" ? "Please enter a valid email." : "សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ។")) : (lang === "en" ? "Please enter your email." : "សូមបញ្ចូលអ៊ីមែល។")],
    [subject, lang === "en" ? "Please enter a subject." : "សូមបញ្ចូលប្រធានបទ។"],
    [message, lang === "en" ? "Please write a message." : "សូមសរសេរសារ។"]
  ];
  required.forEach(([input, error]) => { setError(input, error); if (error) valid = false; });
  return valid;
}
form.addEventListener("submit", e => {
  e.preventDefault();
  const status = document.querySelector(".form-status");
  if (!validate()) {
    status.textContent = lang === "en" ? "Please fix the highlighted fields." : "សូមកែតម្រូវព័ត៌មានដែលបានបន្លិច។";
    status.className = "form-status fail";
    return;
  }
  status.textContent = lang === "en" ? "Message validated successfully! Demo form is ready for a backend/email service." : "ព័ត៌មានត្រូវបានពិនិត្យដោយជោគជ័យ! Form គំរូនេះអាចភ្ជាប់ Backend ឬ Email Service បាន។";
  status.className = "form-status success";
  form.reset();
  document.querySelectorAll(".error").forEach(x => x.textContent = "");
  document.querySelectorAll("input, textarea").forEach(x => x.classList.remove("invalid"));
  showToast(lang === "en" ? "Thanks! Your message is ready to send." : "អរគុណ! សាររបស់អ្នករួចរាល់សម្រាប់ផ្ញើ។");
});

document.querySelector("#year").textContent = new Date().getFullYear();
applyLanguage();

const meteorField = document.querySelector(".meteor-field");
for (let i = 0; i < 22; i++) {
  const meteor = document.createElement("span");
  meteor.className = "meteor";
  meteor.style.setProperty("--x", `${Math.random() * 100}vw`);
  meteor.style.setProperty("--size", `${35 + Math.random() * 80}px`);
  meteor.style.setProperty("--duration", `${5 + Math.random() * 7}s`);
  meteor.style.setProperty("--delay", `${Math.random() * -12}s`);
  meteorField.appendChild(meteor);
}
