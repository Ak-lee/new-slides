let $buttons = $('#buttonWrapper>button');
let $slides=$('#slides');
let $images=$slides.children('img')

let current=0;

makeFakeSlides();

$slides.hide().offset();
$slides.css({transform:'translateX(-320px)'}).show();

bindEvents(); // 绑定事件监听















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
        if(current === $buttons.length -1 && index===0){
            $slides.css({transform:`translateX(${-($buttons.length+1)*320}px)`})
            .one('transitionend',function(){
                $slides.hide().offset()
            $slides.css({transform:'translateX(-320px)'}).show();
            })
            console.log(1)
        }else if(current ===0 && index===$buttons.length-1){
            $slides.css({transform:'translateX(0px)'})
            .one('transitionend',function(){
                $slides.hide().offset()
            $slides.css({transform:`translateX(${-$buttons.length * 320}px)`}).show();
            })
            console.log(2)
        }else{
            $slides.css({transform:`translateX(${-(index+1)*320}px)`});
            console.log(3)
        }
        current = index;
    })
    
}