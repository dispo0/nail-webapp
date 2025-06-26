window.Telegram.WebApp.ready(); // инициализация WebApp

const tgUser = window.Telegram.WebApp.initDataUnsafe.user;

if (tgUser) {
  document.getElementById("username").innerText = tgUser.first_name;
} else {
  document.getElementById("username").innerText = "Guest";
}

function bookService() {
  alert("Booking sent (not really yet 😂)");
}
