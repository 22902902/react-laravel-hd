import { useAxios } from "@/hooks/useAxios";
import type { IUser } from "@/type/user";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export const useGetUserInfoQuery = () => {
  const {axios} = useAxios();
  return useQuery<IUser, AxiosError>({
    queryKey: ['useGetUserInfoQuery'],
    queryFn: async () => {
        return await axios.get('/user/current')
    }
  });
};