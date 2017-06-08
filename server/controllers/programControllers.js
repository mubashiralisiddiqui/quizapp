//Models
const Programs = require('../models/programs');

module.exports = {

    addProgram(req, res, next) {
        Programs.create(req.body)
            .then(() => { res.send({ success: true }) })
            .catch(next)
    },

    deleteProgram(req, res, next) {
        Programs.remove({ _id: req.params.id })
            .then((delPrg) => {
                res.send({ success: true })
            })
            .catch(next)
    }
}