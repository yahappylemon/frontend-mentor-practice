const desktopBtn = document.getElementById("desktop-button");
const mobileBtn = document.getElementById("mobile-button");

const desktopModal = document.getElementById("modal-desktop");
const mobileModal = document.getElementById("modal-mobile");

const action = document.getElementById("action");

let currentState = false;
let maxWidth = 760;
desktopModal.style.display = "none";

// listening to screen resing
window.addEventListener("resize", () => {
  if (currentState === true) {
    if (window.innerWidth > maxWidth) {
      desktopModal.style.display = "flex";
      action.style.display = "flex";
      mobileModal.style.display = "none";
    } else {
      desktopModal.style.display = "none";
      action.style.display = "none";
      mobileModal.style.display = "block";
    }
  }
  if (currentState === false) {
    desktopModal.style.display = "none";
    mobileModal.style.display = "none";
  }
  console.log(currentState);
});

// close the modal when clicking outside the card
document.body.addEventListener("click", (e) => {
  if (currentState === true && e.target === document.body) {
    if (window.innerWidth > maxWidth) {
      desktopModal.style.display = "none";
    } else {
      action.style.display = "flex";
      mobileModal.style.display = "none";
    }
    currentState = false;
  } else {
    return;
  }
});

desktopBtn.addEventListener("click", () => {
  currentState = !currentState;
  if (currentState === true) {
    if (window.innerWidth > maxWidth) {
      desktopModal.style.display = "flex";
      action.style.display = "flex";
      mobileModal.style.display = "none";
    } else {
      desktopModal.style.display = "none";
      action.style.display = "none";
      mobileModal.style.display = "block";
    }
  }
  if (currentState === false) {
    desktopModal.style.display = "none";
    mobileModal.style.display = "none";
  }
  console.log(currentState);
});

mobileBtn.addEventListener("click", () => {
  currentState = !currentState;
  action.style.display = "flex";
  mobileModal.style.display = "none";
  console.log(currentState);
});
