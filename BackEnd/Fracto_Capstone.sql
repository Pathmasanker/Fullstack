create database Fracto;
use Fracto;
show tables;
select * from Appoinment_booking_Table;

select * from Doctor_Table order by price asc;
select * from Doctor_Table order by rating desc;
select * from Doctor_Table order by rating asc;
select * from Admin_Table;
select * from user_Table;
select * from Doctor_Table; 
select * from wait_admin_allow;
select * from admin_msgs_Table;
select * from user_msgs_Table;

UPDATE Doctor_Table
SET doctor_img = "C:/Users/pathmasanker.pk/eclipse-workspace/CapStone/FrontEnd/Images/1.jfif"
WHERE doctor_id = 1;