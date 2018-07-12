/**
 * Created by apple on 18/7/12.
 */
require(['dialog1','jquery-1.12.4'],function(dialog){

    $('#btn').on('click',function(){
        dialog.open({
            width:200,
            height:200,
            title:'注册',
            content:'content.html'
        });
    });




});