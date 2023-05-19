export async function getProducts() {
  const product = await fetch(
    "https://il3b62aiu5.execute-api.ap-southeast-2.amazonaws.com/Prod/products/"
  );

  const promotions = await fetch(
    "https://il3b62aiu5.execute-api.ap-southeast-2.amazonaws.com/Prod/promotions/"
  );

  const promotionJson = await promotions.json();

  const productJson = await product.json();

  productJson.items.forEach((product) => {
    const promotion = promotionJson.find(
      (promotion) => promotion.sku === product.sku
    );
    if (promotion) {
      product.promotionPrice = promotion.promotionPrice;
    }
  });

  return productJson;
}
