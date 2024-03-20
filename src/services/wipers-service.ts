import { AxiosInstance } from 'axios';
import { Parameters } from '../types/parameters';
import { Auto } from '../types/auto';
import { Model } from '../types/model';
import { Modifications } from '../types/modify';
import { APIRoute } from '../const/const';

export const fetchBrands = async (api: AxiosInstance): Promise<Auto[]> => {
  const response = await api.get<Auto[]>(APIRoute.Brands);
  return response.data;
};

export const fetchModels = async (api: AxiosInstance, brandId: number): Promise<Model[]> => {
  const response = await api.get<Model[]>(`${APIRoute.Models}/${brandId}`);
  return response.data;
};

export const fetchModifications = async (api: AxiosInstance, modelId: number): Promise<Modifications[]> => {
  const response = await api.get<Modifications[]>(`${APIRoute.Modifications}/${modelId}`);
  return response.data;
};

export const fetchParameters = async (api: AxiosInstance, modificationId: number): Promise<Parameters[]> => {
  const response = await api.get<Parameters[]>(`${APIRoute.Parameters}/${modificationId}`);
  return response.data;
};
