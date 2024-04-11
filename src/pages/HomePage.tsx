import { Navigate } from "react-router-dom";
import { useAppDispatch } from '../hooks/redux-hooks';
import { useAuth } from 'hooks/use-auth';
import { removeUser } from 'store/slices/userSlice';


const HomePage = () => {
  const dispatch = useAppDispatch();
  const {isAuth, email}  = useAuth();
  return isAuth ?(
    <div className="home-page">
      <h1 className="title">Welcome {email}</h1>
      <button onClick={()=>dispatch(removeUser()) } className='button' >Log out </button>
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  )
}

export default HomePage