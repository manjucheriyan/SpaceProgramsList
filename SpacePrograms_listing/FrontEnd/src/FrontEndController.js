import axios from 'axios';
const baseUrl = "http://localhost:4000";

class FrontEndController{

 
    static getAllProgramsByYear(launchYear){ 
        //console.log("FrontEndController - getAllProgramsByYear");
        return axios.post(baseUrl+"/programs/getAllProgramsByYear",{
            launchYear
        }, { withCredentials:true })
    }


    static getAllProgramsByLaunch(successfulLaunch){ 
        //alert("FrontEndController - getAllProgramsByLaunch");
        return axios.post(baseUrl+"/programs/getAllProgramsByLaunch",{
            successfulLaunch
        }, { withCredentials:true })
    }

    
    static getAllProgramsByLand(successfulLanding){ 
       // alert("FrontEndController - getAllProgramsByLand");
        return axios.post(baseUrl+"/programs/getAllProgramsByLand",{
            successfulLanding
        }, { withCredentials:true })
    }
    
    
    
}

export default FrontEndController;