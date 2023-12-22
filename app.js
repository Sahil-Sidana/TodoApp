//mark done
$('#list').on('click','li',function(){
    $(this).toggleClass('completed');
});

//Creating a todo
$('#inp').on('keypress',function(e){
    if(e.which===13){          //Enter
        const todoText=$('#inp').val();
        // console.log(todoText);
        $('#list').append(`<li><span><i class="fa-regular fa-trash-can"></i> </span> ${todoText}</li>`);
        $('#inp').val('');
    }
});

//delete
$('#list').on('click','span',function(e){

    $(this).parent().fadeOut(550,function(){
        $(this).remove();
    });

    e.stopPropogation(); //stop event bubbling
});

//+
$('h1 span').on('click',function(){
    $('#inp').fadeToggle();
})

