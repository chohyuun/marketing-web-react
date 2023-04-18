import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'
import BooriCat from '../assets/image/cat3.jpeg'
import { createContext, useState } from 'react'
import { productData } from '../type/productData'
import ProductBox from './ProductBox'

export type ContextData = {
  url: string
  title: string
}
export const ProductContext = createContext<ContextData | undefined>(undefined)

const Home = () => {
  const [clickData, setClickData] = useState<ContextData>()

  const onClickHandler = (e: any) => {
    setClickData({
      url: e.target.src,
      title: e.target.title,
    })
  }

  // todo home image changes to swipe image
  return (
    <>
      <ProductContext.Provider value={clickData}>
        <Container fluid>
          <HomeRow>
            <HomeCol>
              <SwipeImage title="정말싸다 뽀리 사진!!" src={BooriCat} onClick={onClickHandler} />
            </HomeCol>
          </HomeRow>
          <HomeRow>
            <HomeCol>
              <div className="description">이달의 아이템</div>
            </HomeCol>
          </HomeRow>
          <HomeRow>
            <HomeCol sm={6}>
              {productData.map((value, index) => {
                return <ProductBox key={index} value={value} setClickData={setClickData} />
              })}
            </HomeCol>
          </HomeRow>
        </Container>
      </ProductContext.Provider>
    </>
  )
}

export default Home

const HomeCol = styled(Col)`
  justify-content: center;

  & .description {
    margin: 10px 0;
  }
`

const HomeRow = styled(Row)`
  border-bottom: 1px #888888 solid;

  &:last-child {
    border: unset;
  }

  & .col-sm-6 {
    margin: 1.5em 1em;
  }
`

const SwipeImage = styled.img`
  width: 500px;
  height: 450px;
  object-fit: cover;
  border-radius: 5px;
  object-position: 25% 75%;
`
