import { QueryKey, useQuery } from '@tanstack/react-query';
import { TPodcastList } from '../types/podcast.api';

export const fetchPodcastList = async (): Promise<any> => {
  const res = 
    await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
    if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  const podcasts: TPodcastList = data.feed.entry;

  return podcasts;
};

export const usePodcasts = () => {
  return useQuery<TPodcastList, Error, QueryKey>({
    queryKey: ['sarasa'],
    queryFn: fetchPodcastList,
  });
};