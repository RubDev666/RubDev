//almacenar el ancho de cada navlink del header, solo para tamaños de escritorio
let mainWidth;
let aboutWidth;
let portafolioWith;
let contactWidth;

//el ancho de los navlinks no incluye el padding que añadimos en el css, por eso lo pongo aqui por si se requiere cambiar o añadir mas links, asi no tenemos que cambiar manualmente uno por uno
//solo para tamaño de escritorio
const paddingLi = 60;

//el gap que tiene el contenedor 'ul', esta medida es igual en versiones mobile y de escritorio, y con esto lo tomamos de referencia para calcular la distancia que se va a arrastrar el 'border-drag'
const gapUl = 20;

//version mobile unicamente
//la altura fija de cada link, util para medir el desplazamiento del 'border-drag'
const heightNavLink = 40;

//todos los queryselectors de forma global
let sections;
let borderDrag;
let sidemenu;
let navLinksContainer;

export function getQuerySelectors() {
    //si hay error usar...
    //if(typeof window !== null) {

    sections = document.querySelectorAll('section[id]');
    borderDrag = document.querySelector('.border-drag');
    sidemenu = document.querySelector('#sidemenu');
    navLinksContainer = document.querySelector('.navLinks-container');

    //si cae en una pagina no encontrada
    if(!sections.length) {
        borderDrag.style.display = 'none';
    } else {
        borderDrag.style.display = 'block';
    }
}

export function scrollNavMobile() {
    sections.forEach(section => {
        const ubicacion = section.getBoundingClientRect().top;

        let navLink;

        if(section.id === 'main') {
            navLink = document.querySelector('#sidemenu .main-link');
        } else {
            navLink = document.querySelector('#sidemenu a[href*=' + section.id + ']');
        }

        if (ubicacion >= -(section.clientHeight - 100) && ubicacion < 100) {
            navLink.classList.add('navlink-active');

            //aqui solo se hace manualmente los calculos con las variables de medidas que ya tenemos, igual si algo no cuadra, hay que apoyarse de devtools y revisar bien los tamaños de cada cosa
            if (section.id === 'main') {
                borderDrag.style.top = heightNavLink + 'px';
            } else if (section.id === 'about') {
                borderDrag.style.top = (heightNavLink * 2) + gapUl + 'px';
            } else if (section.id === 'portafolio') {
                borderDrag.style.top = (heightNavLink * 3) + (gapUl * 2) + 'px';
            } else if (section.id === 'contact') {
                borderDrag.style.top = (heightNavLink * 4) + (gapUl * 3) + 'px';
            }
        } else {
            navLink.classList.remove('navlink-active');
        }
    })

    //agregar la transicion, RECUERDA QUE EN EL EVENTO 'RESIZE', LO QUITAMOS PARA EVITAR ERRORES DE DISEÑO
    navLinksContainer.style.transition = 'right .5s ease-in-out';
    borderDrag.style.transition = 'all .2s ease-in-out';

    borderDrag.classList.add('border-drag-color');
    borderDrag.style.left = '50px';
    borderDrag.style.width = '100%';

    //otra alternativa, codigo similar
    /*sections.forEach(section => {
        const scrollY = window.scrollY;

        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 60; //la altura del header

        const sectionClass = document.querySelector('#sidemenu a[href*=' + section.id + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('navlink-active');

            if (section.id === 'main') {
                marcado.style.top = '40px';
            } else if (section.id === 'about') {
                marcado.style.top = '100px';
            } else if (section.id === 'portafolio') {
                marcado.style.top = '160px';
            } else if (section.id === 'contact') {
                marcado.style.top = '220px';
            }
        } else {
            sectionClass.classList.remove('navlink-active');
        }
    })*/
}

export function scrollNavPc() {
    //evento 'resize' al cambiar a tamaño de pc
    borderDrag.style.top = '0px'; 

    sections.forEach(section => {
        const ubicacion = section.getBoundingClientRect().top;

        let sectionClass;

        if(section.id === 'main') {
            sectionClass = document.querySelector('#sidemenu .main-link');
        } else {
            sectionClass = document.querySelector('#sidemenu a[href*=' + section.id + ']');
        }

        if (ubicacion >= -(section.clientHeight - 100) && ubicacion < 100) {
            sectionClass.classList.add('navlink-active');

            //aqui solo se hace manualmente los calculos con las variables de medidas que ya tenemos, igual si algo no cuadra, hay que apoyarse de devtools y revisar bien los tamaños de cada cosa
            if (section.id === 'main') {
                borderDrag.style.left = '0px';
                borderDrag.style.width = mainWidth + 'px';
            } else if (section.id === 'about') {
                borderDrag.style.left = mainWidth + gapUl + 'px';
                borderDrag.style.width = aboutWidth + 'px';
            } else if (section.id === 'portafolio') {
                borderDrag.style.left = mainWidth + aboutWidth + (gapUl * 2) + 'px';
                borderDrag.style.width = portafolioWith + 'px';
            } else if (section.id === 'contact') {
                borderDrag.style.width = contactWidth + 'px';
                borderDrag.style.left = mainWidth + aboutWidth + portafolioWith + (gapUl * 3) + 'px';
            }
        } else {
            sectionClass.classList.remove('navlink-active');
        }
    })

    navLinksContainer.style.transition = 'right .5s ease-in-out';
    borderDrag.style.transition = 'all .2s ease-in-out';

    borderDrag.classList.add('border-drag-color');
}

//obtener el ancho de los navlinks para ajustar el tamaño del border-drag
export function widthLinks() {
   /*const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const navLink = document.querySelector('#sidemenu a[href*=' + section.id + ']');

        if(section.id === 'main') {
            mainWidth = navLink.clientWidth + paddingLi;
        } else if (section.id === 'about') {
            aboutWidth = navLink.clientWidth + paddingLi;
        } else if (section.id === 'portafolio') {
            portafolioWith = navLink.clientWidth + paddingLi;
        } else if (section.id === 'contact') {
            contactWidth = navLink.clientWidth + paddingLi;
        }
    })*/

    const mainLink = document.querySelector('#sidemenu .main-link');
    const aboutLink = document.querySelector('#sidemenu a[href*=about]');
    const portafolioLink = document.querySelector('#sidemenu a[href*=portafolio]');
    const contactLink = document.querySelector('#sidemenu a[href*=contact]');

    mainWidth = mainLink.clientWidth + paddingLi;
    aboutWidth = aboutLink.clientWidth + paddingLi;
    portafolioWith = portafolioLink.clientWidth + paddingLi;
    contactWidth = contactLink.clientWidth + paddingLi;
}

//solo para evitar el bug cuando cambiamos de ruta
export function classRemove() {
    document.querySelector('#sidemenu .main-link').classList.remove('navlink-active');
    document.querySelector('#sidemenu a[href*=contact]').classList.remove('navlink-active');
    document.querySelector('#sidemenu a[href*=about]').classList.remove('navlink-active');
}