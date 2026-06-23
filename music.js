const MUSIC_API_URL = "https://script.google.com/macros/s/AKfycbxxBJr35sSKMl_9DKArJO-gAAA5jLDaR-iXJgbOhypjCMQHyNpTkHJWOjKreMgaAIDLMQ/exec";

async function loadMusicEvents() {
    const container = document.getElementById("music-events");

    // Stop the script if this page does not have the music events container
    if (!container) {
        return;
    }

    try {
        const response = await fetch(MUSIC_API_URL);
        const data = await response.json();

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

    } catch (error) {
        container.innerHTML = "<p>Live music schedule is currently unavailable.</p>";
        console.error(error);
    }
}

loadMusicEvents();