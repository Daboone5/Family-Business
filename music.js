/* =====================================================
   GOOGLE APPS SCRIPT API URL
   This is where the website requests music events.
===================================================== */

const MUSIC_API_URL = "https://script.google.com/macros/s/AKfycbxFfbIJXaCMKW6GMmfVgTEbds46_WumJuH9ofcEQDZZ0JnH0QgBoSKqCYM0eOHlH55wGg/exec";


/* =====================================================
   RECEIVES EVENT DATA FROM GOOGLE CALENDAR
===================================================== */

function handleMusicEvents(data) {

    const container = document.getElementById("music-events");

    // Stop if container doesn't exist
    if (!container) {
        return;
    }

    // Display message if there are no events
    if (!data.events || data.events.length === 0) {

        container.innerHTML =
            "<p>No upcoming live music currently scheduled.</p>";

        return;
    }

    /* =================================================
       SORT EVENTS BY DATE
       Earliest event appears first
    ================================================= */

    const sortedEvents = data.events.sort((a, b) => {
        return new Date(a.start) - new Date(b.start);
    });


    /* =================================================
       NEXT 5 UPCOMING EVENTS
    ================================================= */

    const upcomingEvents = sortedEvents.slice(0, 5);

    container.innerHTML = "";

    /* =================================================
       CREATE NORMAL EVENT CARDS
    ================================================= */

    upcomingEvents.forEach(event => {

        const startDate = new Date(event.start);

        const formattedDate =
            startDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric"
            });

        const formattedTime =
            startDate.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit"
            });

        const card = document.createElement("div");

        card.className = "music-card";

        card.innerHTML = `
            <h3>${event.title}</h3>

            <p>${formattedDate}</p>

            <p>${formattedTime}</p>

            <p class="music-description">
                ${event.description || "Live music at MacRae's"}
            </p>
        `;

        container.appendChild(card);
    });
}


/* =====================================================
   LOADS EVENT DATA FROM GOOGLE APPS SCRIPT
===================================================== */

function loadMusicEvents() {

    const container =
        document.getElementById("music-events");

    const script =
        document.createElement("script");

    // JSONP request to Google Apps Script
    script.src =
        MUSIC_API_URL +
        "?callback=handleMusicEvents" +
        "&v=" + new Date().getTime();

    // Error message if request fails
    script.onerror = function () {

        if (container) {

            container.innerHTML =
                "<p>Live music schedule is currently unavailable.</p>";
        }
    };

    // Timeout protection
    setTimeout(function () {

        if (
            container &&
            container.innerHTML.includes("Loading")
        ) {

            container.innerHTML =
                "<p>Live music schedule is taking too long to load. Please refresh the page.</p>";
        }

    }, 8000);

    document.body.appendChild(script);
}


/* =====================================================
   START EVERYTHING
===================================================== */

loadMusicEvents();