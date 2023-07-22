// import React, { useState } from "react";
// import ReactPaginate from "react-paginate";

// interface Props {
//   userSize: number;
//   handleSearchPage 
// }

// const Pagination = (props: Props) => {
//   const [offset, setOffset] = useState(0);
//   const perPage: number = 5;

//   const handlePageChange = (data) => {
//     const page_number = data["selected"];
//     setOffset(page_number * page_number);
//   };
//   return (
//     <>
//       <div>
//         {InfoList.slice(offset, offset + perPage)
//           .map((el) => {
//             return (
//               <div>
//                 <p>{el.name}</p>
//               </div>
//             );
//           })}
//       </div>
//       <ReactPaginate
//         previousLabel={"<"}
//         nextLabel={">"}
//         breakLabel={"..."}
//         pageCount={Math.ceil(Infolist.length / perPage)} // 全部のページ数。端数の場合も考えて切り上げに。
//         marginPagesDisplayed={2} // 一番最初と最後を基準にして、そこからいくつページ数を表示するか
//         pageRangeDisplayed={5} // アクティブなページを基準にして、そこからいくつページ数を表示するか
//         onPageChange={handlePageChange} // クリック時のfunction
//         containerClassName={"pagination"} // ページネーションであるulに着くクラス名
//         subContainerClassName={"pages pagination"}
//         activeClassName={"active"} // アクティブなページのliに着くクラス名
//         previousClassName={"pagination__previous"} // 「<」のliに着けるクラス名
//         nextClassName={"pagination__next"} // 「>」のliに着けるクラス名
//         disabledClassName={"pagination__disabled"} // 使用不可の「<,>」に着くクラス名
//       />
//     </>
//   );
// };

// export default Pagination;
