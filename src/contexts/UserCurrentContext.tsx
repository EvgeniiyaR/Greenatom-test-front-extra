import { createContext } from 'react';
import UserStore from '../stores/UserStore';

const UserCurrentContext = createContext<typeof UserStore | null>(null);

export default UserCurrentContext;
