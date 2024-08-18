// Определяем тип устройства
const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

// Получаем текущий URL
const currentUrl = window.location.href;

// Проверяем, является ли URL мобильной версией
const isMobileVersion = currentUrl.includes('/m.startpage');

// Проверка соответствия типа устройства и версии сайта
if (isMobile && !isMobileVersion) {
    // Если устройство мобильное, но версия сайта не мобильная, перенаправляем на мобильную версию
    window.location.href = currentUrl.replace('/startpage', '/m.startpage');
} else if (!isMobile && isMobileVersion) {
    // Если устройство не мобильное, но версия сайта мобильная, перенаправляем на полную версию
    window.location.href = currentUrl.replace('/m.startpage', '/startpage');
}
