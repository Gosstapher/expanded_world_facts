window.onload = function(){
  console.log('App started');
  var url = "https://restcountries.eu/rest/v1";
  var urlRegions = "https://restcountries.eu/rest/v1/region/";
  var request = new XMLHttpRequest();
  var requestRegion = new XMLHttpRequest();

  var displayInfo = function(){
    var storedCountry = JSON.parse(localStorage.getItem('setCountry'));
    var countryName = document.querySelector("#country-name");
    var countryCapital = document.querySelector("#capital");
    var countryPop = document.querySelector("#population");
    var mapTitle = document.querySelector("#map-title");
    var regionPop = 0;
    countryName.innerText = ("You have selected : " + storedCountry.name);
    countryCapital.innerText = ("Did you know that the capital city of " + storedCountry.name + " is : " + storedCountry.capital);
    countryPop.innerText = ("It will astound you to find out that " + storedCountry.name + " has a population of : " + storedCountry.population.toLocaleString());
    mapTitle.innerText = ("Gaze upon the majesty of " + storedCountry.name);

    var newLat = storedCountry.latlng[0];
    var newLng = storedCountry.latlng[1];
    var zoom = 0;
    var centre = {lat: newLat, lng: newLng};
    if(storedCountry.area >= 17000000){
      zoom = 2;
    }else if(storedCountry.area >= 9000000 && storedCountry.area < 17000000){
      zoom = 3;
    }else if(storedCountry.area >= 2000000 && storedCountry.area < 9000000){
      zoom = 4;
    }else if(storedCountry.area >= 200000 && storedCountry.area < 2000000){
      zoom = 5;
    }else if(storedCountry.area >= 100000 && storedCountry.area < 200000){
      zoom = 6;
    }else if(storedCountry.area < 1000){
      zoom = 10;
    }else{
      zoom = 7;
    }

    var map = new Map(centre, zoom);
    map.bindClick();

    var regionPopCalculator = function(country){
      var region = country.region;
      var pop = 0;
      requestRegion.open("GET", (urlRegions+region));
      requestRegion.onload = function(){
        if(requestRegion.status === 200){
          var regionList = JSON.parse(requestRegion.responseText);  
          for (var i = 0; i < regionList.length; i++) {
            pop += (regionList[i].population);
          };
          regionPop = pop;
        }
        // console.log(regionPop);
        new PieChart((regionPop - storedCountry.population), storedCountry);
      }
      requestRegion.send(null);
    }

    regionPopCalculator(storedCountry);
    // console.log(regionPop);
  }
// ------------------- end of displayInfo function ---------------------------------






  request.open("GET", url);

  request.onload = function(){
    if(request.status === 200){
      // console.log("got the data");
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
