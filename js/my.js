const button = document.querySelector('.title')
let div = document.createElement('div')
let num = document.getElementById('optical')
div.className= 'alert'
div.innerHTML = 'Pieczywo 3 szt, skrzydelka 5 szt, lodeczki 170 g., rollsy 1.5 szt'
let numberOfSamples
let sum
let number


button.addEventListener('touchstart', createBox)

function createBox(){
    document.body.append(div)
     number = Number(num.value)
     sum = (number / 1.028) * 50 
     div.innerHTML = `Pieczywo 3 szt, skrzydelka 5 szt, lodeczki 170 g., rollsy 1.5 szt`
     
     div.style.backgroundColor = 'pink'
    //  if (( sum > 35 )|| (sum < 55)){
    //     div.style.backgroundColor = 'green'
    //  }
}

button.addEventListener('click',  createBox)

function createBox(){
    document.body.append(div)
    number = Number(num.value)
    
    sum = ( number/ 1.028) * 50 
    if ((sum < 35) || (sum > 50)){
        div.style.backgroundColor = 'pink'}
    //     if (( sum > 35 )|| (sum < 55)) {
    //     div.style.backgroundColor = 'green'
    //  }
    div.innerHTML = `Pieczywo 3 szt,
     skrzydelka 5 szt, 
     lodeczki 170 g.,
      rollsy 1.5 szt`

}