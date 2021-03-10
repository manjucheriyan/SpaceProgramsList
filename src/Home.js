
import React from 'react';
//import swal from 'sweetalert';
//import FrontEndController from './FrontEndController';
import ProgramstylingController1 from './ProgramstylingController1';

import { withRouter } from 'react-router';
import {Formik,Form,Field} from 'formik';
import *as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import './Home.css';


const RegisterSchema=Yup.object().shape({
               /* firstname:Yup.string()
                                .min(2,'Tooo  short')
                                .max(10,'Too long')
                                .required('Required'),
                    lastname:Yup.string()
                                    .min(2,'Too short')
                                    .max(10,'Too long')
                                    .required('Required'),
                    email:Yup.string()
                                    .required('Required'),*/
})

class Home extends React.Component {
    
constructor() {
    super();
    this.state={
        year:"",
        programsArray:[],
        successfulLaunch:"",
        successfulLanding:"",
        completePrograms:[],
        displayedPrograms:[],
    }

    this.handleChange = this.handleChange.bind(this);
    
  }


  
    getValidPrograms() {
      let year=this.state.year;
      let successFullLaunch=this.state.successfulLaunch;
      let successfulLanding=this.state.successfulLanding;

      let appendContent="";

      if(year!=""){
        appendContent =appendContent+"&launch_year="+year;
      }
      if(successFullLaunch!=""){
        appendContent =appendContent+"&launch_success="+successFullLaunch;
      }
      if(successfulLanding!=""){
        appendContent =appendContent+"&land_success="+successfulLanding;
      }

      let apiUrl="https://api.spaceXdata.com/v3/launches?limit=100";
      let finalUrl = apiUrl + appendContent;
      //alert(finalUrl)
      fetch(finalUrl)
          .then(res => res.json())
          .then(
            (result) => {
              //this.setState({completePrograms:result});
              this.setState({displayedPrograms:result});
            // alert(result[1].rocket.first_stage.cores[0].land_success);
             // alert("launch Success:::"+result[0].launch_success)
             //alert(this.state.displayedPrograms[0].mission_name);
              //alert(this.state.displayedPrograms[0].mission_id[0]);
             
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error);
            }
          )
      }

 
  componentDidMount() {   
    this.getValidPrograms();
  } 
  

  handleChange(e) {
   
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({ [name]: value }, () => {
      this.getValidPrograms();
  });

}

    render() {
        return (
            
            <div className="container">
            <h2 ><b>SpaceX Launch Programs</b></h2><br/>
    <div className="row">
   
    <div className="col-sm-3">
    <Formik
        initialValues={{
            year:"",
            successfulLaunch:"",
            successfulLanding:""
        }}
        >

                       
        <Form>
        
        <div className="form-group">
        <h3><strong>Filters</strong></h3>
        
        <h5><b>Launch Year</b></h5>
        <hr ></hr>
    <div  >
    <button name="year" class="btn btn-success"  id="col1button1"  value="2006"  onClick={this.handleChange}>2006</button>
    <button name="year" class="btn btn-success"  id="col2button1"  value="2007"  onClick={this.handleChange}>2007</button><br/>
    <button name="year" class="btn btn-success"  id="col1button2"  value="2008"  onClick={this.handleChange}>2008</button>
    <button name="year" class="btn btn-success"  id="col2button2"  value="2009"  onClick={this.handleChange}>2009</button><br/>
    <button name="year" class="btn btn-success"  id="col1button3"  value="2010"  onClick={this.handleChange}>2010</button>
    <button name="year" class="btn btn-success"  id="col2button3"  value="2011"  onClick={this.handleChange}>2011</button><br/>
    <button name="year" class="btn btn-success"  id="col1button4"   value="2012"  onClick={this.handleChange}>2012</button>
    <button name="year" class="btn btn-success"  id="col2button4"  value="2013"  onClick={this.handleChange}>2013</button><br/>
    <button name="year" class="btn btn-success"  id="col1button5"   value="2014"  onClick={this.handleChange}>2014</button>
    <button name="year" class="btn btn-success"  id="col2button5"   value="2015"  onClick={this.handleChange}>2015</button><br/>
    <button name="year" class="btn btn-success"  id="col1button6"  value="2016"  onClick={this.handleChange}>2016</button>
    <button name="year"  class="btn btn-success" id="col2button6"  value="2017"  onClick={this.handleChange}>2017</button><br/>
    <button name="year" class="btn btn-success"  id="col1button7"  value="2018"  onClick={this.handleChange}>2018</button>
    <button name="year" class="btn btn-success"  id="col2button7"   value="2019"  onClick={this.handleChange}>2019</button><br/>
  
    
        <h5><b>Successful Launch</b></h5>
        <hr ></hr>
        <button name="successfulLaunch" class="btn btn-success" value="true"  onClick={this.handleChange}>True</button>
        <button name="successfulLaunch" class="btn btn-success" value="false" id="col2button8" onClick={this.handleChange}>False</button><br/>
   

        <h5><b>Successful Landing</b></h5>
        <hr ></hr>
        <button name="successfulLanding" class="btn btn-success" value="true"  onClick={this.handleChange}>True</button>
        <button name="successfulLanding" class="btn btn-success" value="false" id="col2button9" onClick={this.handleChange}>False</button><br/>
   

        </div>
                                    
                                </div>



                           
                     </Form>
                  
                    </Formik>
                        

    </div>


                                   
    <div className="col-sm-8"> 

<Grid container id="grid-container">
{
this.state.displayedPrograms.map(program=>
  
     <Grid item xl={3}>
        <ProgramstylingController1  programName={program.mission_name}  missionIds={program.mission_id[0]} 
          launchYear={program.launch_year}   
          successfulLanding={""+program.rocket.first_stage.cores[0].land_success} 
          flightnumber={program.flight_number}
          successfulLaunch={""+program.launch_success} imagePath={program.links.mission_patch_small}/>                
          </Grid>      
)
}  
</Grid>
</div>
     
                               
                               
               </div>
                </div>
    
            
        );
    }
}export default withRouter(Home) ;
