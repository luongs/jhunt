package g4g;

import java.util.HashSet;

public class uniqueString {
	public static boolean unique(String str){
		if (str==null) return false;
		HashSet<Character> hs = new HashSet<>();
		for (int i=0; i<str.length(); i++){
			if (hs.contains(str.charAt(i)))
				return false;
			else 
				hs.add(str.charAt(i));
		}
		return true;
	}
	
	public static void main(String[] args) {
		String a = "abca";
		System.out.println(unique(a));
		
	}

}
