(function () {
    'use strict';
    console.log('hello world');
    angular
        .module('app')
        .controller('jokeController', jokeController)

    jokeController.$inject = ['jokeFactory'];

    function jokeController(jokeFactory) {

        var vm = this;
        // vm.term = term.contents.quotes.quote;
        // console.log(vm.term);

        getJoke();
        
        getInspiration();

        function getJoke() {
            jokeFactory
                .getData()
                .then(function (joke) {
                    vm.joke = joke;
                    console.log(vm.joke);
                })
        }

        function getInspiration() {
            jokeFactory
                .getInspired()
                .then(function (term) {
                    console.log('come on');
                    vm.term = term;
                    console.log(vm.term);
                });
        }


    }
})();