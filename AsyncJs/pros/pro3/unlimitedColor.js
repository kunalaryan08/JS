let startTime;

function colorGenerate(){
  let hex = '0123456ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; ++i){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}

function change(){
  document.body.style.backgroundColor = colorGenerate();
}

document.querySelector('#start').addEventListener('click', function(){
  if(!startTime){
    startTime = setInterval(change, 1000);
  }
})
document.querySelector('#stop').addEventListener('click', function(){
  clearInterval(startTime);
  startTime = null;
})