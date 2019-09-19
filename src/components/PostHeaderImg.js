import React from 'react'

const PostHeaderImg = ({ img }) => {
  const styles = {
    backgroundImage: `url(${img})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
  }

  return <div id="header-img" style={styles} />
}

export default PostHeaderImg
