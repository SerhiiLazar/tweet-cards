import { useDispatch } from "react-redux";
import bgImage from "../../img/bgImage.png";
import logoImage from "../../img/logoImage.png"
import { fetchFollow } from "../../redux/operations";
import { BgImage, LogoImage, CardUser, WrapperAvatar, AvatarImage, Tweet, Follower, Button } from "./TweetCardsItem.styled";

const TweetCardsItem = ({ user: {id, user, tweets, followers, avatar, follow}}) => {
    const dispatch = useDispatch();

    const handleFollow = () => {
        dispatch(fetchFollow(id));
    }
    return (
        <>  
            <BgImage src={bgImage} alt="avatar" />
            <LogoImage src={logoImage} alt="logo" />
            <CardUser />
            <WrapperAvatar>
                <AvatarImage src={avatar} alt={`Avatar of ${user}`}/>
            </WrapperAvatar>
            <Tweet>{`${tweets.toLocaleString("en-US")} tweets`}</Tweet>
            <Follower>{`${(followers + 100000).toLocaleString("en-US")} followers`}</Follower>
            <Button follow={follow} onClick={handleFollow}>{follow ? "Following" : "Follow"}</Button>
        </>
    )
}

export default TweetCardsItem;