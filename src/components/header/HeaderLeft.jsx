import styled from 'styled-components';

function HeaderLeft () {
  return (
    <HeaderLeftWrap>
      <a className='HeaderLeftWrapAnchor'>
        <span className='HeaderLeftSpan'>
          H.Point
        </span>
      </a>
    </HeaderLeftWrap>
  )
}

export default HeaderLeft;

const HeaderLeftWrap = styled.div`
    margin-right: auto;
    padding-top: 20px;

  .HeaderLeftWrapAnchor {
    display: block;
    width: 90px;
    height: 31px;
    background-image: url(https://www.h-point.co.kr/assets/app/img/common/logo1.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 0;
  }

  .HeaderLeftSpan {
    position: absolute;
    left: -9999px;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
  }
`