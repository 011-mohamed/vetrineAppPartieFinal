
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function handleScroll() {
    const elements = document.querySelectorAll('.product-card');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('fade-in');
        }
    });
}


window.addEventListener('scroll', handleScroll);


window.addEventListener('load', handleScroll);


