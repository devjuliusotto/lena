document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({ loop: false })
        .add({
            targets: '.image-wrapper img',
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: "easeInOutExpo",
            duration: 2000
        })
        .add({
            targets: '.display-4',
            scale: [0.3, 1],
            opacity: [0, 1],
            easing: "easeInOutExpo",
            duration: 2000,
            offset: '-=1000'
        })
        .add({
            targets: '.lead',
            opacity: [0, 1],
            easing: "easeInOutExpo",
            duration: 2000,
            offset: '-=1000'
        })
        .add({
            targets: '.heart',
            scale: [0, 1],
            rotate: ['0deg', '360deg'],
            easing: 'easeInOutExpo',
            duration: 2000,
            offset: '-=1500'
        });

    anime({
        targets: '.heart',
        scale: [
            { value: 1.2, duration: 500, easing: 'easeInOutExpo' },
            { value: 1, duration: 500, easing: 'easeInOutExpo' }
        ],
        loop: true
    });
});
