//import propTypes from 'prop-types';
import Styled from 'styled-components';

const ListElementWarp = Styled.div`
.list-element {
    left: 0px;
    height: 80px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    }

    .list-element__ranking-number {
        margin-left: 20px;
    }

    .list-element__img-box {
        margin: 0 20px;
        width: 60px;
        height: 60px;
        left: 52px;
        background: #C4C4C4;;
    }

    .list-element__title {
        font-size: 20px;
        font-weight: 700;
        display: flex;
        flex-direction: column; 
        }

    .list-element__suptitle {
        font-size: 16px;
        font-weight: 400;
        opacity: 0.6;
        }


`;

function ListElement() {
  return (
    <ListElementWarp>
      <div className="list-element">
        <p className="list-element__ranking-number">1</p>
        <div className="list-element__img-box"></div>
        <div className="list-element__title-box">
          <span className="list-element__title">title</span>
          <span className="list-element__subtitle">suptitle</span>
        </div>
        <div className="list-element__show-more-button"></div>
      </div>
    </ListElementWarp>
  );
}

//ListElement.propTypes = {};

export default ListElement;
