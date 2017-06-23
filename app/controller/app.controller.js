(function () {
    'use strict';
    console.log('hello world');
    angular
        .module('app')
        .controller('jokeController', jokeController)

    jokeController.$inject = ['jokeFactory'];

    function jokeController(jokeFactory) {

        var vm = this;

        vm.click = false;

        getJoke();

        getInspiration();

        getGiphy();

        function getJoke() {
            jokeFactory
                .getData()
                .then(function (joke) {
                    vm.joke = joke;
                    console.log(vm.joke);
                    vm.click = true;
                })

        }

        function getInspiration() {
            jokeFactory
                .getInspired()
                .then(function (term) {

                    vm.term = term;
                    vm.img = term.background;
                    console.log(vm.img);
                    console.log(vm.term);
                });
        }

        function getGiphy() {
            jokeFactory
                .getGif()
                .then(function (gif) {
                    vm.gif = gif;
                    console.log(vm.gif);
                })
        }


    }
})();