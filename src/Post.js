import "./Post.css"
import React from 'react'
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
            {/* header -> avatar + username */}
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    src="/static/images/avatar/1.jpg" alt='youngleek'
                />
                <h3>{username}</h3>
            </div>


            {/* image */}
            <img className="post__image" src={imageUrl} alt="" />

            {/* username + caption */}
            <h4 className="post_text">
                <strong>{username}</strong> {caption}
            </h4>

        </div>
    )
}

export default Post
