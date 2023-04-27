//监控区域点击切换
// （立即执行函数）
(function(){
    $(".monitor .tabs").on("click" , "a", function(){
        // 点击高亮
        $(this)
        .addClass("active")
        .siblings("a")
        .removeClass("active");

        //点击展示
        // console.log($(this).index()); 
        $('.monitor .content')
            .eq($(this).index())
            .show()
            .siblings(".content")
            .hide();
    });
    // 克隆marquee里面的所有row
    $(".marquee-view .marquee").each(function(){
     var rows = $(this)
        .children()
        .clone();
    $(this).append(rows);
    });

})();

/* 点位统计分布模块 */
(function(){
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));

    // 指定配置项数据
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
        color:[
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff",
        ],
          series: [
        
            {
              name: '点位统计',
              type: 'pie',
              radius: ["20%","70%"],
              center: ['50%', '50%'],
              roseType: 'radius',
              itemStyle: {
                borderRadius: 5
              },
              data: [
                { value: 20, name: "云南" },
                { value: 26, name: "北京" },
                { value: 24, name: "山东" },
                { value: 25, name: "河北" },
                { value: 20, name: "江苏" },
                { value: 25, name: "浙江" },
                { value: 30, name: "四川" },
                { value: 42, name: "湖北" }
              ],
              label:{
                fonntSize:10
              },
              labelLine:{
                length:6,
                length2:8
              }
            }
            
          ]
    }
    // 配置数据给实例化对象
    myChart.setOption(option);

    // 窗口缩放，图表也等比缩放
    window.addEventListener("resize",function(){
      myChart.resize()
    });
})();

// 柱状图
(function(){
  var item = {
    name: "",
    value: 1200,
    // 1. 修改当前柱形的样式
    itemStyle: {
      color: "#254065"
    },
    // 2. 鼠标放到柱子上不想高亮显示
    emphasis: {
      itemStyle: {
        color: "#254065"
      }
    },
    // 3. 鼠标经过柱子不显示提示框组件
    tooltip: {
      extraCssText: "opacity: 0"
    }
  };
  // 实例化对象
  var myChart = echarts.init(document.querySelector('.bar'));

  // 指定配置项数据
  
  var option = {
      color: new echarts.graphic.LinearGradient(
        // (x1,y2) 点到点 (x2,y2) 之间进行渐变
        0,
        0,
        0,
        1,
        [
          { offset: 0, color: "#00fffb" }, // 0 起始颜色
          { offset: 1, color: "#0061ce" } // 1 结束颜色
        ]
      ),
      tooltip: {
        trigger: 'item',
        
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top:'3%',
        containLabel: true,
        // 显示直角坐标系网格
        show:true,
        // 四条边框颜色
        borderColor:'rgba(0,240,255,0.3)'
      },
      xAxis: [
        {
          type: 'category',
          data: [
            "上海",
            "广州",
            "北京",
            "深圳",
            "合肥",
            "",
            "......",
            "",
            "杭州",
            "厦门",
            "济南",
            "成都",
            "重庆"
          ],

          axisTick: {
            // 刻度在图形中间
            alignWithLabel: false,
            // 不显示刻度
            show:false
          },
          // X轴文字样式
          axisLabel: {
            color: "#4c9bfd"
          },
          // x轴这条线的颜色样式
          axisLine: {
            lineStyle: {
              color: "rgba(0, 240, 255, 0.3)"
              // width: 3
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: {
            // 刻度在图形中间
            alignWithLabel: false,
            // 不显示刻度
            show:false
          },
          // X轴文字样式
          axisLabel: {
            color: "#4c9bfd"
          },
          // x轴这条线的颜色样式
          axisLine: {
            lineStyle: {
              color: "rgba(0, 240, 255, 0.3)"
              // width: 3
            }
          },
          // y轴分割线的颜色样式
          splitLine: {
            lineStyle: {
              color: "rgba(0, 240, 255, 0.3)"
            }
          }
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: [
            2100,
            1900,
            1700,
            1560,
            1400,
            item,
            item,
            item,
            900,
            750,
            600,
            480,
            240
          ]
        }
      ]
    
  }

  // 配置数据给实例化对象
  myChart.setOption(option);
  // 窗口缩放，图表也等比缩放
  window.addEventListener("resize",function(){
    myChart.resize()
  });
})();

// 折线图
(function(){
  // 准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  };
  // 实例化对象
  var myChart = echarts.init(document.querySelector('.line'));
  // 配置数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      },
      data: ['预期销售额', '实际销售额']
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
       bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "#4c9bfd"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      },
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
    },
    yAxis: {
      
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "#4c9bfd"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: '预期销售额',
        type: 'line',
        stack: '总量',
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: '实际销售额',
        type: 'line',
        stack: '总量',
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[1]
      },
  
    ]
  };

  // 配置数据给实例化对象
  myChart.setOption(option);
  // 窗口缩放，图表也等比缩放
  window.addEventListener("resize",function(){
    myChart.resize()
  });

  // 点击切换
  $(".sales .caption").on("click","a",function(){
    $(this)
    .addClass('active')
    .siblings("a")
    .removeClass('active')

  var arr = data[this.dataset.type];
  option.series[0].data = arr[0];
  option.series[1].data = arr[1];
  myChart.setOption(option);
  })

  // 定时器自动切换
  var as = $(".sales .caption a")
  var index = $(this).index()-1
  var timer = setInterval(function(){
    index++
    if (index>4){index=0};
    as.eq(index).click();
  },1000)

  // 鼠标经过事件关闭事件。离开开启事件
$(".sales").hover(
  function(){
    clearInterval(timer)
  },
  function(){
    clearInterval(timer)
    timer = setInterval(function(){
      index++;
      if (index>4){index=0};
      as.eq(index).click();
    },1000)


  }
)

})();


// 雷达图
(function(){
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".radar"))
  // 准备数据
  // const dataBJ = [
  //   [55, 9, 56, 0.46, 18, 6, 1],
  // ];
  // const lineStyle = {
  //   width: 1,
  //   opacity: 0.5
  // };
  var option = {
    tooltip:{
      show:true,
      // 框组件的提示位置
      position:["60%", "10%"]
    },
    radar: {
      indicator: [
        { name: "机场", max: 100 },
        { name: "商场", max: 100 },
        { name: "火车站", max: 100 },
        { name: "汽车站", max: 100 },
        { name: "地铁", max: 100 }
      ],

      //修改雷达图大小
      radius:"65%",
      shape: 'circle',
      splitNumber: 4,
      // 文本修改
      axisName: {
        color: 'rgba(255, 255, 255, 0.5)'
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)"
        }
      },
      splitArea: {
        show: false
      },
      // 坐标轴的线修改
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      }
    },
    series: [
      {
        name: 'Beijing',
        type: 'radar',
        lineStyle:{
          color:"#fff",
          width: 1,
          opacity: 0.5
        },
        data: [[90, 19, 56, 11, 34]],
        // 设置图形标记
        symbol: 'circle',
        //设置小圆点大小
        symbolSize:5,
        //设置小圆点颜色
        itemStyle: {
          color: '#fff'
        },
        // 小圆点显示数据
        label:{
          show:true
        },
        areaStyle: {
          color: "rgba(238, 197, 102, 0.6)",
          fonntSize:10,
        },
        
      },
    ],
    
  };
  // 配置数据给实例化对象
  myChart.setOption(option);
  // 窗口缩放，图表也等比缩放
  window.addEventListener("resize",function(){
    myChart.resize()
  });
})();

//饼行图，销售模块
(function(){
  // 实例化对象
  var myChart = echarts.init(document.querySelector('.gauge'))
  // 配置数据
  var option = {
    series: [
      {
        name: '销售模块',
        type: 'pie',
        radius: ['130%', '150%'],
        center: ['50%', '80%'],
        // adjust the start angle
        startAngle: 180,
        labelLine:{
          normal:{
            show:false
          }
        } ,
        // 鼠标经过不需要放大偏移图形
        hoverOffset: 0,
        data: [
          { value: 100, 
            itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                  { offset: 1, color: "#005fc1" } // 1 结束颜色
                ]
              )
            }
          },
          { value: 100,
            itemStyle: {
              color: "#12274d"
            }
          },
          {
            // make an record to fill the bottom 50%
            value: 100+100,
            itemStyle: {
              // stop the chart from rendering this piece
              color: 'none',
              decal: {
                symbol: 'none'
              }
            },
            label: {
              show: false
            }
          }
        ]
      }
    ]
  };
  // 配置数据给实例化对象
  myChart.setOption(option)
  // 窗口缩放，图表也等比缩放
  window.addEventListener("resize",function(){
    myChart.resize()
  });
})();

//全国热榜
(function(){
  // 准备数据
  var hotData = [
    {
      city: "北京", // 城市
      sales: "25, 179", // 销售额
      flag: true, //  上升还是下降
      brands: [
        //  品牌种类数据
        { name: "可爱多", num: "9,086", flag: true },
        { name: "娃哈哈", num: "8,341", flag: true },
        { name: "喜之郎", num: "7,407", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "6,724", flag: false },
        { name: "好多鱼", num: "2,170", flag: true }
      ]
    },
    {
      city: "河北",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "3,457", flag: false },
        { name: "娃哈哈", num: "2,124", flag: true },
        { name: "喜之郎", num: "8,907", flag: false },
        { name: "八喜", num: "6,080", flag: true },
        { name: "小洋人", num: "1,724", flag: false },
        { name: "好多鱼", num: "1,170", flag: false }
      ]
    },
    {
      city: "上海",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "2,345", flag: true },
        { name: "娃哈哈", num: "7,109", flag: true },
        { name: "喜之郎", num: "3,701", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "2,724", flag: false },
        { name: "好多鱼", num: "2,998", flag: true }
      ]
    },
    {
      city: "江苏",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "2,156", flag: false },
        { name: "娃哈哈", num: "2,456", flag: true },
        { name: "喜之郎", num: "9,737", flag: true },
        { name: "八喜", num: "2,080", flag: true },
        { name: "小洋人", num: "8,724", flag: true },
        { name: "好多鱼", num: "1,770", flag: false }
      ]
    },
    {
      city: "山东",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "9,567", flag: true },
        { name: "娃哈哈", num: "2,345", flag: false },
        { name: "喜之郎", num: "9,037", flag: false },
        { name: "八喜", num: "1,080", flag: true },
        { name: "小洋人", num: "4,724", flag: false },
        { name: "好多鱼", num: "9,999", flag: true }
      ]
    }
  ];

  // 准备空字符串
  supHtml=''
  // 遍历对象渲染
  $.each(hotData,function(index , item){
    supHtml+= `<li>
    <span>${item.city}</span>
    <span>${item.sales} <s class=${item.flag? "icon-up":"icon-down"}></s></span>
  </li>`

  })
  
  // 添加元素
  $('.sup').html(supHtml);

  // 鼠标经过高亮显示
  $('.province .sup').on('mouseenter','li',function(){
    // $(this)
    //   .addClass('active')
    //   .siblings()
    //   .removeClass('active');

    // var subHTML = "";
    // $.each(hotData[$(this).index()].brands,function(index, item){
    //   subHTML += `<li>
    //   <span>${item.name}</span>
    //   <span>${item.num} <s class=${item.flag? "icon-up":"icon-down"}></s></span>
    // </li>`
    // });
    // // 添加元素
    // $('.sub').html(subHTML);
    index=$(this).index()
    render($(this))
    
  });

  // 封装函数
  function render(currentEle){
    currentEle
      .addClass('active')
      .siblings()
      .removeClass('active');

    var subHTML = "";
    $.each(hotData[currentEle.index()].brands,function(index, item){
      subHTML += `<li>
      <span>${item.name}</span>
      <span>${item.num} <s class=${item.flag? "icon-up":"icon-down"}></s></span>
    </li>`
    });
    // 添加元素
    $('.sub').html(subHTML);
  };

  // 鼠标经过默认显示状态
  var lis = $('.province .sup li');
  lis.eq(0).mouseenter();

  index= 0
  var timer = setInterval(function(){
    index++
    if (index>=5) index=0;
    // lis.eq(index).mouseenter()
    render(lis.eq(index))
  },2000)

  //鼠标经过事件关闭事件。离开开启事件
  $('.province .sup').hover(
    function(){
      clearInterval(timer)
    },
    function(){
      clearInterval(timer)
      timer = setInterval(function(){
        index++
        if (index>=5) index=0;
        render(lis.eq(index))
      },2000)
    }
  )

})();
