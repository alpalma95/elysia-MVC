import { User } from "../../../db/schemas/user.schema";

interface UserCardProps {
  user: User;
  step?: number;
}

export default function UserCard({ user, step }: UserCardProps) {
  return (
    <li class="pl-3 mb-3 flex gap-5 items-center" x-data="userCard">
      <div>
        <strong class="text-blue-900">Name</strong>: {user.name}
        <br />
        <strong class="text-blue-900">Surname</strong>: {user.surname}
        <br />
        <strong class="text-blue-900">Role</strong>: {user.role}
      </div>
      <div class="h-fit">
        <button class="px-4 py-2 border-2" x-on:click={`inc(${step || ''})`}>
          <span class="block text-xl font-bold" x-text="count"></span>
        </button>
      </div>

    </li>
  );
}
