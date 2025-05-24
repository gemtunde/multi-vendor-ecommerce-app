import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  redirect
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (response.ok) {
      setLoading(false);
      console.log("resp--==>,", responseData);
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
      redirect();
    } else {
      setLoading(false);
      console.log("Error Response", response);
      if (response.status === 409) {
        toast.error(
          responseData?.message || "The Giving Warehouse Stock is NOT Enough"
        );
        //toast.error("The Giving Warehouse Stock is NOT Enough");
      } else {
        console.log("Error Response2", response);
        toast.error(responseData.message || "Something Went wrong");
        //toast.error("Something Went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.log(error.message || "Internal server error");
  }
}

export async function makePutRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  redirect,
  reset
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log(response);
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
      redirect();
    } else {
      setLoading(false);
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}
