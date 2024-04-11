import { Login } from 'components/Login'
import { SignUp } from 'components/SignUp';
import SwitchPanel from 'components/SwitchPanel';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [visiblePanel, setVisiblePanel] = useState('login');
  return (
    <section className='login-page'> 
      <div className='login-page-container'>
        <Login visiblePanel={visiblePanel}/>
        <SignUp visiblePanel={visiblePanel}/>
        <SwitchPanel visiblePanel={visiblePanel} setVisiblePanel={setVisiblePanel}/>
      </div> 
    </section>
  )
}

export default LoginPage