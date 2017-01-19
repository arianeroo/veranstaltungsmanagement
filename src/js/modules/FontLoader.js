import FontFaceObserver from 'fontfaceobserver';

const openSansCondensed300 = new FontFaceObserver('Open Sans Condensed', {
    weight: 300
});

const openSansCondensed700 = new FontFaceObserver('Open Sans Condensed', {
    weight: 700
});

const libreBaskerville400 = new FontFaceObserver('Libre Baskerville', {
    weight: 400
});

const libreBaskerville400Italic = new FontFaceObserver('Libre Baskerville', {
    weight: 400,
    style: 'italic'
});

const libreBaskerville700 = new FontFaceObserver('Libre Baskerville', {
    weight: 700
});


Promise.all([
    openSansCondensed300.check(),
    openSansCondensed700.check(),
    libreBaskerville400.check(),
    libreBaskerville400Italic.check(),
    libreBaskerville700.check()
]).then(() => {
    document.documentElement.className += ' fl';
}, () => {
    console.log('Fonts not loaded');
})
