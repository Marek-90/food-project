import React from 'react';
import Slider from 'react-styled-carousel';
import food1 from '../../../Assets/avocado.jpg';
import food2 from '../../../Assets/sandwich.jpg';
import food3 from '../../../Assets/dried-tomatoes.jpg';
import food4 from '../../../Assets/appetizer.jpg';
import food5 from '../../../Assets/pudding.jpg';
import food6 from '../../../Assets/cocktail.jpg';
import food7 from '../../../Assets/blend.jpg';
import ImgStyle from './imgStyle'

const Carusel = () => {
    const responsive = [
        { breakPoint: 50, cardsToShow: 4 }, 
        { breakPoint: 25, cardsToShow: 2 },
      ];
    return (
        <Slider responsive={responsive} autoSlide= "5000">
            <div>
                <ImgStyle src={food1} alt="avocado"/>
                Lorem ipsum 1
            </div>
            <div>
                <ImgStyle src={food2} alt="sadwich"/>
                Lorem ipsum 2
            </div>
            <div>
                <ImgStyle src={food3} alt="dried-tomatoes"/>
                Lorem ipsum 3
            </div>
            <div>
                <ImgStyle src={food4} alt="appetizer"/>
                Lorem ipsum 4 
            </div>
            <div>
                <ImgStyle src={food5} alt="pudding"/>
                Lorem ipsum 5
            </div>
            <div>
                <ImgStyle src={food6} alt="cocktail"/>
                Lorem ipsum 6
            </div>
            <div>
                <ImgStyle src={food7} alt="blend"/>
                Lorem ipsum 7
            </div>
        </Slider>

    )
}



export default Carusel;