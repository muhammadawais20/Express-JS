const { Router } = require("express");

const router = Router();

const departments = [
  {
    departId: 1,
    departmentName: "Marketing",
    revenue: 1000,
  },
  {
    departId: 2,
    departmentName: "Software Development",
    revenue: 2000,
  },
];

//Get
router.get("/", (req, res) => {
  const { revenue } = req.query;
  const parsedRevenue = parseInt(revenue);

  {
    !isNaN(parsedRevenue)
      ? res.send(
          departments.filter((getRevenue) => getRevenue.revenue <= revenue)
        )
      : res.send(departments);
  }
});

module.exports = router;
