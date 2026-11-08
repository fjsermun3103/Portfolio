import type { ReactNode } from "react";

type WindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  id?: string;
};

export default function Window({ title, children, className = "", bodyClassName = "", id }: WindowProps) {
  return (
    <section id={id} className={`window ${className}`}>
      <header className="window__bar">
        <span className="window__title">{title}</span>
        <span className="window__controls" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </header>
      <div className={`window__body ${bodyClassName}`}>{children}</div>
    </section>
  );
}
