window.onload = function(){
  console.log('App started');
  var url = "https://restcountries.eu/rest/v1";
  var request = new XMLHttpRequest();

  var displayInfo = function(){
    var storedCountry = JSON.parse(localStorage.getItem('setCountry'));
    var countryName = document.querySelector("#country-name");
    var countryCapital = document.querySelector("#capital");
    var countryPop = document.querySelector("#population");

    countryName.innerText = ("You have selected : " + storedCountry.name);
    countryCapital.innerText = ("Did you know that the capital city of " + storedCountry.name + " is : " + storedCountry.capital);
    countryPop.innerText = ("It will astound you to find out that " + storedCountry.name + " has a population of : " + storedCountry.population.toLocaleString());

    var newLat = storedCountry.latlng[0];
    var newLng = storedCountry.latlng[1];
    var zoom = 5;
    var centre = {lat: newLat, lng: newLng};
    var map = new Map(centre, zoom);

  }







  request.open("GET", url);

  request.onload = function(){
    if(request.status === 200){
      console.log("got the data");
      var countryList = JSON.parse(request.responseText);


      for (var i = 0; i < countryList.length; i++) {
        var sel = document.getElementById('select');
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(countryList[i].name) );
        opt.value = countryList[i].name;
        sel.appendChild(opt);
      };


      select.oninput = function() {
        var name = this.value
        var result = _.find(countryList, function(o) { return o.name == name; });
        localStorage.setItem('setCountry', JSON.stringify(result));
        
        displayInfo();

        


      }

      displayInfo();



      //---------- this is the end of the if ---------------------
    }

    



    //-------- this is the end on onload -------------------------
  }


  request.send(null);

};
