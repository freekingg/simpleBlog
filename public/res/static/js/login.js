layui.use(['layer', 'form'], function () {
    var layer = layui.layer;
    var form = layui.form;

    form.on('submit(*)', function(data){
     axios.post('/admin/login', data.field)
     .then(function (response) {
        console.log(response);
        var data = response.data
        if(data.code == 0){
            location.href = '/admin'
        }else{
            layer.msg(data.message)
        }
     })
    .catch(function (error) {
        console.log(error);
     })

    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });

});