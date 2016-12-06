(function() {
"use strict";
/**
 * Public restaurant application. Includes the common module and ui-router.
 */
angular.module('public', ['ui.router', 'common'])
    .constant("APIBasePath", "https://alexgal-course5.herokuapp.com");

})();
