package jhunt;

public class Josephus {
	
	// Create minimal class Node to use
	private static class Node {
		Node next; 
		int data;
		
		// create constructor
		public Node(int data, Node next){
			this.data = data;
			this.next = next;
		}
		
		
		public String toString(){
			return "Data: "+data;
		}
	}
	
	public static void jp(int k){
		
		// start at zero 
		int index = 0;
		// initialize first node
		Node first = new Node(index,null);
		first.next = null;
		first.data = index;
		Node head = first;

		index++;
		
		// initialize list
		while (index<k){
			head = new Node(index, head);
			index++;
		}
		// make it circular by connecting first to head
		first.next = head;
		
		for (int i=0;i<k*2; i++){
			System.out.println(head);
			head = head.next;
		}
		
		
		
		// remove every second one until size = 1 
	}
	
	public static void main(String[] args) {
		jp(4);
		
	}
}
