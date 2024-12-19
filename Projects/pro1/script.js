document.querySelector('#increase').addEventListener('click', function(){
    let a = parseInt(document.querySelector('#count').innerHTML, 10);
    if(isNaN(a))
        a = 0;
    a += 1;
    document.querySelector('#count').innerHTML = a;
})

document.querySelector('#reset').addEventListener('click', function(){
    document.querySelector('#count').innerHTML = 0;
})

document.querySelector('#decrease').addEventListener('click', function(){
    let a = document.querySelector('#count').innerHTML;
    if(a >= 1){
        a -= 1;
        document.querySelector('#count').innerHTML = a;
    }
    else
        document.querySelector('#count').innerHTML = "Uh-oh";
})