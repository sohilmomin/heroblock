// anime.timeline({ loop: true })
//     .add({
//         targets: '.ml15 .word',
//         scale: [14, 1],
//         opacity: [0, 1],
//         easing: "easeOutCirc",
//         duration: 800,
//         delay: (el, i) => 800 * i
//     }).add({
//         targets: '.ml15',
//         opacity: 0,
//         duration: 1000,
//         easing: "easeOutExpo",
//         delay: 1000
//     });

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var descriptionText = document.querySelector('.description');
descriptionText.innerHTML = descriptionText.textContent.replace(/\S/g, "<span class='des-letter'>$&</span>");
anime.timeline({ loop: false })
    .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.ml3',
        opacity: 0,
        duration: Infinity,
        easing: "easeOutExpo",
        delay: 1000
    });