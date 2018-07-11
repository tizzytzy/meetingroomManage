package dao;

import org.apache.ibatis.annotations.Param;

import dtoout.MyBooked;
import dtoout.MyRoom;
import entity.Device;
import entity.Staff;

public interface ManagerDao {
	// TODO 用一个测试一个，测试完标注一下

	// 添加设备
	boolean addDevice(@Param("name") String name, @Param("type") String type);

	// 查看设备
	Device queryDeviceByName(@Param("name") String name);

	// 修改设备
	boolean modifyDevice(@Param("deviceId") String deviceId, @Param("name") String name, @Param("type") String type);

	// 删除设备
	int deleteFromDevice(@Param("deviceId") String deviceId);

	// 删除员工
	int deleteFromStaff(@Param("staffNumber") String staffNumber);

	// 查看用户
	Staff queryStaffByStaffNumber(@Param("staffNumber") String staffNumber);

	// 查看当前预约
	MyBooked queryBookingByRoomNumber(@Param("roomNumber") String roomNumber);

	// 查看历史预约
	MyBooked queryBookedByRoomNumber(@Param("roomNumber") String roomNumber);

	// 添加会议室
	boolean addMeetingRoom(@Param("roomNumber") String roomNumber, @Param("capability") int capability);

	// 修改会议室可容纳人数
	boolean modifyCapablity(@Param("roomNumber") String roomNumber, @Param("capablity") int capablity);

	// 修改会议室时间
	boolean modifyTimeAvailable(@Param("roomNumber") String roomNumber, @Param("startDate") String startDate,
			@Param("endDate") String endDate, @Param("startTime") String startTime, @Param("endTime") String endTime);

	// 删除已有会议室所有空闲时间
	boolean deleteFreeTime(@Param("roomNumber") String roomNumber);

	// 增加会议室空闲时间（与删除配合使用，先删除后增加）
	boolean addFreeTime(@Param("roomNumber") String roomNumber, @Param("startDate") String startDate,
			@Param("endDate") String endDate, @Param("startTime") String startTime, @Param("endTime") String endTime);
	
	// 修改设备
	boolean modifyRoomDevice(@Param("roomNumber") String roomNumber, @Param("deviceId") String deviceId,
			@Param("count") int count);

	// 查看会议室信息
	MyRoom queryRoomByRoomNumber(@Param("roomNumber") String roomNumber);
}
