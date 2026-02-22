import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RecipeDataContext } from "../RecipeeContext";
import { nanoid } from "nanoid";

const CreateRecipees = () => {
  const { data, setdata } = useContext(RecipeDataContext);
  const { register, handleSubmit, reset } = useForm();
  const submitHandler = (formData) => {
    formData.id = nanoid();
    setdata([...data, formData]);
    reset();
  };
  console.log(data);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center ">
      <form
        className="h-full flex flex-col items-center justify-center w-90 gap-5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          className="outline-0 border-b text-xl px-1 py-2 w-full"
          placeholder="recipee name"
          type="text"
          {...register("name")}
        />
        <input
          className="outline-0 border-b text-xl px-1 py-2 w-full"
          placeholder="image"
          type="url"
          {...register("image")}
        />
        <input
          className="outline-0 border-b text-xl px-1 py-2 w-full"
          placeholder="details"
          {...register("details")}
        />
        <input
          className="outline-0 border-b text-xl px-1 py-2 w-full"
          placeholder="recipee name"
          {...register("name")}
        />
        <select
          {...register("recipeeType")}
          className="outline-0 border-b text-xl px-1 py-2 w-full"
        >
          <option className="text-black" value="breakfast">
            breakfast
          </option>
          <option className="text-black" value="lunch">
            lunch
          </option>
          <option className="text-black" value="dinner">
            dinner
          </option>
        </select>
        <button className="text-xl bg-stone-600 px-10 py-2 rounded w-full font-bold">
          Add recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipees;
