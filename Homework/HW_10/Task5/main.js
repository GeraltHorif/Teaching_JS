let sessions = localStorage.getItem('sessionsList');

if (sessions === null) {
    sessions = [];
} else {
    sessions = JSON.parse(sessions);
}

const currentVisit = new Date().toLocaleString();

sessions.push(currentVisit);

localStorage.setItem('sessionsList', JSON.stringify(sessions));
