import React from "react";

const Summary = () => {
  return (
    <div className="w-full px-8 py-8 sm:px-20">
      <div className="pb-4 text-center text-2xl font-bold">温泉リスト</div>
      <div className="mb-4 flex justify-end">
        <Button asChild variant="outline">
          <Link to="/hotsprings/new">温泉登録へ</Link>
        </Button>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {hotSprings.map(
          ({ id, title, location, images, ratingAvg, _count }) => (
            <Link key={id} to={`${id}`}>
              <Card className="flex  h-[200px] w-full">
                <div className="w-1/2">
                  <CardHeader className="min-h-28">
                    <CardTitle className="line-clamp-2 break-all">
                      {title}
                    </CardTitle>
                    <CardDescription className="line-clamp-1 break-all">
                      {location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Rating
                          style={{ maxWidth: "90px" }}
                          readOnly
                          value={ratingAvg}
                        />
                        <div className="font-bold">{ratingAvg}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircleMore strokeWidth={1.5} />
                        <div className="text-sm">{_count.reviews}</div>
                        <span className="text-sm">コメント</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
                <div className="flex w-1/2 items-center justify-center p-4">
                  <img
                    src={
                      images[0]?.url ||
                      "https://source.unsplash.com/body-of-water-on-near-rocks-UHcwyq05_Gk"
                    }
                    className="h-40 w-60 rounded-sm object-fill"
                    alt="温泉の画像"
                  ></img>
                </div>
              </Card>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Summary;
