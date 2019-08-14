$(document).ready(function(){
    $('#search_button').on('click',function(){
        WinCode = $('#search_bar').val().trim()
        if(WinCode.length === 17){
            $('#search_bar').val('')
            location.href = "./car_info.html"
            putInfo()
                
            
        }
    })
})


function putInfo(){
    
    $('#make').html(cars.WinCode.Make)
    console.log(cars.WinCode.Make)
    $('#model').html(cars.WinCode.Model)
    $('#year').html(cars.WinCode.Year)
    $('#type').html(cars.WinCode.Type)
    $('#manufacter').html(cars.WinCode.Manufacturer)
    $('#manufacter_in').html(cars.WinCode.Manufacturedin)
    $('#plant').html(cars.WinCode.Plant)
    $('#seq_num').html(cars.WinCode.SeqNum)
}