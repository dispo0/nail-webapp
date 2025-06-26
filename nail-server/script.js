window.Telegram.WebApp.ready();

const tgUser = Telegram.WebApp.initDataUnsafe.user;
document.getElementById("username").innerText = tgUser?.first_name || "Guest";

// 💅 Фейковые мастера
const masters = [
  {
    name: "Катя Нейлс",
    photo: "https://i.imgur.com/4ZQZ4Vz.jpg",
    services: ["Маникюр", "Покрытие гель-лак", "Дизайн ногтей"],
    telegramUsername: "katya_nails"
  },
  {
    name: "Анна Профи",
    photo: "https://i.imgur.com/B0zDjNA.jpg",
    services: ["Педикюр", "Снятие", "Укрепление"],
    telegramUsername: "anna_profi"
  }
];

const container = document.getElementById("masters");

masters.forEach(master => {
  const div = document.createElement("div");
  div.className = "master";
  div.innerHTML = `
    <img src="${master.photo}" alt="${master.name}" />
    <h2>${master.name}</h2>
    <div class="services">${master.services.join(" • ")}</div>
    <a class="book-btn" href="https://t.me/${master.telegramUsername}" target="_blank">Написать в Telegram</a>
  `;
  container.appendChild(div);
});
