import { User } from "../../db/schemas/user.schema";

interface UserCardProps {
  user: User;
}

export const UserCardLoader = () => {
  console.log("Working from USERCARD LOADER");
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <li class="pl-3 mb-3">
      <strong class="text-blue-900">Name</strong>: {user.name}
      <br />
      <strong class="text-blue-900">Surname</strong>: {user.surname}
      <br />
      <strong class="text-blue-900">Role</strong>: {user.role}
    </li>
  );
}
