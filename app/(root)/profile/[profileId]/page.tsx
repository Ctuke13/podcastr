// "use client";
// import { useUser } from "@clerk/clerk-react";
// import Image from "next/image";
// import React from "react";
// import { DEFAULT_IMAGE_PATH } from "@/constants";
// import { api } from "@/convex/_generated/api";
// import { useQuery } from "convex/react";
// import { useParams } from "next/navigation";
// import { Id } from "@/convex/_generated/dataModel";

// const Profile = ({
//   params: { podcastId },
// }: {
//   params: { podcastId: Id<"podcasts"> };
// }) => {
//   const params = useParams();
//   const { user } = useUser();
//   // const podcastId = params.podcastId;
//   console.log("User:", user);
//   console.log("Params:", { podcastId });

//   const podcast = useQuery(api.podcasts.getPodcastById, {
//     podcastId,
//   });

//   return (
//     <div>
//       <h1 className="text-20 text-white-1 font-bold mb-6">Podcastr Profile</h1>
//       <div className="flex flex-col">
//         <figure className="flex gap-3">
//           <Image
//             src={user?.imageUrl}
//             width={200}
//             height={200}
//             alt="headphone"
//             className="aspect-square rounded-xl 2xl:size-[200px]"
//           />
//           <div className="flex flex-col">
//             <h3 className="text-white-2">Verified Creator</h3>
//             <p className="text-white-1 font-bold text-40 ">{user?.fullName}</p>
//             <Image
//               src="/icons/headphone.svg"
//               width={24}
//               height={24}
//               alt="headphone"
//             />
//             {/* <h2 className="text-16 font-bold text-white-1">{podcast?.views}</h2> */}
//           </div>
//         </figure>
//       </div>
//     </div>
//   );
// };

// export default Profile;

"use client";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";
import React from "react";
import { DEFAULT_IMAGE_PATH } from "@/constants";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";

// Define the Id type
type Id<T extends string> = string & { __type: T };

const Profile = () => {
  const params = useParams();
  const podcastId = params.podcastId as Id<"podcasts">;
  const { user } = useUser();

  console.log("User:", user);
  console.log("Params:", params);
  console.log("Podcast ID:", podcastId);

  const podcast = useQuery(api.podcasts.getPodcastById, { podcastId });

  if (!podcastId) {
    return <div>Error: podcastId is missing</div>;
  }

  return (
    <div>
      <h1 className="text-20 text-white-1 font-bold mb-6">Podcastr Profile</h1>
      <div className="flex flex-col">
        <figure className="flex gap-3">
          <Image
            src={user?.imageUrl || DEFAULT_IMAGE_PATH}
            width={200}
            height={200}
            alt="headphone"
            className="aspect-square rounded-xl 2xl:size-[200px]"
          />
          <div className="flex flex-col">
            <h3 className="text-white-2">Verified Creator</h3>
            <p className="text-white-1 font-bold text-40 ">{user?.fullName}</p>
            <Image
              src="/icons/headphone.svg"
              width={24}
              height={24}
              alt="headphone"
            />
            {/* <h2 className="text-16 font-bold text-white-1">{podcast?.views}</h2> */}
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Profile;
