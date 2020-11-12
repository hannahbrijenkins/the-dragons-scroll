import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    

    try {
        const { data } = await addUser({
            variables: { ...formState }
        });
        console.log(data);
        Auth.login(data.addUser.token)
    } catch (e) {
        console.error(e);
    }
};

    return (
        <main>
            <div class="card-panel grey lighten-3">
                <h4>Sign Up</h4>
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <input
                        class ="crimson"
                        placeholder='Username'
                        name='username'
                        id='username'
                        value={formState.username}
                        onChange={handleChange}
                        />
                        <input
                        class ="crimson"
                        placeholder='Email'
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
                        <button type='submit' class ="crimson btn grey darken-3">
                            Submit
                        </button>
                    </form>
                    {error && <div>Oops! There was an error, please make sure you are inputing accurate information.</div>}
                </div>
            </div>
        </main>
    );
};

export default Signup;