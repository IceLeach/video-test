export interface ApiCommonRes<T> {
  code: number;
  message: string;
  data: T;
}

export type CmdbBizRoomConfigurationGetTreeListGetResData = {
  id: string;
  name: string;
  children: {
    id: number;
    name: string;
    type: string;
    icon: string;
  }[];
}[];

export type CmdbBizRoomConfigurationGetTreeListGetRes = ApiCommonRes<CmdbBizRoomConfigurationGetTreeListGetResData>;

export interface CmdbBizRoomConfigurationFindGetParams {
  roomId: string;
}

export type CmdbBizRoomConfigurationFindGetResData = string;

export type CmdbBizRoomConfigurationFindGetRes = ApiCommonRes<CmdbBizRoomConfigurationFindGetResData>;

export interface CmdbBizRoomConfigurationGetWaitGetParams {
  roomId: string;
}

export type CmdbBizRoomConfigurationGetWaitGetResData = {
  id: number;
  name: string;
  icon: string;
  type: string;
}[];

export type CmdbBizRoomConfigurationGetWaitGetRes = ApiCommonRes<CmdbBizRoomConfigurationGetWaitGetResData>;

export type CmdbBizRackEquTreeGetResData = {
  id: string;
  name: string;
  type: string;
  children: {
    id: number;
    name: string;
    type: string;
    icon?: string;
  }[];
}[];

export type CmdbBizRackEquTreeGetRes = ApiCommonRes<CmdbBizRackEquTreeGetResData>;

export interface CmdbBizScreenRackRateGetParams {
  roomId: string;
}

export interface CmdbBizScreenRackRateGetResData {
  netPort: string;
  fiberPort: string;
  u: string;
  itNum: number;
  pload: string;
  rackNum: number;
  rackList: {
    id: number;
    rateU: number;
    ploadRate: number;
    fiberPortRate: number;
    netPortRate: number;
    maxRate: number;
  }[];
}

export type CmdbBizScreenRackRateGetRes = ApiCommonRes<CmdbBizScreenRackRateGetResData>;

export interface CmdbBizScreenConfigurationListGetParams {
  roomId: string;
}

export type CmdbBizScreenConfigurationListGetResData = {
  id: number;
  name: string;
  type: string;
}[];

export type CmdbBizScreenConfigurationListGetRes = ApiCommonRes<CmdbBizScreenConfigurationListGetResData>;

export type PemDhMonitorConfigurationLabelCategoryListGetResData = {
  id: number;
  name: string;
  monitorLabelList: {
    id: number;
    name: string;
    labelCategoryId: number;
  }[];
}[];

export type PemDhMonitorConfigurationLabelCategoryListGetRes = ApiCommonRes<PemDhMonitorConfigurationLabelCategoryListGetResData>;

export interface PemDhMonitorConfigurationGetConfigurationByLabelIdGetParams {
  labelId: number;
}

export interface PemDhMonitorConfigurationGetConfigurationByLabelIdGetResData {
  deviceId?: number;
  deviceName?: string;
  container: {
    id: number;
    width?: number;
    height?: number;
    background?: string;
    template: boolean;
    templateId?: number;
    labelId: number;
    isDisplay: boolean;
  };
  components: {
    id: number;
    type: string;
    x: number;
    y: number;
    zindex: number;
    width: number;
    height: number;
    config: any;
    dataSource?: {
      id: number;
      name: string;
      type?: number;
      unit?: string;
    };
  }[];
}

export type PemDhMonitorConfigurationGetConfigurationByLabelIdGetRes = ApiCommonRes<PemDhMonitorConfigurationGetConfigurationByLabelIdGetResData>;

export interface PemDhCategoryTreeListGetParams {
  name?: string;
}

export type PemDhCategoryTreeListGetResData = {
  id: number;
  ids: string;
  name: string;
  sort: number;
  code: string;
  icon?: string;
  createTime: string;
  createBy: string;
  children: PemDhCategoryTreeListGetResData;
}[];

export type PemDhCategoryTreeListGetRes = ApiCommonRes<PemDhCategoryTreeListGetResData>;

export interface PemDhMonitorConfigurationGetDeviceListPostData {
  categoryIds?: string;
  name?: string;
}

export type PemDhMonitorConfigurationGetDeviceListPostResData = {
  id: number;
  name: string;
}[];

export type PemDhMonitorConfigurationGetDeviceListPostRes = ApiCommonRes<PemDhMonitorConfigurationGetDeviceListPostResData>;

export type PemDhSpaceFloorRoomTreeGetResData = {
  id: number;
  ids: string;
  name: string;
  floorNumber: number;
  children: {
    id: number;
    ids: string;
    name: string;
    floorNumber: number;
    roomList: {
      id: number;
      name: string;
    }[];
  }[];
  roomList: {
    id: number;
    name: string;
  }[];
}[];

export type PemDhSpaceFloorRoomTreeGetRes = ApiCommonRes<PemDhSpaceFloorRoomTreeGetResData>;

export interface PemDhMonitorConfigurationMonitorListPostData {
  pageNum: number;
  pageSize: number;
  floorId?: number;
  roomId?: number;
  categoryIds?: string;
  deviceId?: number;
  monitorType?: string;
  monitorName?: string;
  all: 0 | 1;
}

export interface PemDhMonitorConfigurationMonitorListPostResData {
  data: {
    id: number;
    name: string;
    unit: string;
    used: 0 | 1;
  }[];
  total: number;
}

export type PemDhMonitorConfigurationMonitorListPostRes = ApiCommonRes<PemDhMonitorConfigurationMonitorListPostResData>;

export interface PemDhMonitorConfigurationLabelUpdatePostData {
  id: number;
  name: string;
}

export interface PemDhMonitorConfigurationDelLabelGetParams {
  labelId: number;
}

export interface PemDhMonitorConfigurationLabelCategoryAddPostData {
  name: string;
}

export interface PemDhMonitorConfigurationLabelCategoryUpdatePostData {
  id: number;
  name: string;
}

export interface PemDhMonitorConfigurationLabelCategoryDelGetParams {
  id: number;
}

export interface PemDhMonitorConfigurationGetTemplateByIdGetParams {
  templateId: number;
}

export interface PemDhMonitorConfigurationGetTemplateByIdGetResData {
  name: string;
  container: {
    width?: number;
    height?: number;
    isDisplay: boolean;
    template: boolean;
    templateId: number;
  };
  components: {
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    zindex: number;
    config: any;
  }[];
}

export type PemDhMonitorConfigurationGetTemplateByIdGetRes = ApiCommonRes<PemDhMonitorConfigurationGetTemplateByIdGetResData>;

export type PemDhMonitorConfigurationTemplateListGetResData = {
  id: number;
  name: string;
  image?: string;
}[];

export type PemDhMonitorConfigurationTemplateListGetRes = ApiCommonRes<PemDhMonitorConfigurationTemplateListGetResData>;

export interface PemDhMonitorConfigurationInsertLabelPostData {
  id?: number;
  name: string;
  labelCategoryId: number;
  templateId?: number;
  container: {
    background?: string;
    isDisplay: boolean;
  };
  components: {
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex?: number;
    config: any;
  }[];
}

export interface PemDhMonitorConfigurationConfigurationSavePostData {
  labelId: number;
  container: {
    width?: number;
    height?: number;
    background: string | null;
  };
  components: {
    id?: number;
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex?: number;
    config: any;
    dataSource: {
      id: number;
      name: string;
      unit?: string;
      type?: number;
    } | null;
  }[];
}

export interface PemDhMonitorPicListForConfigurationGetParams {
  labelId: number;
}

export type PemDhMonitorPicListForConfigurationGetResData = {
  id: number;
  name: string;
  value?: number;
  unit?: string;
}[];

export type PemDhMonitorPicListForConfigurationGetRes = ApiCommonRes<PemDhMonitorPicListForConfigurationGetResData>;

export type PemDhMonitorConfigurationUploadPostData = FormData;

export type PemDhMonitorConfigurationUploadPostResData = string;

export type PemDhMonitorConfigurationUploadPostRes = ApiCommonRes<PemDhMonitorConfigurationUploadPostResData>;

export interface SmSystemDictDataTypeDictTypeGetParams {
  dictType: string;
}

export type SmSystemDictDataTypeDictTypeGetResData = {
  dictCode: number;
  dictLabel: string;
  dictValue: string;
}[];

export type SmSystemDictDataTypeDictTypeGetRes = ApiCommonRes<SmSystemDictDataTypeDictTypeGetResData>;
