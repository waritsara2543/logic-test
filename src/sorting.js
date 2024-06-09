class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var sortList = function(head) {
   if (!head) return head;

   let pointer = head;
   let val = []

   while (pointer){
    val.push(pointer.val)
    pointer = pointer.next
   }

   val.sort((a, b) => a - b)
   let counter = 0;
   pointer = head;

   while (pointer) {
    pointer.val = val[counter]
    pointer = pointer.next
    counter++
   }

   return head;

};

// Helper function to print the list (for testing)
function printList(head) {
  let curr = head;
  const result = [];
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
    console.log(result.join(" -> "));
}

// Example Usage:
// Create a linked list: 4 -> 2 -> 1 -> 3 -> 5 -> 6
let head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6))))));

// Sort the linked list
let sortedHead = sortList(head);

// Print the sorted linked list
printList(sortedHead);
