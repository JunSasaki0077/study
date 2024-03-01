import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        exercitationem esse provident illo, quidem animi iste voluptas ratione
        deserunt eveniet fuga aperiam delectus cum nulla quis eum rerum, labore
        quibusdam?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-posts/1"}>Read More</Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
