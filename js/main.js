
/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [ 'ngRoute','uiGmapgoogle-maps']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
  
  $routeProvider.when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
	
	$locationProvider.hashPrefix('!');
	
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});


app.controller('map1',function($scope){
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
});


// Map Directive

app.controller('MapMarkerController', ['$scope', function ($scope) {
 $scope.map = {
    center: {
      latitude: 18.5203,
      longitude: 73.8567
    },
    zoom: 11
  };
  var ICONS = {
    test: 'images/map-markers/marker2.png',
    test1: 'images/map-markers/marker1.png',
	mark1:'images/map-markers/mark1.png',
	mark2:'images/map-markers/mark2.png',
	mark3:'images/map-markers/mark3.png',
	mark4:'images/map-markers/mark4.png'
  };
  $scope.sites = [
    {coords: {longitude: 73.8227, latitude: 18.5103}, site_id: 0, icon: ICONS['test']},
    {coords: {longitude: 73.8427, latitude: 18.5203}, site_id: 1, icon: ICONS['mark1']},
    {coords: {longitude: 73.8527, latitude: 18.5503}, site_id: 2, icon: ICONS['mark2']},
    {coords: {longitude: 73.8637, latitude: 18.5303}, site_id: 3, icon: ICONS['mark4']},
    {coords: {longitude: 73.8637, latitude: 18.5323}, site_id: 4, icon: ICONS['mark3']},
    {coords: {longitude: 73.8647, latitude: 18.5301}, site_id: 5, icon: ICONS['test']},
    {coords: {longitude: 73.8437, latitude: 18.5102}, site_id: 6, icon: ICONS['mark2']},
    {coords: {longitude: 73.8617, latitude: 18.5203}, site_id: 7, icon: ICONS['mark1']},
    {coords: {longitude: 73.8537, latitude: 18.5313}, site_id: 8, icon: ICONS['mark4']},
    {coords: {longitude: 73.1637, latitude: 18.5603}, site_id: 9, icon: ICONS['mark2']},
    {coords: {longitude: 73.8617, latitude: 18.5403}, site_id: 10, icon: ICONS['test']},
    {coords: {longitude: 73.8127, latitude: 18.5333}, site_id: 11, icon: ICONS['mark3']}
  ];

  $scope.clickMarker = function (gMarker, eventName, model) {
    model.icon = ICONS['test1'];
    $scope.$apply();
  };

}]);











