const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

// Active menu switcher

const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => {
  const navLink = e.target.parentElement;

  if (navLink.classList.contains("link")) {
    navList.querySelector(".active").classList.remove("active");
    navLink.classList.add("active");
  }
})

// Scroll to top
const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

const showBtn = () => {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.3){
    scrollBtn.classList.add("show-btn");
  } else {
    scrollBtn.classList.remove("show-btn");
  }
}

const scrollToTop = () => {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop);

