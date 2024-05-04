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
import MovieTrailer from './components/MovieTrailer';
import NotFound from './templates/NotFound';
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
    },
    {
      path: "/popular",
      element: <Popular/>
    },
    {
      path: "/tv",
      element: <Tv/>,
    },
    {
      path: "/people",
      element: <People/>,
    },
    {
      path: "/movie",
      element: <Movies/>,
    },
    {
      path: "/tv/details/:id",
      element: <TvDetails/>,
      children: [
        {
          path: "/tv/details/:id/trailer",
          element: <TvDetails/>
        }
      ]
    },
    {
      path: "/movie/details/:id",
      element: <MovieDetails/>,
      children: [
        {
          path: "/movie/details/:id/trailer",
          element: <MovieTrailer/>
        }
      ]
    },
    {
      path: "/people/details/:id",
      element: <PersonDetail />
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ])
  return (
    <Provider store={cart}>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
