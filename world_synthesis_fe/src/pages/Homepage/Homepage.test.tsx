import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import Homepage from "./index";

describe("Homepage", () => {
  it("should render", () => {
    render(<Homepage />);
  });

  it("should render spinning globe", () => {
    render(<Homepage />);
    expect(screen.getByAltText("spinning globe earth")).toBeInTheDocument();
  });

  it("should have button called Mission", () => {
    render(<Homepage />);
    const missionButton = screen.getByText("Mission");

    expect(missionButton).toBeInTheDocument();
    expect(missionButton.nodeName).toBe("BUTTON");
  });

  it("should have button called Rules", () => {
    render(<Homepage />);
    const rulesButton = screen.getByText("Rules");

    expect(rulesButton).toBeInTheDocument();
    expect(rulesButton.nodeName).toBe("BUTTON");
  });

  it("should have a title called World Synthesis", () => {
    render(<Homepage />);
    const title = screen.getByText("World Synthesis");

    expect(title).toBeInTheDocument();
    expect(title.nodeName).toBe("H1");
  });

  it("should have a subtitle called Synthesizing a Better World Through Collaboration", () => {
    render(<Homepage />);
    const subtitle = screen.getByText(
      "Synthesizing a Better World Through Collaboration"
    );

    expect(subtitle).toBeInTheDocument();
    expect(subtitle.nodeName).toBe("H3");
  });

  it("should not render Mission Statement dialog by default", () => {
    render(<Homepage />);
    const missionStatementTitle = screen.queryByText("Mission Statement");

    expect(missionStatementTitle).not.toBeInTheDocument();
  });

  it("should open Mission Statement dialog when Mission button is clicked", async () => {
    render(<Homepage />);
    const missionButton = screen.getByText("Mission");

    act(() => {
      missionButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    const missionStatementTitle = await screen.findByText("Mission Statement");

    expect(missionStatementTitle).toBeInTheDocument();
  });

  it("should not render Rules and Regulations dialog by default", () => {
    render(<Homepage />);
    const rulesAndRegulationsTitle = screen.queryByText(
      "Rules and Regulations"
    );

    expect(rulesAndRegulationsTitle).not.toBeInTheDocument();
  });

  it("should open Rules and Regulations dialog when Rules button is clicked", async () => {
    render(<Homepage />);
    const rulesButton = screen.getByText("Rules");;

    act(() => {
      rulesButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    const rulesAndRegulationsTitle = await screen.findByText(
      "Rules and Regulations"
    );

    expect(rulesAndRegulationsTitle).toBeInTheDocument();
  });
});