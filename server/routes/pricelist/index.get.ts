import { PriceList } from '~~/server/models/pricelist'

export default defineEventHandler(() => {
  const data = PriceList.map((item) => {
    return { id: item.id, value: item.id, placeholder: item.name, price: item.price, discount: item.discount }
  })

  return { data: data }
})
