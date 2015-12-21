function getCoord(data_name){ 
var coord = new Array();
    $.ajax({
        async : false,
        type: 'GET',
        url: 'http://apis.baidu.com/xiaogg/citylocation/citylocation?city='+data_name,
        dataType:'json',
        headers:{
          "apikey":"a14a43d64bfc59f4b6bd191d21e6d159"
        },
        beforeSend:function(){

        },
        success:function(json){
          data = eval(json);
          coord[0] = Number(data.y);
          coord[1] = Number(data.x);
        },
        error:function(e){
            alert("���ݼ���ʧ��");
        }
    });
    return coord;
}

function getPinyin(data_name){ 
var pinyin;
    $.ajax({
        async : false,
        type: 'GET',
        url: 'http://apis.baidu.com/xiaogg/changetopinyin/topinyin?type=json&traditional=0&accent=0&letter=0&only_chinese=0&str='+data_name,
        dataType:'json',
        headers:{
          "apikey":"a14a43d64bfc59f4b6bd191d21e6d159"
        },
        beforeSend:function(){

        },
        success:function(json){
          data = eval(json);
          pinyin = data.pinyin.replace(/\s/g,"");
        },
        error:function(e){
            alert("���ݼ���ʧ��");
        }
    });
    return pinyin;
}

function getData(data_name){ 
    var data = new Array();
    var data_date = new Array();
    var data_high = new Array();
    var data_low = new Array();
    var i = 0;
    $.ajax({
        async : false,
        type: 'GET',
        url: 'http://wthrcdn.etouch.cn/WeatherApi?city='+data_name,
        dataType:'xml',
        beforeSend:function(){

        },
        success:function(xml){
          $(xml).find("forecast").find("weather").each(function(){

             var tmp_date = $(this).find("date").text();

             data_date[i] = tmp_date;
             var tmp_high = $(this).find("high").text();
             tmp_high = tmp_high.substring(3,tmp_high.length-1);
             
             data_high[i] = Number(tmp_high);

             var tmp_low = $(this).find("low").text();
             tmp_low = tmp_low.substring(3,tmp_low.length-1);

             data_low[i] = Number(tmp_low);

             i = i+1;
          });
          data = [data_date,data_high,data_low];

        },
        error:function(){
            alert("���ݼ���ʧ��");
        }
    });
    return data; 
}