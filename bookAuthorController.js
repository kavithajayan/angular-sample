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


angular.module('myApp').controller('bookAuthorCtrl', function($scope, $http) {
	$http.get('book-author.json').success(function (bookAuthor){
		console.log(bookAuthor);
		$scope.books = bookAuthor.bookAuthor;
	});    
});
