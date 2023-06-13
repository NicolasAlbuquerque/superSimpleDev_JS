function clicked(param){
    let button = document.querySelector(param)

    if(!button.classList.contains('is-toggled')){
        button.classList.add('is-toggled')
    }else{
        button.classList.remove('is-toggled')
    }
}