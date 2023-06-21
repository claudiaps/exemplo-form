import { useState } from 'react';
import './LoginPage.css'
import Input from '../components/Input';

const LoginPage = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordError, setPasswordError] = useState()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        const passwordValue = event.target.value
        setPassword(passwordValue)
        if (passwordValue.length >= 6) {
            setPasswordError()
        } else {
            setPasswordError("A senha deve conter pelo menos 6 caracteres")
        }
    }

    const onSubmit = () => {
        console.log(email, password)
    }

    return (
        <div className='container'>
            <div className='formContainer'>
                <Input 
                    label="E-mail"
                    name="emailInput"
                    value={email}
                    onChange={onChangeEmail}
                />
                <Input
                    label="Senha"
                    type='password'
                    name="passwordInput"
                    value={password}
                    onChange={onChangePassword}
                    errorMessage={passwordError}
                />
                <button onClick={onSubmit}>Entrar</button>
            </div>
        </div>
    );
}

export default LoginPage;