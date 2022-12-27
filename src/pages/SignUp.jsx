import styled from 'styled-components';

const array = [{
  num : 1,
  text : '본인인증'
},
{
  num : 2,
  text : '약관동의'
},
{
  num : 3,
  text : '정보입력'
},
{
  num : 4,
  text : '가입완료'
}]

function SignUp () {
  return (
    <SignUpWrap>
      <div className='SignUpTop'>
        <div className='SignUpDiv'>
          <h2 className='SignUpH2'>
            H.Point 회원가입
          </h2>
          <p className='SignUpP'>
            간편하게 신규가입하고 다양한 혜택을 누려보세요!
          </p>
        </div>
      </div>
      <div className='SignUpMid'>
        <ol className='SignUpMidOl'>
          {array.map((a,i)=>{
            if(a.num === 1) {
              return (
                <li className='SignUpMidLi'>
                  <div className='SignUpMidIdv'>
                    {a.num}
                  </div>
                  <p className='SignUpMidP'>
                    {a.text}
                  </p>
                </li>
              )
            }
            
            else {
              return (
                <li className='SignUpMidLi'>
                  <div className='SignUpMidIdvElse'>
                    {a.num}
                  </div>
                  <p className='SignUpMidPElse'>
                    {a.text}
                  </p>
                </li>
              )
            }
          })}
        </ol>
      </div>
      <div className='SignUpSelect'>
        <div className='SignUpSelectDiv'>
          <div className='SignUpSelectDivDiv'>
            <div className='SignUpSelectDivDivDiv'>
              <div className='SignUpSelectDivDivDiv1'>
                <h3 className='SignUpSelectDivDivDiv1H3'>
                  본인인증
                </h3>
                <p className='SignUpSelectDivDivDiv1P'>
                  네이버, 카카오 간편가입으로 10초 만에 가입완료!
                </p>
              </div>
              <div className='SignUpSelectDivDivDiv2'>
                <ul className='SignUpSelectDivDivDiv1Ul'>
                  <li className='SignUpSelectDivDivDiv1UlLi'>
                    <a className='SignUpSelectDivDivDiv1UlLiAnchor'>
                      <span className='SignUpSelectDivDivDiv1UlLiAnchorSpan'>
                        네이버 간편 가입
                      </span>
                    </a>
                  </li>
                  <li className='SignUpSelectDivDivDiv1UlLi'>
                    <a className='SignUpSelectDivDivDiv1UlLiAnchorKakao'>
                      <span className='SignUpSelectDivDivDiv1UlLiAnchorSpan'>
                        카카오 간편 가입
                      </span>
                    </a>
                  </li>
                  <li className='SignUpSelectDivDivDiv1UlLi'>
                    <a className='SignUpSelectDivDivDiv1UlLiAnchorPhone'>
                      <span className='SignUpSelectDivDivDiv1UlLiAnchorSpan'>
                        휴대폰 인증
                      </span>
                    </a>
                  </li>
                  <li className='SignUpSelectDivDivDiv4UlLi'>
                    <a className='SignUpSelectDivDivDiv1UlLiAnchorIpin'>
                      <span className='SignUpSelectDivDivDiv1UlLiAnchorSpan'>
                        아이핀 인증
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className='SignUpSelectDivUl'>
                <li className='SignUpSelectDivUlLi1'>
                  H.Point 회원가입은 만 14세 이상만 가입 가능합니다.
                </li>
                <li className='SignUpSelectDivUlLi2'>
                  네이버 간편 가입은 네이버 인증서 발급 회원만 가능합니다.
                </li>
              </ul>
              <div className='SignUpSelectDivDivDiv3'>
                <a className='SignUpSelectDivDivDiv3Anchor'>
                  <img src='https://www.h-point.co.kr/cma/image/1000468676.nhd' className='SignUpSelectDivDivDiv3AnchorImg1'/>
                  <img src='https://www.h-point.co.kr/cma/image/1000468677.nhd' className='SignUpSelectDivDivDiv3AnchorImg2'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SignUpWrap>
  )
}

export default SignUp;

const SignUpWrap = styled.div`
  background: #f9f9f9;
  padding-top: 120px;

  .SignUpTop {
    text-align: center;
    padding: 70px 0 50px;
  }

  .SignUpDiv {
    position: relative;
    max-width: 1284px;
    min-width: 280px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .SignUpH2 {
    font-family: "HGGGothicssi";
    font-weight: 800;
    font-size: 50px;
    color: #111;
    line-height: 0.9;
  }

  .SignUpP {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 20px;
    color: #555;
    line-height: 1.5;
    letter-spacing: -0.5px;
    margin-top: 25px;
    padding-bottom: 25px;
  }

  .SignUpMid {
    text-align: center;
    margin-bottom: 30px;
  }

  .SignUpMidOl {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }

  .SignUpMidLi {
    position: relative;
    float: left;
    width: 65px;
    margin: 0 35px;
  }
  
  .SignUpMidIdv {
    background-color: #acb6f0!important;
    background-image: url(https://www.h-point.co.kr/assets/app/img/sign/ic_signup_step1.png)!important;
    background-repeat: no-repeat!important;
    background-size: auto!important;
    background-position: center center!important;
    text-indent: -9999px;
    width: 100%;
    height: 65px;
    background: #fff;
    border-radius: 50%;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 24px;
    color: #999;
    line-height: 65px;
  }

  .SignUpMidP {
    color: #111;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    margin-top: 10px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;    
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  
  .SignUpMidOl::before {
    content: "";
    position: absolute;
    left: 35px;
    top: 31px;
    width: calc(100% - 70px);
    height: 2px;
    background: #ededed;
    box-sizing: border-box;
  }

  .SignUpMidIdvElse {
    width: 100%;
    height: 65px;
    background: #fff;
    border-radius: 50%;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 24px;
    color: #999;
    line-height: 65px;
  }

  .SignUpMidPElse {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #767676;
    margin-top: 10px;
    margin: 0;
    padding: 0;
    border: 0;
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .SignUpSelect {
    display: block;
  }

  .SignUpSelectDiv {
    position: relative;
    max-width: 1284px;
    min-width: 280px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .SignUpSelectDivDiv {
    border-radius: 16px;
    background: #fff;
    padding: 100px 30px;
  }

  .SignUpSelectDivDivDiv {
    max-width: 808px;
    margin: 0 auto;
  }

  .SignUpSelectDivDivDiv1 {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 45px;
  }

  .SignUpSelectDivDivDiv1H3 {
    font-family: "HGGGothicssi";
    font-weight: 800;
    font-size: 30px;
    color: #111;
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    border: 0;
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
    text-size-adjust: 100%;
  }

  .SignUpSelectDivDivDiv1P {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 24px;
    color: #111;
    letter-spacing: -0.5px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .SignUpSelectDivDivDiv1Ul {
    margin: 0 auto;
    list-style: none;
    box-sizing: border-box;
    height: 200px;
  }

  .SignUpSelectDivDivDiv1UlLi {
    float: left;
    width: calc((100% - 72px) / 4);
    margin-right: 24px;
    box-sizing: border-box;
    height: 200px;
  }

  .SignUpSelectDivDivDiv1UlLiAnchor {
    background-image: url(https://www.h-point.co.kr/assets/app/img/sign/ic_howto1.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center 55px;
    display: block;
    height: 78px;
    border: 1px solid #eee;
    border-radius: 16px;
    text-align: center;
    padding-top: 120px;
    transition: box-shadow .3s, -webkit-box-shadow .3s;
  }

  .SignUpSelectDivDivDiv1UlLiAnchor:hover {
    -webkit-box-shadow: 5px 10px 15px 5px rgb(24 48 88 / 16%);
    box-shadow: 5px 10px 15px 5px rgb(24 48 88 / 16%);
    border-color: #fff;
    text-decoration: none;
  }

  .SignUpSelectDivDivDiv1UlLiAnchorSpan {
    display: inline-block;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 18px;
    color: #111;
    line-height: 1.3;
    letter-spacing: -0.5px;
  }

  .SignUpSelectDivDivDiv1UlLiAnchorKakao {
    background-image: url(https://www.h-point.co.kr/assets/app/img/sign/ic_howto2.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center 55px;
    display: block;
    height: 78px;
    border: 1px solid #eee;
    border-radius: 16px;
    text-align: center;
    padding-top: 120px;
    transition: box-shadow .3s, -webkit-box-shadow .3s;
  }

  .SignUpSelectDivDivDiv1UlLiAnchorKakao:hover {
    -webkit-box-shadow: 5px 10px 15px 5px rgb(24 48 88 / 16%);
    box-shadow: 5px 10px 15px 5px rgb(24 48 88 / 16%);
    border-color: #fff;
    text-decoration: none;
  }

  .SignUpSelectDivDivDiv1UlLiAnchorPhone {
    background-image: url(https://www.h-point.co.kr/assets/app/img/sign/ic_howto3.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center 55px;
    display: block;
    height: 78px;
    border: 1px solid #eee;
    border-radius: 16px;
    text-align: center;
    padding-top: 120px;
    transition: box-shadow .3s, -webkit-box-shadow .3s;
  }

  .SignUpSelectDivDivDiv1UlLiAnchorPhone:hover {
    -webkit-box-shadow: 5px 10px 15px 5px rgb(24 48 88 / 16%);
    box-shadow: 5px 10px 15px 5px rgb(24 48 88 / 16%);
    border-color: #fff;
    text-decoration: none;
  }

  .SignUpSelectDivDivDiv4UlLi {
    margin-right: 0;
    float: left;
    width: calc((100% - 72px) / 4);
  }

  .SignUpSelectDivDivDiv1UlLiAnchorIpin {
    background-image: url(https://www.h-point.co.kr/assets/app/img/sign/ic_howto4.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center 55px;
    display: block;
    height: 78px;
    border: 1px solid #eee;
    border-radius: 16px;
    text-align: center;
    padding-top: 120px;
    transition: box-shadow .3s, -webkit-box-shadow .3s;
  }

  .SignUpSelectDivDivDiv1UlLiAnchorIpin:hover {
    -webkit-box-shadow: 5px 10px 15px 5px rgb(24 48 88 / 16%);
    box-shadow: 5px 10px 15px 5px rgb(24 48 88 / 16%);
    border-color: #fff;
    text-decoration: none;
  }

  .SignUpSelectDivUl {
    margin-top: 40px;
  }

  .SignUpSelectDivUlLi1 {
    padding-left: 12px!important;
    margin-top: 0;
    position: relative;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #767676;
    line-height: 1.5;
    letter-spacing: -0.5px;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .SignUpSelectDivUlLi1::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 4px;
    height: 4px;
    background: #999;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .SignUpSelectDivUlLi2 {
    padding-left: 12px!important;
    position: relative;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #767676;
    line-height: 1.5;
    letter-spacing: -0.5px;
    margin-top: 8px;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .SignUpSelectDivUlLi2::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 4px;
    height: 4px;
    background: #999;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .SignUpSelectDivDivDiv2 {
    box-sizing: border-box;
    height: 200px;
  }

  .SignUpSelectDivDivDiv3 {
    margin-top: 75px;
  }

  .SignUpSelectDivDivDiv3Anchor {
    letter-spacing: 0px;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    box-sizing: border-box;
  }

  .SignUpSelectDivDivDiv3AnchorImg1 {
    width: 100%;
    border: 0px;
    display: block;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  .SignUpSelectDivDivDiv3AnchorImg2 {
    width: 100%;
    display: none !important;
    border: 0px;
  }

`