//查看当前预约记录js

//自定义函数
(function ($) {
	
	//展示一个预约记录在表中
	$.showOneBookedRecord = function(bookedRecord,i){
		//
		//员工工号
		var staffNumber = bookedRecord.staffNumber ;
		//会议室ID
		var roomNumber = bookedRecord.roomNumber ;
		//预约时间段字符串
		var bookedTime = bookedRecord.startDate + "~" +
						 bookedRecord.endDate + " " +
						 bookedRecord.startTime + "~" +
						 bookedRecord.endTime ;
		//订单状态
		var status = bookedRecord.status ;
		
		$("#showNowBookedBody").append('<tr><td>'+ i +
	              '</td><td >'+staffNumber +
	              '</td><td >'+roomNumber +
	              '</td><td >'+bookedTime +
	              '</td><td >'+status +
	              '</td><tr>');
	}
	
	
	
})(jQuery);




$(docuemnt).ready(function(){
	
	//定义全局变量，存储所有预约记录
	var allNowBookedRecord ;
	
	
	//预约记录表是一个预约时段就一行
	
	//点击左侧查看当前预约，则从后台得到所有当前预约记录，
	//并展示在表格中
	$("#").click(function(){
		
		//从后台得到所有当前预约记录数据
		$.ajax({
	    	type : "post",
	    	url:"../room/getAllNowBooked",
	    	//contentType:"application/json",
	        //data:JSON.stringify(data),
	    	//data:data,
	        success:function(result){
	        	
	        	//赋值给全局变量，方便查询时不用向后台请求数据，前端即可完成
	        	allNowBookedRecord = result ;
	        	//先删除表格原数据
        		$("#").find("tr").remove();
        		
	        	//遍历展示所有预约记录
	        	for(var i = 0 ; i < result.length ; i ++){
	        		//调用函数展示
	        		$.showOneBookedRecord(result[i],(i+1));
	        	}	
	          }
		   })
	  });
	          
	
	  //查询预约记录  TODO
	  
	
	
	
});