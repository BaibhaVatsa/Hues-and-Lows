class Event {
    constructor(date, time, emotions, notes) {
        this.date = date;
        this.time = time;
        this.emotions = emotions;
        this.notes = notes;
    }

    getDate() {
        return this.date;
    }

    getTime() {
        return this.time;
    }

    getEmotions() {
        return this.emotions;
    }

    getNotes() {
        return this.notes;
    }

    getFiles() {
        return this.files;
    }
}