"use client";
import PodcastCard from "@/components/PodcastCard";
import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import React from "react";

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="podcast_grid">
          {trendingPodcasts?.map(
            ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
              <PodcastCard
                key={_id}
                podcastId={_id}
                imgUrl={imageUrl}
                title={podcastTitle}
                description={podcastDescription}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
