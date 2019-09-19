import React from 'react';

const PostHeaderImg = ({ img }) => {

    const styles = {
        backgroundImage: `url(${img})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'right 10%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    }

    return (
        <div id="header-img" style={styles} />
    )
}

export default PostHeaderImg;
