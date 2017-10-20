/**
 * Created by apple on 2017/10/18.
 */
$(document).ready(function () {

    getData();
    function getData() {
        $.get("http://localhost/PhpstormProjects/wupeng/goods/goodListInfo.php",function (data, status) {
            showWithData(data["result"]["showapi_res_body"]);
        });
    };

    function showWithData(data) {
        alert(data.length);
        var count = data.length;
        var goodsListcontent = $(".goodsListcontent");
        var goodDiv = $(".goodDiv");
        for (var i = 0; i < count; i++) {
            
        }

    }

});
