const { Router } = require("express");

const router = Router();

const resourceList = [
  {
    resourceId: "1",
    name: "resource1",
  },
  {
    resourceId: "2",
    name: "resource2",
  },
];

//GET
router.get("/", (req, res) => {
  res.send(resourceList);
});

//Route Parameters
router.get("/:resourceId", (req, res) => {
  const { resourceId } = req.params;
  const resourceItem = resourceList.find(
    (getId) => getId.resourceId === resourceId
  );
  res.send(resourceItem);
});

//POST
router.post("/", (req, res) => {
  res.send(201);
  console.log(req.body);
  resourceList.push(req.body);
});

module.exports = router;