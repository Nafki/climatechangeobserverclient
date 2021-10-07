import React, { Component} from 'react';

type worldClimateData={
    temperature: number,
    precipitation: number,
    image: string,
    location: string
}
type StateType={
        temperature: 0,
        precipitation: 0,
        image: '',
        location: 0

    }
    

export default class WorldClimate extends Component <{}, StateType>{
    constructor(props: any){
    super(props)
    this.state = {
        temperature: 0,
        precipitation: 0,
        image: '',
        location: 0
    
    }
}
    componentDidMount(){
        const location = navigator.geolocation.getCurrentPosition(this.worldClimateData)
    }
    worldClimateData = (pos: any) => {
        console.log('current', pos)
        let crd = pos.coords;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=79161887469fcc530c9dfbad7392edb7&units=imperial`)
        .then((response)=>{
            if(!response.ok){
            throw Error("error fetching weather")
            }
            return response.json()
         })
         .then((data)=>{
            console.log("worldData", data)
           // this.setState({worldClimateData: data.main})
         })
         .catch(error=>{
            throw Error(error.message)
         })
    }

    render(){
       // console.log('worldClimate', this.state.worldClimateData)
       // console.log('render', this.state.worldClimateData)
        // if(this.state.worldClimateData.length === 0) {
        //     return(<div>loading</div>)
        // }
        return(
            <>
        <h3>World API Data</h3>         
            </>
        // <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        // {this.state.worldClimateData.map((result: any) =>  <Grid item xs={4}> <ClimateChangeDisplay token={this.props.token} myClimateData={result} 
        //     /></Grid>)}

 
        //     </Grid>
          
            

         
        )
    }



}