document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', (event) => {
        if (event.target.open) {
            console.log(event.target.querySelector('summary').textContent + ' opened');
        }
    });
});
