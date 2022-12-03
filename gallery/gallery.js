let previewButtons = document.querySelectorAll('.previews__button');
let fullImage = document.querySelector('.full-image');

function addPreviewButtonHandler(button, source) {
    button.addEventListener('click', function() {
        fullImage.src = source;
    });
}

for (let previewButton of previewButtons) {
    const previewImageUrl = previewButton.children[0].src;
    addPreviewButtonHandler(previewButton, previewImageUrl);
}