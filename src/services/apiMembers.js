import supabase from "./supabase";

export async function getMembers({ filter, sortBy }) {
  let query = supabase.from("members").select("*");

  // Filtering
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // Soring
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Members could not be loaded");
  }

  return data;
}

// Create and Edit Members
export async function createEditMember(newMember, id) {
  let quary = supabase.from("members");

  // Create Members
  if (!id) quary = quary.insert([newMember]);

  // Edit Members
  if (id) quary = quary.update(newMember).eq("id", id);

  const { data, error } = await quary.select();

  if (error) {
    console.error(error);
    throw new Error("Members could not be Created");
  }

  return data;
}

export async function deleteMember(id) {
  const { error } = await supabase.from("members").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Members could not be deleted");
  }
}
