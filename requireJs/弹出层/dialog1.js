/**
 * Created by apple on 18/7/12.
 */
define(['jquery-1.12.4'],function(){
/*    var dialog = {
        open:function(arg){
            defaultArg = {
                width:300,
                height:300
            };
            _this = this;
            var options = $.extend(defaultArg,arg);
            /!*生成元素设置样式 内容*!/
            this.$mask = $('<div class="dialog-mask"></div>');
            this.$content = $('<div class="dialog-content"></div>').css({
                width:options.width,
                height:options.height
            });
            this.$title = $('<div class="dialog-title"></div>');
            this.$txt = $('<span class="dialog-txt">登录</span>').html(options.title);;
            this.$close = $('<span class="dialog-close">X</span>').on('click',function(){
                _this.$mask.remove();
            });
            this.$body = $('<div class="dialog-body">gdgfhdg</div>').load(options.content);

            /!*组装到mask中 添加到body*!/
            this.$mask.append(this.$content);
            this.$content.append(this.$title).append(this.$body);
            this.$title.append(this.$txt).append(this.$close);
            $('body').append(this.$mask);
        },
        close:function(){
            //$('.dialog-mask').remove();
            this.$mask.remove();
        }
    };*/

    function Dialog(arg){
        defaultArg = {
            width:300,
            height:300
        };
        var _this = this;
        var options = $.extend(defaultArg,arg);
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$content = $('<div class="dialog-content"></div>').css({
            width:options.width,
            height:options.height
        });
        this.$title = $('<div class="dialog-title"></div>');
        this.$txt = $('<span class="dialog-txt">登录</span>').html(options.title);;
        this.$close = $('<span class="dialog-close">X</span>').on('click',function(){
            _this.$mask.remove();
        });
        this.$body = $('<div class="dialog-body">gdgfhdg</div>').load(options.content);
    }
    Dialog.prototype.open = function(){
        /*组装到mask中 添加到body*/
        this.$mask.append(this.$content);
        this.$content.append(this.$title).append(this.$body);
        this.$title.append(this.$txt).append(this.$close);
        $('body').append(this.$mask);
    };
    Dialog.prototype.close = function(){
        this.$mask.remove();
    };


    return Dialog;



});