export const menus = [
  {
    label: "Home",
    to: "/home",
    children: [
      {
        label: "Dashboard",
        to: "/dashboard",
      },
      {
        label: "Profile",
        to: "/profile",
        children: [{
            label: "Details",
            to: "/details",
            children: [{
                label: "Location",
                to: "/location",
                children: [{
                    label: "City",
                    to: "/city", 
                }]
            }]
        }]
      },
      {
        label: "Settings",
        to: "/settings",
      },
    ],
  },
  {
    label: "About",
    to: "/about",
    children: [
      {
        label: "Company",
        to: "/company",
      },
      {
        label: "Team",
        to: "/team",
      },
      {
        label: "Contact",
        to: "/contact",
      },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      {
        label: "Service 1",
        to: "/service-1",
        children: [
             {
                label: "Sub-Service 1",
                 to: "/sub-service-1",
             },
            ]
      },
      {
        label: "Service 2",
        to: "/service-2",
        children: [
            {
               label: "Sub-Service 2",
                to: "/sub-service-2",
            },
           ]
      },
      {
        label: "Service 3",
        to: "/service-3",
        children: [
            {
               label: "Sub-Service 3",
                to: "/sub-service-3",
            },
           ]
      },
    ],
  },
];

export default menus;
