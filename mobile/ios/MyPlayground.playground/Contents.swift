import UIKit

var helloWorld = "Hello World"
var float: Float = 8.6986
var myBool: Bool = true

// Arrays

var someInts = [Int]()
var someStrs = [String]()

someInts.append(4)
someStrs.append("g")

someInts += [6, 8]

var otherInts: [Int] = [5, 8, 88, 2323]
otherInts.count

print(otherInts.count)

print(otherInts[0])

// Sets

var letters = Set<Character>()
letters.insert("a")
var favs: Set<String> = ["Pizza", "Wine", "Wine 2", "Wine"] // Outputs only {"Pizza", "Wine 2", "Wine"}

// Dictionaries / Maps

// Dictionary<Key, Value>

var namesOfIntegers = [Int: [String]]()
namesOfIntegers[2] = ["two", "dvah"]

print(namesOfIntegers[2]?[1])

// If else cases

var myNum = 31

if(myNum == 33) {
    print(myNum)
} else if(myNum > 33){
    print("old man!")
} else {
    print("Young man!")
}

// Switch

switch myNum {
case 33:
    print(myNum)
case 0..<33:
    print("Young!")
default:
    print("Old!")
}

// Loops

for i in 0..<10 {
    print(i)
}

var numbers: [Int] = [4, 76, 2, 6, 3]

for n in numbers {
    print(n)
}

var count: Int = 0

while count < 10 {
    print(count)
    count += 1
}

var repeatCount: Int = 0

repeat {
    print("not yet")
    repeatCount += 1
}
while repeatCount < 10

// Functions

func CheckCount(message: String) {
    var count: Int = 0

    while count < 10 {
        print(message)
        count += 1
    }
}

CheckCount(message: "not yet")
CheckCount(message: "Viktor")

// Optionals

var myStr: String? = "viktor"


if let myStrVal = myStr {
    myStr = myStrVal + "suffix"
}

print(myStr)

// Classes

class FastCar {
    
    var topSpeed: Int
    
    init (topSpeed: Int) {
        self.topSpeed = topSpeed
    }
    
    func GetTopSpeed () -> Int {
        return self.topSpeed
    }
}

var myCar = FastCar(topSpeed: 210)
myCar.GetTopSpeed()

var ferrari = FastCar(topSpeed: 220)
ferrari.GetTopSpeed()

// Inheritance

class Car {
    let numWheels: Int
    
    init(numWheels: Int) {
        self.numWheels = numWheels
    }
}

class FamilyCar: Car {
    let numDoors = 5
}

class BigFamilyCar: FamilyCar {
    var size = "Large"
}

var myFamCar = FamilyCar(numWheels: 6)
myFamCar.numWheels

 
