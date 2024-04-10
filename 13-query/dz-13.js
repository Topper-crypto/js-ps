function queryParamsToString(params) {
    return Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
}

// Пример использования:
const params = {search: "Вася", take: 10};
const queryString = queryParamsToString(params);
console.log(queryString); // Выведет: "search=%D0%92%D0%B0%D1%81%D1%8F&take=10"
