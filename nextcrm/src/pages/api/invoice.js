import { createRouter } from "next-connect";
import db from "@/middleware/db";

const router = createRouter();

router.post(async (req, res) => {
  try {
    db.connectDb()
    const body = req.body
    res.status(200).json(body)
    db.disconnectDb()
  } catch (error) {
    
  }
});

export default router.handler();
