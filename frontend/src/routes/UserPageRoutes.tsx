import UserManager from "@screens/manageusers/usersHomepage";

const UserRoutes = {
  path: "users",
  children: [
    {
      path: "",
      element: <UserManager />,
    },
  ],
};

export { UserRoutes };
