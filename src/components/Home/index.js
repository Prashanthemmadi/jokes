import {useState, useEffect} from 'react'
import './index.css'

const Home = () => {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const func = async () => {
      const url =
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'
      const options = {
        method: 'GET',
      }
      const response = await fetch(url, options)

      if (response.ok) {
        const resData = await response.json()
        const dataChange = resData.jokes.map(each => ({
          category: each.category,
          joke: each.joke,
          id: each.id,
        }))
        setData(dataChange)
        setLoad(false)
      }
    }
    func()
  }, [])

  const loading = () => (
    <div className="d-flex flex-column justify-content-center align-items-center load">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  return (
    <>
      {load ? (
        loading()
      ) : (
        <div>
          {data.map(each => (
            <table>
              <thead>
                <tr>
                  <th className="category" key={each.id}>
                    <span className="category-title">Category: </span>{' '}
                    {each.category}
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td className="joke" key={each.id}>
                    <span className="joke-title">Joke: </span> {each.joke}
                  </td>
                </tr>
              </thead>
            </table>
          ))}
        </div>
      )}
    </>
  )
}

export default Home
