import { User } from "../../db/schemas/user.schema";

interface UserCardProps {
  user: User;
}

export const UserCardLoader = () => {
  console.log("Working from USERCARDLOADER");
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <li class="pl-3 mb-3">
      <strong>Name</strong>: {user.name}
      <br />
      <strong>Surname</strong>: {user.surname}
      <br />
      <strong>Role</strong>: {user.role}
    </li>
  );
}
