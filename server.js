const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "BD TOP UP ZONE Backend চলছে"
  });
});

app.post("/api/order", (req, res) => {
  const { uid, product, price, bank, trx } = req.body;

  if (!uid || !product || !price || !bank || !trx) {
    return res.status(400).json({
      success: false,
      message: "সব তথ্য দিন"
    });
  }

  res.json({
    success: true,
    status: "Pending",
    message: "অর্ডার গ্রহণ করা হয়েছে"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`BD TOP UP ZONE Backend running on port ${PORT}`);
});
