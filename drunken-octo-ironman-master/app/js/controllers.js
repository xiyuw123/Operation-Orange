'use strict';

/* Controllers */
google.load("visualization", "1", {packages:["corechart"]});

google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['myApp']);
});

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {
	  var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
          ]);
	  var options = {
          title: 'Company Performance'
        };
    var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));
    
    chart.draw(data, options);

    $scope.currStock = "GOOG";

    var url = 'http://query.yahooapis.com/v1/public/yql';
    
    var startDate = '2012-01-01';
    
    var endDate = '2012-01-08';
    
    var stockReq = encodeURIComponent('select * from yahoo.finance.historicaldata where symbol in ("GOOG")' + 
                                  ' and startDate = "' + startDate + '" and endDate = "' + endDate + '"');
    
    $.getJSON(url, 'q=' + stockReq + "&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json", function(stockReq) {
      
    });

    $scope.stockData = 


  }])


  .controller('MyCtrl2', function($scope) {

    $scope.currStock = "GOOG";


  });

