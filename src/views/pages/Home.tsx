import { User } from "../../db/schemas/user.schema"
import PageLayout from "../layouts/page"


interface Props {
    users: User[]
}

interface UserCardProps {
    user: User
}

const UserCard = ({ user }: UserCardProps) => (
    <li>
        <strong>Name</strong>: {user.name}
        <br />
        <strong>Surname</strong>: {user.surname}
        <br />
        <strong>Role</strong>: {user.role}
    </li>
)

export default function Home({ users }: Props) {
    return (
        <PageLayout title="Home" scriptFile="pages/home.ts">
            <div class="w-90 container mx-auto p-5">
                <h1>Home works!</h1>
                <ul>
                    {
                        users.map((user) => <UserCard user={user} />)
                    }
                </ul>
                <img src="/img/signature.png" alt="" />
            </div>
        </PageLayout>
    )
}