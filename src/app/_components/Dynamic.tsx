const Dynamic = () => {
  if (typeof window === "undefined")
    throw new Error("Cannot render this on the server");
  return <div>Dynamic</div>;
};

export default Dynamic;
