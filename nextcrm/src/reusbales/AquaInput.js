const AquaInput = ({ label, placeholder, handleChange, type, Address, value, name, maxlength }) => {
    return (
        <>
            {Address ? (
                <>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">{label}</label>
                        <div class="col-sm-10">
                        <textarea className="form-control" id="exampleFormControlTextarea1" type={type} value={value} rows="3" maxLength={maxlength} placeholder={placeholder} onChange={handleChange} />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div class="form-inline mb-3 row">
                    
                            <label for="inputEmail3" class="col-sm-2 col-form-label">{label} : </label>
                  
                        <div class="col-sm-10">
                            <input class="form-control" id="inputEmail3" placeholder={placeholder} onChange={handleChange} name={name} value={value} type={type} />
                        </div>
                    </div>
                </>
            )}

        </>
    )
}
export default AquaInput