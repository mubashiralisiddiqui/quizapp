const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const McqsSchema = new Schema({

    question: {
        type: String
    },
    options: {
        type: Array,
        default: []
    },
    answers: {
        type: Array,
        default: []
    }
})

const QuizesSchema = new Schema({

    quiz: {
        type: String,
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    mcqs: [McqsSchema]
})

const Quizes = mongoose.model('quizes', QuizesSchema)
module.exports = Quizes;



// {
//      "quiz": "quiz#1",
//      "course_name": "DCCN",
//      "mcqs": [
//      	{
//          "question": "what is topology?", 
//          "options": ["LAN", "the way in which constituent parts are interrelated or arranged", "the topology of a computer network", "WAN"], 
//          "answers": ["the way in which constituent parts are interrelated or arranged", "the topology of a computer network"]
//          },
       
//         {
//          "question": "what is topology?", 
//          "options": ["LAN", "the way in which constituent parts are interrelated or arranged", "the topology of a computer network", "WAN"], 
//          "answers": ["the way in which constituent parts are interrelated or arranged", "the topology of a computer network"]	
//         },
//          {
//          "question": "what is topology?", 
//          "options": ["LAN", "the way in which constituent parts are interrelated or arranged", "the topology of a computer network", "WAN"], 
//          "answers": ["the way in which constituent parts are interrelated or arranged", "the topology of a computer network"]	
//         }
//          ]
// }