const DEBUG = false
let REST_API_URL = ''

DEBUG === true ? REST_API_URL = 'http://localhost:8000/api' : 'https://velorian.herokuapp.com/api';

export {
    REST_API_URL
}

