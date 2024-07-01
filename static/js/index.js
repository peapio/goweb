//JS 
layui.use(['jquery', 'element', 'layer', 'util'], function () {
    var element = layui.element;
    var layer = layui.layer;
    var util = layui.util;
    var $ = layui.$;
    renderTo("main");
    //头部事件
    util.event('lay-header-event', {
        menuLeft: function (othis) { // 左侧菜单事件
            layer.msg('展开左侧菜单的操作', { icon: 0 });
        },
        menuRight: function () {  // 右侧菜单事件
            layer.open({
                type: 1,
                title: '更多',
                content: '<div style="padding: 15px;">处理右侧面板的操作</div>',
                area: ['260px', '100%'],
                offset: 'rt', // 右上角
                anim: 'slideLeft', // 从右侧抽屉滑出
                shadeClose: true,
                scrollbar: false
            });
        }
    });

    $("[tab-name]").on('click', function () {
        var tabName = $(this).attr('tab-name');
        renderTo(tabName);
    });

    function renderTo(pageName) {
        $(".layui-body").html('<iframe width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" src="/static/page/' + pageName + '.html"></iframe>')
    };

});