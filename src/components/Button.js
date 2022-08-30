function Button({ children, onClick, type }) {
    return (
      <button class="btn btn-primary" onClick={onClick} type={type}>
        {children}
      </button>
    );
  }
  
  export default Button;