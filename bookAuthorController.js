/*angular.module('myApp').controller('bookAuthorCtrl', function($scope) {
    $scope.books = [
        {book:'The Secret',author:'Rhonda Byrne'},
        {book:'As a Man Thinketh',author:'James Allen'},
        {book:'Awaken the Giant Within',author:'Tony Robbins'},
        {book:'Think and Grow Rich',author:'Napolean Hill'},
        {book:'The Magic of Thinking Big',author:'David J. Schwartz'},
        {book:'The Prophet',author:'Kahlil Gibran'},
        {book:'Double Down',author:'Jeff Kenny'},
        {book:'7 Habits of Highly Effective People',author:'Steven Covey'},
        {book:'The Alchemist',author:'Paulo Coelho'},
        {book:'The Monk Who Sold His Ferrari',author:'Robin Sharma'},
        {book:'How to Get from Where You Are to Where You Want to Be',author:'Jack Canfield'},
        {book:'Rich Dad Poor Dad',author:'Robert T. Kiyosaki'},
        {book:'Tathaasthu',author:'Sajeev Nair'}
    ];
}); */


angular.module('myApp')
	.controller('bookAuthorCtrl', function($scope, $http) {
	$http.get('book-author.json').success(function (bookAuthor){
		$scope.books = bookAuthor.bookAuthor;
	});   

	$scope.formSubmit = function() {
		$('form').validate({
            rules: {            
                'firstName': "required",

                'lastName': "required",

                'email': {
                    required: true,
                    email: true
                },

                'my-phone': {
                	// selectCheck: true  
                	number: true        
                }
                             
            },
            messages: {                    
                'firstName': {
                    required: "Firstname is required"
                },
                'lastName': {
                    required: "</i>Lastname is required"
                },
                'email': {
                    required: "Email address is required",
                    email: "Please enter a valid email address"
                }
            },
            errorClass: 'error-message'

					
        });

		$.validator.addMethod("selectCheck", function(phone_number, element) {
		    phone_number = phone_number.replace(/\s+/g, ""); 
			return this.optional(element) || phone_number.length > 9 &&
				phone_number.match(/^(\d+-?)+\d+$/);
		}, "Please specify a valid phone number");
	
	};
});

