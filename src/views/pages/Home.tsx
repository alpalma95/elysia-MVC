import { User } from "../../db/schemas/user.schema";
import PageLayout from "../layouts/page";
import UserCard from "../components/UserCard/UserCard";


interface Props {
  users: User[];
}

export default function Home({ users }: Props) {
  return (
    <PageLayout title="Home" scriptFile="pages/home.ts">
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold my-3 text-blue-900">Home works!</h1>
        <ul>
          {users.map((user, index) => (
            <UserCard user={user} step={index + 1}/>
          ))}
        </ul>
        <img class="w-40" src="/img/signature.png" alt="" />
      </div>
    </PageLayout>
  );
}
