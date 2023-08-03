import mongoose from "mongoose";


const AquaInvoiceSchema = new mongoose.Schema(
    {
        invoiceNo: {
            type: String
        },
        customerDetails: {
            name: {},
            phone: {},
            email: {},
            address: {},
        },
        gst: {
            type: Boolean
        },
        gstDetails: {
            gstName: {},
            gstPhone: {},
            gstEmail: {},
            gstAddress: {},
        },
        products: [
            {
                productName: {
                    type: String,
                },
                productQuantity: {
                    type: Number
                },
                productPrice: {
                    type: Number
                },
                productSerialNo: {
                    type: Number
                }
            },
        ],
        trasnport: [
            {
                deliveredBy: {
                    type: String
                },
                deliveryDate: {
                    type: String
                }
            }
        ],
        paidStatus: {
            type: String
        },
        paytmentType: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

const Cart = mongoose.model("AquaInvoices", AquaInvoiceSchema);

export default Cart;
