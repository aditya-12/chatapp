const GenderCheckbox = () => {
    return (
        <div className="flex mt-2">
            <div className="form-control">
                <label className='label gap-2 cursor-pointer'>
                    <span className={'label-text text-gray-300'}>Male</span>
                    <input type="checkbox" className='checkbox [--chkfg:red] border-s-white border-white checked:border-red-500' />
                </label>
            </div>
            <div className="form-control">
                <label className='label gap-2 cursor-pointer'>
                    <span className={'label-text text-gray-300'}>Female</span>
                    <input type="checkbox" className='checkbox [--chkfg:red] border-s-white border-white checked:border-red-500 checked:text-red-500' />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;