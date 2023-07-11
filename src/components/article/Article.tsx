import './Article.css';
import { useNavigate, useParams } from "react-router-dom";
import Button from "../button/Button";
import AuthForm from "../form/AuthForm";
import Input from "../input/Input";
import AppStore from '../../stores/AppStore';
import { inject, observer } from 'mobx-react';
import { FormEvent } from 'react';

const Article = inject('store')(observer(() => {
  const { handleEdit, handleClickEdit, isEdit, currentArticle, dataArticle, handleChange, currentUser, handleClickExit } = AppStore;
  let { id } = useParams();
  const _id = Number(id);
  const navigate = useNavigate();

  let articles;
  const articleList = localStorage.getItem('articleList');
  if (articleList) {
    articles = JSON.parse(articleList);
    currentArticle.title = articles[_id].title;
    currentArticle.text = articles[_id].text;
    currentArticle.author = articles[_id].author;
    currentArticle.url = articles[_id].url;
    currentArticle.email = articles[_id].email;
  }

  const getArticles = () => {
    let articles;
    const articleList = localStorage.getItem('articleList');
    if (articleList) {
      articles = JSON.parse(articleList);
    }

    return articles;
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleEdit();
    const articles = getArticles();
    currentArticle.author = articles[_id].author;
    currentArticle.email = articles[_id].email;
    articles.splice(_id, 1, currentArticle);
    localStorage.setItem('articleList', JSON.stringify(articles));
  }

  const handleClickDelete = () => {
    const articles = getArticles();
    articles.splice(_id, 1);
    localStorage.setItem('articleList', JSON.stringify(articles));
    navigate('/');
  }

  return (
    <main className="main">
      {isEdit ?
        <>
          <button className="main__button-cancel" type="button" onClick={handleClickExit}></button>
          <AuthForm name='edit' onSubmit={(e) => onSubmit(e)}>
            <Input type='text' label='Название' name='title' value={dataArticle.title} onChange={handleChange} />
            <textarea className="form__textarea" name="text" id="" placeholder="Текст статьи" rows={10} defaultValue={dataArticle.text} onChange={handleChange}></textarea>
            <Input type='url' label='Ссылка на обложку' name='url' value={dataArticle.url} onChange={handleChange} />
            <Button typeButton='submit' text='Сохранить' />
          </AuthForm>
        </>
        :
        <>
          <div className="main__article">
            <h1 className="main__title-full">{currentArticle.title}</h1>
            <p className="main__text-full">{currentArticle.text}</p>
            <p className="main__author-full">{currentArticle.author || `${currentUser.firstName} ${currentUser.lastName}`}</p>
          </div>
          {articles[_id].email === currentUser.email &&
          <div className="main__button-wrapper">
            <button className="main__button" type="button" onClick={handleClickEdit}>Редактировать</button>
            <button className="main__button" type="button" onClick={handleClickDelete}>Удалить</button>
          </div>
          }
        </>
      }
    </main>
  )
}));

export default Article;