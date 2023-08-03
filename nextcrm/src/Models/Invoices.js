import mongoose from "mongoose";


const AquaInvoiceSchema = new mongoose.Schema(
    {
        invoiceNo: {
            type: String
        },
        customerDetails: {
            name: {
                type: String
            },
            phone: {
                type: Number,

            },
            email: {
                type: String
            },
            address: {
                type: String
            },
        },
        gst: {
            type: Boolean
        },
        gstDetails: {
            gstName: {
                type: String
            },
            gstPhone: {
                type: Number
            },
            gstEmail: {
                type: String
            },
            gstAddress: {
                type: String
            },
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
