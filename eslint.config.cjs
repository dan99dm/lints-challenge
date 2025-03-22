export default [
    {
      files: ["*.js"],
      languageOptions: {
        ecmaVersion: "latest"
      },
      rules: {
        "no-restricted-syntax": [
          "error",
          {
            selector: "ForStatement",
            message: "Мне не нравится for! Используйте .map(), .forEach() и другие методы."
          }
        ]
      }
    }
  ];