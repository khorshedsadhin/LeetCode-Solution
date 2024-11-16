#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    // it returns area between two heights.
    // two pointer method should return the answer here.
    int maxArea(vector<int>& height) {
        int ans = 0;
        int left = height[0], right = height[height.size()-1];
        int l = 0, h = height.size() -1;
        while(l < h) {
            int area = calculateArea(left, right, l, h);
            ans = max(area, ans);

            if(left < right) {
                l++;
                left = height[l];
            }

            else {
                h--;
                right = height[h];
            }
        }

        return ans;
    }

    int calculateArea(int start, int end, int idxStart, int idxEnd) {
        return min(start, end) * (idxEnd - idxStart);
    }
};
