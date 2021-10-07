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
import { FileUpload } from '@mui/icons-material';
import axios from 'axios';
import APIURL from '../../helpers/environment';

const theme = createTheme();

type createClimateData = {
  
    temperature: any ,
    precipitation: any,
    location: any,
    imageUrl: string,
}
type StateType = {
    createClimateData: any,
    selectedFile: any
}

type PropsType ={
    token: any,
    history: any
  }

export default class CreateClimateChange extends React.Component<PropsType, StateType>{
    constructor(props: any){
        super(props)
        this.state = {
        createClimateData: [],
        selectedFile: null
            }
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //eslint-disable-next-line no-console
        //console.log( `currentTarget --> ${newUserData.user.email} ${newUserData.user.password}`);
        console.log({
    
        temperature: data.get('temperature') ,
        precipitation: data.get('precipitation'),
        location: data.get('location') ,
        imageUrl:data.get('image') ,
        
        });
        const newData = {
        
            temperature: data.get('temperature') ,
            precipitation: data.get('precipitation'),
            location: data.get('location') ,
            imageUrl:data.get('image') ,
        }
    //console.log(this.props.updateToken)
            fetch(`${APIURL}/climate/climate`,{
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                'Authorization': "Bearer " + this.props.token
                },
                body: JSON.stringify(newData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('createData', data)
                //this.setState({ createClimateData: data})
                this.props.history.push('/')
            })
            
            .catch(err => {
            console.error(err)
            })
    }
//     onChangeHandler = (event) =>{
//     this.setState({
//          : event.target.files[0])
//     /})
//   }
//     //  fileUploadHandler = () =>{
    // axios.post('')
    //  }

    render(){
        
        return(
            <ThemeProvider theme={theme} >
            <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                Add Climate Data
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
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                    
                        fullWidth
                        id="user"
                        label="precipitation"
                        name="precipitation"
                        autoComplete="precipitation"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="location"
                        label="location"
                        type="location"
                        id="location"
                        autoComplete="new-location"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="image"
                        //label="image"
                        type="file"
                        //onChange={this.handleChange}
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
