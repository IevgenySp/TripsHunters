/**
 * Created by isp on 11/9/17.
 */

const initialState = [
    {
        id: 1,
        data: {
            title: {
                text: ''
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:[]
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {
                        //color: '#cdd422'
                        color: '#F79533'
                    }},
                    itemStyle: {
                        normal: {
                            //color: '#cdd422'
                            color: '#F79533'
                        }
                    },
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {
                        //color: '#e05915'
                        color: '#A166AB'
                    }},
                    itemStyle: {
                        normal: {
                            //color: '#e05915'
                            color: '#A166AB'
                    }},
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {
                        //color: '#431c5d'
                        color: '#1098AD'
                    }},
                    itemStyle: {
                        normal: {
                            //color: '#431c5d'
                            color: '#1098AD'
                        }
                    },
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {
                        color: '#e6e9f0'
                    }},
                    itemStyle: {
                        normal: {
                            color: '#e6e9f0'
                        }
                    },
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {
                        color: '#c2dde6'
                    }},
                    itemStyle: {
                        normal: {
                            color: '#c2dde6'
                        }
                    },
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        },
        facts: [
            {
                id: 1,
                category: 'numeric',
                mainText: '36',
                text: '% of men run a half marathon faster than 1:45'
            },
            {
                id: 2,
                category: 'numeric',
                mainText: '11',
                text: '% of women complete a half marathon in under 1:45'
            },
            {
                id: 3,
                category: 'numeric',
                mainText: '1/3',
                text: 'of men run a half marathon in 2:00 or slower'
            },
            {
                id: 4,
                category: 'numeric',
                mainText: '2/3',
                text: 'of women run the half marathon in 2:00 or slower'
            }
        ]
    },
    {
        id: 2,
        data: {
            title: {
                text: ''
            },
            tooltip : {
                trigger: 'axis',
                showDelay : 0,
                axisPointer:{
                    show: true,
                    type : 'cross',
                    lineStyle: {
                        type : 'dashed',
                        width : 1
                    }
                },
                zlevel: 1
            },
            legend: {
                data:[]
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'value',
                    scale:true
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    scale:true
                }
            ],
            series : [
                {
                    name:'sin',
                    type:'scatter',
                    large: true,
                    symbolSize: 3,
                    itemStyle: {
                        normal: {
                            color: '#1098AD'
                        }
                    },
                    data: (function () {
                        var d = [];
                        var len = 10000;
                        var x = 0;
                        while (len--) {
                            x = (Math.random() * 10).toFixed(3) - 0;
                            d.push([
                                x,
                                //Math.random() * 10
                                (Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
                            ]);
                        }
                        //console.log(d)
                        return d;
                    })()
                },
                {
                    name:'cos',
                    type:'scatter',
                    large: true,
                    symbolSize: 2,
                    itemStyle: {
                        normal: {
                            color: '#A166AB'
                        }
                    },
                    data: (function () {
                        var d = [];
                        var len = 20000;
                        var x = 0;
                        while (len--) {
                            x = (Math.random() * 10).toFixed(3) - 0;
                            d.push([
                                x,
                                //Math.random() * 10
                                (Math.cos(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
                            ]);
                        }
                        //console.log(d)
                        return d;
                    })()
                }
            ]
        },
        facts: [
            {
                id: 1,
                category: 'time',
                text: 'Runners with faster half marathons times run more miles each week'
            },
            {
                id: 2,
                category: 'time',
                text: 'All runners regardless of their half marathon time, run, on average, 5-6 miles per run'
            },
            {
                id: 3,
                category: 'woman',
                text: 'Female athletes run more miles per week than males'
            }
        ]
    },
    {
        id: 3,
        data: {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:[]
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Week 7','Week 6','Week 5','Week 4','Week 3','Week 2','Week 1']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            color: '#F79533'
                        }
                    },
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            color: '#A166AB'
                        }
                    },
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            color: '#1098AD'
                        }
                    },
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            color: '#c2dde6'
                        }
                    },
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            color: '#bccbde'
                        }
                    },
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        },
        facts: [
            {
                id: 1,
                category: 'numeric',
                mainText: '20',
                text: '% of weekly mileage is spent on runs of 10 miles or more'
            },
            {
                id: 2,
                category: 'numeric',
                mainText: '5-10',
                text: 'miles zone is were faster marathon runners do the bulk of their training runs'
            },
            {
                id: 3,
                category: 'numeric',
                mainText: '4+',
                text: 'hour finishers do roughly half their mileage in runs of less than 5 miles'
            }
        ]
    },
    {
        id: 4,
        data: {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: []
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            xAxis:  {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F79533'
                        }
                    },
                    data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name: '邮件营销',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#A166AB'
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#1098AD'
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c2dde6'
                        }
                    },
                    data: [150, 212, 201, 154, 190, 330, 410]
                },
                {
                    name: '搜索引擎',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#bccbde'
                        }
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                }
            ]
        },
        facts: [
            {
                id: 1,
                category: 'peak',
                text: 'Marathoners mileage peaks 4 weeks prior to race day'
            },
            {
                id: 2,
                category: 'finisher',
                text: 'Almost every finisher continues running the week after their race'
            },
            {
                id: 3,
                category: 'time',
                text: 'Maraphoners taper significantly in the weeks leading up to the race'
            },
            {
                id: 4,
                category: 'finish',
                text: 'Most runs significantly less miles than their weekly average after their race'
            }
        ]
    },
    {
        id: 5,
        data: {
            angleAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                z: 103
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: '#F79533'
                    }
                },
                data: [1, 2, 3, 4, 3, 5, 1],
                coordinateSystem: 'polar',
                name: 'A',
                stack: 'a'
            }, {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: '#A166AB'
                    }
                },
                data: [2, 4, 6, 1, 3, 2, 1],
                coordinateSystem: 'polar',
                name: 'B',
                stack: 'a'
            }, {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: '#1098AD'
                    }
                },
                data: [1, 2, 3, 4, 1, 2, 5],
                coordinateSystem: 'polar',
                name: 'C',
                stack: 'a'
            }]
        },
        facts: [
            {
                id: 1,
                category: 'peak',
                text: 'Half marathoners don\'t peak and taper much in the weeks leading up to their race'
            },
            {
                id: 2,
                category: 'finisher',
                text: 'Almost every finisher continues running the week after their race'
            },
            {
                id: 3,
                category: 'time',
                text: 'Their mileage stay consistent week to week'
            },
            {
                id: 4,
                category: 'finish',
                text: 'Most run slightly more miles than their weekly average in the 12 week leading up to the race'
            }
        ]
    }
];

export default function turnsList(state = initialState, action) {
    if (action.type === 'ADD_TURN') {
        return [
            ...state,
            action.chart
        ];
    }
    return state;
}