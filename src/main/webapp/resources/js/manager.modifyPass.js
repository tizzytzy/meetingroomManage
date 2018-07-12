//管理员修改密码界面js

$(document).ready(function(){

	//点击确认按钮事件
	
	$("#modifyPassBtn").click(function(){
		
		//得到员工号
		var staffNumber = $("#userIdModifyP").val();
		//新密码
		var newPassword = $("#newPassword1").val();
		//确认新密码
		var defineNewPassword = $("#defineNewPassword1").val();
		//比较新密码和确认新密码是否相同
		if(newPassword == defineNewPassword){
			//相等则封装参数，传数据
			var dats = {
					staffNumber : staffNumber,
					newPassword : newPassword
			}
			//传数据，修改密码
			$.ajax({
		    	type : "post",
		    	url:"../login/modifyPass",
		    	//contentType:"application/json",
		        //data:JSON.stringify(data),
		    	data:data,
		        success:function(result){
		        	//返回布尔值，
		        	if(result){
		        		alert("修改成功！");
		        	}
		        }
			});
		}else{
			alert("两个密码不一致！");
		}
		
	});
	
	
	
})


