import { useQuery, useInfiniteQuery } from "react-query";
import ApiCall from "_core/client/apiCall";
import { calcTotalPages } from '_core/utils/hepler';

const size = 10;
export const useGetProductInfinite = (params = {}) => {
    return useInfiniteQuery(
        ["get-product", params],
        ({ pageParam = 1 }) =>
            ApiCall(
                "GET",
                "public/acceptors/kala/100346",
                null,
                { ...params, page: pageParam, size },
                (res: any) => {
                    return {
                        list: res.data,
                        total: calcTotalPages(res.data?.data?.total, size),
                        count: res.data?.data?.total,
                    }
                }
            ),

        {
            getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
            getNextPageParam: (lastPage, pages) => {
                return lastPage?.total === pages.length ? undefined : pages.length + 1;
            },
        }
    );
};