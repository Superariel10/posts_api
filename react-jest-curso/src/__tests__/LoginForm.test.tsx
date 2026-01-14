import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../components/LoginForm";

global.fetch = jest.fn();

describe("LoginForm (validación + fetch)", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  test("valida: username requerido", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    await user.type(screen.getByPlaceholderText("password"), "1234");
    await user.click(screen.getByRole("button", { name: "Entrar" }));
    expect(screen.getByRole("alert")).toHaveTextContent("username requerido");
    expect(fetch).not.toHaveBeenCalled();
  });

  test("valida: password mínimo 4", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    await user.type(screen.getByPlaceholderText("username"), "ana");
    await user.type(screen.getByPlaceholderText("password"), "12");
    await user.click(screen.getByRole("button", { name: "Entrar" }));

    expect(screen.getByRole("alert")).toHaveTextContent("password mínimo 4");
    expect(fetch).not.toHaveBeenCalled();
  });

  test("submit éxito llama onSuccess", async () => {
    const user = userEvent.setup();
    const onSuccess = jest.fn();

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    });

    render(<LoginForm onSuccess={onSuccess} />);

    await user.type(screen.getByPlaceholderText("username"), "  ana  ");
    await user.type(screen.getByPlaceholderText("password"), "1234");
  
    await user.click(screen.getByRole("button", { name: "Entrar" }));

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledTimes(1);
    });

    expect(fetch).toHaveBeenCalledTimes(1);

    const [url, options] = (fetch as jest.Mock).mock.calls[0];
    expect(url).toBe("/api/auth/login");
    expect(JSON.parse(options.body)).toEqual({ username: "ana", password: "1234" });
  });

  test("submit error muestra alert", async () => {
    const user = userEvent.setup();

    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      json: async () => ({})
    });

    render(<LoginForm />);

    await user.type(screen.getByPlaceholderText("username"), "ana");
    await user.type(screen.getByPlaceholderText("password"), "1234");
    await user.click(screen.getByRole("button", { name: "Entrar" }));
    expect(await screen.findByRole("alert")).toHaveTextContent("login falló");
  });
});