import './App.css';
import Home from './components/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Trending from './components/Trending';
import Loader from './components/Loader';
import Popular from './components/Popular';
import Tv from './components/Tv';
import People from './components/People';
import Movies from './components/Movies';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element:( <div className="App bg-[#1F1E24] h-screen flex w-screen overflow-x-hidden">
                      <Home/>
              </div>)
    },
    {
      path: "/trending",
      element: <Trending/>
    },
    {
      path: "/loader",
      element: <Loader/>
    },
    {
      path: "/popular",
      element: <Popular/>
    },
    {
      path: "/tv",
      element: <Tv/>
    },
    {
      path: "/people",
      element: <People/>,
    },
    {
      path: "/movies",
      element: <Movies/>
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
