require(["config"],function(){
	require(["jquery", "template", "load"],function($, template){
		//商品列表模板引擎
		$.getJSON("../mock/listshuju.json", function(data){
			var html = template("lists", {listshuju:data});
			$(html).appendTo(".goods_list");
		})
		
		//加入购物车
		jointoCart();
		function jointoCart(){
				$(".goods_list").on("click", "a", function(e){
					e.preventDefault();
					var _row = $(this).parent(".product")
					var product = {
						id : _row.children().first().text(),
						imgSrc : _row.children(".fromImg").find("img").attr("src"),
						price : _row.children(".prod_price").text(),
						title : _row.children(".prod_title").text(),
						amount : 1
					};
					console.log(product);
					$.cookie.json = true;
					var _products = $.cookie("products") || [];
					var index = isExist(product.id, _products);
					if (index === -1) { 
						_products.push(product); 
					} else { 
						_products[index].amount++;
					}
					$.cookie("products", _products, {expires:10});
					return false;
				})
			function isExist(id, products) {
				for (var i = 0, len = products.length; i < len; i++) {
					if (products[i].id == id)
					    return i;
				}
				return -1;
			}
		}
		
	});
});