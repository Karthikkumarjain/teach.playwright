let day: string = "Saturday";

let dayOfWeek: string;

if (day === "Sunday") {
    dayOfWeek = "Sunday";
} else if (day === "Monday") {
    dayOfWeek = "Monday";
} else if (day === "Tuesday") {
    dayOfWeek = "Tuesday";
} else if (day === "Wednesday") {
    dayOfWeek = "Wednesday";
} else if (day === "Thursday") {
    dayOfWeek = "Thursday";
} else if (day === "Friday") {
    dayOfWeek = "Friday";
} else if (day === "Saturday") {
    dayOfWeek = "Saturday";
} else {
    dayOfWeek = "Invalid day";
}

console.log("Day of the week: " + dayOfWeek);



let myday: string = "Wednesday";

switch (myday) {
    case "Sunday":
        console.log("its sunday");
        break;

    case "Monday":
        console.log("its monday");
        break;

    case "Tuesday":
        console.log("its tuesday");
        break;

    case "Wednesday":
        console.log("its wednesday");
        break;

    default:
        console.log("wrong day");
        break;
}



let marks: number = 100.12;

switch (marks) {
    case 100.12:
        console.log("my marks: " + marks);
        break;

    case 200:
        console.log("my marks: " + marks);
        break;

    default:
        console.log("wrong marks");
        break;
}



// switch case with Enums:
enum Browser {
    Firefoxa = "firefox",
    Safaria = "safari",
    Edge = "edge",
    Chromea = "chrome"
}

let browserNameaa: string = Browser.Firefoxa;

switch (browserNameaa) {
    case Browser.Firefoxa:
        console.log("launch firefox");
        break;

    case Browser.Chromea:
        console.log("launch chrome");
        break;

    default:
        console.log("wrong browser info");
        break;
}
