package jhunt;

public class ReverseLL {
	private static class Node{
		int data; 
		Node next; 
		
		public Node(int data, Node next){
			this.data = data;
			this.next = next;
		}
		
		public String toString(){
			return "Data: "+data;
		}
	}
	
	public static Node createLinkedList(int size){
		Node head=null;
		int index = size - 1;
		while(index>= 0){
			head = new Node(index, head);
			index--;
		}
		return head;
	}
	
	public static Node reverseLL(Node head){
		// Initialize first reverse
		Node current = head; 
		Node prev = null;
		Node follow = current.next;
		current.next = prev;
		
		System.out.println("Follow "+follow);
		
		while (follow != null){
			prev = current;
			current = follow;
			follow = follow.next;
			current.next = prev;
		}
		
		// help garbage collection
		follow = null;
		return current;
	}
	
	
	public static void main(String[] args) {

		Node head = createLinkedList(4);
		Node runner = head;
		System.out.println("Original linked list");
		while(runner!=null){
			System.out.println(runner);
			runner = runner.next;
		}

		
		System.out.println("Reverse linked list");
		runner = reverseLL(head);
		// head needs to be updated since its old value is currently @ end position
		head = runner;
		while(runner!=null){
			System.out.println(runner);
			runner = runner.next;
		}

		
	}

}
