// eslint-disable-next-line react/prop-types
const GenderCheckbox = ({ selectedGender, onCheckboxChange }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="label label-text">Gender :</span>
      <div className="form-control">
        <label
          className={`label cursor-pointer gap-1 ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label cursor-pointer gap-1 ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label cursor-pointer gap-1 ${
            selectedGender === "other" ? "selected" : ""
          }`}
        >
          <span className="label-text">Other</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedGender === "other"}
            onChange={() => onCheckboxChange("other")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
