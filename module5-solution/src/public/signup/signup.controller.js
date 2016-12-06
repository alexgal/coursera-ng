(function () {
    'use strict';

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserService'];
    function SignUpController(service) {
        var $ctrl = this;
        $ctrl.successMessage = '';

        $ctrl.submit = function () {
            service.setUserDetails($ctrl.user);
            $ctrl.successMessage = 'Your information has been saved';
        }
    }

})();