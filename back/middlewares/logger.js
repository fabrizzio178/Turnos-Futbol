const logger = (req, res, next) => {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} request to ${url}`);
    next();
}
export default logger;
// This middleware logs the HTTP method, URL, and timestamp of each request.
