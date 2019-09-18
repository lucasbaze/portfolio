import React from 'react'
import {Link} from 'gatsby'

const PageThumb = ({ obj }) => {
    return (
        <article className="6u 12u$(xsmall) work-item">
            <Link
                className="image fit thumb"
                to={obj.to}
            >
                <img src={obj.thumbnail} />
            </Link>

            <h3>{obj.caption}</h3>
            <p>{obj.description}</p>
        </article>
    );
}

export default PageThumb
