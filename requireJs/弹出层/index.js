/**
 * Created by apple on 18/7/12.
 */
require(['dialog1','jquery-1.12.4'],function(Dialog){

    $('#btn').on('click',function(){
        var dialog1 = new Dialog({
            width:300,
            height:200,
            title:'注册',
            content:'content.html'
        })
        dialog1.open();
    });


   /* $('body').on('click','.close-btn',function(){
        dialog1.close();
    });*/
    $('body').on('click','.submit-btn',function(){
        var dialog2 = new Dialog({
            width:150,
            height:100,
            title:'注册',
            content:'error.html'
        });
        dialog2.open();

    });

    /*事件委托  解决后生成元素的事件绑定问题
    * */




});