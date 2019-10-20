

(function (app = 1, login = 2, i18n = 3) {
  console.log(arguments)
  arguments = [1, 2, 3]
  function nested(d, e, f){};
  var args = Array.prototype.slice.call(arguments, 0);
  console.log(args)
  return args.length;
})()