import HeaderLeft from './HeaderLeft';
import HeaderTop from './HeaderTop';
import styled, {keyframes} from 'styled-components';
import HeaderRight from './HeaderRight';
import { useState } from 'react';


//마우스오버 애니메이션
const dropdownAnimation = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
  }
`

function Header () {

  // 자식에게 mouseover state 받기
  const [pIsMouseOver, setPisMouseOver] = useState(false)

  const toParentIsMouseOver = (MouseOverValid) => {
    setPisMouseOver(MouseOverValid)
  }

  return (
    <HeaderRoot pIsMouseOver={pIsMouseOver}>
      <div className='HeaderWrap'>
        <HeaderTop/>
        <HeaderLeft/>
        <HeaderRight toParentIsMouseOver={toParentIsMouseOver}/>
      </div>
      <div className='Hidden' />
    </HeaderRoot>
  )
}

export default Header;

const HeaderRoot = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-width: 280px;
  height: 120px;
  background: white;
  border-bottom: 1px solid #eeeeee;
  -webkit-transition: border .3s;
  transition: border .3s;
  z-index: 300;

  .HeaderWrap {
    display: flex;
    position: relative;
    max-width: 1284px;
    height: 100%;
    padding: 40px 30px 0 30px;
    margin: 0 auto;
  }

  .Hidden {
    display: ${props=>props.pIsMouseOver===true?'auto':'none'};
    position: relative;
    background-color: white;
    width: 100%;
    height: 30rem;
    margin-top: 0;
    top: -40px;
    animation: ${dropdownAnimation} 0.3s ease;
  }

`