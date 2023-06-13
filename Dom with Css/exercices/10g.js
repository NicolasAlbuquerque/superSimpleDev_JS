function clicked(param){
    let button = document.querySelector(param)

    

    turnOff()

    if(!button.classList.contains('is-toggled')){
        button.classList.add('is-toggled')
    }else{
        button.classList.remove('is-toggled')
    }
}

function turnOff(){
    const previousButton= document.querySelector('.is-toggled');

    if(previousButton){
        previousButton.classList.remove('is-toggled')
    }

}