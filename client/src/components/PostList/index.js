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
                    <div key={thought._id}>
                        <p>
                            {post.username}
                            posted on {post.createdAt}
                        </p>
                        <div>
                            <p>{post.postText}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PostList