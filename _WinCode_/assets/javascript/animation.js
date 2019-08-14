


$(document).ready(function(){
    
    $('.search').animate({opacity:'1'},5000)
    setInterval(putBackGroundImage,6000)
    


    function putBackGroundImage(){
        index2 = index
        chooseRandom()
        $('#body' ).animate({opacity:'1'},1500)
        $('#body').attr('class','row ' + car + ' col-sm-12')
        setTimeout(function(){
            $('#body' ).animate({opacity:'0'},1500)
            //chooseRandom()
        },3000)
    
        
    }

    function chooseRandom(){
        carImgs = ['lambo','bmw','ferrari','mercedes']

        index = Math.floor(Math.random() * carImgs.length)
        
        while(true){
            if(index === index2){
                index = Math.floor(Math.random() * carImgs.length)
            }
            else{
                break
            }
        }
        car = carImgs[index]
    }
})