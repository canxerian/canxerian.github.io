import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Initialize Lenis
const lenis = new Lenis({});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);