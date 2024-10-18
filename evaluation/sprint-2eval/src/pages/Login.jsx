import {Navigate} from 'react-router-dom';

function login({children}){
    const {user} = useState();
    return user ? children : <Navigate to = "/Login"/>;
}

export default login;