import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
      <Layout>
        <Header />
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
  height: 100vh;
  color: #000000;
  background: #ffffff;
`

const Header = styled.header`
  z-index: 999;
  display: flex;
  width: 100%;
  height: 45px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #213547;
`

const Content = styled.body`
  position: relative;
  width: 100vw;
  flex-direction: column;
`
