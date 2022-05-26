import style from './skeleton.module.css';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Skeleton = () =>
  numbers.map(index => (
    <li key={index} className={style.skeleton}>
      <div className={style.wrapper}>
        <div className={style.animation}></div>
      </div>
    </li>
  ));

export default Skeleton;
