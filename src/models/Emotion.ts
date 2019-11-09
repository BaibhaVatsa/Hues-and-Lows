class Emotion {
    private _name: string;
    private _color: string;

    public constructor(name: string, color: string) {
        this._name = name;
        this._color = color;
    }

    public getName(): string {
        return this._name;
    }

    public getColor(): string {
        return this._color;
    }
}

export default Emotion;