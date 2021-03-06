import React,{Component} from 'react';
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
import APIURL from '../../helpers/environment';
const theme = createTheme();
type PropsType ={
  updateToken: any
}
 export default class SignUp extends Component<PropsType, {}>{
     constructor(props: any){
     super(props)
         this.state = {
            username: '',
            email: '',
            password:''
         }
    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            //eslint-disable-next-line no-console
            //console.log( `currentTarget --> ${newUserData.user.email} ${newUserData.user.password}`);
            console.log({
            username: data.get('userName'),
            email: data.get('email'),
            password: data.get('password')
            
             });
             const newData = {
                username: data.get('userName'),
                email: data.get('email'),
                password: data.get('password')
             }
             fetch(`${APIURL}/user/register`,{
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(newData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            let token = data.sessionToken;
            //localStorage.setItem('SessionToken', token);
            this.props.updateToken(token)
                
            })
            .catch(err => {
            console.error(err)
            })

    }
    render(){
        return(
            <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon /> 
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    
                    <Grid item xs={12} sm={12}>
                      <TextField
                        fullWidth
                        id="userName"
                        label="User Name"
                        name="userName"
                        autoComplete="Uname"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I agreed to terms and conditions."
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                   
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="#" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
           
            </Container>
          </ThemeProvider>    
        )
    }
 }
 

    
    
    

        

