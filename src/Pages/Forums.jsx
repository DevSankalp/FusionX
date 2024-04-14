import React, { useState } from "react";
import Feeds from "../Components/Forum/feeds";
import Nav from "../Components/Forum/forumsNav";
import Sidebar from "../Components/Forum/forumSidebar";
import Ranks from "../Components/Forum/ranking";
import image1 from "../Components/Assets/profile1.webp";
import image2 from "../Components/Assets/profile2.webp";
import image3 from "../Components/Assets/about2.jpg";
import { PiChatsDuotone } from "react-icons/pi";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";

function Forums() {
  const [activeRank, setActiveRank] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState(false);
  const [forumData] = useState({
    navData: {
      name: [<BsFillFileEarmarkPostFill />],
      title: ["new"],
    },
    feedData: {
      user1: {
        proImage: image1,
        name: "Random Banda",
        username: "@random_banda1",
        timestamp: "10h",
        tags: "Random Tags",
        image: "https://source.unsplash.com/random/900x300/?company",
        actions: {
          likes: "2k+",
          comments: 986,
          share: 304,
        },
        title: "Random Title",
        description: "Random description",
      },
      user2: {
        proImage: image2,
        name: "Random Banda",
        username: "@random_banda2",
        timestamp: "1h",
        tags: "Random Tags",
        image: null,
        actions: {
          likes: 0,
          comments: 0,
          share: 0,
        },
        title: "Random Title",
        description: "Random description",
      },
      user3: {
        proImage: image2,
        name: "Random Banda",
        username: "@random_banda3",
        timestamp: "30m",
        tags: "Random Tags",
        image: "https://source.unsplash.com/random/900x300/?company",
        actions: {
          likes: 0,
          comments: 0,
          share: 0,
        },
        title: "Random Title",
        description: "Random description",
      },
    },
    filterData: {
      filters: {
        Domain: {
          title: ["Health", "Education", "R&D", "Collaboration"],
        },
        Content: {
          title: ["Filter1", "Filter2"],
        },
      },
      featured: {
        Content: {
          title: [
            "Random Content",
            "Random Content",
            "Random Content",
            "Random Content",
            "Random Content",
          ],
        },
        Company: {
          title: [
            "Random Company",
            "Random Company",
            "Random Company",
            "Random Company",
            "Random Company",
          ],
        },
      },
    },
    addData: {
      rankData: {
        title: ["Random Company", "Random Company", "Random Company"],
      },
    },
  });

  // const tabs = {
  //   1: {
  //     title: "Ayurveda",
  //     link: "/",
  //   },
  //   2: {
  //     title: "Yoga & Naturo",
  //     link: "/",
  //   },
  //   3: {
  //     title: "Unani",
  //     link: "/",
  //   },
  //   4: {
  //     title: "Siddha",
  //     link: "/",
  //   },
  //   5: {
  //     title: "Homeo",
  //     link: "/",
  //   },
  // };

  return (
    <div className="h-[100vh] overflow-hidden bg-[#fff]">
      {/* <Background2 /> */}
      <Nav
        navData={forumData.navData}
        activeRank={activeRank}
        setActiveRank={setActiveRank}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div className="flex flex-col md:grid md:grid-cols-[18%_62%_20%] h-[87%] md:h-[89%]">
        <Sidebar
          filterData={forumData.filterData}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <div className="neo-cont mt-2 overflow-scroll mx-2 md:mx-4 order-2 md:order-1">
          <Feeds feedData={forumData.feedData} />
        </div>
        <Ranks
          addData={forumData.addData}
          activeRank={activeRank}
          setActiveRank={setActiveRank}
        />
      </div>
    </div>
  );
}

export default Forums;
