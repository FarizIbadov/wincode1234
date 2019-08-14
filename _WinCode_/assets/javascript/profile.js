$(document).ready(function(){
    
    function swapping(selector){
        let swap = $(selector).attr('class')
        let switchs = $(selector).data('vis') 
        $(selector).attr('class',switchs)
        $(selector).data('vis',swap)

    }
    
    $('#profil').on('click',function(){
        swapping("#profile_info")   
        $('#car_publish').attr('class','none')
        $('#car_publish').data('vis','visible')     
    })

    $('#adding').hover(function () {
            swapping('#car_publish')
        }, function () {
            // out
            //swapping('#car_publish')
        }
    );

    $(document).on('click',function(){
        
    })


})