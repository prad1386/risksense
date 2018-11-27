const express = require("express");
const router = express.Router();

const Port = require("../../models/Ports");

//@route GET api/data/ports/all
//@desc get ports data
//@access Public
router.get("/ports/all", (req, res) => {
  Port.find()
    .then(ports => {
      if (!ports) {
        return res.status(404).json({ ports: "There are no ports" });
      }
      res.json(ports);
    })
    .catch(err => res.status(404).json({ ports: "There are no ports" }));
});

//@route POST api/data/ports
//@desc insert port data
//@access Public
router.post("/ports", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  else {
    for (let portdata in req.body) {
      Port.findOne({ targetport: req.body[portdata]["targetport"] }).then(
        port => {
          if (port) {
            return res
              .status(400)
              .json({ targetport: "targetport already exists" });
          } else {
            //create new instance of port
            const newPort = new Port({
              rank: req.body[portdata]["rank"],
              targetport: req.body[portdata]["targetport"],
              records: req.body[portdata]["records"],
              targets: req.body[portdata]["targets"],
              sources: req.body[portdata]["sources"]
            });

            //insert the newly constructed document into the database
            newPort
              .save()
              .then(() => res.sendStatus(200))
              .catch(err => console.log(err));
          }
        }
      );
    }
  }
});
module.exports = router;
