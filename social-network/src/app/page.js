import AccordionDemo from "./components/accordion";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="/profile">Your Profile</a>
      </nav>
      <AccordionDemo />
    </main>
  );
}
