-- create database project1;
use project1;

/*create table user_table (
	unique_user_id int unique primary key not null,
    user_verification_status boolean not null default false,
    phone_number bigint not null,
    user_name varchar(50) not null,
    user_adhar_number bigint unique,
    user_email_id varchar(50) unique,
    user_blood_group varchar(10),
    user_date_of_birth date not null,
    user_gender varchar(15) not null,
    user_address varchar(100),
    user_city varchar(20),
    user_location_pincode int, 
    password varchar(10) not null
    );*/



/*DELIMITER &&  
create procedure get_data()  
begin    
       select * from user_table;
end &&  
DELIMITER ;
 
DELIMITER &&
create procedure add_user(IN unique_user_id int, IN phone_number bigint, IN user_name varchar(50),IN user_adhar_number bigint,IN user_email_id varchar(50), IN user_date_of_birth date, IN user_gender varchar(15), IN password char(60))
begin
	insert into user_table values
		(unique_user_id,false,phone_number,user_name,user_adhar_number,user_email_id,'Blood',user_date_of_birth,user_gender,'address','city',0,password);
end &&
DELIMITER ;*/

select * from user_table;