import styles from './Card.module.scss';

interface Props {
  name: string;
  color: string;
  image: string;
}

const Card = ({ name, color, image }: Props) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor: `${color}` }}>
      <div className={styles.imageBlock}>
        <img width={144} height={144} src={image} alt="image" />
      </div>
      <div className={styles.textBlock}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
