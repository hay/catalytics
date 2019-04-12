const $ = document.querySelector.bind(document);

function cat() {
    var nr = Math.round(Math.random() * 2) + 1;
    return chrome.extension.getURL("img/cat" + nr + ".jpg");
}

function $$(selector) {
    return Array.from(document.querySelectorAll(selector));
}

const IMAGES = [
    '.blockquote-photo',
    '.img-incol',
    '.gmp-banner img',
    '.gmp-no-grab',
    'img'
];

const SRCSET = [
    '.blockquote-photo',
    '.img-incol',
    '.gmp-banner source',
    'source'
];

const BGIMAGES = [
    '.hero-image'
];

IMAGES.forEach((selector) => {
    $$(selector).forEach(i => i.src = cat());
});

SRCSET.forEach((selector) => {
    $$(selector).forEach(i => i.srcset = cat());
});

BGIMAGES.forEach((selector) => {
    $$(selector).forEach(i => i.style.backgroundImage = `url(${cat()})`)
});

$$("h1, h2, h3").forEach(h1 => h1.innerHTML = 'miaow.');

$(".photo-tout__background").style.opacity = 0;