/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    // GOT TIME LIMIT
    // struct ListNode* dummy = (struct ListNode*)malloc(sizeof(struct ListNode));
    // struct ListNode* current = dummy;
    // int carry = 0;

    // while (l1 || l2 || carry) {
    //     int sum = carry;

    //     if (l1) {
    //         sum += l1->val;
    //         l1 = l1->next;
    //     }

    //     if (l2) {
    //         sum += l2->val;
    //         l2 = l2->next;
    //     }

    //     carry = sum / 10;
    //     sum %= 10;

    //     if (!current->next) {
    //         current->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    //         current->next->next = NULL;
    //     }

    //     current->next->val = sum;
    //     current = current->next;
    // }

    // struct ListNode* result = dummy->next;
    // free(dummy);

    // return result;
    struct ListNode *t1 = l1, *t2 = l2;
    struct ListNode *head=NULL, *t3=NULL;
    int sum=0;
    
    while(t1 || t2 || sum){
        if(t1){
            sum += t1->val;
            t1 = t1->next;
        }if(t2){
            sum += t2->val;
            t2 = t2->next;
        }
        struct ListNode *new = malloc(sizeof(struct ListNode));
        new->val = sum%10;
        sum /= 10;
        if(head){
            t3->next = new;
            t3 = new;
        }else
            head = t3 = new;
    }
    t3->next = NULL;
    return head;
}
