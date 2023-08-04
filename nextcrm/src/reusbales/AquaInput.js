const AquaInput = ({ label, placeholder, handleChange, type, Address }) => {
    return (
        <>
            {Address ? (
                <>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label aqua-input-font">{label}</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={placeholder} onChange={handleChange} />
                    </div>
                </>
            ) : (
                <>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label aqua-input-font">
                            {label}
                        </label>
                        <input type={type} className="form-control" id="exampleFormControlInput1" placeholder={placeholder} onChange={handleChange} />
                    </div >
                </>
            )}

        </>
    )
}
export default AquaInput