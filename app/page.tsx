import Breadcrumbs from "@/components/breadcrumbs";
import Container from "@/components/layout/container";
import Grid from "@/components/layout/grid";

export default function Home() {
  return (
    <Container className="md:pt-7">
      <Grid className="">
        <div className="col-span-full md:col-start-8 md:row-start-1">
          <Breadcrumbs />
        </div>
        <div className="col-span-full md:col-span-7 md:row-span-2">
          [gallery]
        </div>
        <div className="col-span-full md:col-start-8 md:row-start-2">
          [product info]
        </div>
      </Grid>
    </Container>
  );
}
