

function clickFunc(parameter){
  console.log(parameter)
}




window.onload = (() => {

    
    //let storage = window.localStorage;

    //let correctOrder = ['ANTHROPOLOGY', 'HERBOLOGY', 'PSYCHOLOGY', 'THEOLOGY', 'CHICKEN', 'ELK', 'FISH', 'RABBIT', 'BEER', 'CHAMPAGNE', 'VODKA', 'COGNAC', 'GOETHE', 'KAFKA', 'NIETZSCHE', 'TOLSTOY', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK'];
    //let correctOrder = ['BEER', 'ANTHROPOLOGY', 'CHAMPAGNE', 'CHICKEN', 'COGNAC', 'ELK', 'FISH', 'GOETHE', 'HERBOLOGY', 'KAFKA', 'NIETZSCHE', 'PSYCHOLOGY', 'RABBIT', 'THEOLOGY', 'TOLSTOY', 'VODKA', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK'];
    let correctOrder = ['BLANK', 'BLANK', 'BLANK', 'BLANK',  'BLANK', 'BLANK', 'BLANK', 'BLANK',  'BLANK', 'BLANK', 'BLANK', 'BLANK',  'BLANK', 'BLANK', 'BLANK', 'BLANK',    'THEOLOGY', 'RABBIT', 'VODKA', 'TOLSTOY',     'PSYCHOLOGY', 'ELK', 'CHAMPAGNE', 'GOETHE',       'ANTHROPOLOGY', 'CHICKEN', 'BEER',  'KAFKA',     'HERBOLOGY', 'FISH', 'COGNAC','NIETZSCHE'];


    let dropzones = document.querySelectorAll('.dropzone');

    let droppable = new Draggable.Swappable(
        dropzones,
        {
            draggable: '.draggable',
            dropzone: '.dropzone',
            mirror: { constrainDimensions: true }
        }
    );





 openIntroVideoFunction();






    

});

function arraysEqual(a1, a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1) == JSON.stringify(a2);
}

$(function () {
    var $curParent, Content;
    $(document).delegate("span", "click", function () {
        if ($(this).closest("s").length) {
            Content = $(this).parent("s").html();
            $curParent = $(this).closest("s");
            $(Content).insertAfter($curParent);
            $(this).closest("s").remove();
        }
        else {
            $(this).wrapAll("<s />");
        }
    });
});


