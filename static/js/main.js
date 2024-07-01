// JS
layui.use(function () {
    var flow = layui.flow;
    var $ = layui.$;
    // 流加载实例
                    var str = $("#ID-flow-demo").html()
    console.log(str)
    flow.load({
        elem: '#ID-flow-demo', // 流加载容器
        // scrollElem: '#ID-flow-demo', // 滚动条滑到底自动加载
        isAuto: true,
        done: function (page, next) { // 执行下一页的回调
            // 模拟数据插入
            setTimeout(function () {
                var lis = [];
                for (var i = 0; i < 2; i++) {
                    // var index =(page-1)*pageSize + i ;
                    // var str = $("#ID-flow-demo").html()
                    // document.write(str)
                    // lis.push($("#ID-flow-demo").html())
                    title = "物理机";
                    context = "静态信息ip地址 mac地址，架构，操作系统，版本号 时间";
                    lis.push('<div class="layui-card-header">' + title + '</div><div class="layui-card-body">' + context + '</div>')
                }

                // 执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                // pages 为 Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                next(lis.join(''), page < 10); // 此处假设总页数为 10
            }, 520);
        }
    });
});