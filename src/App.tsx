import React from 'react';
import './styles/global.scss';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { NewsListpage } from './Components/NewsListpage/NewsListPage';
import { NewsPage } from './Components/NewsListpage/NewsPage/NewsPage';
import { Route, Routes } from 'react-router-dom';
import { Error404 } from './Components/404/404';
import { Contacts } from './Components/Contacts/Contacts';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/news" element={<NewsListpage />}/>
        <Route path="/news/:newsId" element={<NewsPage />} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
