package ctc_ch3;

public abstract class Animal {
	
	String name; 
	int order;
	
	public Animal(String name){
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getOrder() {
		return order;
	}
	public void setOrder(int order) {
		this.order = order;
	} 
	
	public boolean isOlderThan(Animal a){
		return (this.order < a.order);
	}
	
	public String toString() {
		return "Name is: "+name+"\n";
	}

}
