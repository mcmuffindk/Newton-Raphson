function plot() {
  // Set parameters for the plotter
  var parameters = {
    target: '#function',
    data: [{
      fn: $('textarea[name=formel]').val(),
      color: $('#color').val()
   }],
    grid: true,
    xAxis: {domain: [-5, 6]},
    yAxis: {domain: [-6, 6]}
  };

  // Plot the function
  functionPlot(parameters);
}
