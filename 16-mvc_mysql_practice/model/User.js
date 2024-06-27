// database 연결 객체
const mysql = require(`mysql`);
const conn = mysql.createConnection({
  host: `localhost`,
  user: `user`,
  password: `12345678`,
  database: `mvcmysql`
}); 

// 회원가입
exports.postSignUp = (data, callback) => {
    conn.query(`SELECT * FROM user WHERE userid = '${data.userid}'`, (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            return callback(new Error(`이미 있는 회원입니다.`));
        } else {
            conn.query(`INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`,
            (err, result) => {
                if (err) return callback(err);
                
                callback(null, result.insertId);
            });
        }
    });
}


// 로그인
exports.postSignIn = (data, callback) => {
    conn.query(`SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`,
        (err, user) => {
            if (err) throw err;

            if (user.length > 0) {
                return callback(null, user[0]);
            } else {
                return callback(new Error(`등록된 회원이 아니거나 비밀번호가 잘못되었습니다.`));
            }
        }
    );
}


// 프로필 수정
exports.patchProfile = (updateData, callback) => {
    const {userid, name, pw} = updateData;

    conn.query(`UPDATE user SET name='${name}', pw='${pw}' WHERE userid='${userid}'`,
        (err, user) => {
            if (err) return callback(new Error(`프로필 수정 중 에러가 발생했습니다.`));
            callback(null, user);
        }
    );
}

// 프로필 삭제
exports.deleteProfile = (userid, callback) => {

    conn.query(`DELETE FROM user WHERE userid='${userid}'`,
        (err, result) => {
            if (err) return callback(new Error(`프로필 삭제 중 에러가 발생했습니다.`));
            callback(null, result);
        }
    );
}