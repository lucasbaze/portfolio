import React from 'react';

const PostHeaderImg = ({ img }) => {

    const styles = {
        backgroundImage: `url(${img})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <div id="header-img" style={styles} />
    )
}

export default PostHeaderImg;