var track_genres = {'047658': ['047658', '130130'],
                    '073584': ['073584', '089484'],
                    '072136': ['072136', '078516'],
                    '091471': ['007528', '091471'],
                    '128504': ['000459', '128504']}
var track_classifications = {'047658000459': 'ELECTRONIC',
                             '047658007528': 'POP',
                             '047658072136': 'HIP-HOP',
                             '047658073584': 'ELECTRONIC',
                             '047658078516': 'HIP-HOP',
                             '047658089484': 'HIP-HOP',
                             '047658091471': 'POP',
                             '047658128504': 'ROCK',
                             '073584000459': 'ROCK',
                             '073584007528': 'ROCK',
                             '073584047658': 'ROCK',
                             '073584072136': 'POP',
                             '073584078516': 'ELECTRONIC',
                             '073584091471': 'ROCK',
                             '073584128504': 'ROCK',
                             '073584130130': 'ROCK',
                             '072136000459': 'ELECTRONIC',
                             '072136007528': 'HIP-HOP',
                             '072136047658': 'HIP-HOP',
                             '072136073584': 'ELECTRONIC',
                             '072136089484': 'HIP-HOP',
                             '072136091471': 'HIP-HOP',
                             '072136128504': 'ELECTRONIC',
                             '072136130130': 'ELECTRONIC',
                             '091471000459': 'ROCK',
                             '091471047658': 'ROCK',
                             '091471072136': 'ROCK',
                             '091471073584': 'ROCK',
                             '091471078516': 'ELECTRONIC',
                             '091471089484': 'ROCK',
                             '091471128504': 'ROCK',
                             '091471130130': 'ROCK',
                             '128504007528': 'ROCK',
                             '128504047658': 'ROCK',
                             '128504072136': 'HIP-HOP',
                             '128504073584': 'ROCK',
                             '128504078516': 'HIP-HOP',
                             '128504089484': 'ROCK',
                             '128504091471': 'ROCK',
                             '128504130130': 'ELECTRONIC'}

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

function setAudio() {
  var bg = document.getElementById('background');
  var fg = document.getElementById('foreground');
  var bgOption = bg.options[bg.selectedIndex].value;
  var fgOption = fg.options[fg.selectedIndex].value;
  if (!track_genres[bgOption].includes(fgOption)) {
    var audio = document.getElementById('audio');
    audio.src = 'audio/mixed_tracks/' + bgOption + '-' + fgOption + '.mp3';
    var classification = document.getElementById('class')
    classification.innerHTML = track_classifications[bgOption + fgOption]
  }
}
