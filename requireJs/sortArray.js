/**
 * Created by apple on 18/7/12.
 */
define(['isArray'],function(isArray){

    function sortArray(arr){
        if(isArray(arr)){
            arr.sort(function(x,y){
                return x-y;
            });
            return arr;
        }else{
            return '请输入数组';
        }
    }


    return sortArray;

});