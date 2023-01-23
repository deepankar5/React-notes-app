import { MdSearch } from "react-icons/md"

const Search = ({handleSetSearchText}) => {
    return(
        <div className="search">
            <MdSearch className="search-icon" size="1.3em"/>
            <input type="text" placeholder="type text to search...." onChange={(event) =>handleSetSearchText(event.target.value) }/>
        </div>
    )
}
export default Search