import React, { useState } from 'react'

function Navbar({handleSearch}) {

    const categories = ["general", "business", "entertainment", "health", "science", "sports", "technology"];

    let [search,setSearch] = useState('')

    return (
       <nav className="navbar">
            <div className="logo">NEWS</div>

            <div className="categories">
                {categories.map(category => (
                    <button key={category} className="category-btn">
                        {category}
                    </button>
                ))}
            </div>

            <div className="search-box">
                <input type="text" placeholder="Search" value={search} onChange={e=>setSearch(e.target.value)} />
                <button onClick={()=>handleSearch(search)} className="search-btn">🔍</button>
            </div>
        </nav>
    )
}

export default Navbar