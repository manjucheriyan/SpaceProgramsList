const {Program}= require("../models/programModel");

function createNewProgram(programName,missionIds,launchYear,successfulLaunch,successfulLanding,imagePath){
    console.log("productServices - createNew");
    return Program.findOne({
        programName
    })
    .then (program=>{
        if(program){
            return{
                statusCode:400,
                message:"program already exists"
            }
        }
        const newProgram= new Program({
            programName,
            missionIds,
            launchYear,
            successfulLaunch,
            successfulLanding,
            imagePath
        });
        newProgram.save();

        return {
            statusCode:200,
            message:"Product created successfully"
        }
    })
}

function getAllProgramsByYear(launchYear){
    return Program.find({"launchYear":launchYear}) 
    .then (programsArray=>{
            return{
                statusCode:200,
                programsArray:programsArray
            }
    })
}

function getAllProgramsByLaunch(successfulLaunch){
    console.log("service Launch");
    return Program.find({"successfulLaunch":successfulLaunch}) 
    .then (programsArray=>{
            return{
                statusCode:200,
                programsArray:programsArray
            }
    })
}
function getAllProgramsByLand(successfulLanding){
    console.log("service Land");
    return Program.find({"successfulLanding":successfulLanding}) 
    .then (programsArray=>{
            return{
                statusCode:200,
                programsArray:programsArray
            }
    })
}





module.exports={
    createNewProgram:createNewProgram,
    getAllProgramsByYear:getAllProgramsByYear,
    getAllProgramsByLaunch:getAllProgramsByLaunch,
    getAllProgramsByLand:getAllProgramsByLand
    }