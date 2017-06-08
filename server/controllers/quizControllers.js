//Model
const Quizes = require('../models/quizes');
const Courses = require('../models/courses');


module.exports = {

    getAllCourses(req, res, next) {
        Courses.find()
            .then((allCourses) => {
                res.send(allCourses)
            })
            .catch(next)
    },

    makeQuiz(req, res, next) {
        const quiz = req.body.quiz;
        const courseName = req.body.course_name;
        const mcqs = req.body.mcqs;

        Courses.findOne({ course: courseName }, function (err, founded) {

            if (founded) {
                if (founded.course === courseName) {
                    Quizes.create({
                        quiz: quiz,
                        course_id: founded._id,
                        mcqs: mcqs
                    })
                        .then(() => { res.send({ success: true }) })
                        .catch(next)
                }
            }
            else {
                res.send({ success: false })
            }
        })
            .catch(next)

    }
}

