import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './CourseList.module.scss';
import axios from 'axios';

interface Props {
  activeTag: number;
  tags: string[];
}

const CourseList = ({ activeTag, tags }: Props) => {
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
      {activeTag === 0
        ? courses.map((item: { id: string; name: string; bgColor: string; image: string }) => (
            <Card key={item.id} name={item.name} color={item.bgColor} image={item.image} />
          ))
        : courses
            .filter((courseObj: { tags: string[] }) => {
              if (courseObj.tags.includes(tags[activeTag])) {
                return true;
              }
              return false;
            })
            .map((item: { id: string; name: string; bgColor: string; image: string }) => (
              <Card key={item.id} name={item.name} color={item.bgColor} image={item.image} />
            ))}
    </div>
  );
};

export default CourseList;
