let wordlimit=()=>{
    $(".title, .des").each(function() {
        var textMaxChar = $(this).attr('data-max-characters');
    
        length = $(this).text().length;
        if(length > textMaxChar) {
            $(this).text($(this).text().substr(0, textMaxChar) + '...');
        }
    });
}