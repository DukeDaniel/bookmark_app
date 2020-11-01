import $ from 'jquery';
import index from './index'

let BASE_URL = 'https://thinkful-list-api.herokuapp.com';
let get = `${BASE_URL}/Duke/bookmarks`;
let post = `${BASE_URL}/Duke/bookmarks`;
let patch = `${BASE_URL}/Duke/bookmarks/`;


//adds the bookmark to store
function addBookmark(){
  let name = $('#siteName').val();
  let siteLink = $('#siteURL').val();
  let description = $('#description').val();
  let rating = $('input[type="radio"]:checked').val();
  return fetch(post, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "title": name,
      "url": siteLink,
      "desc": description,
      "rating": rating
    })
  })
.then(response => response.json())
.then(postedJson => postedJson);
console.log(store.items.bookmarks)
}

/*const addToStore = function (title) {
  store.items.push({ id: cuid(), name: title, url:'url', description:'', rating:'', collapsed: true});
};*/

//button action for newURL button
function newURLButton() {
  $('body').on('click', '#newPage', function() {
    addURL();
      console.log("running second mainpage");
    });
  };
//button action for adding a list item element to the DOM
  function addBookmarkToList() {
    $('body').on('click', '#addToList', function() {
      makeBookmark();
        console.log("Adding list item to DOM")
    });
  };
  
  
//button action for cancel button
  function cancelButton() {
    $('body').on('click', '#cancelButton', function() {
      generateWebApp();
      console.log("returning to main menu")
    });
  };
  
//creates a button after filling out the details
  function createButton() {
    $('body').on('click', '#createButton', function(title){
        fetchUrl()
    });
  };

//Render for page 1
  function generateWebApp() {
    console.log("generatewebapp")
      $('div.webAppBody').html(index.topPageOne());
      $('div.container').html(index.bottomPageTwo());
    }
//Render for page 2
  function addURL() { 
      console.log("addurl")
        $('div.webAppBody').html(index.topPageTwo());
        $('div.container').html(index.bottomPageTwo());
    }
    

//doesnt work yet
  /*function newBookmark() {
        let bookmarkUrl = $('#urlBox').val()
        let bookmarkTitle = $('#titleBox').val()
        //let bookmarkRating $('#titleBox').val()
        let bookmarkDesc = $('#urlDesc').val()
    }*/
    
//Sending form data to store and thinkpad api
  /*function fetchUrl() {
        fetch('https://thinkful-list-api.herokuapp.com/duke/items')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Shits Broke'))
        return fetch;
    }*/
    
//how to generate the list element in the list page
    const makeBookmark = function (item) {
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
      };

    }

 
/*Bookmark Ratings======================================================*/
    function ratings(){
      $(".rating input:radio").attr("checked", false);
      $('.rating input').on('click', function () {
          $(".rating span").removeClass('checked');
          $(this).parent().addClass('checked');
      });
  
      $('input:radio').change(
        function(){
          let userRating = this.value;
      }); 
  };


    /*
    //C //Creates bookmark object at bookmark endpoint 
    const addBookmark = function (formObject) { 
      console.log(formObject); return fetch(${BASE_URL}/bookmarks, 
      { method: 'POST', headers: { 'Content-Type': 'application/json', }, 
      body: formObject }); };
    */

   
    /*const addToStore = function (title) {
        store.items.push({ id: cuid(), name: title, url:'url', description:'', rating:'', collapsed: true});
      };*/
    
    const buttonHandler = function () {
        //addURL();
        generateWebApp();
        addBookmark();
        newURLButton();
        cancelButton();
        createButton();
        fetchUrl();        
        
    };

export default {
    buttonHandler

}