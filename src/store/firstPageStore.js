/*
 *@description:
 * @author wayne
 * @date 2022-06-16 08:25
*/

import { defineStore } from 'pinia'
import { isEqual, isEmpty, slice, map, filter, sortBy, some } from 'lodash';
import {getEconomic1, getEconomic2} from "@/api";
import {CHARTS_TYPE} from "@/constants";
import {useMainStore} from "@/store/mainStore";

export const useFirstPageStore = defineStore({
    id: 'firstPageStore',
    state(){
        return({
            chartsTaskInfo: {
                loading: true,
                leftChartsList: [],
                rightChartsList: [],
                data: []
            },
            topIndicatorsTaskList: [],
            mapTaskData: [],
            mainTargetIndicatorsData: {

            },
            titles: []
        })
    },
    actions: {
        //左右两边echarts图表的数据
        async getBarAndLinesTaskAction() {
            const res = await getEconomic2();
            if(isEqual(res?.code, 0) && !isEmpty(res?.data)){
                const leftInitialList = new Array(4).fill({type: CHARTS_TYPE.BAR});
                const leftTaskList = slice(res.data, 0, 4);
                const leftChartsList = map(leftTaskList, (item, index) => ({...item, ...leftInitialList[index]}));

                const rightInitialList = new Array(3).fill({type: CHARTS_TYPE.BAR}).concat([{type: CHARTS_TYPE.LINE}]);
                const rightTaskList = slice(res.data, 4, 8);
                const rightChartsList = map(rightTaskList, (item, index) => ({...item, ...rightInitialList[index]}));

                this.chartsTaskInfo = {
                    loading: false,
                    leftChartsList,
                    rightChartsList
                }
            }
        },

        //地图上方指标的数据
        getMapTopIndicatorsTaskAction() {
            const mainStore = useMainStore()
            const resList = mainStore.targetList;
            if(!isEmpty(resList)){
                const initialList = [
                    {
                        icon: require('@/assets/images/p1-center-icon-1.png'),
                        color: '#43E086',
                    },
                    {
                        icon: require('@/assets/images/p1-center-icon-2.png'),
                        color: '#FFCB4D',
                    },
                    {
                        icon: require('@/assets/images/p1-center-icon-3.png'),
                        color: '#4ED8F6',
                    },
                    {
                        icon: require('@/assets/images/p1-center-icon-4.png'),
                        color: '#5AD0C5',
                    }
                ];
                const TargetType = "1";
                this.topIndicatorsTaskList = map(filter(resList, i => isEqual(i.type, TargetType)), (item, index) =>(
                    {...item, ...initialList[index]}
                ))
            }
        },

        //获取地图的数据
        async getMapTaskList(){
            const res = await getEconomic1();
            if(isEqual(res?.code, 0) && !isEmpty(res?.data)){
                this.mapTaskData = res.data;
            }
        },

        //获取左右两边的title
        getLeftAndRightTitActions() {
            const mainStore = useMainStore();
            const data = [3, 4];
            const newMinHeaderTitles = sortBy(mainStore.minHeaderTitles, item => item.type);
            this.titles = map(filter(newMinHeaderTitles, item => some(data, i => isEqual(item.type, i))), j => j.title)
        }
    }
})