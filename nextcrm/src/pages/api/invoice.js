import axios from "axios"
import nc from "next-connect"

// const handler = nc()

// handler.post(async (req, res) => {
//     try {
//         const { data } = req.body
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// })

export default function handler(req, res) {
    res.status(200).json({ name: "hithesh" });
  }
  