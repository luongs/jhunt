package ctc_ch3;

import java.util.ArrayList;
import java.util.Stack;

public class StackSet {
	ArrayList<Stack> stacks = new ArrayList<Stack>();
	int MAX_SIZE = 3;

	public Stack getLastStack(){
		return stacks.get(stacks.size()-1);
	}
	
	public boolean isFull(){
		return (getLastStack().size()<MAX_SIZE);
	}
	
	public void push(int value){
		if (stacks.size() == 0){
			Stack stk = new Stack();
			stacks.add(stk);
		}
		
		Stack last = getLastStack();
		
		if (last!=null && !isFull()) 
			last.push(value);
		else{
			Stack stk = new Stack();
			stk.push(value);
			stacks.add(stk);
			System.out.print(stacks.size());
		}
	}
	
	public int pop() {
		Stack last = getLastStack();
		
		int value = (int) last.pop();
		if (last.size() == 0 )
			stacks.remove(stacks.size()-1);
		return value;
	}
	
	public String toString(){
		int res= (int) (getLastStack().peek());
		return String.valueOf(res);
	}
	
	public static void main(String[] args) {
		StackSet stk_set = new StackSet();
		stk_set.push(1);
		stk_set.push(2);
		stk_set.push(3);
		stk_set.push(4);
		stk_set.push(5);
		stk_set.pop();
		System.out.println(stk_set);
	}

}
