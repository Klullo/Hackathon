(function(){
    'use strict';

    angular
        .module('app')
        .factory('jokeFactory', jokeFactory)

    jokeFactory.$inject = ['$http'];

    function jokeFactory($http) {
        var service = {
            getData: getData,
            getInspired: getInspired,
            getGif: getGif
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
                    return response.data.contents.quotes[0];
                })
    
        }
        function getGif() { 
        return $http
                .get('https://api.giphy.com/v1/gifs/random?api_key=28057c18e867498989876050ce9aae48&tag=&rating=G')
                .then(function(response){
                    return response.data.data;
                    
                })
    
        }

}



})();