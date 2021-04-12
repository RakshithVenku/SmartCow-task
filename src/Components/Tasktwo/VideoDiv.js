import React from 'react'


const VideoDiv = (props) => {

    return (
        <iframe 
           width="300" 
           height="200" 
           src="https://www.youtube.com/embed/Vj7NZ6FiQvo" 
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowfullscreen>
        </iframe>
    )
}

export default VideoDiv