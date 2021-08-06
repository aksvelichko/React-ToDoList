import { Carousel } from "bootstrap";
import blue from './blue.jpg'
import star from './star.jpg'
import romb from './romb.jpg'
import React from 'react';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={blue}
                    alt='First slide'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={star}
                    alt='First slide'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={romb}
                    alt='First slide'
                />
            </Carousel.Item>

        </Carousel>
    )
}

export default Slider;