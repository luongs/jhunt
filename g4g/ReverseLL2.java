package g4g;

public class ReverseLL2 {

	public static class Node {
		Node next;
		int data; 
		
		public Node(Node next, int data){
			this.next = next;
			this.data = data;
		}
		
		public String toString(){
			return "Data: "+data;
		}
		
	}
	
	public static class LinkedList {
		Node head; 
		
		public LinkedList(){
			head = null;
		}
		
		public void addToHead(int data){
			head = new Node(head, data);
		}
		
		public String toString(){
			Node temp = head;
			StringBuilder sb = new StringBuilder();
			while (temp!=null){
				sb.append(temp.data);
				sb.append("->");
				temp = temp.next;
			}
			return sb.toString();
		}
	}
	
	public static LinkedList reverseLL(LinkedList ll){
		Node prev = null;
		Node next = null;
		Node cur = ll.head;
		
		while (cur != null){
			next = cur.next;
			cur.next = prev;
			prev = cur;
			cur = next;
		}
		ll.head = prev;
		return ll;
	}
	
	public static void main(String[] args) {
		LinkedList a = new LinkedList();
		a.addToHead(4);
		a.addToHead(3);
		a.addToHead(2);
		a.addToHead(1);
		System.out.println("Current linked list: "+a);
		System.out.println("Reversed linked list:"+reverseLL(a));
		

	}

}
