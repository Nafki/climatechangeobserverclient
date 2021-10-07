import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Container, Grid, Stack} from '@mui/material'
import { FormatAlignJustify } from '@mui/icons-material';



export default class Profile extends React.Component{
    constructor(props: any){
        super(props)
    }

        render(){
        return (
            <>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar variant="dense"> 
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfVaHbFzCV5yo4FBQklXKtLe6uacGUjNx8I4dEg2xDd-W9eA5NBFUKYrZQmHXH9ewz5A&usqp=CAU" />
                </Stack>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Your Profile
                </Typography>
            </Toolbar> 
            </AppBar>
            </Box>
            
             <Box marginLeft='10' marginRight='20' display='flex'
                flexDirection= 'column'
                alignItems= 'center' > 
                <Card sx={{ maxWidth: 345, justifyContent: 'center' }}  >
                <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://www.edf.org/sites/default/files/facebook_thumb/GettyImages-155141288-polar-bear-1200x630-2.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                    "This is why fighting climate change is so urgent"- Environmental Defense Fund
                </Typography>  
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                My Story
                </Button>
                </CardActions>
                <CardActions>
                <Button size="small" color="primary">
                My Contributions
                </Button>
                </CardActions>
                <CardActions>
                <Button size="small" color="primary">
                Contact
                </Button>
                </CardActions>
                </Card>
                </Box> 
                </>
        
        );
    }
}





