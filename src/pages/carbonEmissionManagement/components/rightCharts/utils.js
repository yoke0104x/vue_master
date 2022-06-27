/*
 *@description:
 * @author wayne
 * @date 2022-06-20 15:10
 */
import { map } from "lodash";
import * as echarts from "echarts";

const getInfo = (title, option) => ({ title, option });

export const getCharts = list => {
    return map(list, (info, index) => {
        switch (index) {
            case 0:
                return getPieCharts(info);
            case 1:
                return getBarOption(info);
            case 2:
            case 3:
                return getLineOption(info, index);
            default:
                break;
        }
    });
};

const getPieCharts = data => {
    const newValues = map(data.values, e => {
        return { name: e.categoryName, value: e.value };
    });
    const option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            textStyle: {
                fontSize: 24,
            },
        },
        grid: {
            // left: '4%',
            // right: '4%',
            // bottom: '5%',
            top: "5%",
            // containLabel: true,
        },
        color: ["#ebab2e", "#4e6382", "#43c89a", "#4783ea", "#5d57e9"],
        series: [
            {
                // name: '访问来源',
                type: "pie",
                radius: "60%",
                data: newValues,
                label: {
                    color: "#fff",
                    alignTo: "none",
                    formatter: "{name|{b}}\n{name|{d}%}",
                    minMargin: 20,
                    edgeDistance: 30,
                    lineHeight: 30,
                    fontSize: 26,
                    rich: {
                        name: {
                            align: "center",
                            fontSize: 26,
                        },
                    },
                },
                labelLine: {
                    show: false,
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
        ],
    };

    return getInfo(data.screenName, option);
};

const getBarOption = data => {
    const title = `${data.screenName}(${data.unit})`;
    const yAxisData = map(data.values, el => el.value);
    const xAxisData = map(data.values, el => el.categoryName);

    const option = {
        tooltip: {
            trigger: "item",
            // formatter: '{a} <br/>{b} : {c} ({d}%)',
            textStyle: {
                fontSize: 24,
            },
        },
        grid: {
            left: "4%",
            right: "4%",
            bottom: "20%",
            top: "5%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            data: xAxisData,
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: "#516189",
                },
            },
            axisLabel: {
                color: "#fff",
                fontSize: 24,
            },
        },
        yAxis: {
            type: "value",
            axisLabel: {
                color: "#fff",
                fontSize: "20px",
            },
            axisTick: {
                lineStyle: {
                    color: "#516189",
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#516189",
                },
            },
        },
        series: [
            {
                data: yAxisData,
                type: "bar",
                showBackground: true,
                backgroundStyle: {
                    color: "rgba(180, 180, 180, 0.2)",
                },
                barWidth: 60,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 1,
                                color: "#1882FF",
                                opacity: 0.85,
                            },
                            {
                                offset: 0,
                                color: "#36EBCA",
                                opacity: 0.79,
                            },
                        ]),
                    },
                },
            },
        ],
    };
    return getInfo(title, option);
};

const getLineOption = (data, index) => {
    const title = `${data.screenName}(${data.unit})`;
    const yAxisData = map(data.values, el => el.value);
    const xAxisData = map(data.values, el => el.categoryName);

    const option = {
        tooltip: {
            trigger: "axis",
            // formatter: '{a} <br/>{b} : {c} ({d}%)',
            textStyle: {
                fontSize: 24,
            },
        },
        grid: {
            left: "4%",
            right: "4%",
            bottom: "20%",
            top: "5%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            data: xAxisData,
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: "#516189",
                },
            },
            axisLabel: {
                color: "#fff",
                fontSize: 24,
            },
        },
        yAxis: {
            type: "value",
            axisLabel: {
                color: "#fff",
                fontSize: "20px",
            },
            axisTick: {
                lineStyle: {
                    color: "#516189",
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#516189",
                },
            },
        },
        series: [
            {
                data: yAxisData,
                type: "line",
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 4,
                        color: index === 3 ? "#F47780" : "#62DBED", // 线条颜色
                    },
                },
                showSymbol: false,
                areaStyle: {
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: index === 3 ? "rgba(244,119,128,1)" : "#62DBED4C",
                                },
                                {
                                    offset: 1,
                                    color: index === 3 ? "rgba(255,255,255,0.4)" : "#62DBED00",
                                },
                            ],
                            false,
                        ),
                    },
                },
            },
        ],
    };
    return getInfo(title, option);
};
