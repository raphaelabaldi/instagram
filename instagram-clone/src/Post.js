import React from 'react'
import './Post.css';
import Avatar from '@mui/material/Avatar';

function Post() {
    return (
        <div className = "post">
            <div className = "post__header">
                <Avatar
                    className = "post__avatar"
                    alt = "baldinhox"
                    src = "/static/images/avatar/1.jpg"
                />
                <h3> username </h3>
            </div>           
                      
            <img className = "post__image" src = "https://super.abril.com.br/wp-content/uploads/2017/10/porquinho.png"/>
            <h4 className = "post__text"> <strong>baldinhox</strong> Uma pessoa de poucas palavras :) </h4>
          
        </div>
    )
}

export default Post