const numberInputs = [...document.querySelectorAll("[data-number]")];
const billInput = document.getElementById("bill");
const customTipInput = numberInputs.find(
  (input) => input.dataset.number === "custom-tip"
);
const peopleInput = document.getElementById("people");

const tipBtn = [...document.querySelectorAll("input[type=button]")];
const resetBtn = document.querySelector("input[type=reset]");
const form = document.querySelector("form");
const errors = [...document.querySelectorAll("[data-error]")];

const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");

let result = {
  bill: "",
  people: "",
  tip: "",
};

// collect user inputs
function setInputs(e) {
  const currentInput = e.target;
  // enable resetBtn
  resetBtn.disabled = false;
  // update input UI
  numberInputs.filter((input) =>
    input === currentInput
      ? input.classList.add("focus-border")
      : input.classList.remove("focus-border")
  );
  // set input obj
  result[currentInput.id] = Number(currentInput.value);
}

function setTipBtn(e) {
  const currentBtn = e.target;
  // enable resetBtn
  resetBtn.disabled = false;
  // update tipBtn UI
  tipBtn.filter((btn) =>
    btn === currentBtn
      ? btn.classList.add("active-tip-btn")
      : btn.classList.remove("active-tip-btn")
  );
  // handle custom tipBtn UI
  if (currentBtn.value === "Custom") {
    result[currentBtn.id] = 0;
    customTipInput.classList.add("custom-tip-input-active");
  } else {
    // set input obj
    result[currentBtn.id] = Number(currentBtn.value.split("%")[0]);
    customTipInput.classList.remove("custom-tip-input-active", "focus-border");
  }
}

// handle error states
function validateInputs() {
  const billError = errors.find((error) => error.dataset.error === "bill");
  const peopleError = errors.find((error) => error.dataset.error === "people");
  if (result.bill === 0) {
    billError.style.display = "block";
    billInput.classList.add("error-border");
  } else {
    billError.style.display = "none";
    billInput.classList.remove("error-border");
  }
  if (result.people === 0) {
    peopleError.style.display = "block";
    peopleInput.classList.add("error-border");
  } else {
    peopleError.style.display = "none";
    peopleInput.classList.remove("error-border");
  }
}

// compute total value
function computeResult() {
  if (
    result.bill === "" ||
    result.bill === 0 ||
    result.people === "" ||
    result.people === 0
  ) {
    return;
  }
  tipAmount.innerText = `$${(
    (result.bill * (result.tip / 100)) /
    result.people
  ).toFixed(2)}`;
  total.innerText = `$${(
    (result.bill * (result.tip / 100 + 1)) /
    result.people
  ).toFixed(2)}`;
}

// clear user inputs
function resetCalc() {
  // update input UI
  errors.forEach((error) => (error.style.display = "none"));
  numberInputs.forEach((input) =>
    input.classList.remove("error-border", "focus-border")
  );
  // update tipBtn UI
  tipBtn.forEach((button) => button.classList.remove("active-tip-btn"));
  customTipInput.classList.remove("custom-tip-input-active");
  // update total UI
  tipAmount.innerText = `$0.00`;
  total.innerText = `$0.00`;
  // reset input obj
  for (let keys in result) {
    result[keys] = "";
  }
  // disable resetBtn
  resetBtn.disabled = true;
}

form.addEventListener("reset", resetCalc);

numberInputs.forEach((input) =>
  input.addEventListener("input", (e) => {
    setInputs(e);
    validateInputs();
    computeResult();
  })
);

tipBtn.forEach((input) =>
  input.addEventListener("click", (e) => {
    setTipBtn(e);
    computeResult();
  })
);
