document.addEventListener("DOMContentLoaded", function() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var redirectUrl;

  if (/android/i.test(userAgent)) {
    redirectUrl = "https://kristy98755.github.io/m.startpage/"; // Android
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    redirectUrl = "https://kristy98755.github.io/m.startpage/"; // iOS
  } else if (/Macintosh|MacIntel|MacPPC|Mac68K|Linux|Windows/.test(userAgent)) {
    redirectUrl = "https://kristy98755.github.io/startpage/"; // Desktop OS (macOS, Linux, Windows)
  } else {
    redirectUrl = "https://kristy98755.github.io/m.startpage/"; // Other or unknown OS
  }

  if (redirectUrl && window.location.href !== redirectUrl) {
    window.location.href = redirectUrl;
  }
});
