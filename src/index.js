import Scanner from './Scanner.js';
import parseTemplateToTokens from './parseTemplateToTokens.js';
import renderTemplate from './renderTemplate.js';

// 全局提供tucky_template对象
window.tucky_template = {
  // 渲染方法
  render(templatestr, data) {
    // 调用parseTemplateToTokens函数,让模板字符串能够变为tokens数组
    var tokens = parseTemplateToTokens(templatestr);
    // 调用renderTemplate函数,让tokens数组变为dom字符串
    var domstr = renderTemplate(tokens, data);
    return domstr;

    // ***********************************************

    // console.log('render函数被调用,我们要命令scanner工作');
    // 实例化一个扫描器,构造时候提供一个参数,这个参数就是模板字符串,也就是说这个扫描器就是针对这个模板字符串工作的
    // var scanner = new Scanner(templatestr);
    // var word;
    // // 当scanner没有到头
    // while (!scanner.eos()) {
    //   word = scanner.scanUtil('{{');
    //   console.log(word);
    //   scanner.scan('{{');
    //   word = scanner.scanUtil('}}');
    //   console.log(word);
    //   scanner.scan('}}');
    // }
    // console.log(templatestr);
    // // 测试scanUtil
    // var words = scanner.scanUtil('{{');
    // console.log(scanner.pos);
    // console.log(words);
    // scanner.scan('{{');
    // console.log(scanner.pos);
  }
};
