/*
 *@description:
 * @author wayne
 * @date 2022-06-16 08:25
 */

import { defineStore } from "pinia";
import { getTitle } from "@/api";

export const useMainStore = defineStore({
    id: "main",
    state: () => {
        return {
            minHeaderTitles: [],
            pageTitle: "",
        };
    },
    actions: {
        async getMinHeaderTitlesAction() {
            try {
                const res = await getTitle();
                if (res?.code === 0) {
                    this.minHeaderTitles = res.data;
                }
            } catch (e) {
                return new Error(e);
            }
        },
        setHeaders(index) {
            const data = [2, 6, 8, 11];
            this.pageTitle = this.minHeaderTitles?.find(el => el.type === data?.[index])?.title;
            console.log(this.pageTitle);
        },
    },
});
