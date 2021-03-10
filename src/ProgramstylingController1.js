
import React from "react";




function ProgramstylingController1({ programName, missionIds,launchYear,successfulLaunch,
                                    successfulLanding,imagePath,flightnumber}){
  return (<div>
    
    <div className="program__info" >

       <img src={imagePath} alt='images' 
        width="80" height="80" />
    

        
<p className="program__name"><b>{programName}{" "}
#{flightnumber}</b>  
     </p>

      <p className="missionIds">
      <b>Mission IDs:</b><p>{missionIds}</p>
      </p>

      <p className="launchYear">
      <b>LaunchYear:</b><p> {launchYear}</p>
      </p>

      <p className="successfulLaunch">
      <b>SuccessfulLaunch:</b><p> {successfulLaunch}
    </p>
      </p>
      

      <p className="successfulLanding">
      <b>SuccessfulLand:</b><p>{successfulLanding}</p>
      </p>
      
      
    </div>
  
   
  
  
  </div>
  );
}

export default ProgramstylingController1;

