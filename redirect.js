const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const url = new URL(window.location.href);
const pathParts = url.pathname.split('/');
const lastPart = pathParts[pathParts.length - 1];

if (isMobile && !lastPart.startsWith('m.')) {
    pathParts[pathParts.length - 1] = 'm.' + lastPart;
    url.pathname = pathParts.join('/');
    window.location.href = url.href;
} else if (!isMobile && lastPart.startsWith('m.')) {
    pathParts[pathParts.length - 1] = lastPart.substring(2);
    url.pathname = pathParts.join('/');
    window.location.href = url.href;
}
