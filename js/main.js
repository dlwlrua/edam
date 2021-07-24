$(document).ready(function(){
    $('header .sub').css('top','-55vw');
    $('header .sub').css('display','none');
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
            let other = $('header .sub');
            if( other.has(e.target).length === 0)
            { other.fadeOut(200);
            
        }
        });

        $("html, body").on('mousewheel DOMMouseScroll',function(){
            $('header .sub').fadeOut(200)
            
        });

        $('.hamburger_menu').css('display','none');
        $('.hamburger').click(function(){
            $('.hamburger_menu').slideDown();
        });
        $('.x_btn').click(function(){
            $('.hamburger_menu').slideUp();
        });
        
        
        









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
