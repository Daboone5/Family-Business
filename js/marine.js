/* =========================
           WEATHER UTILITIES
        ========================= */

        const SITE_TIME_ZONE = "America/New_York";

const ICONS = {
    storm: "⛈️",
    rain: "🌧️",
    showers: "🌦️",
    cloudy: "☁️",
    partlyCloudy: "🌤️",
    sunny: "☀️",
    temperature: "🌡️",
    wind: "🌬️",
    moon: "🌕",
    boat: "🚤"
};

        function formatSiteTime(date, options = {}) {
            return new Date(date).toLocaleTimeString("en-US", {
                timeZone: SITE_TIME_ZONE,
                hour: "numeric",
                minute: "2-digit",
                ...options
            });
        }

        function formatSiteDate(date, options = {}) {
            return new Date(date).toLocaleDateString("en-US", {
                timeZone: SITE_TIME_ZONE,
                ...options
            });
        }

        function parseSiteDateTime(value) {
            if (value instanceof Date) return value;

            if (typeof value !== "string") {
                return new Date(value);
            }

            if (/[zZ]|[+-]\d{2}:?\d{2}$/.test(value)) {
                return new Date(value);
            }

            const normalizedValue = value.trim().replace(" ", "T");
            const [datePart, timePart = "00:00:00"] = normalizedValue.split("T");
            const [year, month, day] = datePart.split("-").map(Number);
            const [hour = 0, minute = 0, second = 0] = timePart.split(":").map(Number);

            const utcGuess = new Date(Date.UTC(year, month - 1, day, hour, minute, second));

            const parts = new Intl.DateTimeFormat("en-US", {
                timeZone: SITE_TIME_ZONE,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hourCycle: "h23"
            }).formatToParts(utcGuess);

            const siteParts = Object.fromEntries(
                parts
                    .filter(part => part.type !== "literal")
                    .map(part => [part.type, part.value])
            );

            const siteTimeAsUtc = Date.UTC(
                Number(siteParts.year),
                Number(siteParts.month) - 1,
                Number(siteParts.day),
                Number(siteParts.hour),
                Number(siteParts.minute),
                Number(siteParts.second)
            );

            return new Date(utcGuess.getTime() - (siteTimeAsUtc - utcGuess.getTime()));
        }

        function formatNoaaDate(date, dayOffset = 0) {
            const parts = new Intl.DateTimeFormat("en-US", {
                timeZone: SITE_TIME_ZONE,
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }).formatToParts(date);

            const siteParts = Object.fromEntries(
                parts
                    .filter(part => part.type !== "literal")
                    .map(part => [part.type, part.value])
            );

            const siteDate = new Date(Date.UTC(
                Number(siteParts.year),
                Number(siteParts.month) - 1,
                Number(siteParts.day) + dayOffset
            ));

            const year = siteDate.getUTCFullYear();
            const month = String(siteDate.getUTCMonth() + 1).padStart(2, "0");
            const day = String(siteDate.getUTCDate()).padStart(2, "0");

            return `${year}${month}${day}`;
        }

        function getWindDirection(degrees) {
            const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
            return directions[Math.round(degrees / 45) % 8];
        }

        function getBoatingOutlook(windSpeed, rainChance) {
            if (windSpeed >= 20 || rainChance >= 70) return "Use Caution";
            if (windSpeed >= 12 || rainChance >= 40) return "Fair";
            return "Good";
        }

        function formatHour(hour) {
            const suffix = hour >= 12 ? "PM" : "AM";
            const displayHour = hour % 12 === 0 ? 12 : hour % 12;
            return `${displayHour} ${suffix}`;
        }

        function getSiteNow() {
            const parts = new Intl.DateTimeFormat("en-US", {
                timeZone: SITE_TIME_ZONE,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hourCycle: "h23"
            }).formatToParts(new Date());

            const siteParts = Object.fromEntries(
                parts
                    .filter(part => part.type !== "literal")
                    .map(part => [part.type, part.value])
            );

            return new Date(
                `${siteParts.year}-${siteParts.month}-${siteParts.day}` +
                `T${siteParts.hour}:${siteParts.minute}:${siteParts.second}`
            );
        }

        function getUvRiskLabel(uvIndex) {
            if (uvIndex <= 2) return "Low";
            if (uvIndex <= 5) return "Moderate";
            if (uvIndex <= 7) return "High";
            if (uvIndex <= 10) return "Very High";
            return "Extreme";
        }

        function getDailyMaxUvIndex(date, hourly) {
            if (!hourly.uv_index) {
                return null;
            }

            const uvValues = hourly.time
                .map((time, index) => ({
                    time,
                    uvIndex: hourly.uv_index[index]
                }))
                .filter(hour => hour.time.startsWith(date))
                .map(hour => Number(hour.uvIndex))
                .filter(value => !Number.isNaN(value));

            if (uvValues.length === 0) {
                return null;
            }

            return Math.round(Math.max(...uvValues));
        }

        /* =========================
           DAILY WEATHER SUMMARY
        ========================= */

        function getDailySummary(date, hourly) {
            const dayHours = hourly.time
                .map((time, index) => ({
                    time,
                    code: hourly.weather_code[index]
                }))
                .filter(hour => hour.time.startsWith(date));

            const counts = {
                clear: 0,
                cloudy: 0,
                rain: 0,
                storm: 0,
                fog: 0
            };

            const rainOrStormHours = [];

            dayHours.forEach(hour => {
                const code = hour.code;
                const hourNumber = parseSiteDateTime(hour.time).getHours();

                if (code === 0) {
                    counts.clear++;
                } else if ([1, 2, 3].includes(code)) {
                    counts.cloudy++;
                } else if ([45, 48].includes(code)) {
                    counts.fog++;
                } else if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
                    counts.rain++;
                    rainOrStormHours.push(hourNumber);
                } else if ([95, 96, 99].includes(code)) {
                    counts.storm++;
                    rainOrStormHours.push(hourNumber);
                }
            });

            let timingNote = "";

            if (rainOrStormHours.length > 0) {
                const earliest = Math.min(...rainOrStormHours);
                const latest = Math.max(...rainOrStormHours);

                const hasMorning = rainOrStormHours.some(hour => hour >= 5 && hour < 12);
                const hasAfternoon = rainOrStormHours.some(hour => hour >= 12 && hour < 18);
                const hasEvening = rainOrStormHours.some(hour => hour >= 18 && hour < 24);

                if (rainOrStormHours.length >= 8) {
                    timingNote = "scattered throughout the day";
                } else if (hasMorning && hasAfternoon && hasEvening) {
                    timingNote = "possible throughout the day";
                } else if (hasMorning && hasAfternoon) {
                    timingNote = "morning into afternoon";
                } else if (hasAfternoon && hasEvening) {
                    timingNote = "afternoon into evening";
                } else if (hasMorning) {
                    timingNote = "mainly morning";
                } else if (hasAfternoon) {
                    timingNote = "mainly afternoon";
                } else if (hasEvening) {
                    timingNote = "mainly evening";
                } else {
                    timingNote = `${formatHour(earliest)}-${formatHour(latest)}`;
                }
            }

            let summary;

            if (counts.storm >= 3) {
                summary = { icon: ICONS.storm, label: "Storms Likely" };
            } else if (counts.rain >= 4) {
                summary = { icon: ICONS.rain, label: "Rain Likely" };
            } else if (counts.storm > 0) {
                summary = { icon: ICONS.showers, label: "Storms Possible" };
            } else if (counts.rain > 0) {
                summary = { icon: ICONS.showers, label: "Showers Possible" };
            } else if (counts.cloudy > counts.clear) {
                summary = { icon: ICONS.cloudy, label: "Mostly Cloudy" };
            } else if (counts.cloudy > 0) {
                summary = { icon: ICONS.partlyCloudy, label: "Partly Cloudy" };
            } else {
                summary = { icon: ICONS.sunny, label: "Sunny" };
            }

            summary.note = timingNote;
            return summary;
        }

        function summarizePeriod(date, hourly, startHour, endHour) {
            const periodHours = hourly.time
                .map((time, index) => ({
                    time,
                    code: hourly.weather_code[index],
                    rainChance: hourly.precipitation_probability[index]
                }))
                .filter(hour => {
                    const hourDate = hour.time.split("T")[0];
                    const hourNumber = parseSiteDateTime(hour.time).getHours();

                    return (
                        hourDate === date &&
                        hourNumber >= startHour &&
                        hourNumber < endHour
                    );
                });

            if (periodHours.length === 0) {
                return {
                    icon: "-",
                    label: "Unavailable",
                    rainChance: "N/A"
                };
            }

            const counts = {
                clear: 0,
                cloudy: 0,
                rain: 0,
                storm: 0,
                fog: 0
            };

            periodHours.forEach(hour => {
                const code = hour.code;

                if (code === 0) {
                    counts.clear++;
                } else if ([1, 2, 3].includes(code)) {
                    counts.cloudy++;
                } else if ([45, 48].includes(code)) {
                    counts.fog++;
                } else if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
                    counts.rain++;
                } else if ([95, 96, 99].includes(code)) {
                    counts.storm++;
                }
            });

            let summary;

            if (counts.storm > 0) {
                summary = { icon: ICONS.showers, label: "Storms Possible" };
            } else if (counts.rain > 0) {
                summary = { icon: ICONS.showers, label: "Showers Possible" };
            } else if (counts.cloudy > counts.clear) {
                summary = { icon: ICONS.cloudy, label: "Mostly Cloudy" };
            } else if (counts.cloudy > 0) {
                summary = { icon: ICONS.partlyCloudy, label: "Partly Cloudy" };
            } else {
                summary = { icon: ICONS.sunny, label: "Sunny" };
            }

            summary.rainChance = Math.max(...periodHours.map(hour => hour.rainChance ?? 0));

            return summary;
        }

        function updateSunTimes(daily) {
            if (!daily.sunrise || !daily.sunset) {
                return;
            }

            renderSunTimesCard({
                sunrise: parseSiteDateTime(daily.sunrise[0]),
                sunset: parseSiteDateTime(daily.sunset[0])
            });
        }

        /* =========================
           MARINE FORECAST CARDS
        ========================= */

        function buildMarineForecastCards(daily, hourly) {
            return daily.time.slice(0, 7).map((date, index) => {
                const dayDate = parseSiteDateTime(`${date}T00:00:00`);

                const dayName = formatSiteDate(dayDate, {
                    weekday: "long"
                });

                const displayDate = formatSiteDate(dayDate, {
                    month: "short",
                    day: "numeric"
                });

                const dailySummary = getDailySummary(date, hourly);

                const morning = summarizePeriod(date, hourly, 6, 12);
                const afternoon = summarizePeriod(date, hourly, 12, 18);
                const evening = summarizePeriod(date, hourly, 18, 24);

                return `
                    <div class="marine-forecast-day">

                        <div class="marine-forecast-day-header">

                            <div class="marine-day-title">
                                <h3>${dayName}</h3>

                                <p class="marine-forecast-date">
                                    ${displayDate}
                                </p>
                            </div>

                            <span>${dailySummary.icon}</span>

                        </div>

                        <p class="marine-forecast-summary">
                            ${dailySummary.label}${dailySummary.note ? ` - ${dailySummary.note}` : ""}
                        </p>

                        <p class="marine-forecast-temp">
                            High ${Math.round(daily.temperature_2m_max[index])}&deg; /
                            Low ${Math.round(daily.temperature_2m_min[index])}&deg;
                        </p>

                        <div class="marine-day-periods">

                            <div>
                                <strong>Morning</strong>
                                <span>${morning.icon} ${morning.label}</span>
                                <small>Rain ${morning.rainChance}%</small>
                            </div>

                            <div>
                                <strong>Afternoon</strong>
                                <span>${afternoon.icon} ${afternoon.label}</span>
                                <small>Rain ${afternoon.rainChance}%</small>
                            </div>

                            <div>
                                <strong>Evening</strong>
                                <span>${evening.icon} ${evening.label}</span>
                                <small>Rain ${evening.rainChance}%</small>
                            </div>

                        </div>

                    </div>
                `;
            }).join("");
        }

        /* =========================
   RIVER CONDITIONS ENGINE
========================= */

function getRiverScore(todaySummary, windSpeed, rainChance) {
    let score = 10;

    if (todaySummary.label === "Storms Likely") {
        score -= 4;
    } else if (todaySummary.label === "Storms Possible") {
        score -= 3;
    } else if (todaySummary.label === "Rain Likely") {
        score -= 2;
    } else if (todaySummary.label === "Showers Possible") {
        score -= 1;
    } else if (todaySummary.label === "Mostly Cloudy") {
        score -= 1;
    }

    if (todaySummary.note === "scattered throughout the day" || todaySummary.note === "possible throughout the day") {
        score -= 1;
    }

    if (windSpeed >= 20) {
        score -= 3;
    } else if (windSpeed >= 15) {
        score -= 2;
    } else if (windSpeed >= 12) {
        score -= 1;
    }

    if (rainChance >= 70) {
        score -= 2;
    } else if (rainChance >= 40) {
        score -= 1;
    }

    return Math.max(1, Math.min(10, score));
}

function getMarineSummary(riverScore, todaySummary, boatingOutlook) {
    if (todaySummary.label === "Storms Likely" || todaySummary.label === "Storms Possible") {
        return "Storms May Affect River Plans";
    }

    if (boatingOutlook === "Use Caution") {
        return "Use Caution on the River";
    }

    if (riverScore >= 8) {
        return "Good Day for the River";
    }

    if (riverScore >= 6) {
        return "Fair River Conditions";
    }

    return "River Plans Need Caution";
}

function getMarineNarrative(todaySummary, boatingOutlook, windSpeed) {
    if (todaySummary.label === "Storms Likely") {
        return "Thunderstorms are expected scattered throughout the day. Visitors planning time on the river should monitor changing weather conditions.";
    }

    if (todaySummary.label === "Storms Possible") {
        return "Thunderstorms are possible today. Check conditions before heading out and keep an eye on the sky while on the river.";
    }

    if (todaySummary.label === "Rain Likely") {
        return "Showers may affect parts of the day. Boating, fishing, and dockside plans may still be possible between showers.";
    }

    if (boatingOutlook === "Use Caution" || windSpeed >= 20) {
        return "Wind and weather conditions may make boating less comfortable today. Use caution before heading out.";
    }

    if (boatingOutlook === "Fair") {
        return "River conditions look manageable, but wind or rain chances may affect comfort on the water.";
    }

    return "Conditions look favorable for boating, fishing, waterfront dining, and time on the Homosassa River.";
}

        async function loadMarineConditions() {
    const summaryCard = document.getElementById("marine-summary-card");
    const forecastGrid = document.getElementById("marine-forecast-grid");

    if (!summaryCard) {
        return;
    }

    const url =
        "https://api.open-meteo.com/v1/forecast" +
        "?latitude=28.7716" +
        "&longitude=-82.6957" +
        "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m" +
        "&hourly=precipitation_probability,uv_index,weather_code" +
        "&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset" +
        "&temperature_unit=fahrenheit" +
        "&wind_speed_unit=mph" +
        "&timezone=America%2FNew_York";

    try {
        const response = await fetch(url);
        const data = await response.json();

        const current = data.current;
        const hourly = data.hourly;
        const daily = data.daily;

        const todayDate = daily.time[0];
        const todaySummary = getDailySummary(todayDate, hourly);

        const windSpeed = Math.round(current.wind_speed_10m);
        const windDirection = getWindDirection(current.wind_direction_10m);
        const rainChance = daily.precipitation_probability_max[0];
        const highTemp = Math.round(daily.temperature_2m_max[0]);
        const lowTemp = Math.round(daily.temperature_2m_min[0]);

        const uvIndex = getDailyMaxUvIndex(todayDate, hourly);
        const uvRisk = uvIndex !== null ? getUvRiskLabel(uvIndex) : "Unavailable";

        const moonPhase = getMoonPhaseInfo(new Date());

        const boatingOutlook = getBoatingOutlook(windSpeed, rainChance);
        const riverScore = getRiverScore(todaySummary, windSpeed, rainChance);
        const marineSummary = getMarineSummary(riverScore, todaySummary, boatingOutlook);
        const marineNarrative = getMarineNarrative(
            todaySummary,
            boatingOutlook,
            windSpeed
        );

        summaryCard.innerHTML = `
            <div class="marine-summary-header">

                <div>
                    <h2>${marineSummary}</h2>
                </div>

                <div class="marine-score">
                    ${riverScore}/10
                </div>

            </div>

            <p class="marine-card-intro">
                ${marineNarrative}
            </p>

            <div class="marine-condition-list">

                <span>${todaySummary.icon} ${todaySummary.label}${todaySummary.note ? ` - ${todaySummary.note}` : ""}</span>
                <span>${ICONS.temperature} High ${highTemp}&deg; / Low ${lowTemp}&deg;</span>
                <span>${ICONS.wind} Wind ${windDirection} ${windSpeed} mph</span>
                <span>${ICONS.rain} Rain Chance ${rainChance}%</span>
                <span>${ICONS.sunny} Peak UV Index: ${uvIndex !== null ? uvIndex : "N/A"} &mdash; ${uvRisk}</span>
                <span>${ICONS.moon} Moon Phase: ${moonPhase.phase} &mdash; ${moonPhase.illumination}%</span>
                <span>${ICONS.boat} Boating Outlook: ${boatingOutlook}</span>

            </div>

            <div class="marine-outlook-advisory">

                <p class="marine-label">Marine Advisories</p>

                <div id="marine-advisory-content" class="marine-advisory-content">
                    Checking active marine advisories...
                </div>

            </div>
        `;

        updateSunTimes(daily);

        if (forecastGrid) {
            forecastGrid.innerHTML = buildMarineForecastCards(daily, hourly);
        }

        updateMarinePanelHeights();

    } catch (error) {
        summaryCard.innerHTML = `
            <h2>River Conditions Temporarily Unavailable</h2>
            <p>
                Live marine forecast information could not be loaded right now.
                Please check again shortly.
            </p>
        `;

        updateMarinePanelHeights();
    }
}

/* =========================
   NOAA TIDE CHART
========================= */

async function loadTideChart() {
    const tideChart = document.getElementById("tide-chart");
    const tideStatusCard = document.getElementById("current-tide-status");

    if (!tideChart) {
        return;
    }

    const station = "8727277";
    const today = new Date();

    const baseUrl =
        "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter" +
        "?product=predictions" +
        "&application=MacRaesWebsite" +
        `&begin_date=${formatNoaaDate(today)}` +
        `&end_date=${formatNoaaDate(today, 1)}` +
        "&datum=MLLW" +
        `&station=${station}` +
        "&time_zone=lst_ldt" +
        "&units=english" +
        "&format=json";

    const smoothUrl = baseUrl + "&interval=6";
    const highLowUrl = baseUrl + "&interval=hilo";

    try {
        const [smoothResponse, highLowResponse, sunTimes] = await Promise.all([
            fetch(smoothUrl),
            fetch(highLowUrl),
            fetchSunTimes()
        ]);

        const smoothData = await smoothResponse.json();
        const highLowData = await highLowResponse.json();

        const smoothPredictions = smoothData.predictions;
        const highLowPredictions = highLowData.predictions || [];

        if (!smoothPredictions || smoothPredictions.length === 0) {
            tideChart.innerHTML = "<p>Tide information is temporarily unavailable.</p>";
            return;
        }

        renderSunTimesCard(sunTimes);

        if (tideStatusCard) {
            const tideStatus = getCurrentTideStatus(
                smoothPredictions,
                highLowPredictions
            );

            tideStatusCard.innerHTML = `
                <div class="tide-status-main">

                    <div>
                        <p class="marine-label">Current Tide</p>
                        <h3>${tideStatus.height} ft</h3>
                        <p>${tideStatus.direction}</p>
                    </div>

                    <div>
                        <p class="marine-label">Next Tide</p>
                        <h3>${tideStatus.nextType}</h3>
                        <p>${tideStatus.nextTime} - ${tideStatus.timeUntil}</p>
                    </div>

                </div>

                <p class="tide-updated-time">
                    <span class="tide-live-indicator">LIVE</span>
                    Updated ${formatSiteTime(new Date())}
                </p>
            `;
        }

        tideChart.innerHTML = buildTideSvg(
            smoothPredictions,
            highLowPredictions,
            sunTimes
        );

        updateMarinePanelHeights();

    } catch (error) {
        tideChart.innerHTML = `
            <p>
                Unable to load NOAA tide predictions.
            </p>
        `;
    }
}

async function fetchSunTimes() {
    const url =
        "https://api.open-meteo.com/v1/forecast" +
        "?latitude=28.7716" +
        "&longitude=-82.6957" +
        "&daily=sunrise,sunset" +
        "&timezone=America%2FNew_York";

    const response = await fetch(url);
    const data = await response.json();

    return {
        sunrise: parseSiteDateTime(data.daily.sunrise[0]),
        sunset: parseSiteDateTime(data.daily.sunset[0])
    };
}

function renderSunTimesCard(sunTimes) {
    const sunTimesCard = document.getElementById("sun-times");

    if (!sunTimesCard || !sunTimes) {
        return;
    }

    sunTimesCard.innerHTML = `
        <div class="sun-times-header">
            <div>
                <p class="marine-label">Sunrise / Sunset</p>
            </div>
        </div>

        <div class="sun-times-grid">

            <div>
                <span>Sunrise</span>
                <strong>${formatSiteTime(sunTimes.sunrise)}</strong>
            </div>

            <div>
                <span>Sunset</span>
                <strong>${formatSiteTime(sunTimes.sunset)}</strong>
            </div>

        </div>

        <p class="sun-times-note">
            <span class="sun-times-legend-swatch" aria-hidden="true"></span>
            Warm shading marks daylight hours on the tide chart.
        </p>
    `;
}

function getCurrentTideStatus(predictions, highLowPredictions = []) {
    const now = getSiteNow();

    const sortedPredictions = predictions
        .map(item => ({
            time: parseSiteDateTime(item.t),
            height: Number(item.v)
        }))
        .sort((a, b) => a.time - b.time);

    const closestIndex = sortedPredictions.reduce((bestIndex, item, index) => {
        const currentDifference = Math.abs(item.time - now);
        const bestDifference = Math.abs(sortedPredictions[bestIndex].time - now);

        return currentDifference < bestDifference ? index : bestIndex;
    }, 0);

    const currentPoint = sortedPredictions[closestIndex];
    const previousPoint = sortedPredictions[Math.max(0, closestIndex - 1)];
    const nextPoint = sortedPredictions[Math.min(sortedPredictions.length - 1, closestIndex + 1)];

    let direction = "Steady";

    if (nextPoint.height > previousPoint.height) {
        direction = "Rising";
    } else if (nextPoint.height < previousPoint.height) {
        direction = "Falling";
    }

    const nextTide = highLowPredictions
        .map(item => ({
            type: item.type === "H" ? "High Tide" : "Low Tide",
            time: parseSiteDateTime(item.t),
            height: Number(item.v)
        }))
        .filter(item => item.time > now)
        .sort((a, b) => a.time - b.time)[0];

    const formatDuration = futureDate => {
        const diffMinutes = Math.max(0, Math.round((futureDate - now) / 60000));
        const hours = Math.floor(diffMinutes / 60);
        const minutes = diffMinutes % 60;

        if (hours === 0) {
            return `${minutes} min away`;
        }

        return `${hours} hr ${minutes} min away`;
    };

    return {
        height: currentPoint.height.toFixed(2),
        direction,
        nextType: nextTide ? nextTide.type : "Unavailable",
        nextTime: nextTide ? formatSiteTime(nextTide.time) : "N/A",
        timeUntil: nextTide ? formatDuration(nextTide.time) : "N/A"
    };
}

function buildTideChartBackground(sunTimes, xScale, plotTop, plotBottom, firstTime, lastTime) {
    if (!sunTimes || !sunTimes.sunrise || !sunTimes.sunset) {
        return "";
    }

    const sunriseTime = Math.max(sunTimes.sunrise.getTime(), firstTime);
    const sunsetTime = Math.min(sunTimes.sunset.getTime(), lastTime);

    if (sunsetTime <= firstTime || sunriseTime >= lastTime || sunsetTime <= sunriseTime) {
        return "";
    }

    const daylightX = xScale(new Date(sunriseTime));
    const daylightWidth = xScale(new Date(sunsetTime)) - daylightX;

    return `
        <rect
            x="${daylightX}"
            y="${plotTop}"
            width="${daylightWidth}"
            height="${plotBottom - plotTop}"
            fill="rgba(244,162,97,.08)">
        </rect>
    `;
}

function getCurrentTideCurvePoint(chartPredictions, siteNow) {
    const nowTime = siteNow.getTime();

    for (let index = 0; index < chartPredictions.length - 1; index++) {
        const current = chartPredictions[index];
        const next = chartPredictions[index + 1];

        if (nowTime >= current.time.getTime() && nowTime <= next.time.getTime()) {
            const timeRange = next.time.getTime() - current.time.getTime();
            const progress = timeRange === 0 ? 0 : (nowTime - current.time.getTime()) / timeRange;
            const value = current.value + (next.value - current.value) * progress;

            return {
                time: siteNow,
                value
            };
        }
    }

    return null;
}

function buildTideSvg(predictions, highLowPredictions = [], sunTimes = null) {
    const width = 1100;
    const height = 520;
    const padding = 40;
    const plotTop = 82;
    const plotBottom = height - 54;

    const chartPredictions = predictions
        .map(item => ({
            time: parseSiteDateTime(item.t),
            value: Number(item.v),
            ...item
        }))
        .sort((a, b) => a.time - b.time);

    const values = chartPredictions.map(item => item.value);
    const min = Math.min(...values);
    const max = Math.max(...values);

    const range = max - min;
    const displayMin = min - range * 0.05;
    const displayMax = max + range * 0.05;

    const firstTime = chartPredictions[0].time.getTime();
    const lastTime = chartPredictions[chartPredictions.length - 1].time.getTime();
    const timeRange = lastTime - firstTime || 1;

    const firstDate = new Date(firstTime);
    const lastDate = new Date(lastTime);

    const firstWeekday = formatSiteDate(firstDate, {
        weekday: "long"
    });

    const lastWeekday = formatSiteDate(lastDate, {
        weekday: "long"
    });

    const firstMonth = formatSiteDate(firstDate, {
        month: "long"
    });

    const lastMonth = formatSiteDate(lastDate, {
        month: "long"
    });

    const firstDay = formatSiteDate(firstDate, {
        day: "numeric"
    });

    const lastDay = formatSiteDate(lastDate, {
        day: "numeric"
    });

    const chartSubtitle =
        firstMonth === lastMonth
            ? `${firstWeekday}&ndash;${lastWeekday} &bull; ${firstMonth} ${firstDay}&ndash;${lastDay}`
            : `${firstWeekday}&ndash;${lastWeekday} &bull; ${firstMonth} ${firstDay}&ndash;${lastMonth} ${lastDay}`;

    const xScale = date =>
        padding +
        ((date.getTime() - firstTime) / timeRange) *
        (width - padding * 2);

    const yScale = value =>
        plotBottom -
        ((value - displayMin) / (displayMax - displayMin || 1)) *
        (plotBottom - plotTop);

    const points = chartPredictions.map(item => ({
        x: xScale(item.time),
        y: yScale(item.value),
        value: item.value,
        time: item.time,
        ...item
    }));

    const siteNow = getSiteNow();

    const showCurrentMarker =
        siteNow.getTime() >= firstTime &&
        siteNow.getTime() <= lastTime;

    const currentX = xScale(siteNow);

    const nextUpcomingTide = highLowPredictions
        .map(item => ({
            ...item,
            time: parseSiteDateTime(item.t)
        }))
        .filter(item => item.time > siteNow)
        .sort((a, b) => a.time - b.time)[0];

    const smoothPath = points.map((point, index) => {
        if (index === 0) {
            return `M ${point.x},${point.y}`;
        }

        const previous = points[index - 1];

        const controlX1 = previous.x + (point.x - previous.x) / 2;
        const controlY1 = previous.y;

        const controlX2 = previous.x + (point.x - previous.x) / 2;
        const controlY2 = point.y;

        return `C ${controlX1},${controlY1} ${controlX2},${controlY2} ${point.x},${point.y}`;
    }).join(" ");

    const fillPath =
        `${smoothPath} ` +
        `L ${points[points.length - 1].x},${plotBottom} ` +
        `L ${points[0].x},${plotBottom} Z`;

    const chartBackground = buildTideChartBackground(
        sunTimes,
        xScale,
        plotTop,
        plotBottom,
        firstTime,
        lastTime
    );

    const gridCount = 4;

    const gridLines = Array.from({ length: gridCount + 1 }, (_, index) => {
        const value = min + ((max - min) / gridCount) * index;
        const y = yScale(value);

        return `
            <line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="rgba(255,255,255,.16)" stroke-width="1"></line>
            <text x="${padding - 10}" y="${y + 4}" text-anchor="end" font-size="12" fill="rgba(255,255,255,.7)">
                ${value.toFixed(1)} ft
            </text>
        `;
    }).join("");

    const timeLabels = Array.from({ length: 9 }, (_, index) => {
        const labelTime = new Date(firstTime + (timeRange / 8) * index);
        const x = padding + (index / 8) * (width - padding * 2);
        const label = formatSiteTime(labelTime, { minute: undefined });

        return `
            <line x1="${x}" y1="${plotTop}" x2="${x}" y2="${plotBottom}" stroke="rgba(255,255,255,.10)" stroke-width="1"></line>
            <text x="${x}" y="${plotBottom + 25}" text-anchor="middle" font-size="12" fill="rgba(255,255,255,.72)">
                ${label}
            </text>
        `;
    }).join("");

    const labels = highLowPredictions.map(item => {
        const pointTime = parseSiteDateTime(item.t);
        const pointValue = Number(item.v);
        const pointX = xScale(pointTime);
        const pointY = yScale(pointValue);
        const time = formatSiteTime(pointTime);
        const type = item.type === "H" ? "High" : "Low";

        const isNextTide =
            nextUpcomingTide &&
            pointTime.getTime() === nextUpcomingTide.time.getTime();

        const markerRadius = isNextTide ? 10 : 7;
        const markerGlowRadius = isNextTide ? 18 : 13;
        const markerFill = isNextTide ? "#FFD08A" : "#F4A261";
        const markerGlow = isNextTide ? "rgba(255,208,138,.55)" : "rgba(244,162,97,.35)";
        const labelWeight = isNextTide ? "700" : "400";

        return `
            <text x="${pointX}" y="${pointY - 45}" text-anchor="middle" font-size="13" font-weight="${labelWeight}" fill="white">
                ${type} Tide
            </text>

            <text x="${pointX}" y="${pointY - 27}" text-anchor="middle" font-size="12" fill="rgba(255,255,255,.75)">
                ${time}
            </text>

            <circle cx="${pointX}" cy="${pointY}" r="${markerRadius}" fill="${markerFill}"></circle>
            <circle cx="${pointX}" cy="${pointY}" r="${markerGlowRadius}" fill="none" stroke="${markerGlow}" stroke-width="2"></circle>
        `;
    }).join("");

    const currentMarker = showCurrentMarker ? `
        <line x1="${currentX}" y1="${plotTop}" x2="${currentX}" y2="${plotBottom}" stroke="#F4A261" stroke-width="2" stroke-dasharray="8 6" opacity=".9"></line>
        <text x="${currentX}" y="${plotTop - 12}" text-anchor="middle" font-size="13" font-weight="bold" fill="#F4A261">
            NOW
        </text>
    ` : "";

    return `
        <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Tide chart for Tuckers Island Homosassa River">

            <defs>
                <linearGradient id="tideFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#8DE3FF" stop-opacity=".7" />
                    <stop offset="100%" stop-color="#17324D" stop-opacity=".25" />
                </linearGradient>

                <filter id="tideGlow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <text
                x="${width / 2}"
                y="28"
                text-anchor="middle"
                font-size="16"
                font-weight="700"
                fill="#F4A261">
                48-Hour Tide Forecast &bull; ${chartSubtitle}
            </text>

            ${chartBackground}
            ${gridLines}
            ${timeLabels}

            <line x1="${padding}" y1="${plotBottom}" x2="${width - padding}" y2="${plotBottom}" stroke="rgba(255,255,255,.35)"></line>
            <line x1="${padding}" y1="${plotTop}" x2="${padding}" y2="${plotBottom}" stroke="rgba(255,255,255,.35)"></line>

            <path d="${fillPath}" fill="url(#tideFill)"></path>

            <path d="${smoothPath}" fill="none" stroke="#8DE3FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" filter="url(#tideGlow)"></path>

            ${currentMarker}
            ${labels}

        </svg>
    `;
}

        /* =========================
        COLLAPSIBLE MARINE PANELS
        ========================= */

        function updateMarinePanelHeight(panel) {
            const content = panel.querySelector(".marine-panel-content");

            if (!content) {
                return;
            }

            if (panel.classList.contains("is-open")) {
                content.style.maxHeight = `${content.scrollHeight}px`;
            } else {
                content.style.maxHeight = "0px";
            }
        }

        function setMarinePanelState(panel, isOpen) {
            const button = panel.querySelector(".marine-panel-toggle");
            const storageKey = panel.dataset.collapseKey;

            panel.classList.toggle("is-open", isOpen);
            panel.classList.toggle("is-collapsed", !isOpen);

            if (button) {
                button.setAttribute("aria-expanded", String(isOpen));
            }

            if (storageKey) {
                localStorage.setItem(storageKey, isOpen ? "open" : "collapsed");
            }

            updateMarinePanelHeight(panel);
        }

        function updateMarinePanelHeights() {
            document
                .querySelectorAll(".marine-collapse-panel")
                .forEach(panel => updateMarinePanelHeight(panel));
        }

        function initializeMarineCollapsiblePanels() {
            const panels = document.querySelectorAll(".marine-collapse-panel");
        
            const defaultPanelStates = {
                "marine-outlook": "open",
                "marine-forecast": "collapsed",
                "marine-tides": "collapsed",
                "marine-radar": "collapsed"
            };
        
            panels.forEach(panel => {
                const button = panel.querySelector(".marine-panel-toggle");
                const storageKey = panel.dataset.collapseKey;
                const savedState = storageKey ? localStorage.getItem(storageKey) : null;
                const defaultState = defaultPanelStates[storageKey] || "collapsed";
                const panelState = savedState || defaultState;
                const isOpen = panelState === "open";
        
                panel.classList.add(isOpen ? "is-open" : "is-collapsed");
        
                if (button) {
                    button.setAttribute("aria-expanded", String(isOpen));
        
                    button.addEventListener("click", () => {
                        setMarinePanelState(
                            panel,
                            !panel.classList.contains("is-open")
                        );
                    });
                }
        
                updateMarinePanelHeight(panel);
            });
        
            window.addEventListener("resize", updateMarinePanelHeights);
        }

        /* =========================
   MARINE ADVISORIES
========================= */

function isMarineAlert(alert) {
    const marineTerms = [
        "Small Craft Advisory",
        "Marine Weather Statement",
        "Coastal Flood",
        "Rip Current",
        "Gale Warning",
        "Storm Warning",
        "Hurricane",
        "Tropical Storm",
        "Thunderstorm",
        "Waterspout"
    ];

    const searchableText = [
        alert.properties.event,
        alert.properties.headline,
        alert.properties.description,
        alert.properties.instruction
    ].join(" ");

    return marineTerms.some(term =>
        searchableText.toLowerCase().includes(term.toLowerCase())
    );
}

function getAlertDetailsLink(alert) {
    return alert.properties.uri || alert.id || "https://forecast.weather.gov/MapClick.php?lat=28.784&lon=-82.621";
}

async function loadMarineAdvisories() {
    const advisoryContent = document.getElementById("marine-advisory-content");

    if (!advisoryContent) {
        return;
    }

    const url = "https://api.weather.gov/alerts/active?point=28.784,-82.621";

    try {
        const response = await fetch(url, {
            headers: {
                "Accept": "application/geo+json"
            }
        });

        const data = await response.json();
        const alerts = data.features || [];

        const marineAlerts = alerts.filter(isMarineAlert);
        const alertToShow = marineAlerts[0];

        if (alertToShow) {
            const properties = alertToShow.properties;
            const detailsLink = getAlertDetailsLink(alertToShow);

            advisoryContent.classList.add("marine-advisory-active");

            advisoryContent.innerHTML = `
                <h3>${properties.event || "Active Marine Advisory"}</h3>

                <p>
                    ${properties.headline || "An active marine advisory is in effect for the Homosassa area."}
                </p>

                <p class="marine-advisory-meta">
                    Severity: ${properties.severity || "Unknown"}
                </p>

                ${properties.instruction ? `
                    <p>
                        ${properties.instruction}
                    </p>
                ` : ""}

                <a
                    href="${detailsLink}"
                    target="_blank"
                    rel="noopener noreferrer">
                    View NWS details
                </a>
            `;

            updateMarinePanelHeights();
            return;
        }

        advisoryContent.classList.remove("marine-advisory-active");

        if (alerts.length > 0) {
            advisoryContent.innerHTML = `

                <p class="marine-advisory-status">
                    No active marine advisories for the Homosassa area.
                    Nearby weather alerts may still apply.
                </p>
            `;
        } else {
            advisoryContent.innerHTML = `

                <p class="marine-advisory-status">
                    No active marine advisories for the Homosassa area.
                </p>
            `;
        }

        updateMarinePanelHeights();

    } catch (error) {
        advisoryContent.classList.remove("marine-advisory-active");

        advisoryContent.innerHTML = `
            <h3>Advisories Temporarily Unavailable</h3>

            <p class="marine-advisory-status">
                Marine advisory information could not be loaded right now.
                Please check conditions before heading out.
            </p>
        `;

        updateMarinePanelHeights();
    }
}

/* =========================
   MOON PHASE
========================= */

function getMoonPhaseInfo(date) {
    const synodicMonth = 29.53058867;
    const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14);
    const currentTime = date.getTime();

    const daysSinceKnownNewMoon =
        (currentTime - knownNewMoon) / 86400000;

    const moonAge =
        ((daysSinceKnownNewMoon % synodicMonth) + synodicMonth) % synodicMonth;

    const illumination =
        Math.round(
            ((1 - Math.cos((2 * Math.PI * moonAge) / synodicMonth)) / 2) * 100
        );

    let phase = "New Moon";

    if (moonAge < 1.85) phase = "New Moon";
    else if (moonAge < 5.54) phase = "Waxing Crescent";
    else if (moonAge < 9.23) phase = "First Quarter";
    else if (moonAge < 12.92) phase = "Waxing Gibbous";
    else if (moonAge < 16.61) phase = "Full Moon";
    else if (moonAge < 20.30) phase = "Waning Gibbous";
    else if (moonAge < 23.99) phase = "Last Quarter";
    else if (moonAge < 27.68) phase = "Waning Crescent";

    return {
        phase,
        illumination
    };
}

function loadMoonPhase() {
    const moonPhaseContent = document.getElementById("moon-phase-content");

    if (!moonPhaseContent) {
        return;
    }

    const moonPhase = getMoonPhaseInfo(getSiteNow());

    moonPhaseContent.innerHTML = `
        <div>
            <h3>${moonPhase.phase}</h3>
            <p>
                Approximate lunar illumination for tonight.
            </p>
        </div>

        <div class="moon-phase-illumination">
            ${moonPhase.illumination}%
        </div>
    `;
}

/* =========================
   AUTO REFRESH
========================= */

const MARINE_REFRESH_INTERVAL = 10 * 60 * 1000;

function refreshMarineDashboard() {
    loadMarineConditions().then(() => {
        loadMarineAdvisories();
    });

    loadTideChart();
}

function startMarineAutoRefresh() {
    setInterval(() => {
        refreshMarineDashboard();
    }, MARINE_REFRESH_INTERVAL);
}

/* =========================
   INITIALIZATION
========================= */

initializeMarineCollapsiblePanels();

refreshMarineDashboard();
startMarineAutoRefresh();
