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
                </ul>
            }
        </div>
    )
}

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

// This is a very simple implementation of the bitap algorithm.
const bitapSearch = (str: string, ptrn: string) => {
    console.log(str, ptrn);
    // Define the max upper limit for pattern masking.
    const PATTERN_MASK_LIMIT = 256; 
    // Define the upper limit for the maximum allowable integer
    // for the pattern length implementation.
    const MAX_PATTERN_LENGTH = 31;

    
    let state: number = 0;
    // Data structure, specifically a Bit array. 
    // Stores the values to be checked against the pattern
    let patternMask: number[] = new Array(PATTERN_MASK_LIMIT);
    // Due to pattern length, we can't go past a certain point
    // which is 32, or the value of a char. After 33 the pattern
    // doubles in time complexity.
    let ptrnLen: number = ptrn.length;

    // Conditional for max length 32
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
		// 
		// This is actually fucking genius whoever created this.
		// 
		// In terms of pattern[i] being 'w'(ASCII Equivalent: 119)
		// // 1. The value of mask at index 119 
		// // 2. Equals assign symbol
		// // 3. The value of mask at index 119
		// // 4. Bitwise OR
		// // // * Breakdown of what Bitwise OR <|> is :
		// // // // Does a read comparison of both operands and
		// // // // checks them at the bit level, comparing which
		// // // // of the bits at their respective checked locations
		// // // // have a 0 or a 1. The result is then combined,
		// // // // forming a new bit sequence of all of the 1's in 
		// // // // their respective location.
		// // // // // Example f(1 | 2 === 3 ) =>
		// // // // // // 1 = 0001
		// // // // // // 2 = 0010
		// // // // // // // BITWISE OR JOIN OCCURS HERE
		// // // // // // 3 = 0011
		// // 5. Shifts the 1 bit over to the left by 1 place
		// // // Examples for 3 iterations:
		// // // Iteration 1 Value of i starts at 0
		// // // // Bit: 0001
		// // // // Char: 1
		// // // Iteration 2 Value of i incremented to 1
		// // // // Bit: 0010
		// // // // Char: 2
		// // // Iteration 3 Value of i incremented to 2
		// // // // Bit: 0100
		// // // // Char: 4
		// Labels for reference above.
		// 1.            2.       3.				4.		  5.
        patternMask[ptrn.charCodeAt(i)] = patternMask[ptrn.charCodeAt(i)] | (1 << i);
    }

    // Iterate through the string and check
    // the bits against the pattern. If 
    // the bit is null then the pattern is not found.
	// State Comparison + Bit Mask Mux
	for (let i = 0; i < str.length; i++) {
		// Update state by shifting it and masking with the record from table
		state = state<<1 + 1;

		// The & operator checks at the bit level
		// placements which share similar 1 values
		// // Example f(1 & 3 === 1 ) =>
		// // // 1 = 0001
		// // // 3 = 0011
		// // // // BITWISE AND JOIN
		// // // 1 = 0001
		//
		// Explanation of the logic below
		// state = state & mask[text[i]];
		// // 1. Value of state
		// // 2. Equals Assign Operator
		// // 3. Value of state
		// // 4. Bitwise AND Operator
		// // 5. The value of mask at index text[i]*
		// // // *Quick note on this <text[i]> is 
		// // // actually reprensed as the ASCII code
		// // // in this scenario and acting as the 
		// // // value of the lookup table.
		// 1. 2. 3.   4.      5.
		state = state & patternMask[Number(str[i])];
    
        if(Number(state&(1<<(ptrnLen-1))) != 0) {
            return i - ptrnLen + 1;
        }
    }
    console.log('failed to find pattern');
    return -1;
}

const bitapSearchLite = (str: string, ptrn: string) => {
    // console.log('BITAP SEARCH INVOKE: ', str, ptrn);

    const PATTERN_MASK_LIMIT = 256;
    const MAX_PATTERN_LENGTH = 63;

    let state = 0;
    let patternMask = new Array(PATTERN_MASK_LIMIT);
    let ptrnLen = ptrn.length;

    if(ptrnLen == 0 || ptrnLen > MAX_PATTERN_LENGTH) return -1;

    for (let i = 0; i < ptrnLen; i++) {
        patternMask[ptrn.charCodeAt(i)] = patternMask[ptrn.charCodeAt(i)] | (1 << i);  
    }

    for (let i = 0; i < str.length; i++) {
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