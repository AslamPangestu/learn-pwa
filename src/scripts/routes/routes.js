import NowPlaying from '../views/pages/now-playing'
import Upcoming from '../views/pages/upcoming'
import Detail from '../views/pages/detail'
import Favourites from '../views/pages/favourites'

const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/favourites': Favourites,
  '/detail/:id': Detail
}

export default routes
