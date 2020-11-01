//REnders of the main page and functions for the main layout of the page
import cuid from 'cuid';
import $ from 'jquery';
import store from './store';
import dostuff from './dostuff';
import './index.css';


/*Templates========================================================================*/
//static top layer for the rest of the app
function topPageOne() {
  let topPageOne = `
  <div class="startPage">
    <h2>whats your URL</h2>
      <input type="text">
        <br>
          <button id="newPage" type="button">+ New</button>
          <select id="filter" onchange="stars()" Value="Filter" >
          <option>Filter By</option>
          <option>5 stars</option>
          <option>4 stars</option>
          <option>3 stars</option>
          <option>2 stars</option>
          <option>1 stars</option>
          </select>
          <button id="addToList" type="button">+ Bookmark</button>

            
        </div>`;
        return topPageOne;
      };
      

//will consist of url text box to add a book mark
/*function topPageTwo() {
  let topPageTwo = `
  <div class="startPage">
  <p>Add New Bookmark</p>
    <input id="urlBox" type="text" value="Enter URL Here">
  </div>`;
  return topPageTwo;
};*/
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

//will populate the bottom form position
function bottomPageOne() {
  function generateForm(){
    return `<h1>New Bookmark</h1>
    <div id="formUp">
      <div id="listContainer" class="listContainer">
        <div>
          <form class="addingNew">
            <fieldset>
              <legend>New Bookmark</legend>
              <label for="siteName">Site Name:</label>
              <input id="siteName" type="text" name="site" placeholder="Name"><br>
  
              <label for="siteURL">Site:</label>
              <input id="siteURL" type="text" name="siteURL" required placeholder="https://"><br>
  
              <label for="description">Description:</label><br>
              <textarea name="description" id="description" cols="30" rows="10" placeholder="Site Description"></textarea><br><br>
              <div id="rating" class="rating">
                <span><input type="radio" name="rating" id="str5" value="5" required><label for="str5">5</label></span>
                <span><input type="radio" name="rating" id="str4" value="4"><label for="str4">4</label></span>
                <span><input type="radio" name="rating" id="str3" value="3"><label for="str3">3</label></span>
                <span><input type="radio" name="rating" id="str2" value="2"><label for="str2">2</label></span>
                <span><input type="radio" name="rating" id="str1" value="1"><label for="str1">1</label></span>
              </div>
            </fieldset>
            
          <div class="linkRemove"> 
              <button id="cancel">Cancel</button>
              <button type="submit" value="submit" id="addBookmark">Add Bookmark</button>
          </div>
         </form>
  
    </div>`;
     
  }  
};

//will consist of bookmarks that have already been made (will need a varible to store this info as an array)
function bottomPageTwo() {
  <ul class="shopping-list"></ul>
};

function main() {
  //handleShoppingList();
  dostuff.buttonHandler();
};

export default {
  topPageOne,
  //topPageTwo,
  bottomPageOne,
  bottomPageTwo
}

$(main);