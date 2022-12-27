import HeaderLeft from './HeaderLeft';
import HeaderTop from './HeaderTop';
import styled from 'styled-components';
import HeaderRight from './HeaderRight';

function Header () {
  return (
    <HeaderRoot>
      <div className='HeaderWrap'>
        <HeaderTop/>
        <HeaderLeft/>
        <HeaderRight/>
      </div>
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

`