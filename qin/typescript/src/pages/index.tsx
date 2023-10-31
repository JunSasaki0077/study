import { TwitterCard } from "@/components/TwitterCard";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <TwitterCard
      user={{
        name: "しまぶー",
        accountName: "shimabu_it",
        image:
          "https://doodleipsum.com/200x200/avatar-5?bg=6392D9&i=0f33dd99912f70859db2eeaf52dd71f4",
      }}
      body={{
        text: "おはようございます！！！",
        image:
          "https://doodleipsum.com/700x394/flat?bg=7463D9&i=c2a3b28fed2bb5d5690e9bab3ff2dce1",
      }}
    />
  );
};

export default Home;
