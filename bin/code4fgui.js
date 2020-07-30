#!/usr/bin/env node

const program = require('commander');
const { default: Main } = require('./bundle/Main');
require('./libs/StringExtends');

program
    .version('1.0.0', '-v, --version')
    .usage("示例：code4fgui -p path-of-client -o path-of-output -t path-of-template")
    .option('-p --project-path <in>', "[必填] 客户端工程根目录")
    .option('-o --output-path <out>', "[必填] 代码输出目录")
    .option('-t --template-Path <tp>', "[选填] 代码模板目录")
    .parse(process.argv);

if (!program.projectPath)
    throw new Error("缺少参数：-p [client path]客户端地址,可填相对地址");
if (!program.outputPath)
    throw new Error("缺少参数：-o [output path]代码输出地址,可填相对地址");

Main.Init(program.projectPath, program.outputPath, program.templatePath);
