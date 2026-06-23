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
            <p class="music-description">${event.description || "Live music at MacRae's"}</p>
        `;

        container.appendChild(card);
    });
}

function loadMusicEvents() {
    const container = document.getElementById("music-events");

    const script = document.createElement("script");

    script.src = MUSIC_API_URL 
        + "?callback=handleMusicEvents"
        + "&v=" + new Date().getTime();

    script.onerror = function () {
        if (container) {
            container.innerHTML = "<p>Live music schedule is currently unavailable.</p>";
        }
    };

    setTimeout(function () {
        if (container && container.innerHTML.includes("Loading")) {
            container.innerHTML = "<p>Live music schedule is taking too long to load. Please refresh the page.</p>";
        }
    }, 8000);

    document.body.appendChild(script);
}

loadMusicEvents();