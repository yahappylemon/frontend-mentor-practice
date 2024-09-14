const btns = [...document.querySelectorAll("button")];
const timeDiv = [...document.getElementsByClassName("time")];

let fetchedData = null;
let errMsg = "Loading...";

async function getData() {
  try {
    const res = await fetch(
      "http://127.0.0.1:5500/Time-tracking-dashboard/data.json"
    );
    if (!res.ok) {
      errMsg = "Something went wrong...Please try again later.";
    }
    fetchedData = await res.json();
  } catch {
    errMsg = "Network error...Please try again later.";
  }
}

getData();

function updateDOM(e) {
  if (fetchedData === null) {
    window.alert(errMsg);
  }

  // add css to current button
  btns.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");

  // change context to current timeframe
  let timeframe = e.target.id;
  let timeframes = fetchedData.map((obj) => obj.timeframes[timeframe]);

  let text;
  if (timeframe === "daily") {
    text = "Yesterday";
  } else if (timeframe === "weekly") {
    text = "Last Week";
  } else {
    text = "Last Month";
  }

  timeDiv.map(
    (div, index) =>
      (div.innerHTML = `<h3>${timeframes[index].current}hrs</h3>
  <p class="thin">${text} - ${timeframes[index].previous}hrs</p>`)
  );
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => updateDOM(e));
});
