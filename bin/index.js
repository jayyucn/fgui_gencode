const { default: Main } = require('./bundle/Main');

require('./libs/StringExtends');
require('./bundle/Main')


function run(argv) {
    if(argv.length == 0) {
        console.info('Usage: fgui_gencode [clientPath] ');
        process.exit(0);
    }
    let clientPath = argv[0];

    Main.Init(clientPath);

}

run(process.argv.slice(2));