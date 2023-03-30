// Группировать нечетный / четный список ссылок

export const iteration = (head) => {
    if (!head) return head;

    const result = head;
    const evenList = result.next;
    let evenHead = evenList;

    while (evenHead && evenHead.next) {
        head.next = head.next.next; // eventHead.next is referred to head.next.next
        evenHead.next = evenHead.next.next;

        head = head.next;
        evenHead = evenHead.next;
    }
    head.next = evenList;

    return result;
};
