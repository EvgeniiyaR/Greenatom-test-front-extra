import { inject, observer } from "mobx-react";
import { data } from "../../utils/data";
import ArticleCard from "../article-card/ArticleCard";
import AppStore from "../../stores/AppStore";
import AuthForm from "../form/AuthForm";
import Input from "../input/Input";
import Button from "../button/Button";
import { IArticle } from "../../types";

const Main = inject('store')(observer(() => {
  const { isAdd, handleClickAdd, handleAdd, handleChange, dataArticle } = AppStore;

  let articles;
  const articleList = localStorage.getItem('articleList');
  if (articleList) {
    articles = JSON.parse(articleList);
  }

  return (
    <main className="main">
        {isAdd ?
        <AuthForm name='add' onSubmit={handleAdd}>
          <Input type='text' label='Название' name='title' value={dataArticle.title} onChange={handleChange} />
          <textarea className="form__textarea" name="text" id="" cols={30} rows={10} defaultValue={dataArticle.text} onChange={handleChange}></textarea>
          <Button typeButton='submit' text='Сохранить' />
        </AuthForm>
        :
        <>
          <button type="button" onClick={handleClickAdd}>Cоздать статью</button>
          <ul className="main__list">
          {articles.map((item: IArticle, index: number) => (
            <li className="main__element" key={index}>
              <ArticleCard title={item.title} text={item.text} author={item.author} id={index} />
            </li>
          ))}
          </ul>
        </>
        }
    </main>
  )
}));

export default Main;