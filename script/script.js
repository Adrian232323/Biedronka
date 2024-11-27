document.addEventListener('DOMContentLoaded', function () { 

    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')
    
    function addShadow() {
        
        if(window.scrollY >= 250) {
            nav.classList.add('shadow-bg')
    
        }
        else{
            nav.classList.remove('shadow-bg')
        }
    }
    
    
    
    
    
    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
    
    
    
    
    
    
    
    window.addEventListener('scroll', addShadow)
    
    
    
    
    
    
    
    
    
    
    
    })

const btn = document.querySelector('.scroll-to-top')  
let root = document.documentElement;

const handleScrollBar = () => {
	const scroll = window.scrollY

	const leftToScroll = document.body.getBoundingClientRect().height - window.innerHeight
	// console.log(`wysokość strony ${document.body.getBoundingClientRect().height}`);
	// console.log(`wysokość viewportu ${window.innerHeight}`);
	// console.log(leftToScroll);

	const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100)
	

	root.style.setProperty('--scroll-width', `${scrollBarWidth}%`)

	if(scrollBarWidth > 40) {
		btn.classList.add('active-scroll-to-top')
	} else {
		btn.classList.remove('active-scroll-to-top')
	}
}
const scrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	})
}
