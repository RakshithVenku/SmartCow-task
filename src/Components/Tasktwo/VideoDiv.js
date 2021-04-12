import React from 'react'


const VideoDiv = (props) => {

    return (
          <iframe
            title='video'
            maxwidth="360" 
            height="215"
            src="https://www.youtube.com/embed/I7AgBpTbbTA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
    )
}

export default VideoDiv