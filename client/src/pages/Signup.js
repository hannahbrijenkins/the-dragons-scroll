import React, { useState } from 'react';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <main>
            <div>
                <h4>Sign Up</h4>
                <div>
                    <form>
                        <input
                        placeholder='Username'
                        name='username'
                        type='username'
                        id='username'
                        value={formState.username}
                        onChange={handleChange}
                        />
                        <input
                        placeholder='Email'
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
                        <button type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Signup;