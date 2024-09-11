const desktopBtn = document.getElementById("desktop-button");
const mobileBtn = document.getElementById("mobile-button");

const desktopModal = document.getElementById("modal-desktop");
const mobileModal = document.getElementById("modal-mobile");

const action = document.getElementById("action");

let currentState = false;
let maxWidth = 860;
desktopModal.style.display = "none";

function toggleModal() {
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
}

function closeModal(e) {
  if (
    e.currentTarget === mobileBtn ||
    (currentState === true && e.target === document.body)
  ) {
    if (window.innerWidth <= maxWidth) {
      action.style.display = "flex";
      mobileModal.style.display = "none";
    } else {
      desktopModal.style.display = "none";
    }
    currentState = false;
  } else {
    return;
  }
}

// listening to screen resing
window.addEventListener("resize", toggleModal);

// open/close desktop modal, open mobile modal
desktopBtn.addEventListener("click", () => {
  currentState = !currentState;
  toggleModal();
});

// close mobile modal
mobileBtn.addEventListener("click", (e) => closeModal(e));

// open/close desktop/mobile modal when clicking outside the card
document.body.addEventListener("click", (e) => closeModal(e));
