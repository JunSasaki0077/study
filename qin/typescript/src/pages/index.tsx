let foo = {} as { bar: number };

foo.bar = 1;

function double(x: number): number | undefined {
  if (x > 0) {
    return;
  }

  return x * 2;
}

export default function Home() {
  return <div>test</div>;
}
