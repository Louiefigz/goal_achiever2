function TestCtrl(){
  console.log('hellow?')
  this.message = "Hello World";
};


angular
  .module('app', [])
  .controller("TestCtrl", TestCtrl)
