import { createContext } from 'react';
import ArticleStore from '../stores/UserStore';

const ArticleCurrentContext = createContext<typeof ArticleStore | null>(null);

export default ArticleCurrentContext;