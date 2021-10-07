 import React, {Component} from 'react';
 import NavBar from './NavBar';
 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClimateChangeIndex from '../climate/ClimateChangeIndex';
import Profile from '../auth/Profile';
import ClimateChangeDisplay from '../climate/ClimateChangeDisplay';
import CreateClimateChange from '../climate/CreateClimateChange';
import EditClimateChange from '../climate/EditClimateChange';
import WorldClimate from '../climate/WorldClimate';

type PropTypes={
  token: string
  clearToken: ()=> void
}

export default class Home extends Component<PropTypes, {}>{
    constructor(props: any){
        super(props)
    }
    render(){
        return(
            
        <React.Fragment  >
            <div style = {{ backgroundColor: 'rgb(215, 228, 241)'}}>
                
        <Router> 
        <NavBar logout={this.props.clearToken} />
            <Switch>
                    <Route exact path="/worldclimate"><WorldClimate/></Route> 
                    <Route exact path="/climatechange"  render={(props)=> <ClimateChangeIndex token={this.props.token} history={props.history}/>}/>
                    <Route exact path="/addclimate"  render={(props)=> <CreateClimateChange token={this.props.token} history={props.history}/>}/>
                    <Route exact path="/editclimate/:climateId" render={(props)=><EditClimateChange climate_id= {props.match.params.climateId} 
                    history={props.history} token={this.props.token}/>}/>  
                    <Route exact path="/profile" > <Profile /></Route> 
               
                    <Route exact path="/"  render={(props)=> <ClimateChangeIndex token={this.props.token} history={props.history}/>}/>

                    
                    {/* <Route exact path="/climatechange" component={ ClimateChangeIndex } /> 
                    <Route exact path="/addclimate" component={ CreateClimateChange } />
                    <Route exact path="/profile" component={ Profile} />
                    <Route exact path="/" component={ ClimateChangeIndex } />
                     */}
                    
            </Switch>
        </Router>
        </div>
        </React.Fragment>
        )
    }
}
