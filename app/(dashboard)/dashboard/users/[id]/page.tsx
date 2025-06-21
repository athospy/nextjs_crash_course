const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <h1 className="3xl">User Profile {id}</h1>;
};

export default Page;
