package g4g;

import Ch3_Fundamental_Data_structures.SinglyLinkedList;
import Ch3_Fundamental_Data_structures.SinglyLinkedList.Node;

public class ListCmp_Optimized {
	
	public static int cmpList(Node<Character> lst1, Node<Character> lst2){
		Node<Character> node1 = lst1;
		Node<Character> node2 = lst2;
		
		while (node1!=null && node2!=null && node1.getElement() == node2.getElement()){
			node1 = node1.getNext();
			node2 = node2.getNext();
		}
		
		// if node1.data != node2.data
		if (node1!=null && node2!=null){
			return (node1.getElement()> node2.getElement()?1:-1);
		}

		//if one list is bigger than the other
		if(node1!=null && node2==null){
			return 1;
		}
		else if (node1==null && node2!=null){
			return -1;
		}
		// All elements in both lists are equal
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
