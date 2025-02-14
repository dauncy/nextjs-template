"use server";

export const search = async (searchQuery: string) => {
  await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
  return { searchQuery };
};
