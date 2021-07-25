$(document).ready(function(){
    $('.pc_header .sub').css('top','-55vw');
    $('.pc_header .sub').css('display','none');
        $('.menu > ul > li > a').click(function(){
            $(this).parent('li').children('ul').css('top','-2.8vw');
            $(this).parent('li').children('ul').css('display','block');
            $(this).parent('li').siblings('li').children('ul').css('top','-55vw');
            $(this).parent('li').siblings('li').children('ul').css('display','none');
        });
        $('.sub_top').click(function(){
            $(this).parent('ul').fadeOut(200);
            
        });
        
        $(document).mouseup(function (e){
            let other = $('.pc_header .sub');
            if( other.has(e.target).length === 0)
            { other.fadeOut(200);
            
        }
        });

        $("html, body").on('mousewheel DOMMouseScroll',function(){
            $('.pc_header .sub').fadeOut(200)
            
        });

        $('.hamburger_menu').css('display','none');
        $('.pc_header .hamburger').click(function(){
            $('.hamburger_menu').slideDown();
        });
        $('.hamburger_menu .x_btn').click(function(){
            $('.hamburger_menu').slideUp();
        });
        
        //모바일
        $('.mo_hamburger_menu').css('display','none');
        $('.mo_header .hamburger a').click(function(){
            $('.mo_hamburger_menu').slideDown();
        });
        $('.mo_hamburger_menu .x_btn').click(function(){
            $('.mo_hamburger_menu').slideUp();
        });

        $('.mo_hamburger_menu .ham_menu > ul > li .sub').hide();
        $('.mo_hamburger_menu .ham_menu > ul > li > p').click(function(){
            $(this).parent('li').children('.sub').slideToggle();
            $(this).parent('li').siblings('li').children('.sub').slideUp();
        });
        // $(document).mouseup(function (e){
        //     let other = $('.mo_hamburger_menu .ham_menu > ul > li .sub');
        //     if( other.has(e.target).length >= 0)
        //     { other.slideUp();
        
        //     }
        // });

        








//         $("#section0").css("transition","all 3s");
//         var arr = ["#fff","#333"];
//         function changeColor(){
//         $("#section0").css({
//                 backgroundColor : arr[parseInt(Math.random() * 2)]
//             });
//         }
// changeColor();
// setInterval(changeColor,3000);


        
        
    //     $('.header2').hide();
    // $('.header1').show();
    // setInterval(function(){
    //     $('.header1').fadeOut(3000).next(3000).fadeIn(3000).end(3000).appendTo('.header2');
    // }, 8000);
});//.ready end
