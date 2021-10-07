import * as React from 'react';
import Auth from '../src/components/auth/Auth';
import Home from './components/home/Home';
import APIURL from './helpers/environment';

type StateType = {
  sessionToken: any
}

class App extends React.Component<{}, StateType> {
  constructor(props: any){
    super(props);
    this.state={
      sessionToken: ''

    }
    this.clearToken=this.clearToken.bind(this)
  }
  componentDidMount(){
    if(localStorage.getItem("token")) {
      this.setState({sessionToken:localStorage.getItem("token")});
    }
  }
 
  updateToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    this.setState({sessionToken:newToken});
    console.log(this.state.sessionToken);
  };
  clearToken(){
    localStorage.removeItem('token');
    this.setState({sessionToken: ''})
  }

  render(){
    if(this.state.sessionToken === localStorage.getItem("token")){
      return(<Home token={this.state.sessionToken} clearToken={this.clearToken}/>)
    }else{
      return(
        <Auth updateToken ={this.updateToken} />
      )
    }
  }
}

export default App;
