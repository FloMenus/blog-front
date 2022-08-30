import Button from "./Button";

function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} class="form-control w-full max-w-xs gap-3">
      {children}
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Form;