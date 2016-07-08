Модуль Node.js, котроый выполняет функции обфускации и минификации классов CSS. В качестве данных модуль принимает массив строк. Имена CSS классов хранятся в виде массива строк в файле data.js.
Пример входящих классов:
["pzhoccuf","pzhoccuf","pzhoccuf","pzhoccuf","pzhoccuf","pzhoccuf","pzhoccuf","pzhoccuf","pzhoccuf","pzhoccuf","pzhoccuf","pzhoccuf","hlkon","hlkon","hlkon"]
Модуль возвращает объект в котором ключами являются старые имена классов, а значениями новые.
Пример:
{
  pzhoccuf: 'j',
  hlkon: 'qn'
}
