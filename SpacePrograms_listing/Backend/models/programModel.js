const mongoose=require('mongoose');

const Program = mongoose.model('Program',{
    programName:String,
    missionIds:String,
    launchYear:Number,
    successfulLaunch:String,
    successfulLanding:String,
    imagePath:String
})

module.exports ={
    Program
}

