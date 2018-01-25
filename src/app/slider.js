import React from 'react';
require('./css/slider.css');


var Slider = React.createClass({
    render : ()=>{
        return(
            <div className="sliderBar">
                <div className="slider">
                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img src="./app/img/img1.jpg"/>
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img src="./app/img/img2.jpg"/>
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img src="./app/img/img3.jpg"/>
                        <div className="text">Caption Text</div>
                    </div>  
                    {/* Next and previous buttons */}
                    <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a className="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
                {/* The dot/circle */}
                <div style="text-align:center">
                    <span className="dot" onclick="currentSlide(1)"></span>
                    <span className="dot" onclick="currentSlide(2)"></span>
                    <span className="dot" onclick="currentSlide(3)"></span>
                </div>  
            </div>
        );
    }


});

module.exports = Slider;