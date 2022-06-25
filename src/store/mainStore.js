/*
 *@description:
 * @author wayne
 * @date 2022-06-16 08:25
 */

import { defineStore } from "pinia";
import { getEnergy1, getTargetData, getTitle } from "@/api";

export const useMainStore = defineStore({
    id: "main",
    state: () => {
        return {
            minHeaderTitles: [],
            pageTitle: "",
            targetList: [],
            energyList: [],
            screenTitle: ""
        };
    },
    actions: {
        async getMinHeaderTitlesAction() {
            try {
                const res = await getTitle();
                if (res?.code === 0) {
                    this.minHeaderTitles = res.data;
                    this.screenTitle = res.data?.find(item => item.type === 1)?.title;
                    await this.setTargetDataFn();
                    await this.getEnergyFn();
                }
            } catch (e) {
                return new Error(e);
            }
        },
        setHeaders(index) {
            const data = [2, 6, 8, 11];
            this.pageTitle = this.minHeaderTitles?.find(el => el.type === data?.[index])?.title;
        },
        async setTargetDataFn() {
            try {
                const res = await getTargetData();
                if (res?.code === 0) {
                    this.targetList = res.data;
                }
            } catch (e) {
                return new Error(e);
            }
        },
        async getEnergyFn() {
            try {
                const res = await getEnergy1();
                if (res?.code === 0) {
                    this.energyList = res.data ?? [];
                }
            } catch (e) {
                return new Error(e);
            }
        },
    },
});
