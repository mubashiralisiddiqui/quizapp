//Models
const Courses = require('../models/courses');
const Programs = require('../models/programs');
const Batches = require("../models/batches");


module.exports = {

    getAllBatches(req, res, next) {
        Batches.find()
            .then((allBatches) => { res.send(allBatches) })
            .catch(next)
    },

    addCourse(req, res, next) {

        const course = req.body.course;
        const batchName = req.body.batch_name;
        const programName = req.body.program_name;

        Batches.find({ batch: batchName }, function (err, founded) {

            founded.forEach((bat) => {
                Programs.findOne({ _id: bat.program_id }, function (err, foundedProgram) {

                    if (foundedProgram.program === programName) {
                        Courses.create({
                            course: course,
                            batch_id: bat._id,
                            program_name: programName
                        })
                            .then(() => { res.send({ success: true }) })
                            .catch(next)
                    }                    
                })
                    .catch(next)
            })
        })
            .catch(next)
    }
}
