import { FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='w-full bg-white border-t border-t-stroke'>
      <div className='flex items-center'>
        <span className='text-text border-r p-2 border-r-stroke'>
          Find me in:{' '}
        </span>
        <span className='text-text border-r p-2  border-r-stroke'>
          <FaInstagram className='text-2xl' />{' '}
        </span>
        <span className='text-text border-r p-2 border-r-stroke'>
          <FaGithub className='text-2xl' />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
