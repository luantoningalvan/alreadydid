import React from "react";
import { CategoryLabelContainer } from "./styles";
import { Link } from "react-router-dom";
interface CategoryLabelProps {
  category: {
    name: string;
    id: string;
  };
}

const CategoryLabel: React.FC<CategoryLabelProps> = (props) => {
  const { category } = props;

  return (
    <CategoryLabelContainer>
      <Link to={`/category/${category.id}`}>{category.name}</Link>
    </CategoryLabelContainer>
  );
};

export default CategoryLabel;
