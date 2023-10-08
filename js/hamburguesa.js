// ANIMACIÓN DEL MOVIMIENTO
const container = document.querySelector('.container1');
const card = document.querySelector('.card1');

// ARTÍCULOS DE MOVIMIENTO
const title = document.querySelector('.info h1');
const subTitle = document.querySelector('.info h2');
const burger = document.querySelector('.burger img');
const bienvenido = document.querySelector('.bienvenido');

// EVENTO DE ANIMACIÓN DE MOVIMIENTO
container.addEventListener('mousemove', (e) => {
    // console.log('x' + e.pageX);
    // console.log('y' + e.pageY);
    let xAxis = ((window.innerWidth / 2) - e.pageX) / -14;
    let yAxis = ((window.innerHeight / 2) - e.pageY) / 26;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // console.log('xAxis' + xAxis + 'yAxis' + yAxis);
})

// ANIMAR ON
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    burger.classList.add('animBurger');
    title.classList.add('animTitle');
    subTitle.classList.add('animSubTitle');
    bienvenido.classList.add('animBienvenido');
})

// ANIMAR OFF
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all .3s ease-out';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    burger.classList.remove('animBurger');
    title.classList.remove('animTitle');
    subTitle.classList.remove('animSubTitle');
    bienvenido.classList.remove('animBienvenido');
})