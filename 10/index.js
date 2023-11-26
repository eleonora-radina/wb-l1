/*Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.
*/

function parseJsonSafe(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Ошибка при разборе JSON:", error.message);
        return null;
    }
}

let jsonString = '{"name": "John", "age": 25}';
let jsonObject = parseJsonSafe(jsonString);
console.log(jsonObject);


function validateAndParseJson(jsonString) {
    // Дополнительные проверки перед вызовом JSON.parse()
    if (typeof jsonString !== 'string') {
        console.error("Входные данные не являются строкой.");
        return null;
    }

    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Ошибка при разборе JSON:", error.message);
        return null;
    }
}
