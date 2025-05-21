fetch("https://history.muffinlabs.com/date")
  .then((r) => r.json())
  .then((d) => {
    const el = document.getElementById("events-list");
    el.innerHTML = "";
    d.data.Events.slice(0, 15).forEach((e) => {
      el.innerHTML += `<div class="event-card bg-[#fff2] w-72 p-4 rounded-lg shadow-lg flex flex-col items-center backdrop-blur-sm border border-[#fff2] transition duration-300 ease-in-out transform hover:scale-105">
        <div class="event-text text-center text-lg">${e.no_year_html}</div>
      </div>`;
    });
  });
setInterval(() => {
  const d = Date.now(),
    r = 864e5 - (d % 864e5);
  document.getElementById("clock").innerHTML = `${Math.floor(
    r / 36e5
  )}:${Math.floor((r % 36e5) / 6e4)}:${Math.floor((r % 6e4) / 1e3)}`;
}, 1000);
