function getBit(num, i) {
  return (num & (1 << i)) !== 0;
}
