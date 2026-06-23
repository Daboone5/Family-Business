const MUSIC_API_URL = "https://script.google.com/macros/s/AKfycbxFfbIJXaCMKW6GMmfVgTEbds46_WumJuH9ofcEQDZZ0JnH0QgBoSKqCYM0eOHlH55wGg/exec";

function handleMusicEvents(data) {
    const container = document.getElementById("music-events");

    if (!container) {
        return;
    }

    if (!data.events || data.events.length === 0) {
        container.innerHTML = "<p>No upcoming live music currently scheduled.</p>";
        return;
    }

    container.innerHTML = "";

    data.events.forEach(event => {
        const startDate = new Date(event.start);

        const formattedDate = startDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric"
        });

        const formattedTime = startDate.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit"
        });

        const card = document.createElement("div");
        card.className = "music-card";

        card.innerHTML = `
            <h3>${event.title}</h3>
            <p>${formattedDate}</p>
            <p>${formattedTime}</p>
        `;

        container.appendChild(card);
    });
}

function loadMusicEvents() {
    const script = document.createElement("script");
    script.src = MUSIC_API_URL + "?callback=handleMusicEvents";
    document.body.appendChild(script);
}

loadMusicEvents();