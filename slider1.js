document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.image-slider');

    sliders.forEach(slider => {
        const sliderWrapper = slider.querySelector('.slider-wrapper');
        const images = sliderWrapper.querySelectorAll('img');
        let index = 0;

        setInterval(() => {
            index = (index + 1) % images.length;
            sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
        }, 2000); // Change image every 3 seconds
    });
});
