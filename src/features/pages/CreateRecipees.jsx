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
    localStorage.setItem("Recipes", JSON.stringify([...data, formData]));
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
          placeholder="enter recipe name"
          type="text"
          {...register("name")}
        />
        <input
          className="outline-0 border-b text-xl px-1 py-2 w-full"
          placeholder="enter image url"
          type="url"
          {...register("image")}
        />
        <input
          className="outline-0 border-b text-xl px-1 py-2 w-full"
          placeholder="add recipe details"
          {...register("details")}
        />
        <input
          className="outline-0 border-b text-xl px-1 py-2 w-full"
          placeholder="recipee name"
          {...register("name")}
        />
        <select
          {...register("recipeeType")}
          defaultValue=""
          className="outline-0 border-b text-xl px-1 py-2 w-full"
        >
          <option value="" disabled hidden>
            Select Recipe Type
          </option>

          <option className="text-black" value="breakfast">
            Breakfast
          </option>
          <option className="text-black" value="lunch">
            Lunch
          </option>
          <option className="text-black" value="dinner">
            Dinner
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
