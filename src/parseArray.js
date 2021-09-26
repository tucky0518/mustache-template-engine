import lookup from './lookup.js';
import renderTemplate from './renderTemplate.js';
// 处理数组,结合rendertemplate实现递归
// 注意, 这个函数收的参数是token, 而不是tokens
// token是什么,就是一个简单的['#','students',[]]

// 这个函数要递归调用renderTemplate函数, 调用次数由data决定
export default function parseArray(token, data) {
  // console.log(token, data);
  // 得到整体数据data中这个数组要使用的部分
  var v = lookup(data, token[1]);
  //  结果字符串
  var resultstr = '';
  // 遍历v数组,v一定是数组
  // 它是遍历数据,而不是遍历tokens,数组中的数据有几条,就要遍历几条
  for (let i = 0; i < v.length; i++) {
    // 这里要补一个'.'属性
    resultstr += renderTemplate(token[2], {
      // 现在这个数据小对象, 是v[i]的展开,就是v[i]本身
      ...v[i],
      // 补充一个'.'属性
      '.': v[i]
    });
  }
  return resultstr;
}
