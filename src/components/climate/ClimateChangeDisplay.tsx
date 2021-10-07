import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { AvatarGroup, Input, TextField}  from '@mui/material';
import IconButton  from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, blueGrey, deepOrange, lightBlue, orange, red } from '@mui/material/colors';
//import { PropertyAccessEntityNameExpression } from 'typescript';
import {Favorite, Share,MoreVert, Edit} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link} from "react-router-dom";
import Comment from '../climate/Comment';

type StateTypes={
  weatherTitle: string,
  weatherDate: string,
  commentDescription: string,
  imageUrlList?: any
}
type PropsTypes = {
    myClimateData: any,
    token: string
    history: any
}
export default class ClimateChangeDisplay extends React.Component<PropsTypes, StateTypes> {

    constructor(props: any){
        super(props)
        this.state = {
          //climate_id: number,
          weatherTitle: '',
          weatherDate: '',
          commentDescription: '',
          imageUrlList: ['https://api.time.com/wp-content/uploads/2021/02/nasa-climate-reporting.jpg','https://chinadialogueocean.net/wp-content/uploads/2020/09/china-dialogue-ocean-melting-ice-caps-polar-bears-1440x720.jpg','https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_25/3486071/210623-california-wildfire-firefighters-an.jpg',
          'https://climate.nasa.gov/system/internal_resources/details/original/103_shutterstock_88550854-740px.jpg','https://media.premiumtimesng.com/wp-content/files/2018/10/Global-Warming.jpg']
        }
    }
    componentDidMount(){
      console.log('ondislay', this.props.myClimateData)
      this.setState({weatherTitle: "Weather in " + this.props.myClimateData.location})
      this.setState({weatherDate: new Intl.DateTimeFormat('en-US').format(new Date (this.props.myClimateData.updatedAt))
      })
     this.getCommentDataById(this.props.myClimateData.id)
    }
      getCommentDataById= async (climate_id: number)=>{
        await fetch(`http://localhost:3000/comment/${climate_id}`,{
             method: "GET",
             headers: {
             "Content-Type": "application/json",
             'Authorization': "Bearer " + this.props.token
             },
             
         })
         .then(response => response.json())
         .then(data => {
             console.log('getcomment', data)
             //this.setState({...data[0]})
             this.setState({commentDescription: data[0].description})
         })
         .catch(err => {
         console.error(err)
         })
     
    
    }
    deleteClimate =(id:number) =>{
     
      fetch('http://localhost:3000/climate/'+ id,{
          method: "Delete",
          headers: {
          "Content-Type": "application/json",
          'Authorization':"Bearer " + this.props.token 
          }
      })
      .then(response => response.json())
      .then(data => {
          console.log('deleteData', data)
        
          this.props.history.push('/worldclimate')
          alert("A record succesfully deleted")
          this.props.history.push('/')
        
      })
      .catch(err => {
       
        this.props.history.push('/worldclimate')
        alert("A record succesfully deleted")
        this.props.history.push('/')
      console.error(err)
      })
      
    }

    render(){
        return (
            <Card sx={{ maxWidth: 320, marginTop: 2, marginLeft: 2}}>
            <CardHeader
              // avatar={
              //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              //     78&deg;F
              //   </Avatar>
              // }
              action={
                <IconButton aria-label="settings">
                  <MoreVert /> 
                </IconButton>
              }
              title={this.state.weatherTitle}
              subheader={this.state.weatherDate}
            />
            <CardContent sx = {{display: 'flex', flex:1}}>
              <Typography sx={{flex:1}} variant = "body2" color="text.secondary">
              <AvatarGroup max={1} sx={{justifyContent:"center",alignItems:"flex-end"}}>
              <Avatar sx={{ bgcolor: deepOrange[500]}} aria-label="Temp">
                {this.props.myClimateData.temperature}&deg;<sub>F</sub>
              </Avatar>
                <h6>Temperature</h6>
              </AvatarGroup>
              </Typography>
              
              <Typography sx={{flex:1}} variant = "body2" color="text.secondary">
              <AvatarGroup max={1} sx={{justifyContent:"center",alignItems:"flex-end"}}>
              <Avatar sx={{ bgcolor: blueGrey[300]}} aria-label="Temp">
              {this.props.myClimateData.precipitation}<sub>%</sub>
              </Avatar>
                <h6>Precipitation</h6>
              </AvatarGroup>
              </Typography>

              
              {/* <Typography sx={{flex:1}} variant="body2" color="text.secondary">
              Precipitation
              <div>{this.props.myClimateData.precipitation}</div>
              </Typography> */}
            
            </CardContent>
            <CardMedia
              component="img"
              height="150"
              image={this.state.imageUrlList[ Math.floor(Math.random() * 5)]}
              alt=""
            />
          
            <CardActions disableSpacing sx={{display: 'flex',justifyContent: 'space-between'}}>
              <IconButton aria-label="add to favorites">
                <Favorite /> 
              </IconButton>
              <a href="http://www.facebook.com/" target="_blank">
              <IconButton aria-label="share">
                <Share/>
              </IconButton>
              </a>
              <IconButton aria-label="delete" onClick={()=>{this.deleteClimate(this.props.myClimateData.id)}}>
                <DeleteIcon/>
              </IconButton>
              <Link to={`editclimate/${this.props.myClimateData.id}`} >
                
              <IconButton aria-label="edit ">
                <Edit/>
              </IconButton>
              </Link>
        </CardActions>
             <CardContent sx={{borderWidth:2, borderColor: 'red'}}>
                <Typography >{this.state.commentDescription}
                </Typography>
                <Comment climateId={this.props.myClimateData.id} token={this.props.token} />
              {/* <TextField>
                {/* <Typography sx={{flex:1}} variant="body2" color="text.secondary"> */}
                {/* {  }
              </TextField> */}
                </CardContent>
           
          </Card>
              
        );
    }
}