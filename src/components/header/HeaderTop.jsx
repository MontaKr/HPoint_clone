import styled from 'styled-components';


function HeaderTop () {
  return (
    <HeaderTopWrap>
      <ul className='HeaderUl'>
        <li className='HeaderLiWrap'>
          <a className='HeaderLiLogin'>
            로그인
          </a>
        </li>
        <li className='HeaderLi2Wrap'>
          <a className='HeaderLiSignup'>
            회원가입
          </a>
        </li>
        <li className='HeaderLiDown'>
          <button className='HeaderLiButton'>
            APP
          </button>
        </li>
      </ul>
    </HeaderTopWrap>
  )
}

export default HeaderTop;

const HeaderTopWrap = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  right: 110px;
  bottom: 100px;

  .HeaderUl {
    display: flex;
    align-items: center;
    height: 40px;
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .HeaderLiWrap {
    position: relative;
    margin-left: 18px;
    box-sizing: border-box;
    display: list-item;
  }

  .HeaderLiLogin {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 13px;
    color: #999;
    letter-spacing: -0.8px;
    cursor: pointer;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .HeaderLi2Wrap {
    position: relative;
    margin-left: 18px;
    box-sizing: border-box;
  }

  .HeaderLiSignup {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 13px;
    color: #999;
    letter-spacing: -0.8px;
    cursor: pointer;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .HeaderLiDown {
    position: relative;
    margin-left: 18px;
    box-sizing: border-box;
  }

  .HeaderLiButton {
    font-weight: 700;
    color: #4e2bf4;
    padding-right: 12px;
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/ic_download1.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: right center;
    font-family: "Noto Sans KR";
    font-size: 13px;
    border: 0;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
  }
`