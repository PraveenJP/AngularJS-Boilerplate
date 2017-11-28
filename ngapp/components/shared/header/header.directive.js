app.directive("header", function() {
  return {
    restrict: 'A',
    templateUrl: 'components/shared/header/header.html',
    scope: true,
    transclude : false
  };
});
