import Options from './Options';
export default class Setting {
    private static _Options : Options;
    public static get Options() : Options {
        if(!this._Options)
            this._Options = new Options();
        return this._Options;
    }
    
}