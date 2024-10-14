import React from "react";
import { ReactNode } from "react";

type AnchorSectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  ariaLabel: string;
};

const AnchorSection = ({ id, title, children, ariaLabel }: AnchorSectionProps) => {
    return (
      <section
        id={id}
        className="w-full pt-10"
        aria-label={ariaLabel}
      >
        <div className="xs:w-[94%] lg:w-[70%] mx-auto">
          <div>
            <h2
              className="text-center text-gray-700 text-2xl font-montserrat font-bold"
              id={ariaLabel}
            >
              {title}
            </h2>
          </div>
          {children}
        </div>
      </section>
    );
  }


export default AnchorSection;
