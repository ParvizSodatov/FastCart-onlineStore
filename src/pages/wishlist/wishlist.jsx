import { Button } from '@mui/material'
import { API } from '@/utils/config'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/reducers/cartslice/reducer'
import { Toaster } from 'sonner'

export default function Wishlist() {
  let product = JSON.parse(localStorage.getItem('wish')) || []
  console.log('Wishlist:', product)
  const dispatch = useDispatch()

  function handleAddToCart(id) {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('Please register or login to add product to the cart')
      return
    }
    dispatch(addToCart(id))
  }

  return (
    <>
      <div className='flex justify-between items-center mx-auto max-w-screen-xl px-4 mt-[30px]'>
        <p className='text-[30px] font-semibold'>Wishlist ({product.length})</p>
      </div>

      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-4 mt-10'>
        {product?.map(el => (
          <div
            key={el.id}
            className='flex flex-col border rounded-xl bg-white shadow-md p-4 hover:shadow-xl transition-all'
          >
            <img
              src={`${API}/images/${el.image}`}
              alt={el.productName}
              className='h-[200px] w-full object-contain mb-4'
            />
            <h3 className='text-lg font-semibold mb-2'>{el.productName}</h3>
            <p className='text-red-500 font-bold mb-2'>${el.price}</p>
            <p className='mb-4'>⭐⭐⭐⭐⭐ (75)</p>
            <Button
              variant='contained'
              color='inherit'
              onClick={() => handleAddToCart(el.id)}
            >
              Add To Cart
            </Button>
          </div>
        ))}
      </section>
      <Toaster position='top-right' richColors />
    </>
  )
}
