var express = require('express');
var router = express.Router();
var programServices = require('../services/programServices');


function authMiddleware(req,res,next){
  console.log("Inside authMiddleware");
  if(req.session.currentUser){
    next();
  }
  else{    
    res.staus(401).send({message:"Please login"});
  }
}
/* GET users listing. */

router.post('/createNewProgram',function(req,res){
  console.log("programRouter - createProgram"); 

 let programName=req.body.programName;
 let missionIds=req.body.missionIds;
 let launchYear=req.body.launchYear;
 let successfulLaunch=req.body.successfulLaunch;
 let successfulLanding=req.body.successfulLanding;

 let imagePath=req.body.imagePath;
 //let image=req.body.image;
        programServices.createNewProgram(programName,missionIds,launchYear,successfulLaunch,successfulLanding,imagePath)
  .then(data=>{
    res.status(data.statusCode).send({message:data.message});
  }) 
})

router.post('/getAllProgramsByYear', function(req, res) {
  console.log("programRouter - getAllProgramsByYear2"); 
  let launchYear=req.body.launchYear;
  console.log(launchYear) 
  programServices.getAllProgramsByYear(launchYear)  
  .then(data=>{
    console.log(data.programsArray) 
    res.status(data.statusCode).send({
      message:data.message,
      programsArray:data.programsArray,
     
    });
  });
});


router.post('/getAllProgramsByLaunch', function(req, res) {
  console.log("programRouter - getAllProgramsByLaunch"); 
  let successfulLaunch=req.body.successfulLaunch;
  console.log(successfulLaunch) 
  programServices.getAllProgramsByLaunch(successfulLaunch)  
  .then(data=>{
    console.log(data.programsArray) 
    res.status(data.statusCode).send({
      message:data.message,
      programsArray:data.programsArray,
      
    });
  });
});

router.post('/getAllProgramsByLand', function(req, res) {
  console.log("programRouter - getAllProgramsByLand"); 
  let successfulLanding=req.body.successfulLanding;
  console.log(successfulLanding) 
  programServices.getAllProgramsByLand(successfulLanding)  
  .then(data=>{
    console.log(data.programsArray) 
    res.status(data.statusCode).send({
      message:data.message,
      programsArray:data.programsArray,
      
    });
  });
});



module.exports = router;