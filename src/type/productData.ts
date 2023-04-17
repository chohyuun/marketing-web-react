import { CatBox, CatToy2, CatBowl, CatTower, CatToy1 } from '../assets'

type ProductDataType = {
  url: string
  title: string
}

export const productData = [
  {
    url: CatTower,
    title: '[pet] 올라가서 사람에게 뛰어내리는 높은 캣타워! 와!',
  },
  {
    url: CatBowl,
    title: '[pet] 누워서 움직이지 않는다! 캣타워용 투명 볼',
  },
  {
    url: CatToy1,
    title: '[pet] 고양이 상품 샤카샤카 흔들어 봐요!',
  },
  {
    url: CatBox,
    title: '[pet] 고양이가 좋아하는 딱 맞는 박스!',
  },
  {
    url: CatToy2,
    title: '[pet] 고양이는 생선을 좋아해! 생선 모양 인형',
  },
] as ProductDataType[]
