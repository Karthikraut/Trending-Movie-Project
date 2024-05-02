import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Trending from './components/Trending';

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
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
