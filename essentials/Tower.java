package jhunt;

import java.util.Stack;

/**
 * Implementation of Tower of Hanoi problem recursively
 *
 *
 */
public class Tower {
	private Stack<Integer> disks;
	private int index;
	
	public Tower(int i) {
		disks = new Stack<Integer>();
		index =i;
	}
	
	public int index() {
		return index;
	}
	
	public void add(int d) {
		if (!disks.isEmpty() && disks.peek() <= d) {
			System.out.println("Error placing disk " + d);
		}
		else
			disks.push(d);
	}
	
	public void moveTopTo(Tower t) {
		int top = disks.pop();
		t.add(top);
		System.out.println("Move disk "+top+" from "+index()+" to "+t.index());
	}
	
	public void moveDisks(int n, Tower dest, Tower aux) {
		if (n>0) {
			moveDisks(n-1, aux, dest);
			moveTopTo(dest);
			aux.moveDisks(n-1, dest, this);
		}
	}
	
	public static void main(String[] args) {
		int n = 3;
		Tower[] towers = new Tower[n];
		
		// 3 set since there's 3 poles in Tower of Hanoi
		for (int i=0; i<3; i++) {
			towers[i] = new Tower(i);
		}
		
		// populate first tower[0]
		for (int i = n-1; i>=0; i--){
			towers[0].add(i);
		}
		
		towers[0].moveDisks(n, towers[2], towers[1]);
	}

}
