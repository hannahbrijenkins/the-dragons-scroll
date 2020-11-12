import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../utils/queries';
import PostList from '../components/PostList'

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_POSTS);

const posts = data?.posts || [];
console.log(posts);

    return (
        <main>
            <div>
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