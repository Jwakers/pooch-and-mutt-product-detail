import Breadcrumbs from "@/components/breadcrumbs";
import NewsletterForm from "@/components/form/newsletter";
import ProductAddForm from "@/components/form/product-add";
import Gallery from "@/components/gallery";
import { StarFilled, StarHalf } from "@/components/icons";
import Grid from "@/components/layout/grid";

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

export default function Home() {
  return (
    <Grid className="md:container md:mt-7">
      <div className="container col-span-full my-2 md:col-start-6 md:px-0 lg:col-start-9 lg:row-start-1 lg:my-0">
        <Breadcrumbs />
      </div>
      <div className="col-span-full md:col-span-5 md:row-span-2 md:row-start-1 lg:col-span-8">
        <Gallery />
      </div>
      <div className="relative col-span-full mt-6 pb-13 md:col-start-6 md:pb-12 lg:col-start-9 lg:row-start-2">
        <ProductHead />
        <ProductAddForm />
        <div className="container my-7 space-y-2 text-secondary md:my-8 md:px-0">
          <p>Grain-free, junk-free complete dry food for sensitive dogs</p>
          <ul className="list-disc pl-8">
            <li>Hypoallergenic</li>
            <li>Vet recommended</li>
            <li>Prebiotics for gut health</li>
          </ul>
        </div>
        <div className="container">
          <hr className="border-minimal md:hidden" />
        </div>
        <NewsletterForm />
      </div>
    </Grid>
  );
}

function ProductHead() {
  const {
    price: { current, compareAt },
    points,
  } = PRODUCT_DATA;
  return (
    <div className="container mb-7 md:mb-8 md:px-0">
      <h1 className="mb-4 text-h1 text-primary">{PRODUCT_DATA.title}</h1>
      <Reviews />
      <div className="mt-6 flex flex-wrap items-center gap-2">
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
        {[...Array(whole)].map((_, i) => (
          <li key={i}>
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
