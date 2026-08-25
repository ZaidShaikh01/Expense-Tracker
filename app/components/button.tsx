const Button = ({ text }: { text: string }) => {
  return (
    <button className='w-40 h-10 flex items-center cursor-pointer justify-center hover:bg-primary-hover bg-primary rounded-xl px-5 py-2.5'>
      <p className='text-white uppercase'>{text}</p>
    </button>
  );
};

export default Button;
