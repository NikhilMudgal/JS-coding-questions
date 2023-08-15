import { combinationOne } from './Recursion/1.combination-sum/combination-sum-1';
// var items = combinationOne([2,3,6,7], 7);

import { combinationTwo } from './Recursion/1.combination-sum/combination-sum-2';
// var items = combinationTwo([1,1,1,2,2], 4);

import { subsetSumOne } from './Recursion/2.subset-sum/subset-sum-1';
// var items = subsetSumOne([3,1,2]);

import { subSetSumTwo } from './Recursion/2.subset-sum/subset-sum-2';
// var items = subSetSumTwo([1,2,2,3,2,3]);

import { permutationOne } from './Recursion/3.all-permutations/all-permutations-1';
var items = permutationOne([1,2,3]);

const opElement = document.getElementById("output");
opElement.innerHTML  = items;