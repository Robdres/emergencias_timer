const targetDate = new Date("2026-04-07T00:00:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const todoListEl = document.getElementById("todo-list");

const tasks = ["celebrar a Roberto en su maestria"];

const format = (value) => String(value).padStart(2, "0");

const updateCountdown = () => {
  const now = new Date();
  const diffMs = targetDate - now;

  if (diffMs <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    return;
  }

  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  daysEl.textContent = format(days);
  hoursEl.textContent = format(hours);
  minutesEl.textContent = format(minutes);
};

updateCountdown();
setInterval(updateCountdown, 60000);

if (todoListEl) {
  todoListEl.innerHTML = tasks.map((task) => `<li>${task}</li>`).join("");
}
