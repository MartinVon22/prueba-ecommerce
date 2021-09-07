export const toCurrencyFormat = (number, currency = "USD") => {
    const options = { style: "currency", currency };
    const numberFormat = new Intl.NumberFormat("en-US", options);
    
    // return `${new Intl.NumberFormat("en-IN").format(Number(number))}${currency}`;
    return numberFormat.format(number);
  };
  