/**
  * @param {Array} data – массив CSS классов
  */
var data = require('./data.js');

module.exports.obfuscation = function(data) {
  var ALPHABET = "qwertyuiopasdfghjklzxcvbnm0123456789_-".split("");
  var DIGITS = "123456789_-".split("");

  var classesCount = data.reduce(function(acc, className) {
      if (!(className in acc)) {
        acc[className] = 0;
      }
      acc[className] += 1;
      return acc;
    }, {}); /*Подсчет сколько раз используется тот или иной класс в приходящем массиве data */

    var classCountArray = Object.keys(classesCount).map (function(className) {
          return [className, classesCount[className]];
    });  /*Перевод получившегося в результате предыдущего действия объекта в массив */

    var classCountArraySorted = classCountArray.sort(function(classA, classB) {
            return classB[1] - classA[1];
          });  /*Сортировка массива по количеству повторяющихся данных */
    console.log(classCountArraySorted);

    var symbolCounter = Math.ceil(Math.log(classCountArraySorted.length) / Math.log(ALPHABET.length));
    /*Количество символов необходимых для перенаименования классов количеством data.length */

    var newClassNames = [];
      for (i=0; i<26; i++){
        newClassNames.push(ALPHABET[i]);
      }
      for (i=0; i < 26; i++){
        for (j=0; j<ALPHABET.length; j++){
          newClassNames.push(ALPHABET[i]+ALPHABET[j]);
        }
      }
      for (i=0; i < 26; i++){
        for (j=0; j<ALPHABET.length; j++){
          for(k=0; k<ALPHABET.length; k++){
            newClassNames.push(ALPHABET[i]+ALPHABET[j]+ALPHABET[k]);
          }
        }
      }
      newClassNames.length = classCountArraySorted.length;
      /* Создание массива с новыми уникальными именами, количество объектов в массиве равняется количеству уникальных значений в data */

      var _generateNewClassName = function(n) {
        return newClassNames[n];
      } /* Генератор нового имени в зависимости от старого индекса */

      var result = classCountArraySorted.reduce(function(acc, classSort, index) {
          var className = classSort[0];
          acc[className] = _generateNewClassName(index);
          return acc;

        }, {});
        /* Генерация объекта в котором ключом будет являться старое имя класса, а значением новое */
        return result;
};

console.log(module.exports.obfuscation(data));
