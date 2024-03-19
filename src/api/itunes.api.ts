import { QueryKey, useQuery } from '@tanstack/react-query';

type TPriceAttributtes = {
  amount: string
  currency: string
}

type TImageAttributtes = {
  height: string
}

type TContentAttributes = {
  term: string
  label: string
}

type TPLinkAttributes = {
    rel?: string
    type?: string
    href?: string
}

type TIdAttributtes = {
  "im:id": string
}

type TCategoryAttributes = {
  "im:id": string
  term: string
  scheme: string
  label: string
}

type TReleaseDateAttributes = {
  term: string
  label: string
}

export type TPodcast = {
  'im:name': {
    label: string
  }
  'im:image': {
    label: string
    attributes: TImageAttributtes
  }
  summary: {
    label: string
  }
  'im:price': {
    label: string
    attributes: TPriceAttributtes
  }
  'im:contentType': {
    attributes: TContentAttributes
  }
  right: {
    label: string
  }
  title: {
    label: string
  }
  link: TPLinkAttributes
  "id": {
    label: string
    attributes: TIdAttributtes
  }
  "im:artist": {
    label: string
    attributes: TPLinkAttributes
  }
  category: {
    attributes: TCategoryAttributes
  }
  "im:releaseDate": {
    label: string
    attributes: TReleaseDateAttributes
  }
}

export type TPodcastList = TPodcast[]

export const fetchPodcastList = async (): Promise<any> => {
  const res = 
    await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
  console.log(res)
    if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  console.log(data)
  return data;
};

export const usePodcasts = () => {
  return useQuery<TPodcastList, Error, QueryKey>({
    queryKey: ['sarasa'],
    queryFn: fetchPodcastList,
  });
};