import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './CourseList.module.scss';

import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      try {
        const { data } = await axios.get('https://logiclike.com/docs/courses.json');

        setCourses(data);
        console.log(data);
      } catch (err) {
        alert('При получение курсов произошла ошибка!');
      }
    }
    getCourses();
  }, []);

  return (
    <div className={styles.wrapper}>
      {courses.map((item) => (
        <>
          <Card />
        </>
      ))}
    </div>
  );
};

export default CourseList;
