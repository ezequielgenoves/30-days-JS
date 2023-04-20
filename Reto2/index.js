const date = new Date();
let sec_deg = -90 + date.getSeconds() * 6;
let min_deg = -90 + date.getMinutes() * 6;
let hour_deg = -90 + date.getHours() * 30 + date.getMinutes() * 0.5;



updateHands();
setInterval(() => {
  sec_deg += 6;
  if (sec_deg === 270) {
    sec_deg = -90;
    min_deg += 6;
    hour_deg += 0.5;
    if (min_deg === 270) {
      min_deg = -90;
    }
    if (hour_deg === 270) {
      hour_deg = -90;
    }
  }
  updateHands();
}, 1000);

function updateHands() {
  document.querySelector(
    ".seconds-hand"
  ).style.transform = `rotate(${sec_deg}deg)`;
  document.querySelector(
    ".minutes-hand"
  ).style.transform = `rotate(${min_deg}deg)`;
  document.querySelector(
    ".hours-hand"
  ).style.transform = `rotate(${hour_deg}deg)`;
}
