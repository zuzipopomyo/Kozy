"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { coffeePaginationList } from "@/data/coffee-pagination-list";
import usePage from "@/hooks/usePage";
import CoffeeCarouseList from "./coffee-carousel-list";

const PAGE_SIZE = 3;
const PAGE_WINDOW = 4;

const CoffeeCarousel = () => {
  const [page, setPage] = usePage();
  const lastPage = Math.ceil(coffeePaginationList.length / PAGE_SIZE);
  const islastPage = (coffeePaginationList.length ?? 0) < PAGE_SIZE;
  console.log(`Page: ${page}`);
  console.log(coffeePaginationList.length);
  console.log(`Last 2 page: ${islastPage}`);
  console.log(`Last page: ${lastPage}`);

  const paginatedData = coffeePaginationList.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= lastPage) {
      setPage(newPage);
    }
  };

  const paginationNumbers = Array.from(
    { length: Math.min(lastPage, PAGE_WINDOW) },
    (_, index) => {
      const pageNumber =
        Math.max(1, page - Math.floor(PAGE_WINDOW / 2)) + index;
      return pageNumber <= lastPage ? pageNumber : null;
    }
  );
  return (
    <div className="mt-10">
      <h1 className="text-center">hello</h1>
      <div className="flex flex-row items-center justify-center gap-5 mt-10">
        {paginatedData.map((coffee, index) => {
          return (
            <div
              key={index}
              className={`p-4 w-80 ${
                index !== paginatedData.length - 1 ? "border-r-1" : ""
              }`}
            >
              {/* <h1 className="text-2xl">{coffee.category}</h1> */}
              <CoffeeCarouseList data={coffee} />
              {/* <p>{coffee.description}</p> */}
            </div>
          );
        })}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <CircleChevronLeft href="#" 
             onClick={(e)=>{
              e.preventDefault();
              if(page >1) handlePageChange(page - 1);
             }}
             className={`${page === 1 ?"text-gray-400 cursor-not-allowed": "text-black cursor-pointer"}`}
            //  aria-disabled={page === 1}
            />
          </PaginationItem>
          <PaginationItem className="flex items-center gap-3">
            {paginationNumbers
              .filter((number) => number !== null)
              .map((number, index) => (
                <PaginationLink
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(number as number);
                  }}
                  className={`${
                    number === page
                      ? "bg-blue-500 rounded-full hover:rounded-full text-white"
                      : ""
                  }`}
                >
                  {number}
                </PaginationLink>
              ))}
          </PaginationItem>
         
            <PaginationItem>
              <CircleChevronRight
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page < lastPage) handlePageChange(page + 1);
                }}
                className={`${
                  page === lastPage
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black cursor-pointer"
                }`}
                aria-disabled={page === lastPage}
              />
            </PaginationItem>

        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CoffeeCarousel;
