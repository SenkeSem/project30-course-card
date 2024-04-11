import { useState } from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const TAGS = ['Все темы', 'Логика и мышление', 'Загадки', 'Головоломки', 'Путешествия'];

  const [activeTag, setActiveTag] = useState(0);

  return (
    <div className={styles.wrapper}>
      <nav>
        <ul>
          {TAGS.map((str, id) => (
            <li
              key={str}
              className={activeTag === id ? styles.active : ''}
              onClick={() => setActiveTag(id)}>
              {str}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
