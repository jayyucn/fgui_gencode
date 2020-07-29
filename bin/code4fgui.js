const program = require('commander');
const Main = require('./bundle/Main')

program
    .version('1.0.1', '-v, --version')
    .usage("[command] [args]")
    .command('gencode <project> [output]')
    .description('生成fgui的代码，参数1为fgui工程根目录, 参数2位代码 输出目录')
    .action((project, output)=>{
        Main.Init(project, output);
    })
    .parse(process.argv);