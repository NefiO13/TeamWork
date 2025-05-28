document.addEventListener("DOMContentLoaded", () => {
    const schedule = [
        {
            date: "Oct 22, 2025",
            opponent: "Golden State Warriors",
            location: "Chase Center (Away)",
            time: "7:30 PM PT",
            broadcast: "ESPN"
        },
        {
            date: "Oct 25, 2025",
            opponent: "Denver Nuggets",
            location: "Crypto.com Arena (Home)",
            time: "7:00 PM PT",
            broadcast: "TNT"
        },
        {
            date: "Oct 28, 2025",
            opponent: "Phoenix Suns",
            location: "Footprint Center (Away)",
            time: "6:30 PM PT",
            broadcast: "NBA TV"
        },
        {
            date: "Nov 2, 2025",
            opponent: "Boston Celtics",
            location: "Crypto.com Arena (Home)",
            time: "5:00 PM PT",
            broadcast: "ABC"
        },
        {
            date: "Nov 6, 2025",
            opponent: "Dallas Mavericks",
            location: "American Airlines Center (Away)",
            time: "7:00 PM CT",
            broadcast: "ESPN"
        },
        {
            date: "Nov 10, 2025",
            opponent: "Miami Heat",
            location: "Crypto.com Arena (Home)",
            time: "6:00 PM PT",
            broadcast: "NBA TV"
        },
        {
            date: "Nov 14, 2025",
            opponent: "Milwaukee Bucks",
            location: "Fiserv Forum (Away)",
            time: "5:00 PM PT",
            broadcast: "TNT"
        },
        {
            date: "Nov 18, 2025",
            opponent: "New York Knicks",
            location: "Madison Square Garden (Away)",
            time: "4:30 PM PT",
            broadcast: "ABC"
        },
        {
            date: "Nov 22, 2025",
            opponent: "Chicago Bulls",
            location: "Crypto.com Arena (Home)",
            time: "7:30 PM PT",
            broadcast: "NBA TV"
        },
        {
            date: "Nov 26, 2025",
            opponent: "Los Angeles Clippers",
            location: "Crypto.com Arena (Home)",
            time: "7:00 PM PT",
            broadcast: "ESPN"
        }
    ];

    const tbody = document.querySelector("#scheduleTable tbody");

    schedule.forEach(game => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${game.date}</td>
            <td>${game.opponent}</td>
            <td>${game.location}</td>
            <td>${game.time}</td>
            <td>${game.broadcast}</td>
        `;
        tbody.appendChild(row);
    });
});