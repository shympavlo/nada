import { useQuery } from "react-query";
import { apiKeys } from "../constants/apiKeys";
import { HomeService } from "../services/home";

export const useGetScheduled = () => {
  const { data, isLoading } = useQuery(
    apiKeys.scheduled,
    () => HomeService.getTvShows(),
    {
      onError: (e) => {
        console.log(e, "Error");
      },
      onSuccess: (response) => response,
    }
  );

  return { scheduled: data?.data, isLoading };
};
