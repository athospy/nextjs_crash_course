import Hello from "@/app/components/hello";

export default function Home() {
  console.log("testing sever/client?");

  return (
    <>
      <h1 className="text-3xl">Hi and welcome</h1>
      <Hello />
    </>
  );
}
