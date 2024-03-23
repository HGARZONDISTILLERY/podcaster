import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './components/routes/root/root'
import ErrorPage from './components/routes/error/error'
import PodcastDetails from './components/routes/details'
import PodcastEpisode from './components/PodcastEpisode';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "podcast/:podcastId",
    element: <PodcastDetails />,
  },
  {
    path: "podcast/:podcastId/episode/:episodeId",
    element: <PodcastEpisode />,
  }
])

function App() {
  return (
    <ErrorBoundary>
    <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
