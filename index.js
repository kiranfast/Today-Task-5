//1) HTTPS://GITHUB.COM/RVSP/TYPESCRIPT-OOPS/BLOB/MASTER/PRACTICE/MOVIE.MD//

class movie{
    constructor(title,studio,rating="PG")
    {
        this.title=title
        this.studio=studio
        this.rating=rating
    }
    display()
    {
        console.log("Movie Title : ",this.title)
        console.log("Studio Name : ",this.studio)
        console.log("Ratings : ",this.rating)
    }
     getPg(movies)
    {
        let data2= movie.filter(movie => movie.rating ==="PG" )
        return data2
    }
}

let data = new movie("Transformer","Tripple Studio","PG13")
let movies=[
        new movie("Avengers","PG"),
        new movie("Transformers","PG"),
        new movie("Resident Evil","PG"),
        new movie("Transilvania","PG")
]
data.display()

console.log(movies)

// 2.) HTTPS://GITHUB.COM/RVSP/TYPESCRIPT-OOPS/BLOB/MASTER/PRACTICE/CLASS-CIRCLE.MD//

class Circle{
    constructor(Radius,Color="Red")
    {
        
           this.Radius=Radius
           this.Color=Color
    }
    setRadius()
    {
        console.log("The Radius of Circle = ",this.Radius)
        console.log("The color of the circle = ",this.Color)
    }

    getArea()
    {
        let Radius=0.1
        let pi=3.14
        let area =pi * Radius * Radius
        console.log("Total Circle =",area)
    }

}

let data=new Circle("1.0","Red")
data.setRadius()
data.getArea()

// 3.) WRITE A “PERSON” CLASS TO HOLD ALL THE DETAILS//

class Person{
    constructor(name,age,gender,mobile,email)
    {
        this.name=name
        this.age=age
        this.gender=gender
        this.mobile=mobile
        this.email=email
    }
}

let data = new Person("R.Kiran","27","Male","91+9092351576","kiranfast008@gmail.com")
console.log("Name : ",data.name)
console.log("Age : ",data.age)
console.log("Gender : " ,data.gender)
console.log("Mobile No : ", data.mobile)
console.log("E-Mail Id : ", data.email)

// 4.) WRITE A CLASS TO CALCULATE THE UBER PRICE.//

class Uber{
    constructor(name,km,Distance)
    {
        this.name=name
        this.km=km
        this.Distance=Distance
    }
    total()
    {
        console.log("Customer Name : ",this.name)
        console.log("Km/hour : ", this.km)
        console.log("Total Km Travelled : ",this.Distance)
    }
    add()
    {
        console.log("Total Price : ", this.km * this.Distance)
    }

}
   let tips= true
    if (tips) {
        console.log("Tips : ","Tips Given")
    }
    else
    {
        console.log("Tips : ","Tips Not Given")
    }

    let peak=true
    if(peak)
        {
            console.log("Peak Time : ","This is Peak Hours")
        }
     else
     {
        console.log("Peak Time : ","This is not Peak Hours")
     }
let Person1=new Uber("Raju","20","150")
Person1.total()
Person1.add()