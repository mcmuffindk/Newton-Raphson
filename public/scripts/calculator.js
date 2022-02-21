// The function to handle the iterations of the method
const raphsons = (f_x, x, n) => {
  let f = math.parse(f_x);
  let x_n = x
  for (var i = 0; i < n; i++) {
    x_n = subRaphsons(f, x_n);
  }
  return x_n;
};

// The actual Raphsons method
const subRaphsons = (f, x) => {
  let e = f.evaluate({x: x});
  let q = math.derivative(f, 'x').evaluate({x: x});
  return math.evaluate('x - (e/q)', {x: x, e:e, q:q});
};

const calc = () => {
  // Get the values needed to do the calculations
  let iters = parseInt($('input[name=iterations]').val());
  let func = $('textarea[name=formel]').val();
  let x_0 = parseInt($('input[name=x_0]').val());

  // Output the result
  $('#nulpunkt').text(`Det beregnede nulpunkt er: ${raphsons(func, x_0, iters)}`);
};

setTimeout(() => {
  // Eventlistener to calculate and plot on click
  $('button[name=calc]').click(() => {
    calc();
    plot();
    $('#plotSettings').show();
  });
  // Eventlistener to plot again on colorchange
  $('#color').change(() => plot());
}, 10);
