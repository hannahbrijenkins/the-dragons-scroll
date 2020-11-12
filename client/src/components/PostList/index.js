import React from 'react';

const PostList = ({ posts, title }) => {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>
    }

    return (
        <div>
            <h3>{title}</h3>
            {posts &&
                posts.map(post => (
                    <div key={posts._id}>
                        <p>
                            {posts.username}
                            posted on {posts.createdAt}
                        </p>
                        <div>
                            <p>{posts.postText}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PostList