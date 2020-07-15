var input = document.querySelectorAll('input')
for(var i = 0; i < input.length; i++){
    var p = input[i]
    p.addEventListener('mouseover', function(){
        this.classList.add('overlay')
    })
    p.addEventListener('mouseout', function(){
        this.classList.remove('overlay')
    })
}