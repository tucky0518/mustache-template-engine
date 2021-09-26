// 功能是可以在dataobj对象中,寻找用连续点符号的keyname属性
export default function lookup(dataobj, keyname) {
  // 看看keyname中有没有点符号,但是不能是.本身
  if (keyname.indexOf('.') != -1 && keyname != '.') {
    // 如果有点符号, 那么拆开
    var keys = keyname.split('.');
    // 设置一个临时变量,这个临时变量用于周转,一层一层找下去
    var temp = dataobj;
    // 每找一层,就把它设置为新的临时变量
    for (let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]];
    }
    return temp;
  }
  // 如果这里面没有点符号
  return dataobj[keyname];
}
