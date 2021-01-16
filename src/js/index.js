// import './library/jquery.js';
$(function() {
    $("img.lazy").lazyload({ effect: "fadeIn" });

    // 二级菜单
    $('.menu-list li').on('mouseenter', function() {

        switch ($(this).children('a').html()) {
            case '小米手机':
                // console.log(1);
                console.log(this);
                $(this).hover(function() { $(".menu-xlc1").slideDown("slow"); }, function() {
                    $(".menu-xlc1").slideUp("slow");
                })
                break;
            case 'Redmi 红米':
                console.log(2);
                break;
            case '电视':
                console.log(3);
                break;
            case '笔记本':
                console.log(4);
                break;
            case '家电':
                console.log(5);
                break;
            case '路由器':
                console.log(6);
                break;
            case '智能硬件':
                console.log(7);
                break;
        }


    })

    // 倒计时
    $(function() {
            setInterval(function() {
                let now = new Date();
                let futuer = new Date(2021, 2, 5, 18, 0, 0);
                let calculate = futuer - now; // 毫秒值
                let s = calculate / 1000; // 秒
                let hour = parseInt(s % 86400 / 3600); // 计算小时
                let min = parseInt(s % 3600 / 60); // 分钟
                let sec = parseInt(s % 60); //秒
                $('.clock-c>span').eq(0).html(hour);
                $('.clock-c>span').eq(1).html(min);
                $('.clock-c>span').eq(2).html(sec);
            }, 1000);
        })
        // 轮播图
        // $('.lb img:get(0)').hide();
        // var i_nnum = 0; //计时器
        // var num = $(',lb ing').length;
        // console.log(num);


    //菜单栏的显示
    $("#banner_menu_wrap").children().hover(function() {
        $(this).css("background", "#ff6700");
        $(this).children(".banner_menu_content").css("border", "1px solid #F0F0F0").show();
    }, function() {
        $(this).css("background", "none");
        $(this).children(".banner_menu_content").css("border", "0px solid #F0F0F0").hide();
    });
    //轮播
    $(function() {
        var i = 0;
        var big_banner_pic = $("#big_banner_pic");
        var allimg = $("#big_banner_pic li").length;

        function img_change() {
            var img_i = i * -1226 + "px";
            big_banner_pic.animate({ opacity: ".2" }, 100, function() {
                big_banner_pic.css("left", img_i);
                big_banner_pic.animate({
                    opacity: "1"
                }, 100);
            })
        }

        function automatic() {
            i += 1;
            if (i >= allimg) {
                i = 0;
            }
            img_change();
        }
        change_self_time = setInterval(automatic, 3000);
        //轮播上一张下一张图标控制
        $("#big_banner_change_wrap").hover(function() {
            clearInterval(change_self_time);
            $("#big_banner_change_wrap").children().show();
        }, function() {
            change_self_time = setInterval(automatic, 3000);
            $("#big_banner_change_wrap").children().hide();
        })
        $("#big_banner_change_prev").click(function() {
            i += 1;
            if (i >= allimg) {
                i = 0;
            }
            img_change();
        })
        $("#big_banner_change_next").click(function() {
            i -= 1;
            if (i <= 0) {
                i = allimg - 1;
            }
            img_change();
        })
    });

    $.ajax({
        type: "get",
        url: "../../interface/getData.php",
        dataType: "json",
        success: function(res) {
            console.log(res);
            let temp = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.picture);

                // console.log(picture[0].src);

                temp += `  <li class="phone-sell">
                <a href="../html/detail.html?id=${elm.id}">
                    <div class="phone-img">
                    <img  src="${picture[0].src}" alt="">
                    </div>
                    <h3 class="phone-xm11">${elm.title}</h3>
                    <p class="phone-desc">${elm.details}</p>
                    <p class="phone-price">
                        <span>${elm.price}</span>元起
                        
                    </p>
                </a>
            </li>`

            });

            $('.phones1').append(temp);
        }
    });
    let zphone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
    let zpassword = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    let zemail = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
    let zusname = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

    if (zphone.test($('.phonea').val())) {
        $('.in1 p').html('可')
    }

    // 库存
    $('.reg div').on('click', function() {
        let phonea = $('.phonea').val();
        let password = $('.password').val();
        console.log($('.phonea').val());
        window.localStorage.setItem("Phone", phonea);
        window.localStorage.setItem("password", password);
        window.localStorage.setItem("Phone1", 13949812216);
        window.localStorage.setItem("password1", 'wzhiaini！！！');
        // zphone.test($('.phonea').val())
        // zpassword.test($('.password').val())
        // && zemail.test($('.email').val()) && zusname.test($('.usname').val())
        if (zphone.test($('.phonea').val()) && zemail.test($('.email').val()) && zusname.test($('.usname').val()) && zpassword.test($('.password').val())) {
            console.log(1);
        }
    })
});