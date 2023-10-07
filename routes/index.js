const registrationRouter = require('./registration');
const branchRouter = require('./branch');
const initRoutes = (app) => {
    app.use("/", registrationRouter);
    app.use("/branch/", branchRouter);
}
module.exports = initRoutes;
