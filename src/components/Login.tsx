import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { Form } from "./Form"
import {setUser} from 'store/slices/userSlice'
import { useAppDispatch } from "../hooks/redux-hooks";

interface visibleProps {
    visiblePanel: string;
}

const Login = ({visiblePanel}:visibleProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();  
        console.log(auth);
        console.log(email);
        console.log(password);
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
            }))
            navigate('/');
        })
        .catch((e) => alert(e))
    }
    return (
        <div className={`form-container login-container ${visiblePanel === 'login' && 'is-transform-left is-z200' }`}>
            <Form 
                titleForm="Sign in to Website"
                textButton='Login'
                handleClick={handleLogin}
            />
        </div>
    )
}

export {Login}