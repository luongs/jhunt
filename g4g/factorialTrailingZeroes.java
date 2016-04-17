package ctc_ch17;

public class Q17_3 {
	
	public static long computeFactorial(int n){
		int mult = n-1;
		if (n<=0) return 0;
		long res = n;
		while (mult > 0){
			res *= mult;
			mult--;
		}
		return res;
	}
	
	public static int countTrailingZeroes(int n){
		long fac = computeFactorial(n);
		long temp = fac;
		int trailingZeroes = 0;
		System.out.println("Factorial value: "+fac);
		
		while (temp>0){
			if (temp%10 == 0 ){
				trailingZeroes++;
			}
			else {
				return trailingZeroes;
			}
			temp = temp/10;
		}
		return trailingZeroes;
	}
	public static void main(String[] args) {
		System.out.println(countTrailingZeroes(20));
	}

}
