// React
import React, { FormEvent, useEffect, useState } from 'react';
// Components

// An unordered list of elements to be displayed 
// in the search results
const nameList: string[] = [
    'john',
    'paul',
    'george',
    'ringo',
    'jane',
    'mary',
    'moe',
    'larry',
    'curly',
    'shemp',
    'joe',
    'jack',
    'will',
    'zack',
]

function SearchBar() {
    // This is considered the pattern to match against.
    const [searchTerm, setSearchTerm] = useState<string>('');
    
    // These are all the possiblilities for the search.
    const [searchResultsSet, setSearchResultsSet] = useState<Set<string>>(new Set());
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    useEffect(() => {
        // console.log("Use Effect Search Term: ", searchTerm);
        // console.log('Outscope Result of Search Results Set: ', searchResultsSet);
        if(searchTerm){
            console.log('Handle Search Term: ', searchTerm);
            setSearchResultsSet(
                new Set(nameList.filter((v: string) => 
                    bitapSearchLite(v, searchTerm) != -1)
                )
            );
        }

    }, [searchTerm]);

    // Simple handler for the search input
    const handleSearch = async (e: FormEvent<HTMLInputElement>) => {       
        setSearchTerm((e.target as HTMLInputElement).value);
    }

    return (
        <div>
            <label>Search</label>
            <input 
                type="text"
                value={searchTerm}
                onChange={e => handleSearch(e)}
                placeholder="search"    
            />
            {isLoading ?
                <div>Loading...</div>
            :
                <ul>
                    {/* {displaySearchResults(searchResults)} */}
                    {displaySearchResults([...searchResultsSet])}
                </ul>}
        </div>
    )
}

// fetch('https://api.rarediseases.info.nih.gov/api/diseases')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })


// // WORKING FETCH INSTRUCTIONS FOR ORPHA
// const orphaRareDiseaseLink = 'https://api.orphacode.org/EN/ClinicalEntity';
// const orphaGetOptions = {
//     method: 'GET',
//     headers: {
//         "Accept": "application/json",
//         "Apikey": "lct"
//     }
// }

// // Fetch the data from the API provided by Orpha
// fetch(orphaRareDiseaseLink, orphaGetOptions)
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })

const displaySearchResults = (arr: string[]) => {
    // Filter out duplicates and then
    // map over the array and return a list of elements
    // to be displayed as the search results.
    return arr.filter(
        (v: string, i: number, a: string[]) => a.indexOf(v) === i).map(
            (v: string, i: number, a: string[]) => {
                return <li key={`${i}_${v}`}>{v}</li>
            }
    )
}


const bitapSearchLite = (str: string, ptrn: string) => {
    const PATTERN_MASK_LIMIT = 256;
    // Define the upper limit for the maximum allowable integer
    // for the pattern length implementation.
    const MAX_PATTERN_LENGTH = 31;

    let state = 0;
    // Data structure, specifically a Bit array. 
    // Stores the values to be checked against the pattern
    let patternMask = new Array(PATTERN_MASK_LIMIT);
    let ptrnLen = ptrn.length;

    // Due to pattern length, we can't go past a certain point
    // which is 32, or the value of a char. After 33 the pattern
    // doubles in time complexity.
    if(ptrnLen == 0 || ptrnLen > MAX_PATTERN_LENGTH) return -1;

    // Bit Masking/Multiplex
	// Initialize mask table for each letter in the pattern
    for (let i = 0; i < ptrnLen; i++) {
        // Meat and bones of the Bit Mask Muxing,
		// The pattern itself is referenced by each
		// character residing in the string. The pattern
		// at location index of variable <i> is furthermore
		// converted to its ASCII character reference equivalent.
		//
		// The mask itself is essentially acting as an
		// ASCII lookup table (as a collection <Array UINT64>) for the characters and
		// their respective reference value.
        patternMask[ptrn.charCodeAt(i)] = patternMask[ptrn.charCodeAt(i)] | (1 << i);  
    }

    // Iterate through the string and check
    // the bits against the pattern. If 
    // the bit is null then the pattern is not found.
	// State Comparison + Bit Mask Mux
    for (let i = 0; i < str.length; i++) {
        // Iterate through the string and check
        // the bits against the pattern. If 
        // the bit is null then the pattern is not found.
	    // State Comparison + Bit Mask Mux
        state = (state<<1) + 1;

        state = state & patternMask[str.charCodeAt(i)];
        if((state & (1 << (ptrnLen - 1))) != 0) {
            console.log('Pattern Found!');
            return i - ptrnLen + 1;
        }
    }

    console.log('failed to find pattern');
    return -1;
}



export default SearchBar;
