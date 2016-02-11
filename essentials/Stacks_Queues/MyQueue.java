package ctc_ch3;

import java.util.Iterator;
import java.util.Stack;

public class MyQueue<E> {
	
	Stack<E> newest = new Stack<>();
	Stack<E> oldest = new Stack<>();
	
	public void enqueue(E value) {
		newest.push(value);
	}
	
	public E dequeue() {
		// lazy pop 
		shiftStacks();
		return oldest.pop();
	}
	
	public E peek() {
		// lazy peek
		shiftStacks();
		return oldest.peek();
	}
	
	public void shiftStacks() {
		// performed for lazy peek and pop
		// no need to shiftstack for each pop/peek
		if (oldest.isEmpty()) {
			while (!newest.isEmpty())
				oldest.push(newest.pop());
			}
	}
	
	public int size() {
		return newest.size() + oldest.size();
	}
	
	public String toString(){
		Iterator<E> newIt = newest.iterator();
		Iterator<E> oldIt = oldest.iterator();
		StringBuilder sb = new StringBuilder();
		
		while (newIt.hasNext()) {
			sb.append(newIt.next());
		}
		while (oldIt.hasNext()) {
			sb.append(oldIt.next());
		}
		
		return sb.toString();
	}

	public static void main(String[] args) {
		MyQueue<Integer> q = new MyQueue<>();
		q.enqueue(0);
		q.enqueue(1);
		q.enqueue(2);
		q.dequeue();
		
		System.out.println(q);
		q.dequeue();
		System.out.println(q);
		System.out.println("Size: "+q.size());
		
	}

}
