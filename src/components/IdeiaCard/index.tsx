import React from "react";
import { FiArrowDown, FiArrowUp, FiCheck, FiHeart } from "react-icons/fi";
import { Button, IconButton } from "..";
import { IdeiaContainer } from "./styles";
import CategoryLabel from "../CategoryLabel";
import { useHistory } from "react-router-dom";

interface IdeiaProps {
  ideia: {
    id: string;
    title: string;
    description: string;
    category: {
      name: string;
      id: string;
    };
  };
}

const Ideia: React.FC<IdeiaProps> = (props) => {
  const { id, title, description, category } = props.ideia;
  const history = useHistory();
  return (
    <IdeiaContainer>
      <div
        className="clickable-area"
        onClick={() => history.push(`/ideia/${id}`)}
      ></div>
      <CategoryLabel category={category} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="footer">
        <div>
          <Button variant="outlined" startIcon={FiCheck}>
            Já fiz
          </Button>
          <IconButton icon={FiHeart} />
        </div>

        <div>
          <IconButton icon={FiArrowUp} />
          <IconButton icon={FiArrowDown} />
        </div>
      </div>
    </IdeiaContainer>
  );
};

export default Ideia;
