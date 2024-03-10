
const { REACT_APP_API_URL} = process.env;
export const API_BASE_URL = REACT_APP_API_URL || 'http://localhost:5000';
export const LIVE_BASE_URL = REACT_APP_API_URL ? REACT_APP_API_URL?.indexOf('stage') > 0 ? 'https://stage-masher.thisismash.com' : 'https://masher.thisismash.com' : 'https://stage-masher.thisismash.com';
export const ADMIN_BASE_URL = REACT_APP_API_URL ? REACT_APP_API_URL?.indexOf('stage') > 0 ? 'https://stage-team.thisismash.com' : 'https://team.thisismash.com' : 'https://stage-team.thisismash.com';
