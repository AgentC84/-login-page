import { useAppDispatch } from '../hooks/redux-hooks';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form"
import {setUser} from 'store/slices/userSlice'

interface visibleProps {
    visiblePanel: string;
}

const SignUp = ({visiblePanel}:visibleProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleRedister = (email: string, password: string) => {
        const auth = getAuth();  
        console.log(email);
        console.log(password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) =>  {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
            }))
            navigate('/');
        })
        .catch(console.error)
    }
    return (
        <div className={`form-container signup-container ${visiblePanel === 'login' && 'is-transform-left ' }`}>
            <Form 
                titleForm="Create account!"
                textButton='Register'
                handleClick={handleRedister}
            />
        </div>
    )
}

export {SignUp}