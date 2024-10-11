// Массив слов, перед которыми нужно добавлять "m." для мобильных устройств
const mobilePages = ['startpage', 'doors'];

// Функция определения типа устройства на основе соотношения ширины и высоты окна
function isMobileDevice() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Если высота больше ширины, считаем устройство мобильным
    return height > width;
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

// Выполняем редирект, когда DOM полностью загружен
document.addEventListener('DOMContentLoaded', handleRedirect);
