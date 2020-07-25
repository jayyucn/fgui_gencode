/*-----------------------------+-------------------------------\
|                                                              |
|                         !!!NOTICE!!!                         |
|                                                              |
|  These libraries are under heavy development so they are     |
|  subject to make many changes as development continues.      |
|  For this reason, the libraries may not be well commented.   |
|  THANK YOU for supporting forge with all your feedback       |
|  suggestions, bug reports and comments!                      |
|                                                              |
|                              - The Forge Team                |
|                                Bearded Man Studios, Inc.     |
|                                                              |
|  This source code, project files, and associated files are   |
|  copyrighted by Bearded Man Studios, Inc. (2012-2017) and    |
|  may not be redistributed without written permission.        |
|                                                              |
\------------------------------+------------------------------*/

enum State
{
    None = 0x0,
    ForEach = 0x1,
    ForEvery = 0x2
}
export class TemplateSystem
{
    private targetTemplate: string = "";
    private replaces: Map<string,string> = new Map<string,string>();

    private state: State = State.None;
    private iteratee: any;
    private currentIterateeIndex = 0;
    private loopStart = -1;
    private emptyArray = false;

    constructor(text: string)
    {
        this.targetTemplate = text;
    }

    public AddVariable(key: string,val: any)
    {
        this.replaces.set(key,val);
    }

    public Parse(): string
    {
        // console.log('-------sss-----', this.replaces)
        let lines: string[] = this.targetTemplate.replace("\r\n","\n").split('\n');

        let finalLines: string[] = [];
        let offset = 0;
        let parsed: boolean = false;
        let skipLine: boolean = false;
        let foundState: State = State.None;
        let parseStr: string = "";
        for(let i = 0;i < lines.length;i++)
        {
            parseStr = lines[i];
            parsed = false;
            skipLine = false;
            while(true)
            {
                let current = parseStr;
                let parseStart = current.indexOf(">:",offset);
                if(parseStart < 0)
                    break;
                parseStart += 2;
                let parseEnd = current.indexOf(":<",offset + parseStart);

                if(parseEnd < 0)
                    console.error("There was a parse start but no end on line " + (i + 1));

                let contents = current.substring(parseStart,parseEnd);
                let tmp = parseStr.split('');
                tmp.splice(parseStart - 2,parseEnd - parseStart + 4);
                parseStr = tmp.join('');
                if(this.CheckState(contents,foundState))
                {
                    skipLine = true;

                    // If we have left the loop
                    if(foundState == State.None)
                    {
                        if(this.loopStart == -1)
                            continue;

                        if(++this.currentIterateeIndex >= this.iteratee.length)
                        {
                            this.state &= ~(State.ForEach | State.ForEvery);
                            this.iteratee = [];
                            this.loopStart = -1;
                            this.emptyArray = false;
                        }
                        else
                        {
                            i = this.loopStart - 1;
                            break;
                        }
                    }
                    else if(foundState == State.ForEach || foundState == State.ForEvery)
                        this.loopStart = i + 1;

                    continue;
                }

                if(!this.emptyArray)
                {
                    let tmp = parseStr.split('');
                   
                    let ps = this.ParseLine(contents);
                    tmp.splice(parseStart - 2,0,ps);
                    
                    parseStr = tmp.join('');
                    // console.log('--content--', contents," ps= ", ps, " bu = ", parseStr);
                }

                parsed = true;
            }

            let built = parseStr;

            if(parsed && built.trim().length == 0)
                lines.splice(i--,1);
            else if(!skipLine && !this.emptyArray)
                finalLines.push(built);
        }

        return finalLines.join('\n');
    }

    private CheckState(contents: string,foundState: State): boolean
    {
        if(contents.startsWith("ENDFOREACH"))
        {
            if((this.state & State.ForEach) == 0)
                console.error("A foreach has ended before the start of the loop");

            foundState = State.None;
            return true;
        }
        if(contents.startsWith("ENDFOREVERY"))
        {
            if((this.state & State.ForEvery) == 0)
                console.error("A foreach has ended before the start of the loop");

            foundState = State.None;
            return true;
        }
        else if(contents.startsWith("FOREACH"))
        {
            if((this.state & State.ForEach) != 0 || (this.state & State.ForEvery) != 0)
                console.error("A loop is already in execution and in this version nested foreach loops are not allowed");

            this.state |= State.ForEach;

            let iterateeName = contents.slice(7).trim();

            if(!this.replaces.has(iterateeName))
                console.error("No variable with the name " + iterateeName + " could be located");

            this.iteratee = this.replaces.get(iterateeName);
            if(iterateeName == "imports") {
                // console.log('imports --- ', this.iteratee, iterateeName);
            }
            
            if(!this.iteratee || this.iteratee.length == 0)
                this.emptyArray = true;

            this.currentIterateeIndex = 0;
            foundState = State.ForEach;
            return true;
        }
        else if(contents.startsWith("FOREVERY"))
        {
            if((this.state & State.ForEach) != 0 || (this.state & State.ForEvery) != 0)
                console.error("A loop is already in execution and in this version nested foreach loops are not allowed");

            this.state |= State.ForEvery;

            let iterateeName = contents.slice(8);

            if(!this.replaces.has(iterateeName))
                console.error("No variable with the name " + iterateeName + " could be located");

            this.iteratee = this.replaces.get(iterateeName);

            if(this.iteratee.length == 0 || (this.iteratee[0]).length == 0)
                this.emptyArray = true;

            this.currentIterateeIndex = 0;
            foundState = State.ForEvery;
            return true;
        }

        return false;
    }

    private ParseLine(contents: string): string
    {
        if(contents.startsWith("[") && contents.endsWith("]"))
        {
            if(contents == '[i]' && this.iteratee != null)
                return this.iteratee[this.currentIterateeIndex];
            else if(contents == "[idx]" && this.iteratee != null)
                return this.FormatReturn(this.currentIterateeIndex);
            else
            {
                var idxStr = contents.slice(1,contents.length-1);
                let idx = -1;
                // console.log(`idx = ${idxStr}, contents = ${contents}, this.iteratee = ${this.iteratee}`);
                
                // if(!isNaN(Number(idxStr)))
                return this.iteratee[idxStr]
                // else
                //     throw new Error("The index " + idxStr + " is not an integer");
            }
        }
        else if(contents == "ELSEIF")
        {
            if(this.currentIterateeIndex == 0)
                return "if";
            else
                return "else if";
        }

        if(this.replaces.has(contents))
            return this.FormatReturn(this.replaces.get(contents));

        return "";
    }

    private FormatReturn(data): string
    {
        if(!data)
            return "";
        return data.toString();
    }
}