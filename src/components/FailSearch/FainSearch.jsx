import style from './failSearch.module.css';
import errorImg from './ErrorImg.png';

const FailSearch = ({ message }) => (
  <div className={style.failSearch}>
    <p>
      К сожаленью, по запросу <mark>«{message}»</mark> фото не найдено
    </p>
    <img src={errorImg} alt="ErrorImg" />
  </div>
);

export default FailSearch;
