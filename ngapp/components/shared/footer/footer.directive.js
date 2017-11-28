app.directive("footer", function() {
  return {
    restrict: 'A',
    templateUrl: 'components/shared/footer/footer.html',
    scope: true,
    transclude : false
  };
});
