import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import './slider.css'

const items = [
    {
        src: require('../../shared/images/slider/slider.jpg').default,
        id:1,
        altText: 'Stylish',
        caption: 'Stylish',
        description:'30% OFF'
    },
    {
        src: require('../../shared/images/slider/slider1.webp').default,
        id:2,
        altText: 'Healthy',
        caption: 'Healthy',
        description:'55% OFF'
    },
    {
        src: require('../../shared/images/slider/slider2.webp').default,
        id:3,
        altText: 'Natural',
        caption: 'Natural',
        description:'45% OFF'
    }
];

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
                <img src={item.src} alt={item.altText} width="100%" />
                <CarouselCaption className="carouselClass" captionText={item.description} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Slider;