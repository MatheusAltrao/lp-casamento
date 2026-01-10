interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <header className="space-y-4">
      <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-balance text-primary ">{title}</h2>
      <p className=" text-sm md:text-base text-muted-foreground  ">{description}</p>
    </header>
  );
}
