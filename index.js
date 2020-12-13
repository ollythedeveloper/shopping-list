$(function(){
    //function to add new item
    $('#js-shopping-list-form').submit(function(event) {
        //stop the default submission behavior
        event.preventDefault();
        //create a constant for the user input
        const userItem = $('#shopping-list-entry').val();
        //after item submitted reset the input field
        $('#shopping-list-entry').val('');
            
         $('.shopping-list').append(`<li>
         <span class="shopping-item">${userItem}</span>
         <div class="shopping-item-controls">
         <button class="shopping-item-toggle">
         <span class="button-label">check</span>
         </button>
         <button class="shopping-item-delete">
         <span class="button-label">delete</span>
         </button>
         </div>
         </li>`
        );
    });

    //function to delete item from list
    //when the 'shopping-item-delete' button is clickked the closest li will be removed
    $('.shopping-list').on ('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove();
    });

    //function to toggle checked item on list
    //when the 'shopping-item-toggle' button is clicked the 'shopping-item__checked'
    //class will toggle on the 'shopping-item' of the closest li
    $('.shopping-list').on ('click', '.shopping-item-toggle', function(event){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
});