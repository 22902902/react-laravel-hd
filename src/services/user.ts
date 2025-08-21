import { useAxios } from "@/hooks/useAxios";
import type { IUser } from "@/type/user";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

/**
 * 获取用户信息的查询Hook
 * 使用React Query进行数据获取和缓存管理
 * 
 * @returns {UseQueryResult<IUser, AxiosError>} React Query的查询结果对象
 * @returns {boolean} isPending - 请求是否正在进行中
 * @returns {boolean} isError - 请求是否发生错误
 * @returns {AxiosError} error - 错误信息（如果有）
 * @returns {IUser} data - 用户数据（请求成功时）
 */
export const useGetUserInfoQuery = () => {
  // 获取配置好的axios实例
  const {axios} = useAxios();
  
  // 使用React Query进行数据获取
  return useQuery<IUser, AxiosError>({
    queryKey: ['useGetUserInfoQuery'], // 查询的唯一标识符，用于缓存管理
    queryFn: async () => {
        // 发起获取当前用户信息的API请求
        return await axios.get('/user/current')
    }
  });
};