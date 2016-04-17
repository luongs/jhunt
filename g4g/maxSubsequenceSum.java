package ctc_ch17;

public class Q17_8 {

	public static int getMaxSum(int[] arr){
		int maxSum = 0; 
		int sum = 0; 
		for (int i=0; i<arr.length; i++){
			sum+= arr[i];
			if(sum>maxSum){
				maxSum = sum;
			}
			else if (sum < 0){
				sum = 0;
			}
		}
		return maxSum;
	}
	
	public static void main(String[] args) {
		int[] a = {5,-9,6,-2,3};
		System.out.println(getMaxSum(a));
		int[] b = {2,-8,3,-2,4,-10};
		System.out.println(getMaxSum(b));
	}

}
