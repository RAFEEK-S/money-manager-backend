
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const moneySchema = new Schema({
    topic:{type:String, required:true},
    categories:{type:String, required:true},
    division:{type:String, required:true},
    date:{type:Date, required:true},
    
},{
    timestamps:true,
})

const Money = mongoose.model('Money' , moneySchema);
 
module.exports = Money;
