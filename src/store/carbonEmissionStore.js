/*
 *@description:
 * @author wayne
 * @date 2022-06-20 13:43
*/

import {defineStore} from "pinia";
import {getCarbonEmission1} from "@/api";
import { isEqual, map, find } from "lodash";
import {useMainStore} from "@/store/mainStore";

export const useCarbonEmissionStore = defineStore({
    id: "carbonEmissionStore",
    state(){
        return({
            carbonEmissions: {
                loading: true,
                data: [],
                title: ''
            }
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
        }

    }
})