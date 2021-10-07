import React from "react";
import axios from 'axios';
import {Grid, TextField,Button} from '@mui/material';

type imageType={
    raw: string,
    preview: string
}


type StateType = {
    image: imageType,
  
}

export default class ClimateImage extends React.Component<{}, StateType> {
    constructor(props: any){
        super(props)
        this.state = {
                image: {
                    raw: '',
                    preview: ''
                },
               
            }
        }
        
        handleChange = (event: any)=> {
            event.preventDefault();
            //const data = new FormData(event.currentTarget); 
            if (event.target.files.length) {
            this.setState({
                image: {

                    preview: URL.createObjectURL(event.target.files[0]),
                    raw: event.target.files[0]
                }
            });
            }
            // let file = files[0]
            // console.log((file));
            // formData.append('files[]', file)
            
            // req.open("POST", 'http://localhost:3000/images');
            // req.setRequestHeader('Content-Type', 'image/*');
            // req.setRequestHeader('Accept', 'image/*');
            // req.send(formData);
            // });

        } 
        handleUpload = async (event: any) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append("image", this.state.image.raw);

            await fetch("https://en.dailypakistan.com.pk/digital_images/large/2021-06-11/budget-2021-22-pakistan-allocates-handsome-funds-to-wrestle-with-climate-change-1623427915-2388.jpg", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
            });
        };
        
        render(){
              return (
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    name="image"
                    type="file"
                    onChange={this.handleChange}
                />
            
                <Button onClick={this.handleUpload}>Upload</Button>
                </Grid>

      
       
      );
  }
 
}