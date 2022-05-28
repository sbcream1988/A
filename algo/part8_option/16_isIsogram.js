/*
An isIsogram is a word that has no repeating letters, consecutive or non-consecutive
isIsogram 은 이어져 있든 이어져있지 않든 같은 문자가 반복되지 않는 단어를 말합니다.

Implement a function that determines whether a string that contains only letters is an isogram
문자열이 주어졌을때 해당 문자열이 isogram인지 확인해주는 함수를 작성하세요.

Assume the empty string is an isogram Ignore letter case
빈 문자열은 isogram으로 간주합니다. 대소문자는 무시하세요.
*/
isIsogram('Dermatoglyphics'); // true
isIsogram('aba'); // false
isIsogram('moOse'); // false // -- ignore letter case
