package ctc_ch3;

import java.util.Iterator;
import java.util.LinkedList;

public class AnimalShelter {
	private LinkedList<Cat> catList;
	private LinkedList<Dog> dogList;
	private int order = 0; 
	
	public AnimalShelter(){
		catList = new LinkedList<>();
		dogList = new LinkedList<>();
	}
	
	public void enqueueAny(Animal animal) {
		animal.setOrder(order);
		if (animal instanceof Cat){
			catList.add((Cat)animal);
		}
		else 
			dogList.add((Dog) animal);
		
		order++;
	}
	
	public Animal dequeueAny(){
		Animal a;
		
		if (dogList.isEmpty() && catList.isEmpty())
			return null;
		else if (dogList.isEmpty())
			a = catList.remove();
		else if (catList.isEmpty())
			a = dogList.remove();
		
		Dog dog = dogList.peek();
		Cat cat = catList.peek();
		
		if (dog.isOlderThan(cat))
			a = dogList.remove();
		else 
			a = catList.remove();
		
		return a;
	}
	
	public Dog dequeueDog(){
		if (dogList.isEmpty())
			return null;
		return dogList.remove();
	}
	
	public Cat dequeueCat() {
		if (catList.isEmpty())
			return null;
		return catList.remove();
	}
	
	public String toString() {
		Iterator<Cat> itCat = catList.iterator();
		Iterator<Dog> itDog = dogList.iterator();
		StringBuilder sb = new StringBuilder();
		
		sb.append("Cat List: \n");
		while(itCat.hasNext()) {
			sb.append(itCat.next());
		}
		sb.append("Dog list: \n");
		while (itDog.hasNext()) {
			sb.append(itDog.next());
		}
		return sb.toString();		
	}
	
	
	public static void main(String[] args) {
		AnimalShelter a = new AnimalShelter();
		Cat c1 = new Cat("CMax");
		Cat c2 = new Cat("CBob");
		Dog d1 = new Dog("DMax");
		Dog d2 = new Dog("DBob");
		
		a.enqueueAny(c1);
		a.enqueueAny(d1);
		a.enqueueAny(c2);
		a.enqueueAny(d2);
		a.dequeueCat();
		a.dequeueCat();
		
		System.out.println(a);

	}

}
