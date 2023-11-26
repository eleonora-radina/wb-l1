/*Реализовать функцию конвертации JSON в строку*/

var data =
{
  name: 'John',
  age: 25,
  hobbies: ["sport", "reading"],
  fieldObj: {
    field1: 1,
    field2: "str",
    filedArr: [1, 2, 3]
  },
  bool: true
};

console.log(convertToJsonStringify(data));
console.log(convertToJsonManual(data));

// Через метод stringify()
function convertToJsonStringify(obj) {
  return JSON.stringify(obj);
}

// Без использования метода stringify()
function convertToJsonManual(obj) {
  if (typeof obj === 'object' && obj !== null) {
    return handleObj(obj);
  } else {
    return handleField(obj);
  }
}

function handleObj(obj) {
  let jsonString = '{';

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      jsonString += '"' + key + '":' + handleField(value) + ',';
    }
  }

  // Убираем лишнюю запятую
  jsonString = jsonString.slice(0, -1);
  jsonString += '}';

  return jsonString;
}

function handleField(obj) {
  let jsonString = "";

  if (obj === null) {
    jsonString += "null";
  }
  else if (typeof obj === 'boolean' || (typeof obj === 'number' && isFinite(obj))) {
    jsonString += obj;
  } else if (typeof obj === 'string') {
    jsonString += '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    jsonString += handleArray(obj);
  } else if (typeof obj === 'object' && obj !== null) {
    jsonString += handleObj(obj);
  } else {
    jsonString += '"' + obj + '"';
  }

  return jsonString;
}

function handleArray(arr) {
  jsonString = "[";

  arr.forEach(el => {
    jsonString += handleField(el) + ',';
  });

  // Убираем лишнюю запятую
  jsonString = jsonString.slice(0, -1);
  jsonString += ']';

  return jsonString
}

