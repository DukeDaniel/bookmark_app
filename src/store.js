//mostly for varible storage
import $ from 'jquery';
import cuid from 'cuid';

const store = {
  bookmarks: [
    {id: 1, title:'title', url:'url', description:'', rating:''}
  ],
  adding: true,
  error: null,
  flter: 0
};

export default{
  store
}