function setUpPieces() {
    //select all the divs with class 'piece'
    //add the 'light' class to half of them
    //add the 'dark' to the other half
    $('.piece:even').addClass('light');
    $('.piece:odd').addClass('dark');
    
}

function movePieceTo($piece,newTop,newLeft) {
    //set the css 'top' and 'left'
    //attributes of the passed piece
    //to the arguments newTop and newLeft
    $piece.css('top',newTop);
    $piece.css('left',newLeft);
    
}

function setUpBoard() {
    //iterate through all of the divs 
    //with class `square`
    //figure out whether each one should be
    //light or dark, and assign the proper class
    
    //heres a helper function that takes a number between
    //0 and 63 (inclusive) and returns 1 if the square should be
    //dark, and 0 if the square should be light
    function lightOrDark(index) {
        var x = index % 8;
        var y = Math.floor(index / 8);
        var oddX = x % 2;
        var oddY = y % 2;
        return (oddX ^ oddY);
    }

    $('.square').each(function(index,square) {
        var test = lightOrDark(index);
        if (test === 1) {
            $(square).addClass('dark'); }
        else {
            $(square).addClass('light');
        }

    });    


}

function toggleSelect($piece) {
    //if $piece has the class 'selected',
    //remove it
    if($piece.hasClass('selected')) {
        $piece.removeClass('selected');
    }
    //if $piece does not have the class 'selected'
    //make sure no other divs with the class 'piece'
    //have that class, then set $piece to have the class
    if (!$piece.hasClass('selected')) {
        $('.piece').removeClass('selected');
        $piece.addClass('selected');
    }
}

function incrementMoveCount() {
    //gets the html of the span with id
    //moveCount
    //turns it into a number
    //increments it by one
    //sets the html of the span with id moveCount
    //to the new move count
    var moveCount = parseInt($('#moveCount').html());
    moveCount++;
    $('#moveCount').html(moveCount);
}