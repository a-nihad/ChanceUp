import supabase from "./supabase";

export async function getUsers() {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    console.error(error);
    throw new Error("Users could not be loaded");
  }

  return data;
}

export async function createEditUser(newUser) {
  const { data, error } = await supabase
    .from("users")
    .insert([newUser])

  if (error) {
    console.error(error);
    throw new Error("User could not be Created");
  }

  return data;
}
