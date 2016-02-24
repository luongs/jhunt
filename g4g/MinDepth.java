package g4g;

/* http://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/ */
public class MinDepth {
	
	public class Node{
		int data; 
		Node left, right;
		
		public Node(int data){
			this.data = data;
			left = null;
			right = null;
		}
	}
	
	Node root;
	
	public int minimumDepth(Node node){
		if (node == null){
			return -1;
		}
		
		// Reached leaf node
		if (node.left == null && node.right == null)
			return 1;

		// Check right subtree if left node is empty
		if (node.left == null)
			return minimumDepth(node.right) + 1;
		
		// Same as above if right node empty
		if (node.right == null)
			return minimumDepth(node.left) + 1;
		
		// Get minimum of left or right subtree
		return Math.min(minimumDepth(node.left), minimumDepth(node.right));
	}
	

	public static void main(String[] args) {
		MinDepth t = new MinDepth();
		t.root = t.new Node(1);
		t.root.left = t.new Node(2);
		t.root.right = t.new Node(3);
		t.root.left.left = t.new Node(4);
		t.root.right.right = t.new Node(5);
		
		System.out.println("The min depth of binary tree is: "+t.minimumDepth(t.root));
	}

}
