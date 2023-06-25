import tw from "tailwind-styled-components";
import { Widget } from "@/app/components/Widget";

const Container = tw.div`
  h-screen
  flex
  justify-center
  items-center
  text-zinc-800
  dark:text-zinc-50
  bg-zinc-50
  dark:bg-black
`;

export default function Home() {
  return (
    <Container>
      <Widget />
    </Container>
  );
}
