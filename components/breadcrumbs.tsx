import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const BREADCRUMB_DATA = [
  {
    title: "Shop all",
    url: "/",
  },
  {
    title: "Dry dog food",
    url: "/",
  },
  {
    title: "Health & Digestion Dry Food",
    url: "/",
  },
];

export default function Breadcrumbs() {
  const current = BREADCRUMB_DATA.pop();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {BREADCRUMB_DATA.map(({ title, url }) => (
          <Fragment key={title}>
            <BreadcrumbItem>
              <BreadcrumbLink href={url}>{title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{current?.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
