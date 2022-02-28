import * as React from 'react';
import '../search/style.css'
import { useNavigate } from 'react-router-dom';



    const SearchBar = ({ searchQuery, setSearchQuery }) => {
        const history = useNavigate();
        const onSubmit = e => {
            history.push(`?s=${searchQuery}`)
            e.preventDefault()
        }

        return (

            <form
                action="/"
                method="get"
                autoComplete="off"
                onSubmit={onSubmit}
            >

            </form>
        )

    };
export default SearchBar;

// const SearchBar = ({ searchQuery, setSearchQuery }) => (
//     <form action="/" method="get">
//         <label htmlFor="header-search">
//             <span className="visually-hidden">Search blog posts</span>
//         </label>
//         <input
//             value={searchQuery}
//             onInput={e => setSearchQuery(e.target.value)}
//             type="text"
//             id="header-search"
//             placeholder="Search blog posts"
//             name="s"
//         />
//         <button type="submit">Search</button>
//     </form>
// );

