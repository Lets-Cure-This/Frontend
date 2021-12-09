import React, { FormEvent, useState } from 'react'




function SearchBar() {
    // This is considered the pattern to match against.
    const [searchTerm, setSearchTerm] = useState<string>('');
    
    // These are all the possiblilities for the search.
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    // An unordered list of elements to be displayed 
    // in the search results

    const nameList: string[] = [
        'John',
        'Paul',
        'George',
        'Ringo',
        'Jane',
        'Mary',
        'Moe',
        'Larry',
        'Curly',
        'Shemp',
        'Joe',
        'Jack',
        'Will',
        'Zack',
        'Jill',
    ]

    // Simple handler for the search input
    const handleSearch = async (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchTerm(e.currentTarget.value);
        console.log(`Search term:`, searchTerm);
    }

    // Simple handler for the search results
    const handleResults = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if(nameList.includes(searchTerm)) {
            setIsLoading(false);
            setSearchResults(nameList);
            console.log(searchResults);

        }


        // implement a simple contains feature
        // I need to replace this with a burst sort 

        // const response = await fetch(`/api/search?q=${searchTerm}`);
        // const data = await response.json();
        // setSearchResults(data);
        // setIsLoading(false);
    }
    return (
        <div>
            <form onSubmit={handleResults}>
                <label>Search</label>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="search"    
                />
                <button>Search</button>
            </form>
            {isLoading ?
                <div>Loading...</div>
            : 
                <ul>
                    {searchResults.map((ele, ind) =>  {
                        return <li key={`${ind}_${ele}`}>{ele}</li>
                    })
                    }
                </ul>
            }
        </div>
    )
}

export default SearchBar;