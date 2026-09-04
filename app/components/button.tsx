type ButtonProps = {
  text: string;
  onClick?: () => void;
  buttonClassName?: string;
  textClassName?: string;
};

const Button = ({
  text,
  onClick,
  buttonClassName,
  textClassName,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${buttonClassName} w-40 h-10 flex items-center cursor-pointer justify-center hover:bg-primary-hover bg-primary rounded-xl  py-2.5 `}
    >
      <p className={`text-white uppercase ${textClassName}`}>{text}</p>
    </button>
  );
};

export default Button;
