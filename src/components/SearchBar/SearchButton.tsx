import * as React from "react";

const SearchButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="btn-premium text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-glow hover-lift"
    >
      Search
    </button>
  );
};

export default SearchButton;
