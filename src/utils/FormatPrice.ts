export function FormatPrice(price: number) {
  const value = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return value;
}
