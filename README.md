# mustache-template-engine

## mustache 模板引擎

`模板引擎`是将`数据`要变为`视图`最优雅的解决方案

最简单的模板引擎的实现机理,利用的是正则表达式中的`replace()`方法,`replace()`的第二个参数可以是一个函数,这个函数提供捕获的东西的参数,就是`capturedstr`,结合 data 对象,即可进行智能的替换

`tokens` 是一个`js的嵌套数组`,说白了就是`模板字符串的js表示`,它是`抽象语法树`,`虚拟节点`等等的开山鼻祖

mustache 库底层重点要做两件事:

1. 将模板字符串编译成 tokens 形式
2. 将 tokens 结合数据,解析为 dom 字符串
