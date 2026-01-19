import React from 'react';
import  './CompositeSelectorsPage.css';
import bunny from '../../assets/compositeSelectors/bunny.jpg';
import cheeks from '../../assets/compositeSelectors/cheeks.jpg';
import dartWeider from '../../assets/compositeSelectors/dartweider.jpg';
import manul from '../../assets/compositeSelectors/manul.jpg';
import suslik from '../../assets/compositeSelectors/suslik.jpg';

const CompositeSelectorsPage = () => {
  return (
      <div id="posts" className="post-list">
        <div id="post1" className="item">
          <div className="title">Пучеглазый леопардовый суслик</div>
          <img src={suslik} alt="suslik" />
        </div>
        <div id="post2" className="item">
          <div className="title">Ультрамилый реалистичный подробный пушистый белый детеныш кролика</div>
          <img src={bunny} alt="bunny" />
        </div>
        <div id="post3" className="item">
          <div className="title">Поварёнок крошка манул в колпаке, на кухне, печет блинчики</div>
          <img src={manul} alt="manul" />
        </div>
        <div id="post4" className="item">
          <div className="title">Очень милые спящие белочки</div>
          <img src={cheeks} alt="cheeks" />
        </div>
        <div id="post5" className="item">
          <div className="title">Пушистый милашка Дарт Вейдер</div>
          <img src={dartWeider} alt="dartweider" />
        </div>
      </div>
  );
};

export default CompositeSelectorsPage;
