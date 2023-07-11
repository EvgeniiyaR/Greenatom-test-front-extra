import './ArticleCard.css';
import { Link } from "react-router-dom";
import { IProps } from "../../types";
import { inject, observer } from "mobx-react";

const ArticleCard = inject('store')(observer(({ title, text, author, id, url }: IProps) => {

  return (
    <>
      <Link className="main__link" style={{backgroundImage: `url(${url})`}} to={`articles/${id}`}>
        {title}
      </Link>
    </>
  )
}));

export default ArticleCard;