import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    const [login, { error }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const { data } = await login({
                variables: { ...formState }
            });
            Auth.login(data.login.token);
            console.log(data); 
            }   catch (e) {
                console.error(e);
            }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main>
            <div  class="card-panel grey lighten-3">
                <h4 class="crimson">Login</h4>
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <input
                        class ="crimson"
                            placeholder='Your email'
                            name='email'
                            type='email'
                            id='email'
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <input
                        class ="crimson"
                            placeholder='Password'
                            name='password'
                            type='password'
                            id='password'
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <button type="submit" class ="crimson btn grey darken-3">
                            Login
                        </button>
                    </form>
                    {error && <div>Oops! There was an error, please make sure you are inputing accurate credentials.</div>}
                </div>
            </div>
        </main>
    );
};

export default Login;