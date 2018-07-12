/**
 * Created by apple on 18/7/12.
 */
define(['jquery-1.12.4'],function(){
    var dialog = {
        open:function(arg){
            defaultArg = {
                width:300,
                height:300
            };
            var html = '<div class="dialog-mask">'
                            +'<div class="dialog-content">'
                                +'<div class="dialog-title">'
                                    +'<span class="dialog-txt">登录</span>'
                                    +'<span class="dialog-close">X</span>'
                                +'</div>'
                                +'<div class="dialog-body">gdgfhdg</div>'
                            +'</div>'
                        +'</div>';

            var options = $.extend(defaultArg,arg);
            $('body').append(html);

            $('.dialog-content').css({
                width:options.width,
                height:options.height
            });
            $('.dialog-txt').html(options.title);
            $('.dialog-body').load(options.content);
            $('.dialog-close').on('click',function(){
                $('.dialog-mask').remove();
            });
        },
        close:function(){
            $('.dialog-mask').remove();
            //$mask.remove();
        }
    };


    return dialog;



});