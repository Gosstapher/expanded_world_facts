var PieChart = function(regionPop, country){
  var container = document.getElementById("pie-chart");
  var pieChart = new Highcharts.Chart({
      chart: {
        type: 'pie',
        renderTo: container,
        backgroundColor: "#DCDCDC"
      },
      legend: {
                align: 'right',
                verticalAlign: 'middle',
                layout: 'vertical'
              },
      title: {
        text: "Country population relative to Region"
      },
      series: [{
        showInLegend: true,
        name: "Population",
        data: [
          {
            name: country.region,
            y: regionPop,
          },
          {
            name: country.name,
            y: country.population,
            sliced: true
          }
        ]
      }]
  });
  // console.log(pieChart);
}




