import Navbar from './components/Navbar'

const title = `Harrison Reich's Favorites!`

const book = {
  title: 'The richest man in Babylon',
  author: 'Samuel Clason',
  published: 1926
}

const song = {
  title: 'Money Trees',
  artist: 'Kendrick Lamar',
  released: 2012
}

const movie = {
  title: 'Tenet',
  director: 'Christopher Nolan',
  rated: 'R'
}

const videogame = {
  title: 'League of Legends',
  publisher: 'Riot Games',
  published: 2009
}

const App = () => {
  return (
    <>
      <Navbar title={title} />
    </>
  )
}

export default App