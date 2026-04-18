
// import React from "react";

// interface ProductFiltersProps {
//   activeFilter: string;
//   onFilterChange: (filter: string) => void;
// }

// export const ProductFilters: React.FC<ProductFiltersProps> = ({
//   activeFilter,
//   onFilterChange,
// }) => {
//   const filters = [
//     "All Products",
//     "Bottles",
//     // "Jars & Cans",
//     "Machines",
//     // "Filters",
//     // "Accessories",
//     // "Corporate",
//   ];

//   return (
//     <nav className="w-full bg-white py-6 ">
//       <div className="max-w-[700px] mx-auto px-4 ">
//         <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => onFilterChange(filter)}
//               className={`w-full py-2.5 rounded-full cursor-pointer border text-sm font-medium transition-all duration-200 text-center
//               ${activeFilter === filter
//                   ? "border-gray-800 text-black bg-white shadow-sm"
//                   : "border-gray-200 text-gray-500 hover:border-gray-400 bg-white"
//                 }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };


import React from "react";

interface ProductFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const filters = [
    "All Products",
    "Bottles",
    "Machines",
  ];

  return (
    <nav className="w-full bg-white py-6">
      <div className="max-w-[700px] mx-auto px-4">
        
        {/* Center wrapper */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-14 py-2.5 rounded-full cursor-pointer border text-sm font-medium transition-all duration-200
              ${
                activeFilter === filter
                  ? "border-gray-800 text-black bg-white shadow-sm"
                  : "border-gray-200 text-gray-500 hover:border-gray-400 bg-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
};