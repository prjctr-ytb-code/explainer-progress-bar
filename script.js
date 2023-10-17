const progress = document.querySelector('.progress-bar');
const percent = document.querySelector('.progress-percent');
const button = document.querySelector('.progress-button');


function increase() {
  progress.value += 10;
  progress.innerHTML = progress.value+'%';
  if(progress.value < 100) {
    percent.textContent = progress.value+'%'
  }
  else {
    percent.innerHTML = '100%', button.style.visibility = 'hidden' 
  }
}

button.addEventListener('click', increase);