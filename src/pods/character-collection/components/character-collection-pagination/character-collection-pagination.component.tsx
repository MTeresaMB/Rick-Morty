import React from "react";
import ReactPaginate from "react-paginate";
import './character-collection-pagination.style.css';
interface Props {
  totalCards: number;
  cardsPerPage: number;
  currentPage: number;
  onPageChange: (selected: number) => void;
}
export const PaginationComponent: React.FC<Props> = ({
  totalCards,
  cardsPerPage,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalCards / cardsPerPage);
  const handlePageChange = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected);
  };
  return (
    <div className='containerPagination'>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={6}
        onPageChange={handlePageChange}
        forcePage={currentPage - 1}
        containerClassName='paginationBttns'
        previousLinkClassName='previousBttn'
        nextLinkClassName='nextBttn'
        disabledClassName='paginationDisabled'
        activeClassName='paginationActive'
      ></ReactPaginate>
    </div>
  );
};
