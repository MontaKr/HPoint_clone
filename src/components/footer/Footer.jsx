import styled from 'styled-components';

function Footer () {
  return (
    <FooterWrap>
      <div className='FooterDiv'>
        <div className='FooterDivDiv'>
          <div className='FooterDivDivDiv'/>
          <ul className='FooterDivDivUl1'>
            <li className='FooterDivDivUl1Li1'>
              <a className='FooterDivDivUl1Li1Anchor'>
                이용약관
              </a>
            </li>
            <li className='FooterDivDivUl1Li1'>
              <a className='FooterDivDivUl1Li1Anchor'>
                위치기반서비스 이용약관
              </a>
            </li>
            <li className='FooterDivDivUl1Li1'>
              <a className='FooterDivDivUl1Li1Anchor2'>
                개인정보처리방침
              </a>
            </li>
            <li className='FooterDivDivUl1Li4'>
              <a className='FooterDivDivUl1Li1Anchor'>
                개인정보보호센터
              </a>
            </li>
          </ul>
          <ul className='FooterDivDivUl2'>
            <li className='FooterDivDivUl2Li'>
              <a className='FooterDivDivUl2LiAnchor1'>
                <img src='https://www.h-point.co.kr/assets/app/img/common/ft_sns_youtube.png'/>
              </a>
            </li>
            <li className='FooterDivDivUl2Li'>
              <a className='FooterDivDivUl2LiAnchor1'>
                <img src='	https://www.h-point.co.kr/assets/app/img/common/ft_sns_kakao.png'/>
              </a>
            </li>
            <li className='FooterDivDivUl2Li3'>
              <a className='FooterDivDivUl2LiAnchor1'>
                <img src='	https://www.h-point.co.kr/assets/app/img/common/ft_sns_kakao.png'/>
              </a>
            </li>
          </ul>
          <div className='FooterDivDivDiv2'>
            <p className='FooterDivDivDiv2P'>
              주식회사 현대백화점
            </p>
            <p className='FooterDivDivDiv2P'>
              서울시 강남구 테헤란로98길 12
            </p>
            <p className='FooterDivDivDiv2P'>
              고객센터 
            </p>
          </div>
          <p className='FooterDivDivP'>
            © HYUNDAI DEPARTMENT STORE GROUP Co. Ltd. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </FooterWrap>
  )
}

export default Footer;


const FooterWrap = styled.div`
  position: relative;
  width: 100%;
  min-width: 280px;
  height: auto;
  background: #fff;
  border-top: 1px solid #e6e6e6;
  padding: 45px 0 60px;

  .FooterDiv {
    position: relative;
    max-width: 1284px;
    min-width: 280px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .FooterDivDiv {
    position: relative;
    padding-left: 210px;
  }

  .FooterDivDivDiv {
    position: absolute;
    left: 0;
    top: 5px;
    width: 149px;
    height: 50px;
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/logo2.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 0;
  }

  .FooterDivDivUl1 {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    height: 24px;
  }

  .FooterDivDivUl1Li1 {
    float: left;
    margin-right: 35px!important;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Noto Sans KR";
    letter-spacing: -0.3px!important;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .FooterDivDivUl1Li1Anchor {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #333;
    letter-spacing: -0.25px;
    box-sizing: border-box;
  }

  .FooterDivDivUl1Li1Anchor2 {
    font-weight: 700;
    font-family: "Noto Sans KR";
    font-size: 16px;
    color: #333;
    letter-spacing: -0.25px;
    box-sizing: border-box;
  }

  .FooterDivDivUl1Li4 {
    float: left;
    margin-right: 35px!important;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Noto Sans KR";
    letter-spacing: -0.3px!important;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .FooterDivDivUl1Li4::after {
    content: ".";
    display: block;
    clear: both;
    height: 0;
    font-size: 0;
    visibility: hidden;
    box-sizing: border-box;
  }

  .FooterDivDivUl2 {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }

  .FooterDivDivUl2Li {
    float: left;
    margin-left: 10px;
  }

  .FooterDivDivUl2LiAnchor1 {
    letter-spacing: 0px;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    box-sizing: border-box;
  }

  .FooterDivDivUl2Li3 {
    float: left;
    margin-left: 10px;
  }

  .FooterDivDivUl2Li3::after {
    content: ".";
    display: block;
    clear: both;
    height: 0;
    font-size: 0;
    visibility: hidden;
    box-sizing: border-box;
  }

  .FooterDivDivDiv2 {
    margin-top: 25px;
  }

  .FooterDivDivDiv2P {
    position: relative;
    float: left;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 14px;
    color: #999;
    letter-spacing: -0.25px;
    margin-right: 10px;
    padding-right: 12px;
  }

  .FooterDivDivDiv2P::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 2px;
    height: 2px;
    background: #999;
    opacity: 0.5;
  }

  .FooterDivDivDiv2::after {
    content: ".";
    display: block;
    clear: both;
    height: 0;
    font-size: 0;
    visibility: hidden;
  }

  .FooterDivDivP {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 12px;
    color: #999;
    letter-spacing: 0.3px;
    margin-top: 12px;
  }
`