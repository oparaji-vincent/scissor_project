import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PricingCard from "./PricingCard";

describe("PricingCard", () => {
  it("renders a list of features", () => {
    const features = ["Link Shortener", "QrCode Generation"];
    render(
      <PricingCard
        title="Basic"
        description="For beginners"
        price="$0/month"
        features={features}
      />
    );

    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });
it("has a title",()=>{
    const features = ["Link Shortener", "QrCode Generation"];
    render(
      <PricingCard
        title="Basic"
        description="For beginners"
        price="$0/month"
        features={features}
      />
    );
    expect(screen.getByText("Basic")).toBeInTheDocument();
})
});
