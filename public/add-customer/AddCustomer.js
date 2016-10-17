(function () {
    angular.module('qudini.QueueApp')
        .directive('addCustomer', ['$http', AddCustomer])


    function AddCustomer($http){
        return {
            restrict: 'E',
            scope:{
                onAdded: '&'
            },
            templateUrl:'/add-customer/add-customer.html',
            link: function(scope){

                scope.products = [
                    {name: 'Grammatical advice'},
                    {name: 'Magnifying glass repair'},
                    {name: 'Cryptography advice'}
                ];

                scope.addCustomer = function(){
					var name = scope.name;
					var product = scope.product;
					
					var customer = {
						name: name,
						product: product,
						joinedTime: new Date().toString()
					};
					
					$http({
                        method: 'POST',
                        url: '/api/customer/add',
                        data: customer
                    }).then(function(res){
                        scope.onAdded()()
                    })
                }
            }
        }
    }

})()

