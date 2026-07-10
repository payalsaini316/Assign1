import express from "express";

const app = express();

const port = 4000;

app.use(express.json());

let students = [
    "Rahul",
    "Ankit",
    "Priya"
];

// Read

app.get("/students", (req, res) => {
    res.json(students);
});

// Create

app.post("/students", (req, res) => {

    const { name } = req.body;

    students.push(name);

    res.json({
        message: "Student Added",
        students
    });

});

// Update

app.put("/students/:id", (req, res) => {

    const id = req.params.id;

    const { name } = req.body;

    students[id] = name;

    res.json({
        message: "Student Updated",
        students
    });

});

// Delete

app.delete("/students/:id", (req, res) => {

    const id = req.params.id;

    students.splice(id, 1);

    res.json({
        message: "Student Deleted",
        students
    });

});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});