export const deleteProduct = async (uid: string, productId: string) => {
  console.log(uid, productId);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${uid}/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("There was a problem with the request", error);
  }
};
