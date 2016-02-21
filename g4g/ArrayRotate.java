package g4g;

/*
 * http://www.geeksforgeeks.org/array-rotation/
 */
public class ArrayRotate {
	public static int[] rotate(int[] arr, int d, int n){
		if (arr == null)
			return null;
		int[] res = new int[d];
		
		for (int i=0; i<d; i++){
			int newIndex = i-n;
			if(newIndex<0)
				newIndex = newIndex+d;
			res[newIndex] = arr[i];
		}
		
		return res;
	}
	public static void main(String[] args) {
		int[] arr = {1,2,3,4,5,6,7};
		int[] res = rotate(arr,arr.length,2);
		System.out.println("Original array: ");
		for (int i=0;i<arr.length; i++){
			System.out.print(arr[i]);
		}
		System.out.println();
		System.out.println("New array rotated by 2: ");
		for(int i=0; i<res.length; i++){
			System.out.print(res[i]);
		}
	}

}
