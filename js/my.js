const button = document.querySelector('.title1')
let div = document.createElement('div')

div.className= 'alert'
div.innerHTML = '<li>Pieczywo 3 szt </li>` `<li>Skrzydelka 5 szt </li>``<li> Lodeczki 170 g. </li>``<li> Rollsy 1.5 szt</li>'
let numberOfSamples




button.addEventListener('touchstart', createBox)

function createBox(){
    document.body.append(div)
    div.innerHTML = `<li>Pieczywo 3 szt </li>` `<li>skrzydelka 5 szt  odeczki 170 g </li> rollsy 1.5 szt`
     
}

button.addEventListener('click',  createBox)

function createBox(){
    document.body.append(div)
    div.innerHTML = `<li>Pieczywo 3 szt</li>`
     `<li>krzydelka 5 szt </li>` 
     `<li>lodeczki 170 g.</li>`
      `<li>rollsy 1.5 szt </li>`

}