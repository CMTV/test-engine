import * as fs from "fs-extra";
import * as path from "path";

console.log('STARTING BUILD PROCESS!');

let dataPath = path.normalize(path.join(process.argv[2], 'data.txt'));
console.log(dataPath);

let data = fs.readFileSync(dataPath, { encoding: 'utf-8' });
console.log(data);

fs.removeSync('dist');
fs.mkdirSync('dist');
fs.writeFileSync('dist/ready.txt', 'HANDLED: ' + data);