DROP DATABASE mvcmysql;

CREATE DATABASE mvcmysql CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

SHOW DATABASES;

USE mvcmysql;

CREATE TABLE user (
	id INT PRIMARY KEY AUTO_INCREMENT,
    userid VARCHAR(20) NOT NULL,
    name VARCHAR(10) NOT NULL,
    pw VARCHAR(20) NOT NULL
);

DROP TABLE user;

DESC user;

SELECT * FROM user;

TRUNCATE TABLE user;

INSERT INTO user VALUES
	(1, 'aaa', '홍길동', 'aaa1'), 
    (2, 'bbb', '김갑수', 'bbb1');
   
-- User 계정 생성
CREATE USER 'user'@'%' IDENTIFIED BY '12345678'; -- 계정 추가
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION; -- 새로운 계정에 권한 부여
FLUSH PRIVILEGES; -- 캐쉬 지우고 새로운 설정 적용

ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '12345678'; -- 인증 방식 변경

SELECT * FROM mysql.user; -- 계정 생성 확인
