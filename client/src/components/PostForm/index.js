import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { ADD_POST } from '../../utils/mutations'
import { QUERY_POSTS } from '../../utils/queries';

const PostForm = () => {

    const [postText, setText] = useState('');
    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost }}) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });

                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] }
                });
            } catch (e) {
                console.error(e)
            }
        }
    })

    const handleChange = event => {
        if (event.target.value); {
            setText(event.target.value);
        }
    }

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addPost({
                variables: { postText }
            });
        } catch (e) {
            console.error(e)
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <textarea  placeholder="Post your wildest adventures here!" value={postText} onChange={handleChange}>
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostForm;