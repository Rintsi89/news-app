import React from 'react'

const News = ( { news }) => {
    
    const headerStyle = {
        fontSize: '1.5rem',
        textDecoration: 'underline',
    }

    const imageStyle = {
        width: '30%',
        marginRight: '10px'
    }

    const style = {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '15px 0px',
        border: '2px solid black',
        borderRadius: '5px',
        padding: '10px',
        height: '150px',
        background: 'white'
    }
    
    return (
        <div>
            <a href={news.url} style={headerStyle}>{news.title}</a>
            <p>Published on {news.publishedAt.substring(0, 10)}</p>
            <div style={style}>
                <img src={news.urlToImage} alt='' style={imageStyle}/>
                    <span>{news.description}</span>
            </div>
        </div>
    )
}

export default News