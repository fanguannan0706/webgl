//
//Mycharts类
Mycharts = {
	
};

//Line chart 类
Mycharts.LineChart = function(chart_div,data_name){
	var data = getData(data_name);
		// 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/line' ,
                'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById(chart_div)); 
                
                var option = {
                      title : {
        text: '未来五天气温变化',
        
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : data[0]
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
             
               
            }
        }
    ],
    series : [
        {
            name:'最高气温',
            type:'line',
            data:data[1],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            data:data[2],
            markPoint : {
                data : [
                    {name : '周最低', type : 'min'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
          };
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
}


//LineBar chart 类  
Mycharts.BarChart = function(chart_div){
	
		// 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/line' ,
                'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById(chart_div)); 
                
                option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量','最低气温','最高气温']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis : [
        {
            type : 'category',
            position: 'bottom',
            boundaryGap: true,
            axisLine : {    // 轴线
                show: true,
                lineStyle: {
                    color: 'green',
                    type: 'solid',
                    width: 2
                }
            },
            axisTick : {    // 轴标记
                show:true,
                length: 10,
                lineStyle: {
                    color: 'red',
                    type: 'solid',
                    width: 2
                }
            },
            axisLabel : {
                show:true,
                interval: 'auto',    // {number}
                rotate: 45,
                margin: 8,
                formatter: '{value}月',
                textStyle: {
                    color: 'blue',
                    fontFamily: 'sans-serif',
                    fontSize: 15,
                    fontStyle: 'italic',
                    fontWeight: 'bold'
                }
            },
            splitLine : {
                show:true,
                lineStyle: {
                    color: '#483d8b',
                    type: 'dashed',
                    width: 1
                }
            },
            splitArea : {
                show: true,
                areaStyle:{
                    color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
                }
            },
            data : [
                '1','2','3','4','5','6',                
                
                '7','8','9','10','11','12'
            ]
        },
        {
            type : 'category',
            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        }
    ],
    yAxis : [
        {
            type : 'value',
            position: 'left',
            //min: 0,
            //max: 300,
            //splitNumber: 5,
            boundaryGap: [0,0.1],
            axisLine : {    // 轴线
                show: true,
                lineStyle: {
                    color: 'red',
                    type: 'dashed',
                    width: 2
                }
            },
            axisTick : {    // 轴标记
                show:true,
                length: 10,
                lineStyle: {
                    color: 'green',
                    type: 'solid',
                    width: 2
                }
            },
            axisLabel : {
                show:true,
                interval: 'auto',    // {number}
                rotate: -45,
                margin: 18,
                formatter: '{value} ml',    // Template formatter!
                textStyle: {
                    color: '#1e90ff',
                    fontFamily: 'verdana',
                    fontSize: 10,
                    fontStyle: 'normal',
                    fontWeight: 'bold'
                }
            },
            splitLine : {
                show:true,
                lineStyle: {
                    color: '#483d8b',
                    type: 'dotted',
                    width: 2
                }
            },
            splitArea : {
                show: true,
                areaStyle:{
                    color:['rgba(205,92,92,0.3)','rgba(255,215,0,0.3)']
                }
            }
        },
        {
            type : 'value',
            splitNumber: 10,
            axisLabel : {
                formatter: function (value) {
                    // Function formatter
                    return value + ' °C'
                }
            },
            splitLine : {
                show: false
            }
        }
    ],
    series : [
        {
            name: '蒸发量',
            type: 'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'最低气温',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        },
        {
            name:'最高气温',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [12.0, 12.2, 13.3, 14.5, 16.3, 18.2, 28.3, 33.4, 31.0, 24.5, 18.0, 16.2]
        }
    ]
};
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
}

//Mychars Scatter类.可接受3维数据
Mycharts.ScatterChart = function(chart_div){
	
		// 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/line' ,
                'echarts/chart/scatter' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById(chart_div)); 
                
              option = {
    title : {
        text: '男性女性身高体重分布',
        subtext: '抽样调查来自: Heinz  2003'
    },
    tooltip : {
        trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                   + params.value[0] + 'cm ' 
                   + params.value[1] + 'kg ';
            }
            else {
                return params.seriesName + ' :<br/>'
                   + params.name + ' : '
                   + params.value + 'kg ';
            }
        },  
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    legend: {
        data:['女性','男性']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} cm'
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} kg'
            }
        }
    ],
    series : [
        {
            name:'女性',
            type:'scatter',
            data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
            ],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'男性',
            type:'scatter',
            data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
                [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
                [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
                [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
                [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
                [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
                [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
                [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
                [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
                [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
                [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
                [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
                [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
                [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
                [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
                [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
                [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
                [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
                [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
                [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
                [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
                [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
                [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
                [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
                [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
                [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
                [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
                [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
                [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
                [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
                [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
                [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
                [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
                [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
                [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
                [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
                [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
                [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
                [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
                [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
                [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
                [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                [180.3, 83.2], [180.3, 83.2]
            ],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};
                    
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
}

Mycharts.MapChart = function(chart_div,data_name,coord){
 require(  ['echarts','echarts/chart/map'],
function(ec){

var myChart=ec.init(document.getElementById(chart_div));
//浮标显示数据
var geo = {};
geo[data_name] = [coord[1],coord[0]];
var geoCoordMap = {
                "海门":[121.15,31.89],
                "鄂尔多斯":[109.781327,39.608266],
                "招远":[120.38,37.35],
                "舟山":[122.207216,29.985295],
                "齐齐哈尔":[123.97,47.33],
                "盐城":[120.13,33.38],
                "赤峰":[118.87,42.28],
                "青岛":[120.33,36.07],
                "乳山":[121.52,36.89],
                "金昌":[102.188043,38.520089],
                "泉州":[118.58,24.93],
                "莱西":[120.53,36.86],
                "日照":[119.46,35.42],
                "胶南":[119.97,35.88],
                "南通":[121.05,32.08],
                "拉萨":[91.11,29.97],
                "云浮":[112.02,22.93],
                "梅州":[116.1,24.55],
                "文登":[122.05,37.2],
                "上海":[121.48,31.22],
                "攀枝花":[101.718637,26.582347],
                "威海":[122.1,37.5],
                "承德":[117.93,40.97],
                "厦门":[118.1,24.46],
                "汕尾":[115.375279,22.786211],
                "潮州":[116.63,23.68],
                "丹东":[124.37,40.13],
                "太仓":[121.1,31.45],
                "曲靖":[103.79,25.51],
                "烟台":[121.39,37.52],
                "福州":[119.3,26.08],
                "瓦房店":[121.979603,39.627114],
                "即墨":[120.45,36.38],
                "抚顺":[123.97,41.97],
                "玉溪":[102.52,24.35],
                "张家口":[114.87,40.82],
                "阳泉":[113.57,37.85],
                "莱州":[119.942327,37.177017],
                "湖州":[120.1,30.86],
                "汕头":[116.69,23.39],
                "昆山":[120.95,31.39],
                "宁波":[121.56,29.86],
                "湛江":[110.359377,21.270708],
                "揭阳":[116.35,23.55],
                "荣成":[122.41,37.16],
                "连云港":[119.16,34.59],
                "葫芦岛":[120.836932,40.711052],
                "常熟":[120.74,31.64],
                "东莞":[113.75,23.04],
                "河源":[114.68,23.73],
                "淮安":[119.15,33.5],
                "泰州":[119.9,32.49],
                "南宁":[108.33,22.84],
                "营口":[122.18,40.65],
                "惠州":[114.4,23.09],
                "江阴":[120.26,31.91],
                "蓬莱":[120.75,37.8],
                "韶关":[113.62,24.84],
                "嘉峪关":[98.289152,39.77313],
                "广州":[113.23,23.16],
                "延安":[109.47,36.6],
                "太原":[112.53,37.87],
                "清远":[113.01,23.7],
                "中山":[113.38,22.52],
                "昆明":[102.73,25.04],
                "寿光":[118.73,36.86],
                "盘锦":[122.070714,41.119997],
                "长治":[113.08,36.18],
                "深圳":[114.07,22.62],
                "珠海":[113.52,22.3],
                "宿迁":[118.3,33.96],
                "咸阳":[108.72,34.36],
                "铜川":[109.11,35.09],
                "平度":[119.97,36.77],
                "佛山":[113.11,23.05],
                "海口":[110.35,20.02],
                "江门":[113.06,22.61],
                "章丘":[117.53,36.72],
                "肇庆":[112.44,23.05],
                "大连":[121.62,38.92],
                "临汾":[111.5,36.08],
                "吴江":[120.63,31.16],
                "石嘴山":[106.39,39.04],
                "沈阳":[123.38,41.8],
                "苏州":[120.62,31.32],
                "茂名":[110.88,21.68],
                "嘉兴":[120.76,30.77],
                "长春":[125.35,43.88],
                "胶州":[120.03336,36.264622],
                "银川":[106.27,38.47],
                "张家港":[120.555821,31.875428],
                "三门峡":[111.19,34.76],
                "锦州":[121.15,41.13],
                "南昌":[115.89,28.68],
                "柳州":[109.4,24.33],
                "三亚":[109.511909,18.252847],
                "自贡":[104.778442,29.33903],
                "吉林":[126.57,43.87],
                "阳江":[111.95,21.85],
                "泸州":[105.39,28.91],
                "西宁":[101.74,36.56],
                "宜宾":[104.56,29.77],
                "呼和浩特":[111.65,40.82],
                "成都":[104.06,30.67],
                "大同":[113.3,40.12],
                "镇江":[119.44,32.2],
                "桂林":[110.28,25.29],
                "张家界":[110.479191,29.117096],
                "宜兴":[119.82,31.36],
                "北海":[109.12,21.49],
                "西安":[108.95,34.27],
                "金坛":[119.56,31.74],
                "东营":[118.49,37.46],
                "牡丹江":[129.58,44.6],
                "遵义":[106.9,27.7],
                "绍兴":[120.58,30.01],
                "扬州":[119.42,32.39],
                "常州":[119.95,31.79],
                "潍坊":[119.1,36.62],
                "重庆":[106.54,29.59],
                "台州":[121.420757,28.656386],
                "南京":[118.78,32.04],
                "滨州":[118.03,37.36],
                "贵阳":[106.71,26.57],
                "无锡":[120.29,31.59],
                "本溪":[123.73,41.3],
                "克拉玛依":[84.77,45.59],
                "渭南":[109.5,34.52],
                "马鞍山":[118.48,31.56],
                "宝鸡":[107.15,34.38],
                "焦作":[113.21,35.24],
                "句容":[119.16,31.95],
                "北京":[116.46,39.92],
                "徐州":[117.2,34.26],
                "衡水":[115.72,37.72],
                "包头":[110,40.58],
                "绵阳":[104.73,31.48],
                "乌鲁木齐":[87.68,43.77],
                "枣庄":[117.57,34.86],
                "杭州":[120.19,30.26],
                "淄博":[118.05,36.78],
                "鞍山":[122.85,41.12],
                "溧阳":[119.48,31.43],
                "库尔勒":[86.06,41.68],
                "安阳":[114.35,36.1],
                "开封":[114.35,34.79],
                "济南":[117,36.65],
                "德阳":[104.37,31.13],
                "温州":[120.65,28.01],
                "九江":[115.97,29.71],
                "邯郸":[114.47,36.6],
                "临安":[119.72,30.23],
                "兰州":[103.73,36.03],
                "沧州":[116.83,38.33],
                "临沂":[118.35,35.05],
                "南充":[106.110698,30.837793],
                "天津":[117.2,39.13],
                "富阳":[119.95,30.07],
                "泰安":[117.13,36.18],
                "诸暨":[120.23,29.71],
                "郑州":[113.65,34.76],
                "哈尔滨":[126.63,45.75],
                "聊城":[115.97,36.45],
                "芜湖":[118.38,31.33],
                "唐山":[118.02,39.63],
                "平顶山":[113.29,33.75],
                "邢台":[114.48,37.05],
                "德州":[116.29,37.45],
                "济宁":[116.59,35.38],
                "荆州":[112.239741,30.335165],
                "宜昌":[111.3,30.7],
                "义乌":[120.06,29.32],
                "丽水":[119.92,28.45],
                "洛阳":[112.44,34.7],
                "秦皇岛":[119.57,39.95],
                "株洲":[113.16,27.83],
                "石家庄":[114.48,38.03],
                "莱芜":[117.67,36.19],
                "常德":[111.69,29.05],
                "保定":[115.48,38.85],
                "湘潭":[112.91,27.87],
                "金华":[119.64,29.12],
                "岳阳":[113.09,29.37],
                "长沙":[113,28.21],
                "衢州":[118.88,28.97],
                "廊坊":[116.7,39.53],
                "菏泽":[115.480656,35.23375],
                "合肥":[117.27,31.86],
                "武汉":[114.31,30.52],
                "大庆":[125.03,46.58]
            };

//图标显示提示信息
myChart.showLoading({text:"图表数据正在努力加载..."});
myChart.hideLoading();
option = {
   color: [
        'rgba(255, 0, 0, 0.8)',
        'rgba(255, 255, 0, 0.8)'
    ],
    tooltip : {
        trigger: 'item'
    },
    series : [
        {
            name: '缩略地图',
            type: 'map',
            mapType: 'china',
            hoverable: false,
            roam:false,
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',//地图边界线颜色
                    borderWidth:1.5,
                    areaStyle:{
                        color: '#1b1b1b'//地图背景色
                    }
                }
            },
            data : [],
            markPoint : {
                symbol : 'diamond',
                symbolSize: 3,
                effect : {
                    show: true,
                },

                data:[]
            },
            geoCoord:geo
        }
    ]     
};
                   
myChart.setOption(option, true);
myChart.addMarkPoint(0,{"data":[{"name": data_name,"value":coord}]});
});

}