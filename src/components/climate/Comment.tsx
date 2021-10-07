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
import {Fab} from '@mui/material'
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Description } from '@mui/icons-material';

const theme = createTheme();

type StateType = {
    description?: string
}

type PropsType ={
    climateId: number,
    token: any
    // history: any
  }

export default class CreateComment extends React.Component<PropsType, StateType>{
    constructor(props: PropsType){
        super(props)
        this.state={
            description: ''
        }
    
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //eslint-disable-next-line no-console
        //console.log( `currentTarget --> ${newUserData.user.email} ${newUserData.user.password}`);
        console.log({
        description: data.get('description') ,
        });
        const newData = {
            climate_id: this.props.climateId,
            description: data.get('description') ,
            
        }

            fetch('http://localhost:3000/comment', {
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
                this.setState({ description: data.comment.description})
               // this.props.history.push('/')
            })
            
            .catch(err => {
            console.error(err)
            })
    }

    render(){
      
        return(
            <ThemeProvider theme={theme} >
            <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
                sx={{
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                {this.state.description}
                <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={12} >
                    <TextField
                        
                        fullWidth
                        label="comment"
                        name="description"
                        // onChange={this.handleChangeDescription}
                        // value={this.state.description}
                    />
                    </Grid>
                    <Button
                        type="submit"
                        size="small"
                        variant="contained"
                        sx={{ mt: 1, mb: 0 }}
                    >
                    <AddCommentIcon />

                    </Button>
                </Grid>
                </Box>
            </Box>
            </Container>
          </ThemeProvider>    
        )
        
    }

}
            
