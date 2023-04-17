import styled from 'styled-components'
import { Outlet, useNavigate } from 'react-router-dom'

const DefaultLayout = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <Header>
        <div>
          <a
            onClick={() => {
              navigate('/home')
            }}
          >
            PET Equipment
          </a>
        </div>
        <div>소중한 반려동물을 위한 동물 상품</div>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default DefaultLayout

const Layout = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  height: calc(100vh - 90px);
`

const Header = styled.header`
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  height: 90px;
  background-color: #3f3f3f;
  color: #ffffff;
  justify-content: center;
  align-items: center;

  a {
    font-size: 32px;

    &:hover {
      color: #ffffff;
    }
  }

  div {
    margin-top: 5px;
    display: flex;
  }
`

const Content = styled.div`
  position: relative;
  flex-direction: column;
  padding-top: 90px;
  width: 100%;
`
