const API_KEY = "fac5bffd"
const BASE_URL = "https://www.omdbapi.com/"
const POPULAR_MOVIES = [
  "Ne Zha II",
  "Lilo & Stitch",
  "The Monkey",
  "Jurassic World: Rebirth",
  "How to Train Your Dragon",
  "Dune: Part Two",
  "F1: The Movie",
  "Superman",
  "Captain America: Brave New World",
  "Thunderbolts",
  "Sinners",
  "Final Destination: Bloodlines",
  "Snow White",
  "The Substance",
  "Deadpool & Wolverine",
  "Dog Man",
  "Bridget Jones: Mad About the Boy",
  "Mickey 17",
  "Ballerina",
  "Elio",
  "Karate Kid: Legends"
];

export async function getPopularmovies() {
  const movies = [];

  for (const title of POPULAR_MOVIES) {
    const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === "True") {
      movies.push(data);
    }
  }

  return movies;
}

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=fac5bffd`);
    const data = await response.json();
    return data.Search || [];
  } catch (err) {
    console.error("Error searching movies:", err);
    return [];
  }
};