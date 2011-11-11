Drupal.behaviors.chart = function(context) {
  for (var key in Drupal.settings.charts){
    console.log(Drupal.settings.charts[key]);
    Drupal.settings.charts[key] = new Highcharts.Chart(Drupal.settings.charts[key]);
  }
};
