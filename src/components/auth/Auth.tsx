import React, {Component} from 'react'
import Box from '@mui/material/Box';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { PropTypes } from '@mui/material';

type PropTypes={
updateToken: any
}
export default class Auth extends Component<PropTypes, {}>{
    constructor(props: any){
        super(props)
    }
    render(){
        return(
            <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Box sx={{ flex: 1, bgcolor: 'grey.300' }}><SignUp updateToken ={this.props.updateToken}/></Box>
        <Box sx={{ flex: 1, bgcolor: 'grey.300' }}><SignIn updateToken ={this.props.updateToken}/></Box>
       
      </Box>
      </div>
        )
    }
}