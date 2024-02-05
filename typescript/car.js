/**
 * @param {import("./car").Car} car
 */
function printCarDetails(car) {
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
}

printCarDetails({
    make: "",
    model: "a",
    year: 23,
});
