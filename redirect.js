(function() {
    // Определяем функцию для добавления или удаления префикса "m."
    function updatePrefix(url, prefix) {
        // Разбиваем URL на части
        const parts = url.split('/');
        
        // Проверяем и обновляем последний элемент URL, если это нужное слово
        const lastPart = parts.pop();
        if (lastPart === 'startpage' || lastPart === 'doors') {
            if (prefix && !lastPart.startsWith('m.')) {
                // Добавляем префикс "m."
                parts.push('m.' + lastPart);
            } else if (!prefix && lastPart.startsWith('m.')) {
                // Убираем префикс "m."
                parts.push(lastPart.substring(2));
            } else {
                // Если префикс уже присутствует или отсутствует в нужном месте, не меняем его
                parts.push(lastPart);
            }
        } else {
            parts.push(lastPart);
        }
        
        // Возвращаем обновленный URL
        return parts.join('/');
    }

    // Получаем текущий URL
    const currentUrl = window.location.href;

    // Определяем, должен ли быть префикс "m."
    const prefix = (navigator.userAgent.match(/Android|iPhone|iPad|iPod|Mobile/) != null);

    // Обновляем URL в зависимости от префикса
    const newUrl = updatePrefix(currentUrl, prefix);

    // Если URL изменился, перенаправляем
    if (newUrl !== currentUrl) {
        window.location.href = newUrl;
    }
})();
