let APIURL ='';

switch (window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL ="http://localhost:3001";
        break;
        case 'https://climatechangeobserver.herokuapp.com':
            APIURL = 'https://climatechangeobserver.herokuapp.com'
}

export default APIURL;