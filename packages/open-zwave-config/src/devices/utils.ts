export const getDeviceName = ({ manufacturerName, productName }: { manufacturerName: string; productName: string }) =>
  `${manufacturerName}: ${productName}`;
