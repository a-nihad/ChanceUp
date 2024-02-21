import supabase, { supabaseUrl } from "./supabase";

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
  const hasImagePath = typeof newMember.image === "string";
  const defaultImage = Boolean(newMember.image === "default-user.jpg");

  const imageName = `${Math.random()}-${newMember.image.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath =
    hasImagePath && defaultImage
      ? `${supabaseUrl}/storage/v1/object/public/avatars/default-user.jpg`
      : hasImagePath
        ? newMember.image
        : `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`;

  let quary = supabase.from("members");

  // Create Members
  if (!id) quary = quary.insert([{ ...newMember, image: imagePath }]);

  // Edit Members
  if (id) quary = quary.update({ ...newMember, image: imagePath }).eq("id", id);

  const { data, error } = await quary.select();

  if (error) {
    console.error(error);
    throw new Error("Members could not be Created");
  }

  if (defaultImage || hasImagePath) return data;

  // 2. upload image
  const { error: StorageError } = await supabase.storage
    .from("avatars")
    .upload(imageName, newMember.image);

  // 3. Delete the avatar IF there was an error upload image.
  if (StorageError) {
    await supabase.from("avatars").delete().eq("id", data.id);

    console.error(StorageError);
    throw new Error(
      "Cabins image could not be uploaded and the cabin was not created",
    );
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

export async function getMember(id) {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Member could not be loaded");
  }

  return data;
}