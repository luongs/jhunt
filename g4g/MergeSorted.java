package ctc_ch11;
/* ctc 11.1 */
public class MergeSorted {
	
	public static int[] merge(int[] a, int[] b, int sizeA){
		if (a ==null||b==null)
			return null;
		
		int aIndex = sizeA-1;
		int bIndex = b.length -1;
		int sortIndex = b.length+sizeA-1;
		while (bIndex>=0){
			if (aIndex>=0 && a[aIndex]>=b[bIndex]){
				a[sortIndex] = a[aIndex];
				aIndex--;
			}
			else{	// b[bIndex]>a[Index] or aIndex < 0
				a[sortIndex] = b[bIndex];
				bIndex--;
			}
			sortIndex--;
		}
		
		return a;
	}
	public static void main(String[] args) {
		int[] a = {3,4,5,0,0,0};
		int[] b = {1,2,3};
		int[] res = merge(a, b, 3);
		
		for (int i=0; i<res.length; i++){
			System.out.println(res[i]);
		}

	}

}
