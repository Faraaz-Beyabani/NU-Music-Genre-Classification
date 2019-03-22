function goHome(e) {
  setLink(e);
  openTab('home');
}

function goCNN(e) {
  setLink(e);
  openTab('cnn');
}

function goDT(e) {
  setLink(e);
  openTab('dt');
}

function goREPET(e) {
  setLink(e);
  openTab('repet');
}

function setLink(e) {
  document.getElementsByClassName('active')[0].classList.remove('active');
  e.classList.add('active');
}

function openTab(tab) {
  var tabs  = document.getElementsByClassName('tab')
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.add('hidden');
  }
  document.getElementById(tab).classList.remove('hidden');
}
