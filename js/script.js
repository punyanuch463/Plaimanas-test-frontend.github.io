//   Language Dropdown กดเลิอกภาษา

const dropdown = document.querySelector(".language-dropdown");
const button = dropdown.querySelector(".lang-btn");
const selectedText = dropdown.querySelector(".selected-text");
const menu = dropdown.querySelector(".lang-menu");

button.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const currentValue = selectedText.textContent;
    const newValue = e.target.textContent;

    selectedText.textContent = newValue;
    e.target.textContent = currentValue;

    dropdown.classList.remove("open");
  }
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

//   FAQ data ทำเป็น static เพื่อง่ายต่อการดึงไปใช้ 

const faqData = {
  orders: [
    {
      question: "HOW CAN I TRACK MY ORDER?",
      answer: "You will receive a tracking link via email once shipped.",
    },
    {
      question: "CAN I CANCEL MY ORDER?",
      answer: "Orders can be cancelled within 24 hours.",
    },
  ],
  shipping: [
    {
      question: "DO YOU OFFER INTERNATIONAL SHIPPING?",
      answer:
        "Items can be returned within 14 days of receipt, provided they are unworn, unwashed, and in original condition with tags attached.",
    },
    {
      question: "HOW LONG DOES DELIVERY TAKE?",
      answer: "Delivery takes 3-7 business days.",
    },
    {
      question: "HOW CAN I TRACK MY ORDER?",
      answer: "You will receive a tracking link via email once shipped.",
    },
  ],
  returns: [
    {
      question: "WHAT IS YOUR RETURN POLICY?",
      answer:
        " Items can be returned within 14 days of receipt, provided they are unworn, unwashed, and in original condition with tags attached.",
    },
    {
      question: "CAN I EXCHANGE FOR A DIFFERENT SIZE?",
      answer: "Yes, exchanges are available depending on stock.",
    },
    {
      question: "ARE SALE ITEMS REFUNDABLE?",
      answer: "Sale items are final sale and cannot be refunded.",
    },
  ],
  sizing: [
    {
      question: "HOW DO I FIND MY SIZE?",
      answer: "Please refer to our size guide.",
    },
    {
      question: "ARE YOUR SIZES TRUE TO FIT?",
      answer: "Yes, our sizing follows standard measurements.",
    },
  ],
};

//   FAQ ไว้โชว์ html เมื่อกดเลือก tab เเละทำเป็น accordion เปิด-ปิดคำตอบได้

const container = document.getElementById("faq-container");
const tabs = document.querySelectorAll(".tab-btn");

function loadFAQ(category) {
  container.innerHTML = "";

  faqData[category].forEach((item, index) => {
    const faqItem = document.createElement("div");
    faqItem.classList.add("faq-item");

    if (index === 0) faqItem.classList.add("active");

    faqItem.innerHTML = `
      <button class="faq-question">
        ${item.question}
        <span class="icon">⌄</span>
      </button>
      <div class="faq-answer">${item.answer}</div>
    `;

    container.appendChild(faqItem);
  });

  activateAccordion();
}

function activateAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach((el) => {
        if (el !== item) el.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
}

// TAB หมวดหมู่คำถาม เช่น Orders, Shipping, Returns & Exchanges, Sizing & Products

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    loadFAQ(tab.dataset.tab);
  });
});
//   init โหลด FAQ
loadFAQ("returns");

//   editorial overlay เพื่อเเสดงเมนูเมื่อ hover (สำหรับ desktop)
const trigger = document.querySelector(".editorial-trigger");
const overlay = document.querySelector(".editorial-overlay");
const content = document.querySelector(".editorial-content");

trigger.addEventListener("mouseenter", () => {
  overlay.classList.add("active");
});

content.addEventListener("mouseleave", () => {
  overlay.classList.remove("active");
});

//  mobile menu สำหรับแสดงเมนูเมื่อกดปุ่ม hamburger และปิดเมนูเมื่อกดปุ่ม close (สำหรับ mobile)
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "auto";
});

// editorial overlay สำหรับ mobile เมื่อ click (สำหรับ mobile) ที่หัวข้อ Editorial จะเเสดงเมนูออกมา
const mobileEditorial = document.querySelector(".mobile-editorial");
const mobileEditorialTitle = document.querySelector(".mobile-editorial-title");

mobileEditorialTitle.addEventListener("click", () => {
  mobileEditorial.classList.toggle("active");
});
