import supabase from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings_demo").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

export async function editSettings(updateSettings) {
  const { data, error } = await supabase
    .from("settings_demo")
    .update(updateSettings)
    .eq("id", 1)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be edited");
  }

  return data;
}
