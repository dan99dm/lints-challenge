module.exports = [
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: "latest"
    },
    rules: {
      "no-restricted-syntax": [
        "error",

        // 1️⃣ Запрещено использовать for, while, do...while
        { selector: "ForStatement", message: "Циклы? Нет, спасибо! Используй рекурсию." },
        { selector: "WhileStatement", message: "while запрещён! Думай по-другому." },
        { selector: "DoWhileStatement", message: "do...while тоже под запретом!" },

        // 2️⃣ Запрещены массивы и объекты
        { selector: "ArrayExpression", message: "Массивы запрещены! Используй строки." },
        { selector: "ObjectExpression", message: "Объекты? Это слишком просто!" },

        // 3️⃣ Запрещены числа (0-9)
        { selector: "Literal[value=/[0-9]/]", message: "Числа? Только через хаки, например, +'1e3'." },

        // 4️⃣ Запрещено return
        { selector: "ReturnStatement", message: "Никаких return! Передавай результат как хочешь." },

        // 5️⃣ Запрещены if, else, switch
        { selector: "IfStatement", message: "if запрещён! Попробуй тернарники." },
        { selector: "SwitchStatement", message: "switch тоже под запретом!" },

        // 9️⃣ Запрещены логические операторы &&, ||, !
        { selector: "LogicalExpression[operator='&&']", message: "&& запрещён! Только битовые операции." },
        { selector: "LogicalExpression[operator='||']", message: "|| запрещён! Думай иначе." },
        { selector: "UnaryExpression[operator='!']", message: "! запрещён! Хочешь инверсию? Придётся креативить." },
        {
          selector: "CallExpression[callee.property.name='split'][callee.object.type='Literal']",
          message: "split запрещён для строк!"
        },
        {
          selector: "CallExpression[callee.property.name='start'][callee.object.type='Literal']",
          message: "Ну что, начнем?"
        }
      ],

      // 6️⃣ Длинные названия переменных (минимум 10 символов)
      "id-length": ["error", { min: 10 }],

      // 7️⃣ Каждая функция должна содержать минимум 5 аргументов
      "max-params": ["error", 4], // 4 → потому что 5 уже вызывает ошибку

      // 8️⃣ Запрещены методы строк
      "no-restricted-properties": [
        "error",
        { object: "String", property: "split", message: "split запрещён! Ищи обходные пути." },
        { object: "String", property: "indexOf", message: "indexOf нельзя! Думай нестандартно." },
        { object: "String", property: "replace", message: "replace запрещён! Без читов." }
      ]
    }
  }
];