module.exports = {
  printWidth: 80, // 换行字符串阈值
  tabWidth: 2, // 设置工具每一个水平缩进的空格数
  useTabs: false,
  semi: false, // 句末是否加分号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 用单引号
  trailingComma: 'none', // 最后一个对象元素符加逗号
  bracketSpacing: true,
  jsxBracketSameLine: false, // jsx > 是否另取一行
  arrowParens: 'always', // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头加入 @prettier
  endOfLine: 'auto' // 换行符使用 auto 有些地方说的是推荐使用lf
}
