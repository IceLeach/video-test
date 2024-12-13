import request from "@/utils/request";
import * as i from '@/types';

export async function cmdbBizRoomConfigurationGetTreeListGet(): Promise<i.CmdbBizRoomConfigurationGetTreeListGetRes> {
  return request('/cmdb/biz/roomConfiguration/getTreeList', {
    method: 'GET',
  });
}

export async function cmdbBizRoomConfigurationFindGet(params: i.CmdbBizRoomConfigurationFindGetParams): Promise<i.CmdbBizRoomConfigurationFindGetRes> {
  return request('/cmdb/biz/roomConfiguration/find', {
    method: 'GET',
    params,
  });
}

export async function cmdbBizRoomConfigurationGetWaitGet(params: i.CmdbBizRoomConfigurationGetWaitGetParams): Promise<i.CmdbBizRoomConfigurationGetWaitGetRes> {
  return request('/cmdb/biz/roomConfiguration/getWait', {
    method: 'GET',
    params,
  });
}

export async function cmdbBizRackEquTreeGet(): Promise<i.CmdbBizRackEquTreeGetRes> {
  return request('/cmdb/biz/rackEqu/tree', {
    method: 'GET',
  });
}

export async function cmdbBizScreenRackRateGet(params: i.CmdbBizScreenRackRateGetParams): Promise<i.CmdbBizScreenRackRateGetRes> {
  return request('/cmdb/biz/screen/rackRate', {
    method: 'GET',
    params,
  });
}

export async function cmdbBizScreenConfigurationListGet(params: i.CmdbBizScreenConfigurationListGetParams): Promise<i.CmdbBizScreenConfigurationListGetRes> {
  return request('/cmdb/biz/screen/configurationList', {
    method: 'GET',
    params,
  });
}

export async function pemDhMonitorConfigurationLabelCategoryListGet(): Promise<i.PemDhMonitorConfigurationLabelCategoryListGetRes> {
  return request('/pem/dh/monitorConfiguration/labelCategoryList', {
    method: 'GET',
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态根据标签ID获取组态信息
export async function pemDhMonitorConfigurationGetConfigurationByLabelIdGet(params: i.PemDhMonitorConfigurationGetConfigurationByLabelIdGetParams): Promise<i.PemDhMonitorConfigurationGetConfigurationByLabelIdGetRes> {
  return request('/pem/dh/monitorConfiguration/getConfigurationByLabelId', {
    method: 'GET',
    params,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 基础设施分类列表
export async function pemDhCategoryTreeListGet(params: i.PemDhCategoryTreeListGetParams): Promise<i.PemDhCategoryTreeListGetRes> {
  return request('/pem/dh/category/treeList', {
    method: 'GET',
    params,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态获取设备列表信息
export async function pemDhMonitorConfigurationGetDeviceListPost(data: i.PemDhMonitorConfigurationGetDeviceListPostData): Promise<i.PemDhMonitorConfigurationGetDeviceListPostRes> {
  return request('/pem/dh/monitorConfiguration/getDeviceList', {
    method: 'POST',
    data,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 基础设施设备所在位置树
export async function pemDhSpaceFloorRoomTreeGet(): Promise<i.PemDhSpaceFloorRoomTreeGetRes> {
  return request('/pem/dh/space/floorRoomTree', {
    method: 'GET',
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态获取测点列表
export async function pemDhMonitorConfigurationMonitorListPost(data: i.PemDhMonitorConfigurationMonitorListPostData): Promise<i.PemDhMonitorConfigurationMonitorListPostRes> {
  return request('/pem/dh/monitorConfiguration/monitorList', {
    method: 'POST',
    data,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态标签修改
export async function pemDhMonitorConfigurationLabelUpdatePost(data: i.PemDhMonitorConfigurationLabelUpdatePostData) {
  return request('/pem/dh/monitorConfiguration/labelUpdate', {
    method: 'POST',
    data,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态删除标签
export async function pemDhMonitorConfigurationDelLabelGet(params: i.PemDhMonitorConfigurationDelLabelGetParams) {
  return request('/pem/dh/monitorConfiguration/delLabel', {
    method: 'GET',
    params,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态标签分类新增
export async function pemDhMonitorConfigurationLabelCategoryAddPost(data: i.PemDhMonitorConfigurationLabelCategoryAddPostData) {
  return request('/pem/dh/monitorConfiguration/labelCategoryAdd', {
    method: 'POST',
    data,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态标签分类修改
export async function pemDhMonitorConfigurationLabelCategoryUpdatePost(data: i.PemDhMonitorConfigurationLabelCategoryUpdatePostData) {
  return request('/pem/dh/monitorConfiguration/labelCategoryUpdate', {
    method: 'POST',
    data,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态标签分类删除
export async function pemDhMonitorConfigurationLabelCategoryDelGet(params: i.PemDhMonitorConfigurationLabelCategoryDelGetParams) {
  return request('/pem/dh/monitorConfiguration/labelCategoryDel', {
    method: 'GET',
    params,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态根据模板ID查询模板详情
export async function pemDhMonitorConfigurationGetTemplateByIdGet(params: i.PemDhMonitorConfigurationGetTemplateByIdGetParams): Promise<i.PemDhMonitorConfigurationGetTemplateByIdGetRes> {
  return request('/pem/dh/monitorConfiguration/getTemplateById', {
    method: 'GET',
    params,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态获取模板列表
export async function pemDhMonitorConfigurationTemplateListGet(): Promise<i.PemDhMonitorConfigurationTemplateListGetRes> {
  return request('/pem/dh/monitorConfiguration/templateList', {
    method: 'GET',
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态新增标签
export async function pemDhMonitorConfigurationInsertLabelPost(data: i.PemDhMonitorConfigurationInsertLabelPostData) {
  return request('/pem/dh/monitorConfiguration/insertLabel', {
    method: 'POST',
    data,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点组态保存组态
export async function pemDhMonitorConfigurationConfigurationSavePost(data: i.PemDhMonitorConfigurationConfigurationSavePostData) {
  return request('/pem/dh/monitorConfiguration/configurationSave', {
    method: 'POST',
    data,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 测点图形化所有测点数据
export async function pemDhMonitorPicListForConfigurationGet(params: i.PemDhMonitorPicListForConfigurationGetParams): Promise<i.PemDhMonitorPicListForConfigurationGetRes> {
  return request('/pem/dh/monitorPic/listForConfiguration', {
    method: 'GET',
    params,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 图片上传
export async function pemDhMonitorConfigurationUploadPost(data: i.PemDhMonitorConfigurationUploadPostData): Promise<i.PemDhMonitorConfigurationUploadPostRes> {
  return request('/pem/dh/monitorConfiguration/upload', {
    method: 'POST',
    data,
    baseURL: 'http://60.12.212.225:8187',
  });
}

// 数据字典字典数据查询
export async function smSystemDictDataTypeDictTypeGet(params: i.SmSystemDictDataTypeDictTypeGetParams): Promise<i.SmSystemDictDataTypeDictTypeGetRes> {
  return request(`/sm/system/dict/data/type/${params.dictType}`, {
    method: 'GET',
    baseURL: 'http://60.12.212.225:8186',
  });
}
