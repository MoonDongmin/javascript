/* 1.
const lunchMenu = {
	name: '떡볶이',
	price: 5000,
	flavor: 'hot'
}
위 객체에 대해 아래 사항들을 실행하시오.
- vegan 이란 프로퍼티를 추가하고 false 를 값으로 넣으세요.
- price 를 500 증가시키세요.
- flavor 프로퍼티를 삭제하세요.
- name 프로터피를 두 가지 방식으로 출력해보세요.
*/
const lunchMenu = {
  name: '떡볶이',
  price: 5000,
  flavor: 'hot',
}
lunchMenu.vegan = false;
lunchMenu.price += 500;
delete lunchMenu.flavor;
console.log(lunchMenu);
console.log(lunchMenu.name);
console.log(lunchMenu['name']);

/* 2.직사각형을 나타내는 객체를 만들어내는 Rectangle 생성자 함수를 작성하세요. 조건은 아래와 같습니다.
*  각 직사각형은 width 값과 height 값을 갖습니다.
*  describe 함수는 ‘면적: (width * height)’ 형식의 문자열을 로그로 출력합니다.
* */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.describe = function () {
    console.log(`면적: ${this.width * this.height}`);
  }
}

myRect = new Rectangle(20, 30);
myRect.describe();

/* 3. 위 2번의 생성자 함수를 클래스로 작성해보세요.
정적 필드로 thickness 를 추가한 뒤(기본값 2) 이를 로그로 출력해보세요.
* */
class Rectangle2 {
  static thickness = 3;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  describe() {
    console.log(`면적: ${this.width * this.height}`);
  }
}

console.log(Rectangle2.thickness);

/* 4. 위 코드의 width 와 height 필드들을 private 필드로 수정한 뒤 getter와 setter를 추가하세요.
setter에서는 양수만 적용되도록 작성해보세요.
* */

class Rectangle3 {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  set width(value) {
    if (value > 0) {
      this.#width = value;
    }
  }

  get height() {
    return this.#height;
  }

  set height(value) {
    if (value > 0) {
      this.#height = value;
    }
  }

  describe() {
    console.log(`면적: ${this._width * this._height}`);
  }
}

/* 5. 상속 관계에 있는 Animal 과 Cat 클래스를 작성해보세요.
Animal 은 sex 필드를, Cat 은 이에 더하여 breed 필드를 가지며, 사용방법과 메소드의 호출내용은 아래와 같습니다.
*/
class Animal {

  constructor(sex) {
    this.sex = sex;
  }

  describe() {
    console.log(`성별: ${this.sex}`);
  }
}

class Cat extends Animal {
  constructor(sex, breed) {
    super(sex);
    this.breed = breed;
  }

  describe() {
    console.log(`${this.breed} (${this.sex})`);
  }
}

const myAnimal = new Animal('수컷');
myAnimal.describe(); // 성별: 수컷

const myCat = new Cat('암컷', '페르시안');
myCat.describe(); // 페르시안 (암컷)
