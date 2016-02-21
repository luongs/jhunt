package g4g;

import Ch3_Fundamental_Data_structures.SinglyLinkedList;
import Ch3_Fundamental_Data_structures.SinglyLinkedList.Node;

/*
 * http://www.geeksforgeeks.org/compare-two-strings-represented-as-linked-lists/
 */
public class ListCmp {
	
	public static int cmpList(Node<Character> lst1, Node<Character> lst2){
		Node<Character> tmp1 = lst1;
		Node<Character> tmp2 = lst2;
		
		while (tmp1!=null || tmp2!=null) {
			// when one list is bigger than another
			if (tmp1 == null)
				return -1;
			else if (tmp2 == null)
				return 1;
			// both lists still have values
			if(tmp1.getElement() > tmp2.getElement())
				return 1;
			else if (tmp1.getElement() < tmp2.getElement() )
				return -1;
			else{
				tmp1 = tmp1.getNext();
				tmp2 = tmp2.getNext();
			}
		}
		return 0;
	}
	
	public static void main(String[] args) {
		
		SinglyLinkedList<Character> lst1 = new SinglyLinkedList<>();
		SinglyLinkedList<Character> lst2 = new SinglyLinkedList<>();
		
		// lst1: a>b>c
		lst1.addToFirst('a');
		lst1.addToTail('b');
		lst1.addToTail('c');
		// lst2: a>b
		lst2.addToFirst('a');
		lst2.addToTail('b');
		
		System.out.println("Comparison result: "+cmpList(lst1.getHead(), lst2.getHead()));
	}

}
