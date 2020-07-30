export enum LogLevel {
    Debug = 0,
    Info  = 1,
    Warn  = 2,
    Error = 3
}

export default class CFLog {
    private static logLevel: LogLevel = LogLevel.Debug;

    public static Debug(...args)
    {
        if(CFLog.logLevel > LogLevel.Debug)
        {
            return;
        }
        console.log.apply(this, args);
    }

    public static Info(...args)
    {
        if(CFLog.logLevel > LogLevel.Info)
        {
            return;
        }
        console.log.apply(this,args);
    }

    public static Warn(...args)
    {
        if(CFLog.logLevel > LogLevel.Warn)
        {
            return;
        }
        console.warn.apply(this,args);
    }

    public static Error(...args)
    {
        console.error.apply(this,args);
    }

    public static SetLogLevel(level: LogLevel)
    {
        CFLog.logLevel = level;
    }

    public static GetLogLevel(): LogLevel
    {
        return CFLog.logLevel;
    }
}