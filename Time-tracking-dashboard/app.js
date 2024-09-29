const btns = [...document.querySelectorAll("button")];
const timeDiv = [...document.getElementsByClassName("time")];

let fetchedData = null;
let errMsg = "Loading...";
let text = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

async function getData() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/yahappylemon/frontend-mentor-practice/main/Time-tracking-dashboard/data.json"
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

  timeDiv.map(
    (div, index) =>
      (div.innerHTML = `<h3>${timeframes[index].current}hrs</h3>
  <p class="thin">${text[timeframe]} - ${timeframes[index].previous}hrs</p>`)
  );
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => updateDOM(e));
});
