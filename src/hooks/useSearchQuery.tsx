"use client"

import { useSearchParams, useRouter } from "next/navigation";


const useSearchQuery = ()=>{
    const router = useRouter();

    const params = useSearchParams();

    const searchQuery = Object.fromEntries(params.entries());
    const setSearchQuery = (query: Record<string, string>)=>{
        const params = new URLSearchParams(searchQuery);
        Object.entries(query).forEach(([key, value])=>{
            params.set(key, value);
        });

        router.push(`?${params.toString()}`);
    }
    return [searchQuery, setSearchQuery] as const;
}

export default useSearchQuery;