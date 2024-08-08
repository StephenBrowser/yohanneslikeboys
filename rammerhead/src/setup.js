import fs from 'node:fs';
import path from 'node:path';

try {
    fs.mkdirSync(path.join(import.meta.dirname, '..', 'sessions'));
    fs.mkdirSync(path.join(import.meta.dirname, '..', 'cache-js'));
    fs.mkdirSync(path.join(import.meta.dirname, '..', 'public'));
}
catch (err) {
    //steam roll over errors :D
    //console.error('Something went wrong!\n', err)
}