import { useEffect, useState } from 'react';
import styled from 'styled-components';

// 탑으로 이동
const TopScroll = () => {
  window.scrollTo (
    {
      top : 0,
      behavior : 'smooth'
    }
  )
}

function QuickButton () {

    // 버튼 숨기기, 나타나기
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleShowBtn = () => {
      if(window.scrollY > 500) {
        setShowButton(true)
      }
      else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleShowBtn)
    return () => {
      window.removeEventListener("scroll", handleShowBtn)
    }
  }, [])

  return (
    <QuickButtonWrap showButton={showButton}>
      <div className='Div'>
        <button onClick={TopScroll} className='DivBtn'>
          top
        </button>
      </div>
    </QuickButtonWrap>
  )
}

export default QuickButton;

const QuickButtonWrap = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
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

  .Div {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .DivBtn {
    opacity: ${props=>props.showButton===true?'1':'0'};
    transition: ${props=>props.showButton===true?'opacity 500ms':'opacity 500ms , visibility 500ms'};
    visibility: ${props=>props.showButton===true?'auto':'hidden'};
    position: absolute;
    right: 30px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    text-indent: -9999px;
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/ic_top.png)!important;
    background-repeat: no-repeat!important;
    background-size: auto!important;
    background-position: center center!important;
    background-color: #fff!important;
    border-radius: 50%;
    box-shadow: 5.142px 6.128px 12.35px 0.65px rgb(25 48 88 / 30%);
    letter-spacing: 0px;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 18px;
    color: #111;
    text-align: left;
    background: none;
    border: 0;
    cursor: pointer;
    overflow: visible;
  }
`