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
                    <div class="card-panel blue-grey lighten-4 crimson"key={post._id}>
                        <h4>
                            {post.username} posted on {post.createdAt}
                        </h4>
                        <h5>
                            <p>{post.post}</p>
                        </h5>
                    </div>
                ))}
        </div>
    );
};

export default PostList