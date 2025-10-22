const path = require('path');

module.exports.library = (library) => {
	library.__folderPath = path.join(process.cwd());

	library.__filePath = library.url.replace('/', '');

	return library;
};
