import { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import $ from 'jquery';


//마우스오버 애니메이션
const dropdownAnimation = keyframes`
  0% {
    transform: translateY(-30%);
  }

  100% {
    transform: translateY(0);
  }
`

function HeaderRight ({toParentIsMouseOver}) {



  //마우스오버
    // 마우스오버 여부
    const [isMouseOver, setIsMouseOver] = useState(false)

    // 마우스오버될 때 true 리턴
    const ActMouseOver = () => {
      setIsMouseOver(true)
    }

    // 마우스리브될 때 false 리턴
    const ActMouseLeave = () => {
      setIsMouseOver(false)
    }

    $(document).mouseleave(function () {
      ActMouseLeave();
    });


  // 부모에게 mouseover state 전달
  toParentIsMouseOver(isMouseOver)

  return (
    <>
      <HeaderRightWrap isMouseOver={isMouseOver} onMouseEnter={ActMouseOver}>
        <ul className='HeaderRightWrapUl'>
          <li className='HeaderRightWrapUlLi'>
            <div className='HeaderRightWrapUlLiDiv'>
              <a className='HeaderRightWrapUlLiDivAnchor'>
                소개
              </a>
            </div>
            <ul className='HeaderRightWrapUlLiUl'>
              <li className='HeaderRightWrapUlLiUlLi'>
                <a className='HeaderRightWrapUlLiUlLiAnchor'>
                  H.Point소개
                </a>
              </li>
              <li className='HeaderRightWrapUlLiUlLi2'>
                <a className='HeaderRightWrapUlLiUlLi2Anchor'>
                  사용처안내
                </a>
              </li>
              <li className='HeaderRightWrapUlLiUlLi3'>
                <a className='HeaderRightWrapUlLiUlLi3Anchor'>
                  가입혜택
                </a>
              </li>
            </ul>
          </li>
          <li className='HeaderRightWrapUlLi2'>
            <div className='HeaderRightWrapUlLi2Div'>
              <a className='HeaderRightWrapUlLi2DivAnchor'>
                쌓기
              </a>
            </div>
            <ul className='HeaderRightWrapUlLi2Ul'>
              <li className='HeaderRightWrapUlLi2UlLi'>
                <a className='HeaderRightWrapUlLi2UlLiAnchor'>
                  즐길거리
                </a>
              </li>
              <li className='HeaderRightWrapUlLi2UlLi2'>
                <a className='HeaderRightWrapUlLi2UlLi2Anchor'>
                  전환하기
                </a>
              </li>
              <li className='HeaderRightWrapUlLi2UlLi3'>
                <a className='HeaderRightWrapUlLi2UlLi3Anchor'>
                  충전하기
                </a>
              </li>
              <li className='HeaderRightWrapUlLi2UlLi4'>
                <a className='HeaderRightWrapUlLi2UlLi4Anchor'>
                  영수증/쿠폰
                </a>
              </li>
            </ul>
          </li>
          <li className='HeaderRightWrapUlLi3'>
            <div className='HeaderRightWrapUlLi3Div'>
              <a className='HeaderRightWrapUlLi3DivAnchor'>
                쓰기
              </a>
            </div>
            <ul className='HeaderRightWrapUlLi3Ul'>
              <li className='HeaderRightWrapUlLi3UlLi'>
                <a className='HeaderRightWrapUlLi3UlLiAnchor'>
                  포인트샵
                </a>
              </li>
              <li className='HeaderRightWrapUlLi3UlLi2'>
                <a className='HeaderRightWrapUlLi3UlLi2Anchor'>
                  선물하기
                </a>
              </li>
              <li className='HeaderRightWrapUlLi3UlLi3'>
                <a className='HeaderRightWrapUlLi3UlLi3Anchor'>
                  기부하기
                </a>
              </li>
            </ul>
          </li>
          <li className='HeaderRightWrapUlLi4'>
            <div className='HeaderRightWrapUlLi4Div'>
              <a className='HeaderRightWrapUlLi4DivAnchor'>
                혜택
              </a>
            </div>
            <ul className='HeaderRightWrapUlLi4Ul'>
              <li className='HeaderRightWrapUlLi4UlLi'>
                <a className='HeaderRightWrapUlLi4UlLiAnchor'>
                  이벤트
                </a>
              </li>
              <li className='HeaderRightWrapUlLi4UlLi2'>
                <a className='HeaderRightWrapUlLi4UlLi2Anchor'>
                  쿠폰
                </a>
              </li>
              <li className='HeaderRightWrapUlLi4UlLi3'>
                <a className='HeaderRightWrapUlLi4UlLi3Anchor'>
                  플러스포인트
                </a>
              </li>
              <li className='HeaderRightWrapUlLi4UlLi4'>
                <a className='HeaderRightWrapUlLi4UlLi4Anchor'>
                  미션
                </a>
              </li>
              <li className='HeaderRightWrapUlLi4UlLi5'>
                <a className='HeaderRightWrapUlLi4UlLi5Anchor'>
                  제휴카드안내
                </a>
              </li>
              <li className='HeaderRightWrapUlLi4UlLi6'>
                <a className='HeaderRightWrapUlLi4UlLi6Anchor'>
                  후크체험단
                </a>
              </li>
              <li className='HeaderRightWrapUlLi4UlLi7'>
                <a className='HeaderRightWrapUlLi4UlLi7Anchor'>
                  Apple
                </a>
              </li>
            </ul>
          </li>
          <li className='HeaderRightWrapUlLi5'>
            <div className='HeaderRightWrapUlLi5Div'>
              <a className='HeaderRightWrapUlLi5DivAnchor'>
                클럽
              </a>
            </div>
            <ul className='HeaderRightWrapUlLi5Ul'>
              <li className='HeaderRightWrapUlLi5UlLi'>
                <a className='HeaderRightWrapUlLi5UlLiAnchor'>
                  클럽프렌즈
                </a>
              </li>
              <li className='HeaderRightWrapUlLi5UlLi2'>
                <a className='HeaderRightWrapUlLi5UlLi2Anchor'>
                  클럽웨딩
                </a>
              </li>
              <li className='HeaderRightWrapUlLi5UlLi3'>
                <a className='HeaderRightWrapUlLi5UlLi3Anchor'>
                  맘스클럽
                </a>
              </li>
              <li className='HeaderRightWrapUlLi5UlLi4'>
                <a className='HeaderRightWrapUlLi5UlLi4Anchor'>
                  헤이,마이 뷰티
                </a>
              </li>
              <li className='HeaderRightWrapUlLi5UlLi5'>
                <a className='HeaderRightWrapUlLi5UlLi5Anchor'>
                  클럽아디다스
                </a>
              </li>
              <li className='HeaderRightWrapUlLi5UlLi6'>
                <a className='HeaderRightWrapUlLi5UlLi6Anchor'>
                  클럽트레블
                </a>
              </li>
              <li className='HeaderRightWrapUlLi5UlLi7'>
                <a className='HeaderRightWrapUlLi5UlLi7Anchor'>
                  클럽육학다식
                </a>
              </li>
            </ul>
          </li>
          <li className='HeaderRightWrapUlLi6'>
            <div className='HeaderRightWrapUlLi6Div'>
              <a className='HeaderRightWrapUlLi6DivAnchor'>
                H.Point Pay
              </a>
            </div>
          </li>
          <li className='HeaderRightWrapUlLi7'>
            <div className='HeaderRightWrapUlLi7Div'>
              <a className='HeaderRightWrapUlLi7DivAnchor'>
                고객센터
              </a>
            </div>
            <ul className='HeaderRightWrapUlLi7Ul'>
              <li className='HeaderRightWrapUlLi7UlLi'>
                <a className='HeaderRightWrapUlLi7UlLiAnchor'>
                  FAQ
                </a>
              </li>
              <li className='HeaderRightWrapUlLi7UlLi2'>
                <a className='HeaderRightWrapUlLi7UlLi2Anchor'>
                  1:1문의
                </a>
              </li>
              <li className='HeaderRightWrapUlLi7UlLi3'>
                <a className='HeaderRightWrapUlLi7UlLi3Anchor'>
                  공지사항
                </a>
              </li>
              <li className='HeaderRightWrapUlLi7UlLi4'>
                <a className='HeaderRightWrapUlLi7UlLi4Anchor'>
                  제휴문의
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </HeaderRightWrap>
    </>
  )
}

export default HeaderRight;

const HeaderRightWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  bottom: 40px;

  .HeaderRightWrapUl {
    height: 100%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    display: block;
    margin-inline-end: 0px;
    margin-inline-start: 0px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 40px;
  }

  .HeaderRightWrapUlLi {
    z-index: 1000;
    position: relative;
    float: left;
    width: auto;
    height: 100%;
    padding-right: 80px;
    transition: padding .3s;
  }

  .HeaderRightWrapUlLi2 {
    z-index: 1000;
    position: relative;
    float: left;
    width: auto;
    height: 100%;
    padding-right: 80px;
    transition: padding .3s;
  }

  .HeaderRightWrapUlLi3 {
    z-index: 1000;
    position: relative;
    float: left;
    width: auto;
    height: 100%;
    padding-right: 80px;
    transition: padding .3s;
  }

  .HeaderRightWrapUlLi4 {
    z-index: 1000;
    position: relative;
    float: left;
    width: auto;
    height: 100%;
    padding-right: 80px;
    transition: padding .3s;
  }

  .HeaderRightWrapUlLi5 {
    z-index: 1000;
    position: relative;
    float: left;
    width: auto;
    height: 100%;
    padding-right: 80px;
    transition: padding .3s;
  }

  .HeaderRightWrapUlLi6 {
    z-index: 1000;
    position: relative;
    float: left;
    width: auto;
    height: 100%;
    padding-right: 80px;
    transition: padding .3s;
  }

  .HeaderRightWrapUlLi7 {
    z-index: 1000;
    position: relative;
    float: left;
    width: auto;
    height: 100%;
    padding-right: 80px;
    transition: padding .3s;
  }

  .HeaderRightWrapUlLiDiv {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
  }

  .HeaderRightWrapUlLiDivAnchor {
    position: relative;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 22px;
    color: #111;
    letter-spacing: 0px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi2Div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
  }

  .HeaderRightWrapUlLi2DivAnchor {
    position: relative;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 22px;
    color: #111;
    letter-spacing: 0px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi3Div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
  }

  .HeaderRightWrapUlLi3DivAnchor {
    position: relative;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 22px;
    color: #111;
    letter-spacing: 0px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi4Div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
  }

  .HeaderRightWrapUlLi4DivAnchor {
    position: relative;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 22px;
    color: #111;
    letter-spacing: 0px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi5Div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
  }

  .HeaderRightWrapUlLi5DivAnchor {
    position: relative;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 22px;
    color: #111;
    letter-spacing: 0px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi6Div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
  }

  .HeaderRightWrapUlLi6DivAnchor {
    position: relative;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 22px;
    color: #111;
    letter-spacing: 0px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi7Div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
  }

  .HeaderRightWrapUlLi7DivAnchor {
    position: relative;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 22px;
    color: #111;
    letter-spacing: 0px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLiUl {
    display: ${props=>props.isMouseOver===true?'auto':'none'};
    padding-top: 15px;
    margin-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    position: absolute;
    left: 0;
    height: 170px;
    top: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    transition: height 0.3s ease;
    animation: ${dropdownAnimation} 0.3s ease;
  }

  .HeaderRightWrapUlLiUlLi {
    margin-top: 0;
  }

  .HeaderRightWrapUlLiUlLiAnchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLiUlLi2 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLiUlLi2Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLiUlLi3 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLiUlLi3Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi2Ul {
    display: ${props=>props.isMouseOver===true?'auto':'none'};
    height: 169.769px;
    padding-top: 15px;
    margin-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    animation: ${dropdownAnimation} 0.3s ease;
  }

  .HeaderRightWrapUlLi2UlLi {
    margin-top: 0;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .HeaderRightWrapUlLi2UlLiAnchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi2UlLi2 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi2UlLi2Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi2UlLi3 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi2UlLi3Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi2UlLi4 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi2UlLi4Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi3Ul {
    display: ${props=>props.isMouseOver===true?'auto':'none'};
    height: 169.769px;
    padding-top: 15px;
    margin-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    animation: ${dropdownAnimation} 0.3s ease;
  }

  .HeaderRightWrapUlLi3UlLi {
    margin-top: 0;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .HeaderRightWrapUlLi3UlLiAnchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi3UlLi2 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi3UlLi2Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi3UlLi3 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi3UlLi3Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi4Ul {
    display: ${props=>props.isMouseOver===true?'auto':'none'};
    height: 169.769px;
    padding-top: 15px;
    margin-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    animation: ${dropdownAnimation} 0.3s ease;
  }

  .HeaderRightWrapUlLi4UlLi {
    margin-top: 0;
  }

  .HeaderRightWrapUlLi4UlLiAnchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi4UlLi2 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi4UlLi2Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi4UlLi3 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi4UlLi3Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi4UlLi4 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi4UlLi4Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi4UlLi5 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi4UlLi5Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi4UlLi6 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi4UlLi6Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi4UlLi7 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi4UlLi7Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi5Ul {
    display: ${props=>props.isMouseOver===true?'auto':'none'};
    height: 169.769px;
    padding-top: 15px;
    margin-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    animation: ${dropdownAnimation} 0.3s ease;
  }

  .HeaderRightWrapUlLi5UlLi {
    margin-top: 0;
  }

  .HeaderRightWrapUlLi5UlLiAnchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi5UlLi2 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi5UlLi2Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi5UlLi3 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi5UlLi3Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi5UlLi4 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi5UlLi4Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi5UlLi5 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi5UlLi5Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi5UlLi6 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi5UlLi6Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi5UlLi7 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi5UlLi7Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi7Ul {
    display: ${props=>props.isMouseOver===true?'auto':'none'};
    height: 169.769px;
    padding-top: 15px;
    margin-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    animation: ${dropdownAnimation} 0.3s ease;
  }

  .HeaderRightWrapUlLi7UlLi {
    margin-top: 0;
  }

  .HeaderRightWrapUlLi7UlLiAnchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi7UlLi2 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi7UlLi2Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi7UlLi3 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi7UlLi3Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }

  .HeaderRightWrapUlLi7UlLi4 {
    margin-top: 20px;
  }

  .HeaderRightWrapUlLi7UlLi4Anchor {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: pointer;
  }
`