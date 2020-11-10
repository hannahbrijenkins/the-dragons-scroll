import React, { useState } from 'react';

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
            <div>
                <h4>Login</h4>
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            placeholder='Your email'
                            name='email'
                            type='email'
                            id='email'
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <input
                            placeholder='Password'
                            name='password'
                            type='password'
                            id='password'
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <button type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;