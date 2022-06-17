/*
 *@description:
 * @author wayne
 * @date 2022-06-16 08:25
*/

import { defineStore } from 'pinia'

export const useFirstPageStore = defineStore({
    id: 'firstPageStore',
    state(){
        return({
            chartsTaskInfo: {
                loading: true,
                data: []
            },
            topIndicatorsTaskInfo: {
                data: []
            },
            mapTaskData: {
                list: []
            },
            mainTargetIndicatorsData: {

            }
        })
    },
    actions: {
        insetBarAndLinesDataAction(info){
            this.chartsTaskInfo = {
                loading: false,
                data: Array.isArray(info?.data) ? info.data : []
            }
        },

        insetTopIndicatorsTaskAction(info){
            if(Array.isArray(info?.data)){
                this.topIndicatorsTaskInfo = {
                    data: info.data
                }
            }
        },

        insetMapTaskAction(info){
            if(Array.isArray(info?.data)){
                this.mapTaskData.list = info.data;
            }
        }
    }
})