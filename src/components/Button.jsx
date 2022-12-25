function Button({ styles, children }) {
    return (
        <button className={`px-4 py-3 bg-[#5a2e98] rounded-md ${styles}`}>
            {children}
        </button>
    );
}

export default Button;
