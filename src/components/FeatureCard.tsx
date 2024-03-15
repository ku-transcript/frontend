import React, { forwardRef, useEffect, useState } from "react";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

type Props = {
  css: string;
  imageSrc: any;
  title: string;
  description: string;
  link: string;
  linkText: string;
};

const FeatureCard = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (ref && "current" in ref) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(ref.current!); // Stop observing once visible
          }
        });
      });
      observer.observe(ref.current!);

      return () => {
        observer.disconnect(); // Cleanup observer on unmount
      };
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      className={
        props.css + ` fade-in-section ${isVisible ? "is-visible" : ""}`
      }
    >
      <Image
        src={props.imageSrc}
        alt={props.title}
        className="h-40 w-40 bg-gray-200 rounded-full mb-8"
        width={200}
        height={200}
      />
      <h2 className="text-2xl font-bold mb-2">{props.title}</h2>
      <p className="mb-6">{props.description}</p>
      <Button type="primary" className="mb-8">
        <Link href={props.link}>{props.linkText}</Link>
      </Button>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;
