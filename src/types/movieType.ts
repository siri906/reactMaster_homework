export interface MovieDataInfo {
  page: number;
  results: MovieDataList[];
  total_pages: number;
  total_results: number;
}
export interface MovieDataList {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailData {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: MovieDetailCollection;
  budget: number;
  genres: any[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: any[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
