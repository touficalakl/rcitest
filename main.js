// Accordion and Search Functionality

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const searchInput = document.getElementById('service-search');

    // Accordion Toggle
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const activeItem = document.querySelector('.accordion-item.active');
            if (activeItem && activeItem !== header.parentElement) {
                activeItem.classList.remove('active');
            }
            header.parentElement.classList.toggle('active');
        });
    });

    // Search Filter
    searchInput.addEventListener('input', (e) => {
        const filter = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.accordion-item');

        items.forEach(item => {
            const headerText = item.querySelector('.accordion-header').innerText.toLowerCase();
            if (headerText.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
