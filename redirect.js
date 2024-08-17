document.addEventListener("DOMContentLoaded", function() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var redirectUrl;

  if (/android/i.test(userAgent)) {
    redirectUrl = "https://m.yourwebsite.com"; // Android
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    redirectUrl = "https://m.yourwebsite.com"; // iOS
  } else if (/Macintosh|MacIntel|MacPPC|Mac68K|Linux|Windows/.test(userAgent)) {
    redirectUrl = "https://www.yourwebsite.com"; // Desktop OS (macOS, Linux, Windows)
  } else {
    redirectUrl = "https://m.yourwebsite.com"; // Other or unknown OS
  }

  if (redirectUrl && window.location.href !== redirectUrl) {
    window.location.href = redirectUrl;
  }
});
