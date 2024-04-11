import { useState } from 'react';

import './App.css';
import CourseList from './components/CourseList/CourseList';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const TAGS = ['Все темы', 'Логика и мышление', 'Загадки', 'Головоломки', 'Путешествия'];
  const [activeTag, setActiveTag] = useState(0);

  const onChangeTag = (id: number) => {
    setActiveTag(id);
  };

  return (
    <>
      <Sidebar onChangeTag={onChangeTag} activeTag={activeTag} tags={TAGS} />
      <CourseList activeTag={activeTag} tags={TAGS} />
    </>
  );
}

export default App;
