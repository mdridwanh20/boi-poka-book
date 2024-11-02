import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import Home from './Component/Home/Home.jsx';
import ListedBooks from './Component/ListedBooks/ListedBooks.jsx';
import PagesToRead from './Component/PagesToRead/PagesToRead.jsx';
import BookDetails from './Component/AllBook/BookDetails.jsx';
import Books from './Component/AllBook/Books.jsx';
import SignIn from './Component/From/SignIn.jsx';
import SignUp from './Component/From/SignUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
          path: "/books",
          element: <Books></Books>
      },
      {
        path : 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('booksData.json'),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('booksData.json'), // worst way :
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
