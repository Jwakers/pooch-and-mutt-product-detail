import Breadcrumbs from "@/components/breadcrumbs";
import { StarFilled, StarHalf } from "@/components/icons";
import Container from "@/components/layout/container";
import Grid from "@/components/layout/grid";

export default function Home() {
  return (
    <Container className="md:pt-7">
      <Grid className="">
        <div className="col-span-full md:col-start-9 md:row-start-1">
          <Breadcrumbs />
        </div>
        <div className="col-span-full md:col-span-8 md:row-span-2">
          [gallery]
        </div>
        <div className="col-span-full mt-6 md:col-start-9 md:row-start-2">
          <ProductHead />
        </div>
      </Grid>
    </Container>
  );
}

const PRODUCT_DATA = {
  title: "Health & Digestion Dry Food",
  price: {
    current: 6.37,
    compareAt: 8.49,
  },
  points: 18,
  review: {
    total: 48,
    average: 4.5,
  },
};

function ProductHead() {
  const {
    price: { current, compareAt },
    points,
  } = PRODUCT_DATA;
  return (
    <div className="mb-7 md:mb-8">
      <h1 className="mb-4 text-h1 text-primary">{PRODUCT_DATA.title}</h1>
      <Reviews />
      <div className="mt-6 flex items-center gap-2">
        <span className="text-h3 text-brand">£{current}</span>
        <span className="text-p1 line-through">£{compareAt}</span>
        <span className="text-s2 text-brand">+ {points} PoochPoints</span>
      </div>
    </div>
  );
}

function Reviews() {
  const { total, average } = PRODUCT_DATA.review;
  const whole = Math.floor(average);
  const hasHalf = average > whole;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <ul className="flex gap-1">
        {[...Array(whole)].map((_) => (
          <li>
            <StarFilled className="h-6 w-6" />
          </li>
        ))}
        {hasHalf ? (
          <li>
            <StarHalf className="h-6 w-6" />
          </li>
        ) : null}
      </ul>
      <span className="text-c1 text-minimal">({total})</span>
    </div>
  );
}
