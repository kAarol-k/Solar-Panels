import React, {useRef, useEffect } from 'react';
import './Hero.css';
import {ReactComponent as HeroImg } from '../resources/scene.svg';
import gsap from 'gsap';
function Hero() {
    const wrapper = useRef(null);
  

useEffect(()=>{
    const [elements] = wrapper.current.children;
    

    const first = document.getElementById('first');
    const secound = document.getElementById('secound');
    const third = document.getElementById('third');

    const background = elements.getElementById('background');
    const man = elements.getElementById('man');
    const chart = elements.getElementById('chart');

    gsap.set([background, man, chart,first,secound,third],{autoAlpha: 0});
    gsap.set(chart, {transformOrigin:'50% 100%'})
    const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});
    tl.fromTo(man, {x: '-=100'},{duration:1 ,x: '+=100', autoAlpha:1})
    .fromTo(chart, {scaleY:0},{duration:0.5, scaleY:1, autoAlpha:1}, '-=0.5')
    .fromTo(background,{autoAlpha:0},{duration:0.5,autoAlpha:1})
    .fromTo(first,{x: '-=40',autoAlpha:0},{duration:0.3,x:'+=40',autoAlpha:1},'-=0.5')
    .fromTo(secound,{autoAlpha:0},{duration:0.6,autoAlpha:1})
    .fromTo(third,{autoAlpha:0},{duration:0.6,autoAlpha:1},'-=0.6')
}, []);
    return (
        <div className="Hero">
            <div className="Hero__title">
                <p id="first">ECO BSSzczytno</p>
                <p id="secound">Energia Pozyskana </p>
                <p id="third">z Paneli Fotowoltaicznych</p>
            </div>
            <div ref={wrapper} className="Hero__image">
                <HeroImg />
            </div>
        </div>
    )
}

export default Hero
