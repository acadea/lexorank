# Lexorank
> A simple implementation of LexoRank

LexoRank is a ranking system introduced by Atlassian JIRA.
  * <https://www.youtube.com/watch?v=OjQv9xMoFbg>

## Background
What is the best representation of an ordered list in a database?
With a dumb order number based ranking system, re-ordering a row of a
list may require updating all rows of the list in a transaction,
which is O(n).
  * <https://stackoverflow.com/questions/9536262/best-representation-of-an-ordered-list-in-a-database/49956113>
  * <https://softwareengineering.stackexchange.com/questions/195308/storing-a-re-orderable-list-in-a-database>

LexoRank makes it O(1). All you need to do is updating the re-ordered
row's order field.

## Installation

Copy Lexorank.js to your project :)


## Usage

```js

import {Lexorank} from "./Lexorank";

const lexorank = new Lexorank();

// eg. currently we have 2 items with the following rank:
// item1Rank = "a"
// item2Rank = "b"

// if we want to insert a new item between item1 and item2
// ok is a boolean, whether the operation has successfully completed
let [rank, ok] = lexorank.insert(item1Rank, item2Rank)


```