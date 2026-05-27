const container = document.getElementById('sessions-container');
const sessionsData = localStorage.getItem('sessionsList');
if (sessionsData === null) {
    container.innerHTML = '<p>Ви ще не відвідували головну сторінку.</p>';
} else {
    const sessionsArray = JSON.parse(sessionsData);
    const ul = document.createElement('ul');
    sessionsArray.forEach(function (visitTime, index) {
        const li = document.createElement('li');
        li.textContent = `Візит №${index + 1} — ${visitTime}`;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}
