function indexletters(param) {
  var output = {};
  param = param.split("");
  for (var i = 0; i < param.length; i++) {
    if (param[i] in output && param[i] !== " ") {
      output[param[i]].push(i);
    } else if (param[i] !== " ") {
      output[param[i]] = [i];
    }
  } return output;
}

console.log(indexletters("lighthouse in the house"));