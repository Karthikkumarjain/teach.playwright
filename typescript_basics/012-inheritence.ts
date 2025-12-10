//inheritence -remove duplication of code and provide a common protocol for a group of subclasses

class Employee {

    firstName: string;
    lastName: string;
    empId: number;
    seniorEmployee: boolean;

    workFromOffice() {
        console.log(`${this.firstName} works from office`);

    }

    workFromHome() {
        console.log(`${this.firstName} works from home`);



    }

    worksFromOutsideCountry() {
        console.log(`${this.firstName} works from outside home country`);


    }




}
//ABCOrd IS-A Employee
class ABCOrg extends Employee {
    //ABCOrd HAS-A
    headOfDeparthment: string;
    worksFromOutsideCountry() {

        console.log(`${this.firstName} works from UK`);
    }

}

class XYZ extends Employee {
    starEmployee: string;

    awardWinner() {

    }



}

const abcorg = new ABCOrg();
const empIdOfEmp = abcorg.empId = 89;
const NameOfEmployeeFirst = abcorg.firstName = "Jone"
console.log(empIdOfEmp);
const works = abcorg.worksFromOutsideCountry();
console.log(works);

class QWE extends XYZ {
    //access modifers
    private standard: string;//within class
    protected lessValue: number;//any class that extends it, along with the currency class that has it.
    public higherValue: number;//any class to access

    getAccessControl() {

        console.log("Access granted");

    }


}

const xyzClassObj = new QWE();
xyzClassObj.awardWinner();
xyzClassObj.firstName;


class GHJ extends QWE {

    randomMethod() {

        console.log(this.lessValue = 12);
    }

    getAccessControl(): void {
        console.log("Let me execute along with get access control method")
        super.getAccessControl(); // super keyword - -parent class method

    }

}

const qweClass = new GHJ();
qweClass.randomMethod();
qweClass.getAccessControl();


