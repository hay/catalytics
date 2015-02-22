[].slice.call(document.querySelectorAll('.ga-hero img')).forEach(function(img) {
    var file = img.src.split('/').pop();
    var url = chrome.extension.getURL("img/" + file);
    img.src = url;
});