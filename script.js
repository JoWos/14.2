'use strict';

$(function(){   
    var span = $('span');

    span.each(function(index, elem){
        if(index % 2 == 0){
            $(elem).css('color', 'red');
        }
    });

    var par = $('p');

    par.each(function(index, elem){
        var button = '<button class="btn" data-temp=" ' + index + ' ">Click me</button>';
        $(elem).append(button);
    });

    $('button').click(function(){
        alert($(this).attr('data-temp'));
    });
});

