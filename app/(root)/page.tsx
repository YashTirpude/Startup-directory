import React from "react";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Azrael" },
      _id: 1,
      description: "This is a description",
      image:
        "https://th.bing.com/th/id/R.2436bfd57f8da9d3352be6d9c69f7d0d?rik=9ZCsDkOmNhWhyQ&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2fbest-scenery-wallpaper-scenery-images.jpg&ehk=QhEgBXlBIdu4NBBKeTvxOQncAMHrLokkC8ustgaeB9c%3d&risl=&pid=ImgRaw&r=0",
      category: "Robots",
      title: "Robot",
    },
  ];

  return (
    <>
      <section className="blue_container ">
        <h1 className="heading">
          Pitch Your Startup,
          <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
