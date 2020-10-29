//REnders of the main page and functions for the main layout of the page

function generateWebApp() {
  $('div.webAppBody').html(topPageOne());
  debugger
  $('div.container').html(bottomPageOne());
}

function addURL() { 
  $('div.webAppBody').html(topPageTwo());
  $('div.container').html(bottomPageTwo());
}

//what happens when you select the dropdown menu
function stars() {

};

//will consist of adding a new bookmark and filterby
function topPageOne() {
  let topPageOne = `
  <div class="startPage">
    <h2>whats your URL</h2>
      <input type="text">
        <br>
        <form>
          <button id="newPage" type="button">+ New</button>
          <select id="filter" onchange="stars()" Value="Filter" >
          <option>Filter By</option>
          <option>5 stars</option>
          <option>4 stars</option>
          <option>3 stars</option>
          <option>2 stars</option>
          <option>1 stars</option>
          </select>
      <!--<button class="filter" >Filter By</button>-->

        </form>    
        </div>`;
        return topPageOne;
      };
      

//will consist of url text box to add a book mark
function topPageTwo() {
  let topPageTwo = `
  <div class="startPage">
  <p>Add New Bookmark</p>
      <input type="text" value="Enter Link Here">
  </div>`;
  return topPageTwo;
};

//will have an title 
function bottomPageOne() {
  let bottomPageOne =`
  <div>
    <div class="container">
      <form id="js-shopping-list-form">
        <label for="shopping-list-entry">Add an item</label>
        <input type="text" name="shopping-list-entry" class="js-shopping-list-entry" placeholder="e.g., broccoli"></input>
        <button type="submit">Add item</button>
      </form>
      <div>
        <input type="checkbox" id="filter-checked" class="filter-checked js-filter-checked" />
        <label for="filter-checked">Hide Checked</label>
      </div>
      <div>
        <ul class="shopping-list js-shopping-list">
        </ul>
      </div>
    

      <section class="startPageFlex">
          <div class="startPageFruit">
          </div>
      </section>
    </div>
  </div>`
return bottomPageOne;

};

//will consist of bookmarks that have already been made (will need a varible to store this info as an array)
function bottomPageTwo() {
  debugger
  let bottomPageTwo = `

  <section>
    <div class="one">
      <input type="text" value="Title goes here"></input>
    </div>  
    <div class="urlDesc">
      <option value='5'>⭐⭐⭐</option>
      <br>
      <textarea name="description" id="urlDesc" cols="50px" rows="25px" placeholder="description"></textarea>
    </div>
    <div>
      <button id="cancelButton" onclick="cancelButton()" type="button">Cancel</button>
      <button id="createButton">Create</button>
    </div>
  </section>`

  console.log(bottomPageTwo);
  return bottomPageTwo;
};

//action for newURL button
function newURLButton() {
  $('body').on('click', '#newPage', function() {
    addURL();
    console.log("running second mainpage");
  });
};

//action for cancel button
function cancelButton() {
  $('#cancelButton').click(function() {
    generateWebApp();
    console.log("returning to main menu")
  });
};

  /*function buttonHandler() {
    if()
  }

  }*/













const store = {
  items: [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ],
  hideCheckedItems: false
};

const generateItemElement = function (item) {
  let itemTitle = `<span class='shopping-item shopping-item__checked'>${item.name}</span>`;
  if (!item.checked) {
    itemTitle = `
     <span class='shopping-item'>${item.name}</span>
    `;
  }

  return `
    <li class='js-item-element' data-item-id='${item.id}'>
      ${itemTitle}
      <div class='shopping-item-controls'>
        <button class='shopping-item-toggle js-item-toggle'>
          <span class='button-label'>check</span>
        </button>
        <button class='shopping-item-delete js-item-delete'>
          <span class='button-label'>delete</span>
        </button>
      </div>
    </li>`;
}

const generateShoppingItemsString = function (shoppingList) {
  const items = shoppingList.map((item) => generateItemElement(item));
  return items.join('');
};

/*
 * Render the shopping list in the DOM
 */
const render = function () {
  // Set up a copy of the store's items in a local 
  // variable 'items' that we will reassign to a new
  // version if any filtering of the list occurs.
  let items = [...store.items];
  // If the `hideCheckedItems` property is true, 
  // then we want to reassign filteredItems to a 
  // version where ONLY items with a "checked" 
  // property of false are included.
  if (store.hideCheckedItems) {
    items = items.filter(item => !item.checked);
  }

  /**
   * At this point, all filtering work has been 
   * done (or not done, if that's the current settings), 
   * so we send our 'items' into our HTML generation function
   */
  const shoppingListItemsString = generateShoppingItemsString(items);

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
};

const addItemToShoppingList = function (itemName) {
  store.items.push({ id: cuid(), name: itemName, checked: false });
};

const handleNewItemSubmit = function () {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    render();
  });
};

const toggleCheckedForListItem = function (id) {
  const foundItem = store.items.find(item => item.id === id);
  foundItem.checked = !foundItem.checked;
};

const handleItemCheckClicked = function () {
  $('.js-shopping-list').on('click', '.js-item-toggle', event => {
    const id = getItemIdFromElement(event.currentTarget);
    toggleCheckedForListItem(id);
    render();
  });
};

const getItemIdFromElement = function (item) {
  return $(item)
    .closest('.js-item-element')
    .data('item-id');
};

/**
 * Responsible for deleting a list item.
 * @param {string} id 
 */
const deleteListItem = function (id) {
  // As with 'addItemToShoppingLIst', this 
  // function also has the side effect of
  // mutating the global store value.
  //
  // First we find the index of the item with 
  // the specified id using the native
  // Array.prototype.findIndex() method. 
  const index = store.items.findIndex(item => item.id === id);
  // Then we call `.splice` at the index of 
  // the list item we want to remove, with 
  // a removeCount of 1.
  store.items.splice(index, 1);
};

const handleDeleteItemClicked = function () {
  // Like in `handleItemCheckClicked`, 
  // we use event delegation.
  $('.js-shopping-list').on('click', '.js-item-delete', event => {
    // Get the index of the item in store.items.
    const id = getItemIdFromElement(event.currentTarget);
    // Delete the item.
    deleteListItem(id);
    // Render the updated shopping list.
    render();
  });
};

/**
 * Toggles the store.hideCheckedItems property
 */
const toggleCheckedItemsFilter = function () {
  store.hideCheckedItems = !store.hideCheckedItems;
};

/**
 * Places an event listener on the checkbox 
 * for hiding completed items.
 */
const handleToggleFilterClick = function () {
  $('.js-filter-checked').click(() => {
    toggleCheckedItemsFilter();
    render();
  });
};

/**
 * This function will be our callback when the
 * page loads. It is responsible for initially 
 * rendering the shopping list, then calling 
 * our individual functions that handle new 
 * item submission and user clicks on the 
 * "check" and "delete" buttons for individual 
 * shopping list items.
 */

const handleShoppingList = function () {
  render();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
  handleToggleFilterClick(); 
};

// when the page loads, call all dis stuff bellow 


function main() {
  handleShoppingList();
  generateWebApp();
  newURLButton()

};
$(main);