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

            var options = $.extend(defaultArg,arg);

            $mask = $('<div class="dialog-mask"></div>');
            $content = $('<div class="dialog-content"></div>').css({
                width:options.width,
                height:options.height
            });
            $title = $('<div class="dialog-title"></div>');
            $txt = $('<span class="dialog-txt">登录</span>').html(options.title);;
            $close = $('<span class="dialog-close">X</span>').on('click',function(){
                $('.dialog-mask').remove();
            });
            $body = $('<div class="dialog-body">gdgfhdg</div>').load(options.content);


            $mask.append($content);
            $content.append($title).append($body);
            $title.append($txt).append($close);

            $('body').append($mask);

        },
        close:function(){
            $('.dialog-mask').remove();
        }
    };


    return dialog;



});