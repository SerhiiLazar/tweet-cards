import TweetCardsItem from "../TweetCardsItem/TweetCardsItem";
import {UserList, UserCard} from "../TweetCardsList/TweetCardsList.styled"
const TweetCardsList = ({users}) => {
    return (
        <>
            <UserList>
            {users.map((user) => (
                <UserCard key={user.id}>
                    <TweetCardsItem user={user} />
                </UserCard>
            ))}
            </UserList>
        </>
    )
}

export default TweetCardsList;