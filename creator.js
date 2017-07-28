var fs = require('fs');

function createDir(path) {
	const isExist = fs.existsSync(`./${path}`);
	if (isExist) {
		console.log('Info: This project name is exist.')
	} else {
		fs.mkdirSync(`./${path}`);
	}
}

function createFile(fileName) {
	const isExist = fs.existsSync(fileName);
	if (isExist) {
		console.log('Info: This file is exist.')
	} else {
		fs.writeFileSync(`./${fileName}`);
	}
}

module.exports = createDir;
