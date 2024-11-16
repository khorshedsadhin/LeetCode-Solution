#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    // it returns area between two heights.
    // two pointer method should return the answer here.
    int maxArea(vector<int>& height) {
        int ans = 0;
        int l = 0, h = height.size() -1;

        while(l < h) {
            int area = min(height[l], height[h]) * (h - l);
            ans = max(area, ans);

            if(height[l] < height[h]) {
                l++;
            }

            else if(height[h] < height[l]) {
                h--;
            }

            // if both points are equal change the both index
            else {
                l++;
                h--;
            }
        }

        return ans;
    }
};
