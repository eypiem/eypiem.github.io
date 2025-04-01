window.addEventListener("DOMContentLoaded", onDOMContentLoaded);

let showCount = 3;
let darkTheme = false;

function onDOMContentLoaded() {
  themeBtn = document.getElementById("theme-btn");
  loadMoreBtn = document.getElementById("load-more-btn");
  cards = document.getElementById("projects").getElementsByClassName("card");
  localStorage = window.localStorage;
  darkTheme = localStorage.getItem("darkTheme") == "true";
  themeBtn.checked = darkTheme;
  updateTheme();

  themeBtn.addEventListener("change", () => {
    darkTheme = themeBtn.checked;
    updateTheme();
  });

  loadMoreBtn.addEventListener("click", () => {
    for (let i = showCount; i < showCount + 3 && i < cards.length; i++) {
      cards[i].classList.remove("visually-hidden");
    }
    showCount += 3;
    if (showCount >= cards.length) {
      loadMoreBtn.classList.add("visually-hidden");
    }
  });
}

function updateTheme() {
  localStorage.setItem("darkTheme", darkTheme);
  document.documentElement.setAttribute(
    "data-bs-theme",
    darkTheme ? "dark" : "light"
  );
}
