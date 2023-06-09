var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false
});
var app = {};

var option;

const labelLeft = {
  position: "left",
};

const labelRight = {
  position: "right"
};

option = {
  title: {
    textStyle: {
      color: '#ffffff' // Set the title text color to white
    },
    left: 'center', // Center align the title horizontally
    top: 'middle' // Center align the title vertically
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    top: 80,
    bottom: 30,
    left: 350
  },
  xAxis: {
    type: "value",
    position: "top",
    splitLine: { show: false }
  },
  yAxis: {
    type: "category",
    axisLine: {
      show: true
    },
    axisLabel: {
      show: true // Set show to true to display labels
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    onZero: true,
    onZeroAxisIndex: null,
    data: [
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    ]
  },
  series: [
    {
      name: "Cost",
      type: "bar",
      label: {
        show: true,
        position: function (params) {
          return params.value >= 0 ? labelRight : labelLeft;
        },
        align: "center" 
      },
      itemStyle: {
        normal: {
          barBorderRadius: 10,
          color: function(params) {
            var colorList = ['#8ef6e4', '#9896f1', '#F198C1'];
            return colorList[params.dataIndex % 3];
          }
        },
        emphasis: {
          barBorderRadius: 10
        }
      },
      barWidth: 8,
      barCategoryGap: '0%',
      data: [
        { value: -0.07, label: labelLeft },
        { value: -0.09, label: labelLeft },
        { value: -0.23, label: labelLeft },
        { value: -0.17, label: labelLeft },
        { value: -0.36, label: labelLeft },
        { value: -0.23, label: labelLeft },
        { value: -0.17, label: labelLeft },
        { value: 0.23,label: labelRight },
        { value: 0.17, label: labelRight},
        { value: 0.36, label: labelRight },
        { value: 0.07, label: labelRight },
        { value: 0.09, label: labelRight },
        { value: 0.23, label: labelRight },
        { value: 0.17, label: labelRight },
        { value: 0.36, label: labelRight },
        { value: 0.23, label: labelRight },
        { value: 0.17, label: labelRight },
        { value: -0.36, label: labelLeft },
        { value: -0.07, label: labelLeft },
        { value: -0.09, label: labelLeft },
        { value: -0.23, label: labelLeft },
        { value: -0.17, label: labelLeft },
        { value: -0.36, label: labelLeft },
        { value: -0.23, label: labelLeft },
        { value: -0.17, label: labelLeft },
        { value: -0.36, label: labelLeft },
        { value: -0.07, label: labelLeft },
        { value: -0.09, label: labelLeft },
        { value: -0.23, label: labelLeft },
        { value: -0.17, label: labelLeft },
        { value: -0.36, label: labelLeft }
      ]
    },

    {
      name: "Cost",
      type: "bar",
      label: {
        show: true,
        position: function (params) {
          return params.value >= 0 ? labelRight : labelLeft;
        },
        align: "center" 
      },
      itemStyle: {
        normal: {
          barBorderRadius: 10,
          color: function(params) {
            var colorList = ['#8ef6e4','#F198C1','#9896f1'];
            return colorList[params.dataIndex % 3];
          }
        },
        emphasis: {
          barBorderRadius: 10
        }
      },
      barWidth: 8,
      barCategoryGap: '0%',
      data: [
        { value: 0.23, label: labelRight },
        { value: 0.17, label: labelRight },
        { value: 0.36, label: labelRight },
        { value: 0.23, label: labelRight },
        { value: 0.17, label: labelRight },
        { value: -0.36, label: labelLeft },
        { value: -0.07, label: labelLeft },
        { value: -0.09, label: labelLeft },
        { value: -0.23, label: labelLeft },
        { value: -0.17, label: labelLeft },
        { value: -0.36, label: labelLeft },
        { value: -0.23, label: labelLeft },
        { value: -0.17, label: labelLeft },
        { value: -0.36, label: labelLeft },
        { value: -0.07, label: labelLeft },
        { value: -0.09, label: labelLeft },
        { value: -0.23, label: labelLeft },
        { value: -0.17, label: labelLeft },
        { value: -0.36, label: labelLeft },
        { value: -0.36, label: labelLeft },
        { value: -0.07, label: labelLeft },
        { value: -0.09, label: labelLeft },
        { value: -0.23, label: labelLeft },
        { value: -0.17, label: labelLeft },
        { value: -0.36, label: labelLeft },
      ]
    }
  ]
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
