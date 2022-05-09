export interface Category {
  id: number | null
  name: string
  icon: string
  products: Product[]
}

export interface Product {
  id: number | null
  name: string
  price: number
  image: string
  categoryId: number
}

export interface Order {
  id: number | null
  name: string
  price: number
  image: string
  amount: number
  categoryId: number
}
