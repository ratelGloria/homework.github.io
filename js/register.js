window.onload = function () {
    var userName = document.getElementById("userName");
    var passWord = document.getElementById("passWord");
    var checkPassWord = document.getElementById("checkPassword");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var emailNum = document.getElementById("emailNum");
    var userID = document.getElementById("userID");
    var sub1 = document.getElementById("submit1");
    function toRed(sName) {
        document.getElementById(sName).style.color = "red";
    }

    function toGreen(sName) {
        document.getElementById(sName).style.color = "green";
    }

    function toWarring(sName, user) {
        document.getElementById(sName).innerText = user + "格式错误";
    }

    function toOk(sName) {
        document.getElementById(sName).innerText = "可以使用";
    }
    var pwd;
    var result;
    var user;
    var userNameB;
    var passWordB;
    var checkPasswordB;
    var emailB;
    var phoneB;
    var emaileNumB;
    var userIDB;
    nameBoolean = false;

    function methodOnblur(name,result,divName,regExp1,nameBoolean){
        if (null != result) {
            var regExp1 = regExp1;
            var resultEng = regExp1.test(result);
            if (!resultEng) {
                toWarring(divName, name);
                toRed(divName);
                this.nameBoolean = false;
            } else {
                toOk(divName);
                toGreen(divName);
                this.nameBoolean = true;
            }
        } else if (null === result) {
            toWarring(divName, name);
            toRed(divName);
            this.nameBoolean = false;
        }
        console.log("hh"+nameBoolean);
    }

    userName.onblur = function () {
        var regExp1 = /[\w]{6,18}/;
        user = "用户名";
        result = this.value;
        methodOnblur(user,result,"s1",regExp1,userNameB);
         userNameB = nameBoolean;
    }

        passWord.onblur = function () {
            result = this.value;
            console.log(result);
            user = "密码";
            var regExp1 = /[0-9a-z]{6,18}/;
            methodOnblur(user,result,"s2",regExp1,userNameB);
            passWordB = nameBoolean;
        }

        checkPassWord.onblur = function () {
            result = this.value;
            console.log(result);
            console.log(pwd);
            user = "密码";

            if (null != result &&  pwd == result ) {
                document.getElementById("s3").innerText = "密码正确";
                toGreen("s3");
                checkPasswordB = true;
            }
            else
            {
                 toWarring("s3", user);
                toRed("s3");
                checkPasswordB = false;
            }
        }
       email.onblur =function() {
           result = this.value;
           console.log(result);
           user = "邮箱";
           var regExp1 = /[0-9a-z]{5,11}@(qq|163)(\.com|\.cn)/;
           methodOnblur(user,result,"s4",regExp1,emailB);
           emailB = nameBoolean;

       }

       phone.onblur =function() {
           result = this.value;
           console.log(result);
           user = "手机号";
           var regExp1 = /[1-9][0-9]{10}/;
           methodOnblur(user,result,"s5",regExp1,phoneB);
           phoneB = nameBoolean;

       }

       emailNum.onblur =function() {
           result = this.value;
           console.log(result);
           user = "邮编";
           var regExp1 = /[0-9]{6}/;
           methodOnblur(user,result,"s6",regExp1,emaileNumB);
           emaileNumB = nameBoolean;
       }

       userID.onblur =function() {
           result = this.value;
           console.log(result);
           user = "身份证号";
           var regExp1 = /[1-9][0-9]{5}[1][0-9]{3}[0-1][0-9][0-3][0-9][0-9]{3}[0-9a-z]/;
           methodOnblur(user,result,"s7",regExp1,userIDB);
           userIDB = nameBoolean;
       }
    sub1.onclick = function(){
        if(userNameB&&passWordB&&checkPasswordB){
            alert("注册成功");
        }else {
            alert("注册失败");
        }
    }

}
