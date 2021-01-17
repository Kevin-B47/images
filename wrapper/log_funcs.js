var exec = require('child_process').exec;

const logDir = 'server-logs';

const getDateString = () => {
	const now = new Date();
	let arry = now.toString().split(' ', 5).map((s) => {
		while (s.indexOf(':') !== -1) {
			s = s.replace(':', '-');
		}
		return s;
	});
	arry[arry.length - 1] = 'taken-at-' + arry[arry.length - 1];
	return arry.join('-');
};

const getLogFileName = () => {
	return `${getDateString()}.log`;
};

const getAbsoluteLogPath = () => {
	return `${logDir}/${getLogFileName()}`;
};

const createDir = () => {
	try {
		fs.mkdirSync(logDir);
	} catch (e) {}
};

module.exports.getAbsoluteLogPath = getAbsoluteLogPath;
module.exports.getLogFileName = getLogFileName;
module.exports.createDir = createDir;
