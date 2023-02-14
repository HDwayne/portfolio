const Button = ({ children, onClick, classes }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg 
        flex items-center transition-all ease-out duration-300 
        dark:hover:bg-slate-600 dark:text-white
        hover:bg-slate-100 hover:scale-105 active:scale-100 tablet:first:ml-0 ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
