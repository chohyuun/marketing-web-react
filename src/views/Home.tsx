import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'
import BooriCat from '../assets/image/cat3.jpeg'
import { createContext, useState } from 'react'
import { productData } from '../type/productData'

type ContextData = {
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
              <SwipeImage
                title="정말싸다 뽀리 사진!!"
                src={BooriCat}
                onClick={onClickHandler}
              />
            </HomeCol>
          </HomeRow>
          <HomeRow>
            <HomeCol>
              <div className="description">이달의 아이템</div>
            </HomeCol>
          </HomeRow>
          <HomeRow>
            <HomeCol sm={4} xs={3}>
              {productData.map((value, index) => {
                return (
                  <ImageArea key={index}>
                    <ContentImage
                      title={value.title}
                      src={value.url}
                      onClick={onClickHandler}
                    />
                    <div>
                      <p className="product-title">{value.title}</p>
                    </div>
                  </ImageArea>
                )
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

const ImageArea = styled.div`
  display: inline-block;
  margin: 10px;
  justify-content: flex-end;
  position: relative;

  div {
    display: flex;
    align-items: end;
    position: absolute;
    width: 250px;
    height: 50px;
    padding-top: 200px;
    top: 0;
  }

  p {
    color: #ffffff;
    font-size: 14px;
    padding: 5px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const ContentImage = styled.img`
  max-width: 250px;
  max-height: 250px;
  margin-bottom: 5px;
  background: ${(props) =>
    `linear-gradient(to top, rgba(0, 0, 0, 0.5), ${props.src}})`};
`
