"use client";

function Test(
  props: React.PropsWithChildren<{
    children: React.ReactNode;
  }>,
) {
  return <div>{props.children}</div>;
}

export { Test };
