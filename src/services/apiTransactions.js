import supabase from "./supabase";

export async function getTransactions({ filter }) {
  let query = supabase
    .from("transactions_demo")
    .select("*,members(name,image,lot)")
    .order("created_at", { ascending: false });

  if (filter) query = query.eq(filter.field, filter.value);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be loaded");
  }

  return data;
}

export async function createTransactions(transaction) {
  const { data, error } = await supabase
    .from("transactions_demo")
    .insert([transaction])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be created");
  }

  return data;
}
