import React from "react";
import { render } from "@testing-library/react";
import RootLayout from "@/app/layout";
import { montserrat, roboto } from "@/app/utils/fonts";

jest.mock("../app/components/Common/GoogleAnalytics", () => () => <div>Google Analytics</div>);
jest.mock("../app/components/Common/SchemaMarkup", () => () => <div>Schema Markup</div>);

describe("RootLayout", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <RootLayout>
        <h1>Hello World</h1>
      </RootLayout>
    );
    
    expect(getByText(/hello world/i)).toBeInTheDocument();
  });

  it("includes SchemaMarkup and GoogleAnalytics components", () => {
    const { getByText } = render(
      <RootLayout>
        <h1>Hello World</h1>
      </RootLayout>
    );

    expect(getByText("Schema Markup")).toBeInTheDocument();
    expect(getByText("Google Analytics")).toBeInTheDocument();
  });

  it("applies the correct classes to the body", () => {
    const { container } = render(
      <RootLayout>
        <h1>Hello World</h1>
      </RootLayout>
    );

  });

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <RootLayout>
        <h1>Hello World</h1>
      </RootLayout>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
