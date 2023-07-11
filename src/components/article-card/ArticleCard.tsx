import './ArticleCard.css';
import { Link } from "react-router-dom";
import { IProps } from "../../types";
import { inject, observer } from "mobx-react";

const ArticleCard = inject('store')(observer(({ title, text, author, id, url }: IProps) => {

  return (
    <Link className="main__link" to={`articles/${id}`}>
      <img className="main__image" src={`${url}`} alt="Обложка" />
      <h2 className="main__title">{title}</h2>
      <p className="main__author">{author}</p>
    </Link>
  )
}));

export default ArticleCard;