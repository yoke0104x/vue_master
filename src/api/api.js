/*
 *@description:
 * @author wayne
 * @date 2022-06-15 10:12
*/

import request from './request';

// 碳排放-碳排放构成
export async function getCarbonEmission2(params) {
    return request.get('/dybigs/check/carbonEmission/0002', { params });
}

// 综合能源管理-园区企业能耗涨幅
export async function getEnergy2(params) {
    return request.get('/dybigs/check/energy/0002', { params });
}

// 综合能源管理-月度能耗趋势
export async function getEnergy3(params) {
    return request.get('/dybigs/check/energy/0003', { params });
}

// 大屏第一行数据
export async function getTitle(params) {
    return request.get('/dybigs/check/0001', { params });
}

// 碳排放-GIS地图数据获取
export async function getCarbonEmission3(params) {
    return request.get('/dybigs/check/carbonEmission/0003', { params });
}

//综合能源管理-园区能耗分布&&园区能耗展示
export async function getEnergy1(params) {
    return request.get('/dybigs/check/energy/0001', { params });
}

//经济运行概览-00002
export async function getEconomic2(params) {
    return request.get('/dybigs/check/economic/0002', { params });
}

//大屏第一行数据 副本
export async function getCheck1(params) {
    return request.get('/dybigs/check/0001', { params });
}

//经济运行概览-00001
export async function getEconomic1(params) {
    return request.get('/dybigs/check/economic/0001', { params });
}

//循环化改造-主要指标
export async function getCirculation3(params) {
    return request.get('/dybigs/check/circulation/0003', { params });
}

//碳排放-2021年园区重点企业碳排放
export async function getCarbonEmission1(params) {
    return request.get('/dybigs/check/carbonEmission/0001', { params });
}

//循环化改造-重点项目完成情况
export async function getCirculation1(params) {
    return request.get('/dybigs/check/circulation/0001', { params });
}

// 第一行目标数据
export async function getTargetData(params) {
    return request.get('/dybigs/check/0002', { params });
}