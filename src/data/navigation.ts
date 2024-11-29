import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";
import { UsersIcon, HeartIcon, UserGroupIcon,PuzzlePieceIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import {BackPack, Calendar1, Calendar,CalendarTimeline, ContactUs,Cruise,Dish,Diving,Earth,Love,
  Luggages, Map, Mini,Mountain, Park, Tent,Tomorrow,Train,Travelers,UsefulContent,User,Yesterday
} from '@/images/mega-menu'
import __megamenu from "./jsons/__megamenu.json";

const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Company",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.Company,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "App Name",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.AppName,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "City",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.City,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Contruction",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.Contruction,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Country",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.Country,
    })),
  },
];

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Online booking",
  },
  {
    id: ncNanoId(),
    href: "/home-2",
    name: "Real estate",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/home-3",
    name: "Home 3",
    isNew: true,
  },
];

const otherPageChildMenus: NavItemType[] = [
  { id: ncNanoId(), href: "/blog", name: "Blog page" },
  { id: ncNanoId(), href: "/blog/single" as Route, name: "Blog single" },
  { id: ncNanoId(), href: "/about", name: "About" },
  { id: ncNanoId(), href: "/contact", name: "Contact us" },
  { id: ncNanoId(), href: "/login" as Route, name: "Login" },
  { id: ncNanoId(), href: "/signup" as Route, name: "Signup" },
];


export const NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Company Profiles",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        slug: "/dashboard/who-we-are",
        name: "who we are",
        href: "/company-profiles/who-we-are" as Route,
        icon: UsersIcon,
        subName: 'Kekayon creates journeys that connect people with the world in a meaningful way.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "milestone",
        href: "/company-profiles/milestone"as Route,
        icon: HeartIcon,
        subName: 'Our journey is one of growth and innovation, packed with challenges and achievements.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "See Our Smiles",
        href: "/company-profiles/see-our-smiles"as Route,
        icon: UserGroupIcon,
        subName: 'Meet the Kekayon team—your trip experts!'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Join Our Team",
        href: "/company-profiles/join-our-team"as Route,
        icon: PuzzlePieceIcon,
        subName: 'Become part of Kekayon and help create meaningful journeys.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Better Travel (Sustainability)",
        href: "/company-profiles/better-travel"as Route,
        icon: ArrowPathIcon,
        subName: 'Kekayon encourages responsible travel through eco-friendly practices and local partnerships.'
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Travel",
    type: "superMenu",
    children: [
      {
        id: ncNanoId(),
        slug: "/dashboard/who-we-are",
        name: "who we are",
        href: "/company-profiles/who-we-are"as Route,
        icon: UsersIcon,
        subName: 'Kekayon creates journeys that connect people with the world in a meaningful way.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "milestone",
        href: "/company-profiles/milestone"as Route,
        icon: HeartIcon,
        subName: 'Our journey is one of growth and innovation, packed with challenges and achievements.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "See Our Smiles",
        href: "/company-profiles/see-our-smiles"as Route,
        icon: UserGroupIcon,
        subName: 'Meet the Kekayon team—your trip experts!'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Join Our Team",
        href: "/company-profiles/join-our-team"as Route,
        icon: PuzzlePieceIcon,
        subName: 'Become part of Kekayon and help create meaningful journeys.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Better Travel (Sustainability)",
        href: "/company-profiles/better-travel"as Route,
        icon: ArrowPathIcon,
        subName: 'Kekayon encourages responsible travel through eco-friendly practices and local partnerships.'
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/knowledge-base",
    name: "Knowledge Bases",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/testimonials",
    name: "Testimonials",
    type: "none",
  },


];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/add-listing/1" as Route,
    name: "Add listing",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/add-listing/1" as Route,
        name: "Add listing 1",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/2" as Route,
        name: "Add listing 2",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/3" as Route,
        name: "Add listing 3",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/4" as Route,
        name: "Add listing 4",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/5" as Route,
        name: "Add listing 5",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/6" as Route,
        name: "Add listing 6",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/7" as Route,
        name: "Add listing 7",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/8" as Route,
        name: "Add listing 8",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/9" as Route,
        name: "Add listing 9",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/10" as Route,
        name: "Add listing 10",
      },
    ],
  },
  //
  { id: ncNanoId(), href: "/checkout", name: "Checkout" },
  { id: ncNanoId(), href: "/pay-done" as Route, name: "Pay done" },
  //
  { id: ncNanoId(), href: "/author", name: "Author page" },
  { id: ncNanoId(), href: "/account", name: "Account page" },
  //
  {
    id: ncNanoId(),
    href: "/subscription"as Route,
    name: "Subscription",
  },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "dropdown",
    children: demoChildMenus,
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Five columns",
    type: "megaMenu",
    megaMenu: megaMenuDemo,
  },
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Listing Page",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/listing-stay",
        name: "Stay listings",
        type: "dropdown",
        children: [
          { id: ncNanoId(), href: "/listing-stay", name: "Stay page" },
          {
            id: ncNanoId(),
            href: "/listing-stay-map",
            name: "Stay page (map)",
          },
          { id: ncNanoId(), href: "/listing-stay-detail", name: "Stay Detail" },
        ],
      },

      //
      {
        id: ncNanoId(),
        href: "/listing-experiences",
        name: "Experiences listings",
        type: "dropdown",
        children: [
          {
            id: ncNanoId(),
            href: "/listing-experiences",
            name: "Experiences page",
          },
          {
            id: ncNanoId(),
            href: "/listing-experiences-map",
            name: "Experiences page (map)",
          },
          {
            id: ncNanoId(),
            href: "/listing-experiences-detail",
            name: "Experiences Detail",
          },
        ],
      },

      //
      {
        id: ncNanoId(),
        href: "/listing-car",
        name: "Cars listings",
        type: "dropdown",
        children: [
          { id: ncNanoId(), href: "/listing-car", name: "Cars page" },
          { id: ncNanoId(), href: "/listing-car-map", name: "Cars page (map)" },
          { id: ncNanoId(), href: "/listing-car-detail", name: "Car Detail" },
        ],
      },

      //
      {
        id: ncNanoId(),
        href: "/listing-real-estate",
        name: "Real Estate Listings",
        type: "dropdown",
        children: [
          {
            id: ncNanoId(),
            href: "/listing-real-estate",
            name: "Real Estate Listings",
          },
          {
            id: ncNanoId(),
            href: "/listing-real-estate-map",
            name: "Real Estate Maps",
          },
        ],
      },
      //
      {
        id: ncNanoId(),
        href: "/listing-flights",
        name: "Flights listings",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/author",
    name: "Templates",
    type: "dropdown",
    children: templatesChildrenMenus,
  },

  {
    id: ncNanoId(),
    href: "/blog",
    name: "Other pages",
    type: "dropdown",
    children: otherPageChildMenus,
  },
];



export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "dropdown",
    children: demoChildMenus,
    isNew: true,
  },
  //
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Listing pages",
    children: [
      { id: ncNanoId(), href: "/listing-stay", name: "Stay listings" },
      {
        id: ncNanoId(),
        href: "/listing-stay-map",
        name: "Stay listings (map)",
      },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Stay detail" },

      //
      {
        id: ncNanoId(),
        href: "/listing-experiences",
        name: "Experiences listings",
      },
      {
        id: ncNanoId(),
        href: "/listing-experiences-map",
        name: "Experiences (map)",
      },
      {
        id: ncNanoId(),
        href: "/listing-experiences-detail",
        name: "Experiences detail",
      },
    ],
  },
  // 
  {
    id: ncNanoId(),
    href: "/listing-car",
    name: "Listing pages",
    children: [
      { id: ncNanoId(), href: "/listing-car", name: "Cars listings" },
      { id: ncNanoId(), href: "/listing-car-map", name: "Cars listings (map)" },
      { id: ncNanoId(), href: "/listing-car-detail", name: "Car detail" },

      //
      {
        id: ncNanoId(),
        href: "/listing-real-estate",
        name: "Real estate listings",
      },
      {
        id: ncNanoId(),
        href: "/listing-real-estate-map",
        name: "Real estate (map)",
      },
      //
      {
        id: ncNanoId(),
        href: "/listing-flights",
        name: "Flights listings",
      },
    ],
  },
  //
  {
    id: ncNanoId(),
    href: "/author",
    name: "Templates",
    type: "dropdown",
    children: templatesChildrenMenus,
  },
  //
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Other pages",
    type: "dropdown",
    children: otherPageChildMenus,
  },
  // 
  {
    id: ncNanoId(),
    href: "/listing-car",
    name: "Dumy Menu",
    children: [
      {
        id: ncNanoId(),
        href: "/usefull-content",
        name: "Usefull Content",
      },
    ],
  },
];

export const NAVIGATION_DEMO_3: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "travel style",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        slug: "/active-adventures",
        name: "Active Adventures",
        href: "/active-adventures",
        icon: BackPack,
        subName: 'Thrilling outdoor activities like hiking, biking, and kayaking.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Culinary Experiences",
        href: "/company-profiles/milestone"as Route,
        icon: Dish,
        subName: 'Discover local culture through food tours and tastings.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Luxury Escapes",
        href: "/company-profiles/see-our-smiles"as Route,
        icon: Cruise,
        subName: 'Indulge in exclusive experiences and top-tier accommodations.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Cultural Connections",
        href: "/company-profiles/join-our-team"as Route,
        icon: Earth,
        subName: 'Become part of Kekayon and help create meaningful journeys.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Scenic Road Trips",
        href: "/company-profiles/better-travel"as Route,
        icon: Mountain,
        subName: 'Kekayon encourages responsible travel through eco-friendly practices and local partnerships.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Slow Travel",
        href: "/company-profiles/better-travel"as Route,
        icon: Park,
        subName: 'Relaxed journeys with deeper immersion in each destination.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Train Journeys",
        href: "/company-profiles/better-travel"as Route,
        icon: Train,
        subName: 'Scenic, comfortable travel by train through beautiful landscapes.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Wildlife Encounters",
        href: "/company-profiles/better-travel"as Route,
        icon: Tent,
        subName: 'Safe, guided experiences with nature and wildlife.'
      },
    ],
    isNew: true,
  },
  //
  {
    id: ncNanoId(),
    href: "/",
    name: "Trip Companion",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        slug: "/dashboard/who-we-are",
        name: "Solo Travel",
        href: "/",
        icon: User,
        subName: 'Independent journeys with optional group activities.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Couples & Friends",
        href: "/company-profiles/milestone"as Route,
        icon: Travelers,
        subName: 'Shared experiences designed for small groups.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Honeymoon Packages",
        href: "/company-profiles/join-our-team"as Route,
        icon: Love,
        subName: 'Romantic getaways for newlyweds, blending intimacy and privacy.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Family Trips",
        href: "/company-profiles/better-travel"as Route,
        icon: Luggages,
        subName: 'Adventures for all ages with family-friendly activities.'
      },
      {
        id: ncNanoId(),
        slug: "/dashboard/milestone",
        name: "Group Adventures",
        href: "/company-profiles/better-travel"as Route,
        icon: Mini,
        subName: 'Flexible plans for big groups, guaranteeing a great time for everyone.'
      },
    ],
    isNew: true,
  },
    //
    {
      id: ncNanoId(),
      href: "/",
      name: "Trip Duration",
      type: "dropdown",
      children: [
        {
          id: ncNanoId(),
          slug: "/dashboard/who-we-are",
          name: "1 Week Itinerarie",
          href: "/",
          icon: Calendar,
          subName: 'Discover compact getaways featuring stunning views and local cuisine.'
        },
        {
          id: ncNanoId(),
          slug: "/dashboard/milestone",
          name: "10-Day Getaways",
          href: "/company-profiles/milestone"as Route,
          icon: CalendarTimeline,
          subName: 'Extended escapes enable deeper exploration of uncharted territories.'
        },
        {
          id: ncNanoId(),
          slug: "/dashboard/milestone",
          name: "Luxury Escapes",
          href: "/company-profiles/see-our-smiles"as Route,
          icon: Tomorrow,
          subName: 'Indulge in exclusive experiences and top-tier accommodations.'
        },
        {
          id: ncNanoId(),
          slug: "/dashboard/milestone",
          name: "Honeymoon Packages",
          href: "/company-profiles/join-our-team"as Route,
          icon: Yesterday,
          subName: 'Romantic getaways for newlyweds, blending intimacy and privacy.'
        },
        {
          id: ncNanoId(),
          slug: "/dashboard/milestone",
          name: "Family Trips",
          href: "/company-profiles/better-travel"as Route,
          icon: Calendar1,
          subName: 'Adventures for all ages with family-friendly activities.'
        }
      ],
      isNew: true,
    },
];
