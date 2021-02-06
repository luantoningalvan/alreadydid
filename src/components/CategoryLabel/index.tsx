import React from "react";
import { CategoryLabelContainer } from "./styles";
import { Link } from "react-router-dom";

interface CategoryLabelProps {
  category: string;
}

const CategoryLabel: React.FC<CategoryLabelProps> = (props) => {
  const { category } = props;

  return (
    <CategoryLabelContainer>
      <Link to={`/category/${category}`}>{category}</Link>
    </CategoryLabelContainer>
  );
};

export default CategoryLabel;
