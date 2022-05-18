const icon = document.getElementById('icon')
const container = document.querySelector('.main')
icon.onclick = ()=>{
    container.classList.toggle('dark-theme')
    if(container.classList.contains('dark-theme')){
        icon.src='./accets/dark theme icon/sun.png'
    }else{
        icon.src='./accets/dark theme icon/moon.png'
    }
}