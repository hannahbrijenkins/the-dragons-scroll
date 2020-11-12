import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../utils/queries';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import Auth from '../utils/auth'

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_POSTS);

const loggedIn = Auth.loggedIn();

const posts = data?.posts || [];
console.log(posts);

    return (
        <main>
            <div>
            {loggedIn && (
                    <div><PostForm /></div>
                )}
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <PostList class="meddon" posts={posts} />
                )}
            </div>
        </main>
    );
};

export default Dashboard;