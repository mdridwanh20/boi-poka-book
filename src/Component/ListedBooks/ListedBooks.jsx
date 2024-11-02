import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleBook from '../AllBook/SingleBook';

export default function ListedBooks() {

  // const allBooks = useLoaderData();
  const [allBooks, setAllBooks] = useState([]);

  useEffect(()=>{git init
      fetch('booksData.json')
      .then(res => res.json())
      .then(data => setAllBooks(data))

  } ,[])

  console.log(allBooks);
  

  return (
    <div className='container m-auto my-10'>
      <Tabs >

        <TabList >
          <Tab >Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
           
        </TabPanel>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>

      </Tabs>
    </div>
  )
}
