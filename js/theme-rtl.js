document.addEventListener("DOMContentLoaded", function () {

  const html = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const rtlToggle = document.getElementById("rtlToggle");

  /* ===== Load saved settings ===== */
  const savedTheme = localStorage.getItem("theme");
  const savedDir = localStorage.getItem("direction");

  if (savedTheme === "dark") {
    html.setAttribute("data-theme", "dark");
    if (themeToggle) themeToggle.textContent = "☀️";
  }

  if (savedDir === "rtl") {
    html.setAttribute("dir", "rtl");
  }

  /* ===== Theme toggle ===== */
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = html.getAttribute("data-theme") === "dark";

      if (isDark) {
        html.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
      } else {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
      }
    });
  }

  /* ===== RTL toggle ===== */
  if (rtlToggle) {
    rtlToggle.addEventListener("click", () => {
      const isRTL = html.getAttribute("dir") === "rtl";

      if (isRTL) {
        html.setAttribute("dir", "ltr");
        localStorage.setItem("direction", "ltr");
      } else {
        html.setAttribute("dir", "rtl");
        localStorage.setItem("direction", "rtl");
      }
    });
  }

});

document.addEventListener("DOMContentLoaded", function () {

  let currentPage = location.pathname.split("/").pop();
  if (!currentPage) currentPage = "index.html";

  const normalize = (url) =>
    url.replace(".html", "").replace("/", "");

  const current = normalize(currentPage);

  // Normal nav links
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    if (normalize(href) === current) {
      link.classList.add("active");
    }
  });

  // Dropdown items
  document.querySelectorAll(".dropdown-item").forEach(item => {
    const href = item.getAttribute("href");

    if (normalize(href) === current) {
      item.classList.add("active");

      const dropdown = item.closest(".dropdown");
      if (dropdown) {
        dropdown.querySelector(".dropdown-toggle").classList.add("active");
      }
    }
  });

});


