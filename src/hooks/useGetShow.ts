import { useQuery } from "react-query";
import { apiKeys } from "../constants/apiKeys";
import { HomeService } from "../services/home";

export const useGetShow = (id: string | number) => {
  const { data, isLoading } = useQuery(
    apiKeys.show,
    () => HomeService.getShow(id),
    {
      onError: (e) => {
        console.log(e, "Show Error");
      },
      onSuccess: (response) => response,
    }
  );
  return { show: data?.data && data.data, isLoading };
};
