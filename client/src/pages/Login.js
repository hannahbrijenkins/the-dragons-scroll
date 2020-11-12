import React, { useState } from 'react';
import 

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

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
                </div>
            </div>
        </main>
    );
};

export default Login;