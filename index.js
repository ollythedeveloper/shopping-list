$(function(){
    $('#js-shopping-list-form').submit(function(event) {
            //stop the default submission behavior
            event.preventDefault();
            //create a constant for the user input
            const userItem = $('#shopping-list-entry').val();
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
                </div></li>`);

            });
        });