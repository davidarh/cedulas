angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('consultaRedirect', {
    url: '/page1',
    templateUrl: 'templates/consultaRedirect.html',
    controller: 'consultaRedirectCtrl'
  })

  .state('consultaIframe', {
    url: '/page2',
    templateUrl: 'templates/consultaIframe.html',
    controller: 'consultaIframeCtrl'
  })

$urlRouterProvider.otherwise('/page2')


});