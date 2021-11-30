var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

filteredProducts;

products.filter(function (product) {
  return product.type === 'vegetable';
});

products.filter(function (product) {
  return (
    product.type === 'vegetable' && product.quantity > 0 && product.price < 10
  );
});

var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, comment: 'awesome post' },
  { postId: 3, comment: 'it was ok' },
  { postId: 4, comment: 'neat' },
];

function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);
