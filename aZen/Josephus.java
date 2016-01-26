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

	// k is the size of the ll
	// skip is the index where removal will take place
	public static void jp(int k, int skip){
		
		int index = k-1;
		// initialize first node - key to circular list
		Node first = new Node(index,null);
		first.next = null;
		first.data = index;
		Node head = first;

		index--;
		
		// initialize list
		while (index>=0){
			head = new Node(index, head);
			index--;
		}
		// make it circular by connecting first to head
		first.next = head;
		
		// print it out
		/*
		for (int i=0;i<k*2; i++){
			System.out.println(head);
			head = head.next;
		}
		*/

		int size = k;
		int skipIndex = skip-1;
		// remove every second one until size = 1
		while (size > 1){
			
			if (skipIndex>0){
				head = head.next;
				skipIndex--;
			}
			else{
				// remove adjacent node
				head.next = head.next.next;
				head = head.next;
				size--;
				skipIndex = skip-1;
			}
			
		}
		
		System.out.println(head);

	}
	
	public static void main(String[] args) {
		jp(5,2);
		
	}
}
