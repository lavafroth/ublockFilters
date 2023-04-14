/// comohoy_fast_forward
window.addEventListener('load', function() {
    const anchorTags = document.querySelectorAll('a[href^="https://comohoy.com"][href*="url="]');
    for (const tag of anchorTags) {
        const href = tag.getAttribute('href');
        if (href.includes('url=')) {
            const decodedUrl = decodeURIComponent(atob(href.split('url=')[1]));
            tag.setAttribute('href', decodedUrl);
        }
    }
}, false);
