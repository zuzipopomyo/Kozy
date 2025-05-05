'use client'
import { useEffect, useState } from "react";
import useSearchQuery from "./useSearchQuery"


const DEFAULT_PAGE = 1;


const usePage = ()=>{
    const [queryParams, setQueryParams] = useSearchQuery();
    const currentPage = queryParams["page"]
    const [page, setpage] = useState(
        currentPage ? Number(currentPage): DEFAULT_PAGE,
    );

    const setPage = (p:number)=>{
        setpage(p);
        setQueryParams({page: `${p}`})
    };

    useEffect(()=>{
        setpage(Number(currentPage) || DEFAULT_PAGE);
    },[currentPage]);

    return [page, setPage] as const;
}

export default usePage;