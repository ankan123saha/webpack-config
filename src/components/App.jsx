import '../styles/index.scss'
import Recipies from './Recipies'

const App=()=> {
    return (
        <>
          <section className="hero"></section>
          <main>
              <section>
                  <Recipies/>
              </section>
          </main>  
        </>
    )
}

export default App
