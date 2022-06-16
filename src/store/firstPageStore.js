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
            mainEcoIndicatorsData: {
                list: new Array(8).fill({
                    consumer: '工业生产总值',
                    target: '74亿',
                    desc: '工业总产值达到784亿元加上东锅德阳基地达到816亿元',
                    lat:31.30,
                    lng: 120.58
                })
            },
            mainTargetIndicatorsData: {

            }
        })
    },
    actions: {
        insetBarAndLinesDataAction(info){
            this.chartsTaskInfo = {
                loading: false,
                data: info?.data || []
            }
        },
        insetTopIndicatorsTaskAction(info){
            this.topIndicatorsTaskInfo = {
                data: info?.data || []
            }
        }
    }
})