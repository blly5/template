require('../css/style.less');
require('../js/lib/rem');

var b = new Promise(function(d){
    d();
});



let a = async function(){
    await b();
    console.log('123');
};

a();