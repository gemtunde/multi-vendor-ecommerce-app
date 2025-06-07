const { signOut } = require("next-auth/react");

export const handleLogout = async () => {
  await signOut();
};
