window.onload = function () {
    var userName = document.getElementById("userName");
    var passWord = document.getElementById("passWord");
    var checkPassWord = document.getElementById("checkPassword");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var emailNum = document.getElementById("emailNum");
    var userID = document.getElementById("userID");

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

    var result;
    var user;
    userName.onblur = function () {
        result = this.value;
        user = "用户名";
        console.log(result);
        if (null != result) {
            var regExp1 = /[\w]{6,18}/;
            var resultEng = regExp1.test(result);
            if (!resultEng) {
                toWarring("s1", user);
                toRed("s1");
            } else {
                console.log("else");
                toOk("s1");
                toGreen("s1");
            }
        } else if (null === result) {
            console.log("else if");
            toWarring("s1", user);
            toRed("s1");
        }
       var pwd;
        passWord.onblur = function () {
            result = this.value;
            console.log(result);
            user = "密码";
            if (null != result) {
                var regExp1 = /[0-9a-z]{6,18}/;
                var resultEng = regExp1.test(result);
                if (!resultEng) {
                    toWarring("s2", user);
                    toRed("s2");
                } else {
                    toOk("s2");
                    toGreen("s2");
                    this.pwd = result;

                }
            } else if (null === result) {
                toWarring("s2", user);
                toRed("s2");
            }
        }

        checkPassWord.onblur = function () {

            result = this.value;
            console.log(result);
            user = "密码";

            if (null != result && this.value == pwd) {
                document.getElementById("s3").innerText = "密码正确";
                toGreen("s3");
            }
            else
            {
                 toWarring("s3", user);
                toRed("s3");
            }
        }
    }

       email.onblur =function() {
           result = this.value;
           console.log(result);
           user = "邮箱";
           if (null != result) {
               var regExp1 = /[0-9a-z]{5,11}@(qq|163)(\.com|\.cn)/;
               var resultEng = regExp1.test(result);
               if (!resultEng) {
                   toWarring("s4", user);
                   toRed("s4");
               } else {
                   toOk("s4");
                   toGreen("s4");
               }
           } else if (null === result) {
               toWarring("s4", user);
               toRed("s4");
           }
       }

       phone.onblur =function() {
           result = this.value;
           console.log(result);
           user = "手机号";
           if (null != result) {
               var regExp1 = /[1-9][0-9]{10}/;
               var resultEng = regExp1.test(result);
               if (!resultEng) {
                   toWarring("s5", user);
                   toRed("s5");
               } else {
                   toOk("s5");
                   toGreen("s5");
               }
           } else if (null === result) {
               toWarring("s5", user);
               toRed("s5");
           }
       }

       emailNum.onblur =function() {
           result = this.value;
           console.log(result);
           user = "邮编";
           if (null != result) {
               var regExp1 = /[0-9]{6}/;
               var resultEng = regExp1.test(result);
               if (!resultEng) {
                   toWarring("s6", user);
                   toRed("s6");
               } else {
                   toOk("s6");
                   toGreen("s6");
               }
           } else if (null === result) {
               toWarring("s6", user);
               toRed("s6");
           }
       }

       userID.onblur =function() {
           result = this.value;
           console.log(result);
           user = "身份证号";
           if (null != result) {
               var regExp1 = /[1-9][0-9]{5}[1][0-9]{3}[0-1][0-9][0-3][0-9][0-9]{3}[0-9a-z]/;
               var resultEng = regExp1.test(result);
               if (!resultEng) {
                   toWarring("s7", user);
                   toRed("s7");
               } else {
                   toOk("s7");
                   toGreen("s7");
               }
           } else if (null === result) {
               toWarring("s7", user);
               toRed("s7");
           }
       }





           /*<span id = "s2">密码格式错误</span>
           <span id = "s3">密码不匹配</span>
           <span id = "s4">邮箱格式错误</span>
           <span id = "s5">手机号格式错误</span>
           <span id = "s6">邮编格式错误</span>
           <span id = "s7">身份证号格式错误</span>*/




}