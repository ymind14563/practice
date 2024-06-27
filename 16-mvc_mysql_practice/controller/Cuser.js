const User = require(`../model/User`);

// 초기 페이지 접속
exports.getMain = (req, res) => res.render(`index`);

// 회원가입 페이지 접속
exports.getSignUp = (req, res) => res.render(`signup`);

// 로그인 페이지 접속
exports.getSignIn = (req, res) => res.render(`signin`);



// 회원가입
exports.postSignUp = (req, res) => {

    User.postSignUp(req.body, (err, result) => {
        if (err) {
            return res.status(400).send({ message: err.message });
        }
        res.send({
            id : result,
            userid : req.body.id,
            name : req.body.name,
            pw : req.body.pw
        })
    })
}

// 로그인
exports.postSignIn = (req, res) => {
    User.postSignIn(req.body, (err, result) => {
        if (err) {
            return res.status(401).send({ message: err.message });
        }

        res.send({
            userid: result.userid,
            name: result.name,
            pw: result.pw
        });
    }); 
}


// 프로필
exports.postProfile = (req, res) => {
    const { userid, name, pw} = req.body;
    res.render('profile', { user: { userid, name, pw } });
}



// 프로필 수정
exports.patchProfile = (req, res) => {
    User.patchProfile(req.body.data, (err, result) => {
        if (err) {
            return res.status(500).send({ message: err.message });
        }

        res.send({ message: "정보 수정 성공" });
    });
}



// 프로필 삭제
exports.deleteProfile = (req, res) => {
    User.deleteProfile(req.body.userid, (err, result) => {
        if (err) {
            return res.status(500).send({ message: err.message });
        }
        res.send({ message: '회원 탈퇴 성공' });
    });
};
