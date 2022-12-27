import { useState } from "react";

interface UsePaginationProps {
    contentPerPage: number,
    count: number,
}
interface UsePaginationReturn {
    page: number;
    totalPages: number;
    firstContentIndex: number;
    lastContentIndex: number;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (page: number) => void;
}
type UsePagination = (UsePaginationProps: UsePaginationProps) => (UsePaginationReturn);

const usePagination: UsePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);
  // кол-во страниц
  const pageCount = Math.ceil(count / contentPerPage);
  //  последний индекс на текущей странице
  const lastContentIndex = page * contentPerPage;
  //  первый индекс на текущей странице
  const firstContentIndex = lastContentIndex - contentPerPage;
  // change page based on direction either front or back
  const changePage = (direction: boolean) => {
    setPage((state) => {
      // вперед
      if (direction) {
        // если страница последняя - ничего не делать
        if (state === pageCount) {
          return state;
        }
        return state + 1;
        // назад
      } else {
        // если страница первая - ничего не делать
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };
  const setPageSAFE = (num: number) => {
    // если номер больше, чем общее кол-во страниц - перейти на последнюю
    if (num > pageCount) {
      setPage(pageCount);
      // если номер меньше, чем 1 - перейти на первую
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };
  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};
export default usePagination;