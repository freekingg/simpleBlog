layui.use(['layer', 'form','layedit'], function () {
    var layer = layui.layer;
    var form = layui.form;
    var layedit = layui.layedit;


    var addBtn = document.querySelector('.add button')
    
    //新文章
    var addDom = `
    <div class="layui-form" id="addDom" lay-filter="addDom" style="display: block;">
        <div class="layui-form-item">
            <label class="layui-form-label">标题</label>
            <div class="layui-input-block">
                <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">分类</label>
            <div class="layui-input-block">
                <input type="checkbox" name="" title="写作" checked>
                <input type="checkbox" name="" title="发呆"> 
                <input type="checkbox" name="" title="禁用"> 
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">内容</label>
            <div class="layui-input-block">
                <textarea id="content" style="display: none;"></textarea>
            </div>
        </div>
    </div>
    `
    // 添加新文章
    addBtn.addEventListener('click', function () {
        form.render(); //更新全部
        layer.alert(addDom, {
            skin: 'layui-layer-molv', //样式类名
            closeBtn: 1,
            offset: '100px',
            success: function () {
                form.render(); //更新全部
                layedit.build('content'); //建立编辑器
            }
        });
    })

    // 修改删除
    var articleMainBox = document.querySelector('#article-main-box')
    articleMainBox.addEventListener('click',function(ev){
        var target = ev.target || ev.srcElement;
        if(target.classList.contains('update')){
            layer.msg('开发中...')
        }else if(target.classList.contains('delete')){
            layer.msg('开发中...')
        }
    })

});