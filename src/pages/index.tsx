import Product from '../components/Product'
import { useAppSelector } from '../hooks/reduxhooks'
import Layout from '../layout/Layout'
interface Props {
  categorys: {}[]
}
const Home = () => {
  const { selectedCategory } = useAppSelector((state) => state.category)

  return (
    <Layout pagina={`Menú ${selectedCategory?.name}`}>
      <h1 className='text-4xl font-black'>{selectedCategory?.name}</h1>
      <p className='text-2xl my-10'>
        Elige personaliza tu pedido a continuación
      </p>
      <div className='grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {selectedCategory?.products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Layout>
  )
}

export default Home

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient()
//   const categorys = await prisma.category.findMany()

//   return {
//     props: {
//       categorys
//     }
//   }
// }
