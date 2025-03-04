import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/HomePage' ;

import InfoPage from './pages/InfoPage';

import Posts from './pages/Posts';

import Post from './pages/Post';

import DefaultLayout from './layout/DefaultLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Homepage} />
          <Route path="/info" Component={InfoPage} />
          <Route path="/posts" Component={Posts} />
          <Route path="/posts/:id" Component={Post} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;