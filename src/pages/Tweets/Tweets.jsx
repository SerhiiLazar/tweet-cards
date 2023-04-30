import TweetCardsList from "../../components/TweetCardsList/TweetCardsList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/operations";
import { selectUserFilter, selectIsLoading, selectError } from "../../redux/selectors";
import { LoadMore } from "./Tweets.styled";
import Loader from "../../components/Loader/Loader";
import BackLink from "../../components/BackLink/";
import { useLocation } from "react-router-dom";

const Tweets = () => {
    const [visible, setVisible] = useState(8);
    const dispatch = useDispatch();
    const users = useSelector(selectUserFilter);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const location = useLocation();
    const backlink = location.state?.from ?? "/";

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const showMoreUsers = () => {
        setVisible((prevValue) => prevValue + 8)
    }

    return (
        <>  
            <BackLink to={backlink}>Go Back</BackLink>
            <TweetCardsList users={users.slice(0, visible)}/>
            {isLoading && !error && <Loader/>}
            {visible < users.length && (
                <LoadMore onClick={showMoreUsers}>Load more</LoadMore>
            )}
        </>
    )
}

export default Tweets;