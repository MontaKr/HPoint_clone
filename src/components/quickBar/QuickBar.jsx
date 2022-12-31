import styled from 'styled-components';

function Quickbar () {
  return (
    <QuickBarWrap>
      <div className='Div'>
        <div className='DivDiv'>
          <div className='DivDivDiv'>
            Quick
          </div>
          <ul className='DivDivUl'>
            <li className='DivDivUlLi1'>
              <a className='DivDivUlLi1Anchor'>
                Join
              </a>
            </li>
            <li className='DivDivUlLi2'>
              <a className='DivDivUlLi2Anchor'>
                앱다운
              </a>
            </li>
            <li className='DivDivUlLi3'>
              <a className='DivDivUlLi3Anchor'>
                앱다운
              </a>
            </li>
            <li className='DivDivUlLi4'>
              <a className='DivDivUlLi4Anchor'>
                이벤트
              </a>
            </li>
            <li className='DivDivUlLi5'>
              <a className='DivDivUlLi5Anchor'>
                고객센터
              </a>
            </li>
          </ul>
        </div>
      </div>
    </QuickBarWrap>
  )
}

export default Quickbar;

const QuickBarWrap = styled.div`
  position: fixed;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 100;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "Noto Sans KR";
  letter-spacing: -0.3px;
  line-height: normal;
  vertical-align: baseline;
  word-break: keep-all;
  word-wrap: break-word;
  box-sizing: border-box;
  height: 429px;

  .Div {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Noto Sans KR";
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
    height: 429px;
  }

  .DivDiv {
    position: relative;
    text-align: center;
    height: 429px;
  }

  .DivDivDiv {
    /* position: relative; */
    width: 80px;
    height: 38px;
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    letter-spacing: -0.5px;
    padding-top: 45px;
    border-radius: 20px 0 0 0;
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/ic_quick.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center 19px;
    background-color: #4e2bf4;
  }

  .DivDivUl {
    display: block;
    background: #fff;
    border-radius: 0 0 0 20px;
    box-shadow: 5.142px 6.128px 12.35px 0.65px rgb(25 48 88 / 30%);
    padding-bottom: 14px;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    height: 332px;
  }

  .DivDivUl::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 83px;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    box-sizing: border-box;
  }

  .DivDivUlLi1 {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Noto Sans KR";
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
    display: list-item;
    text-align: -webkit-match-parent;
    height: 83px;
  }

  .DivDivUlLi1Anchor {
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/ic_quick_join.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center 26px;
    display: block;
    height: 83px;
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #444;
    letter-spacing: -.5px;
    padding-top: 52px;
    text-decoration-color: rgb(68,68,68);
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;
  }

  .DivDivUlLi2 {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Noto Sans KR";
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
    display: list-item;
    text-align: -webkit-match-parent;
    height: 83px;
  }

  .DivDivUlLi2Anchor {
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/ic_quick_appdown.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center 26px;
    display: block;
    width: 80px;
    height: 83px;
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #444;
    letter-spacing: -.5px;
    padding-top: 52px;
  }

  .DivDivUlLi3 {
    display: none !important;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Noto Sans KR";
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
    height: 83px;
  }

  .DivDivUlLi3Anchor {
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/ic_quick_appdown.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center 26px;
    display: block;
    width: 80px;
    height: 83px;
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #444;
    letter-spacing: -.5px;
    padding-top: 52px;
  }

  .DivDivUlLi4 {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Noto Sans KR";
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
    display: list-item;
    text-align: -webkit-match-parent;
    height: 83px;
  }

  .DivDivUlLi4Anchor {
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/ic_quick_event.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center 26px;
    display: block;
    width: 80px;
    height: 83px;
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #444;
    letter-spacing: -.5px;
    padding-top: 52px;
  }

  .DivDivUlLi5 {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Noto Sans KR";
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
    display: list-item;
    text-align: -webkit-match-parent;
    height: 83px;
  }

  .DivDivUlLi5Anchor {
    background-image: url(https://www.h-point.co.kr/images_customer/icon/ic_quick_talk.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center 26px;
    display: block;
    width: 80px;
    height: 83px;
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #444;
    letter-spacing: -.5px;
    padding-top: 52px;
  }

  /* 호버 */
  .DivDivUlLi1Anchor:hover {
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/ic_quick_join_on.png);
    color: #4e2bf4;
  }

  .DivDivUlLi2Anchor:hover {
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/ic_quick_appdown_on.png);
    color: #4e2bf4;
  }

  .DivDivUlLi4Anchor:hover {
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/ic_quick_event_on.png);
    color: #4e2bf4;
  }

  .DivDivUlLi5Anchor:hover {
    background-image: url(https://www.h-point.co.kr/images_customer/icon/ic_quick_talk_2.png);
    color: #4e2bf4;
  }
`