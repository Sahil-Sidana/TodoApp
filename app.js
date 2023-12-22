//mark done
$('li').on('click',function(){
    $(this).toggleClass('completed');
});

//Creating a todo
$('#inp').on('keypress',function(e){
    if(e.which===13){          //Enter
        const todoText=$('#inp').val();
        // console.log(todoText);
        $('#list').append(`<li><span>X </span> ${todoText}</li>`);
        $('#inp').val('');
    }
});

//delete
$('span').on('click',function(){
    $(this).parent().remove();
});
