import React from "react";

export default async function page() {
  await new Promise((res) => setTimeout(res, 5000));
  return <div>Dinesh</div>;
}
