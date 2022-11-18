console.log("연결확인");

const arrowUp = document.querySelector('.arrow-up');

//arrow-up버튼 눌렀을 때
arrowUp.addEventListener('click',function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});

//arrow-up버튼 나타나기
document.addEventListener('scroll',function(){
    if (window.scrollY > 300){
        arrowUp.classList.add('show');
    } else{
        arrowUp.classList.remove('show');
    }
});

//네비게이션
const $gnbContainer = document.querySelector('header>.headerInner>.gnb>.gnbContainer');
const $lnb = document.querySelectorAll('header>.headerInner>.gnb>.gnbContainer>li>.lnb');
const $bg_lnb = document.querySelector('.bg_lnb');

$gnbContainer.addEventListener('mouseenter',function(){
    $bg_lnb.style.display = 'block';
    for(let i=0;i<$lnb.length;i++){
        $lnb[i].style.display = 'block';
    }
});

$gnbContainer.addEventListener('mouseleave',function(){
    $bg_lnb.style.display = 'none';
    for(let i=0;i<$lnb.length;i++){
        $lnb[i].style.display = 'none';
    }        
});

$bg_lnb.addEventListener('mouseenter',function(){
    $bg_lnb.style.display = 'block';
    for(let i=0;i<$lnb.length;i++){
        $lnb[i].style.display = 'block';
    }
});

$bg_lnb.addEventListener('mouseleave',function(){
    $bg_lnb.style.display = 'none';
    for(let i=0;i<$lnb.length;i++){
        $lnb[i].style.display = 'none';
    }        
});

