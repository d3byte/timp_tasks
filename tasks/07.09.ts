class Student {
    constructor(private name?: string, private age?: number, private grade?: number) { }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getGrade(): number {
        return this.grade;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public setGrade(grade: number): void {
        this.grade = grade;
    }

    public set(name: string, age: number, grade: number): void {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

export class StudentApp {
    public init(): void {
        const student1: Student = new Student("Сергей", 20, 5);
        const student2: Student = new Student();

        student2.set("Сергей", 20, 5);

        console.log('Student 1');
        console.log(`Age: ${student1.getAge()}\nName: ${student1.getName()}\nGrade: ${student1.getGrade()}`);

        console.log('<--------------------------->');

        console.log('Student 1');
        console.log(`Age: ${student1.getAge()}\nName: ${student1.getName()}\nGrade: ${student1.getGrade()}`);
    }
}
