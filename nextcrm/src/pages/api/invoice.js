import { createRouter } from "next-connect";
import db from "@/middleware/db";
import moment from "moment";
import { nanoid } from "nanoid";
import AquaInvoices from "../../Models/Invoices";

const router = createRouter();

const invoiceId = nanoid(5);
const date = moment(new Date()).format("DD/MM/YYYY");

router.post(async (req, res) => {
  try {
    db.connectDb();
    const body = req.body;
    body.invoiceNo = `AQB-${date}-${invoiceId}`;
    body.date = date;
    const invoice = new AquaInvoices(body);
    await invoice.save();
    res.status(200).json(invoice);
    db.disconnectDb();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put(async (req, res) => {
  try {
    const body = req.body;
    const { invoiceNo } = body;
    console.log(body);
    if (invoiceNo) {
      let updated = AquaInvoices.findByIdAndUpdate(id,body)
      res.json(updated);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router.handler();
