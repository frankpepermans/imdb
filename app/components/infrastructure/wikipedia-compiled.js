'use strict';

angular.module('infra.wikipedia', ['rx']).factory('_impl', function ($http, rx) {
    var factory = {};

    factory._processData = function (result) {
        var arr = [];

        for (var i = 0; i < result.data[1].length; i++) {
            arr.push({
                term: result.data[1][i],
                desc: result.data[2][i],
                href: result.data[3][i]
            });
        }

        return arr;
    };

    factory._searchWikipedia = function (term) {
        return rx.Observable.fromPromise($http({
            url: "http://en.wikipedia.org/w/api.php?&callback=JSON_CALLBACK",
            method: "jsonp",
            params: {
                action: "opensearch",
                search: term,
                format: "json"
            }
        })).map(factory._processData);
    };

    return factory;
}).service('wikipedia', function (_impl) {
    this.search = function (term) {
        return _impl._searchWikipedia(term);
    };
});

//# sourceMappingURL=wikipedia-compiled.js.map