/**
 * Created by apple on 18/7/12.
 */
define(function(){

    function sortArray(arr){
        arr.sort(function(x,y){
            return x-y;
        });
        return arr;
    }


    return sortArray;

});