// Массив слов, перед которыми нужно добавлять "m." для мобильных устройств
const mobilePages = ['startpage', 'doors'];

// Функция определения типа устройства
function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Проверка на Android, iOS или кнопочный телефон
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) || /Mobile|Opera Mini/.test(userAgent)) {
        return true;
    }
    
    // Проверка на Linux (только если это не настольный Linux)
    if (/Linux/.test(userAgent) && /Mobile/.test(userAgent)) {
        return true;
    }
    
    // По умолчанию считать устройство мобильным, если не удалось определить тип
    return false;
}

// Основная функция для редиректа
function handleRedirect() {
    const currentUrl = window.location.pathname; // Текущий путь без домена
    const isMobile = isMobileDevice(); // Определяем тип устройства
    let newUrl = currentUrl.replace(/\/m\./g, '/'); // Убираем "/m."

    // Если устройство мобильное, добавляем "m." перед нужными страницами
    if (isMobile) {
        mobilePages.forEach(page => {
            const regex = new RegExp(`/${page}`, 'g');
            newUrl = newUrl.replace(regex, `/m.${page}`);
        });
    }

    // Если текущий URL отличается от рассчитанного, перенаправляем
    if (currentUrl !== newUrl) {
        window.location.pathname = newUrl;
    }
}

// Выполняем редирект, когда DOM полностью загружен, но до загрузки остальных ресурсов
document.addEventListener('DOMContentLoaded', handleRedirect);
