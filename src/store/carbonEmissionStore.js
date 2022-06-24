/*
 *@description:
 * @author wayne
 * @date 2022-06-20 13:43
*/

import {defineStore} from "pinia";
import {getCarbonEmission1, getCarbonEmission2, getCarbonEmission3} from "@/api";
import { isEqual, map, find, isEmpty, filter } from "lodash";
import {useMainStore} from "@/store/mainStore";

export const useCarbonEmissionStore = defineStore({
    id: "carbonEmissionStore",
    state(){
        return({
            carbonEmissions: {
                loading: true,
                data: [],
                title: ''
            },
            carbonCharts: {
                charts: [],
                loading: true
            },
            analysisList: []
        })
    },
    actions: {
        //左边的滚动table list数据获取
        async getCarbonEmissionsAction(){
            const res = await getCarbonEmission1();
            if(isEqual(res?.code, 0)){
                this.carbonEmissions = {
                    loading: false,
                    data: map(res?.data, (item, index) => ({...item, key: index}))
                }
            }
        },

        //获取左边的滚动table title
        getCarbonEmissionTitleAction(){
            const minHeaderTitles = useMainStore()?.minHeaderTitles;
            const TitleType = 10;
            this.carbonEmissions.title = find(minHeaderTitles, item => isEqual(item.type, TitleType))?.title ?? "";
        },

        //获取右边的四个charts数据
        async getRightChartsData(){
            const res = await getCarbonEmission2();
            if(isEqual(res?.code, 0)){
                this.carbonCharts = {
                    loading: false,
                    charts: res.data
                }
            }
        },

        //获取地图数据
        async getAnalysisList(){
            const res = await getCarbonEmission3();
            if(isEqual(res?.code, 0) && !isEmpty(res?.data)){
                this.analysisList = filter(res.data, item => item.latitude && item.longitude);
            }
        }
    }
})