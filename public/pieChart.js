var PieChart = function(worldPop, country){
  var container = document.getElementById("pie-chart");
  var pieChart = new Highcharts.Chart({
      chart: {
        type: 'pie',
        renderTo: container
      },
      legend: {
                  align: 'right',
                  verticalAlign: 'top',
                  layout: 'vertical'
              },
      title: {
        text: "population"
      },
      series: [{
        showInLegend: true,
        name: "Population",
        data: [
          {
            name: "World Population",
            y: worldPop,
            color: "#ffac33"
          },
          {
            name: country.name,
            y: country.population,
            color: "#73b7ff",
            sliced: true
          }
        ]
      }]
  });
  // console.log(pieChart);
}




