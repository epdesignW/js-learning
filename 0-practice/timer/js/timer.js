function timer(totalMiao,index){
    var which = "#timer"+index;
    function daojishi(){
        var hour = 0,
            minute = 0,
            second = 0; //时间默认设置
        if(totalMiao>0){
            day = Math.floor(totalMiao/(60*60*24));
            hour = Math.floor(totalMiao%(60*60*24)/(60*60));
            minute = Math.floor(totalMiao%(60*60)/60);
            second = Math.floor(totalMiao%60);
        }else{
            $(which + " ul").css("display","none");
            $(which + " .orderNum").fadeIn();
            console.log(which);
            clearInterval(d1);
        }
        if(day <=9){
        day = "0" + day;
        }
        if(hour <=9){
        hour = "0" + hour;
        }
        if(minute <=9){
            minute = "0" + minute;
        }
        if(second <=9){
        second = "0" + second;
        }
        $(which + " .day").html(day);
        $(which + " .hour").html(hour);
        $(which + " .minute").html(minute);
        $(which + " .second").html(second);
        //倒计时
        totalMiao--;
    }
    var d1 =  setInterval(daojishi,1000); 
}
//获得总的时间（秒）
function getMiao(str){
    // var str = str.replace(/\-/g, "/");
    // var d1 = new Date(str);
    // var d2 = new Date();
    // return parseInt((d1 - d2)/1000)
    return parseInt(str);
}
timer(172800,1);
