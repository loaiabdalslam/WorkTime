// let's make it more dynamic we will check if this link is facebook or ,
// twitter or anything then we will remove it
const state = {
  page: window.location.toString(),
  postPath: '',
  postsLength: 0,
  wordsLength: 0,
  posts:document.getElementById('stream_pagelet').style.display,
};


// we using set Interval to force react onpage load and refresh 
let posts = setInterval(()=>{
if(document.getElementById('stream_pagelet').style.display !== 'none' ){
    // remove notification and posts stream it's so sample ..
    document.getElementById('stream_pagelet').style.display='none';
    document.getElementsByClassName('_5r-_ homeWiderContent homeFixedLayout newsFeedComposer _1qkq _1ql0')[0].style.display='none'
  } 
},5000)

