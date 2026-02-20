
function changeBackground(Color) {
    document.body.style.backgroundColor = Color;
}

const themeBtn = document.getElementById("theme-btn")
const h1 = document.getElementById("h1")

themeBtn.addEventListener('click', () => {
    // console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor

    if(!currentColor || currentColor === 'white'){
        changeBackground('black')
        themeBtn.innerText = 'Light Mode'
        themeBtn.style.color = 'chocolate'
        h1.style.color = 'chocolate'
    }else{
        changeBackground('white')
        themeBtn.innerText = 'Dark Mode'
        themeBtn.style.color = ''
        h1.style.color = ''
    }
    
})
