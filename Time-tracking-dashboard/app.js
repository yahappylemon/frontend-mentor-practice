const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

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

async function updateDOM(timeframe, text) {
  if (fetchedData === null) {
    window.alert(errMsg);
  }
  let timeframes = fetchedData.map((obj) => obj.timeframes[timeframe]);
  timeDiv.map(
    (div, index) =>
      (div.innerHTML = `<h3>${timeframes[index].current}hrs</h3>
  <p class="thin">${text} - ${timeframes[index].previous}hrs</p>`)
  );
}

dailyBtn.addEventListener("click", () => updateDOM("daily", "Yesterday"));
weeklyBtn.addEventListener("click", () => updateDOM("weekly", "Last Week"));
monthlyBtn.addEventListener("click", () => updateDOM("monthly", "Last Month"));
