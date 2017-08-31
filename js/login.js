require(["config"],function(){
	require(["jquery","load","tool","cookie"],function(){
		//登录数据
		$(".btnLogin").click(function(){
			$.getJSON("../mock/loginshuju.json"),function(data){
				if(count){
					var uname=$("#UserName").val();
					var pwd=$("#Pwd").val();
					for (var i=0; i<data.length; i++) {
						if(data[i]._UserName === uname && data[i]._PassWord === pwd){
							window.location.replace("/index.html");
							$.cookie("loginUser",uname,{expirse:1});
						}
					}
				}
			}
		})
	})
})