/**
 * Created by apple on 2017/10/17.
 */
$(document).ready(function () {


    // ************************用于轮播图begin************************
    var ulDom = $(".bannerDiv>ul");
    var leftNum = parseInt(ulDom.css("left"));
    var width = parseInt($(".bannerDiv>ul>li>img").css("width"));
    var timerLeft = setInterval(function () {
        left();
    }, 2500);

    function left() {
        ulDom.animate({left: leftNum - width + "px"}, 1000, function () {
            var li = ulDom.children()[0];
            li.remove();
            ulDom.append(li);
            ulDom.css("left", "0px");
        });
    }

    ulDom.mouseover(function () {
        clearInterval(timerLeft);
    });
    ulDom.mouseout(function () {
        timerLeft = setInterval(left, 2500);
    });
    // ************************用于轮播图end************************


    // ************************用于类目begin************************
    $(".category>ul").append("<li href = \"../goods/goodsList.html?type=4\">wupeng</li>");
    var liDom = $(".category>ul>li");
    liDom.click(function () {
        // alert($(this).index());
        liDom.attr("href","../goods/goodsList.html?type=3");
        window.location.href = "../goods/goodsList.html?type=3";
    });


    // ************************用于类目end************************
});
