
import React from "react";




function ProgramstylingController1({ programName, missionIds,launchYear,successfulLaunch,
                                   successfulLanding,imagePath}){
  return (<div>
    
    <div className="program__info" >

      <p className="program__name">
     <h6 ><strong > {programName}</strong></h6>
     </p>
     <img src={imagePath} alt='images' 
        width="50" height="50" />


      <p className="missionIds">
      <b>Mission IDs:</b><p>{missionIds}</p>
      </p>

      <p className="launchYear">
      <b>LaunchYear:</b><p> {launchYear}</p>
      </p>

      <p className="successfulLaunch">
      <b>SuccessfulLaunch:</b><p> {successfulLaunch}</p>
      </p>
      

      <p className="successfulLanding">
      <b>SuccessfulLand:</b><p>{successfulLanding}</p>
      </p>
      
      
    </div>
  
   
  
  
  </div>
  );
}

export default ProgramstylingController1;

