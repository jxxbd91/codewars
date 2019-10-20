var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  // console.log(func.toString())
  // console.log(this.dependency)
  // Your code goes here
  var fnStr = func.toString()
  var args = []
  var regParams = /function\s*\(\s*(.*)\)\s*\{/gi
  
  var fnBodyStr = fnStr.replace(regParams, '').trim()
  fnBodyStr = fnBodyStr.substring(0, fnBodyStr.length - 1)
  
  var deps = regParams.exec(fnStr)
  deps = deps && deps[1] && deps[1].trim() && deps[1].trim().split(',') || []
  deps = deps.map(dep => dep.trim())
  deps.forEach(dep => {
    dep = dep.trim()
    args.push(this.dependency[dep])
    var reg = new RegExp('([\\[\\{\\}\\=\\s*\\+\\(])(\\s*'+dep+'\\s*)([\\s*\\)\\}\\]\\(\\[\\;])', 'g');
    fnBodyStr = fnBodyStr.replace(reg, (s0, s1, s2, s3) => {
      return s1 + this.dependency[s2] + s3
    })
  })
  let str = args.join(',')
  fnBodyStr =`arguments = [${str}]; \r\n` + fnBodyStr
  let params = deps.join(',') || ''
  var resFn = new Function(params, fnBodyStr)
  return resFn
}

var deps = {
  'app': function () {return 'this is dep1';},
  'login': function () {return 'this is dep2';},
  'i18n': function () {return 'this is dep3';},
  'dep1': function () {return 'this is dep4';},
  'dep2': function () {return 'this is dep4';},
  'dep3': function () {return 'this is dep4';},
  'dep4': function () {return 'this is dep4';}
};
  
var di = new DI(deps);

var myFunc = di.inject(function (dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ');
});

// var func2 = di.inject(function (app, login, i18n) {
//   function nested(d, e, f){};
//   var args = Array.prototype.slice.call(arguments, 0);
//   return args.length;
// })



console.log(myFunc())

// Test.assertEquals(myFunc(), 'this is dep1 -> this is dep2 -> this is dep3');