import { Alpine } from "alpinejs";

const userCardData = () => ({
    count: 0,
    inc(step = 1) {
        this.count += step
    }
})

export const UserCardLoader = ({ data }: Alpine) => {
    data('userCard', userCardData)
};