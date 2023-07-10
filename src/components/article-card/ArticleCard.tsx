import { Link } from "react-router-dom";
import { IProps } from "../../types";
import { inject, observer } from "mobx-react";

const ArticleCard = inject('store')(observer(({ title, text, author, id }: IProps) => {

  return (
    <>
      <h1><Link className="main__link" to={`articles/${id}`} >{title}</Link></h1>
    </>
  )
}));

export default ArticleCard;