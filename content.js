console.log('hello, I am a content script');
window.addEventListener('click', click);
function click(e) {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  console.log(localStorage.clickcount);
}