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
            <div class="card-panel grey lighten-3">
                <h4>Sign Up</h4>
                <div>
                    <form>
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
                </div>
            </div>
        </main>
    );
};

export default Signup;