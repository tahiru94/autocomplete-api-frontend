# autocomplete-api-frontend
Frontend for the Autocomplete API

## Installation
`npm install`

## Running the Project
`npm start`

## Overview

This frontend calls the autocomplete API (hosted through a Docker container, at `http://127.0.0.1:8080/`), and displays the results. The API takes the following parameters:

| Parameter | Explanation |
| --------- | ----------- |
| term | The search term to be used for the query |

Thus, the query becomes: `http://127.0.0.1:8080/?search={term}` as per the table above.

## Operations
The autocomplete API results go through a few rounds of filtering and sorting:

1. Filter the original search results, based on a close match on either the name or email.
2. Sort the remaining results on a similarity based on the email, and then a similarity based on the the name.

## View
The left side of the view contains a search input and a list of the results, which are populated as the user types.

The right side of the view contains a detail view card, which shows up when a name is selected from the list.

If the search is fully cleared, the detail view card is removed.

## Todo / Improvements / Last Thoughts
* Improve the sorting functionality, to make sure that the email sorting takes precedence over the name sorting, except if the similarity match is `1` (`100%`). The current logic can definitely use some refactoring, but accomplishes the sorting to an extent.
* Improve the rendering of the list during subsequent API calls - add a possible caching mechanism to not have to query the API again, if the search results haven't changed / have been queried for before.
* Improve the initial filtering, to make sure that relevant search results are returned (improve the logic instead of just using `indexOf`).