
const config = {
    apiKey: "AIzaSyDRrbqsTA3xCHiA9Ca343A5sBsuFEfMFEA",
    authDomain: "interactive-presentation.firebaseapp.com",
    databaseURL: "https://interactive-presentation.firebaseio.com",
    storageBucket: "interactive-presentation.appspot.com",
    messagingSenderId: "1005634377068"
  };
  const app = firebase.initializeApp(config);
  app.auth().onAuthStateChanged(function(user) {
  if (user) {
    $("#signin").addClass("hidden");
    app.database().ref('users').update({user:0})
  } else {
    // No user is signed in.
  }
});

$("#box").on("submit", (e) =>{
  e.preventDefault();
  const form = $(e.target);
  $.cookie("user",form.find("input")[0].value)
  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ...
  });
})

const notes = [
  "",
  "<div>- Born on March 20, 1828 in Skien, Norway</div>",
  "",
  "<div>- Family fell on hard times, moved to rundown farm outside the city</div><div>- Spent free time reading, painting, and doing magic tricks</div>",
  "",
  "",
  "",
  "<div>- Norway had a very conservative culture</div><div>- most were Protestant and believed in strict rules and gender roles</div>",
  "",
  "",
  "<div>- moved to Grimstad,where he wrote his first play <i>Catalina</i>",
  "", //10
  "",
  "<div>- Moved to Kristiania in 1850 to enroll in the University, but failed entrance exams</div>", 
  "<div>- Met Ole Bull, a violinist, who gave him a job as theatre director in Bergen</div>",
  "<div>- gained invaluable experience and understanding of theatre while in Bergen</div><div>- returned to Kristiania to manage another theatre</div>",
  "<div>- wrote Love's Comedy, a satirical play about marriage</div>",
  "<div>- Moved to Italy in 1862 to join major artists</div>",
  "<div>- Wrote <i>Brand</i> and <i>Peer Gynt</i> while in Italy</div>",
  "",
  "<div>- Moved to Germany in 1868, where he wrote his most successful works</div>", //20
  "<div>- Returned to Norway in 1891, a literary hero</div>",
  "<div>- Died on May 23, 1906</div>",
  "",
  "<div>- <i>A Doll's House</i> addressed feminism</div>",
  "<div>- <i>Ghosts</i> addressed incest and STDs</div>",
  "<div>- <i>Enemy of the People</i> addressed a man at odds with his community</div>",
  "<div>- <i>Hedda Gabler</i> is his most famous work</div>",
  "",
  "",
  "<div>- Mostly wrote dramas about ethics and struggle</div><div>- Much of his work was controversial</div>",
  "<div>- major contributions to the theatre world: psychological depth and realism</div>",
]

const questions = []

app.database().ref().on('value',(data) => {
  let str = "";
  for(let i = 0; i<= data.val().slide; i++)
    str +=notes[i]
  $("#insert").html(str)
  
})