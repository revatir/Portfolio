import { donut, resolve, evolvingnyc } from "../../assets"

export const projectList = [
  {
    img: {
      src: donut,
      alt: "Peter Pan Donuts",
      href: "http://peterpan.surge.sh/",
    },
    name: "Peter Pan Donuts",
    description:
      "A collaboration with UX designers to redesign the website of the nationally renowned Brooklyn donut shop, Peter Pan Donuts.",
    tech_used: ["React"],
  },
  {
    img: { src: resolve, alt: "Resolve", href: "http://resolve.surge.sh/" },
    name: "Resolve",
    description:
      "A full-stack social media application, Resolve  allows users to create a personal profile and share personal resolutions. Users can view other profiles on the platform to inspire their own goals.",
    tech_used: ["React", "Express", "Node"],
  },
  {
    img: {
      src: evolvingnyc,
      alt: "Evolving NYC",
      href: "http://evolvingnyc.surge.sh/",
    },
    name: "Evolving NYC",
    description:
      "A tool for NYC residents, is an application that pulls data from the NYC Department of Buildings permit database to track urban reconstruction plans throughout the years. Its purpose is to help New Yorkers see the history of change in their community as well as future plans for projected change.",
    tech_used: ["React"],
  },
]
