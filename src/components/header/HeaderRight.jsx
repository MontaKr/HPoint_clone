import styled from 'styled-components';

const array = ['소개', '쌓기', '쓰기', '혜택', '클럽', 'H.Point Pay', '고객센터']

function HeaderRight () {
  return (
    <HeaderRightWrap>
      <ul className='HeaderRightWrapUl'>
        {array.map((text,idx)=> {
          return (
            <li className='HeaderRightLi'>
              <div className='HeaderRightDiv'>
                <a className='HeaderRightAnchor'>
                  {text}
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </HeaderRightWrap>
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

  .HeaderRightLi {
    position: relative;
    float: left;
    width: auto;
    height: 100%;
    padding-right: 80px;
    transition: padding .3s;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Noto Sans KR";
    letter-spacing: -0.3px;
    line-height: normal;
    vertical-align: baseline;
    word-break: keep-all;
    word-wrap: break-word;
    padding-right: 80px;
  }

  .HeaderRightDiv {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .HeaderRightAnchor {
    position: relative;
    font-family: "HGGGothicssi";
    font-weight: 600;
    font-size: 22px;
    color: #111;
    letter-spacing: 0px;
    cursor: pointer;
  }
`