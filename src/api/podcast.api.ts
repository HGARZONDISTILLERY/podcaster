import { QueryKey, useQuery } from '@tanstack/react-query';
import { TPodcastDetails, TPodcastList } from '../types/podcast.api';

export const fetchPodcastList = async (): Promise<TPodcastList> => {
  const res = 
    await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await res.json()
  const podcasts: TPodcastList = data.feed.entry

  return podcasts
}

export const usePodcasts = () => {
  return useQuery<TPodcastList, Error, QueryKey>({
    queryKey: ['podcasts'],
    queryFn: fetchPodcastList,
  })
}

export const fetchPodcastDetails = async (
  podcastId: string,
): Promise<TPodcastDetails> => {
  const res = 
    await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)
    if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await res.json()
  const podcastDetails: TPodcastDetails = {
    resultCount: data.resultCount,
    results: data.results
  }

  return podcastDetails
}

export const usePodcastDetail = (podcastId: string) => {
  return useQuery<any, Error, QueryKey>({
    queryKey: ['podcastDetail'],
    queryFn: () => fetchPodcastDetails(podcastId),
  })
}
