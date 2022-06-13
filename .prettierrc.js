
/**
 * prettier 美化规则配置
 * @file .prettierrc.js
 *
 */
module.exports = {
    //...fabric.prettier,
    // tab 占据四个空格
    tabWidth: 4,
    // 是否使用tab 缩进，默认false
    useTabs: false,
    // 语句结尾的分号
    semi: true,
    // 单行最大字符数，超出换行
    printWidth: 180,
    // 字符串是否使用单引号， 默认false
    singleQuote: false,
    // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    proseWrap: "preserve",
    // 结尾是 \n \r \n\r auto
    endOfLine: "auto",
    quoteProps: "as-needed",
    // 行尾逗号,默认none,可选 none|es5|all
    // es5 包括es5中的数组、对象
    // all 包括函数对象等所有可选
    trailingComma: "all",
    // 对象中的空格 默认true
    // true: { foo: bar }
    // false: {foo: bar}
    bracketSpacing: true,
    // JSX标签闭合位置 默认false
    // false: <div
    //          className=""
    //          style={{}}
    //       >
    // true: <div
    //          className=""
    //          style={{}} >
    jsxBracketSameLine: true,
    // 在jsx中使用单引号代替双引号
    // parser: 'babylon', // 格式化的解析器，默认是babylon
    jsxSingleQuote: false,
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    arrowParens: "avoid",
    // Require a 'prettierconfig' to format prettier
    requireConfig: false,
    // 不让prettier使用eslint的代码格式进行校验
    eslintIntegration: false,
    // 不让prettier使用tslint的代码格式进行校验
    // tslintIntegration: false,
    insertPragma: false,
    overrides: [],
    // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
    ignorePath: ".prettierignore",
};
