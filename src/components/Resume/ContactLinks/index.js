const ContactLinks = ({ children }) => {
    return (
        <ul className='text-gray-400 text-center my-3 md:my-0 md:text-left flex justify-center md:justify-start'>
            {children}
        </ul>
    );
};

export default ContactLinks;
