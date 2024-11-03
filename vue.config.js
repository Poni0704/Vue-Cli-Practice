const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 通过后续学习了解到,这其实是语法检查的时候把不规范的代码(即命名不规范)当成了错误
  // 新增以下設定檔，關閉語法檢查
  lintOnSave: false,
});
