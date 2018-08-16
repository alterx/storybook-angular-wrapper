exports.angularWrapper=function(e,t){return function(n){var o=n();if(o.template&&(o.template=e.replace(t,o.template)),o.component){var r=o.component.__annotations__[0].selector,a="";Object.keys(o.props).forEach(function(e){a+="["+e+']="'+e+'" '}),o.template=e.replace(t,"<"+r+" "+a+"></"+r+">"),delete o.component}return o}};
//# sourceMappingURL=index.js.map
