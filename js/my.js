const button = document.querySelector('.title1')
const button2 = document.querySelector('.title2')
const button3 = document.querySelector('.title3')
const button4 = document.querySelector('.title4')
let div = document.createElement('div')
let div2 = document.createElement('div2')
let div3 = document.createElement('div3')
let div4 = document.createElement('div4')

div.className = 'alert'
div2.className = 'alert2'
div3.className = 'alert3'
div4.className = 'alert4'


div.innerHTML = '<p>Personal Box </p><li>Pieczywo 2 szt </li><li>Skrzydelka 3 szt </li><li> Lodeczki 150 g. </li><li> Rollsy 1 szt</li>'
div2.innerHTML = '<p>Mój Box </p><li>Pieczywo 2.5 szt </li><li>Skrzydelka 3 szt </li><li> Lodeczki 150 g. </li><li> Rollsy 1 szt</li>'
div3.innerHTML = '<p>Nasz Box </p><li>Pieczywo 3 szt </li><li>Skrzydelka 5 szt </li><li> Lodeczki 170 g. </li><li> Rollsy 1.5 szt</li>'
div4.innerHTML = '<p>Wasz/Box XXL</p><li>Pieczywo 3 szt </li><li>Skrzydelka 6 szt </li><li> Lodeczki 200 g. </li><li> Rollsy 1.5 szt</li>'







button.addEventListener('touchstart', createBox)

function createBox(){
    document.body.prepend(div)
    // div.innerHTML = `<li>Pieczywo 3 szt </li><li>skrzydelka 5 szt  odeczki 170 g </li> rollsy 1.5 szt`
     
}

button.addEventListener('click',  createBox)

function createBox(){
    document.body.prepend(div)
    // div.innerHTML = 
    // `<li>Pieczywo 3 szt </li>`
    // `<li>krzydelka 5 szt</li>` 
    // `<li>lodeczki 170 g.</li>`
    // `<li>rollsy 1.5 szt </li>`

}

button2.addEventListener('touchstart', createBox2)

function createBox2(){
    document.body.prepend(div2)
    // div2.innerHTML = `<li>Pieczywo 5 szt </li><li>skrzydelka 5 szt  odeczki 170 g </li> rollsy 1.5 szt`
     
}

button2.addEventListener('click',  createBox2)

function createBox2(){
    document.body.prepend(div2)
    // div2.innerHTML = 
    // `<li>Pieczywo 5 szt </li>`
    // `<li>krzydelka 5 szt</li>` 
    // `<li>lodeczki 170 g.</li>`
    // `<li>rollsy 1.5 szt </li>`

}

button3.addEventListener('touchstart', createBox3)

function createBox3(){
    document.body.prepend(div3)
    // div3.innerHTML = `<li>Pieczywo 3 szt </li><li>skrzydelka 5 szt  odeczki 170 g </li> rollsy 1.5 szt`
     
}

button3.addEventListener('click',  createBox3)

function createBox3(){
    document.body.prepend(div3)
    // div3.innerHTML = 
    // `<li>Pieczywo 3 szt </li>`
    // `<li>krzydelka 5 szt</li>` 
    // `<li>lodeczki 170 g.</li>`
    // `<li>rollsy 1.5 szt </li>`

}

button4.addEventListener('touchstart', createBox4)

function createBox4(){
    document.body.prepend(div4)
    // div4.innerHTML = `<li>Pieczywo 3 szt</li><li>skrzydelka 5 szt  Lodeczki 170 g </li> rollsy 1.5 szt`
     
}

button4.addEventListener('click',  createBox4)

function createBox4(){
    document.body.prepend(div4)
    // div4.innerHTML = 
    // `<li>Pieczywo 3 szt </li>`
    // `<li>krzydelka 5 szt</li>` 
    // `<li>lodeczki 170 g.</li>`
    // `<li>rollsy 1.5 szt </li>`

}