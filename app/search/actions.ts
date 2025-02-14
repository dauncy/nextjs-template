"use server";

export const search = async (searchQuery: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { searchQuery };
};
