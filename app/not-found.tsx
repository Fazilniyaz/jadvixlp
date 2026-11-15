import Chrome3D from "@/components/site/Chrome3D";
import { Btn } from "@/components/site/ui";

export default function NotFound() {
  return (
    <section className="e404">
      <div className="e404__n" aria-hidden data-fade data-delay="0.7">
        4<Chrome3D shape="zero" />4
      </div>
      <h1 data-fade data-delay="0.85">
        Oops, sorry! Page not found
      </h1>
      <p data-fade data-delay="0.95">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div data-fade data-delay="1.05">
        <Btn href="/">Back to home</Btn>
      </div>
    </section>
  );
}
