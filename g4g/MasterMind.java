package ctc_ch17;

import java.util.HashMap;

public class Q17_5 {
	
	public static class Result {
		int hitCount;
		int pseudoCount;
		
		public String toString(){
			return "Hit count: "+hitCount+". Pseudo count: "+pseudoCount;
		}
	}
	
	public static int calcPseudo(String cpu, String user){
		HashMap<Character, Boolean> hm = new HashMap<>();
		int uniqueCpu = 0;
		for (int i=0; i<cpu.length(); i++){
			if (!hm.containsKey(cpu.charAt(i))){
				hm.put(cpu.charAt(i), false);
				uniqueCpu++;
			}
		}
		
		hm = new HashMap<Character, Boolean>();
		int uniqueUser = 0;
		for (int i=0; i<user.length(); i++){
			if (!hm.containsKey(user.charAt(i))){
				hm.put(user.charAt(i), false);
				uniqueUser++;
			}
		}
		return Math.min(uniqueCpu, uniqueUser);
	}
	
	public static int calcHits(String cpu, String user){
		if (cpu.length() != user.length()) return -1;
		int hit = 0;
		for (int i=0; i< cpu.length(); i++){
			if (cpu.charAt(i) == user.charAt(i))
				hit++;
		}
		return hit;
	}
	
	public static Result calcMasterMind(String cpu, String user){
		Result res = new Result();
		int maxPseudo = calcPseudo(cpu,user);
		int hitCount = calcHits(cpu, user);
		int pseudoCount = maxPseudo-hitCount;
		if (pseudoCount < 0)
			pseudoCount = 0;
		res.hitCount = hitCount;
		res.pseudoCount = pseudoCount;
		return res;
	}
	public static void main(String[] args) {
		String cpu = "RGGB";
		String user = "YRGB";
		Result res = calcMasterMind(cpu, user);
		System.out.println(res);
		
		String cpu2 = "RRRR";
		String user2 = "RRRR";
		res = calcMasterMind(cpu2, user2);
		System.out.println(res);
		
		cpu = "RGBY";
		user = "RGBB";
		res = calcMasterMind(cpu, user);
		System.out.println(res);
	}

}
