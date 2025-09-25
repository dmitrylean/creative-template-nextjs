// app/page.js
import HomeLayout from "@/layouts/HomeLayout";
import Home from "./home/page";

export default function Page() {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  );
}
