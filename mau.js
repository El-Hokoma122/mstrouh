document.addEventListener('DOMContentLoaded', function() {
    const carouselElement = document.getElementById('carouselExampleCaptions');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3500,
        ride: 'carousel'
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');   
        } else {
            entry.target.classList.remove('show');  
        }
    });
});

const contElements = document.querySelectorAll('.cont');
contElements.forEach((el) => observer.observe(el));
const conteElements = document.querySelectorAll('.conte');
conteElements.forEach((el) => observer.observe(el));
const cont1Elements = document.querySelectorAll('.cont1');
cont1Elements.forEach((el) => observer.observe(el));
const buttonsElements = document.querySelectorAll('.buttons');
buttonsElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
    const counts = document.querySelectorAll('.count');
    const speed = 200;
    function startCounting(counter) {
        const target = Number(counter.getAttribute('data-target'));
        let count = 0;
        const inc = target / speed;

        function upData() {
            if (count < target) {
                count += inc;
                counter.innerText = Math.ceil(count);
                setTimeout(upData, 1);
            } else {
                counter.innerText = target;
            }
        }

        upData();
    }
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
            }
        });
    }, observerOptions);
    counts.forEach((counter) => {
        observer.observe(counter);
    });
});
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 400
 });
   
    ScrollReveal().reveal('.scroe, .addresses', { delay: 100, origin: 'right' });
    ScrollReveal().reveal('.button6', { delay: 100, origin: 'top' });
    ScrollReveal().reveal('.text-box', { delay: 200, origin: 'left' });
    ScrollReveal().reveal('.subtitle-box, .maps', { delay: 200, origin: 'right' });
    ScrollReveal().reveal('.img-fluid, buttons, .address, .box-contact, .counter', { delay: 100, origin: 'bottom', interval: 160 });
    ScrollReveal().reveal('.box-contact', { delay: 100, origin: 'top', interval: 160 });
    ScrollReveal().reveal('.scro', { delay: 200, origin: 'top' });
    ScrollReveal().reveal('.col', { delay: 200, origin: 'bottom', interval: 160 });
    