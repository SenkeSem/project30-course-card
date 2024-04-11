import styles from './Sidebar.module.scss';

interface Props {
  activeTag: number;
  onChangeTag: (id: number) => void;
  tags: string[];
}

const Sidebar = ({ activeTag, onChangeTag, tags }: Props) => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <ul>
          {tags.map((str, id) => (
            <li
              key={str}
              className={activeTag === id ? styles.active : ''}
              onClick={() => onChangeTag(id)}>
              {str}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
