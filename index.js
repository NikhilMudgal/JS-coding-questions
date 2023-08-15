import { combinationOne } from './Recursion/combination-sum-1';
// var items = combinationOne([2,3,6,7], 7);

import { combinationTwo } from './Recursion/combination-sum-2';
// var items = combinationTwo([1,1,1,2,2], 4);

import { subsetSumOne } from './Recursion/subset-sum-1';
// var items = subsetSumOne([3,1,2]);

import { subSetSumTwo } from './Recursion/subset-sum-2';
var items = subSetSumTwo([1,2,2,3,2,3]);
const opElement = document.getElementById("output");
opElement.innerHTML  = items;