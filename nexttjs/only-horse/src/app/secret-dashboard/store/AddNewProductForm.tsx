"use client";
import RotatedText from "@/components/decorators/RotatedText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { addNewProductToStoreAction } from "../actions";
import { useToast } from "@/components/ui/use-toast";

const AddNewProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: createProduct, isPending } = useMutation({
    mutationKey: ["createProduct"],
    mutationFn: async () =>
      await addNewProductToStoreAction({ name, image: imageUrl, price }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });
      toast({
        title: "グッズを追加しました",
        description: "グッズが正常に追加されました。",
      });
      setName("");
      setPrice("");
      setImageUrl("");
    },
    onError: (error) => {
      toast({
        title: "追加ができませんでした。",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <>
      <p className="text-3xl tracking-tighter my-5 font-medium text-center">
        Add <RotatedText>New</RotatedText> Product
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createProduct();
        }}
      >
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">新しい グッズ</CardTitle>
            <CardDescription>
              Add a new product to your store. select only one image.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">名前</Label>
              <Input
                id="name"
                type="text"
                placeholder="OnlyHorse Special"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">価格 ($)</Label>
              <Input
                id="price"
                type="text"
                placeholder="14.99"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <CldUploadWidget
              signatureEndpoint={"/api/sign-image"}
              onSuccess={(result, { widget }) => {
                setImageUrl(
                  (result.info as CloudinaryUploadWidgetInfo).secure_url
                );
                widget.close();
              }}
            >
              {({ open }) => {
                return (
                  <Button
                    onClick={() => open()}
                    variant={"outline"}
                    type="button"
                  >
                    画像を追加する
                  </Button>
                );
              }}
            </CldUploadWidget>

            {imageUrl && (
              <div className="flex justify-center relative w-full h-96">
                <Image
                  fill
                  src={imageUrl}
                  alt="product Image"
                  className="rounded-md object-container"
                />
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isPending}>
              {isPending ? "商品を追加しています..." : "商品を追加する"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
};
export default AddNewProductForm;
