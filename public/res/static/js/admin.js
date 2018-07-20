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
                <input type="text" name="title" required  lay-verify="required" lay-verType='tips' placeholder="请输入标题" autocomplete="off" class="layui-input">
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
                <textarea id="content" name="content" style="display: none;"></textarea>
            </div>
        </div>
        <div class="layui-form-item">
            <div class="layui-input-block">
            <button class="layui-btn" lay-submit lay-filter="add-submit">立即提交</button>
            </div>
        </div>
    </div>
    `
    // 添加新文章
    var layeditContent;
    addBtn.addEventListener('click', function () {
        form.render(); //更新全部
        layer.alert(addDom, {
            skin: 'layui-layer-molv', //样式类名
            closeBtn: 1,
            offset: '100px',
            success: function () {
                form.render(); //更新全部
                layeditContent = layedit.build('content'); //建立编辑器
            }
        });
    })

    form.on('submit(add-submit)', function(data){
        var contentStr = layedit.getContent(layeditContent)
        axios.post('/admin/add',{
            title:data.field.title,
            content:contentStr
        })
        .then(function(res){
            var data = res.data;
            if(data.code == 0){
                layer.msg('发表成功',{icon: 1})
                getArticlList(rebderArticlList)
            }else{
                layer.msg('发表失败',{icon: 5})
            }
        })
        return false; //阻止表单跳转。
      });

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
    
    // 获取所有文章列表
    getArticlList(rebderArticlList)
    function rebderArticlList(data){
        var articleMainBox = document.getElementById('article-main-box')
        var str = ''
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            console.log(element);
            str += `
            <tr>
                <td>${element.title}</td>
                <td>${element.date}</td>
                <td><button data-articl-id='${element.date}' class="layui-btn layui-btn-normal update"><i class="layui-icon">&#xe642;</i>修改</button><button  data-articl-id='${element.date}' class="layui-btn layui-btn-normal delete"><i class="layui-icon">&#xe640;</i>删除</button></td>
            </tr>
            `
        }
        articleMainBox.innerHTML = str;
        layer.closeAll('loading');
    }
    function getArticlList(callback){
        layer.load();
        axios.post('/admin/articl-list')
        .then(function (response) {
            callback(response.data.data)
        })
        .catch(function (error) {
        })
    }

});