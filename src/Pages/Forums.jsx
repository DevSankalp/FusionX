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
        proImage: "https://source.unsplash.com/random/300x300/?businessman",
        name: "John Doe",
        username: "@johndoe",
        timestamp: "1d",
        tags: "Technology, Business",
        image: "https://source.unsplash.com/random/800x300/?tech",
        actions: {
          likes: "1.5k+",
          comments: 265,
          share: 87,
        },
        title: "Revolutionizing the Tech Industry with AI",
        description:
          "Exploring the impact of artificial intelligence on businesses and society.",
      },
      user2: {
        proImage: "https://source.unsplash.com/random/300x300/?businessman",
        name: "Jane Smith",
        username: "@janesmith",
        timestamp: "5h",
        tags: "Marketing, Strategy",
        image: "https://source.unsplash.com/random/800x300/?marketing",
        actions: {
          likes: "800+",
          comments: 124,
          share: 43,
        },
        title: "Crafting Effective Marketing Campaigns in 2024",
        description:
          "Key strategies for marketers to succeed in a rapidly evolving digital landscape.",
      },
      user3: {
        proImage: "https://source.unsplash.com/random/300x300/?businessman",
        name: "Michael Johnson",
        username: "@michaeljohnson",
        timestamp: "30m",
        tags: "Finance, Investments",
        image: "https://source.unsplash.com/random/800x300/?finance",
        actions: {
          likes: "250+",
          comments: 37,
          share: 15,
        },
        title: "Navigating Volatile Markets: Expert Insights",
        description:
          "Insights from industry leaders on managing investments in uncertain economic times.",
      },
      user4: {
        proImage: "https://source.unsplash.com/random/300x300/?businessman",
        name: "Emily Chang",
        username: "@emilychang",
        timestamp: "2h",
        tags: "Healthcare, Innovation",
        image: "https://source.unsplash.com/random/800x300/?healthcare",
        actions: {
          likes: 0,
          comments: 0,
          share: 0,
        },
        title: "The Future of Healthcare: Advancements and Challenges",
        description:
          "Examining the latest breakthroughs and hurdles in the healthcare industry.",
      },
      user5: {
        proImage: "https://source.unsplash.com/random/300x300/?businessman",
        name: "David Williams",
        username: "@davidwilliams",
        timestamp: "4h",
        tags: "Education, Technology",
        image: "https://source.unsplash.com/random/800x300/?education",
        actions: {
          likes: "320+",
          comments: 82,
          share: 28,
        },
        title: "Innovations in Online Learning Platforms",
        description:
          "Exploring new technologies reshaping the education sector and e-learning experiences.",
      },
      user6: {
        proImage: "https://source.unsplash.com/random/300x300/?businessman",
        name: "Sarah Brown",
        username: "@sarahbrown",
        timestamp: "6h",
        tags: "Leadership, Management",
        image: null,
        actions: {
          likes: 0,
          comments: 0,
          share: 0,
        },
        title: "Effective Leadership Strategies for the Modern Workplace",
        description:
          "Tips and insights for leading teams in a rapidly changing business environment.",
      },
      user7: {
        proImage: "https://source.unsplash.com/random/300x300/?businessman",
        name: "James Wilson",
        username: "@jameswilson",
        timestamp: "1d",
        tags: "Finance, Cryptocurrency",
        image: "https://source.unsplash.com/random/800x300/?cryptocurrency",
        actions: {
          likes: "1.2k+",
          comments: 189,
          share: 65,
        },
        title: "The Rise of Cryptocurrency: Opportunities and Risks",
        description:
          "Analyzing the potential of cryptocurrencies and their impact on traditional financial systems.",
      },
      user8: {
        proImage: "https://source.unsplash.com/random/300x300/?businessman",
        name: "Emma Garcia",
        username: "@emmagarcia",
        timestamp: "3h",
        tags: "Artificial Intelligence, Ethics",
        image: "https://source.unsplash.com/random/800x300/?ai",
        actions: {
          likes: "550+",
          comments: 98,
          share: 36,
        },
        title: "Ethical Considerations in AI Development",
        description:
          "Examining the ethical implications of AI technologies and the need for responsible AI development.",
      },
      user9: {
        proImage: "https://source.unsplash.com/random/300x300/?businessman",
        name: "Daniel Lee",
        username: "@daniellee",
        timestamp: "2d",
        tags: "Entrepreneurship, Startups",
        image: "https://source.unsplash.com/random/800x300/?startup",
        actions: {
          likes: "980+",
          comments: 172,
          share: 58,
        },
        title: "From Idea to Startup: Navigating the Entrepreneurial Journey",
        description:
          "Practical advice and insights for aspiring entrepreneurs on building successful startups.",
      },
      user10: {
        proImage: "https://source.unsplash.com/random/300x300/?businessman",
        name: "Olivia Moore",
        username: "@oliviamoore",
        timestamp: "6h",
        tags: "Health, Wellness",
        image: "https://source.unsplash.com/random/800x300/?wellness",
        actions: {
          likes: 0,
          comments: 0,
          share: 0,
        },
        title:
          "Mindfulness and Stress Reduction Techniques for Busy Professionals",
        description:
          "Strategies for managing stress and promoting well-being in fast-paced work environments.",
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
        companies: [
          {
            title: "ABC Corporation",
            url: "https://www.abccorporation.com",
          },
          {
            title: "XYZ Industries",
            url: "https://www.xyzindustries.com",
          },
          {
            title: "Global Solutions Inc.",
            url: "https://www.globalsolutionsinc.com",
          },
          {
            title: "Innovative Ventures Group",
            url: "https://www.innovativeventuresgroup.com",
          },
          {
            title: "Apex Enterprises",
            url: "https://www.apexenterprises.com",
          },
          {
            title: "Strategic Innovations Co.",
            url: "https://www.strategicinnovationsco.com",
          },
          {
            title: "Nexus Technologies",
            url: "https://www.nexustechnologies.com",
          },
          {
            title: "Elite Dynamics Corporation",
            url: "https://www.elitedynamicscorp.com",
          },
          {
            title: "Summit Solutions Group",
            url: "https://www.summitsolutionsgroup.com",
          },
          {
            title: "Vanguard Innovations Ltd.",
            url: "https://www.vanguardinnovations.com",
          },
          {
            title: "Pinnacle Enterprises",
            url: "https://www.pinnacleenterprises.com",
          },
          {
            title: "Prime Solutions Inc.",
            url: "https://www.primesolutionsinc.com",
          },
          {
            title: "Dynamic Growth Partners",
            url: "https://www.dynamicgrowthpartners.com",
          },
          {
            title: "Visionary Ventures Group",
            url: "https://www.visionaryventuresgroup.com",
          },
          {
            title: "Elevate Enterprises",
            url: "https://www.elevateenterprises.com",
          },
        ],
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
