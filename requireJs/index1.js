/**
 * Created by apple on 18/7/12.
 */
require(['sortArray'],function(sortArray){


    var arr = [1,2,12,5,7,8];


    console.log(  sortArray('sdfghjkl')  );

});


define(function(require){

    var arr = [1,2,12,5,7,8];

    var sortArray = require('sortArray');
    console.log(  sortArray('sdfghjkl')  );
});


