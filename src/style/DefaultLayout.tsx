import styled from 'styled-components'
import { Outlet, useNavigate } from 'react-router-dom'

const DefaultLayout = () => {
  const navigate = useNavigate()
  return (
    <>
      <Layout>
        <Header>
          <a
            onClick={() => {
              navigate('/home')
            }}
          >
            우리집 고양이 귀여워
          </a>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  )
}

export default DefaultLayout

const Layout = styled.div`
  width: 100vw;
  //min-height: 100vh;
  color: #000000;
  background: #ffffff;
`

const Header = styled.header`
  z-index: 999;
  display: flex;
  width: 100%;
  height: 90px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #213547;
  color: #ffffff;
  font-size: 40px;
  justify-content: center;
  align-items: center;

  a:hover {
    color: #ffffff;
  }
`

const Content = styled.body`
  position: relative;
  height: calc(100vh - 90px);
  width: 100vw;
  flex-direction: column;
`
