#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numSet(nums.begin(), nums.end());
        int longest = 0;

        for(auto num : numSet) {
            if(numSet.find(num-1) == numSet.end()) { // if (num - 1) is not in the set
                int length = 1;
                while(numSet.find(num + length) != numSet.end()) {
                    length++;
                }

                longest = max(length, longest);
            }
        }

        return longest;
    }
};
