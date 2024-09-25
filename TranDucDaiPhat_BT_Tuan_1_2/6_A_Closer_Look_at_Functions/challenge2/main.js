(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    header.onclick = function() {
        header.style.color = 'blue';
    }
})();