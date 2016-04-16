package g4g;


public class MergeSortedLinkedList {
	public static class Node {
		Node next;
		int data;
		
		public Node(Node next, int data){
			this.next = next; 
			this.data = data;
		}
		
		public String toString(){
			return "Node val: "+data;
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
		
		public Node getHead(){
			return head;
		}
		
		public String toString(){
			Node temp = head;
			
			StringBuilder sb = new StringBuilder();
			while (temp != null){
				sb.append(temp.data);
				sb.append("->");
				temp = temp.next;
			}
			return sb.toString();
		}
	}
	
	public static LinkedList mergeLinkedList(Node aNode, Node bNode){
		LinkedList res = new LinkedList();
		
		while (aNode!=null || bNode!=null){
			if (aNode==null){
				res.addToHead(bNode.data);
				bNode = bNode.next;
			}
			else if (bNode == null){
				res.addToHead(aNode.data);
				aNode = aNode.next;
			}
			else {	// aNode and bNode not null
				if (aNode.data < bNode.data){
					res.addToHead(aNode.data);
					aNode = aNode.next;
				}
				else {
					res.addToHead(bNode.data);
					bNode = bNode.next;
				}
			}
		}
		return res;
	}

	public static void main(String[] args) {
		LinkedList a = new LinkedList();
		LinkedList b = new LinkedList();
		
		a.addToHead(40);
		a.addToHead(15);
		a.addToHead(10);
		a.addToHead(5);
		
		System.out.println(a);
		
		b.addToHead(20);
		b.addToHead(3);
		b.addToHead(2);
		System.out.println(b);
		LinkedList res = mergeLinkedList(a.getHead(), b.getHead());
		System.out.println(res);
		
		LinkedList c = new LinkedList();
		LinkedList d = new LinkedList();
		d.addToHead(20);
		d.addToHead(3);
		d.addToHead(2);
		LinkedList res2 = mergeLinkedList(c.getHead(), d.getHead());
		System.out.println(res2);
		
	}
}
