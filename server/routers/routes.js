//Controllers
const authentication = require('../controllers/authentication');
const programControllers = require('../controllers/programControllers');
const batchControllers = require('../controllers/batchControllers');
const CourseControllers = require('../controllers/courseControllers');
const QuizControllers = require('../controllers/quizControllers')


//middlewares
const ErrMiddleware = require('../middlewares/errMiddleware');

//Passport To Authenticate
const passportService = require('../services/passport');
const passport = require('passport');
const requireLogin = passport.authenticate('local', { session: false })


function routes(app) {

    //create Admin
    app.post('/api/createAdmin', authentication.createAdmin);
    app.use(ErrMiddleware);

    //Admin authentication when login
    app.post('/api/adminLogin', requireLogin, authentication.authenticateAdmin);

    //API's for Program
    app.post('/api/addProgram', programControllers.addProgram);
    app.use(ErrMiddleware);
    app.delete('/api/deleteProgram/:id', programControllers.deleteProgram);
    app.use(ErrMiddleware);

    //API's for Batches
    app.get('/api/getAllPrograms', batchControllers.getAllPrograms);
    app.use(ErrMiddleware);
    app.post('/api/addBatch', batchControllers.addBatch);
    app.use(ErrMiddleware);

    //API's for courses
    app.get('/api/getAllBatches', CourseControllers.getAllBatches);
    app.use(ErrMiddleware);
    app.post('/api/addCourse', CourseControllers.addCourse);
    app.use(ErrMiddleware);

    //API's for Quizes
    app.get("/api/getAllCourses", QuizControllers.getAllCourses);
    app.use(ErrMiddleware);
    app.post('/api/makeQuiz', QuizControllers.makeQuiz);
    app.use(ErrMiddleware);

}

module.exports = routes