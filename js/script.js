function getUrlParams() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  return params;
}
const albums = [
  {
    title: "Load",
    artist: "Metallica",
    url: "metallica/load",
    releaseDate: "1996",
    addDate: "2025-06-09",
  },
  {
    title: "Ten",
    artist: "Pearl Jam",
    url: "pearl-jam/ten",
    releaseDate: "1991",
    addDate: "2025-05-30",
  },
  {
    title: "HIT ME HARD AND SOFT",
    artist: "Billie Eilish",
    url: "billie-eilish/hit-me-hard-and-soft",
    releaseDate: "2024",
    addDate: "",
  },
  {
    title: "Opus Eponymous",
    artist: "Ghost",
    url: "ghost/opus-eponymous",
    releaseDate: "2010",
    addDate: "2025-07-13",
  },
  {
    title: "The Rise and Fall of a Midwest Princess",
    artist: "Chappell Roan",
    url: "chappell-roan/the-rise-and-fall-of-a-midwest-princess",
    releaseDate: "2023",
    addDate: "2025-05-06",
  },
  {
    title: "Permission to Land",
    artist: "The Darkness",
    url: "the-darkness/permission-to-land",
    releaseDate: "2003",
    addDate: "2025-05-06",
  },
];
