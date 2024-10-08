/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        int len = 1;
        ListNode* current = head;

        while (current->next != nullptr) {
           len++;
           current = current->next;
        }
        current = head;

        len = (len/2) + 1;
        for(int i = 1; i < len; i++) {
            current = current->next;
        }

        return current;
    }
};
