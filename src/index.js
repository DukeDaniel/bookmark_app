//REnders of the main page and functions for the main layout of the page
import cuid from 'cuid';
import $ from 'jquery';
import store from './store';
import dostuff from './dostuff';
import './index.css';



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
    <input id="urlBox" type="text" value="Enter URL Here">
  </div>`;
  return topPageTwo;
};


/*<div class="container">
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
  </div>*/

  /*
      <div>pizza</div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>   

      <section class="startPageFlex">
          <div class="startPageFruit">
          <ul>
          <li>bookmark</li>
          <li>bookmark</li>
          <li>bookmark</li>
          <li>bookmark</li>
          </ul>
          </div>
      </section> 
  */

//will have an title 
function bottomPageOne() {
  let bottomPageOne =`
  <div>
    <form class='form' id='myForm'>
      <label for='inp_username'>username</label>
      <input type='text' name='inp_username' id='inp_username'>
      <label for='password'>password</label>
      <input type='password' name='inp_password' id='inp_password'>
      <button type='submit'>login</button>
    </form>
  </div>`
return bottomPageOne;

};

//will consist of bookmarks that have already been made (will need a varible to store this info as an array)
function bottomPageTwo() {
  let bottomPageTwo = `

  <section>
    <div class="one">
      <input id="titleBox" type="text" value="Title goes here"></input>
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
  return bottomPageTwo;
};

function main() {
  //handleShoppingList();
  dostuff.buttonHandler();
};

export default {
  topPageOne,
  topPageTwo,
  bottomPageOne,
  bottomPageTwo
}

$(main);