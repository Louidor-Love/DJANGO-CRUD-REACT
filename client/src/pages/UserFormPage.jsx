import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

export function UserformPage(){
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
          await createTask(data);
          toast.success("New Task Added", {
            position: "bottom-right",
            style: {
              background: "#101010",
              color: "#fff",
            },
          });
        }
    });

    return (
        <div className="max-w-xl mx-auto">
        <form onSubmit={onSubmit}className="bg-zinc-800 p-10 rounded-lg mt-2"> 
          <label>Username</label>
          <input type="text" placeholder="username"
           {...register("username", { required: true })}
           className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          />
          {errors.username && <span>This field is required</span>}

          <label>Password</label>
          <input type="password" placeholder="password"
           {...register("password1", { required: true })}
           className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          />
          {errors.password1 && <span>This field is required</span>}

          <label>Confirm Password</label>
          <input type="password" placeholder="confirm username"
           {...register("password2 ", { required: true })}
           className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          />
          {errors.password2 && <span>This field is required</span>}
          
          <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Signup</button>
        </form>
      </div>
    )
}