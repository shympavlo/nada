export interface ITVItem {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    url: string;
  };
  name: string;
  number: number;
  rating: {
    average: number | any;
  };
  runtime: number;
  season: number;
  show: {
    averageRuntime: number;
    dvdCountry: any;
    ended: any;
    externals: {
      imdb: any;
      thetvdb: number;
      tvrage: any;
    };
    id: number;
    image: {
      medium: string;
      original: string;
    };
    language: string;
    name: string;
    network: {
      network: {
        code: string;
        name: string;
        timezone: string;
      };
      id: number;
      name: string;
      officialSite: any;
    };
    officialSite: string;
    premiered: string;
    rating: {
      average: number | any;
    };
    runtime: number;
    schedule: {
      days: string[];
      time: string;
    };
    status: string;
    summary: string;
    type: string;
    updated: number;
    url: string;
    webChannel: any;
    weight: number;
    _links: any;
  };
  summary: string;
  type: string;
  url: string;
}
