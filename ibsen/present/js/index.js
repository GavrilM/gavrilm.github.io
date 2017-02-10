
const config = {
    apiKey: "AIzaSyDRrbqsTA3xCHiA9Ca343A5sBsuFEfMFEA",
    authDomain: "interactive-presentation.firebaseapp.com",
    databaseURL: "https://interactive-presentation.firebaseio.com",
    storageBucket: "interactive-presentation.appspot.com",
    messagingSenderId: "1005634377068"
  };
const app = firebase.initializeApp(config);

const show = impress();
show.init();
app.database().ref().once('value', (data) => {
  show.goto(parseInt(data.val().slide))
});

const mapsKey = 'AIzaSyBnBTGwfYkgS4G1_TtSFXzTM8ANmnjXkYs';

const rootElement = document.getElementById( "impress" );
rootElement.addEventListener( "impress:stepenter", function() {
  var currentStep = document.querySelector( ".present" );
  app.database().ref().update({ slide: $(currentStep).data('number')})
});