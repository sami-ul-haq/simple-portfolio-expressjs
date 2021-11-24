const skillsController = (req, res) => {
    const data = {
        title: "Skills"
    }
    res.render("skills", data);
}

module.exports = skillsController;