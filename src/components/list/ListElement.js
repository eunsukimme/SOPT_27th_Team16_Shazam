import propTypes from 'prop-types';
import Styled from 'styled-components';

const ListElementWarp = Styled.div`


.list-element {
    left: 0px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 0;
    outline: 0;
    width 100%;
    
    :focus {
      border: 0;
      outline: 0;
      background: rgba(196, 196, 196, 0.15);

    }
  }

    .list-element__ranking-number {
        margin-left: 20px;
    }

    .list-element__img-box {
        margin: 0 20px;
        width: 60px;
        height: 60px;
        left: 52px;
        background-poistion: center;
        background-size: cover;
    }

    .list-element__title {
        text-align: left;
        font-weight: 700;
        display: flex;
        flex-direction: column; 
        }

    .list-element__suptitle {
      color: #636363;
        font-weight: 400;
        }
`;

function ListElement({
  order,
  title,
  subTitle,
  onClickFunc,
  height,
  fontSize,
  subfontSize,
  rankfontSize,
  songimageUri,
}) {
  return (
    <ListElementWarp>
      <button
        onClick={() => onClickFunc({ title, subTitle, songimageUri })}
        style={{ height: height }}
        className="list-element"
      >
        <p style={{ fontSize: rankfontSize }} className="list-element__ranking-number">
          {order}
        </p>
        <div
          className="list-element__img-box"
          style={{
            background: `url(${songimageUri})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="list-element__title-box">
          <span style={{ fontSize: fontSize }} className="list-element__title">
            {title}
          </span>
          <span style={{ fontSize: subfontSize }} className="list-element__subtitle">
            {subTitle}
          </span>
        </div>
        <div className="list-element__show-more-button"></div>
      </button>
    </ListElementWarp>
  );
}

ListElement.propTypes = {
  order: propTypes.number,
  title: propTypes.string,
  subTitle: propTypes.string,
  onClickFunc: propTypes.function,
  height: propTypes.number,
  fontSize: propTypes.string,
  subfontSize: propTypes.string,
  rankfontSize: propTypes.string,
  songimageUri: propTypes.string,
};

export default ListElement;
