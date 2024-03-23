import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { usePodcasts } from "../../../api/podcast.api";
import { TPodcastList } from "../../../types/podcast.api";
import Filter from "../../PodcastFilter/podcastFilter";
import PodcastHeader from "../../PodcastHeader/podcastHeader";
import PodcastList from "../../PodcastList/podcastList";

const Root: React.FC<{}> = () => {
  const { data: podcastData, isLoading, error } = usePodcasts();
  const [filteredPodcasts, setFilteredPodcasts] = useState<TPodcastList>(podcastData as TPodcastList);

  const filterPodcasts = (value: string): void => {
    const filterValue = value;

    if (podcastData && podcastData.length) {
      if (filterValue !== '') {
        const filteredPodcasts: any = podcastData.filter((podcast: any) => {
          return (
            podcast?.title?.label.includes(filterValue) ||
            podcast?.['im:artist']?.label.includes(filterValue)
          );
        });
        setFilteredPodcasts(filteredPodcasts as TPodcastList);
      } else {
        setFilteredPodcasts(podcastData as TPodcastList);
      }
    } else {
      console.log('Error: no hay datos de podcast disponibles');
    }
  };

  useEffect(() => {
    if (!isLoading) {
      filterPodcasts('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (error) {
    return <div>An error occurred while loading the podcast list.</div>;
  }

  return (
    <Box sx={{maxWidth: '800px', margin: '0 auto', padding: '30px'}}>
      <PodcastHeader isLoading={isLoading} />
      <Filter filterPodcasts={filterPodcasts} />
      <PodcastList isLoading={isLoading} podcasts={filteredPodcasts} />
    </Box>
  );
};

export default Root