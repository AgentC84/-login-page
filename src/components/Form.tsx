import { useState } from "react";

interface FormProps  {
    textButton: string;
    titleForm: string;
    handleClick: (email: string, pass: string) => void;
}

const Form = ({textButton, titleForm, handleClick}: FormProps) => {
    const [email, setEmail ] = useState('');
    const [pass, setPass] = useState('');

  return (
    <div className="form">
        <h2 className="form-title title">{titleForm}</h2>
        <input 
            type="email" 
            value={email}
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <input 
            type="password"
            value={pass}
            className="input " 
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
        />
        <button
            onClick={() => handleClick(email, pass)}
            className="button "
        >
            {textButton}
        </button>

    </div>
  )
}

export {Form}