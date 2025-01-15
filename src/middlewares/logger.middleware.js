import fs from 'fs';

const fsPromise = fs.promises;

async function log(logData) {
    try {
        logData = `\n ${new Date().toString()} - ${logData}`;
        await fsPromise.appendFile('log.txt', logData);
    } catch(err) {
        console.log("Something went wrong", err);
    }
}

const loggerMiddleware = async (req, res, next) => {
    if(!req.url.includes('signin')) {
        const logData = `${req.url} - ${JSON.stringify(req.body)}`;
        await log(logData);
    }
    next();
}

export default loggerMiddleware;