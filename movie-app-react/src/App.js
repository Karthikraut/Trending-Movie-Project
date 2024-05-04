import './App.css';
import Home from './components/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Trending from './components/Trending';
import Loader from './components/Loader';
import Popular from './components/Popular';
import Tv from './components/Tv';
import People from './components/People';
import Movies from './components/Movies';
import cart from './store/cart';
import {Provider} from "react-redux"
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails';
import PersonDetail from './components/PersonDetail';
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element:( <div className="App bg-[#1F1E24] h-screen flex w-screen overflow-x-hidden">
                      <Home/>
              </div>),
      
    },
    {
      path: "/trending",
      element: <Trending/>,
      children: [
        {
          path: "/trending/details/:id",
        }
      ]
    },
    {
      path: "/popular",
      element: <Popular/>
    },
    {
      path: "/tv",
      element: <Tv/>,
      children: [
        {
          path: "/tv/details/:id",
          element: <TvDetails/>
        }
      ]
    },
    {
      path: "/people",
      element: <People/>,
      children: [
        {
          path: "/people/details/:id",
          element: <PersonDetail />
        }
      ]
    },
    {
      path: "/movie",
      element: <Movies/>,
      children: [
        {
          path: "/movie/details/:id",
          element: <MovieDetails/>
        }
      ]
    }
  ])
  return (
    <Provider store={cart}>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
