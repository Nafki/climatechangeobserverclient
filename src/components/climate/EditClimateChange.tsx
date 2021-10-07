import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { isTemplateLiteralTypeSpan } from 'typescript';

const theme = createTheme();

type PropsTypes = {
    token: string,
    climate_id:string,
    history: any
    
    
}
type StateTypes = {
    climate_id: number,
    temperature: string,
    precipitation: string,
    location: string
    //imageUrl: string,
}

export default class editClimateChange extends React.Component<PropsTypes, StateTypes>{
    constructor(props: any){
        super(props)
        this.state = {
                climate_id: 0,
                temperature: '' ,
                precipitation: '',
                location: ''
                //imageUrl: string,
        }
    }
    componentDidMount(){
        console.log("edit",this.props);
        
        this.getClimateDataById(this.props.climate_id)
        
    }
    getClimateDataById= async (climate_id:string)=>{
       await fetch(`http://localhost:3000/climate/${climate_id}`,{
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + this.props.token
            },
            
        })
        .then(response => response.json())
        .then(data => {
            console.log('climateData', data[0].precipitation)
            //this.setState({...data[0]})
            this.setState({ climate_id: data[0].id, temperature: data[0].temperature, precipitation: data[0].precipitation, location: data[0].location})
        })
        .catch(err => {
        console.error(err)
        })
    }
        handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            temperature: data.get('temperature'),
            precipitation: data.get('precipitation'),
            location: data.get('location')
            //imageUrl:data.get.('imageUrl')
        });
        const editedData={
            temperature: data.get('temperature'),
            precipitation: data.get('precipitation'),
            location: data.get('location')
            
        }
                fetch('http://localhost:3000/climate/'+ this.state.climate_id, {
                    method: "PUT",
                    headers: {
                    "Content-Type": "application/json",
                    'Authorization':"Bearer " + this.props.token 
                    },
                    body: JSON.stringify(editedData)
                   // body: JSON.stringify({temperature: 'temperature', precipitation: 'precipitation', location: 'location' })
                })
                .then(response => response.json())
                .then(data => {
                    console.log('editData', data)
                    this.props.history.push('/')

                    // this.setState({ editClimateData: data})
                })
                .catch(err => {
                console.error(err)
                })
             
        }
        handleChangeTemp=(event:React.ChangeEvent<HTMLInputElement>)=>{
            const {name,value}= event.currentTarget
         
                this.setState({temperature:value})
           
        }
        handleChangePerc=(event:React.ChangeEvent<HTMLInputElement>)=>{
            const {name,value}= event.currentTarget
           
         
                this.setState({precipitation:value})
           
        }
        handleChangeLoc=(event:React.ChangeEvent<HTMLInputElement>)=>{
            const {name,value}= event.currentTarget
           
                this.setState({location:value})
          
        }
        render(){
            console.log('tem', this.state)
            return(
                <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                    }}
                >
                    
                    <Typography component="h1" variant="h5">
                    Edit Climate Data
                    </Typography>
                    <Typography component="h1" variant="h6">
                     Id:{this.state.climate_id}
                    </Typography>
                    <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={6} >
                        <TextField
                            
                            fullWidth
                            id="user_id"
                            label="temperature &deg;F"
                            name="temperature"
                            autoComplete="tname"
                            onChange={this.handleChangeTemp}
                            value={this.state.temperature}
                        />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                        
                            fullWidth
                            id="user"
                            label="precipitation"
                            name="precipitation"
                            autoComplete="precipitation"
                            onChange={this.handleChangePerc}
                            value={this.state.precipitation}                       />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="location"
                            label="location"
                            type="location"
                            id="location"
                            autoComplete="new-location"
                            onChange={this.handleChangeLoc}
                            value={this.state.location}
                        />
                        </Grid>
                        
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                    Submit
                    </Button>
                    </Grid>
                    </Box>
                </Box>
                </Container>
              </ThemeProvider>    
            )
            
        }
}
