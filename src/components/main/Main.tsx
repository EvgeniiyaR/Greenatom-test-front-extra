import './Main.css';
import { inject, observer } from "mobx-react";
import ArticleCard from "../article-card/ArticleCard";
import AppStore from "../../stores/AppStore";
import AuthForm from "../form/AuthForm";
import Input from "../input/Input";
import Button from "../button/Button";
import { IArticle } from "../../types";

const Main = inject('store')(observer(() => {
  const { isAdd, handleClickAdd, handleAdd, handleChange, dataArticle, handleClickExit } = AppStore;

  let articles;
  if (!localStorage.getItem('articleList')) {
    localStorage.setItem('articleList', JSON.stringify([]));
  } else {
    const articleList = localStorage.getItem('articleList');
    if (articleList) {
      articles = JSON.parse(articleList);
    }
  }

  return (
    <main className="main">
        {isAdd ?
        <>
          <button className="main__button-cancel" type="button" onClick={handleClickExit}></button>
          <AuthForm name='add' onSubmit={handleAdd}>
            <Input type='text' label='Название' name='title' value={dataArticle.title} onChange={handleChange} />
            <textarea className="form__textarea" name="text" id="" placeholder="Текст статьи" rows={10} defaultValue={dataArticle.text} onChange={handleChange}></textarea>
            <Input type='url' label='Ссылка на обложку' name='url' value={dataArticle.url} onChange={handleChange} />
            <Button typeButton='submit' text='Сохранить' />
          </AuthForm>
        </>
        :
        <>
          <ul className="main__list">
            <li><button className="main__button-add" type="button" onClick={handleClickAdd}>+</button></li>
          {articles && articles.map((item: IArticle, index: number) => (
            <li className="main__element" key={index}>
              <ArticleCard title={item.title} text={item.text} author={item.author} id={index} url={item.url}/>
            </li>
          ))}
          </ul>
        </>
        }
    </main>
  )
}));

export default Main;