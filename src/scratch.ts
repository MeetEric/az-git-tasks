import { FileSystemStorage } from 'meeteric-ts';
import { GitLogParser } from './adapters/index';

export class Program {
    public static async Run() {
        const s = new FileSystemStorage("src/resources");
        const data = await s.ReadItem("TestSim/Log.txt");
        const result = GitLogParser.ParseLog(data);
        s.SaveItem("test.json", JSON.stringify(result));
        //console.warn(JSON.stringify(result));
    }
}

Program.Run();