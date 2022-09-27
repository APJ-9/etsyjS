function mediaFun(){
    if(window.innerWidth > 700){
        document.body.style.backgroundColor = 'red'
        console.log('matches')
    }
}

// const x = window.matchMedia('(max-width:700px)')
// console.log(x)
window.addEventListener('resize',mediaFun)
// mediaFun(x)