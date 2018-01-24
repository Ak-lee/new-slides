let $buttons = $('#buttonWrapper>button');
let $slides=$('#slides');
let $images=$slides.children('img')
let $firstCopy = $images.eq(0).clone(true);
let $lastCopy = $images.eq($images.length-1).clone(true);
let current=0;

$slides.append($firstCopy);
$slides.prepend($lastCopy);
$slides.hide().offset();
$slides.css({transform:'translateX(-320px)'}).show();

$buttons.eq(0).on('click',function(){
    console.log('current'+current);
    if(current==5){
        $slides.css({transform:'translateX(-2240px)'})
        .one('transitionend',function(){
            $slides.hide().offset()
        $slides.css({transform:'translateX(-320px)'}).show();
        })
    }else{
        $slides.css({transform:'translateX(-320px)'});
    }
    current=0;
    
})

$buttons.eq(1).on('click',function(){
    $slides.css({transform:'translateX(-640px)'});
    current=2;
})
$buttons.eq(2).on('click',function(){
    $slides.css({transform:'translateX(-960px)'});
    cuurent=3;
})
$buttons.eq(3).on('click',function(){
    $slides.css({transform:'translateX(-1280px)'});
    current=4;
})
$buttons.eq(4).on('click',function(){
    $slides.css({transform:'translateX(-1600px)'});
})

$buttons.eq(5).on('click',function(){
    if(current==0){
        $slides.css({transform:'translateX(0px)'})
        .one('transitionend',function(){
            $slides.hide().offset()
        $slides.css({transform:'translateX(-1920px)'}).show();
        })
    }else{
        $slides.css({transform:'translateX(-1920px)'});
    }
    current=5;
})
