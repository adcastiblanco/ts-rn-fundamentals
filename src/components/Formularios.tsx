import { useForm } from "../hooks/useForm";

export const Formularios = () => {
  const { state, handleChange } = useForm({
    name: "",
    email: "",
  });
  return (
    <div>
      <h3>Formularios</h3>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={({ target }) => handleChange(target.value, "name")}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={({ target }) => handleChange(target.value, "email")}
        />
      </form>
      <code>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </code>
    </div>
  );
};
