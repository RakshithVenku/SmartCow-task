import React from 'react'
import VideoDiv from './VideoDiv'
import {Button} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import Slider from 'react-slick';
import pic1 from '../../images/1.laptop.jpeg'
import pic2 from '../../images/2.whiteImage.jpg'
import pic3 from '../../images/3.sand.jpeg'
import pic4 from '../../images/4.vintage.jpg'
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
  };

const useStyles = makeStyles((theme) => ({
    btn: {
        position: 'fixed',
        bottom : "5px",
        left: "5px",
        backgroundColor: '#3366ff'
    }
  }));

const TaskTwo = (props) => {
    const classes = useStyles();

    return (
        <div>
            <div className="image-wrapper">
               <Slider {...settings} className="slider">
                 <div className="image-div">
                   <img  alt='pic1' src={pic1}  />
                   <h1 className="image-text">Lorem ipsum dolor sit amet</h1>
                 </div>
                 <div className="image-div">
                   <img alt='pic2' src={pic2}  />
                   <h1 className="image-text">Lorem ipsum dolor sit amet</h1>
                 </div>
                 <div className="image-div">
                   <img alt='pic3' src={pic3}  />
                   <h1 className="image-text">Lorem ipsum dolor sit amet</h1>
                 </div>
                 <div className="image-div">
                   <img alt='pic4' src={pic4}  />
                   <h1 className="image-text">Lorem ipsum dolor sit amet</h1>
                 </div>
             
               </Slider>
            </div>

            <Button variant="contained" color="primary" className={classes.btn} onClick={() => { props.history.push('/task1')}} >go back</Button>

            <div className="video-content">
                <VideoDiv />
            </div>
        </div>
    )
}

export default TaskTwo