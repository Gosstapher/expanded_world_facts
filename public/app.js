window.onload = function(){
  console.log('App started');
  var url = "https://restcountries.eu/rest/v1";
  var request = new XMLHttpRequest();



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
// ---------------- get country info from drop down--------------
      // var name = document.getElementById('select').value
      // var result = _.find(countryList, function(o) { return o.name == name; });
      // console.log(result.capital);

      select.oninput = function() {
        var name = document.getElementById('select').value
        var result = _.find(countryList, function(o) { return o.name == name; });
        localStorage.setItem('setCountry', JSON.stringify(result));
        var storedCountry = JSON.parse(localStorage.getItem('setCountry'));

        var countryName = document.querySelector("#country-name");
        var countryCapital = document.querySelector("#capital");
        var countryPop = document.querySelector("#population");
        countryName.innerText = ("You have selected : " + storedCountry.name);
        countryCapital.innerText = ("Did you know that the capital city of " +  storedCountry.name + " is : " + storedCountry.capital);
        countryPop.innerText = ("It will astound you to find out that " + storedCountry.name + " has a population of : " + (storedCountry.population.toLocaleString()));

        var zoom = 13;
        var centre = {lat: 55.924734, lng: -3.184194};
        var map = new Map(centre, zoom);


      }
      var storedCountry = JSON.parse(localStorage.getItem('setCountry'));
      var countryName = document.querySelector("#country-name");
      var countryCapital = document.querySelector("#capital");
      var countryPop = document.querySelector("#population");
      countryName.innerText = ("You have selected : " + storedCountry.name);
      countryCapital.innerText = ("Did you know that the capital city of " + storedCountry.name + " is : " + storedCountry.capital);
      countryPop.innerText = ("It will astound you to find out that " + storedCountry.name + " has a population of : " + storedCountry.population.toLocaleString());





      //---------- this is the end of the if ---------------------
    }

    var zoom = 13;
    var centre = {lat: 55.924734, lng: -3.184194};
    var map = new Map(centre, zoom);



    //-------- this is the end on onload -------------------------
  }


  request.send(null);

};
