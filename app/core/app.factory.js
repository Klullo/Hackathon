(function(){
    'use strict';

    angular
        .module('app')
        .factory('jokeFactory', jokeFactory)

    jokeFactory.$inject = ['$http'];

    function jokeFactory($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { 
        return $http
                .get('http://api.yomomma.info/')
                .then(function(response){
                    return response.data;
                })


        }
        function getInspired() { 
        return $http
                .get('http://quotes.rest/qod.json?category=inspire')
                .then(function(response){
                    return response.data;
                })
    
        }

}



})();