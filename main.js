let $buttons = $('#buttonWrapper>button');
let $slides=$('#slides');
let $images=$slides.children('img')

let current=0;

makeFakeSlides();

$slides.hide().offset();
$slides.css({transform:'translateX(-320px)'}).show();

bindEvents(); // 绑定事件监听

$(previous).on('click',function(){
    goToSlide(current-1);
})
$(next).on('click',function(){
    goToSlide(current+1);
})

var timer=setInterval(function(){
    goToSlide(current+1);
},3000);

$('.main').on('mouseenter',function(){
    window.clearInterval(timer);
}).on('mouseleave',function(){
    timer=setInterval(function(){
        goToSlide(current+1);
    },3000);
})

document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer=setInterval(function(){
            goToSlide(current+1);
        },3000);
    }
})













/*以下是函数部分 */
function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true);
    let $lastCopy = $images.eq($images.length-1).clone(true);
    $slides.append($firstCopy);
    $slides.prepend($lastCopy);
}

function bindEvents(){
    $('#buttonWrapper').on('click','button',function(e){ //点我里面的button才触发
        let $button = $(e.currentTarget)
        let index = $button.index();

        goToSlide(index);    
    })
}

function goToSlide(index){
    if(index>$buttons.length-1){
        index=0;
    }else if(index<0){
        index=$buttons.length-1;
    }
    if(current === $buttons.length -1 && index===0){
        // 最后一张到第一张
        $slides.css({transform:`translateX(${-($buttons.length+1)*320}px)`})
        .one('transitionend',function(){
            $slides.hide().offset()
        $slides.css({transform:'translateX(-320px)'}).show();
        })
    }else if(current ===0 && index===$buttons.length-1){
        // 第一张到最后一张
        $slides.css({transform:'translateX(0px)'})
        .one('transitionend',function(){
            $slides.hide().offset()
        $slides.css({transform:`translateX(${-$buttons.length * 320}px)`}).show();
        })
    }else{
        $slides.css({transform:`translateX(${-(index+1)*320}px)`});
    }
    $buttons.removeClass('active');
    $buttons.eq(index).addClass('active');
    current = index;
}