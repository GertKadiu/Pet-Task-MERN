import "./Button.css";
import { ButtonTypes } from "./ButtonTypes";

function Button(props) {
  const { type, btnText, disabled, onClick } = props;

  const getButtonClass = () => {
    switch (type) {
      case ButtonTypes.CREATE:
        return "creteBtn button";

      case ButtonTypes.EDIT:
        return "editBtn button";

      case ButtonTypes.SAVE:
        return "saveBtn";

      case ButtonTypes.CANCEL:
        return "cancelBtn";

      case ButtonTypes.VIEW:
        return "ViewBtn";

      case ButtonTypes.DELETE:
        return "delete";

      case ButtonTypes.OPEN:
        return "open";

      case ButtonTypes.SEND:
        return "sendBtn";

      default:
        return "saveBtn";
    }
  };

  return (
    <button
      disabled={disabled}
      type={type === ButtonTypes.DISABLED ? "button" : "submit"}
      onClick={onClick}
      className={getButtonClass()}
    >
      {btnText}
    </button>
  );
}

export default Button;
