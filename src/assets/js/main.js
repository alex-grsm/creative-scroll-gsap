import { gsap } from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (!ScrollTrigger.isTouch) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    });

    gsap.fromTo('.hero', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: 'center',
            end: '+=500',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

    itemsL.forEach(item => {
        gsap.fromTo(item, {opacity: 0, x: -70}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 0.7,
                // markers: true
            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

    itemsR.forEach(item => {
        gsap.fromTo(item, {opacity: 0, x: 70}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                end: 'top 20%',
                scrub: 0.5,
                // markers: true
            }
        })
    })

    /*************************************************************************** */
        // Section titles animation
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.fromTo(title, {opacity: 0, y: 50}, {
                opacity: 1, y: 0,
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    end: 'top 40%',
                    scrub: 0.5
                }
            });
        });

        // Featured projects animation with staggered effect
        gsap.utils.toArray('.featured-item').forEach((item, index) => {
            gsap.fromTo(item, 
                {opacity: 0, y: 100}, 
                {
                    opacity: 1, 
                    y: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        end: 'top 35%',
                        scrub: 0.5
                    },
                    delay: index * 0.1
                }
            );
        });

        // Quotes animation with scale effect
        gsap.utils.toArray('.quote-wrapper').forEach(quote => {
            gsap.fromTo(quote, 
                {opacity: 0, scale: 0.9}, 
                {
                    opacity: 1, 
                    scale: 1,
                    scrollTrigger: {
                        trigger: quote,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: 0.3
                    }
                }
            );
        });

        // Process steps animation with alternating directions
        gsap.utils.toArray('.process-step').forEach((step, index) => {
            gsap.fromTo(step, 
                {opacity: 0, x: index % 2 === 0 ? -50 : 50}, 
                {
                    opacity: 1, 
                    x: 0,
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 85%',
                        end: 'top 40%',
                        scrub: 0.4
                    }
                }
            );
        });

        // Contact section animation with slide-in effect
        gsap.fromTo('.contact-info', 
            {opacity: 0, x: -50}, 
            {
                opacity: 1, 
                x: 0,
                scrollTrigger: {
                    trigger: '.contact-info',
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: 0.5
                }
            }
        );

        gsap.fromTo('.contact-form', 
            {opacity: 0, x: 50}, 
            {
                opacity: 1, 
                x: 0,
                scrollTrigger: {
                    trigger: '.contact-form',
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: 0.5
                }
            }
        );

        // Footer elements animation with fade in and staggered effect
        gsap.utils.toArray('.footer-content > div').forEach((item, index) => {
            gsap.fromTo(item, 
                {opacity: 0, y: 30}, 
                {
                    opacity: 1, 
                    y: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        end: 'top 70%',
                        scrub: 0.3
                    },
                    delay: index * 0.1
                }
            );
        });

}

gsap.config({ trialWarn: false });
