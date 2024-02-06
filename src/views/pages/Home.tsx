import { User } from "../../db/schemas/user.schema";
import PageLayout from "../layouts/page";
import UserCard, { UserCardLoader } from "../components/UserCard";


interface Props {
  users: User[];
}

export const HomeLoader = () => {
  console.log("Working from HOME LOADER");
  UserCardLoader();
};

export default function Home({ users }: Props) {
  return (
    <PageLayout title="Home" scriptFile="pages/home.ts">
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold my-3 text-blue-900">Home works!</h1>
        <ul>
          {users.map((user) => (
            <UserCard user={user} />
          ))}
        </ul>
        <img src="/img/signature.png" alt="" />
      </div>
    </PageLayout>
  );
}
