package ctc_ch3;

import java.util.Iterator;
import java.util.Stack;

public class AscStack {
	
	public static Stack<Integer> rearrange(Stack<Integer> orig) {
		Stack<Integer> res = new Stack<Integer>();
		int current;
		
		while (!orig.isEmpty()){
			current = orig.pop();
			while(!res.isEmpty() && current>res.peek()){
				orig.push(res.pop());
			}
			// Value at current either <= to topmost res value
			res.push(current);
		}
		
		return res;
	}
	
	public static void main(String[] args) {
		Stack<Integer> test = new Stack<>();
		Stack<Integer> res = new Stack<>();
		test.push(2);
		test.push(3);
		test.push(4);
		test.push(1);
		
		res = rearrange(test);
		Iterator<Integer> resIt = res.iterator();
		
		while (resIt.hasNext()){
			System.out.println(resIt.next());
		}
		
	}

}
