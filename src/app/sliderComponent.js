import React from 'react';

var Slider = React.createComponent({
    render : ()=>{
        return(
            <div>
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
            </div>
        )
    }
});

