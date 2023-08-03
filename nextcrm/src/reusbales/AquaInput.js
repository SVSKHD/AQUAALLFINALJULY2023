const AquaInput = ({ label, placeholder, handleChange, type, Address }) => {
    return (
        <>
            {Address ? (
                <>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">{label}</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={placeholder} onChange={handleChange} />
                    </div>
                </>
            ) : (
                <>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                            {label}
                        </label>
                        <input type={type} class="form-control" id="exampleFormControlInput1" placeholder={placeholder} onChange={handleChange} />
                    </div >
                </>
            )}

        </>
    )
}
export default AquaInput