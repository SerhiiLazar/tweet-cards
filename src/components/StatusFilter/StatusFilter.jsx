import { Wrapper, FilterBtn } from "./StatusFilter.styled";
import { useSelector, useDispatch } from "react-redux";
import  {statusFilters}  from "../../constants/constantsFilter";
import { selectStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filterSlice";

const StatusFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectStatusFilter);

    const handleFilter = (filter) => dispatch(setStatusFilter(filter));

    return (
        <>
            <Wrapper>
                <FilterBtn
                  selected={filter === statusFilters.all}
                  onClick={() => handleFilter(statusFilters.all)}
                >all</FilterBtn>
                <FilterBtn
                selected={filter === statusFilters.follow}
                  onClick={() => handleFilter(statusFilters.follow)}
                >follow</FilterBtn>
                <FilterBtn
                  selected={filter === statusFilters.followings}
                  onClick={() => handleFilter(statusFilters.followings)}
                >followings</FilterBtn>
            </Wrapper>
            

        </>
    )
}

export default StatusFilter;