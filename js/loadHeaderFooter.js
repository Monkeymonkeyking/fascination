define(["jquery","cookie"],function($){
	$.ajax({
		type:"get",
		url:"/html/include/header.html",
		success:function(data){
			$(data).appendTo(".header");
		}
	}),
	$.ajax({
		type:"get",
		url:"/html/include/footer.html",
		success:function(datatwo){
			$(datatwo).appendTo(".footer");
		}
	})
});