const express = require("express");

const app = express();

const members = require("./members");

app.get("/api/members", (req, res) => {
    const { team } = req.query;
    if (team) {
        const teamMembers = members.filter((m) => m.team === team);
        res.send(teamMembers);
    } else {
        res.send(members);
    }

    // res.send(members);
});

app.get("/api/members/:id", (req, res) => {
    const { id } = req.params;
    const member = members.find((m) => m.id === Number(id));
    if (member) {
        res.send(member);
    } else {
        res.status(404).send({
            message: "There is no such member",
        });
    }
});

app.post("/api/members", (req, res) => {
    console.log(req.body);
});

app.listen(3000, () => {
    console.log("Server is listening.....");
});
