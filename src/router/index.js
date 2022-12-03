import { Navigate } from "react-router-dom";

import Discover from "@/pages/discover";

import Recommend from "../pages/discover/c-pages/recommend";
import Toplist from "../pages/discover/c-pages/toplist";
import Playlist from "../pages/discover/c-pages/palylist";
import Djradio from "../pages/discover/c-pages/djradio";
import Artist from "../pages/discover/c-pages/artist";
import Album from "../pages/discover/c-pages/album";

import Mine from "@/pages/mine"
import Friend from "@/pages/friend";
import Player from "@/pages/player";

const routes = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover/*",
    element: <Discover />,
    children: [
      {
        path: "",
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: "recommend",
        element: <Recommend />
      },
      {
        path: "toplist",
        element: <Toplist />
      },
      {
        path: "playlist",
        element: <Playlist />
      },
      {
        path: "djradio",
        element: <Djradio />
      },
      {
        path: "artist",
        element: <Artist />
      },
      {
        path: "album",
        element: <Album />
      },
      {
        path: "song",
        element: <Player />
      }
    ]
  },
  {
    path: "mine",
    element: <Mine />

  },
  {
    path: "friend",
    element: <Friend />
  },
];

export default routes;