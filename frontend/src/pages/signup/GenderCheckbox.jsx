const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
    return (
        <div className="flex mt-2">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}> 
                    <span className={'label-text text-gray-300'}>Male</span>
                    <input type="checkbox" className='checkbox [--chkfg:red] border-s-white border-white checked:border-red-500'
                    checked = {selectedGender === "male"}
                    onChange = {() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className={'label-text text-gray-300'}>Female</span>
                    <input type="checkbox" className='checkbox [--chkfg:red] border-s-white border-white checked:border-red-500 checked:text-red-500'
                    checked = {selectedGender === "female"}
                    onChange = {() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;