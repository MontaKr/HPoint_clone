import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function SignUpRegi () {

  // 입력 받은 아이디값
  const [IDValue, setIDValue] = useState("")

  // Focus 설정
  const [isIDFocused, setIsIDFocused] = useState(false)
  const IDinputFocus = () => {
    setIsIDFocused(true)
  }

  const IDNotinputFocus = () => {
    setIsIDFocused(false)
  }

  // 유효성 검사 (정규식, 글자 길이)
  const [checkID, setCheckID] = useState(true)

  const checkIDValidation = (e) => {

    const regexID = /^[a-zA-Z0-9]*$/
    const IDInput = e.target.value

    if(regexID.test(IDInput)&&IDInput.length>3&&IDInput.length<21) {
      setCheckID(true)
    }

    else {
      setCheckID(false)
    }
  }

  // 중복 체크
  // const ConnectCheck = (e) => {
  //   axios ({
  //     method : 'get',
  //     url : `http://firesea.p-e.kr/api/idCheck/1111`
  //   }).then((response)=>{
  //     console.log('결과 :', response.data.responseMessage)
  //   })
  // }

  return (
    <SignUpRegiWrap isIDFocused={isIDFocused} checkID={checkID}>
      <div className='Div'>
        <article className='DivArticle'>
          <div className='DivArticleDiv'>
            <div className='DivArticleDivDiv'>
              <h2 className='DivArticleDivDivH2'>
                H.Point 회원가입
              </h2>
              <p className='DivArticleDivDivP'>
                간편하게 신규가입하고 다양한 혜택을 누려보세요!
              </p>
            </div>
          </div>
          <div className='DivArticleDiv2'>
            <ol className='DivArticleDiv2Ol'>
              <li className='DivArticleDiv2OlLi'>
                <div className='DivArticleDiv2OlLiDiv'>
                  1
                </div>
                <p className='DivArticleDiv2OlLiDivP'>
                  본인인증
                </p>
              </li>
              <li className='DivArticleDiv2OlLi2'>
                <div className='DivArticleDiv2OlLi2Div'>
                  2
                </div>
                <p className='DivArticleDiv2OlLiDivP'>
                  약관동의
                </p>
              </li>
              <li className='DivArticleDiv2OlLi3'>
                <div className='DivArticleDiv2OlLi3Div'>
                  3
                </div>
                <p className='DivArticleDiv2OlLiDivP'>
                  정보입력
                </p>
              </li>
              <li className='DivArticleDiv2OlLi4'>
                <div className='DivArticleDiv2OlLi4Div'>
                  4
                </div>
                <p className='DivArticleDiv2OlLi4DivP'>
                  가입완료
                </p>
              </li>
            </ol>
          </div>
          <section className='DivArticleSection'>
            <div className='DivArticleSectionDiv'>
              <div className='DivArticleSectionDivDiv'>
                <form className='DivArticleSectionDivDivForm'>
                  <div className='DivArticleSectionDivDivFormDiv'>
                    <div>
                      <h3 className='DivArticleSectionDivDivFormDivH3'>
                        회원정보
                      </h3>
                      <div className='DivArticleSectionDivDivFormDivDiv'>
                        <ul className='DivArticleSectionDivDivFormDivDivUl'>
                          <li className='DivArticleSectionDivDivFormDivDivUlLi'>
                            <div className='DivArticleSectionDivDivFormDivDivUlLiDiv'>
                              이름
                            </div>
                            <div className='DivArticleSectionDivDivFormDivDivUlLiDiv2'> 
                              임지훈 (남)
                            </div>
                          </li>
                          <li className='DivArticleSectionDivDivFormDivDivUlLi2'>
                            <div className='DivArticleSectionDivDivFormDivDivUlLiDiv'>
                              생년월일  
                            </div>
                            <div className='DivArticleSectionDivDivFormDivDivUlLiDiv2'> 
                              1995년 2월 8일
                            </div>
                          </li>
                          <li className='DivArticleSectionDivDivFormDivDivUlLi3'>
                            <div className='DivArticleSectionDivDivFormDivDivUlLiDiv'>
                              휴대폰
                            </div>
                            <div className='DivArticleSectionDivDivFormDivDivUlLiDiv2'> 
                              010-5337-3133
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className='DivArticleSectionDivDivFormDivDiv2H3'>
                        개인정보입력
                        <em className='DivArticleSectionDivDivFormDivDiv2H3Em'>
                          (* 필수입력)
                        </em>
                      </h3>
                      <fieldset className='DivArticleSectionDivDivFormDivDiv2Fs'>
                        <legend className='DivArticleSectionDivDivFormDivDiv2FsLegend'>
                          개인정보입력
                        </legend>
                        {/* 아이디 */}
                        <div className='DivArticleSectionDivDivFormDivDiv2FsDiv'>
                          <label className='DivArticleSectionDivDivFormDivDiv2FsDivLabel'>
                           아이디
                           <span className='DivArticleSectionDivDivFormDivDiv2FsDivLabelSpan'>
                            *
                           </span>
                          </label>
                          <div className='DivArticleSectionDivDivFormDivDiv2FsDivDiv'>
                            <input 
                              onChange={(e)=>{setIDValue(e.target.value); checkIDValidation(e);}} 
                              value = {IDValue}
                              onFocus = {IDinputFocus}
                              onBlur = {IDNotinputFocus}
                              placeholder='아이디' 
                              className='DivArticleSectionDivDivFormDivDiv2FsDivDivInput'/>
                          </div>
                          <p className='DivArticleSectionDivDivFormDivDiv2FsDivP'>
                            사용 불가능한 아이디 입니다.
                          </p>
                          <p className='DivArticleSectionDivDivFormDivDiv2FsDivP2'>
                            사용 가능한 아이디입니다.
                          </p>
                          <ul className='DivArticleSectionDivDivFormDivDiv2FsDivUl'>
                            <li className='DivArticleSectionDivDivFormDivDiv2FsDivUlLi'>
                              4~20자의 영문 또는 영문 + 숫자만 입력해주세요.
                            </li>
                            <li className='DivArticleSectionDivDivFormDivDiv2FsDivUlLi'>
                              아이디는 대소문자 구분합니다.
                            </li>
                          </ul>
                        </div>
                        {/* 비밀번호 */}
                        <div className='DivArticleSectionDivDivFormDivDiv2FsDiv2'>
                          <label className='DivArticleSectionDivDivFormDivDiv2FsDivLabel'>
                           비밀번호
                           <span className='DivArticleSectionDivDivFormDivDiv2FsDivLabelSpan'>
                            *
                           </span>
                          </label>
                          <div className='DivArticleSectionDivDivFormDivDiv2FsDiv2Div'>
                            <input placeholder='비밀번호' className='DivArticleSectionDivDivFormDivDiv2FsDivDivInput'/>
                          </div>
                          <ul className='DivArticleSectionDivDivFormDivDiv2FsDivUl'>
                            <li className='DivArticleSectionDivDivFormDivDiv2FsDivUlLi'>
                              영문, 숫자, 특수문자를 포함 8~30 자리로 입력해주세요.
                            </li>
                          </ul>
                        </div>
                        {/* 비밀번호확인 */}
                        <div className='DivArticleSectionDivDivFormDivDiv2FsDiv3'>
                          <label className='DivArticleSectionDivDivFormDivDiv2FsDiv3Label'>
                            비밀번호 확인
                            <span className='DivArticleSectionDivDivFormDivDiv2FsDiv3LabelSpan'>
                              *
                            </span>
                          </label>
                          <div className='DivArticleSectionDivDivFormDivDiv2FsDiv3Div'>
                            <input placeholder='비밀번호 확인' className='DivArticleSectionDivDivFormDivDiv2FsDiv3DivInput'/>
                          </div>
                        </div>
                        {/* 이메일 */}
                        <div className='DivArticleSectionDivDivFormDivDiv2FsDiv4'>
                          <label className='DivArticleSectionDivDivFormDivDiv2FsDivLabel'>
                           이메일
                           <span className='DivArticleSectionDivDivFormDivDiv2FsDivLabelSpan'>
                            *
                           </span>
                          </label>
                          <div className='DivArticleSectionDivDivFormDivDiv2Fs4DivDiv'>
                            <input placeholder='이메일' className='DivArticleSectionDivDivFormDivDiv2FsDivDivInput'/>
                            <select className='DivArticleSectionDivDivFormDivDiv2FsDivDivSelect'>
                              <option className='DivArticleSectionDivDivFormDivDiv2FsDivDivSelectOption'>
                                직접입력
                              </option>
                              <option className='DivArticleSectionDivDivFormDivDiv2FsDivDivSelectOption'>
                                @naver.com
                              </option>
                            </select>
                          </div>
                          <ul className='DivArticleSectionDivDivFormDivDiv2FsDivUl'>
                            <li className='DivArticleSectionDivDivFormDivDiv2FsDivUlLi'>
                              특수문자[-], [_]만 사용 가능합니다.
                            </li>
                          </ul>
                        </div>
                      </fieldset>
                      <fieldset className='DivArticleSectionDivDivFormDivDiv2H3Fs2'>
                        <div className='DivArticleSectionDivDivFormDivDiv2H3Fs2Div'>
                          <label className='DivArticleSectionDivDivFormDivDiv2H3Fs2DivLabel'>
                            추천인 코드 입력
                            <br />
                            (선택)
                          </label>
                          <div className='DivArticleSectionDivDivFormDivDiv2H3Fs2DivDiv'>
                            <input className='DivArticleSectionDivDivFormDivDiv2H3Fs2DivDivInput'/>
                          </div>
                          <p className='DivArticleSectionDivDivFormDivDiv2H3Fs2DivP'>
                            추천인이 있는 경우만 입력하세요.
                          </p>
                        </div>
                      </fieldset>
                      <fieldset className='DivArticleSectionDivDivFormDivDiv2H3Fs3'>
                        <div className='DivArticleSectionDivDivFormDivDiv2H3Fs3Div'>
                          <p className='DivArticleSectionDivDivFormDivDiv2H3Fs3DivP'>
                            마케팅 정보 수신동의 (선택)
                          </p>
                          <div className='DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv'>
                            <input type='checkbox' className='DivArticleSectionDivDivFormDivDiv2H3Fs3DivDivInput'/>
                            <label className='DivArticleSectionDivDivFormDivDiv2H3Fs3DivDivLabel'>
                              전체동의
                            </label>
                          </div>
                          <div className='DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2'>
                            <p className='DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2P'>
                              H.Point
                            </p>
                            <div className='DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2Div'>
                              <span className='DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2DivSpan'>
                                <input type='checkbox' className='DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2DivSpanInput'/>
                                <label className='DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2DivSpanLabel'>
                                  SMS
                                </label>
                              </span>
                              <span>

                              </span>
                              <span>

                              </span>
                              <span>
                              
                              </span>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <ul className='DivArticleSectionDivDivFormUl'>
                      <li className='DivArticleSectionDivDivFormUlLi'>
                        마케팅 정보 수신에 동의하시면 다양한 혜택을 받으실 수 있습니다.
                      </li>
                      <li className='DivArticleSectionDivDivFormUlLi'>
                        필수항목에 동의하지 않으실 경우 서비스 가입이 불가합니다.
                      </li>
                      <li className='DivArticleSectionDivDivFormUlLi'>
                        <em className='DivArticleSectionDivDivFormUlLiEm'>
                          선택항목에 동의하지 않으셔도 서비스 가입이 가능하나, 관련 서비스는 제공 받으실 수 없습니다.
                        </em>
                      </li>
                    </ul>
                    <div className='DivArticleSectionDivDivFormDivDiv3'>
                      <a className='DivArticleSectionDivDivFormDivDiv3Anchor'>
                        <span className='DivArticleSectionDivDivFormDivDiv3AnchorSpan'>
                          취소
                        </span>
                      </a>
                      <a className='DivArticleSectionDivDivFormDivDiv3Anchor2'>
                        <span className='DivArticleSectionDivDivFormDivDiv3Anchor2Span'>
                          확인
                        </span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <div className='DivArticleDiv3'/>
        </article>
      </div>
    </SignUpRegiWrap>
  )
}

export default SignUpRegi;

const SignUpRegiWrap = styled.div`
  padding-top: 119.988px!important;
  position: relative;
  width: 100%;
  max-width: 1920px;
  min-width: 280px;
  margin: 0 auto;
  padding: 0;
  border: 0;
  font-family: "Noto Sans KR";
  letter-spacing: -0.3px;
  line-height: normal;
  vertical-align: baseline;
  word-break: keep-all;
  word-wrap: break-word;
  box-sizing: border-box;

  .Div {
    background: #f9f9f9;
  }

  .DivArticle {
    display: block;
  }

  .DivArticleDiv {
    text-align: center;
    padding: 70px 0 50px;
  }

  .DivArticleDivDiv {
    position: relative;
    max-width: 1284px;
    min-width: 280px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .DivArticleDivDivH2 {
    font-family: "HGGGothicssi";
    font-weight: 800;
    font-size: 50px;
    color: #111;
    line-height: 0.9;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
  }

  .DivArticleDivDivP {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 20px;
    color: #555;
    line-height: 1.5;
    letter-spacing: -0.5px;
    margin-top: 25px;
    padding-bottom: 25px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
  }

  .DivArticleDiv2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .DivArticleDiv2Ol {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }

  .DivArticleDiv2OlLi {
    position: relative;
    float: left;
    width: 65px;
    margin: 0 35px;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .DivArticleDiv2OlLi2 {
    position: relative;
    float: left;
    width: 65px;
    margin: 0 35px;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .DivArticleDiv2OlLi3 {
    position: relative;
    float: left;
    width: 65px;
    margin: 0 35px;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .DivArticleDiv2OlLi4 {
    position: relative;
    float: left;
    width: 65px;
    margin: 0 35px;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .DivArticleDiv2OlLiDiv {
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

  .DivArticleDiv2OlLi2Div {
    background-color: #acb6f0!important;
    background-image: url(https://www.h-point.co.kr/assets/app/img/sign/ic_signup_step2.png)!important;
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

  .DivArticleDiv2OlLi3Div {
    background-color: #576df4!important;
    background-image: url(https://www.h-point.co.kr/assets/app/img/sign/ic_signup_step3.png)!important;
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

  .DivArticleDiv2OlLi4Div {
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

  .DivArticleDiv2OlLi4DivP {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #767676;
    margin-top: 10px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .DivArticleDiv2OlLiDivP {
    color: #111;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    margin-top: 10px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .DivArticleDiv2Ol::before {
    content: "";
    position: absolute;
    left: 35px;
    top: 31px;
    width: calc(100% - 70px);
    height: 2px;
    background: #ededed;
    box-sizing: border-box;
  }

  .DivArticleDiv2Ol::after {
    content: ".";
    display: block;
    clear: both;
    height: 0;
    font-size: 0;
    visibility: hidden;
    box-sizing: border-box;
  }

  .DivArticleSection {
    display: block;
    color: #fff;
  }

  .DivArticleSectionDiv {
    position: relative;
    max-width: 1284px;
    min-width: 280px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .DivArticleSectionDivDiv {
    border-radius: 16px;
    background: #fff;
    padding: 100px 30px;
  }

  .DivArticleSectionDivDivForm {
    display: block;
  }

  .DivArticleSectionDivDivFormDiv {
    max-width: 808px;
    margin: 0 auto;
  }

  .DivArticleSectionDivDivFormDivH3 {
    margin-top: 0;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 24px;
    color: #111;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .DivArticleSectionDivDivFormDivDiv {
    margin-top: 25px;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 35px 50px;
  }

  .DivArticleSectionDivDivFormDivDivUl {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .DivArticleSectionDivDivFormDivDivUlLi {
    margin-top: 0;
    position: relative;
    padding-left: 130px;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .DivArticleSectionDivDivFormDivDivUlLiDiv {
    position: absolute;
    left: 0;
    top: 0;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 18px;
    color: #767676;
    line-height: 1.5;
  }

  .DivArticleSectionDivDivFormDivDivUlLiDiv2 {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 18px;
    color: #111;
    line-height: 1.5;
  }

  .DivArticleSectionDivDivFormDivDivUlLi2 {
    position: relative;
    padding-left: 130px;
    margin-top: 20px;
  }

  .DivArticleSectionDivDivFormDivDivUlLi3 {
    position: relative;
    padding-left: 130px;
    margin-top: 20px;
  }

  .DivArticleSectionDivDivFormDivDiv2H3 {
    margin-bottom: 27px;
    margin-top: 75px;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 24px;
    color: #111;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Em {
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 18px;
    color: #ff481e;
    display: inline-block;
    font-style: normal;
  }

  .DivArticleSectionDivDivFormDivDiv2Fs {
    padding-bottom: 60px;
    border-bottom: 1px solid #eee;
    margin-bottom: 60px;
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
  }

  .DivArticleSectionDivDivFormDivDiv2FsLegend {
    text-indent: -9999px;
    overflow: hidden;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    display: block;
    padding-inline-start: 2px;
    padding-inline-end: 2px;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDiv {
    position: relative;
    display: block;
    padding-left: 150px;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivLabel {
    position: absolute;
    left: 0;
    top: 0;
    height: 70px;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 18px;
    color: #111;
    letter-spacing: -0.8px;
    cursor: default;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivLabelSpan {
    display: inline-block;
    font-weight: inherit;
    font-size: inherit;
    color: #ff481e;
    box-sizing: border-box;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivDiv {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    height: 70px;
    padding: 0 30px;
    border-color: ${props=>props.isIDFocused===true&&props.checkID===true?'#4e2bf4;':'#ff481e'};
  }

  .DivArticleSectionDivDivFormDivDiv2FsDiv2Div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    height: 70px;
    padding: 0 30px;
  }

  .DivArticleSectionDivDivFormDivDiv2Fs4DivDiv {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    height: 70px;
    padding: 0 30px;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivDivInput {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 18px;
    color: #111;
    background: transparent;
    flex: 1 1 0;
    -webkit-box-flex: 1;
    appearance: none;
    letter-spacing: 0;
    border: 0;
    outline-style: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    -webkit-rtl-ordering: logical;
    cursor: text;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivDivInput::placeholder {
    display: block !important;
    font-weight: 400 !important;
    color: #808080 !important;
    text-overflow: inherit;
    white-space: pre;
    overflow-wrap: normal;
    line-height: initial !important;
    -webkit-user-modify: read-only !important;
    overflow: hidden;
    -webkit-text-security: none;
    direction: inherit !important;
    pointer-events: none !important;
    text-orientation: inherit !important;
    writing-mode: inherit !important;
    font-family: "Noto Sans KR";
    letter-spacing: 0;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivUl {
    margin-top: 10px;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivUlLi {
    padding-left: 12px;
    margin-top: 0;
    position: relative;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #767676;
    line-height: 1.5;
    letter-spacing: -0.5px;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivUlLi::before {
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

  .DivArticleSectionDivDivFormDivDiv2FsDiv2 {
    margin-top: 40px;
    position: relative;
    display: block;
    padding-left: 150px;
  }
  
  .DivArticleSectionDivDivFormDivDiv2FsDiv3 {
    margin-top: 40px!important;
    position: relative;
    display: block;
    padding-left: 150px!important;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Noto Sans KR";
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDiv3Label {
    position: absolute;
    left: 0;
    top: 0;
    height: 70px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 18px;
    color: #111;
    letter-spacing: -0.8px;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDiv3LabelSpan {
    display: inline-block;
    font-weight: inherit;
    font-size: inherit;
    color: #ff481e;
    box-sizing: border-box;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDiv3Div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    height: 70px;
    padding: 0 30px;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDiv3DivInput {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 18px;
    color: #111;
    background: transparent;
    -webkit-box-flex: 1;
    flex: 1 1 0;
    letter-spacing: 0;
    border: 0;
    outline-style: none;
    border-radius: 0;
    writing-mode: horizontal-tb !important;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    -webkit-rtl-ordering: logical;
    cursor: text;
    text-align: start;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDiv3DivInput::placeholder {
    display: block !important;
    font-weight: 400 !important;
    color: #808080 !important;
    text-overflow: inherit;
    white-space: pre;
    overflow-wrap: normal;
    line-height: initial !important;
    -webkit-user-modify: read-only !important;
    overflow: hidden;
    -webkit-text-security: none;;
    direction: inherit !important;
    pointer-events: none !important;
    text-orientation: inherit !important;
    writing-mode: inherit !important;
    font-size: 18px;
    font-family: "Noto Sans KR";
    letter-spacing: 0;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDiv4 {
    margin-top: 40px;
    position: relative;
    display: block;
    padding-left: 150px;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivDivSelect {
    max-width: 50%;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 18px;
    color: #111;
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/ic_arrow2.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: right center;
    -webkit-box-flex: 1;
    flex: 1 1 0;
    vertical-align: middle;
    -webkit-border-radius: 0;
    background: transparent;
    letter-spacing: 0;
    border: 0;
    outline-style: none;
    overflow: visible !important;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    white-space: pre;
    -webkit-rtl-ordering: logical;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivDivSelect::placeholder {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 18px;
    color: #111;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivDivSelectOption {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    font-family: "Noto Sans KR";
    font-size: 18px;
    color: #111;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs2 {
    padding-bottom: 60px;
    border-bottom: 1px solid #eee;
    margin-bottom: 60px;
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs2Div {
    position: relative;
    display: block;
    padding-left: 150px;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs2DivLabel {
    position: absolute;
    left: 0;
    top: 0;
    height: 70px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 18px;
    color: #111;
    letter-spacing: -0.8px;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs2DivDiv {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    height: 70px;
    padding: 0 30px;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs2DivDivInput {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 18px;
    color: #111;
    background: transparent;
    -webkit-box-flex: 1;
    flex: 1 1 0;
    letter-spacing: 0;
    border: 0;
    outline-style: none;
    border-radius: 0;
    writing-mode: horizontal-tb !important;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs2DivP {
    margin-top: 10px;
    padding-left: 12px;
    position: relative;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #999;
    line-height: 1.4;
    letter-spacing: -0.5px;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs2DivP::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 4px;
    height: 4px;
    background: #999;
    border-radius: 50%;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3 {
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3Div {
    position: relative;
    margin-bottom: 40px;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivP {
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 18px;
    color: #111;
    letter-spacing: -0.8px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv {
    position: absolute;
    right: 0;
    top: 5px;
    display: inline-block;
    vertical-align: top;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivDivInput {
    position: absolute;
    z-index: -1000;
    left: -1000px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    appearance: none;
    letter-spacing: 0;
    outline-style: none;
    border-radius: 0;
    background-color: initial;
    cursor: default;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivDivLabel {
    position: relative;
    width: auto;
    min-height: 26px;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 18px;
    color: #111;
    padding-left: 34px;
    display: inline-block;
    background-image: none;
    background-repeat: no-repeat;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    cursor: default;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivDivLabel::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 26px;
    height: 26px;
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/chk_bg1.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0 0;
    box-sizing: border-box;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2 {
    position: relative;
    padding: 35px 50px 20px 200px;
    margin-top: 20px;
    background: #f5f5f5;
    border-radius: 8px;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2P {
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
    font-family: "Noto Sans KR";
    font-weight: 800;
    font-size: 18px;
    color: #111;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2Div {
    padding-left: 30px;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2DivSpan {
    margin-right: 9.8%;
    margin-bottom: 15px;
    display: inline-block;
    vertical-align: top;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2DivSpanInput {
    position: absolute;
    z-index: -1000;
    left: -1000px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    appearance: none;
    letter-spacing: 0;
    outline-style: none;
    border-radius: 0;
    background-color: initial;
    cursor: default;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2DivSpanLabel {
    color: #767676;
    position: relative;
    width: auto;
    min-height: 26px;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 18px;
    padding-left: 34px;
    display: inline-block;
    background-image: none;
    background-repeat: no-repeat;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    cursor: default;
  }

  .DivArticleSectionDivDivFormDivDiv2H3Fs3DivDiv2DivSpanLabel::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 26px;
    height: 26px;
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/chk_bg1.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0 0;
  }

  .DivArticleSectionDivDivFormUl {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .DivArticleSectionDivDivFormUlLi {
    padding-left: 12px;
    margin-top: 0;
    position: relative;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #767676;
    line-height: 1.5;
    letter-spacing: -0.5px;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .DivArticleSectionDivDivFormUlLi::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 4px;
    height: 4px;
    background: #999;
    border-radius: 50%;
  }

  .DivArticleSectionDivDivFormUlLiEm {
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: #111;
    font-style: normal;
  }

  .DivArticleSectionDivDivFormDivDiv3 {
    margin-top: 80px;
    align-items: center;
    text-align: center;
    justify-content: center;
    -webkit-box-align: center;
    display: flex;
    -webkit-box-pack: center;
  }

  .DivArticleSectionDivDivFormDivDiv3Anchor {
    margin-left: 0;
    flex: 0 0 auto;
    -webkit-box-flex: 0;
    display: inline-block;
    width: auto;
    min-width: 220px;
    height: 70px;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 24px;
    color: #4e2bf4;
    text-align: center;
    line-height: 68px;
    border: 1px solid #4e2bf4;
    border-radius: 8px;
    padding: 0 30px;
  }

  .DivArticleSectionDivDivFormDivDiv3AnchorSpan {
    display: inline-block;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  .DivArticleSectionDivDivFormDivDiv3Anchor2 {
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    margin-left: 20px;
    display: inline-block;
    width: auto;
    min-width: 220px;
    height: 70px;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 24px;
    color: #fff;
    text-align: center;
    line-height: 70px;
    background-color: #4e2bf4;
    border-radius: 8px;
    padding: 0 30px;
    letter-spacing: 0px;
    text-decoration: none;
    cursor: pointer;
  }

  .DivArticleSectionDivDivFormDivDiv3Anchor2Span {
    display: inline-block;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: #fff;
    text-align: center;
  }

  .DivArticleDiv3 {
    width: 100%;
    height: 150px;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivP {
    display: ${props=>props.isIDFocused===true&&props.checkID===true?'none!important':'auto'};
    color: #ff481e;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.5px;
    margin-top: 15px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .DivArticleSectionDivDivFormDivDiv2FsDivP2 {
    display: ${props=>props.isIDFocused===true&&props.checkID===true?'auto':'none!important'};
    color: #4e2bf4;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.5px;
    margin-top: 15px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`