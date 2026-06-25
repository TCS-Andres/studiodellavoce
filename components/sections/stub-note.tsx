import { Container } from "@/components/ui/container";

export function StubNote({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-card border border-dashed border-purple/25 bg-white p-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-pill bg-mist px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-purple font-display">
            In progress
          </span>
          <h2 className="mt-5 text-2xl text-ink">{heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
        </div>
      </Container>
    </section>
  );
}
