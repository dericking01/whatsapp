    $(".container").hide();
    $(".ellip").hide();
    window.onload = function(){
    $(".container").show();
    $(".load_screen").fadeOut(500);
    $(".ellip").show();
    
    $(".fa-phone").click(function(){
    setTimeout(function(){
    navigator.vibrate&&navigator.vibrate(60);
    }, 50);
    });
    
    
    var span = document.querySelector(".time_msgt");
    var date = new Date();
    var HH = date.getHours();
    var MM = date.getMinutes();
    MM = (MM < 10) ? "0" + MM : MM;
    var am_pm = "PM";
    if (HH==0){
        am_pm = "PM";
    }else if (HH>=12){
        am_pm = "PM";
    }
    else{
        am_pm = "AM";
    }
    if (HH>12){
        HH=HH-12;
    }else{
        HH=HH;
    }
    var TT = HH+":"+MM+" "+am_pm;
    span.innerHTML=TT;
    }
    

    
    $(".real_chat_send").click(function(){
    var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();
  h = (h <10) ? "0" + h : h;
 t = (t <10) ? "0" + t : t;
 if(h>12){
    h=h-12;
 }else{
    h=h;
 }
 time= h+":"+t;
 
    var val = $("#message").val();
    if (val!==""){
    var elem = $("  <div class='re' id='schat'><span class='sechat'>"+val+"</span> <span class='stime'>"+time+"<i class='material-icons tick'style='color:#aaa;'>done_all</i></span></div> ");
    $(".conversation").append(elem);
    $("#message").val("");
    document.getElementById("audio2").play();


    setTimeout(function(){
        document.getElementById("audio").play();
    },1950);
    
    setTimeout(function(){
  $(".tick").css("color","#4fc3f7");
  $(".real_chat_online").text("typing...").css("color","#3d7");
   setTimeout(function(){
   if (val=="Hi"){
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>Hello</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(100);
       $(".real_chat_online").text("online").css("color","#fff");
   }else if (val=="Hello"){
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>Hi</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(100);
       $(".real_chat_online").text("online").css("color","#fff");
   }else if (val=="How are you?"){
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>I'm fine, and you..?</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(100);
       $(".real_chat_online").text("online").css("color","#fff");
   }else if (val=="How are you"){
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>I'm fine, and you..?</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(100);
       $(".real_chat_online").text("online").css("color","#fff");
   }else if (val=="Fuck you"){
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>You are in trouble😠</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(900);
       $(".real_chat_online").text("online").css("color","#fff");
   }else{
       $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>Hi, it's Derrick king🤩, vist my Github Profile🙏</span> <span class='rtime'>"+time+"</span></div>");$(".conversation").scrollTop($(".conversation")[0].scrollHeight);
       navigator.vibrate(100);
       $(".real_chat_online").text("online").css("color","#fff");
    }
   },2000);},1000);
    }
    });
    
    
    var msg = document.querySelector("#message");
    var mic = document.querySelector(".real_chat_mic");
    var send = document.querySelector(".real_chat_send");
    send.style.display="none";
    
    msg.addEventListener("input", myFun);
    function myFun(){
     if(msg.value.length>0){
         mic.style.display="none";
         send.style.display="block";
         $(".real_cam").hide(200);
         $(".real_chat_items").css({"margin-top":"0px", "margin-right":"10px"});
     }else if(msg.value.length>=12){
         return false;
     }
     else{
         send.style.display="none";
         mic.style.display="block";
         $(".real_cam").show(200);
         $(".real_chat_items").css({"margin-top":"-30px", "margin-right":"0px"});
     }
    }
    
    //TEMPORARY HIDES 
    
    $("#menu").toggle();
    $(".ellip").click(function(){
    $("#menu").toggle(300);
    $(".container").click(function(){
    $("#menu").hide(200);
    });
    });
    $(".status").click(function(){
    $(".chats_container").hide(300);
    $(".status_container").show(300);
    $(".calls_container").hide(300);
    $("#menu").css({"height":"80px"});
    $(".status").css({"border-bottom":"2px solid #fff"});
    $(".calls").css({"border-bottom":"0px"});
    $(".chats").css({"border-bottom":"0px"});
    $(".l2").hide();
    $(".l4").hide();
    $(".l3").hide();
    $(".l1").html("Status privacy");
    });
    $(".chats").click(function(){
    $(".calls_container").hide(300);
    $(".status_container").hide(300);
    $(".chats_container").show(300);
    $("#menu").css({"height":"210px"});
    $(".chats").css({"border-bottom":"2px solid #fff"});
    $(".calls").css({"border-bottom":"0px"});
    $(".status").css({"border-bottom":"0px"});
    $(".l2").show();
    $(".l4").show();
    $(".l3").show();
    $(".l1").html("New Group");
    });
    $(".calls").click(function(){
    $(".calls_container").show(300);
    $(".status_container").hide(300);
    $(".chats_container").hide(300);
    $("#menu").css({"height":"50px"});
    $(".l2").hide();
    $(".l4").hide();
    $(".l3").hide();
    $(".l1").html("<a href='https:///wa.me/2349017872620'>Contact me</a>");
    $(".l5").show();
    $(".calls").css({"border-bottom":"2px solid #fff"});
    $(".status").css({"border-bottom":"0px"});
    $(".chats").css({"border-bottom":"0px"});
    });
    
    
    //SETTINGS
    $(".settings_container").hide();
    $(".l5").click(function(){
    $(".real_chat").hide();
     $(".container").hide(400);
     $(".settings_container").slideToggle(300);
     $("#menu").fadeToggle(300);
     $(".ellip").hide();
    });
    $(".settings_back").click(function(){
    $(".settings_container").slideToggle(400);
        $(".container").show(600);
     $(".ellip").show();
    });
    
    
    //CAMERA
$(".camera_container").hide();
    $(".camera").click(function(){
     $(".container").fadeToggle(400);
     $(".camera_container").show();
     $("#menu").hide();
     $(".ellip").hide();
    });
    $(".camera_back").click(function(){
    $(".camera_container").fadeToggle(400);
        $(".container").fadeToggle(500);
     $(".ellip").show();
    });
    
    
    
    $(".iconsp").hide();
    $(".invi").hide();
    $(".icon1").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    
    
    $(".icon2").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT12cP23udqvCqHW_2oAvK257g3oVQkv23tOumxtpfFOhHi8a5B)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    
    $(".icon3").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1rDH_nWadT1GXFPomdutqV1PUMA8uXIWS2Js5_fq4pJ1lwG16)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    
    $(".icon4").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    
    
    
    $(".icon5").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSUadwflQXaMZhx4HNJ9yjmPkQnKQoKRk4_yuC4WjgjjsAXdV5_QFZERdRTShHG)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    
    
    $(".icon6").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQQ840Wk_80H2JjO4wmYQ8VpNzck-GCsmu8a4HqMDNoeZNAH5Zw8qkRZc9a2C9v)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    
    
    $(".icon7").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRjhVK6JmLl4J0MwVaAQy11_-b46X7VI81sJIuwf_UEJyg_O-_uChuBqIMSel3d)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    
    
    
    $(".icon8").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0U5a32I81EyodYLVvHBNs7GSlBgmag51JRMz_0RQ2DqthEDKr)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    
    $(".icon9").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyv0aAzhDzlUzFm_5uXSQvVp7GISukmB-2zA&usqp=CAU)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    
    $(".icon10").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTFNWogBmphs9qMbvplnItdr9z1nA41VxzHpdxq9n-tigPQjc3-7pPMx83rK0tk)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    
    $(".icon11").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Mike_Bloomberg_Headshot.jpg)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon12").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTkkZVfx7MDl1vS6XBHph7VvTMfETmBQWO4nsvXAq9MFO689TB9HQ7OAhS-1W4I)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon13").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRTqPkCX1wgKlcE8FnfUjOQCyjayYR9schlFte0f_TvdXLr2F57rdYJov7oaNIe)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon14").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS5PUoIIwZz81pF5O2LLNZUHjH7S57UlJBDyT5NIaA97Wj4mhFwUplM3-nxx3Dc)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    $(".icon15").click(function(){
    $(".iconsp").css({"border-radius":"0px", "background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIGVmUB2OlzA80cf4xtLpc6QCvqdh3rNIpg&usqp=CAU)", "background-size":"cover"});
    $(".iconsp").show();
    $(".invi").show();
    $(".invi").click(function(){
    $(".iconsp").hide();
    $(".invi").hide();
    });
    });
    
    

    
    $(".status_down2").hide();
    $(".view_status_container").hide();
    $(".li_status1").click(function(){
    $(".view_status_container").show();
    $(".view_status_container").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzu5NNtYXjTgcixYVxyx5KMuQ1mX3Po9HE-w&usqp=CAU)", "background-size":"cover"});
    $(".view_icon").css({"background":"url(https://source.unsplash.com/random)", "background-size":"cover"});
    $(".status_down2").show();
    $(".status_down").hide();
    $(".view_name").text("My status");
    setTimeout(function(){
    $(".view_status_container").hide();
    $(".status_down").show();
    }, 8000);
    });
    $(".view_back").click(function(){
    $(".view_status_container").hide();
    });
    
    
    
    $(".li_status2").click(function(){
    $(".view_status_container").show();
    $(".view_status_container").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRSUkc_GKvOF71sbbBiwcsOpzjFGKyvFxmw&usqp=CAU)", "background-size":"cover"});
$(".view_icon").css({"background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT12cP23udqvCqHW_2oAvK257g3oVQkv23tOumxtpfFOhHi8a5B)", "background-size":"cover"});
    $(".status_down2").hide();
    $(".status_down").show();
    $(".view_name").text("Bill Gates");
    setTimeout(function(){
    $(".view_status_container").hide();
    $(".status_down").show();
    }, 8000);
    });
    $(".view_back").click(function(){
    $(".view_status_container").hide();
    });
    
    
    $(".li_status3").click(function(){
    $(".view_status_container").show();
    $(".view_status_container").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_qUJAaNKNLsLVVZVX4e7iTG-zYTC0WTeiQ&usqp=CAU)", "background-size":"cover"});
$(".view_icon").css({"background":"url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT)", "background-size":"cover"});
    $(".status_down2").hide();
    $(".status_down").show();
    $(".view_name").text("Jeff Bezos");
    setTimeout(function(){
    $(".view_status_container").hide();
    $(".status_down").show();
    }, 8000);
    });
    $(".view_back").click(function(){
    $(".view_status_container").hide();
    });
    
    $(".li_status4").click(function(){
    $(".view_status_container").show();
    $(".view_status_container").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-bFZDvwJW0D-xrOxK5GV-WTcI2pRUXsyuA&usqp=CAU)", "background-size":"cover"});
$(".view_icon").css({"background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1rDH_nWadT1GXFPomdutqV1PUMA8uXIWS2Js5_fq4pJ1lwG16)", "background-size":"cover"});
    $(".status_down2").hide();
    $(".status_down").show();
    $(".view_name").text("Mark Zuckerberg");
    setTimeout(function(){
    $(".view_status_container").hide();
    $(".status_down").show();
    }, 8000);
    });
    $(".view_back").click(function(){
    $(".view_status_container").hide();
    });
    
    
    $(".li_status5").click(function(){
    $(".view_status_container").show();
    $(".view_status_container").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkU-vVOPo24W1M4oSoXxvGDIFZ9KZTSrLKeg&usqp=CAU)", "background-size":"cover"});
    $(".status_down2").hide();
    $(".status_down").show();
$(".view_icon").css({"background":"url(https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQQ840Wk_80H2JjO4wmYQ8VpNzck-GCsmu8a4HqMDNoeZNAH5Zw8qkRZc9a2C9v)", "background-size":"cover"});
    $(".view_name").text("Larry Page");
    setTimeout(function(){
    $(".view_status_container").hide();
    $(".status_down").show();
    }, 8000);
    });
    $(".view_back").click(function(){
    $(".view_status_container").hide();
    });
    
    $(".li_status6").click(function(){
    $(".view_status_container").show();
    $(".view_status_container").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-44eg2xPHvoHlR0gaO7DXRGKO9MGhOKRzw&usqp=CAU)", "background-size":"cover"});
    $(".status_down2").hide();
    $(".status_down").show();
$(".view_icon").css({"background":"url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE)", "background-size":"cover"});
    $(".view_name").text("Elon Musk");
    setTimeout(function(){
    $(".view_status_container").hide();
    $(".status_down").show();
    }, 8000);
    });
    $(".view_back").click(function(){
    $(".view_status_container").hide();
    });
    
    
    $(".li_status7").click(function(){
    $(".view_status_container").show();
    $(".view_status_container").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BZ140TjscTxWdQ_FBN4oDB4Oev3pcU4hgQ&usqp=CAU)", "background-size":"cover"});
    $(".status_down2").hide();
    $(".status_down").show();
$(".view_icon").css({"background":"url(https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRTqPkCX1wgKlcE8FnfUjOQCyjayYR9schlFte0f_TvdXLr2F57rdYJov7oaNIe)", "background-size":"cover"});
    $(".view_name").text("Rob Walton");
    setTimeout(function(){
    $(".view_status_container").hide();
    $(".status_down").show();
    }, 8000);
    });
    $(".view_back").click(function(){
    $(".view_status_container").hide();
    });
    
    
    $(".li_status8").click(function(){
    $(".view_status_container").show();
    $(".view_status_container").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCQYBPxkZNSajdzTpFwnF71MfXUPVbiKPlw&usqp=CAU)", "background-size":"cover"});
$(".view_icon").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIGVmUB2OlzA80cf4xtLpc6QCvqdh3rNIpg&usqp=CAU)", "background-size":"cover"});
    $(".status_down2").hide();
    $(".status_down").show();
    $(".view_name").text("Carlos Slim");
    setTimeout(function(){
    $(".view_status_container").hide();
    $(".status_down").show();
    }, 8000);
    });
    $(".view_back").click(function(){
    $(".view_status_container").hide();
    });
    
    
    $(".li_status9").click(function(){
    $(".view_status_container").show();
    $(".view_status_container").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVKUCMLAD3UNvsmDkMr4azr3c2D-rYJsE9g&usqp=CAU)", "background-size":"cover"});
$(".view_icon").css({"background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0U5a32I81EyodYLVvHBNs7GSlBgmag51JRMz_0RQ2DqthEDKr)", "background-size":"cover"});
    $(".status_down2").hide();
    $(".status_down").show();
    $(".view_name").text("Warren Buffet");
    setTimeout(function(){
    $(".view_status_container").hide();
    $(".status_down").show();
    }, 8000);
    });
    $(".view_back").click(function(){
    $(".view_status_container").hide();
    });
    
    
    
    
    var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();
  h = (h <10) ? "0" + h : h;
 t = (t <10) ? "0" + t : t;
 if(h>12){
    h=h-12;
 }else{
    h=h;
 }
 time= h+":"+t;
    
    
    
    
    
    $(".real_chat").hide();
    $(".person1").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT)", "background-size":"cover"});
    $(".real_chat_name").text("Jeff Bezos");
    $(".container").hide();
    $(".rechats").text("Hi, we need an update to our website");
    $(".time_msgt").css({"color":"dimgrey"});
    $(".msgcol1").hide();
    $(".rtime").text(time);
    });
    
    $(".msg1").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT)", "background-size":"cover"});
    $(".real_chat_name").text("Jeff Bezos");
    $(".container").hide();
    $(".rechats").text("Hi, we need an update to our website");
    $(".time_msgt").css({"color":"dimgrey"});
    $(".msgcol1").hide();
    $(".rtime").text(time);
    });
    
    
    
    
    
    $(".person2").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT12cP23udqvCqHW_2oAvK257g3oVQkv23tOumxtpfFOhHi8a5B)", "background-size":"cover"});
    $(".real_chat_name").text("Bill Gates");
    $(".container").hide();
    $(".rechats").text("Yes, but the alert has not yet arrived");
    $(".time_msg1").css({"color":"dimgrey"});
    $(".msgcol2").hide();
    $(".rtime").text(time);
    });
    
    $(".msg2").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT12cP23udqvCqHW_2oAvK257g3oVQkv23tOumxtpfFOhHi8a5B)", "background-size":"cover"});
    $(".real_chat_name").text("Bill Gates");
    $(".container").hide();
    $(".rechats").text("Yes, but the alert has not yet arrived");
    $(".time_msg1").css({"color":"dimgrey"});
    $(".msgcol2").hide();
    $(".rtime").text(time);
    });
    
    
    
    
    
    $(".person3").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1rDH_nWadT1GXFPomdutqV1PUMA8uXIWS2Js5_fq4pJ1lwG16)", "background-size":"cover"});
    $(".real_chat_name").text("Mark Zuckerb...");
    $(".container").hide();
    $(".rechats").text("I called you yesterday, but you did not pick my call🙄");
    $(".time_msg2").css({"color":"dimgrey"});
    $(".msgcol3").hide();
    $(".rtime").text(time);
    });
    
    $(".msg3").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1rDH_nWadT1GXFPomdutqV1PUMA8uXIWS2Js5_fq4pJ1lwG16)", "background-size":"cover"});
    $(".real_chat_name").text("Mark Zuckerb...");
    $(".container").hide();
    $(".rechats").text("I called you yesterday, but you did not pick my call🙄");
    $(".time_msg2").css({"color":"dimgrey"});
    $(".msgcol3").hide();
    $(".rtime").text(time);
    });
    
    
    
    
    
    
    $(".person4").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE)", "background-size":"cover"});
    $(".real_chat_name").text("Elon Musk");
    $(".container").hide();
    $(".rechats").text("Hello Derrick king, i saw the updates");
    $(".time_msg3").css({"color":"dimgrey"});
    $(".msgcol4").hide();
    $(".rtime").text(time);
    });
    
    $(".msg4").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE)", "background-size":"cover"});
    $(".real_chat_name").text("Elon Musk");
    $(".container").hide();
    $(".rechats").text("Hello Derrick king, i saw the updates");
    $(".time_msg3").css({"color":"dimgrey"});
    $(".msgcol4").hide();
    $(".rtime").text(time);
    });
    
    
    
    
    
    
    
    $(".person5").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSUadwflQXaMZhx4HNJ9yjmPkQnKQoKRk4_yuC4WjgjjsAXdV5_QFZERdRTShHG)", "background-size":"cover"});
    $(".real_chat_name").text("Larry Ellison");
    $(".container").hide();
    $(".rechats").text("yes i saw the mail, I'm on my from the town");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    $(".msg5").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSUadwflQXaMZhx4HNJ9yjmPkQnKQoKRk4_yuC4WjgjjsAXdV5_QFZERdRTShHG)", "background-size":"cover"});
    $(".real_chat_name").text("Larry Ellison");
    $(".container").hide();
    $(".rechats").text("yes i saw the mail, I'm on my from the town");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    
    
    
    
    
    
    
    
    $(".person6").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQQ840Wk_80H2JjO4wmYQ8VpNzck-GCsmu8a4HqMDNoeZNAH5Zw8qkRZc9a2C9v)", "background-size":"cover"});
    $(".real_chat_name").text("Larry Page");
    $(".container").hide();
    $(".rechats").text("Hi Derrick king, I need a loan from you!!");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    $(".msg6").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQQ840Wk_80H2JjO4wmYQ8VpNzck-GCsmu8a4HqMDNoeZNAH5Zw8qkRZc9a2C9v)", "background-size":"cover"});
    $(".real_chat_name").text("Larry Page");
    $(".container").hide();
    $(".rechats").text("Hi Derrick king, I need a loan from you!!");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    
    
    
    
    
    
    
    $(".person7").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRjhVK6JmLl4J0MwVaAQy11_-b46X7VI81sJIuwf_UEJyg_O-_uChuBqIMSel3d)", "background-size":"cover"});
    $(".real_chat_name").text("Sergey Brin");
    $(".container").hide();
    $(".rechats").text("I want you to be our frontend developer for our company");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    $(".msg7").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRjhVK6JmLl4J0MwVaAQy11_-b46X7VI81sJIuwf_UEJyg_O-_uChuBqIMSel3d)", "background-size":"cover"});
    $(".real_chat_name").text("Sergey Brin");
    $(".container").hide();
    $(".rechats").text("I want you to be our frontend developer for our company");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    
    
    
    
    
    
    $(".person8").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0U5a32I81EyodYLVvHBNs7GSlBgmag51JRMz_0RQ2DqthEDKr)", "background-size":"cover"});
    $(".real_chat_name").text("Warren Buffet");
    $(".container").hide();
    $(".rechats").text("I'm trying to send you back the $380M");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    $(".msg8").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0U5a32I81EyodYLVvHBNs7GSlBgmag51JRMz_0RQ2DqthEDKr)", "background-size":"cover"});
    $(".real_chat_name").text("Warren Buffet");
    $(".container").hide();
    $(".rechats").text("I'm trying to send you back the $380M");
    $(".real_today").text("Yesterday");
    $(".rtime").text(time);
    });
    
    
    
    
    
    $(".person9").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyv0aAzhDzlUzFm_5uXSQvVp7GISukmB-2zA&usqp=CAU)", "background-size":"cover"});
    $(".real_chat_name").text("Alice Walton");
    $(".container").hide();
    $(".rechats").text("Good job! Derrick king, glad to see your code");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    $(".msg9").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyv0aAzhDzlUzFm_5uXSQvVp7GISukmB-2zA&usqp=CAU)", "background-size":"cover"});
    $(".real_chat_name").text("Alice Walton");
    $(".container").hide();
    $(".rechats").text("Good job! Derrick king, glad to see your code");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    
    
    
    
    
    $(".person10").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTFNWogBmphs9qMbvplnItdr9z1nA41VxzHpdxq9n-tigPQjc3-7pPMx83rK0tk)", "background-size":"cover"});
    $(".real_chat_name").text("Jim Walton");
    $(".container").hide();
    $(".rechats").text("I have a serious issue with you, please i want to see you tommorrow");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    $(".msg10").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTFNWogBmphs9qMbvplnItdr9z1nA41VxzHpdxq9n-tigPQjc3-7pPMx83rK0tk)", "background-size":"cover"});
    $(".real_chat_name").text("Jim Walton");
    $(".container").hide();
    $(".rechats").text("I have a serious issue with you, please i want to see you tommorrow");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    
    
    
    $(".person11").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Mike_Bloomberg_Headshot.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Michael Bloo...");
    $(".container").hide();
    $(".rechats").text("it was very very nice, thank you so much");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    $(".msg11").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Mike_Bloomberg_Headshot.jpg)", "background-size":"cover"});
    $(".real_chat_name").text("Michael Bloo...");
    $(".container").hide();
    $(".rechats").text("it was very very nice, thank you so much");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    
    
    
    
    
    $(".person12").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTkkZVfx7MDl1vS6XBHph7VvTMfETmBQWO4nsvXAq9MFO689TB9HQ7OAhS-1W4I)", "background-size":"cover"});
    $(".real_chat_name").text("Mukesh Amb...");
    $(".container").hide();
    $(".rechats").text("Thank you bhai😊, i'll meet you tommorrow");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    $(".msg12").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTkkZVfx7MDl1vS6XBHph7VvTMfETmBQWO4nsvXAq9MFO689TB9HQ7OAhS-1W4I)", "background-size":"cover"});
    $(".real_chat_name").text("Mukesh Amb...");
    $(".container").hide();
    $(".rechats").text("Thank you bhai😊, i'll meet you tommorrow");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    
    
    
    $(".person13").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRTqPkCX1wgKlcE8FnfUjOQCyjayYR9schlFte0f_TvdXLr2F57rdYJov7oaNIe)", "background-size":"cover"});
    $(".real_chat_name").text("Rob Walton");
    $(".container").hide();
    $(".rechats").text("Okay, no problem i'll come as soon as possible");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    $(".msg13").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRTqPkCX1wgKlcE8FnfUjOQCyjayYR9schlFte0f_TvdXLr2F57rdYJov7oaNIe)", "background-size":"cover"});
    $(".real_chat_name").text("Rob Walton");
    $(".container").hide();
    $(".rechats").text("Okay, no problem i'll come as soon as possible");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    
    
    
    $(".person14").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS5PUoIIwZz81pF5O2LLNZUHjH7S57UlJBDyT5NIaA97Wj4mhFwUplM3-nxx3Dc)", "background-size":"cover"});
    $(".real_chat_name").text("Carlos Slim");
    $(".container").hide();
    $(".rechats").text("are you done with the project please? ");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    $(".msg14").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS5PUoIIwZz81pF5O2LLNZUHjH7S57UlJBDyT5NIaA97Wj4mhFwUplM3-nxx3Dc)", "background-size":"cover"});
    $(".real_chat_name").text("Carlos Slim");
    $(".container").hide();
    $(".rechats").text("are you done with the project please? ");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    
    
    $(".person15").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIGVmUB2OlzA80cf4xtLpc6QCvqdh3rNIpg&usqp=CAU)", "background-size":"cover"});
    $(".real_chat_name").text("Warren Buffet");
    $(".container").hide();
    $(".rechats").text("i'll be back to you before 12:00 AM");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    $(".msg15").click(function(){
    $(".real_chat").show();
    $(".real_chat_icon").css({"background":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIGVmUB2OlzA80cf4xtLpc6QCvqdh3rNIpg&usqp=CAU)", "background-size":"cover"});
    $(".real_chat_name").text("Warren Buffet");
    $(".container").hide();
    $(".rechats").text("i'll be back to you before 12:00 AM");
    $(".real_today").text("December");
    $(".rtime").text(time);
    });
    
    
    
    $(".real_chat").click(function(){
    $("#menu").hide();
    });
    $(".real_chat_back").click(function(){
    $("#menu").hide();
    $("#schat").remove();
    $("#rchat").remove();
    $(".real_chat").hide();
    $(".container").show();
    });
    
    