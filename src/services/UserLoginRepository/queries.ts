"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import { UserLoginStateType } from "@/types/UserLoginStateType/UserloginState.type";
import UserLoginApi from "@/services/UserLoginRepository/api";

const useUserLoginInfoData = () => {
  return useQuery<UserLoginStateType>({
    queryKey: [QUERY_KEYS.loginValue.loginToken],
    queryFn: async () => {
      const data = await UserLoginApi.getUserLoginInfoAPI();
      return data;
    },
  });
};

export default useUserLoginInfoData;
