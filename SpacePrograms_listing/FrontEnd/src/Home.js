
import React from 'react';
import swal from 'sweetalert';
import FrontEndController from './FrontEndController';
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
        year:"2006",
        programsArray:[],
        successfulLaunch:"true" ,
        successfulLanding:"true"


        
    }

    this.handleChange = this.handleChange.bind(this);
    this.onYearClick = this.onYearClick.bind(this);
    this.onLaunchClick = this.onLaunchClick.bind(this);
    this.onLandClick = this.onLandClick.bind(this);
    
  }
 
 

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({ [name]: value })
    if(name=="year"){
        
        this.onYearClick() 
    }
    //alert(name+value)
    if(name=="successfulLaunch"){
       
        this.onLaunchClick() 
    }
    if(name=="successfulLanding"){
       
        this.onLandClick() 
    }
  }


  onYearClick(){
    
    let year=this.state.year;
    let programsArray=[]
    FrontEndController.getAllProgramsByYear(year)
              .then(response=>{                  
                  this.setState({programsArray:response.data.programsArray});
                  //this.props.parentCallback(productsArray); 
              })
              .catch(error=>{
                  console.log(error)
                  alert("Program Search failed","Failed to retrieve product Details","error");
              })
        //this.setState({selectValue:year});
       


  }


  onLaunchClick(){
    
    //alert(this.state.successfulLaunch)
    let successfulLaunch=this.state.successfulLaunch;
    let programsArray=[]
    FrontEndController.getAllProgramsByLaunch(successfulLaunch)
              .then(response=>{                  
                  this.setState({programsArray:response.data.programsArray});
                  //this.props.parentCallback(productsArray); 
              })
              .catch(error=>{
                  console.log(error)
                  alert("Program Search failed","Failed to retrieve product Details","error");
              })
        //this.setState({selectValue:year});
       


  }
  onLandClick(){
    
    //alert(this.state.successfulLanding)
    let successfulLanding=this.state.successfulLanding;
    let programsArray=[]
    FrontEndController.getAllProgramsByLand(successfulLanding)
              .then(response=>{                  
                  this.setState({programsArray:response.data.programsArray});
                  //this.props.parentCallback(productsArray); 
              })
              .catch(error=>{
                  console.log(error)
                  alert("Program Search failed","Failed to retrieve product Details","error");
              })
        //this.setState({selectValue:year});
       


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
    <button name="year" class="btn btn-success"  id="           "  value="2006"  onClick={this.handleChange}>2006</button>
    <button name="year" class="btn btn-success"  id="col2button1"  value="2007"  onClick={this.handleChange}>2007</button><br/>
    <button name="year" class="btn btn-success"  id="           "  value="2008"  onClick={this.handleChange}>2008</button>
    <button name="year" class="btn btn-success"  id="col2button2"  value="2009"  onClick={this.handleChange}>2009</button><br/>
    <button name="year" class="btn btn-success"  id="            "  value="2010"  onClick={this.handleChange}>2010</button>
    <button name="year" class="btn btn-success"  id="col2button3"  value="2011"  onClick={this.handleChange}>2011</button><br/>
    <button name="year" class="btn btn-success"  id="          "   value="2012"  onClick={this.handleChange}>2012</button>
    <button name="year" class="btn btn-success"  id="col2button4"  value="2013"  onClick={this.handleChange}>2013</button><br/>
    <button name="year" class="btn btn-success"  id="          "   value="2014"  onClick={this.handleChange}>2014</button>
    <button name="year" class="btn btn-success"  id="col2button5"   value="2015"  onClick={this.handleChange}>2015</button><br/>
    <button name="year" class="btn btn-success"  id="            "  value="2016"  onClick={this.handleChange}>2016</button>
    <button name="year"  class="btn btn-success" id="col2button6"  value="2017"  onClick={this.handleChange}>2017</button><br/>
    <button name="year" class="btn btn-success"  id="           "  value="2018"  onClick={this.handleChange}>2018</button>
    <button name="year" class="btn btn-success"  id="col2button7"   value="2019"  onClick={this.handleChange}>2019</button><br/>
  
    </div>

        <div>
   
    </div>

    <div>
        <h5><b>Successful Launch</b></h5>
        <hr ></hr>
        <button name="successfulLaunch" class="btn btn-success" value="true"  onClick={this.handleChange}>True</button>
    <button name="successfulLaunch" class="btn btn-success" value="false" id="col2button8" onClick={this.handleChange}>False</button><br/>
   

        </div>
        <div>
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
this.state.programsArray.map(program=>
     <Grid item xl={3}>
        <ProgramstylingController1  programName={program.programName}  missionIds={program.missionIds} 
          launchYear={program.launchYear}  successfulLaunch={program.successfulLaunch} 
          successfulLanding={program.successfulLanding} imagePath={program.imagePath}/>                
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
