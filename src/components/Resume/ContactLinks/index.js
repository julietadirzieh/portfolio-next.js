const ContactLinks = ({ children }) => {
    return (
        <ul className='text-gray-400 text-center mt-8 md:text-left flex justify-center mb-2'>
            {children}
        </ul>
    );
};

export default ContactLinks;
