import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layout/layout'
import Home from './pages/home/home'
import Contact from './pages/contact/contact'
import NotFound from './pages/notFound/notFound'
import Acount from './pages/acount/acount'
import SignUp from './pages/signUp/signUp'
import LogIn from './pages/LogIn/login'
import About from './pages/about/about'
import Products from './pages/products/products'
import Wishlist from './pages/wishlist/wishlist'
import Info from './pages/info/info'
import Cart from './pages/cart/cart'
import Checkout from './pages/checkOut/checkOut'
import CategoryById from './pages/categoryById/categoryById'

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
					index: true,
				},
				{
					path: '/contact',
					element: <Contact />,
				},
				{
					path: '/about',
					element: <About />,
				},
				{
					path: '*',
					element: <NotFound />,
				},
				{
					path: '/acount',
					element: <Acount />,
				},
				{
					path: '/signUp',
					element: <SignUp />,
				},
				{
					path: '/logIn',
					element: <LogIn />,
				},
				{
					path: '/products',
					element: <Products />,
				},
				{
					path: '/wishlist',
					element: <Wishlist/>,
				},
					{
					path: '/info/:id',
					element: <Info/>,
				},

					{
					path: '/categoryById/:id',
					element: <CategoryById/>,
				},
				{
					path: '/cart',
					element: <Cart/>,
				},
					{
					path: '/checkout',
					element: <Checkout/>,
				},
			],

		},
	])
	return <RouterProvider router={router} />
}
