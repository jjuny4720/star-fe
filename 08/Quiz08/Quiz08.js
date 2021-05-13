const $box = document.getElementById('box');
const $btn = document.getElementById('btn');
const $max = document.getElementById('max');
const $min = document.getElementById('min');


let randomNum = 0;
let boxNum = 0;
let timerId = null;

function getrandomNum() {
  const max = $max.value;
  const min = $min.value;
  randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  animation();
}

function animation() 
{
  boxNum = randomNum - 50;
  $btn.disabled = true;

  timerId = setInterval(() => 
  {
    $box.innerHTML = boxNum;
    boxNum += 1;

    if (boxNum == randomNum) 
    {
      $btn.disabled = false;
      clearInterval(timerId);
    }
  }
}

$btn.addEventListener('click', getrandomNum);
