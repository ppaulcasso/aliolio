function check(form)
{
    if(form.userid.value=="ppaulcasso" && form.userpassword.value=="0209")
    {
        location.replace('MainPage.html')
    }
    else if(form.userid.value=="hyewonleeyl" && form.userpassword.value=="1206")
    {
        location.replace('MainPage.html')
    }
    else if(form.userid.value=="hh3752" && form.userpassword.value=="0311")
    {
        location.replace('MainPage.html')
    }
    else
    {
        alert("아이디 또는 패스워드가 틀렸습니다")
    }
}

function enterkey(form) {
    if (window.event.keyCode == 13) {

         // 엔터키가 눌렸을 때 실행할 내용
         check(form);
    }
}