const dateEl = document.getElementById("date");

const displayDate = () => {
  setTimeout(() => {
    dateEl.textContent = new Date().toLocaleString();
    displayDate();
  }, 1000);
};
displayDate();
