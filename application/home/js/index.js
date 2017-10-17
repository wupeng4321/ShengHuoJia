/**
 * Created by apple on 2017/10/17.
 */
$(document).ready(function () {
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


});
