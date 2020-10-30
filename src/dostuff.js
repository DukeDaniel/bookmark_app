import $ from 'jquery';
import index from './index'


//action for newURL button
function newURLButton() {
    $('body').on('click', '#newPage', function() {
      addURL();
      console.log("running second mainpage");
    });
  };
  
    //action for cancel button
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
  }
  

  
  function generateWebApp() {
      $('div.webAppBody').html(index.topPageOne());
      $('div.container').html(index.bottomPageOne);
    }
    
    function addURL() { 
        $('div.webAppBody').html(index.topPageTwo());
        $('div.container').html(index.bottomPageTwo());
    }
    
    function newBookmark() {
        let bookmarkUrl = $('#urlBox').val()
        let bookmarkTitle = $('#titleBox').val()
        //let bookmarkRating $('#titleBox').val()
        let bookmarkDesc = $('#urlDesc').val()
    }
    
    function fetchUrl() {
        fetch('https://thinkful-list-api.herokuapp.com/duke/items')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Shits Broke'))
        return fetch;
    }

    function postUrl() {
        fetch('https://thinkful-list-api.herokuapp.com/duke/items', { method: 'POST', }
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Shits Broke'))
        return fetch;
    };

     
    const addToStore = function (title) {
        store.items.push({ id: cuid(), name: title, url:'url', description:'', rating:'', collapsed: true});
      };
    
    const buttonHandler = function () {
        newURLButton();
        cancelButton();
        createButton();
        fetchUrl();
        newBookmark();
        addURL();
        generateWebApp();
        
    };

export default {
    buttonHandler

}