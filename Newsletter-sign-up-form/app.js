const subscribeBtn = document.getElementById("subscribe");
const closeBtn = document.getElementById("close");

const successMsg = document.getElementById("success");
const input = document.querySelector("input");
const span = document.querySelector("span");
const dialog = document.querySelector("dialog");

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let userEmail = input.value;
  if (
    userEmail.trim() === "" ||
    !userEmail.includes("@") ||
    userEmail.split("@")[0] === "" ||
    userEmail.split("@")[1] === ""
  ) {
    span.style.display = "block";
    input.classList.add("error");
  } else {
    span.style.display = "none";
    input.classList.remove("error");
    successMsg.innerText = userEmail;
    dialog.showModal();
  }
});

closeBtn.addEventListener("click", () => {
  input.value = "";
  dialog.close();
});
