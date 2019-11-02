class Event {
    constructor(date, time, emotions, notes, files) {
        this.date = date;
        this.time = time;
        this.emotions = emotions;
        this.notes = notes;
        this.files = files;
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