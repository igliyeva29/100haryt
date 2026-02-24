import { useQuery } from "@tanstack/react-query"
import { getAllBrands, getAllBrandsByKeyword } from "../api/brands";

export const useGetAllBrands = (id?:string)=>{
  return useQuery({
    queryKey: [`brands ${id}`],
    queryFn: () => {
      return getAllBrands(id)
    },
    staleTime: Infinity,
  });
}
export const useGetAllBrandsByKeyword = (keyword?:string)=>{
  return useQuery({
    queryKey: [`brands ${keyword}`],
    queryFn: () => {
      return getAllBrandsByKeyword(keyword)
    },
    staleTime: Infinity,
  });
}

