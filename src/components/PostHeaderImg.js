import React from 'react'

const PostHeaderImg = ({ img }) => {
  const styles = {
    backgroundImage: `url(${img})`,
  }

  return (
    <div id="header-img-container">
      <div id="header-img" style={styles} />
    </div>
  )
}

export default PostHeaderImg
