import Emotion from './Emotion';

class Entry {
    private _user: string;
    private _notes: string;
    private _files: string[];
    private _date: Date;
    private _emotions: Emotion[];

    public constructor(notes: string, files: string[], date: Date, emotions: Emotion[], user: string) {
        this._user = user
        this._notes = notes;
        this._files = files;
        this._date = date;
        this._emotions = emotions;
    }

    public getDate(): Date {
        return this._date;
    }

    private getUser(): string {
        return this._user;
    }

    public checkAccess(user: string): boolean {
        return this.getUser() === user;
    }

    public getTime(): number {
        return this.getDate().getTime();
    }

    public getNotes(): string {
        return this._notes;
    }

    public getFiles(): string[] {
        return this._files;
    }

    public getEmotions(): Emotion[] {
        return this._emotions;
    }

    public getColorList(): string[] {
        let colorList: string[] = [];
        this._emotions.map((value, _) => {
            colorList.push(value.getColor());
        });
        return colorList;
    }
}

export default Entry;