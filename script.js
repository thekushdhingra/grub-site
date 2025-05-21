const apiURL = "https://history.muffinlabs.com/date";
fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    const events = data.data.Events;
    const eventsList = document.getElementById("events-list");
    eventsList.innerHTML = "";
    events.slice(0, 15).forEach((event) => {
      const card = document.createElement("div");
      card.className =
        "event-card bg-[#fff2] w-72 p-4 rounded-lg shadow-lg flex flex-col items-center backdrop-blur-sm border border-[#fff2] transition duration-300 ease-in-out transform hover:scale-105";
      const text = document.createElement("div");
      text.className = "event-text text-center text-lg";
      text.innerHTML = event.no_year_html;
      card.appendChild(text);
      eventsList.append(card);
    });
  });
