package ch4_recursion;

public class RecursiveSum {
	public static int sum(int n){
		if (n==0)
			return n;
		else 
			return n+sum(n-1);
	}
	public static void main(String[] args) {
		System.out.println(sum(4));
	}

}
