import { toast } from "react-hot-toast"
const successToast = (message) => {
    toast.success(message,{duration: 4000})
}
const errorToast = (message) => {
    toast.error(message , {duration: 4000})
}

const toastMessages = () => {
    return {
        successToast,
        errorToast
    }
}

export default toastMessages