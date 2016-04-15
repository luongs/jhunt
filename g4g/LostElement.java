package g4g;

public class LostElement {
	public static int findLostEl(int[] arr1, int[] arr2){
		int sum1=0, sum2=0; 
		int missingEl = -1;
		// Error checking
		if (arr1 == null || arr2 == null)
			return missingEl;
		if (Math.abs(arr1.length - arr2.length) >1 || (arr1.length - arr2.length) == 0)
			return missingEl;
		
		for (int i=0; i< arr1.length; i++){
			sum1+= arr1[i];
		}
		for (int i=0; i<arr2.length; i++){
			sum2+=arr2[i];
		}
		
		return Math.abs(sum1-sum2);
	}
	public static void main(String[] args) {
		
		int[] arr1 = {4,1,5,9,7};
		int[] arr2 = {4,5,9,7};
		System.out.println(findLostEl(arr1, arr2));
		
		int[] arr3 = {2,3,4,5};
		int[] arr4 = {2,3,4,5,6};
		System.out.println(findLostEl(arr3, arr4));

	}

}
