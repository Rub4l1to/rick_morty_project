import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'

// Components
import { Card, Footer, Header } from './components/index';

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() =>
    getCharacters(), [])

  const getCharacters = async () => {
    const data = await axios.get("https://rickandmortyapi.com/api/character/?page=1");
    const res = await data.data.results;
    setList(res)
  }


  const handleFilter = (search) =>
    setList(list.filter((item) =>
      search ?
        item.name.toLowerCase().includes(search.toLowerCase())
        :
        getCharacters()
    ))

  return (
    <Fragment>
      <Header {...{ handleFilter }} />
      <main className="container">
        <section className="grid-cards">
          {list.slice(0, 20).map(item => (
            <Card key={item.id} {...{ item }} />
          ))}
        </section>
      </main>
      <Footer />
    </Fragment>
  )
}

export default App;