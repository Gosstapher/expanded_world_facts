var PieChart = function(){
  var container = document.getElementById("pieChart");
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
        text: "Pokemon types I've caught"
      },
      series: [{
        showInLegend: true,
        name: "Type",
        data: [
          {
            name: "Fire",
            y: 74,
            color: "#ffac33"
          },
          {
            name: "Water",
            y: 25,
            color: "#73b7ff"
          },
          {
            name: "Grass",
            y: 1,
            color: "#00ba2f",
            sliced: true
          }
        ]
      }]
  });
  // console.log(pieChart);
}




