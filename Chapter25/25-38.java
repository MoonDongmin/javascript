// 자바의 클래스 정의
public class Person{
    // 1 클래스 필드 정의
    // 클래스 필드는 클래스 몸체에 this 없이 선언해야함
    private String firstName = "";
    private String lastName = "";

    // 생성자
    Person(String firstName, String lastName){
        // 3 this는 언제나 클래스가 생성할 인스턴스를 가리킴
    this.firsName = firstName;
    this.lastName = lastName;
    }

    public String getFullName(){
        // 2 클래스 필드 참조
    // this 없이도 클래스 필드를 참조할 수 있음
    return fristName + " "+ lastName;
    }
}