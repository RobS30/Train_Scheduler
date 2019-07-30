$(document).ready(function(){

   
   // Your web app's Firebase configuration
   var firebaseConfig = {
      apiKey: "AIzaSyDCOOhni5VZS3TFkg4TDQrW150CR9AbRO4",
      authDomain: "countdown-ad5b6.firebaseapp.com",
      databaseURL: "https://countdown-ad5b6.firebaseio.com",
      projectId: "countdown-ad5b6",
      storageBucket: "",
      messagingSenderId: "192699756888",
      appId: "1:192699756888:web:5f64124c545d870b"
   };
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   var database = firebase.database();
   
   // stores form input data as variable
   $("button").click(function(event){
      event.preventDefault();
      var trainName = $("#train-name").val().trim();
      var trainDestination = $("#train-destination").val().trim();
      var trainTime = $("#train-time").val().trim();
      var trainFrequency = $("#train-frequency").val().trim();
      
      //pushes variables to firebase via key value pair
      database.ref().push({
         trainName: trainName,
         trainDestination: trainDestination,
         trainTime: trainTime,
         trainFrequency: trainFrequency
      })
      
      //clears the form after input 
      $('#train-name').val('');
      $('#train-destination').val('');
      $('#train-time').val('');
      $('#train-frequency').val('');
   });

   // pulls info from firebase and stores in variable
   database.ref().on('child_added', function(snapshot){
      trainName = snapshot.val().trainName;
      trainDestination = snapshot.val().trainDestination;
      trainTime = snapshot.val().trainTime;
      trainFrequency = snapshot.val().trainFrequency;
      // var now = moment();
      // var minutesAway
      // var timeToNextTrain
      
   // adds data from firebase stored in variables and pushes to html
      var newRow = $("<tr>").append(
         $("<td>").text(trainName),
         $("<td>").text(trainDestination),
         $("<td>").text(trainTime),
         $("<td>").text(trainFrequency),
         //    $('<td>').text(timeToNextTrain)
         );
         
         $('tbody').append(newRow);
         
         // calculate seconds to next train
         // var now = moment().n
         // console.log(moment().diff(moment("8:00"),"minute"));
      
      });
      
      database.ref().on('value', function(snapshot){
         
      });
      
      
   })