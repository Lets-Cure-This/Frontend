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

        console.log(`Bitap Results:`, bitapSearch(nameList[0], searchTerm));

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

// // This is a very simple implementation of the bitap algorithm.
// const bitapSearch = (str: string, ptrn: string) => {
//     // Define the max upper limit for pattern masking.
//     const PATTERN_MASK_LIMIT = 128; 
//     // Define the upper limit for the maximum allowable integer
//     // for the pattern length implementation.
//     const MAX_LENGTH = 32;
//     // Due to pattern length, we can't go past a certain point
//     // which is 32, or the value of a char. After 33 the pattern
//     // doubles in time complexity.
//     let ptrnLen: number = ptrn.length;
//     // Data structure, specifically a Bit array. 
//     // Stores the values to be checked against the pattern
//     let R;

//     // used to turn bits on and off in the bit array.
//     let patternMask: number[] = new Array(PATTERN_MASK_LIMIT);

//     // conditional check for null at ind 0
//     if(ptrn[0] === '\0')  return 0;
//     // Conditional for max length 32
//     if(ptrnLen > 31) return -1;
    
//     // Initialize the value of <Bit[]> R
//     // (~1)<<1 allows the pattern to be matched
//     // against the input string. If we were to use
//     // the following <R = ~ 1> then the pattern would
//     // not be able to be matched against the input string.
//     R = (~1) << 1;
    
//     // Begin the bit array with all bits on
//     // and set the first bit to on.
//     for(let i = 0; i <= PATTERN_MASK_LIMIT; ++i) {
//         patternMask[i] = ~0; // set all bits to 1
//     }

//     // Iterate across the entire pattern and turn
//     // off the bits that are not in the pattern.
//     for(let i = 0; i < ptrnLen; ++i) {
//         patternMask[ptrn[i]] &= ~(1 << i);
//         console.log(`patternMask[${ptrn[i]}]`, patternMask[ptrn[i]]);
//     }

//     // Iterate through the string and check
//     // the bits against the pattern. If 
//     // the bit is null then the pattern is not found.
//     for(let i = 0; str[i] !== '\0'; ++i) {
//     	R |= patternMask[str[i]];
// 		R <<= 1;

//         console.log('Val of R: ', R)
// 		if (0 == (R & (1 << ptrnLen))) return (i - ptrnLen) + 1;
//     }

//     console.log('failed to find pattern');
//     return -1;
// }

export default SearchBar;