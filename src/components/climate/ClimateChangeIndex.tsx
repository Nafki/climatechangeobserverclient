
import React, {Component} from 'react';
import ClimateChangeDisplay from './ClimateChangeDisplay';
import Grid from '@mui/material/Grid';
//import {Grid Item} from '@mui/material'

type climateChange = {
    user_id: any,
    temperature: any ,
    precipitation: any,
    location: any,
    //imageUrl: string,
}
type StateType = {
    climateChangeData: any
}
type PropsType ={
    token: string
    history: any
  }

export default class ClimateChangeIndex extends Component<PropsType, StateType> {
    constructor(props: any){
    super(props)
    this.state = {
            climateChangeData: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/climate/all',{
            method: "GET",
            headers: {
            "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('climateData', data)
            this.setState({climateChangeData: data})
        })
        .catch(err => {
        console.error(err)
        })
    }

    render(){
        console.log('render', this.state.climateChangeData)
        if(this.state.climateChangeData.length === 0) {
            return(<div>loading</div>)
        }
        return(

           <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
           {this.state.climateChangeData.map((result: any) =>  <Grid item xs={4}> <ClimateChangeDisplay token={this.props.token} myClimateData={result} 
            history={this.props.history}/></Grid>)}
            </Grid>
        )
    }
}
    






